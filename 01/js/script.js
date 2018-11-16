const template = document.getElementById('template')
const myNewTemplate = template.content.cloneNode(true)

myNewTemplate.querySelector('h2').textContent = 'EDteam'
myNewTemplate.querySelector('p').textContent = 'Tu futuro te esta esperando'

document.getElementById('content').appendChild(myNewTemplate)