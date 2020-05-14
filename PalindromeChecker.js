//Two ways

//1.Using String manipulation

function palindrome(str){
    //if string is empty return false
    if(str.length <= 0) return false;
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'')
    //as simple as reversing a string and checking with the original string
    //This takes more space than the for loop approach, but same amount of time.
    return str === str.split('').reverse().join('');
}

//2.Using a for loop

function palindrome(str){
    //if string is empty return false
    str = str.toLowerCase().replace(/[^A-Za-z0-9]/g,'')
    let len = str.length;
    console.log(str);
    if(len <= 0) return false;
    //a palindrome is always symmetrical i.e the 'mirror image' on each index on the right side must equal the left
    //so we check for that and return false of a character that is not equal is encountered
    for(let i=0;i<Math.floor(len/2);i++){
        if(str[i] !== str[len-i-1])
            return false;
    }
    return true;
}