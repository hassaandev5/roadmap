// Fizz Buzz
const fizzBuzz = () => {
    let fizzBuzzArr = [];
    for (let i = 1; i <= 100; i++){
      if(i % 3 === 0 && i % 5 === 0){
        // console.log("FizzBuzz");
        // fizzBuzzArr[i - 1] = "FizzBuzz"
        fizzBuzzArr.push("FizzBuzz")
      }
      else if(i % 3 === 0){
        // console.log("Fizz")
        // fizzBuzzArr[i - 1] = "Fizz"
        fizzBuzzArr.push("Fizz")
      }
      else if (i % 5 === 0){
        // console.log("Buzz")
        // fizzBuzzArr[i - 1] = "Buzz"
        fizzBuzzArr.push("Buzz")
      }
      else{
        // console.log(i)
        // fizzBuzzArr[i - 1] = i;
        fizzBuzzArr.push(i)
      }
    }
    return fizzBuzzArr;
  }
  
  const fizbuz = fizzBuzz();
  console.log(fizbuz)