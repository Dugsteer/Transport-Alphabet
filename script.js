//CHANGE CARDS
const count = document.getElementById("count");
let imageArt = document.getElementById('image-art');
let imageText = document.getElementById('image-text');

var imageList = [
  "aeroplane.jpg",
  "bike.jpg",
  "car.jpg",
  "dog-sled.jpg",
  "firetruck.jpg",
  "gondola.jpg",
  "helicopter.jpg",
  "icebreaker.jpg",
  "jetski.jpg",
  "kayak.jpg",
  "limousine.jpg",
  "motorbike.jpg",
  "narrowboat.jpg",
  "offroad-vehicle.jpg",
  "punt.jpg",
  "quad-bike.jpg",
  "rocket.jpg",
  "sailboat.jpg",
  "train.jpg",
  "unicycle.jpg",
  "van.jpg",
  "wagon.jpg",
  "X-wing.jpg",
  "Yacht.jpg",
  "zepellin.jpg",
];

let y = imageText.innerHTML;
let z = y.concat(".jpg");
let x = imageList.indexOf(z);


function goForwards() {
  if (x < imageList.length - 1) {
    x++;
    imageArt.src =  `/img/${imageList[x]}`;
   imageText.textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    imageArt.src = ` /img/${imageList[imageList.length - 1]}`;
    imageText.textContent = `${imageList[imageList.length - 1].slice(0, -4)}`;
    count.innerHTML = `${imageList.length}/${imageList.length}`;
    x = 0;
    x = imageList.length -1;
    return x;
  }
}

function goBackwards() {
  if (x > 0) {
    x--;
    imageArt.src =  `/img/${imageList[x]}`;
    imageText.textContent = `${imageList[x].slice(0, -4)}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    imageArt.src = ` /img/${imageList[0]}`;
    imageText.textContent = `${imageList[0].slice(0, -4)}`;
    count.innerHTML = `${1}/${imageList.length}`;
    x = 0;
    return x;
  }
}

goForwards();
goBackwards();

