let current =1;

const changeSlides = () => {
    const slideList =
    document.querySelectorAll('.slide')

const slides = Array.from(slideList);

slides.forEach(slide =>{
    if(slide.classList[1].split("-")[1]*1
     === current){
        slide.style.cssText = 'visiablity:visible; opacity:1';    
   
} else {
    slide.style.cssText = 'visiablity:visible; opacity:0';
}
});
};

// making the play button work
const playPause =() => {
    if(playPauseBool){
       interval = setInterval(() =>{
            current++;
            changeSlides();
        },3000);
      
    playPauseBool = false;
}else{
    clearInterval(interval);
    playPauseBool =true;
}
playPauseBtn();
};

//  creating the pause button

const playPauseBtn = ()=> {
    const icon = document.querySelector('.play-pause i');

    const cls = icon.classList[1]
    if (cls === 'fa-play'){
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
    }else{
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
    }
};


// make play button work
document.querySelector('.play-pause')
.addEventListener('click',()=>{
    playPause();
});

// calling the function
changeSlides();
playPause();