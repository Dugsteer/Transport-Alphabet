//CHANGE CARDS
const count = document.getElementById("count");

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

const captionText = document.getElementById('slideshow-text');
let y = captionText.innerHTML;
let z = y.concat(".jpg");
let x = imageList.indexOf(z);


function goForwards() {
  if (x < imageList.length - 1) {
    x++;
    document.getElementById("slideshow-art").style.backgroundImage = ` url(/img/${imageList[x]})`;
    document.getElementById("slideshow-text").textContent = `${imageList[
      x
    ].slice(0, -4)}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    document.getElementById("slideshow-art").style.background= ` url(/img/${
      imageList[imageList.length - 1]
    })`;
    document.getElementById("slideshow").textContent = `${imageList[
      imageList.length - 1
    ].slice(0, -4)}`;
    count.innerHTML = `${imageList.length}/${imageList.length}`;
    x = 0;
    x = imageList.length;
    return x;
  }
}

function goBackwards() {
  if (x > 0) {
    x--;
    document.getElementById("slideshow-art").style.background = `url(/img/${imageList[x]})`;
    document.getElementById("slideshow-text").textContent = `${imageList[
      x
    ].slice(0, -4)}`;
    count.innerHTML = `${x + 1}/${imageList.length}`;
    return x;
  } else {
    document.getElementById("slideshow-art").style.background = ` url(/img/${imageList[0]})`;
    document.getElementById(
      "slideshow-text"
    ).textContent = `${imageList[0].slice(0, -4)}`;
    count.innerHTML = `${1}/${imageList.length}`;
    x = 0;
    return x;
  }
}

goForwards();
goBackwards();

