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
  'images/Business-images-25.jpg',
  'images/Business-images-26.jpg',
  'images/Business-images-27.jpg',
  'images/Business-images-28.jpg'
];

const messages = [
  //page 1
  "Our First Date!!!!",
  //page 2
  "We met outside of Swem on the patio for our coloring date. I was very nervous to meet the most gorgeous girl ever! Aashni's is on the left and mine is on the right.",
  //page 3
  "This first date was wonderful! It was going so well that when it started to rain we went inside to keep talking and coloring. When we had to leave it was a full on downpour and we had to run back to Sadler. And all I knew at the end was that I had to have another date with her! Which we did! Our second date was boba at secret garden and then walking around Williamsburg. Our third date was going to see Guardians of the Galaxy 3",
  //page 4
  "We went to the beach! It was so much fun, but the water was incredibly cold. On the drive back it rained really hard, so from then on I will always drive Aashni around. These were the flowers I got for Aashni when I was able to see her again in New York since sooooo long!",
  //page 5
  "We had so much fun in New York! We walked around the entire city, got bagels for breakfast, pizza and garlic rolls for a little lunch, and then a fancy dinner at Tao's. Our next date that summer was in New Jersey when we went to the New Jersey State Planetarium. It was the first time that I was ever in a planetarium, but I was too distracted by the stars in Aashni's eyes.",
  //page 6
  "First flowers back in Williamsburg for welcome back and FDOC! The other flowers are for Aashni before she left for Grace Hopper, because I was going to miss her so much! Also, as good luck before she went looking for a job!",
  //page 7
  "Some wrapping from gifts I got for Aashni after fall break. Such a long time to go without my sweet heart. We went to the pumpkin farm Pumpkinville to pick pumpkins and go on a hay ride! I can't wait to do this every year together.",
  //page 8
  "Aashni got a job offer for Capital One! A big job so I got her some nice flowers to match capital one colors and celebrate! We soon had our sixth month anniversary. The happiest six months of my life! I got her smooches, she got me fancy cologne and on the weekend on we did a at-home spa day",
  // page 9
  "Syndicate Performance! It was so amazing, I never saw any better dancing than Aashni's. Aashni was then also awarded with joining PBK for being the smartest ever! She is just so amazing",
  // page 10
  "The flowers I had to get for the smartest girl!",
  // page 11
  "Aashni, my mom and I went out for dinner and a Jamestown christmas event. The third trolls movie came out and we just HAD to go see it.",
  // page 12
  "During winter break Aashni and I wrote letters to each other! Her's got lost in the mail for a bit, but it did finally come so my excitement was even greater. It made me so happy and I really enjoyed exchanging love letters.",
  // page 13
  "Aashni's postcard was all the way from the Grand Canyon. Mine is from the gardens at Winterthur. I hope I can take her there one day and that we both can go on a vacation to the grand canyon, or anywhere!",
  // page 14
  "Some flowers for Aashni's last FDOC! To celebrate so many years of hard work, and one last semester of classes!",
  // page 15
  "Aashni's message for me in her postcard! Just so sweet",
  // page 16
  "After begging Aashni to go pottery painting for sooo long we finally went! She painted a beautiful little plate for jewelry and I did a little vase. We also went ice skating at the little Williamsburg rink they put up!",
  // page 17
  "Valentines Day! It was on a weekday and we still had to go to kevin's class. But after we got ready to go out and eat dinner at PF Changs. The lettuce wraps were amazingly free and Aashni looked gorgeous!",
  // page 18
  "I got her little lego figures that look like us, a box of chocolates, a note and the flowers on the last page! She got me a super thoughtful coupon book!",
  // page 19
  "It had been a little while since I last got Aashni flowers, and it doesn't have to be a special event to get her flowers. She deserves them all the time! I turned 21 and Aashni took me out to bars once I finally got my wallet back. March was roaring like a lion but we still went out and had so much fun!",
  // page 20
  "To celebrate 11 months and easter we got breakfast/brunch at first watch! She got french toast, I got pancakes and we shared homefries with a fancy juice. We may or may not have stolen a little ramekin. Also some nice spring flowers for the girl prettier than spring itself!",
  // page 21
  "On the day of the Solar Eclipse we got out of Kevin's class early and managed to grab the last of the solar glasses. It was incredible and there won't be another one for 20 years. But Aashni and I will go to watch that one as well! We also went on a park date where we swang on the swings, went on a zipline we weren't allowed on, and spun on a very fast turtle and leaf",
  // page 22
  "We made Stuffles! For fillings we had chocolate chips, biscoff cookie butter, strawberries, bananas and cheese for savory ones. Syndicate performance!!! Aashni choreographed her own entire dance! The best of the night, she did it in heels making it even harder",
  // page 23
  "I had to outdo myself with flowers for this syndicate showcase. Not only because last time my flowers were dissed, but this was her last performance. The best of the all! We had our one year anniversary!!!! We woke up super early to watch the sunrise at Yorktown beach. When we got there we watched the sunrise, opened presents and skipped shells/rocks. I got her some lego flowers, a lighter and some crocheted peas! She got me a fancy candle, a bracelet and some dumpling shakers! It was so lovely, and I cant wait for the next year, and the next, and the next and for forever",
  // page 24
  "Anniversary flowers! Aashni and I celebrated LDOC together! We went out to ring the bell, get free shirts, tacobell, have some drinks at the beer garden and run through a bouncy obstacle course",
  // page 25
  "Senior Dance! I usually don't enjoy dances, but being there with Aashni made it not only worth it but so much fun! We were inthe sunken garden, so the rain from sometime earlier made it more of a muddy swamp pit which was funny. Luckily I was still able to find my love despite so many people being there. We also took some photo booth pictures",
  // page 26
  "The start of graduation! This was the Khatalampay ceremony where she got a fancy stole. The computer science graduation was in the fancy PBK theatre and I had a wonderful conversation with dada. ",
  // page 27
  "Ooohhh man, she's graduating!!! I am so amazingly proud of Aashni graduating with not just one but majors and the world's highest GPA ever!",
  // page 28
  "Some special graduations flowers for the most amazing WM graduate and girlfriend there ever lived. Remy and Cruella DeVil can't even compare!",
  // page 29
  "She was not just in the book once. Not just twice. But THREE whole times!!! Absolutly so amazing and I am so lucky that I was able to stay for all of these ceremonies. I also got her some fancy gifts to celebrate this huge accomplishment!"
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
