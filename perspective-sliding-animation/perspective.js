const imageContainer = document.querySelector('.imgs-parent');
let html = ''; 
for (let i=1; i<14; i++){
  html += `<div class="img" style="background-image: url(background-images/background-${i}.jpg)"></div>`
}

imageContainer.innerHTML = html;

const images = document.querySelectorAll('.img');
console.log(images);

images.forEach((image)=>{
  image.addEventListener('click', ()=>{
  if (image.classList.contains('clicked')){
    image.classList.remove('clicked');
  } else{
    let clickedImage = document.querySelector('.clicked');
    if (clickedImage){
      clickedImage.classList.remove('clicked');
    }
    image.classList.add('clicked');
  }
  })
})

window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY; // Amount of pixels scrolled vertically
  console.log('You have scrolled ' + scrollPosition + ' pixels');
  
});

