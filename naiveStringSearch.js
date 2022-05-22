function naiveSearch(str1, str2){
    if(!str1) return null;
    if(!str2) return 0;
    if(str1.length < str2.length) return undefined;
    let count = 0;
    for(let i=0; i < str1.length; i++){
        for(let j=0; j < str2.length; j++){
            if(str2[j] !== str1[i+j]){
                break;
            }
            if(j == str2.length - 1){
                count++;
            }
        }
    }
    return count;
}



//fsajnomgmksanmld
//omg
naiveSearch("fsajnomgmksanmomgld","omg")