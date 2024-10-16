window.addEventListener('load', function() {
    const overlay = document.getElementById('overlay');
    setTimeout(() => {
        overlay.classList.add('hidden'); // 延迟 1 秒后隐藏覆盖层
    }, 1000); // 延迟时间可根据需要调整
});

