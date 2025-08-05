//Adding responsiveness of menu for mobole and tablet screen 
let menu=document.querySelector("#menu");
let navi=document.querySelector(".navi");
let toggle=false;
menu.addEventListener("touchstart",function(){
    const width=window.innerWidth;
    if(!toggle){
        if (width <= 767){
         navi.style.marginRight="0px";
        }else{
            navi.style.marginRight="30px";
        }
         toggle=true;
    }else{
        navi.style.marginRight="-150px";
        toggle=false;
    }
});

//Adding current state for both navi and nav bar
let nav=document.querySelector(".nav");
let element=document.querySelectorAll(".anchor");
element[4].style.color="#4f0000";
element[4].style.textDecoration="underline";
element[0].style.color="#4f0000";
element[0].style.textDecoration="underline";
nav.addEventListener("click",state);
navi.addEventListener("touchstart",state);
function state(e){
if(e.target.classList.contains("anchor")){
    for (let ele of element){
        ele.style.color="white";
        ele.style.textDecoration="none";
    }
    e.target.style.color="#4f0000";
    e.target.style.textDecoration="underline";
}
};

//Addition of my pic
let ptoggle=false; 
let ahmi=document.querySelector(".ahmi");
let pic=document.querySelector(".pic");
ahmi.addEventListener("click",change);
ahmi.addEventListener("touchstart",change);
function change(){
    pic.classList.remove("fade");
    void pic.offsetWidth;
    if(!ptoggle){
  //  pic.style.backgroundImage="url('/content/fb.jpg')";
    pic.classList.add("fade");
    setTimeout(()=>{
        pic.style.backgroundImage="url('/content/fb.jpg')";
    },500);
    ptoggle=true;
    }else{
       // pic.style.backgroundImage="url('/content/pic.jpeg')";
        pic.classList.add("fade");
            setTimeout(()=>{
      pic.style.backgroundImage="url('/content/pic.jpeg')";
    },500);
          ptoggle=false;
    }
};

//Snowfall effect code starts here
const canvas = document.createElement('canvas');
canvas.id = 'snowCanvas';
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.zIndex = '0';
canvas.style.pointerEvents = 'none';
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

let snowflakes = [];

function createSnowflakes(count = 5) {
  snowflakes = [];
  for (let i = 0; i < count; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 2+1 
    });
  }
}

function getFreeZones() {
  const freeElements = document.querySelectorAll('.free');
  return Array.from(freeElements).map(el => {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      right: rect.right + window.scrollX,
      top: rect.top + window.scrollY,
      bottom: rect.bottom + window.scrollY
    };
  });
}

function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.beginPath();

  const masks = getFreeZones();

  for (let flake of snowflakes) {
    let blocked = masks.some(mask =>
      flake.x >= mask.left &&
      flake.x <= mask.right &&
      flake.y >= mask.top &&
      flake.y <= mask.bottom
    );

    if (!blocked) {
      ctx.moveTo(flake.x, flake.y);
      ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
    }
  }

  ctx.fill();
  moveSnowflakes();
}

function moveSnowflakes() {
  for (let flake of snowflakes) {
    flake.y += flake.speed;
    if (flake.y > canvas.height) {
      flake.y = 0;
      flake.x = Math.random() * canvas.width;
    }
  }
}

createSnowflakes();
setInterval(drawSnowflakes, 30);