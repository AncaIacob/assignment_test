
const firstPage = require('../pageobjects/first.page');
const page = require('../pageobjects/page');
const fetch = require('node-fetch');


describe('Verify Popular Searches links work correctly', () => {
    it('should check if all links under Dubai apartments are functioning correctly ',async() => {

       await firstPage.open();
       await firstPage.popularSection.scrollIntoView();
       
       await firstPage.btnRent.click();
       await browser.pause(3000);

       const link1 = $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div/div[2]/div[1]/ul/li[1]/a');
       const url1 = link1.getAttribute('href');
       const response1 = fetch(url1);

       const link2 = $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div/div[2]/div[1]/ul/li[2]/a');
       const url2 = link2.getAttribute('href');
       const response2 = fetch(url2);

       const link3 = $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div/div[2]/div[1]/ul/li[3]/a');
       const url3 = link3.getAttribute('href');
       const response3 = fetch(url3);

       
       const link4 = $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div/div[2]/div[1]/ul/li[4]/a');
       const url4 = link4.getAttribute('href');
       const response4 = fetch(url4);

       const link5 = $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[1]/div[2]/div/div[1]/div[1]/div/div/div[2]/div[1]/ul/li[5]/a');
       const url5 = link5.getAttribute('href');
       const response5 = fetch(url5);

       
      expect(response1.status).toHaveValue('200');
      expect(response2.status).toHaveValue('200');
      expect(response3.status).toHaveValue('200');
      expect(response4.status).toHaveValue('200');
      expect(response5.status).toHaveValue('200');
          
        

    }); 
});