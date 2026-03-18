// script.js

let pages = document.querySelectorAll('.page');
let currentPage = 0;

// Show first page
pages[currentPage].classList.add('active');

let buttons = document.querySelectorAll('.nextBtn');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    pages[currentPage].classList.remove('active');
    currentPage++;
    if(currentPage < pages.length){
      pages[currentPage].classList.add('active');
      // Trigger confetti on last page
      if(currentPage === pages.length-1){
        createConfetti();
      }
    }
  });
});

// Generate floating hearts
for(let i=0;i<25;i++){
  let heart = document.createElement('div');
  heart.className='heart';
  heart.style.left=Math.random()*100+'%';
  heart.style.animationDuration=(5+Math.random()*5)+'s';
  heart.style.width=(10+Math.random()*20)+'px';
  heart.style.height=heart.style.width;
  document.body.appendChild(heart);
}

// Generate butterflies
for(let i=0;i<5;i++){
  let butterfly = document.createElement('div');
  butterfly.className='butterfly';
  butterfly.style.left=Math.random()*window.innerWidth+'px';
  butterfly.style.top=Math.random()*window.innerHeight+'px';
  butterfly.style.animationDuration=(10+Math.random()*10)+'s';
  document.body.appendChild(butterfly);
}

// Generate confetti for last page
function createConfetti(){
  for(let i=0;i<40;i++){
    let confetti = document.createElement('div');
    confetti.className='confetti';
    confetti.style.left=Math.random()*window.innerWidth+'px';
    confetti.style.background='hsl('+Math.random()*360+', 100%, 50%)';
    document.body.appendChild(confetti);
  }
}

// Play music automatically
window.addEventListener('load', ()=>{
  let music = document.getElementById('bgMusic');
  music.volume = 0.3;
  music.play().catch(()=>{});
});
