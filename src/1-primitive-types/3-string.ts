function nameConcat(fname:string,lname:string){
	return fname+" "+lname
}
console.log(nameConcat('muhammad','aman'));

async function fetchNameAfterDelay():Promise<string>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve("typescript")
		},3000)
	})
}

async function asyncName(){
	const nameResult = await fetchNameAfterDelay()
	return nameResult
}
asyncName().then((name)=>{
	console.log({name});
	
})

function getNameAfterDelay():Promise<string>{
	return new Promise((resolve,reject)=>{
		const name = 'ES2024'
		setTimeout(()=>{
			resolve(name)
		},3000)
	})
}

getNameAfterDelay().then((res)=>{
	console.log({res});
	
}).catch((error)=>{
	console.log({error});
})

async function asyncUsage() {
  try {
    const result = await getNameAfterDelay();
    console.log("check");

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
asyncUsage();

