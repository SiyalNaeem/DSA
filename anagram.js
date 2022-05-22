function checkFrequency(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let freqStr1 = {};
    let freqStr2 = {};
    for(let itm of str1){
        freqStr1[itm] = (freqStr1[itm] || 0) + 1;
    }

    for(let itm of str2){
        freqStr2[itm] = (freqStr2[itm] || 0) + 1;
    }

    for(let val in freqStr1){
        if(!freqStr2[val]){
            return false;
        }
        if(freqStr1[val] !== freqStr2[val]){
            return false;
        }
    }
    return true;
}

checkFrequency("cat", "act")

function checkFrequency2(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let freqStr1 = {};
    for(let itm of str1){
        freqStr1[itm] = (freqStr1[itm] || 0) + 1;
    }

    for(let val of str2){
        if(!freqStr1[val]){
            return false;
        }
        freqStr1[val] -= 0;
    }
    return true;
}

checkFrequency2("cat", "act")
