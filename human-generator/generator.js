let positiveT = 'chuaua';
let neutralT = '';
let negativeT = '';
let gender = '';

let genders = ['male', 'female'];
var randomA = positiveT[Math.floor(Math.random()*positiveT.length)];
var randomB = neutralT[Math.floor(Math.random()*neutralT.length)];
var randomC = negativeT[Math.floor(Math.random()*negativeT.length)];

const human = {};
human.gender = genders[Math.floor(Math.random()*genders.lenght)];
human.age = Math.round(Math.random() * (70-14) + 14);
human.height = Math.round(Math.random() * (200-140) + 140);
human.positiveTrait = randomA;
human.neutralTrait = randomB;
human.negativeTrait = randomC;

function character(){
    return Object.keys(human);
}
