localStorage.breakTime = "0"
localStorage.workTime = "0"
var intervalId = 0

/*function readcookie(query){
  return parseInt((document.cookie.match('(^|; )' + query + '=([^;]*)')||0).slice(-1));
}*/

function update(){
  document.getElementById("break_time").innerHTML = localStorage.breakTime
  document.getElementById("work_time").innerHTML = localStorage.workTime
}

function increasebreak(){
  localStorage.breakTime = parseInt(localStorage.breakTime) + 1
  update()
}

function startbreak(){
  clearInterval(intervalId)
  intervalId = setInterval('increasebreak()', 1000)
}

function increasework(){
  localStorage.workTime = parseInt(localStorage.workTime) + 1
  update()
}

function startwork(){
  clearInterval(intervalId)
  intervalId = setInterval('increasework()', 1000)
}

function pause(){
  clearInterval(intervalId)
}

function reset(){
  localStorage.breakTime = 0
  localStorage.workTime = 0
  update()
}

/*function upload(){
  document.cookie = "work=" + work_time +"; max-age=" + 60*60*24*30 + "; path=/;"
  document.cookie = "break=" + break_time +"; max-age=" + 60*60*24*30 + "; path=/;"
}


function download(){
  work_time = readcookie('work');
  break_time = readcookie('break');
  document.getElementById("break_time").innerHTML = break_time;
  document.getElementById("work_time").innerHTML = work_time;
}
*/
window.onload = function(){
 update();
}
