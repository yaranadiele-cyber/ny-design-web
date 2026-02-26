particlesJS("particles",{
particles:{
number:{value:60},
size:{value:3},
color:{value:"#c9a063"},
line_linked:{enable:true,color:"#c9a063"},
move:{speed:2}
}
});

const items = document.querySelectorAll(".carousel-item");
let current = 0;

function updateCarousel(){
items.forEach((item,i)=>{
item.classList.remove("active","blur");
if(i===current){
item.classList.add("active");
}else{
item.classList.add("blur");
}
});
}

function autoRotate(){
current=(current+1)%items.length;
updateCarousel();
}

if(items.length>0){
setInterval(autoRotate,4000);
updateCarousel();
}