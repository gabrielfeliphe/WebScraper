const puppeteer = require('puppeteer');

async function main() {

    //const browser = await puppeteer.launch({ headless: false });
    const browser = await puppeteer.launch({
        'args' : [
          '--no-sandbox',
          '--disable-setuid-sandbox'
        ]
      });

    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 720 });
    await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops', { waitUntil: 'networkidle0' });
    const ItensAmount = await page.$eval('body > div.wrapper > div.container.test-site > div > div.col-md-9 > div', element => element.childElementCount);
    const items = [];

    for (var i = 1; i <= ItensAmount; i++) {
        var textFromItem = await page.$eval(`body > div.wrapper > div.container.test-site > div > div.col-md-9 > div > div:nth-child(${i}) > div > div.caption > p`, element => element.innerText);
        var priceFromItem = await page.$eval(`body > div.wrapper > div.container.test-site > div > div.col-md-9 > div > div:nth-child(${i}) > div > div.caption > h4.pull-right.price`, element => element.innerText);

        const item = {
            description: textFromItem,
            price: priceFromItem
        };

        items.push(item);
    }
    return items;
}

module.exports = { main }
