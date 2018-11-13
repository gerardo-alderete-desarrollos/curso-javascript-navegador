const title = document.querySelector('h1')

const profesor = document.createElement('p')
const profesorContainer = document.getElementById('teacher')

profesor.textContent = 'Alexys Lozada'
profesor.classList.add('teacher')

if(profesorContainer && profesorContainer.querySelector('span')){
    profesorContainer.querySelector('span').appendChild(profesor)
}



