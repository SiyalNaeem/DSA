function linearSearch(arr, v){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == v){
            return i;
        }
    }
    return -1;    
}

linearSearch([10,15,2,3,44,3,21],105)



function linearSearchR(arr, v){
    if(arr.length == 0) return false;
    if(arr[0] == v){
        return true;
    }

    return linearSearchR(arr.slice(1), v)
}

linearSearchR([10,15,2,3,44,3,21],21)

