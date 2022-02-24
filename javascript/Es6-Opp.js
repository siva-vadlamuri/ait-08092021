class Human {
  // es6
  constructor(name, email, phone, address) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    // this.password = password;
  }
  //   login() {
  //     console.log(this.name, this.phone);
  //   }
  getTheDetails = () => `name is ${this.name} and email is ${this.email}`;
}
const user1 = new Human("Mr", "mr@gmail.com", 99999999, "Hyderbad", "");
console.log(user1.getTheDetails());

class User extends Human {
  constructor(name, email, phone, address, password) {
    super(name, email, phone, address);
    this.password = password;
  }
  getTheDetails = () =>
    `name is ${this.name} and email is ${this.email} and password ${this.password}`;
}

const user2 = new User(
  "siva",
  "siva@gmail.com",
  727277272,
  "Bangalore",
  "siva@1277"
);
console.log(user2.getTheDetails());

class Employee {
  #bonus = 12;
  constructor(employeeName, employeeAddress) {
    this.employeeId = Date.now();
    this.employeeName = employeeName;
    this.employeeAddress = employeeAddress;
    this.baseSalary = 50000;
  }
  salary = () => {
    return this.baseSalary + (this.baseSalary * this.#bonus) / 100;
  };
}

const ravi = new Employee("ravi", "achieversit");
// ravi.bonus = 50;
// ravi.#bonus = 50;
console.log(ravi);
const salaryOfRavi = ravi.salary();

console.log(salaryOfRavi);
