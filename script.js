const deg = 6;
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;
})
// timer


let isPaused = false;
let count = 0;
let cTimer = undefined;

setTimerBtn = document.querySelector('#submit');
pauseBtn = document.querySelector('#pause');
clearBtn = document.querySelector('#clear');

counterText = document.querySelector('#numb');
counterLabel = document.querySelector('#time');

setTimerBtn.addEventListener('click', ()=>{
  if (cTimer !== undefined){
    clearInterval(cTimer);
  }
  count = +counterText.value;
  setTimer();
})

pauseBtn.addEventListener('click', () => { pause(); })
clearBtn.addEventListener('click', () => { dropTimer(); })

function setTimer () { 
  cTimer = setInterval(()=>{
    if(!isPaused){
      if (count <= 0){
        dropTimer();
        alarm();
      }
      counterLabel.textContent = count;
      count--;
    }
  },1000)
}

function pause(){
    isPaused = !isPaused;
  }


function dropTimer(){
  clearInterval(cTimer);
}



function alarm(){
  const audio = new Audio();
  audio.src = 'videoplayback.wav';
  audio.play();
}

setInterval(()=>{
  setTime()
  setClock()
});