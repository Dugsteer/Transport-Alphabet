// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const blue = window.matchMedia("(max-width: 800px)");

// Show and hide about info
function show(){info.classList.toggle('xxc');};
function unshow(){info.classList.remove('xxc');};

//Center the loader wherever the page is
function checkForTop (){loader.style.top = (window.pageYOffset) + "px";}
checkForTop();

//Manage the loader
function stopLoader() {loader.classList.add("stop");}
function startLoader(){loader.classList.remove("stop"); setTimeout(stopLoader, 1000);}
setTimeout(stopLoader, 1000);

//Stop the sidebar appearing on small screens with matchmedia
function myFunction(x) {if (blue.matches) {sidey.classList.remove("block");}}
function toggler() {sidey.classList.toggle("block");}
myFunction(blue);

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
  "yacht.jpg",
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

