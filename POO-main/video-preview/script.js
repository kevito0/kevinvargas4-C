document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');

    const playVideo = () => {
        video.play().catch(error => {
            console.error("Error playing video:", error);
        });
    };

    const pauseVideo = () => {
        video.pause();
    };

    const videoContainer = document.querySelector('.col-l');

    if (videoContainer) {
        videoContainer.addEventListener('mouseenter', playVideo);
        videoContainer.addEventListener('mouseleave', pauseVideo);
    } else {
        console.error("Video container not found.");
    }
});
