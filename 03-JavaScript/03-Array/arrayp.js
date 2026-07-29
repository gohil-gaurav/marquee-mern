function createArray() {
  const data = [];
  return {
    push(value) {
      data.push(value);
    },
    getElement(index) {
      if (index < 0 || index >= data.length) {
        return undefined;
      }
      return data[index];
    },
    getArray() {
      return data;
    }
  };
}

const myArray = createArray();

myArray.push(10);
myArray.push(20);
myArray.push(30);
myArray.push(40);
myArray.push(50);

console.log(myArray.getElement(1));
console.log(myArray.getArray());