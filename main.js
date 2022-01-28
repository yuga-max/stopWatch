let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minute = 0;
let seconds = 0;
let millisecond = 0;


function stopWatch(){
  millisecond++;
  if(millisecond / 10 == 1){
  seconds++;
  millisecond = 0;
  if(seconds / 10 == 1){
  minute++;
  seconds = 0;
  if(minute / 10 == 1){
  hours++;
  minute = 0;
  }
  }
  }
   timer.innerHTML = hours + ":" + minute + ":" + seconds + ":" + millisecond;
}

start.addEventListener("click", function(){
  setInterval(stopWatch, 100);
  });

stop.addEventListener("click", function(){
  clearInterval(stopWatch);
  });
stopWatch();