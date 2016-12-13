var break_time = 0;
var work_time = 0;
var interval_Id = 0;

//read cookie function
function readcookie(query){
  return parseInt((document.cookie.match('(^|; )' + query + '=([^;]*)')||0).slice(-1));
}

//increase the break timer
function increasebreak(){
  break_time += 1; 
  document.getElementById("break_time").innerHTML = break_time; //update
}

//when the 'break' button is pushed
function startbreak(){
  clearInterval(interval_Id); //reset any counting timers
  interval_Id = setInterval('increasebreak()', 1000); //increasebreak() every second
}

//same as break
function increasework(){
  work_time += 1;
  document.getElementById("work_time").innerHTML = work_time;
}

function startwork(){
  clearInterval(interval_Id);
  interval_Id = setInterval('increasework()', 1000);
}

//pause button
function pause(){
  clearInterval(interval_Id);
}

//reset button
function reset(){
  break_time = 0;
  work_time = 0;
  document.getElementById("break_time").innerHTML = break_time; //update
  document.getElementById("work_time").innerHTML = work_time;
}

function upload(){
  document.cookie = "work=" + work_time +"; max-age=" + 60*60*24*30 + "; path=/;" //creating cookie
  document.cookie = "break=" + break_time +"; max-age=" + 60*60*24*30 + "; path=/;"
}

function download(){
  work_time = readcookie('work'); //read cookie function
  break_time = readcookie('break');
  document.getElementById("break_time").innerHTML = break_time; //update
  document.getElementById("work_time").innerHTML = work_time;
}

//run download function on page load - update the timers
window.onload=function(){
 download();
}
