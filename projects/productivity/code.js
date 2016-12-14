if (localStorage.length == 0){
  localStorage.breakTime = "0"
  localStorage.workTime = "0"
}
var intervalId = 0

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

function settings(){
  document.getElementById("infoc").style.visibility = "hidden"

  if (document.getElementById("settingsc").style.visibility == "visible"){
    document.getElementById("settingsc").style.visibility = "hidden"
  } else {
    document.getElementById("settingsc").style.visibility = "visible"
  }
}

function info(){
  document.getElementById("settingsc").style.visibility = "hidden"

  if (document.getElementById("infoc").style.visibility == "visible"){
    document.getElementById("infoc").style.visibility = "hidden"
  } else {
    document.getElementById("infoc").style.visibility = "visible"
  }
}

window.onload = function(){
 update();
}
