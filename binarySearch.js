function binarySearch(arr, x) {
	let left = 0;
	let right = arr.length - 1;

	while(left <= right){
		const mid = left + Math.floor( (right - left) / 2);
		if(arr[mid] === x) {
			return mid;
		}
		else if (arr[mid] < x) {
			left = mid + 1;
		}
		else {
			right = mid - 1
		}
	}
	return -1
}

console.log(binarySearch([1,2,3,4,5,6,7], 5));