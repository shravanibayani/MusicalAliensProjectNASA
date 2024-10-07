const btn_play = document.querySelector(".btn-play");

if (btn_play) {
    btn_play.addEventListener("click", () => {
        transition_link();
        const videoContainer = document.querySelector('.video-container');

        setTimeout(() => {
            if (videoContainer) {
                videoContainer.innerHTML = `
                    <video autoplay id="background-video">
                        <source src="Nasa_intro_(1).mp4" type="video/mp4">
                    </video>
                `;

                document.body.classList.remove('fade-out');
                const nasaVideo = document.querySelector('#background-video');

                if (nasaVideo) {
                    nasaVideo.addEventListener('ended', () => {
                        transition_link();
                        window.location.href = 'index4.html'; 
                    });
                }
            }
        }, 500);
    });
}

// Transition function
function transition_link() {
    document.body.classList.add('fade-out');
    setTimeout(() => {
        document.body.classList.remove('fade-out');
    }, 1000);
}

// const smallVideoContainer = document.querySelector('.small-video-container');
// smallVideoContainer.classList.add("vertical");
// if (smallVideoContainer) {
//     smallVideoContainer.addEventListener('click', function() {
//         const mainBlock = document.querySelector('#main');

//         if (this.classList.contains('center-video')) {
//             this.classList.remove('center-video');
//             this.classList.add('hide-circles');
//             smallVideoContainer.classList.add("vertical");
            
//             if (mainBlock) {
//                 mainBlock.classList.remove('hidden');
//             }
//         } else {
//             this.classList.add('center-video');
//             this.classList.remove('hide-circles');
//             this.classList.remove('vertical');
            
//             if (mainBlock) {
//                 mainBlock.classList.add('hidden');
//             }
//         }
//     });
// }
