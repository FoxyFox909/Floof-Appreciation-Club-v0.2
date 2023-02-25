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


<button id="testbutton" type="button" onclick="doJSON()">Fetch JSON</button>
			<button id="testbutton" type="button" onclick="printJSON()">Log Array Length</button>
			<button id="testbutton" type="button" onclick="printHeaders()">Print Headers</button>

//console.log('Image id is ' + document.getElementById(('Fox' + b)));
		//setTimeout(() => {
			//let genImg = document.getElementById(('Fox-' + b));
			
		//}, '10')
		//genImg.appendChild(newImg);
		
		//tabCell.innerHTML = foxArray[b]['thumbnail'];
		//document.createElement('table').insertRow(-1).insertCell(-1).innerHTML = foxArray[b]['thumbnail'];


/* WORKING BUT SEPARATE THUMBNAIL ROW PLACER 
for (let b = 0; b < rowLength; b++) {
		let tr = table.insertRow(-1);
		
		let tabCell = tr.insertCell(-1);
		tabCell.innerHTML = foxArray[b]['thumbnail'];
		//document.createElement('table').insertRow(-1).insertCell(-1).innerHTML = foxArray[b]['thumbnail'];
		
	}


*/


// IMPORTANT LINE: document.getElementById('GeneratedTable').rows[1].insertCell(2)
/*for (let b = 0; b < rowLength; b++) {
		let tr = table.insertRow(-1);
		
		let tabCell = tr.insertCell(-1);
		tabCell.innerHTML = foxArray[b]['thumbnail'];
		//document.createElement('table').insertRow(-1).insertCell(-1).innerHTML = foxArray[b]['thumbnail'];
		
	}
*/

//data/json-test.json

/*function call(input) {
	return new Promise((resolve, reject) => {
		return resolve({
			val: input
		})
	})
}

async function test() {
	const res = await call("data/json-test.json")
	console.log(res.val)
console.log(res["val"])
}

function doJSON() {
	console.log("test running");
	test();
}
*/


/*function load (url) {
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
*/





//https://www.encodedna.com/javascript/populate-json-data-to-html-table-using-javascript.htm
//https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/

/*
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
	refinedJSON = promise.resolve().then((result) => {console.log(result)});
	console.log(refinedJSON);
}
*/








//var storedPromise = fetchJSON();

/* 
function fetchJSON() {
		fetch('data/json-test.json')
		.then(response => response.json()).
		then((fox) =>{
			//console.log(fox);
			return fox;
		});
}


const printJSON = async () => {
	const a = await fox;
	console.log(a);
};

*/

/*

function printJSON() {
	var storedPromise = fetchJSON();
	console.log('No Delay');
	storedPromise.then(({common name}) => console.log({common name});
}
*/














/*var savedData = "";



async function fetchJSON() {
	fetch('data/json-test.json')
		.then((response) => response.json())
		.then((data) => console.log(data));
	
}

async function saveJSON() {
	let fetchedData = await fetchJSON();
	//setTimeout(() => {console.log(fetchedData)}, 500);
	savedData += fetchedData;
}

function processJSON() {
	fetchJSON();
	saveJSON();
}

function printJSON() {
	console.log(savedData);
}

*/



	
	

/* 


	function printJSON() {
	fetch('data/json-test.json')
		.then((response) => response.json())
		.then((data) => console.log(data));
	
}





	async function printJSON() {
	fetch('data/json-test.json')
		.then(function (response) {
		response.json();
		return response;
		})
		.then(function (data) {
			console.log(data);
		};
		
	
}

async function writeinVar(){
	let array = await printJSON();
	console.log(array);
}

async function fetchData(){
	let response = await fetch('data/json-test.json');
	let data = await response.json();
	data = JSON.stringify(data);
	data = JSON.parse(data);
	return data;
}

let testdata = await fetchData();
console.log(testdata);
*/