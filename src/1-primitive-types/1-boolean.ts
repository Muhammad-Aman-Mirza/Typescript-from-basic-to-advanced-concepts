/***
 * @boolean
 */

let isTrue: boolean = true;
let isFalse: boolean = false;
// console.log({ isTrue, isFalse });

function yourName(name: string): boolean {
  return name === "Aman";
}

// console.log(yourName("Aman"));
let a: boolean = true;
let b: boolean = false;

// console.log(a && b); // AND (false)
// console.log(a || b); // OR (true)
// console.log(!a); // NOT (false)

function checkBoolean(value: boolean | string): string {
  if (value) {
    return "It's true";
  } else {
    return "It's false";
  }
}
// console.log(checkBoolean(true), checkBoolean("aaa"));

async function checkUserStatus(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("logged_in");
    }, 1000);
  });
}

async function isUserLoggedIn(): Promise<boolean> {
  const userStatus = await checkUserStatus();
  return userStatus === "logged_in";
}

// isUserLoggedIn().then((isLoggedIn) => {
//   console.log("user:", isLoggedIn);
// });

async function checkEmailFormat(email: string): Promise<boolean> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        email
      );
      if (isValid) {
        resolve(true);
      } else {
        reject("Invalid email format");
      }
    }, 1000);
  });
}

async function isValidEmail(email: string): Promise<boolean> {
  try {
    const isValid = await checkEmailFormat(email);
    return isValid;
  } catch (error) {
    console.error("Error checking email format:", error);
    return false;
  }
}
isValidEmail("aman@gmail.com").then((isValid) => {
  console.log(isValid);
});
isValidEmail("nbfkjwebfwekb").then((isValid) => {
  console.log(isValid);
});
