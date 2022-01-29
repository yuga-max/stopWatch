let timer = document.getElementById("timer");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minute = 0;
let seconds = 0;
let millisecond = 0;

let interval;

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
  interval = setInterval(stopWatch, 100);
  　start.disabled = true;
  stop.disabled = false;
  reset.disabled = false;
  });

stop.addEventListener("click", function(){
  clearInterval(interval);
  start.disabled = false;
  stop.disabled = true;
  reset.disabled = false;
  });

reset.addEventListener("click", function() {
    clearInterval(interval);
    timer.innerHTML = "0:0:0:0";
     hours = 0;
     minute = 0;
     seconds = 0;
     millisecond = 0;
　start.disabled = false;
  stop.disabled = true;
  reset.disabled = true;
});