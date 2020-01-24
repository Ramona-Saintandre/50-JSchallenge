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
const playPause =() =>{
    setInterval(() =>{
        current++;
        changeSlides()
    },3000);
}

// calling the function
changeSlides();
playPause();