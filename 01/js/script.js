// setTimeout(() => {
//     alert('Hola mundo')
// }, 2000);
// let contador = 0
// const saludarMuchasVeces = setInterval(() => {
//     contador++
    
//     if(contador >1){
//         console.log(`Hola ${contador} veces`)
//     }else{
//         console.log(`Hola ${contador} veces`)

//     }
//     if(contador === 20){
//         clearInterval(saludarMuchasVeces)
//     }
// }, 1000)

console.log(new Date().toLocaleTimeString())

setInterval(() => {
    const clock = document.getElementById('clock')
    if(clock){
        clock.textContent = new Date().toLocaleTimeString()
    }
}, 1000);