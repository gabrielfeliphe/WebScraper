const puppeteer = require('puppeteer');
require('dotenv').config()

const express = require('express')
const app = express()


async function main() {

    const browser = await puppeteer.launch({ headless: false });

    //body > div.wrapper > div.container.test-site > div > div.col-md-9 > div
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 720 });
    await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops', { waitUntil: 'networkidle0' });
    const ItensAmount = await page.$eval('body > div.wrapper > div.container.test-site > div > div.col-md-9 > div', element => element.childElementCount);

    for (var i = 1; i <=5; i++) { // DISCLAMER back ItensAmount
        var textFromItem = await page.$eval(`body > div.wrapper > div.container.test-site > div > div.col-md-9 > div > div:nth-child(${i}) > div > div.caption`, element => element.outerText);
        console.log(textFromItem)
    }
}

main();