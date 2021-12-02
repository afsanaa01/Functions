class CustomArray {
    constructor() {
      this.elements = arguments;
    }

    Some(num) {
      let result = false;
  
      for (const item of this.elements) {
        if (num(item) == true) {
          result = true;
          break;
        }
      }
      return result;
    }
  }
  
  let arr = new CustomArray(23, 5, 48, 9, 87);
  
    console.log(arr.Some(elem=>elem>15));