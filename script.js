// LOADER, SIDEBAR and ABOUT INFO
const sidey = document.getElementById('sidebar');
const loader = document.getElementById("loaderDiv");
const extra = document.getElementById('info');
const blue = window.matchMedia("(max-width: 800px)");
const mainpic = document.getElementById('mainpic');

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

//switch introduction pic
function switchpic() {
  switch (mainpic.innerHTML) {
    case '<img src="img/mini/police-car.png">':
      mainpic.innerHTML =
        '<img src="img/mini/sport-car.png">';
      break;
    case '<img src="img/mini/sport-car.png">':
      mainpic.innerHTML =
        '<img src="img/mini/ship.png">';
      break;
    default:
      mainpic.innerHTML =
        '<img src="img/mini/police-car.png">';
  }
}

setInterval(switchpic, 4000);

//SOUNDS
const beep = new Audio('sounds/beep.m4a');
const police = new Audio('sounds/police.m4a');
const ship = new Audio('sounds/ship.m4a');

function makeSound(){
  switch (mainpic.innerHTML) {
    case '<img src="img/mini/sport-car.png">':
     beep.play();
     police.pause();
     ship.pause();
      break;
    case '<img src="img/mini/ship.png">':
     ship.play();
     beep.pause();
     police.pause();
      break;
    case '<img src="img/mini/police-car.png">':
     ship.pause();
     beep.pause();
     police.play();
      break;
      default:
        console.log('natch');

}
}

//CHANGE CARDS
const count = document.getElementById("count");
let imageArt = document.getElementById('image-art');
let imageText = document.getElementById('image-text');

var imageList = [
  "aeroplane.jpg",
  "bike.jpg",
  "car.jpg",
  "dog-sled.jpg",
  "ecar.jpg",
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
  "paddle-board.jpg",
  "quad-bike.jpg",
  "rocket.jpg",
  "sailboat.jpg",
  "train.jpg",
  "unicycle.jpg",
  "van.jpg",
  "wagon.jpg",
  "X-wing.jpg",
  "yacht.jpg",
  "zeppelin.jpg",
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

