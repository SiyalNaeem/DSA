function pivot(arr, start=0, end=arr.length-1){
    const swap = (array, i, j) => {
        [array[i], array[j]] = [array[j], array[i]]
    };
    
    let swapIdx = start;
    let pivot = arr[start];
    
    for(let i=start+1; i<end; i++){
        if(pivot > arr[i]){
            swapIdx++
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx);
    
    return swapIdx;
}

function quickSort(arr, start=0, end = arr.length-1){
    if(start < end){

        let pivotIdx = pivot(arr, start, end);
        quickSort(arr, start, pivotIdx-1);
        quickSort(arr, pivotIdx+1, end);
        
    }

    return arr;
}


let data = Array.from({length: 10000000}, () => Math.floor(Math.random() * 10000000));
let t1 = performance.now();
quickSort(data);
let t2 = performance.now();
console.log((t2-t1)/1000)