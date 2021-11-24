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
  getTheDetails() {
    return `name is ${this.name} and email is ${this.email}`;
  }
}
const user1 = new Human("Mr", "mr@gmail.com", 99999999, "Hyderbad", "");
console.log(user1);

class User extends Human {
  constructor(name, email, phone, address, password) {
    super(name, email, phone, address);
    this.password = password;
  }
}

const user2 = new User(
  "siva",
  "siva@gmail.com",
  727277272,
  "Bangalore",
  "siva@1277"
);
console.log(user2.getTheDetails());
