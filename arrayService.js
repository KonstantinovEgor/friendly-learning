const unique = (arr) => {
    const uniqueArr = [];
    uniqueArr[0] = arr[0];

    for(var i = 1; i < arr.length; i++){
        if(uniqueArr.indexOf(arr[i]) == -1){
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}

module.exports = unique;