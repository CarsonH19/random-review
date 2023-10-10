let reviewsArray = [
  {
      imageUrl: "https://example.com/image1.jpg",
      name: "John Doe",
      jobTitle: "Software Engineer",
      review: "John is a highly skilled engineer and a great team player. He consistently delivers high-quality code and is always willing to help others."
  },
  {
      imageUrl: "https://example.com/image2.jpg",
      name: "Jane Smith",
      jobTitle: "UX Designer",
      review: "Jane has a keen eye for design and a deep understanding of user experience. Her contributions have greatly improved the usability of our products."
  },
  {
      imageUrl: "https://example.com/image3.jpg",
      name: "Sam Brown",
      jobTitle: "Marketing Manager",
      review: "Sam is an exceptional marketing manager. His innovative strategies have significantly increased our brand visibility and customer engagement."
  },
  {
      imageUrl: "https://example.com/image4.jpg",
      name: "Emily Davis",
      jobTitle: "Data Analyst",
      review: "Emily has a strong analytical mindset and is adept at uncovering valuable insights from data. Her work has been crucial in shaping our business decisions."
  },
  {
      imageUrl: "https://example.com/image5.jpg",
      name: "Michael Johnson",
      jobTitle: "Product Manager",
      review: "Michael is a highly organized and strategic thinker. His leadership has been instrumental in guiding our product development efforts towards success."
  }
];


// Variables
let index = 0;
let currentReview = reviewsArray[index];
const modalImage = document.querySelector('.image');
const modalName = document.querySelector('.name');
const modalJob = document.querySelector('.job');
const modalReview = document.querySelector('.review');
const modalLeftArrow = document.querySelector('.left-btn');
const modalRightArrow = document.querySelector('.right-btn');
const modalRandomButton = document.querySelector('.random-btn');



// Functions
function render() {
  modalImage.src = currentReview.imageUrl;
  modalName.textContent = currentReview.name;
  modalJob.textContent = currentReview.jobTitle;
  modalReview.textContent = currentReview.review;
}

function randomReview() {
  let randomIndex = Math.floor(Math.random() * 4);
  currentReview = reviewsArray[randomIndex];
  render();
}

function changeRight() {
  if (index !== 4) {
    index++;
  } else {
    index = 0;
  }
  render();
}

function changeLeft() {
  if (index !== 0) {
    index--;
  } else {
    index = 4;
  }
  render();
}


// Event Listeners
modalRandomButton.addEventListener('click', randomReview);
modalLeftArrow.addEventListener('click', changeLeft);
modalRightArrow.addEventListener('click', changeRight);

render();