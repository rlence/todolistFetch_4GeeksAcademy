
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

document.getElementById('excuse').innerHTML = who[getRandomInt(0,who.length)] + ' ' + action[getRandomInt(0,action.length)] + ' ' + what[getRandomInt(0,what.length)] + ' ' + when[getRandomInt(0,when.length)] ;