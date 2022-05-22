
//Sliding window

function getHighestSum(arr, n){
    if(arr.length < n) return null;
    if(arr.length === n) {
        arr.reduce((acc, n) => {
            acc += n
        },0);
    };

    let maxSum = 0;
    let tempSum = 0;
    for(let i=0; i<n; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    for(let i=n; i<arr.length; i++){
        tempSum = tempSum - arr[i-n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

getHighestSum([1,4,3,2,56,7,8,99,9,9,9], 4)