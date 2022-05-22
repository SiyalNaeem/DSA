function sumZero(arr){
    if(arr.length < 2){
        return null;
    }

    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        let sum = arr[left] + arr[right];
        if(sum == 0){
            return [arr[left], arr[right]]
        }else if(sum > 0){
            right--;
        }else{
            left++;
        }
    }
    return null;
    
}

sumZero([1,4,2,-3,0,-2,-1,7])
