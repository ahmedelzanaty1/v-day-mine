window.addEventListener('load', () => {
    launchConfetti();
});

function launchConfetti() {
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
}

const trollBtn = document.getElementById('troll-btn');
const trollMsg = document.getElementById('troll-msg');
let escapeCount = 0;

trollBtn.addEventListener('mouseover', () => {
    escapeCount++;
    
    // يهرب 10 مرات
    if (escapeCount < 10) {
        trollMsg.innerText = "Run after me 😂 Catch me if you can 😈";
        trollBtn.style.position = 'fixed';
        trollBtn.style.left = Math.random() * 80 + 'vw';
        trollBtn.style.top = Math.random() * 80 + 'vh';
    } 
    else if (escapeCount === 10) {
        trollMsg.innerText = "You're close… I'm an old man 😭";
        trollBtn.style.left = '50%';
        trollBtn.style.top = '70%';
        trollBtn.style.transform = 'translateX(-50%)';
    } 
    else {
        trollMsg.innerText = "Okay you win 😂 click me";
        trollBtn.innerText = "Click for a surprise! ❤️";
        trollBtn.style.position = 'relative';
        trollBtn.style.left = '0';
        trollBtn.style.top = '0';
        trollBtn.style.transform = 'none';
        trollBtn.onclick = () => window.location.href = 'video.html';
    }
});