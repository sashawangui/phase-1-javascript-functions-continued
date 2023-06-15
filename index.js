// code your solution here
function saturdayFun ( activity = "roller-skate"){
    return`This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun())
console.log(saturdayFun("bathe my dog"))



console.log (mondayWork())
console.log(mondayWork("work from home."))
function mondayWork ( activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}
// console.log (mondayWork())
// console.log(mondayWork("work from home."))


function wrapAdjective (string = '*'){
    return (function (adjective = 'special') {
        return `You are ${string}${adjective}${string}!`
    })
}
wrapAdjective('a hard worker')
wrapAdjective('a dedicated programmer')

