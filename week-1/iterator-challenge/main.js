const myObject = {
    numbers: [11, 13, 14, 66, 67, 69, 234, 456, 2, 1],
    [Symbol.iterator]: function* () {
      for (const num of this.numbers) {
        if (num % 2 === 0) {
          yield num;
        }
      }
    },
  };
  
  for (let x of myObject) {
    console.log(x);
  }
  