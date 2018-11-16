// const video = document.getElementById('video'),
//       playVideo = document.getElementById('play'),
//       pauseVideo = document.getElementById('pause')
    
// playVideo.addEventListener('click', () => {
//     video.play()
// })

// pauseVideo.addEventListener('click', () => {
//     // video.pause()
//     playVideo.click()
// })

document.querySelectorAll('div').forEach( el => {
    el.addEventListener('click', (e) => {
        console.log(`Hiciste click en el div ${e.target.id}`)
        e.stopPropagation()
        
    })
})