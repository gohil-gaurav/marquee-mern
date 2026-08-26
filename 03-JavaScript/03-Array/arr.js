const numbers = [20, 18, 16, 22, 34,88];
const multipliedNumbers = numbers.map(n => n * 5);
console.log(multipliedNumbers); 

const filteredNumbers = numbers.filter(n => n > 20);
console.log(filteredNumbers);

function findDuplicates(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 3, 3]));