function binarySearch(arr, v){
    if(arr.length == 0) return null;
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;
    while (left <= right){
        mid = Math.floor((left+right)/2)
        if(arr[mid] == v){
            return mid;
        }else if(v > arr[mid]){
            left = mid + 1;
        }else {
            right = mid - 1;
        }
    }
    return -1;
}

// binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], -8)

function binarySearchR(arr, v, left, right){
    if(arr.length == 0) return false;
    if(left > right) return false;
    let mid = Math.floor((left+right)/2);
    
    if(arr[mid] == v){
        return true;
    }else if(v > arr[mid]){
        left = mid + 1;
    }else {
        right = mid - 1;
    }

    return binarySearchR(arr, v, left, right);
    
}
let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
binarySearchR(arr, 10, 0, arr.length - 1)

