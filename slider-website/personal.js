const forward = document.querySelector('.forward');
const backward = document.querySelector('.backward');

let active = 0;
const itemList = document.querySelectorAll('.slider .item');
const thumbnails = document.querySelectorAll('.thumbnail-selector .thumbnail')

console.log(itemList);

forward.onclick = function(){
  active += 1;
  if (active >= itemList.length){
    active = 0;
  }
  updateScreen(active);
  
  
}

backward.onclick = function(){
  active -= 1;
  if (active < 0){
    active = 4;
  }
  updateScreen(active);
}

thumbnails.forEach((thumbnail, index)=>{
  thumbnail.addEventListener('click', ()=>{
    updateScreen(index)
    active = index;
  });
}
)

function updateScreen(active){
  activeItem = document.querySelector('.slider .item.active');
  activeItem.classList.remove('active');
  activeThumbnail = document.querySelector('.thumbnail-selector .thumbnail.active');
  activeThumbnail.classList.remove('active');
  itemList[active].classList.add('active');
  thumbnails[active].classList.add('active');
}