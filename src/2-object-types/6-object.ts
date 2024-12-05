// Define an interface for the complex object with properties and functions
interface Example {
  id: number;
  name: string;
  details: {
    description: string;
    active: boolean;
  };
  tags: string[];
  createdAt: Date;

  // Function that returns a string with the object description
  getSummary(): string;

  // Function that toggles the 'active' status in the 'details'
  toggleActiveStatus(): void;
}

// Create an object 'a' of type 'Example'
const a: Example = {
  id: 1,
  name: "Sample Object",
  details: {
    description: "This is a complex example object.",
    active: true
  },
  tags: ["tag1", "tag2", "tag3"],
  createdAt: new Date("2024-12-05"),

  // Method to get a summary of the object
  getSummary: function(): string {
    return `${this.name} (ID: ${this.id}) - ${this.details.description}`;
  },

  // Method to toggle the 'active' status
  toggleActiveStatus: function(): void {
    this.details.active = !this.details.active;
  }
};

// Usage example
console.log(a.getSummary());  // Output: Sample Object (ID: 1) - This is a complex example object.
console.log(`Active status: ${a.details.active}`);  // Output: Active status: true

// Toggle active status
a.toggleActiveStatus();
console.log(`Active status after toggle: ${a.details.active}`);  // Output: Active status after toggle: false
