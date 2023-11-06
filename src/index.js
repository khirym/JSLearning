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

getCelcius2()
console.log(celciusArray)

// Using 'some' write a function that checks an array for a 'falsey'
// value.
// eg: checkForFalsey([11, NaN, [], {'Angels'}]) => true

// .some() test if at least one element in an array passes the test implemented by a provided function.

const checkForFalsey = [11, NaN, [], {'Angels'}]

console.log(checkForFalsey.some(item => item == true))



// Using 'reduce' write a function that will return the total number
// or characters in an arry of strings.
// eg: getTotal(['Rabbit', 'Football', 'Cracking',]) => 22

function getTotal() {

}