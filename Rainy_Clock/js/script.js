// 비오는 효과
const img = document.getElementById('wallpaper')
img.src = img.src;

function run() {
  const rainyDay = new RainyDay({
    image: img,
    gravityAngle: Math.PI / 5,
    fps: 144,
  })

  rainyDay.rain(
    [
      [3, 2, 2],
      [1, 0, 20],
    ],
    100)
}

// 비오는 소리 재생
const sound = document.getElementById('audio')
const playBtn = document.querySelector('.play')
const pauseBtn = document.querySelector('.pause')

function playAudio() {
  if(sound.paused) {
    sound.play()
    playBtn.classList.toggle('on')
    pauseBtn.classList.toggle('on')
  } else {
    sound.pause()
    pauseBtn.classList.toggle('on')
    playBtn.classList.toggle('on')
  }
}

function setVolume(volume) {
  sound.volume = volume
}

// 시계
const todayDiv = document.getElementById('today')
const timeDiv = document.getElementById('time')

// getTime 함수
function getTime(){
  let now = new Date()
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()

  month = month < 10 ? `0${month}` : month
  date = date < 10 ? `0${date}` : date
  hour = hour < 10 ? `0${hour}` : hour
  minute = minute < 10 ? `0${minute}` : minute
  second = second < 10 ? `0${second}` : second

  todayDiv.textContent = `${year}년 ${month}월 ${date}일`
  timeDiv.textContent = `${hour} : ${minute} : ${second}`
}

// setInterval 메소드
getTime()
setInterval(getTime, 1000);