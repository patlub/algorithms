function insertionSort(list) {
	for (let i = 0; i <list.length; i++) {
		if (list[i] > list[i + 1]) {
			let temp = list[i];
			list[i] = list[i + 1];
			list[i + 1] = temp;
		}
		for (let j = i; j > 0; j--) {
			if(list[j] < list[j-1]){
				let temp = list[j-1];
				list[j-1] = list[j];
				list[j] = temp;
			}
		}
	}
	return list
}