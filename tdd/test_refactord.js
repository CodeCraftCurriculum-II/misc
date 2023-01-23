//test function sumAllNumbers that sums all the numbers sent as parameters to it.
/*
    sumAllNumbers(1,2) //-> 3
    sumAllNumbers(5,5,8,2,11) //-> 31
    sumAllNumbers(1,2,3,"B") //-> 6
*/

function sumAllNumbers(...numbers) {
  let sum = 0;
  for (let n of numbers) {
    if (typeof n === 'number') {
      sum += n;
    }
  }
  return sum;
}

function testSumAllNumbersExists() {
  return test(typeof sumAllNumbers === 'function', "SumOfAllNumbers function is defined")
}

function testSummAllNumbersGivenNumbers() {
  output = [];
  
  output.push(test(sumAllNumbers(1, 2) === 3), "Sum 1,2 -> 3");
  output.push(test(sumAllNumbers(1, 5) === 6), "Sum 1,5 -> 6");
  output.push(test(sumAllNumbers(1, 5, 4, 92) === 102,"1, 5,4,92 -> 102"));

  return output.join('\n');
}

function testSummAllNumbersGivenNumbersAndText() {
  output = [];
  
  output.push(test(sumAllNumbers(1, 2, 'B') === 3), "Sum 1,2, B -> 3");
  output.push(test(sumAllNumbers('*', 1, 5) === 6), "Sum *, 1,5 -> 6");
  output.push(test(sumAllNumbers(1, 5, 4, null) === 10,"1, 5,4,null -> 10"));

  return output.join('\n');
}

console.log(testSumAllNumbersExists());
console.log(testSummAllNumbersGivenNumbers());
console.log(testSummAllNumbersGivenNumbersAndText());

// ----- Simple Test Function --------------------------

function test(condition,description){
  let output = `🟢 Test: ${description}`
  if(condition === false){
    output = `🔴 Test: ${description}`
  } 
  return output 
}