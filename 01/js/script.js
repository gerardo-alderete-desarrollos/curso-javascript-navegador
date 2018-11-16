const title = document.getElementById('title')

const createMenu = () => {
    const menu = document.createElement('div')
    menu.textContent = 'Soy un menu contextual'
    document.body.appendChild(menu)
}

title.addEventListener('contextmenu', (e) => {
    createMenu()
    e.preventDefault()
})

