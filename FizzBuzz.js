FizzBuzz = () => {
    for(let i=0;i<100;i++){
        if(i%15 === 0){
            //here were are printing fizz
            console.log("fizzbuzz");
        }
        else if(i%5 === 0){
            //here we are printing buzz
            console.log("buzz");
        }
        else if(i%3 === 0){
            //here we are printing fizzbuzz
            console.log("fizz");
        }
        else{
            console.log(i);
        }
    }
}
FizzBuzz();