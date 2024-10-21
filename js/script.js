document.addEventListener("DOMContentLoaded", function() {
    // 获取遮罩层
    const overlay = document.getElementById('overlay');

    // 遮罩层在3秒后逐渐隐藏
    setTimeout(() => {
        overlay.classList.add('hidden');
    }, 3000);  // 3秒后隐藏
});

