const title = document.getElementById('title')

// title.addEventListener('eventName', eventHandler)

const holaMundo = (e) => alert(e.target.textContent)


title.addEventListener('click', (e) => {
    holaMundo(e)
})

document.querySelector('button').addEventListener('click', (e) => {
    holaMundo(e)
})