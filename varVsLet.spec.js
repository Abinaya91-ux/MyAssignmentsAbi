import {test} from '@playwright/test';
test('var let example', async () =>{
let browserVersion = "Chrome";
function getBrowserVersion() {
    if (browserVersion === "Chrome") {
        var browserVersion = "1.0.1"; // Local variable
    }
    
    console.log("Inside function - browserVersion: " + browserVersion);
}

getBrowserVersion();
console.log("Global browserVersion: " + browserVersion);
});