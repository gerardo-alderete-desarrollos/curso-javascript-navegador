// addEventListener('DOMContentloaded', () => {
//     const form = document.getElementById('form')
//     const rememberPassword = document.getElementById('remember-password')

//     form.addEventListener('submit', (e) => {
//         console.log('Ha enviado el formulario')
//     })

//     rememberPassword.addEventListener('change', (e) => {
//         if( e.target.cheched ){
//             console.log('El usuario quiere recordar su contraseña')
//         }else{
//             console.log('El usuario NO quiere recordar su contraseña')

//         }
//     })
// })


// addEventListener('scroll', e => {
//     console.log(scrollX, scrollY)
// })

addEventListener('resize', e => {
    console.log(e.target.innerWidth, e.target.innerHeight)
    console.log(innerWidth, innerHeight)

    console.log(e.target.outerWidth, e.target.outerHeight)
    console.log(outerWidth, outerHeight)

    
})
