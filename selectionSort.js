function selectionSort(arr){
    let min;
    for(let i=0; i<arr.length; i++){
        min = i;
        for(let j=i+1; j<arr.length; j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        if(min != i){
            console.log(i,min)
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
    }

    return arr;
}


selectionSort([3,5,2,1,4,6,8,9,77,21,33,41]);