function SortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
    }
    }
    return arr;
  }
  function secondLargest(arr) {
      const sorted = SortArray(arr);
      const unique = [...new Set(sorted)]; // remove duplicates
      if (unique.length < 2) return null; // check if 2 elements exist
      return unique[unique.length - 2];   // second last element
 }
    console.log(secondLargest([9,2, 5, 8, 4, 3, 9, 5,1])); 