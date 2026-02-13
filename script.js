const noMessages = [
    "No 😏",
    "Are you sure Sarsora? 🤔",
    "Pookie please… 🥺",
    "I'll steal your sister Sahar 😂",
    "I'm kidnapping Roaa 😈",
    "Okay now I'm taking BOTH 😂",
    "Last chance 😭",
    "You can't escape Ahmed 😏"
];

let noClickCount = 0;
let runawayEnabled = false;
let musicPlaying = false;

const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const music = document.getElementById('bg-music');

// حل مشكلة الموسيقى: تشتغل مع أول ضغطة في الصفحة
document.body.addEventListener('click', () => {
    if (!musicPlaying) {
        music.play().catch(e => console.log("Audio play failed"));
        musicPlaying = true;
    }
}, { once: true });

function toggleMusic() {
    if (music.paused) {
        music.play();
        document.getElementById('music-toggle').textContent = '🔊';
    } else {
        music.pause();
        document.getElementById('music-toggle').textContent = '🔇';
    }
}

function handleYesClick() {
    // لو لسه الـ No مابدأش يهرب.. اظهر رسائل تريقة
    if (!runawayEnabled) {
        const teaseMessages = [
            "Nice try Sarsora 😏 press No first",
            "Not that easy! 😂",
            "Don't be shy, try the No button 😈",
            "I know you love me, but try No first 😌"
        ];
        
        // اختيار رسالة عشوائية من القائمة
        const randomMsg = teaseMessages[Math.floor(Math.random() * teaseMessages.length)];
        showToast(randomMsg);
        
        // ممكن كمان نكبر زرار الـ No شوية عشان نغريها تدوس عليه
        const noBtn = document.getElementById('no-btn');
        const currentSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        noBtn.style.fontSize = `${currentSize + 2}px`;
        
        return; // اخرج من الدالة وما تنقلش الصفحة
    }

    // لو الـ No بدأ يهرب فعلاً.. مبروك تقدري تدوسي Yes
    window.location.href = 'yes.html';
}

function handleNoClick() {
    noClickCount++;
    noBtn.textContent = noMessages[Math.min(noClickCount, noMessages.length - 1)];

    // تكبير زرار Yes
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize + 10}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).paddingTop) + 5}px ${parseFloat(window.getComputedStyle(yesBtn).paddingLeft) + 10}px`;

    // تفعيل الهروب بعد 4 ضغطات
    if (noClickCount >= 4 && !runawayEnabled) {
        runawayEnabled = true;
        enableRunaway();
        showToast("Now YES is unlocked 😈");
    }
}

function enableRunaway() {
    noBtn.style.position = 'fixed';
    noBtn.addEventListener('mouseover', runAway);
}

function runAway() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

function showToast(msg) {
    const t = document.getElementById('tease-toast');
    t.innerText = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
}