enum Status {
	Pending = 1,
	InProgress = 2,
	Completed = 3
}

enum LogLevel {
	Info = "INFO",
	Warning = "WARNING",
	Error = "ERROR"
}

enum ResponseCode{
	Success = 200,
	NotFound = "NOT_FOUND",
	Unauthorized = 401
}

enum OrderStatus { 
	New = "NEW_ORDER",
	Processed = "PROCESSED",
	Shipped = "SHIPPED",
	Delivered = "DELIVERED",
	Cancelled = "CANCELLED"
}

const currentStatus: Status = Status.InProgress
const logLevel: LogLevel = LogLevel.Error
const responseCode: ResponseCode = ResponseCode.Success

console.log(`LogLevel ${logLevel}`);
console.log(`ResponseCode ${responseCode}`);
console.log(`Status ${currentStatus}`);

let order = {
	id:101,
	status:OrderStatus.New
}

console.log(`Order #${order.id} is currently: ${order.status}`);
