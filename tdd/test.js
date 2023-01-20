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
      if (typeof sumAllNumbers === 'function') {
        return '🟢 Test success, function sumAllNumbers is defined';
      } else {
        return '🔴 Test failed, no function sumAllNumbers is defined';
      }
    }
    
    function testSummAllNumbersGivenNumbers() {
      output = [];
      let res = 0;
    
      res = sumAllNumbers(1, 2);
      if (res !== 3) {
        output.push('🔴 Test failed, expected 3 got ' + res);
      } else {
        output.push('🟢 Test success, 1,2 -> 3');
      }
    
      res = sumAllNumbers(1, 5);
      if (res !== 6) {
        output.push('🔴 Test failed, expected 6 got ' + res);
      } else {
        output.push('🟢 Test success, 1,5 -> 6');
      }
    
      res = sumAllNumbers(1, 5, 4, 92);
      if (res !== 102) {
        output.push('🔴 Test failed, expected 102 got ' + res);
      } else {
        output.push('🟢 Test success, 1, 5,4,92 -> 102');
      }
    
      return output.join('\n');
    }
    
    function testSummAllNumbersGivenNumbersAndText() {
      output = [];
      let res = 0;
    
      res = sumAllNumbers(1, 2, 'B');
      if (res !== 3) {
        output.push('🔴 Test failed, expected 3 got ' + res);
      } else {
        output.push('🟢 Test success, 1,2,B -> 3');
      }
    
      res = sumAllNumbers('*', 1, 5);
      if (res !== 6) {
        output.push('🔴 Test failed, expected 6 got ' + res);
      } else {
        output.push('🟢 Test success, *, 1, 5 -> 6');
      }
    
      res = sumAllNumbers(1, 5, 4, null);
      if (res !== 10) {
        output.push('🔴 Test failed, expected 10 got ' + res);
      } else {
        output.push('🟢 Test success, 1, 5, 4, null -> 10');
      }
    
      return output.join('\n');
    }
    
    console.log(testSumAllNumbersExists());
    console.log(testSummAllNumbersGivenNumbers());
    console.log(testSummAllNumbersGivenNumbersAndText());
    