'use strict'

// 1. Read the JSON file into a variable called students

const students = require('./students.json')

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

function say(firstName, lastName){
    let fullName = firstName + ' ' + lastName
    console.log(`Hello ${fullName}`)
}
students.forEach(student =>{
    const {firstName, lastName} = student
    say(firstName, lastName)
})

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

let index = 0
let keyChar = "D"
let filteredStudents = students.filter(student => {
    return student.lastName.toLocaleUpperCase().charAt(index) == keyChar
})

console.log(`Count of last names starting with ${keyChar} is ${filteredStudents.length}`)