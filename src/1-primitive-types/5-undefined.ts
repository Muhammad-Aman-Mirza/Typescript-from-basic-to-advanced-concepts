function fetchData():Promise<string | undefined>{
	return new Promise((resolve,reject)=>{
		const data = Math.random() > 0.5 ? "Fetched Data": undefined
		setTimeout(()=>{
			if(data){
				resolve(data)
			}else{
				reject("No data found")
			}
		},1000)
	})
}

async function getData():Promise<string>{
	try{
		const result = await fetchData()
		if(!result){
			throw new Error("Data is undefined")
		}
		return result
	}catch(error:unknown){
		if(error instanceof Error){
			console.log("Error:",error.message);
			
		}
		else{
			console.log("An Unknown error occurred");
			
		}
		return "Default Data"
	}
}

getData().then((data)=>{
	console.log("Result:", data);
	
}).catch((error)=>{
	console.log("Catch block:", error);
	
})
