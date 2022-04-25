// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe ("secret", () => {
        const secretCodeWord1 = "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        const secretCodeWord3 = "Eccentric"
        it("Create a function that takes in a string and returns a coded message", () => {
    expect(secret(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(secret(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(secret(secretCodeWord3)).toEqual("3cc3ntr1c") 

    })
  })

//   ReferenceError: secret is not defined

// b) Create the function that makes the test pass.

const secret = (string) =>{
string = string.replace (/a/gi,4)
string = string.replace (/e/gi,3)
string = string.replace (/i/gi,1)
string = string.replace (/o/gi,0)
return string
}

// console.log(secret(secretCodeWord1)) 


// PSEUDO CODE 
// Create a function that takes in a string and returns a coded message
// I need to go through the string and use the .replace feature to replace each instance I want replaced that includes this format(/a/gi,4) the letter I wanted replaced goes in between the hyphens and the gi is short global ignore.I am telling my function to globally ignore the a and replace it with a 4 and sof for the rest of the function
//  I will search for the desired letters of a,e,i,o and code them to thier respective numbers
// After trail and error and some reasearch I realized I had to keep declaring my desired string on each line inside the function
// My return is desired when I run node

// PASS  ./code-challenges.test.js
// secret
//   ✓ Create a function that takes in a string and returns a coded message (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.158 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.83s.

// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
const letterA = "a"
// Expected output: ["Apple", "Banana", "Orange"]
const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]


describe("particular", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    it("Create a function that takes in a string and returns a coded message", () => {
      expect(particular(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
      expect(particular(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
  })

  // ReferenceError: particular is not defined

// b) Create the function that makes the test pass.

const particular=(array,letter)=>{
return array.filter(value=>{
return value.includes(letter) || value.includes(letter.toUpperCase()) 

  })
}
// PASS  ./code-challenges.test.js
// secret
//   ✓ Create a function that takes in a string and returns a coded message (2 ms)
// particular
//   ✓ Create a function that takes in a string and returns a coded message (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.154 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.79s.

// PSEUDO CODE 
// Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.
// I will use .filter to go through the array and select my desired values of the words that contain a and e in the arras.
// I created another function to return the value of our letter we are searching for and it must include it
//  then I used the logical OR || since one or the other function arguments have to be true and be returned. 
// Then I use the .toUpperCase to search for the letters I have that are capitalized to make sure all words are included.




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("onePair", () => {
  const hand1 = [5, 5, 5, 3, 3]
  const hand2 = [5, 5, 3, 3, 4]
  const hand3 = [5, 5, 5, 5, 4]
  it("Create a function that takes in a string and returns a coded message", () => {
    expect(onePair(hand1)).toEqual(true)
    expect(onePair(hand2)).toEqual(false)
    expect(onePair(hand3)).toEqual(false)
  })
})


// ReferenceError: onePair is not defined

// b) Create the function that makes the test pass.
const onePair = (array) => {
  let firstThing = array.filter(value => value === array[0]).length
  let secondThing = array.filter(value => value === array[array.length-1]).length
  if (firstThing == 2 && secondThing == 3){
    return true
  } else if (firstThing == 3 && secondThing == 2){
    return true
  } else 
    return false
}

// PASS  ./code-challenges.test.js
// secret
//   ✓ Create a function that takes in a string and returns a coded message (1 ms)
// particular
//   ✓ Create a function that takes in a string and returns a coded message
// onePair
//   ✓ Create a function that takes in a string and returns a coded message (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.154 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 0.85s.





// PSEUDO CODE 
// Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”.
//  A full house is exactly one pair and one three of a kind.
// I would filter through my first set of cards using array.filter
// I would extend the .filter function by adding my value=>value and making it totally equal to my array.I will search for the first index and get back the .length of what is returned to determine if we can have a three of a kind or a pair
//Next, I would count the next value and do the same except I would ensure I have the last index value by using array.length-1 
// Then I would use a conditional statment to see if the hands have 2 or 3 pairs returned in each filtering instance  and if they dont we get a false.
// ** I recieved some help with this problem**