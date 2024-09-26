document.addEventListener('DOMContentLoaded', () => {
    const mainVideo = document.getElementById('video');
    const smallVideos = document.querySelectorAll('.vid-s');

    // Función para intercambiar videos
    function swapVideos(smallVideo) {
        // Guardar temporalmente la fuente del video principal
        const mainVideoSrc = mainVideo.querySelector('source').src;

        // Cambiar la fuente del video principal por la del video pequeño
        mainVideo.querySelector('source').src = smallVideo.querySelector('source').src;
        
        // Cambiar la fuente del video pequeño por la del video principal
        smallVideo.querySelector('source').src = mainVideoSrc;

        // Recargar los videos para aplicar los cambios
        mainVideo.load();
        smallVideo.load();

        // Reproducir el video principal después de intercambiar
        mainVideo.play();
    }

    // Agregar evento para que al pasar el cursor se intercambien los videos
    smallVideos.forEach(video => {
        video.addEventListener('mouseenter', () => swapVideos(video));
    });
});
