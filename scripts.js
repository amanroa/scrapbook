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
  //page 1
  "Our First Date!!!!",
  //page 2
  "We met outside of Swem on the patio for our coloring date. I was very nervous to meet the most gorgeous girl ever! Aashni's is on the left and mine is on the right.",
  //page 3
  "This date was wonderful! It was going so well that when it started to rain we went inside to keep talking and coloring. When we had to leave it was a full on downpour and we had to run back to Sadler. And all I knew at the end was that I had to have another date with her! Which we did! Our second date was boba at secret garden and then walking around Williamsburg. Our third date was going to see Guardians of the Galaxy 3",
  //page 4
  "We went to the beach! It was so much fun, but the water was incredibly cold. Because I was with Aashni. On the drive back it rained really hard, so from then on I will always drive Aashni around",
  //page 5
  "Message for image 4",
  //page 6
  "Message for image 5",
  //page 7
  "Message for image 6",
  //page 8
  "Message for image 7",
  "Message for image 8",
  "Message for image 9",
  "Message for image 10",
  "Message for image 11",
  "Message for image 12",
  "Message for image 13",
  "Message for image 14",
  "Message for image 15",
  "Message for image 16",
  "Message for image 17",
  "Message for image 18",
  "Message for image 19",
  "Message for image 20",
  "Message for image 21",
  "Message for image 22",
  "Message for image 23",
  "Message for image 24",
  "Message for image 25"
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
