
function mergeSort(array) {
	if(array.length < 2) {
		return array
	}

	const middle = Math.floor(array.length / 2);
	const left = array.slice(0, middle);
	const right = array.slice(middle);

	return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
	const sorted = [];

	while(left.length && right.length) {
		if(left[0] <= right[0]) {
			sorted.push(left.shift())
		} else {
			sorted.push(right.shift())
		}
	}
	return [...sorted, ...left, ...right]
}

console.log(mergeSort([10,5,7,8,2,3,9,1]));
