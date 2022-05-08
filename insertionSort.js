function insertionSort(arr){
	var currentVal;
    for(var i = 1; i < arr.length; i++){
        currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

// function insertionSort2(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
// 		let j = i-1;
// 		while(j > 0 && arr[j] > currentVal){
// 			arr[j+1] = arr[j]
// 		}
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

insertionSort([3,5,2,1,4,6,8,9,77,21,33,41]);