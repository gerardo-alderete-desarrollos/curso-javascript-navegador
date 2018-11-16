
const createMenu = e => {
    const menu = document.createElement('div')
    const prevMenu = document.getElementById('context-menu')
    menu.id = 'context-menu'
    menu.textContent = 'Soy un menu contextual'
    
    if(prevMenu) document.body.removeChild(prevMenu)
    
    document.body.appendChild(menu)

    menu.style.padding = '1em'
    menu.style.background = '#eee'
    menu.style.position = 'fixed'
    menu.style.top = `${e.pageY}px`
    menu.style.left = `${e.pageX}px`

}

document.addEventListener('contextmenu', e => {
    createMenu(e)
    e.preventDefault()
})

