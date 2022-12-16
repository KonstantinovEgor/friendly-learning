getMaxNumberOfConsecutiveElements = (arr) =>{
    let count = 1;
    let maxCount = 1;
    for(let i = 0; i < arr.length; i++){
        
        if(arr[i] == arr[i+1]){
            count += 1;
            if(count > maxCount) maxCount = count;
        }
        else count = 1;
        
    }
    return maxCount;
}

module.exports = getMaxNumberOfConsecutiveElements;
