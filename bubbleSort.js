function bubbleSort(list) {
	let swapped = true;
	while(swapped){
		swapped = false;
		for( i = 0; i < list.length; i++){
			if (list[i] > list[i + 1]) {
				let temp = list[i];
				list[i] = list[i + 1];
				list[i + 1] = temp;
				swapped = true;
			}
		}
	}
	return list
}

console.log("bubble sort", bubbleSort([6,3,7,9,1,4,8,2,]));
