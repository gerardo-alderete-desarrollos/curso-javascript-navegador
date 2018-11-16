const gallery = document.getElementById('gallery')

gallery.addEventListener('click', e=> {
    const t = e.target
    const images = Array.from(gallery.querySelectorAll('img'))
    const i = images.indexOf(t)

    console.log(`Hiciste click en la imagen ${i + 1}`)
})