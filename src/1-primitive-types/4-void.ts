function logMessage(msg:string):void{
	console.log(msg);
}
logMessage('hi')

function processData(callback: (data: string)=> void):void{
	const data = "Processed Data"
	callback(data)
}

processData((data)=>{
	console.log({data});
})

async function fetchAndLogData(url:string):Promise<void>{
	const response = await fetch(url)
	const data = await response.json()
	console.log(data);
	
}

fetchAndLogData('https://jsonplaceholder.typicode.com/postss')

function delay(ms:number):Promise<void>{
	return new Promise<void>((resolve)=>{
		setTimeout(()=>{
			console.log(`Wait for ${ms} millisecond`);
			resolve()
			
		},ms)
	})
}
delay(1000).then((data)=>{
	console.log("Completed Waiting.",data);
	
})

function performAction(action:()=> void):void{
	action()
}
performAction(()=>{
	console.log("Action Performed");
	
})

type Logger = (message: string)=> void

const logInfo: Logger = (msg)=>{
	console.log(`Info: ${msg}`);
	
}
logInfo("This is an information message.");

function processDatas(data: string): void{
	try{
		if(!data){
			throw new Error('Data is required')
		}
		console.log("Processing data:",data);
		
	}catch(error){
		console.log("Error occurred:", error);
		
	}
}
processDatas("Valid Data")
processDatas("")
