class CustomArray {
    constructor() {
      this.elements = arguments;
    }

    Includes(callback) {

      let result = false;
  
      for (const item of this.elements) {
        if (callback(item) == true) {
          result = true;
        }
      }
      return result;
    }
  }
  
  let arr = new CustomArray("Afsana","Nergiz","Fatime","Ulviyye");
  
    console.log(arr.Includes(elem=>elem=="Afsana"));



