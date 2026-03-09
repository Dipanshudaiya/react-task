import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.error('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.error('REQUEST FAILED:', request.url(), request.failure().errorText));

  console.log('Navigating to http://localhost:5175/login...');
  await page.goto('http://localhost:5175/login', { waitUntil: 'networkidle0' });

  console.log('Typing in email...');
  await page.type('input[type="email"]', 'test@test.com');
  
  console.log('Typing in password...');
  await page.type('input[type="password"]', 'password');

  console.log('Clicking login...');
  await page.click('button[type="submit"]');

  await new Promise(r => setTimeout(r, 2000));
  await browser.close();
})();
