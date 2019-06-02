function bubbleSort(array) {
	let swapped;
	do{
		swapped = false;
		array.forEach((item, index) => {
			if(item > array[index + 1]) {
				let temp = item;
				array[index] = array[index + 1];
				array[index + 1] = temp;
				swapped = true
			}
		})

	}while (swapped);
	return array;
}

console.log(bubbleSort([10,5,7,8,2,3,9,1]));
