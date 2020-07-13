const checkPalindrome = (x) => {
    const reversed = x.toString().split('').reverse().join('')
    if(reversed === x.toString()) {
        console.log("is palindrome")
        return true;
   } else {
       console.log("nope not a palindrome")
        return false;
    }
 };
 checkPalindrome(131);
checkPalindrome(45);


// without converting to string
let isPalindrome = function(x){
    if(x < 0){
        return false
    }
    console.log(x === reversedInt(x)) 
    return x === reversedInt(x);
    
}

let reversedInt = function(x){
    let reversed = 0;
    while (x > 0) {
        reversed = (x % 10) + (reversed * 10) ;
        x = Math.floor(x/10);
    }
    return reversed
}

isPalindrome(131)
isPalindrome(49)
