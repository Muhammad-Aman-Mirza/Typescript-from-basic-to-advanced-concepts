function addNumber(a: number, b: number) {
  return a + b;
}
const result = addNumber(10, 20);
console.log(result);

async function fetchNumberAfterDelay(): Promise<Number> {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(44);
    }, 2000);
  });
}

async function asyncNumber() {
  const numberResult = await fetchNumberAfterDelay();
  return numberResult;
}
// asyncNumber().then((num) => {
//   console.log(num);
// });

function getNumberAfterDelay(): Promise<number> {
  return new Promise((resolve, reject) => {
    const number = 100;
    setTimeout(() => {
      resolve(number);
    }, 2000);
  });
}

// getNumberAfterDelay()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

async function fetchNumberWithDelay(): Promise<number> {
  const number = await new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(200);
    }, 200);
  });
  return number;
}

async function asyncUsage() {
  try {
    const result = await fetchNumberWithDelay();
    console.log("check");

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
asyncUsage();
