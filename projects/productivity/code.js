var break_time = 0;
var work_time = 0;
var interval_Id = 0;

function readcookie(query){
  return parseInt((document.cookie.match('(^|; )' + query + '=([^;]*)')||0).slice(-1));
}

function increasebreak(){
  break_time += 1;
  document.getElementById("break_time").innerHTML = break_time;
}

function startbreak(){
  clearInterval(interval_Id);
  interval_Id = setInterval('increasebreak()', 1000);
}

function increasework(){
  work_time += 1;
  document.getElementById("work_time").innerHTML = work_time;
}

function startwork(){
  clearInterval(interval_Id);
  interval_Id = setInterval('increasework()', 1000);
}

function pause(){
  clearInterval(interval_Id);
}

function reset(){
  break_time = 0;
  work_time = 0;
  document.getElementById("break_time").innerHTML = break_time;
  document.getElementById("work_time").innerHTML = work_time;
}

function upload(){
  document.cookie = "work=" + work_time +"; max-age=" + 60*60*24*30 + "; path=/;"
  document.cookie = "break=" + break_time +"; max-age=" + 60*60*24*30 + "; path=/;"
}

function download(){
  work_time = readcookie('work');
  break_time = readcookie('break');
  document.getElementById("break_time").innerHTML = break_time;
  document.getElementById("work_time").innerHTML = work_time;
}

window.onload=function(){
 download();
}
