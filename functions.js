// A function is a reusable block of code that performs a specific task.

// Functions can take inputs (parameters) and return outputs (return values).

// define/create a function
function sendSMS(name, phoneNumber, message) {
  console.log("start sendSMS function");

  console.log(`Sending SMS to ${name} at ${phoneNumber}: ${message}`);

  // Simulate sending SMS -----
  console.log("SMS sent successfully!");

  return { success: false, error: "networktimeout" }; // returns an object with success status and error message,
}

// calling/invoking a function
// You can call the function multiple times with different arguments.
sendSMS("Alice", "123-456-7890", "Hello Alice! This is a test message.");
sendSMS("Bob", "987-654-3210", "Hi Bob! This is another test message.");
sendSMS(
  "Charlie",
  "555-555-5555",
  "Hey Charlie! This is a final test message."
);

// a function can take parameters of any type, including numbers, strings, arrays, and objects.

function calculateSum(a, b) {
  console.log("start calculateSum function");

  return a + b; // returns the sum of a and b
}
calculateSum(5, 10); // returns 15
calculateSum(3.5, 2.5); // returns 6.0

// a return value can be used to store the result of a function call
// by default functions return undefined if no return statement is provided

function getUserInfo(userId) {
  console.log("start getUserInfo function");

  // Simulate fetching user info from a database --- SQL --
  const userInfo = {
    id: userId,
    name: "John Doe",
    email: "john@gmail.com",
  };

  return userInfo; // returns the user info object
}

const user1 = getUserInfo(1); // user1 will be an object with user info
const user2 = getUserInfo(2); // user2 will be another object with user info

console.log("user1:", user1);
console.log("user2:", user2);


