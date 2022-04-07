class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    console.log('walk');
  }
}

class Teacher extends Person {
  teach() {
    console.log('teach');
  }
}

const teacher = new Teacher('Xavier');