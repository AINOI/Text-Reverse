const string = document.getElementById('string')
const reverseStr = document.getElementById('revrseStr')
const reversedDone = document.getElementById('reversedDone')
const reversedBtn = document.getElementById('reversedBtn')

function reversed() {
  if (string.value != '') {
    const original = string.value.split('').reverse().join('')
    reverseStr.innerText = original
    reversedDone.innerText = '已轉換完成。'
  } else {
    reverseStr.classList.add('error')
    reversedBtn.classList.add('disable')
    reverseStr.innerText = '請輸入文字。'
    reversedDone.innerText = '請點選Reset。'
    reversedBtn.disabled = true
  }
}

window.addEventListener("keyup", function(e) {
  if ( e.keyCode === 13 ) {
    if (string.value != '') {
      const original = string.value.split('').reverse().join('')
      reverseStr.innerText = original
      reversedDone.innerText = '已轉換完成。'
    } else {
      reverseStr.classList.add('error')
      reversedBtn.classList.add('disable')
      reverseStr.innerText = '請輸入文字。'
      reversedDone.innerText = '請點選Reset。'
      reversedBtn.disabled = true
    }
  }
})

function clean() {
  string.value = ''
  reverseStr.innerText = '反轉結果將顯示於這裡'
  reversedDone.innerText = ''
  reverseStr.classList.remove('error')
  reversedBtn.disabled = false
  reversedBtn.classList.remove('disable')
}
