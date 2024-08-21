const obj = {
    name1: "Conner",
    age: 27,
    greet: () => {
      console.log('Hey, my name1 is ${this.name}');
    },
  };
  obj.greet();