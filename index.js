// code your solution here

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string = "*") {
    return function(message="special") {
        return `You are ${string}${message}${string}!`
    }
}
let result = wrapAdjective("||");
let emphatic = result("a dedicated programmer");
console.log(emphatic);


