
function convertToRoman(num) {
    let romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let result = "";

    for(let i = 0; i < arabicNumerals.length; i++) {
        while(arabicNumerals[i] <= num){
            result += romanNumerals[i];
            num -= arabicNumerals[i];
        }
    }
    console.log(result);
    return result;
}
   
convertToRoman(36);