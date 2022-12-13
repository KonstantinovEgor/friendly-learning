findPrimeNumbers = (arr) =>{
    let newArray = [];
    
    arr.forEach(element => {
        if(element > 1){
            let flag = true;
            for(let i = 2; i < element; i++){
                if(element % 2 == 0){
                    flag = false;
                    break;
                }
            }
            if(flag) newArray.push(element);
        }
    });
    return newArray;
}

module.exports = findPrimeNumbers;