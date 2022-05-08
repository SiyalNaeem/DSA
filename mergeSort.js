function merge(left, right){
    let newArr = [];
    while(left.length > 0 && right.length > 0){
        
        if(left[0] < right[0]){
            newArr.push(left.shift())
        }else{
            newArr.push(right.shift())
        }
        
    }

    return newArr.concat(left, right);
    
}


// merge([1,2,3,4],[4,5,7,9])



function merge2(left, right){
    let i=0;
    let j=0;

    let newArr = [];
    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            newArr.push(left[i]);
            i++;
        }else{
            newArr.push(right[j]);
            j++;
        }
    }

    while(i<left.length){
        newArr.push(left[i]);
        i++;
    }

    while(j<right.length){
        newArr.push(right[j]);
        j++;
    }

    return newArr
}

// merge2([1,2,3,4],[4,5,7,9])


function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge2(left, right);
}
let data = Array.from({length: 10000000}, () => Math.floor(Math.random() * 10000000));
let t1 = performance.now();
mergeSort(data);
let t2 = performance.now();
console.log((t2-t1)/1000)