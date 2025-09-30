import { Given, When, Then } from "@cucumber/cucumber";
import * as chai from "chai"

Given(/^Google page is opened$/, async function(){

     browser.url("https://www.google.com")
     //await browser.pause(7000)
     await browser.pause(1000)
     console.log(`after opening browser...`);
})

When(/^Search with (.*)$/, async function(searchItem){
    console.log(`>> searchItem: ${searchItem}`);
    let ele = await  $(`[name=q]`)
    await ele.setValue(searchItem)
    await browser.keys("Enter")
})
Then(/^Click on the first search result$/, async function(){
    let ele = await  $(`<h3>`)
    ele.click()
})

Then(/^Then URL should match (.*)$/, async function(ExpectedURL){
    console.log(`>> expectedURL: ${ExpectedURL}`);
    let url= await browser.getUrl()
    chai.expect(url).to.equal(ExpectedURL)
})