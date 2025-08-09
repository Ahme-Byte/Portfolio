//Adding responsiveness of menu for mobole and tablet screen 
let menu=document.querySelector("#menu");
let navi=document.querySelector(".navi");
let toggle=false;
menu.addEventListener("touchstart",function(){
    const width=window.innerWidth;
    if(!toggle){
      navi.style.display="flex";
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

navi.addEventListener("touchstart",function(e){
  if (e.target.classList.contains("anchor")){
          if(e.target.innerText==="Home"){
            window.open("index.html");
          }else if (e.target.innerText==="Skills"){
            window.open("skills.html");
          }else if(e.target.innerText==="Education"){
            window.open("education.html");
          }else if (e.target.innerText==="Hobbies"){
            window.open("hobby.html");
          }else{
            window.open("Contact.html")
          }
  }    
}); 

//Adding current state for both navi and nav barco
let nav=document.querySelector(".nav");
let element=document.querySelectorAll(".anchor");
let page=["page1","page2","page3","page4","page5"];
let count="";
for(let i=0;i<page.length;i++){
 let id=document.getElementById(page[i]);
 if(id && id.id.length>3){
     count=id.id;
     break;
 }
};
if(count[4]==="1"){
  element[0].classList.add("active");
  element[5].classList.add("active");
}else if(count[4]==="2"){
  element[1].classList.add("active");
  element[6].classList.add("active");
}else if(count[4]==="3"){
  element[2].classList.add("active");
  element[7].classList.add("active");
}else if(count[4]==="4"){
  element[3].classList.add("active");
  element[8].classList.add("active");
}else if(count[4]==="5"){
  element[4].classList.add("active");
  element[9].classList.add("active");
};

//Addition of my pic
let ptoggle=false; 
let ahmi=document.querySelector(".ahmi");
let pic=document.querySelector(".pic");
ahmi.addEventListener("pointerdown",function change(){
    pic.classList.remove("fade");
    void pic.offsetWidth;
    if(!ptoggle){
    pic.classList.add("fade");
    setTimeout(()=>{
        pic.style.backgroundImage="url('/content/fb.jpg')";
    },500);
    ptoggle=true;
    }else{
        pic.classList.add("fade");
            setTimeout(()=>{
      pic.style.backgroundImage="url('/content/pic.jpeg')";
    },500);
          ptoggle=false;
    }
});

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
function createSnowflakes(count = 10) {
  snowflakes = [];
  for (let i = 0; i < count; i++) {
    snowflakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 3 + 1,
      speed: Math.random() * 2 + 1
    });
  }
}
function drawSnowflakes() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#8B0000';
  ctx.beginPath();
  for (let flake of snowflakes) {
    ctx.moveTo(flake.x, flake.y);
    ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
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