let slideIndex = 0;
let rotations = [];
const images = [
  'images/Business-images-0.jpg',
  'images/Business-images-1.jpg',
  'images/Business-images-2.jpg',
  'images/Business-images-3.jpg',
  'images/Business-images-4.jpg',
  'images/Business-images-5.jpg',
  'images/Business-images-6.jpg',
  'images/Business-images-7.jpg',
  'images/Business-images-8.jpg',
  'images/Business-images-9.jpg',
  'images/Business-images-10.jpg',
  'images/Business-images-11.jpg',
  'images/Business-images-12.jpg',
  'images/Business-images-13.jpg',
  'images/Business-images-14.jpg',
  'images/Business-images-15.jpg',
  'images/Business-images-16.jpg',
  'images/Business-images-17.jpg',
  'images/Business-images-18.jpg',
  'images/Business-images-19.jpg',
  'images/Business-images-20.jpg',
  'images/Business-images-21.jpg',
  'images/Business-images-22.jpg',
  'images/Business-images-23.jpg',
  'images/Business-images-24.jpg',
  'images/Business-images-25.jpg'
];

const messages = [
  'First Date!!!!',
  'We met outside of Swem on the patio for our coloring date. Sweet pea thought we were going to do homework until I pulled out our coloring sheets.
  I was extremely anxious because I wanted to make a good impression on the most gorgeous girl I had ever seen',
  'Message for image 2',
  'Message for image 3',
  'Message for image 4',
  'Message for image 5',
  'Message for image 6',
  'Message for image 7',
  'Message for image 8',
  'Message for image 9',
  'Message for image 10',
  'Message for image 11',
  'Message for image 12',
  'Message for image 13',
  'Message for image 14',
  'Message for image 15',
  'Message for image 16',
  'Message for image 17',
  'Message for image 18',
  'Message for image 19',
  'Message for image 20',
  'Message for image 21',
  'Message for image 22',
  'Message for image 23',
  'Message for image 24',
  'Message for image 25'
];

// Initialize slideshow and rotation data
function initSlideshow() {
    const slideshowContainer = document.getElementById('slideshow-container');
    images.forEach((image, index) => {
        const slideDiv = document.createElement('div');
        slideDiv.classList.add('slides', 'fade');
        
        const imgElement = document.createElement('img');
        imgElement.src = image;
        imgElement.style.width = '80%';
        imgElement.style.height = 'auto'; // Maintain aspect ratio
        imgElement.id = `image${index + 1}`;
        
        slideDiv.appendChild(imgElement);
        slideshowContainer.appendChild(slideDiv);
      
        // Initialize rotation for each image
        rotations.push(0);
    });
    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slides');
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
    document.getElementById('message-container').textContent = messages[slideIndex];
}

function rotateImage(degrees) {
    const currentImage = document.querySelector(`.slides:nth-child(${slideIndex + 1}) img`);
    rotations[slideIndex] += degrees;
    currentImage.style.transform = `rotate(${rotations[slideIndex]}deg)`;
}

// Initialize the slideshow on page load
document.addEventListener('DOMContentLoaded', initSlideshow);
