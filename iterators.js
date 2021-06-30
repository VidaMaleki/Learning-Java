//Array method .reduce(accumudator, currentValue)const arrayOfNumbers = [1, 2, 3, 4];
const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(sum); // 10

//Arraymethod .forEach()
const numbers = [28, 77, 45, 99, 27];

numbers.forEach(number => {
    console.log(number);
});

//Array Method .filter()
const randomNumbers = [4, 11, 42, 14, 39];
const filteredArray = randomNumbers.filter(n => {
    return n > 5;
});

//Array Method .map()
const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

const announcements = finalParticipants.map(member => {
    return member + ' joined the contest.';
})

console.log(announcements);