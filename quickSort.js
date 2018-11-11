function quickSort(origArray) {
	if (origArray.length <= 1) {
		return origArray;
	}
	const left = [];
	const right = [];
	const newArray = [];
	const pivot = origArray.pop();
	const length = origArray.length;

	for (let i = 0; i < length; i++) {
		if (origArray[i] <= pivot) {
			left.push(origArray[i]);
		} else {
			right.push(origArray[i]);
		}
	}
	return newArray.concat(quickSort(left), pivot, quickSort(right));
}

console.log(quickSort([35, 33, 42, 10, 14, 19, 27, 44]));