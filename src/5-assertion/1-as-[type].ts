let value: any = "Hello, world!";
let strLength: number = (value as string).length;
console.log(strLength);

interface SuccessResponse {
  type: "success";
  message: string;
}

interface ErrorResponse {
  type: "error";
  code: number;
}

type ApiResponse = SuccessResponse | ErrorResponse;

function handleApiResponse(response: ApiResponse): void {
  // Type narrowing with type guards
  if (response.type === "success") {
    console.log(`Success: ${response.message}`);
  } else if (response.type === "error") {
    // Using `as` to assert that `response` is of type `ErrorResponse`
    const errorResponse = response as ErrorResponse;
    console.log(`Error code: ${errorResponse.code}`);
  }
}
handleApiResponse({ type: "success", message: "Request was successful!" });

function getValue<T>(value: T): T {
  return value;
}

function processResponse(response: unknown): void {
  // Here we assume that the response is of type `SuccessResponse`
  const successResponse = response as SuccessResponse;

  if (successResponse.type === "success") {
    console.log(`Success: ${successResponse.message}`);
  } else {
    console.error("Invalid response type.");
  }
}

const apiResponse: unknown = {
  type: "success",
  message: "Request was successful!",
};

// Safely using type assertion after narrowing down the type
const result = getValue<unknown>(apiResponse);

// Process response with type assertion
processResponse(result);
