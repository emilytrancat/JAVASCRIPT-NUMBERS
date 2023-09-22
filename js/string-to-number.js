const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

// const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges);
const totalBadges = +HTMLBadges + +CSSBadges;

console.log(totalBadges);

console.log( typeof parseInt(HTMLBadges), typeof parseInt(CSSBadges) );

// const hi = prompt('say a number');
// const hichu = prompt('say another number');
// const piTotal = parseFloat(hi) + parseFloat(hichu);
// console.log(piTotal);

const pi = prompt('What is Pi?');
console.log( +pi === 3.14);