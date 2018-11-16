const video = document.getElementById('video'),
      playVideo = document.getElementById('play'),
      pauseVideo = document.getElementById('pause')
    
playVideo.addEventListener('click', () => {
    video.play()
})

pauseVideo.addEventListener('click', () => {
    // video.pause()
    playVideo.click()
})