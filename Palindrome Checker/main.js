function palindrome(str) {
    const oldArr = str.split("");
    const newArr = [];
    
    for(let i = 0; i < oldArr.length; i++) {
        if(/[a-zA-Z0-9]/.test(oldArr[i])) {
            newArr.push(oldArr[i].toLowerCase());
        }
    }

    let arrLength = newArr.length - 1;
    for(let i = 0; i < newArr.length; i++) {
        if(newArr[i] !== newArr[arrLength]){
            return false;
        }
        arrLength--;
    }
    return true;
}
  
palindrome("eye");
  