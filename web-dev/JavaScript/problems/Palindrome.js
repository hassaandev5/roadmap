const isPalindrome = (str) => {
    let trim = str.replace(/\s+/g, "").toLowerCase();
    let len = trim.length;

    for(let i = 0; i < trim.length; i++){
        if(trim[i] === trim[(trim.length - 1) - i]){
            // console.log("matches ");
        }
        else{
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("madam"))

// m a d a m
// 0 1 2 3 4