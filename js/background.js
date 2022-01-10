const images = ["background.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("#bgImage");

bgImage.style = `height:100vh; background-repeat : np-repeat; background-size: cover; background-image: url(img/${chosenImage})`;
