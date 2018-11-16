
const parent = document.getElementById('parent')
const ad = document.createElement('div')
ad.id = 'edteam'
ad.textContent = 'Publicidad'

// parent.insertAdjacentElement('beforebegin', ad)
// parent.insertAdjacentElement('afterend', ad)
// parent.insertAdjacentElement('afterbegin', ad)
parent.insertAdjacentElement('beforeend', ad)

// parent.insertAdjacentText('beforeend', 'Hola mundo')
// parent.insertAdjacentText('beforebegin', 'Hola mundo')


// parent.insertAdjacentHTML('beforebegin', `<h1>Soy el titulo
    // principal</h1>`)







