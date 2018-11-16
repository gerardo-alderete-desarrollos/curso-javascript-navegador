// const parent = document.getElementById('parent')
// const ad = document.createElement('div')

// ad.id = 'edteam'
// ad.textContent = 'Publicidad'

// // parent.before(ad)
// // parent.after(ad)
// // parent.prepend(ad)
// // parent.append(ad)
// // parent.children[0].replaceWith(ad)

const teachers = [ 'Alexys', 'Beto', 'Alvaro','Daniel', 'Jon']
const teacherList = document.createElement('ul')
const teacherListContainer = document.getElementById('teacher-list')
const teacherListFragment = document.createDocumentFragment()
teacherListContainer.appendChild(teacherList)

for (const teacher of teachers) {
    const li = document.createElement('li')
    teacherListFragment.appendChild(li)
    li.textContent = teacher
}

teacherList.appendChild(teacherListFragment)
