function fact(n){
    if(n < 2){
        return n;
    }
    return n*fact(n-1);
}

fact(0);