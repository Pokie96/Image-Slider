import './style.css';

const images = document.querySelectorAll('.image');
const previousButton = document.querySelector('#left-slide-arrow');
const nextButton = document.querySelector('#right-slide-arrow');

let imageIndex = 0;

function nextImage(){
    let previousImage = images[imageIndex];

    if(imageIndex === images.length - 1){
        imageIndex = 0;
    } else{
        imageIndex++;
    }

    let currentImage = images[imageIndex];

    previousImage.removeAttribute("data-active");
    currentImage.setAttribute("data-active", "");
}

function previousImage(){
    let previousImage = images[imageIndex];
    
    if(imageIndex === 0){
        imageIndex = images.length - 1;
    } else{
        imageIndex--;
    }
    
    let currentImage = images[imageIndex];

    previousImage.removeAttribute("data-active");
    currentImage.setAttribute("data-active", "");
}

previousButton.addEventListener('click', previousImage);

nextButton.addEventListener('click', nextImage);