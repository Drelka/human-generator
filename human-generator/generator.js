genders = ['male', 'female'];
var randomA = positiveT[Math.floor(Math.random()*positiveT.lenght)];
var randomB = neutralT[Math.floor(Math.random()*neutralT.lenght)];
var randomC = negativeT[Math.floor(Math.random()*negativeT.lenght)];

human = {
    gender: genders[Math.floor(Math.random()*genders.lenght)],
    age: Math.round(Math.random()*100),
    height: Math.random() * (200-140) + 140,
    positiveTrait: 'randomA',
    neutralTrait: 'randomB',
    negativeTrait: 'randomC',
};

