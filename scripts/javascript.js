var foxArray = [];

//Function that takes url to fetch
async function getApi(url) {
	const response = await fetch(url);
	var data = await response.json();
	//console.log(data);
	console.log('foxes fetched');
	return data;
}

//calls function with url to JSON and saves it to global variable
async function doJSON(){
	var data = await getApi('data/json-test.json');
	foxArray = data;
	//console.log(data);
	console.log('data written');
	
}


//Print the saved array
function printJSON() {
	console.log(foxArray.length);
}

var col = [];

function printHeaders() {
	let length = foxArray.length;
	let headerLength = --length;
	
	//get header for table
	for (let i = 0; i < length; i++) {
		for (let key in foxArray[(i + headerLength)]) {
		col.push(key);
		console.log(key);
		}	
	}
//console.log(col);
const table = document.createElement('table');

const tr = table.insertRow(-1);

//Build the header for the table with common name, scientific name, and thumbnail image
console.log('creating table')
for (let i = 0; i < col.length; i++) {
	let th = document.createElement("th");
	th.innerHTML = col[i];
	tr.appendChild(th);
	}
	


/* WIP CODE BROKEN FIX THIS
//add the actual data from the JSON file as rows
for (let a = 0; a < length; a++) {
		tr table.insertRow(1);
		
		for (let j = 0; j < col.length; j++) {
			let tabCell = tr.insertCell(-1)
			tabCell.innerHTML = foxArray[i][col[j]];
		}
	}
*/



//Actually put the newly-created table into a container elemtn
const divShowFoxes = document.getElementById('showFoxes');
divShowFoxes.innerHTML = "";
divShowFoxes.appendChild(table);

}



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