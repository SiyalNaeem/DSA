// fib(28) // 317811
// fib(35) // 9227465

function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1) + fib(n-2);
}

fib(28)