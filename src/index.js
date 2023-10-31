import './style.css';

const images = document.querySelectorAll('.image');
const previousButton = document.querySelector('#left-slide-arrow');
const nextButton = document.querySelector('#right-slide-arrow');
const indexContainer = document.querySelector('.canvas-footer');
const indexButtons = [];

let imageIndex = 0;

let autoSlide = setInterval(nextImage, 10000);

function nextImage(){
    let previousImage = images[imageIndex];

    if(imageIndex === images.length - 1){
        imageIndex = 0;
    } else{
        imageIndex++;
    }

    let currentImage = images[imageIndex];

    removeAllActiveIndexButtons();

    setActiveIndexButton(indexButtons[imageIndex]);

    previousImage.removeAttribute("data-active");
    currentImage.setAttribute("data-active", "");

    clearInterval(autoSlide);
    autoSlide = setInterval(nextImage, 10000);
}

function previousImage(){
    let previousImage = images[imageIndex];
    
    if(imageIndex === 0){
        imageIndex = images.length - 1;
    } else{
        imageIndex--;
    }
    
    let currentImage = images[imageIndex];

    removeAllActiveIndexButtons();

    setActiveIndexButton(indexButtons[imageIndex]);

    previousImage.removeAttribute("data-active");
    currentImage.setAttribute("data-active", "");

    clearInterval(autoSlide);
    autoSlide = setInterval(nextImage, 10000);
}

previousButton.addEventListener('click', previousImage);

nextButton.addEventListener('click', nextImage);

function createIndexButtons(){
    for(let i = 0; i < images.length; i++){
        let indexButton = document.createElement('button');
        indexButton.className = 'image-index-btn';
        indexButton.innerText = `${i + 1}`;

        indexButton.addEventListener('click', () => {
            removeAllActiveIndexButtons();
            setActiveIndexButton(indexButton);
            removeAllActiveImages();
            images[i].setAttribute('data-active', '');
            imageIndex = i;

            clearInterval(autoSlide);
            autoSlide = setInterval(nextImage, 10000);
        })

        indexContainer.appendChild(indexButton);
        indexButtons.push(indexButton);
    }
    setActiveIndexButton(indexContainer.firstChild);
}

function setActiveIndexButton(indexButton){
    indexButton.setAttribute("data-active", "");
}

function removeAllActiveIndexButtons(){
    const indexButtons = document.querySelectorAll('.image-index-btn');
    for(let button of indexButtons){
        button.removeAttribute('data-active');
    }
}

function removeAllActiveImages(){
    for(let image of images){
        image.removeAttribute('data-active');
    }
}

createIndexButtons();


