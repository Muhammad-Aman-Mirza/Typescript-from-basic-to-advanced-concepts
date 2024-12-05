type ApiResponse = unknown

function fetchData(): ApiResponse{
	const response = Math.random() > 0.5
    ? { name: "Alice", age: 30 }
    : { title: "Book Title", author: "John Doe" };

  return response;

}

function processData(response: ApiResponse){
	if (isPerson(response)) {
    console.log(`Person's name is ${response.name}, age is ${response.age}`);
  } else if (isBook(response)) {
    console.log(`Book's title is "${response.title}", written by ${response.author}`);
  } else {
    console.log("Unknown data structure");
  }

}

function isPerson(data: unknown): data is { name: string,age:number }{
	return typeof data === "object" && data !== null && "name" in data && "age" in data
}

function isBook(data: unknown): data is {title: string,author:string}{
	return typeof data === "object" && data !== null && "title" in data && "author" in data
}

const data = fetchData();
processData(data);
