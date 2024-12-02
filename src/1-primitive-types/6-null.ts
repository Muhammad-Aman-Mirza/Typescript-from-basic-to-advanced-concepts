function getGreeting(name: string | null):string{
	if(name === null){
		return "Hi, stranger!"
	}
	return `Hi, ${name}`
}

console.log(getGreeting("Aman"),getGreeting(null));

function fetchData(): Promise<string>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("Data fetched successfully")
		},1000)
	})
}

async function displayData():Promise<void>{
	const data = await fetchData()
	console.log({data});
	
}
displayData()

function fetchDataWithError():Promise<string>{
	return new Promise((_,reject)=>{
		setTimeout(()=>{
			reject(new Error("Failed to fetch data"))
		})
	})
}

async function displayDataWithError():Promise<void>{
	try{
		const data = await fetchDataWithError()
		console.log(data);
		
	}catch(error){
		console.log("Error:",error);
		
	}
}

displayDataWithError()

function getUserData(userId: string | null): Promise<string>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(userId === null){
				reject(new Error("User ID is null"))
			} else{
				resolve(`User data for ${userId}`)
			}
		},1000)
	})
}

async function getUserInfo(userId: string | null):Promise<void>{
	try{
		const data = await getUserData(userId)
		console.log({data});
		
	}catch(error){
		console.log("Error:",error);
		
	}
}

getUserInfo("1230")
getUserInfo(null)
