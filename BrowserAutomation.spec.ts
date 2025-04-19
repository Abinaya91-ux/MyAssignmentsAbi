import {chromium, firefox, test} from '@playwright/test';
test('open redbus and flipkart in edge and firefox', async({}) => {
    const edgeBrowser = await chromium.launch({headless:false});
    const Edgecontext = await edgeBrowser.newContext();
    console.log('Inside function');
const edgepage = await Edgecontext.newPage();
console.log('new page created for Edge');
await edgepage.goto('https://www.redbus.in');
console.log('Edge:', await edgepage.title());
console.log('Titel of the page is Edge');
await edgepage.waitForTimeout(5000);
await Edgecontext.close();
console.log('Edge closed');

//Launch firefox
const fireBrowser = await firefox.launch({headless:false});
const firecontext = await fireBrowser.newContext();

const firepage = await firecontext.newPage();
await firepage.goto('https://www.flipkart.com');
await firepage.waitForTimeout(5000);
console.log('Fire Fox:', await firepage.title());

await firecontext.close();
})
