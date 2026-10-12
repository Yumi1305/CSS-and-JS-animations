const rect1 = document.querySelector(".rect1");
const rect2 = document.querySelector(".rect2");
const style = getComputedStyle(document.body);


const pics = document.querySelectorAll(".split-pictures");
let picIndex = 0;


function pictureAnimation(){
  
  setTimeout(()=>{
    rect1.classList.add('scroll-down');
    rect1.classList.remove('scroll-down-again');
    rect2.classList.add('scroll-down');
    rect2.classList.remove('scroll-down-again');
  
  }, 4000)  
  setTimeout(()=>{
    rect1.classList.remove('scroll-down');
    rect1.classList.add('scroll-down-again');
    rect2.classList.remove('scroll-down');
    rect2.classList.add('scroll-down-again');
  
    let activePic = document.querySelector('.split-pictures.active');
    let insidePics = document.querySelectorAll('.split-pictures.active .pic');

    if (activePic){

      insidePics[0].classList.remove('picture-scroll-down');
      insidePics[1].classList.remove('picture-scroll-up');

      activePic.classList.remove('active');
      pics[(picIndex+=1)%pics.length].classList.add('active');

      insidePics = document.querySelectorAll('.split-pictures.active .pic');

      insidePics[0].classList.add('picture-scroll-down');
      insidePics[1].classList.add('picture-scroll-up');


    } else{
      pics[picIndex].classList.add('active');
      let insidePics = document.querySelectorAll('.split-pictures.active .pic');
      insidePics[0].classList.add('picture-scroll-down');
      insidePics[1].classList.add('picture-scroll-up');
    }


  
  }, 800)  
}

setInterval(()=>{
  pictureAnimation();
}, 4800);

const expandBtn = document.querySelector('.expand-button');
let expanded = false;
let infoHTML = `
  <ul>
    <li class="extra-info">
        <span class="date">2024.12.31</span>
        <span class="desc">新年快乐！希望明年比这个更幸福</span>
    </li>
    <li class="extra-info">
        <span class="date">2025.1.26</span>
        <span class="desc">生日快乐！</span>
    </li>
    <li class="extra-info">
        <span class="date">2025.2.14</span>
        <span class="desc">七夕快乐！别想太多。。。</span>
    </li>
  </ul>`;
expandBtn.addEventListener('click', ()=>{
  const infoDates = document.querySelector('.information .dates');
  const info = document.querySelector('.information');

  if (!expanded){
    infoDates.innerHTML += infoHTML;
    const extra = document.querySelectorAll('.extra-info');

    info.style.height = '260px';
    setTimeout(()=>{
      extra.forEach((element) =>{
        element.classList.add('visible');
      })
    }, 400)
    expanded = true;

  } else{
    const extra = document.querySelectorAll('.extra-info');
    extra.forEach((element) =>{
      element.classList.remove('visible');
    })
    setTimeout(()=>{
      extra.forEach(item => item.remove());
    }, 500)
    info.style.height = '120px';
    expanded = false;
  }
})

const isDark = false;
const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('inter');
      entry.target.classList.remove('animate-background-again');
      entry.target.classList.add('animate-background');
      isDark = true;
    } else{
      entry.target.classList.remove('animate-background');
      entry.target.classList.add('animate-background-again');
      isDark = false;
    }
  })
}, {
  threshold: 0.6, 
  rootMargin: '400px'
})

const obj = document.querySelectorAll('.blog-section');
console.log(obj);
observer.observe(obj[0]);

//cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e)=>{
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
  if (isDark){

  } else{
    
  }
})
