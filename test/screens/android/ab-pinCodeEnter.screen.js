const SGen = require('../../screens/android/ab-general.screen');  // screen > General
const UApp = require("../../utils/android/ab-app.utils");         // utilities > Application

class PinCodeEnterScreen {

/* CONSTANTS */
titleScreen_EnterPinCode_Ru_Expected = 'Введите свой PIN-код';
text_PinCode_Expected = '0123';


/* SELECTORS */
// экран Введите свой PIN-код
get titleScreen_EnterPinCode(){ // * продублировано в GenM
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_pin_code"]');}
get titleScreen_EnterPinCode_Ru(){
  return $('//android.widget.TextView[@text="Введите свой PIN-код"]');}



/* FUNCTIONS */
async handleEnterPinCodeScreen(clickElement) {
  if (await this.titleScreen_EnterPinCode.isDisplayed()) {
    await UApp.appKeyboardTypeIn(this.text_PinCode_Expected);

    // * Перейти к указанному месту.
    await clickElement.waitForDisplayed({ timeout: SGen.number_WaitTime_Expected });
    await clickElement.click(); 
  }
}



/* EOF class */
}

module.exports = new PinCodeEnterScreen();