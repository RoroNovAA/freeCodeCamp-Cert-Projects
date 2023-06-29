
function rot13(str) {
    const uppercaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
     "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", 
     "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
     "U", "V", "W", "X", "Y", "Z"];
    const strArr = str.split("");
    const place = 13;
    let result = [];

    for(let i = 0; i < strArr.length; i++) {
      if(!uppercaseAlphabet.includes(strArr[i])){
        result.push(strArr[i]);
      } else {
        let index = uppercaseAlphabet.indexOf(strArr[i]);
        result.push(uppercaseAlphabet[index + place]);
      }
    }
    result = result.join("");
    console.log(result)
    return result;
}

rot13("SERR PBQR PNZC");