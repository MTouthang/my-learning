// Constructor function for creating User objects
function User(name, id) {
  // Define properties of the User object
  this.name = name; // Name of the user
  this.id = id; // Age of the user

  // Method to display information about the user
  this.displayInfo = function () {
    console.log(`User: ${this.name}, ID: ${this.id}`);
  };
}

// Create a new instance of User
const user1 = new User('Alice', 1010);

// Call the displayInfo method to output information about the user
user1.displayInfo(); // Output: User: Alice, ID: 1010
