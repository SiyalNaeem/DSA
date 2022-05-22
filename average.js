function averagePair(arr, n){

    if(arr.length < 2){
        return false;
    }

    let left = 0;
    let right = 1;

    while(right > left){
        let avg = (arr[left] + arr[right]) / 2;
        if(avg == n){
            return true;
        }
        left++;
        right++;
    }

    return false;
    
}

averagePair([1,3,3,5,6,7,10,12,19],8)