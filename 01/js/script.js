
// const aniversario = new Date(2000,4,21,20,30,12)
// const neweAniversario = new Date('May 21 2000 20:30:12 GMT-0500')


// console.log(aniversario)
// console.log(neweAniversario)

// const timeZoneOffset = new Date().getTimezoneOffset()
// console.log(timeZoneOffset)


const birthday = new Date(1992,07,29)
const now = new Date(2018,11,16)



const getseconds = ms => Math.round(ms / 1000)
const getminuts = ms => Math.round(ms) / 60

console.log(getseconds( now -birthday))