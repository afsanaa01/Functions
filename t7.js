class CustomArray {
  constructor() {
    this.elements = arguments;
  }

  ToString(callback){
    let result=""
    for (let i = 0; i < this.elements.length; i++) {
      if (i!=this.elements.length-1) {
        result+=callback(this.elements[i])
      }else{
        result+=this.elements[i]
      }
    }
    return result;
  }
}

let arr = new CustomArray("Bakı", "France", "Moscow", "Italy");

console.log(arr.ToString(elem=>elem+", "));



