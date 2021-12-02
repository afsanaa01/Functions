class CustomArray {
  constructor() {
    this.elements = arguments;
  }
  IndexOf(callback) {

    let result = 0;
    for (let index = 0; index < this.elements.length; index++) {
      let item = this.elements[index]
      if (callback(item)) {
        result += index;
        break;
      }
    }
    return result;
  }
  LastIndexOf(callback) {

    let result = 0;
    for (let index = 0; index < this.elements.length; index++) {
      let item = this.elements[index]
      if (callback(item)) {
        result += index;
      }
    }
    return result;
  }
}

const arr = new CustomArray("Baku", "France", "Moscow", "Italy", "France");

console.log(arr.IndexOf(elem => elem == "France"));
console.log(arr.LastIndexOf(elem => elem == "France"));



