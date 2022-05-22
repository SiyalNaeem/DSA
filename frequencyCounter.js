
function sameFrequency(n1, n2){

    n1 = n1.toString();
    n2 = n2.toString();

    let freq1 = {};

    for(let c of n1){
        freq1[c] = (freq1[c] || 0) + 1;
    }

    for(let c of n2){
        if(!freq1[c]){
            return false;
        }
        
        freq1[c] -= 1;
    }

    return true;
}



sameFrequency(22, 222)




