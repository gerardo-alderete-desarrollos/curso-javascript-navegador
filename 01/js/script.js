// const input = document.getElementById('input')

// addEventListener('keydown', e =>{
//     if( e.key === 'a' && e.ctrlKey === true ){
//         e.preventDefault()
//         alert('CTRL A')
//     }
// })
let x = 0, y = 0
addEventListener('keyup', e => {
    const ball = document.getElementById('ball')
   
    const move = (direction) => {
        switch (direction) {
            case 'up':
                y--
                break
            case 'down':
                y++
                break
            case 'left':
                x--
                break
            case 'right':
                x++
                break
            default:
                break

        }

        ball.style.transform = `translate(${x*10}px,${y*10}px)`
    }



    switch (e.key) {
        case 'ArrowUp':
            move('up')
            break;
        case 'ArrowDown':
            move('down')
            break;
        case 'ArrowLeft':
            move('left')
            break;
        case 'ArrowRight':
            move('right')
            break;
        default:
            break;
    }        
})

