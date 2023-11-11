// const time = 23

// if (time < 12) {
//     console.log('good morning')
// } else if (time === 12){
//     console.log('oh it is noon')
// } else if (time > 12 && time < 18) {
//     console.log('good afternoon')
// } else {
//     console.log('good night')
// }


// Array work!

// Using 'map' write a function that converts farenheit to celcius.
// eg: getCelcius([23, 140, 212, 41]) => [-5, 60, 100, 5]

// .map() is similar to the forEach() method. However it creates a new array..
// it takes an array and for every item / element in the array will apply a funtion to it (or some functionality)
// Then it will create a new array from it.

// Option 1
const tempInFahren = [23, 140, 212, 41]

const getCelcius = tempInFahren.map(temp => (temp - 32) * 5/9)

console.log(getCelcius)

// Option 2
const farenheit = [23, 140, 212, 41]
let celciusArray

function getCelcius2(){
    celciusArray = farenheit.map(value => (value - 32) * 5/9)
}

// getCelcius2()
// console.log(celciusArray)

// Using 'some' write a function that checks an array for a 'falsey'
// value.
// eg: checkForFalsey([11, NaN, [], {'Angels'}]) => true

// .some() test if at least one element in an array passes the test implemented by a provided function.

const falsyArray = [11, NaN, [], 'Angels']

const checkForFalsey = falsyArray.some(item => !item)
console.log(checkForFalsey)



// Using 'reduce' write a function that will return the total number
// or characters in an arry of strings.
// eg: getTotal(['Rabbit', 'Football', 'Cracking']) => 22

const words = ['Rabbit', 'Football', 'Cracking']
const getTotal = words.reduce((total, word) => total + word.length, 0)
// 0 is because we are telling it to start from 0. we are giving it an initial value.

console.log(getTotal)


// Using `every` write a function that checks whether every number in
// an array is a square number.
// eg: checkSquares([19, 16, 81]) => true

const numbers = [9, 16, 81]

const checkSquares = numbers.every(numbers => Math.sqrt(numbers) % 1 === 0);

console.log(checkSquares);

// Using an array method, write a function that returns the string
// elements of an array that have a given length or larger.
// eg: getWords(['Florida', 'dog', 'phone'], 5) => ['Florida', 'phone']

const words2 = ['Florida', 'dog', 'phone']

const getWords = words2.filter(words2 => words2.length >= 5)

console.log(getWords)

// using an array method, write a function that converts an array of cm values
// as strings, into an array of numbers.
// eg: getValues(['23cm', '5.6cm', '1000cm']) => [23, 5.6, 1000]

const cmValues = ['23cm', '5.6cm', '1000cm']

function getValues() {
    return cmValues.map(value => parseFloat(value))
}

console.log(getValues())

// Option 2
function getValues2(array) {
    return array.map(value => parseFloat(value))
}

console.log(getValues2(['32cm', '6.5cm', '9000cm']))

// Using `split` and `filter` write a function that counts the number of
// vowels in a sentence.
//eg: getVowelCount('In West Philadelphia, born and raised') => 12

const saying = 'In West Philadelphia, born and raised'
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

const getVowelCount = saying.split('').filter(letter => vowels.includes(letter)).length

console.log(getVowelCount)

//Option 2 

function getVowelCount2(sentance) {
    return sentance.split('').filter(letter => vowels.includes(letter)).length
} 

console.log(getVowelCount2("I am a dog"))

// Using `split`, `map` and `join` write a function that capitalizes the 
// first letter of each word in a sentance.
//eg: capitalise('the queens gambit') => 'The Queens Gambit"

const title = 'the queens gambit'
function capitalise(){
    return title.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
}

console.log(capitalise())