// const parent = document.getElementById('parent'),
//       childs = Array.from(parent.children),
//       childParent = childs.filter( child => child.children.length > 0)[0],
//       grandSons = Array.from(childParent.children),
//       grandSon3 = grandSons.filter( child => child.textContent.trim()
//         === 'Nieto 3')[0]

// const newElement = document.createElement('h2')
// newElement.textContent = 'Soy un nuevo elemento'

// childParent.insertBefore(newElement,grandSon3)

const post = document.getElementById('post')
const ad = document.createElement('div')
ad.id = 'edteam'
ad.textContent = 'Publicidad'

const postParagraphs = post.querySelectorAll('p')

const getMiddleChild = element => {
    const childs = element.children,
          l = childs.length,
          i = Math.floor(l / 2)

    return childs[i]
}
 
const middleChild = getMiddleChild(post)
post.insertBefore(ad, middleChild)