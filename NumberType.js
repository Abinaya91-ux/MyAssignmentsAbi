
function NumberType(num){
    console.log("Inside method")
if(num > 0)
    console.log(`The number is greater than zero:  ${num}`);
    else if (num < 0)
        console.log(`The number is less than zero:  ${num}`);
else if (num === 0)
    console.log(`The number is equal to zero:  ${num}`);
}
NumberType(23);