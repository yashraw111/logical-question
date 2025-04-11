function removeDuplicates(arr) {
    let result = [];
    arr.forEach(item => {
      if (!result.includes(item)) {
        result.push(item);
      }
    });
    return result;
  }
  console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
  