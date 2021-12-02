class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  Map(callback) {

    let result = [];

    for (const item of this.elements) {

      result.push(callback(item));

    }
    return result;
  }
}

let arr = new CustomArray(8, 3, 12, 90, 47);

console.log(arr.Map(item => item*2))

