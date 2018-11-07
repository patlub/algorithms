function insertionSort(list) {
	for (let i = 0; i <list.length; i++) {
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

console.log("insertion sort", insertionSort([6,3,7,9,1,4,8,2,]));
