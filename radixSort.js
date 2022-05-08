function getDigit(num, pos){
    return Math.floor(Math.abs(num) / Math.pow(10, pos)) % 10;
}

function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr){
    if(arr.length == 0) return 0;
    let mDigits = 0;
    for(let i=0; i<arr.length; i++){
        mDigits = Math.max(mDigits, digitCount(arr[i]));
    }

    return mDigits;
}

function radixSort(arr) {
    let bucket = [];
    let num = [];

    let md = mostDigits(arr);

    for(let i=0; i<md; i++){
        bucket = Array.from({length: arr.length}, () => []);
        for(let k=0; k<arr.length; k++){
            let idx = getDigit(arr[k], i);
            bucket[idx].push(arr[k]);
        }
        // num = bucket.reduce((a, b) => a.concat(b), []);
        // num = [].concat(...bucket);
        console.log(bucket)

        bucket=[];
    }
    return num;
    
}


getDigit(44332, 3)
digitCount(0)
let data = Array.from({length: 10000000}, () => Math.floor(Math.random() * (100 - 1)) + 1);
let t1 = performance.now();
radixSort(data);
let t2 = performance.now();
console.log((t2-t1)/1000)