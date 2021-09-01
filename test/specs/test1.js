const firstPage = require('../pageobjects/first.page');
const page = require('../pageobjects/page');


describe('Verify results match the search criteria', () => {
    it('should check if all displayed properties contain the selected location',async() => {

      await firstPage.open();
      await firstPage.enterLocation('Dubai Marina');
      await browser.pause(2000);
      await firstPage.btnMarina.click();
      await browser.pause(2000);

      
       await firstPage.btnDrop.click();
       await browser.pause(2000); 
       await firstPage.btnBuy.click();
       await browser.pause(2000);
       await  firstPage.btnFind.click();
       await browser.pause(2000);

       const location = $$('//*[@id="body-wrapper"]/main/div[3]/div[3]/div[2]/div[1]/ul/li[9]');
       
       
    
    
      expect(location.getText()).toHaveTextContaining('Dubai Marina');
       
        
        

    }); 
});