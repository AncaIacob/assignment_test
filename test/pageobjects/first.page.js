const Page = require('./page');

class FirstPage extends Page{

    get inputLocation () { return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[1]/div[2]/div/div/ul/input') }
    get btnDrop () {return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[1]/div[1]/div/div[1]/span')}
    get btnBuy () {return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[1]/div[1]/div/div[2]/div/div[1]/div/span[1]/button') }
    get btnFind () {return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[2]/a')}
    get btnMarina () {return $('//*[@id="body-wrapper"]/header/div[4]/div/div[2]/div/div[1]/div[2]/div/div/div/ul/li[1]/button')}
   get popularSection () {return $('//*[@id="body-wrapper"]/main/div[5]/div')} 
   get btnRent () {return $('//*[@id="body-wrapper"]/main/div[5]/div/div[2]/div[2]/div/div/div[2]')} 

  async  enterLocation(text) {
      await  this.inputLocation.setValue(text);
       
    }
    open () {
        return super.open();
    }

  
   

    

}
module.exports = new FirstPage();
