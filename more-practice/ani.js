const container = document.querySelector('.container');
let html = '';
for (i = 1; i <9; i++){
  html += `<img class="image" src="picture-${i}.jpg" draggable = "false" data-open="0" >`;
}
container.innerHTML = html;
let xpos = 0;
let prevPercentage = 0;
let p = 0;

window.onmousedown = e =>{
  xpos = e.clientX;
}
window.onmouseup = e =>{
  xpos = 0;
  prevPercentage = p;
}

window.onmousemove = e =>{
  if (xpos ==0){
    return;
  }
  const mouseDelta = parseFloat(xpos) - e.clientX;
        maxDelta = window.innerWidth / 2;

  let percentage = (mouseDelta / maxDelta) * -100;
  let nextPercentage = parseFloat(prevPercentage) + percentage;
  nextPercentage = Math.min(nextPercentage,0);
  nextPercentage = Math.max(nextPercentage,-100);
  p = nextPercentage;
  // container.style.transform = `translate(${nextPercentage}%, -50%)`;
  container.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, {
    duration: 1200,
    fill: "forwards"
  })
  
  document.querySelectorAll('.image').forEach(e=>{
    // e.style.objectPosition = `${nextPercentage + 100}% 50% `
    e.animate({
      objectPosition: `${nextPercentage + 100}% 50%`
    }, {
      duration: 1200,
      fill: "forwards"
    })
  })
}

document.querySelectorAll('.image').forEach(image =>{
  image.addEventListener('click', ()=>{
    if(image.dataset.open == 0){
      image.animate({
        width: "30em",
      },{
        duration: 200,
        fill: "both", 
        easing: "ease-in-out"
      });
      image.dataset.open = 1;
    }else{
      image.animate({
        width: "18em",
      },{
        duration: 200,
        fill: "forwards",
        easing: "ease-in-out"

      });
      image.dataset.open = 0;

    }
    
  })
})

window.addEventListener("load", ()=>{
  const loader = document.querySelector(".loader-container");
  loader.animate({
    opacity : 0
  }, {
    duration: 2000,
    fill: "forwards",
    easing: "ease-out"
  })
})