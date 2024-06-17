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
  "We went to the beach! It was so much fun, but the water was incredibly cold. On the drive back it rained really hard, so from then on I will always drive Aashni around. These were the flowers I got for Aashni when I was able to see her again in New York since sooooo long!",
  //page 5
  "We had so much fun in New York! We walked around the entire city, got bagels for breakfast, pizza and garlic rolls for a little lunch, and then a fancy dinner at Tao's. Our next date that summer was in New Jersey when we went to the New Jersey State Planetarium.",
  //page 6
  "First flowers back in Williamsburg for welcome back and FDOC! The other flowers are for Aashni before she left for Grace Hopper.",
  //page 7
  "Some gifts for Aashni after fall break. Such a long time to go without my sweet heart. We went to the pumpkin farm Pumpkinville to pick pumpkins and go on a hay ride!",
  //page 8
  "Aashni got a job offer for Capital One! A real big job so she got some nice flowers to match and celebrate! We soon had our sixth month anniversary. The happiest six months of my life! On the weekend on we did a at-home spa day",
  "Syndicate Performance! It was so amazing, I never saw any better dancing than Aashni's. Aashni was then also awarded with the PBK award for being the smartest ever!",
  "The flowers I had to get for the smartest girl!",
  "My mom came down for dinner and Jamestown christmas event. Aashni was with us and it was so much fun! The third trolls movie came out and we just HAD to go see it.",
  "During winter break Aashni and I wrote letters to each other! Her's got lost in the mail for a bit, but it did finally come",
  "Aashni's postcard was all the way from the Grand Canyon. Mine is from the gardens of Winterthur",
  "Some flowers for Aashni's last FDOC!",
  "Aashni's message for me in her postcard!",
  "After begging Aashni to go pottery painting for sooo long we finally went! She painted a beautiful little plate for jewelry and I did a little vase. The lady there liked our pottery equally. We also went ice skating at the little Williamsburg rink they put up!",
  "Valentines Day! It was on a weekday and we still had to go to kevin's class. But after we got ready to go out and eat dinner at PF Changs. The lettuce wraps were amazing and Aashni looked gorgeous!",
  "I got her little lego figures that look like us, a box of chocolates, a note and the flowers on the last page!",
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
