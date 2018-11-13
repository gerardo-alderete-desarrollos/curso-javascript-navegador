/* const title = document.getElementById('title')
const title2 = document.getElementById('title2')

console.log(title.getAttribute('class'))
console.log(title.getAttribute('id'))
console.log(title.getAttribute('value'))

if( title2 ){
    title2.style.background = 'yellow'
}
console.log('Hola mundo')

 */

//  const title = document.querySelector('h1')

//  title.setAttribute('id','title')
//  console.log(title)

// title.id = 'title'
// console.log(title)

const title = document.querySelector('h1')
// console.log(title.classList)
title.classList.add('main-title', 'title-front-page')
title.classList.remove('title-front-page')




