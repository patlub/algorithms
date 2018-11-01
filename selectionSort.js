function selectionSort(list) {
	for (let i = 0; i < list.length; i++) {
		let minimum = i;
		for(let j = i+1;j < list.length; j++) {
			if(list[j] < list[minimum] ) {
				minimum = j
			}
		}
		let temp = list[i];
		list[i] = list[minimum];
		list[minimum] = temp;
	}
	return list
}

console.log("selection sort", selectionSort([6,3,7,9,1,4,8,2,]));
