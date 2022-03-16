/*** SECTION - EMAIL ***/
// 도메인 직접 입력 or domain option 선택
const domainListEl = document.querySelector('#domain-list')
const domainInputEl = document.querySelector('#domain-txt')
domainListEl.addEventListener('change', (event) => {
  // option에 있는 도메인 선택 시
  if(event.target.value !== "type") {
    // 선택한 도메인을 input에 입력하고 disabled
    domainInputEl.value = event.target.value
    domainInputEl.disabled = true
  } else { // 직접 입력
    // input 내용 초기화 & 입력 가능하도록 변경
    domainInputEl.value = ""
    domainInputEl.disabled = false
  }
})

/*** SECTION - BIRTH ***/
const birthArr = [-1, -1, -1]
const birthErrorMsgEl = document.querySelector('#info__birth .error-msg')
// '출생 연도' 셀렉트 박스 option 목록 동적 생성
const birthYearEl = document.querySelector('#birth-year')
// option 목록 생성 여부 확인
isYearOptionExisted = false;
birthYearEl.addEventListener('focus', function () {
  // year 목록 생성되지 않았을 때 (최초 클릭 시)
  if(!isYearOptionExisted) {
    isYearOptionExisted = true
    for(var i = 1940; i <= 2022; i++) {
      // option element 생성
      const yearOption = document.createElement('option')
      yearOption.setAttribute('value', i)
      yearOption.innerText = i
      // birthYearEl의 자식 요소로 추가
      this.appendChild(yearOption);
    }
  }
});

birthYearEl.addEventListener('change', (event) => {
  birthArr[0] = event.target.value
  isbirthValid(birthArr)
});

// 월 select box
const birthMonthEl = document.querySelector('#birth-month')
isMonthOptionExisted = false;
birthMonthEl.addEventListener('focus', function () {
  if(!isMonthOptionExisted) {
    isMonthOptionExisted = true
    for(var i = 1; i <= 12; i++) {
      const monthOption = document.createElement('option')
      monthOption.setAttribute('value', i)
      monthOption.innerText = i
      this.appendChild(monthOption);
    }
  }
});

birthMonthEl.addEventListener('change', (event) => {
  birthArr[1] = event.target.value
  isbirthValid(birthArr)
});

// 일 select box
const birthDayEl = document.querySelector('#birth-day')
isDayOptionExisted = false;
birthDayEl.addEventListener('focus', function () {
  if(!isDayOptionExisted) {
    isDayOptionExisted = true
    for(var i = 1; i <= 31; i++) {
      const dayOption = document.createElement('option')
      dayOption.setAttribute('value', i)
      dayOption.innerText = i
      this.appendChild(dayOption);
    }
  }
});

birthDayEl.addEventListener('change', (event) => {
  birthArr[2] = event.target.value
  isbirthValid(birthArr)
});

const submitBtn = document.querySelector('#submit')
submitBtn.addEventListener('click', function() {
  console.log(birthArr)
})

/* 유효한 날짜인지 여부 확인 (윤년/평년) */
function isbirthValid(birthArr) {
  isValid = true
  y = birthArr[0]
  m = birthArr[1]
  d = birthArr[2]
  // 생년월일 모두 선택 완료 시
  if(y > 0 && m > 0 && d > 0) {
    if ((m == 4 || m == 6 || m == 9 || m == 11) && d == 31) { 
      isValid = false
    }
    else if (m == 2) {
      if(((y % 4 == 0) && (y % 100 != 0)) || (y % 400 == 0)) { // 윤년
        if(d > 29) { // 윤년은 29일까지
          isValid = false
        }
      } else { // 평년
        if(d > 28) { // 평년은 28일까지
          isValid = false
        }
      }
    }
  }

  if(isValid) {
    birthErrorMsgEl.textContent = ""
  } else {
    birthErrorMsgEl.style.color = "red"
    birthErrorMsgEl.textContent = "생년월일을 다시 확인해주세요"
  }
}