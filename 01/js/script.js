// console.log(document.getElementById('title'))

const title = document.getElementById('title')
const title2 = document.querySelector('#title')
const listItems = document.querySelectorAll('ul li')
const secondItem = document.querySelectorAll('ul li:nth-child(2)')
const list = document.getElementById('list')

title.style.background = 'yellow'

console.log(title)
console.log(title2)
console.log(listItems)
console.log(secondItem)
console.log(list.querySelectorAll('li:last-child'))
