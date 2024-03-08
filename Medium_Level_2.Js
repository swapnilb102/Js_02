//Exercise: Level 2 
/*1. Using console.log() print out the following statement: 
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.*/
const statement = "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(statement)

/*2. Using console.log() print out the following quote by Mother Teresa: 
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."*/ 
const quote = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(quote)

//3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let num1 = 10 ;
let num2 = '10' ;
if (typeof num2 !== typeof num1)
{
  let num2Int = parseInt(num2)
  console.log(typeof num2Int)
  console.log("The type of num2 is changed to type of num1")
}
else
  console.log("Type of '10' and Type of 10  are same")

//4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let num3 = '9.8' ;
let num4 = 10 ;
console.log(typeof num3 == typeof num4)
console.log(typeof parseFloat(num3) == typeof num4)

//5. Check if 'on' is found in both python and jargon
let a = 'python';
let b = 'jargon';
console.log(a&&b.includes('on'))

//6. I hope this course is not full of jargon. Check if jargon is in the sentence. 
const sentence = 'I hope this course is not full of jargon.' ;
console.log(sentence.includes('jargon'))

//7. Generate a random number between 0 and 100 inclusively. 
const random1 = Math.floor(Math.random()*101)
console.log(random1)

//8. Generate a random number between 50 and 100 inclusively. 
const random2 = Math.floor(Math.random()*51)+50
console.log(random2)

//9. Generate a random number between 0 and 255 inclusively. 
const random3 = Math.floor(Math.random()*256)
console.log(random3)

//10. Access the 'JavaScript' string characters using a random number. 
const string = 'JavaScript' ;
const random4 = Math.floor(Math.random()*10)
console.log(string[random4])

/*11. Use console.log() and escape characters to print the following pattern. 
1 1 1 1 1 
2 1 2 4 8 
3 1 3 9 27 
4 1 4 16 64 
5 1 5 25 125 */
console.log('1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125')

/*12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction' */
const sentence2 = 'You cannot end a sentence with because because because is a conjunction' ;
console.log(sentence2.substr(31,24))
