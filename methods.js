// methods are functions that are associated with an object

// skating club
const clubMember = {
  name: "Alice",
  age: 30,
  membershipType: ["Gold", "Silver"],

  borrowResource: function bS(type, days) {
    console.log(`Member ${this.name} is borrowing a ${type} for ${days} days.`);
    // Simulate borrowing resource logic --- recoding in the database  after checking availability
  },
};

// borroResource method is a function associated with the clubMember object

clubMember.borrowResource("skateboard", 7); // Member Alice is borrowing a skateboard for 7 days.

clubMember.borrowResource("helmet", 3); // Member Alice is borrowing a helmet for 3 days.

// In javascript , almost everything is an object....

// Javascript has built-in objects like Date, Math,String and Array that have methods associated with them.

const currentDate = new Date(); // creates a Date object representing the current date and time

console.log(typeof currentDate);
console.log(currentDate.getDay());

console.log(typeof Math);
console.log(Math.PI);
console.log(clubMember.age);

// Array Methods and string Methods.
