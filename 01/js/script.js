const parent = document.getElementById('parent'),
      childs = Array.from(parent.children),
      childParent = childs.filter( child => child.children.length > 0)[0],
      grandSons = Array.from(childParent.children),
      grandSon3 = grandSons.filter( child => child.textContent.trim()
        === 'Nieto 3')[0]

const newElement = document.createElement('h2')
newElement.textContent = 'Soy un nuevo elemento'

childParent.insertBefore(newElement,grandSon3)