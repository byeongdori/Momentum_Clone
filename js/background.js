const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#bgImage");

bgImage.style = `height:100vh; background-repeat : np-repeat; background-size: cover; background-image: url(img/${chosenImage})`;
