document.getElementById('trustMeButton').addEventListener('click', function() {
    const modal = document.getElementById('myModal');
    const video = document.getElementById('video');
    const audio = document.getElementById('audio');
    
    modal.style.display = 'block';
    video.play();
    audio.play();
});

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    const modal = document.getElementById('myModal');
    const video = document.getElementById('video');
    const audio = document.getElementById('audio');
    
    modal.style.display = 'none';
    video.pause();
    audio.pause();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        const video = document.getElementById('video');
        const audio = document.getElementById('audio');
        
        modal.style.display = 'none';
        video.pause();
        audio.pause();
    }
}
