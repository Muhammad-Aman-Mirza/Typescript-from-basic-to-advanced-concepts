interface User {
  id: number;
  name: string;
  email: string;
}

interface UserService {
  getUserById(id: number): Promise<User>;
  getAllUsers(): Promise<User[]>;
}

class MockUserService implements UserService {
  async getUserById(id: number): Promise<User> {
    console.log(`Fetching user with ID: ${id}`);
    return new Promise<User>((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          name: `User ${id}`,
          email: `user${id}@example.com`,
        });
      }, 1000);
    });
  }

  async getAllUsers(): Promise<User[]> {
    console.log("Fetching all users");
    return new Promise<User[]>((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: "User 1", email: "user1@example.com" },
          { id: 2, name: "User 2", email: "user2@example.com" },
          { id: 3, name: "User 3", email: "user3@example.com" },
        ]);
      });
    });
  }
}

async function getUserInfo() {
  const userService = new MockUserService();
  try {
    const user = await userService.getUserById(1);
    console.log(`User Fetched: ${user.name}, Email: ${user.email}`);
    const users = await userService.getAllUsers();
    console.log("All Users:");
    users.forEach((user) => {
      console.log(`${user.id}: ${user.name} (${user.email})`);
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
getUserInfo();
