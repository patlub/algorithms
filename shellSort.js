// Split the array into halves and merge them recursively 
function shellSort(arr) {
	let increment = arr.length / 2;
	while (increment > 0) {
		for (i = increment; i < arr.length; i++) {
			let j = i;
			let temp = arr[i];

			while (j >= increment && arr[j-increment] > temp) {
				arr[j] = arr[j-increment];
				j = j - increment;
			}

			arr[j] = temp;
		}

		if (increment === 2) {
			increment = 1;
		} else {
			increment = parseInt(increment * 5 / 11);
		}
	}
	return arr;
}


console.log(shellSort([35, 33, 42, 10, 14, 19, 27, 44]));