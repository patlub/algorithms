function insertionSort(array) {
	let i;
	let j;

	for (i = 1; i < array.length; i++){
		for(j = 0; j < i; j++) {
			if(array[i] < array[j]) {
				const [item] = array.splice(i, 1);
				array.splice(j, 0, item)
			}
		}
	}
	return array
}

console.log(insertionSort([10,5,7,8,2,3,9,1]));
