// 로또 추첨 관련 변수 모음
const lottoArray = []        // 로또 번호 배열
let isCreate = false       // 추첨 중인지 아닌지 체크
let step = 0               // 6개 표시 했는지 체크
let intervalId = 0       // 동작 변수

const resultBox = document.getElementById('result')
const ingDraw = document.querySelector('.ing')
const ingComment = ['번호 추첨 중..', '번호 추첨 중...', '번호 추첨 중.']

// 숫자 생성
function numCreate() {
  const numList = document.querySelector('.num-list')
  for (let i = 1; i <= 45; i++) {
    const div = document.createElement('div')
    div.setAttribute('id', `no${i}`)
    div.innerHTML = `<p>${i}</p>`

    numList.appendChild(div)
  }
}

// 색칠 된 번호 초기화
function clearNum() {
  const selected = document.getElementsByClassName('selected')

  while (selected.length > 0) {
    let i = 0
    selected[i].classList.remove('selected')
    i++
  }
}

// 로또 번호 생성
function lottoNum() {
  // 추첨 중이면 버튼을 눌러도 작동 안되게
  if(isCreate) {
    return
  }

  // 배열에 하나라도 담겨있으면 전부 빼기
  while(lottoArray.length > 0) {
    lottoArray.pop()
  }

  // 배열에 랜덤 변수 넣기
  while(lottoArray.length < 6) {
    let randomNum = Math.floor(Math.random() * 45) + 1
    if(lottoArray.indexOf(randomNum) === -1) {
      lottoArray.push(randomNum)
    }
  }

  isCreate = true;                               // 추첨 중으로 변경
  clearNum()                                    // 색칠 된 번호 초기화
  ingDraw.classList.add('on')                  // 추첨 중 글씨 움직이기
  resultBox.classList.remove('on')             // 결과창 지우기
  intervalId = setInterval(coloringNum, 400)  // 로또 추첨 시작
}

// 만들어진 번호 결과에 따른 색칠
function coloringNum() {
  const coloringDiv = document.getElementById(`no${lottoArray[step]}`)
  
  coloringDiv.classList.add('selected')
  ingDraw.textContent = ingComment[step % 3]
  
  step++

  if(step == 6) {
    clearInterval(intervalId)
    step = 0
    isCreate = false
    ingDraw.classList.remove('on')
    resultNum()
  }
}

// 추첨된 결과 나타내기
function resultNum() {
  const numBox = document.createElement('div')

  for(let i = 0; i < 6; i++) {
    const lotteryNum = document.createElement('div')
    lotteryNum.textContent = `${lottoArray[i]}`

    if (lottoArray[i] <= 10) {
      lotteryNum.style.backgroundColor = '#ffc94d'
    } else if (lottoArray[i] <= 20) {
      lotteryNum.style.backgroundColor = '#7393e5'
    } else if (lottoArray[i] <= 30) {
      lotteryNum.style.backgroundColor = '#ff5757'
    } else if (lottoArray[i] <= 40) {
      lotteryNum.style.backgroundColor = '#b9b9b9'
    } else {
      lotteryNum.style.backgroundColor = '#47edac'
    }
    numBox.appendChild(lotteryNum)
  }

  resultBox.innerHTML = numBox.innerHTML
  resultBox.classList.add('on')
}
