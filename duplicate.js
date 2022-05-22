function areThereDuplicates(...items) {

    if(items.length < 2){
        return false;
    }

    let obj = {};
    
    for(let item of items){
        obj[item] = (obj[item] || 0) + 1;
        if(obj[item] > 1){
            return true;
        }
    }

    return false;
    
}