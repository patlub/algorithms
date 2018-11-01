// Split the array into halves and merge them recursively 
function shellSort (arr) {
	let interval = 4;
	while( interval >= 1){
		let sublist = [];
		for (let i = 0; i < arr.length; i++) {
			if(i % interval === 0 ) {
				sublist.push(arr[i])
			}
		}
		console.log(interval, "====", arr);
		interval = interval / 2
	}
	return arr;
}

console.log(shellSort([35, 33, 42, 10, 14, 19, 27, 44]));