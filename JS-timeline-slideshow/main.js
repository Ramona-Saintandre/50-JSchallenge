let current = 1;

const changeSlides = () => {
    const slideList =
        document.querySelectorAll('.slide')

    const slides = Array.from(slideList);

    slides.forEach(slide => {
        if (slide.classList[1].split("-")[1] * 1 ===
            current) {
            slide.style.cssText = 'visiablity:visible; opacity:1';

        } else {
            slide.style.cssText = 'visiablity:visible; opacity:0';
        }
    });
};

// making the play button work
const arrowVisibility = () => {
    const arrows = document.querySelectorAll(".control");
    Array.from(arrows).forEach(arrow => {
        if (!playPauseBool) {
            arrow.classList.remove("arrows.visibility");

        } else {
            arrow.classList.remove("arrows-visibility");
        }
    })
};
//  creating the pause button

const playPauseBtn = () => {
    const i = document.querySelector(".play-pause i");

    const cList = i.classList[1];

    if (cList === "fa-play") {
        i.classList.remove("fa-play");
        i.classList.add("fa-pause");
    } else {
        i.classList.remove("fa-pause");
        i.classList.add("fa-play");
    }
};

const playPause = () => {
    if (playPauseBool) {
        interval = setInterval(() => {
            current++;
            changeSlides();
        }, 3000);
        playPauseBool = false;
    } else {
        clearInterval(interval);
        playPauseBool = true;
    }
    arrowVisibility();
    playPauseBtn();
};


// make play button work
document.querySelector("play-pause")
    .addEventListener('click', () => {
        playPause();
    });

// calling the function
changeSlides();
playPause();