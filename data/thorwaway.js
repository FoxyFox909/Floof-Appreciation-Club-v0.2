function load (url) {
	return new Promise(async function (resolve, reject) {
		const res = await fetch(url);
		
		console.log('Loaded: ', url);
		
		
		resolve(res.json());
		})
	}

//const promise = load('data/json-test.json');
const promise = load('data/json-test.json');

function doJSON() {
	console.log('doJSON function loaded')
	let savedData = promise;
	console.log(savedData);
	console.log(typeof savedData);
	//refinedJSON = promise.resolve().then((result) => {console.log(result)});
	let refinedJSON = promise.valueOf;
	console.log(refinedJSON);
}