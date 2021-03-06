/**
 * Quick Sort Best case and avg: O(n log n ) Worst: O(n^2)
 * @param arr
 * @param low
 * @param high
 * @returns {number[]}
 */
export default function quickSort(arr:number[], low:number, high:number):number[]
{
	if(low < high)
	{
		var pivotIndex = partition(arr, low, high);
		quickSort(arr, low, pivotIndex-1);
		quickSort(arr, pivotIndex+1, high);
	}
	
	return arr
}

/**
 * Partition function that returns pivot's position
 * @param arr
 * @param low
 * @param high
 * @returns {number}
 */
function partition(arr:number[], low:number, high:number):number
{
	var pivotIndex = Math.floor((low+high)/2);
	
	// Swaps pivot value with last element in the array's section
	var temp1 = arr[pivotIndex];
	arr[pivotIndex] = arr[high];
	arr[high] = temp1;

	var i = low;
	for(let j=low; j<high; j++)
	{
		if(arr[j] < arr[high])
		{
			// Swaps any value higher than pivot to the left of it.
			var temp2:number = arr[i];
			arr[i] = arr[j];
			arr[j] = temp2;
			i++
		}
	}
	
	// Swaps the value at the end(pivot) with the following value of the
	// swapped ones so pivot is to the right of all the lower ones
	var temp3   = arr[i];
	arr[i]      = arr[high];
	arr[high]   = temp3;

	return i
}