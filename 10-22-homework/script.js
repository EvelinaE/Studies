
for (let myNumber = 1; myNumber <=945; myNumber++) {
  if (myNumber % 9 === 0 && myNumber % 7 === 0 && myNumber % 5 === 0 && myNumber % 3 === 0) {
    console.log('FizzBuzzBiffFuzz')
  } else if (myNumber % 9 === 0 && myNumber % 5 === 0 && myNumber % 3 === 0) {
    console.log('FizzBuzzFuzz')
  } else if (myNumber % 9 === 0 && myNumber % 7 === 0 && myNumber % 3 === 0) {
    console.log('FizzBiffFuzz')
  } else if (myNumber % 9 === 0 && myNumber % 7 === 0 && myNumber % 5 === 0) {
    console.log('FizzBiffFuzz')
  } else if (myNumber % 7 === 0 && myNumber % 5 === 0 && myNumber % 3 === 0) {
    console.log('FizzBuzzBiff')
  } else if (myNumber % 7 === 0 && myNumber % 5 === 0) {
    console.log('BuzzBiff')
  } else if (myNumber % 7 === 0 && myNumber % 3 === 0) {
    console.log('FizzBiff')
  } else if (myNumber % 3 === 0) {
    console.log('Fizz')
  } else if (myNumber % 5 === 0) {
    console.log('Buzz')
  } else if (myNumber % 7 === 0) {
    console.log('Biff')
  } else {
    console.log(myNumber)
  }
  }
  
  
  
  
  
  // 3 - fizz, 5 -Buzz, 7 - biff, 9 - fuzz
