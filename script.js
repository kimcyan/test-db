const area1 = document.querySelector('#area1');
const area2 = document.querySelector('#area2');

const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const total = document.querySelector('#total')

function updateNum() {
    let data1 = 0
    let data2 = 0
    let dataTotal = data1 + data2
    
    num1.innerHTML = data1
    num2.innerHTML = data2
    total.innerHTML = dataTotal
}

area1.addEventListener('click', () => {
    updateNum()
})
area2.addEventListener('click', () => {
    updateNum()
})