class HashTable {
    constructor(size=2){
        this.keyMap = new Array(size);
    }

    _hash(key){
        let total = 0;
        let WEIRD_PRIME = 31;
        for(let i=0; i<Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value){
        let hashedKey = this._hash(key);
        if(!this.keyMap[hashedKey]){
            this.keyMap[hashedKey] = [];
        }
        this.keyMap[hashedKey].push([key,value]);
    }

    get(key){
        let hashedKey = this._hash(key);
        if(this.keyMap[hashedKey]){
            let value = this.keyMap[hashedKey];
            for(let i = 0; i < value.length; i++){
                if(value[i][0] == key){
                    return value[i][1];
                }
            }
        }

        return undefined;
    }

    keys(){
        let keys = [];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    keys.push(this.keyMap[i][j][0]);
                }
            }
        }

        return keys;
    }

    values(){
        let values = [];
        for(let i=0; i< this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j < this.keyMap[i].length; j++){
                    if(!values.includes(this.keyMap[i][j][1])){
                        values.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }

        return values;
    }

}

const hashTable = new HashTable();
hashTable.set("pink", 888);
hashTable.set("cyan", 333);
hashTable.set("blue", 21);
hashTable.set("blue", 21);
console.log(hashTable.keys())
console.log(hashTable.values())