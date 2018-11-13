//const items = document.querySelector('ul')

//const elememtList = document.getElementsByTagName('li')
//console.log(elememtList)


//const nodeList = [...document.querySelectorAll('li')]
// const nodeList = Array.from(document.querySelectorAll('li'))
const nodeList = document.querySelectorAll('li')

//nodeList.map   ( el => el.style.background = 'yellow' )

/* nodeList.map   ( el => {
    if(el.textContent.trim().toUpperCase() === 'OBJECT'){
        el.remove()
    }
} ) */

for( let el of nodeList){
    if(el.textContent.trim().toUpperCase() === 'OBJECT'){
        el.remove()
    }
}

