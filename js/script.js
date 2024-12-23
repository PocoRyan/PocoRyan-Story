const canvas = document.getElementById('waveCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = 150; // 与 CSS 中的高度相同

let waveLength = 0.02; // 波长
let waveAmplitude = 20; // 波幅
let waveSpeed = 0.05; // 波速
let offset = 0; // 用于动画的偏移量

function drawWave() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 清除画布

    ctx.fillStyle = 'white'; // 波浪颜色
    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin(x * waveLength + offset) * waveAmplitude;
        ctx.lineTo(x, y);
    }

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();

    offset += waveSpeed; // 更新偏移量，实现波浪动画

    requestAnimationFrame(drawWave); // 循环调用
}

drawWave(); // 开始绘制波浪

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth; // 窗口调整时更新画布宽度
});

const img = document.querySelector('.draggable');
let isDragging = false;
let offsetX, offsetY;

img.addEventListener('mousedown',(e)=>{
    isDragging = true;
    offsetX = e.clientX - img.getBoundingClientRect().left;
    offsetY = e.clientY - img.getBoundingClientRect().top;
});

document.addEventListener('mousemove',(e)=>{
    if (isDragging){
        img.style.left = (e.clientX - offsetX) + 'px';
        img.style.top = (e.clientY - offsetY) + 'px';
    }
});

document.addEventListener('mouseup',()=>{
    isDragging = false;
});

document.addEventListener("DOMContentLoaded",function() {
    const section = document.querySelectorAll('.story-section');

    const loadBackgroundImage = (section) => {
        const bgImage = section.id;
        section.style.backgroundImage = 'url(${bgImage})';
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                loadBackgroundImage(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });

    section.forEach(section => {
        observer.observer(section);
    });
});
