function bubbleSort(list) {
	for(let j = 0; j < list.length; j++) {
		for (let i = 0; i < list.length-1; i++) {
			if (list[i] > list[i + 1]) {
				let temp = list[i];
				list[i] = list[i + 1];
				list[i + 1] = temp;
			}
		}
	}
	return list
}


console.log("bubble sort", bubbleSort([6,3,7,9,1,4,8,2,]));
