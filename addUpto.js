function addUpto(n){
    let t1=performance.now();
    let answer = 0;
    for(let i=1; i<=n; i++){
        answer += i;
    }
    let t2 = performance.now();
    console.log(t2-t1)
    return answer;
}
console.log(addUpto(10000000))


function addUpto2(n){
    let t1=performance.now();
    let ans = n * (n+1) / 2;
    let t2 = performance.now();
    console.log(t2-t1)
    return ans;
}

console.log(addUpto2(10000000))

