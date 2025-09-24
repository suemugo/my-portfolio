document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e=> {
        const rect = card.getBoundingClientRect();
        // update css var for the spotlight effect
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
    });

});

const Video1 = document.getElementById('Video1');
const Video2 = document.getElementById('Video2');
const Video3 = document.getElementById('Video3');

const videoList = [Video1, Video2, Video3];

videoList.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play();
    });
    video.addEventListener('mouseleave', () => {
        video.pause();
    });
});