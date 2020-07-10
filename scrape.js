/importing the framworks
const puppeteer = require('puppeteer');
const fs = require('fs');

// an async function is where everything happens in which they are listed in the funtion
async function scrapeProduct(url){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);

        // we take the xpath of what we would like to scrape, you can do this by saying ctrl+shift-i where you would like to scrape and then find what you would like to
        scrape the right click it and click copy and then click copy xpath, an example of a xpath in this example is /html/head/meta[4] 
        const [el] = await page.$x('/html/head/meta[3]');
        const desc = await el.getProperty('content'); 
        const descTxt = await dest.jsonValue();

/*      if you would like to scrape more then one thing
        const [el2] = await page.$x('/html/head/meta[4]');
        const key = await el2.getProperty('content'); 
        const keyTxt = await key.jsonValue();

        const [el3] = await page.$x('/html/head/title');
        const title = await el3.getProperty('textContent'); 
        const titleTxt = await title.jsonValue();
*/
        console.log({descTxt});
        // if you do more then one console.log({destTxt, keyTxt, titleTxt}); if you do this comment out the other one
        browser.close();

        //this put what was scraped in a json file
        fs.writeFile('scrape.json', JSON.stringify({destTxt, keyTxt, titleTxt}), function (err) {
          if (err) throw err;
          console.log('Saved!');
        });
        }
