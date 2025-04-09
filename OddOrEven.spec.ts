import {test} from '@playwright/test';
test('Find Odd or Even', async () =>{
    function isOddOrEven(){
        let num = 10;
        if(num % 2 == 0)
            console.log(`The number is even:  ${num}`);
        else if(num %2 != 0)
            console.log(`The number is odd:  ${num}`);
    }
    isOddOrEven();
});