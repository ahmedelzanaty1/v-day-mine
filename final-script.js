const text = `From the first laugh… 
to every little moment… 
you became my favorite chaos ❤️

You are cute… 
annoying… 
funny… 
and my Sarsora forever 😌

— Ahmed elzanaty "ahmooooooood "`;

let i = 0;
const el = document.getElementById('romantic-text');

function type() {
    if (i < text.length) {
        // تحويل النيو لاين لـ <br> عشان يظهر التنسيق
        if (text.charAt(i) === '\n') {
            el.innerHTML += '<br>';
        } else {
            el.innerHTML += text.charAt(i);
        }
        i++;
        setTimeout(type, 50);
    }
}

window.onload = () => {
    type();
    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });
};