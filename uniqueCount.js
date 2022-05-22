//For sorted/unsorted array

function unique(arr){
    if(arr.length == 0){
        return null;
    }

    let obj = {};

    for(let val of arr){
        obj[val] = ++obj[val] || 0;
    }

    return Object.keys(obj).length;
    
}

console.log(unique([1,2,2,3,3,5,6,6,6,7]))


//For SORTED ARRAY 

function countUniqueValues(arr){
    let i=0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
    }

    return i+1;
}



console.log(countUniqueValues([1,2,2,3,3,5,6,6,6,7]))









