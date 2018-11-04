function linearSearch(arr, item) {
	let i = 0;
	while(i < arr.length) {
		if(arr[i] === item){
			return i
		}
		i++;
	}
	return -1;
}