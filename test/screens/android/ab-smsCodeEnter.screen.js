class SmsCodeEnterScreen {

/* CONSTANTS */
titleScreen_EnterSmsCode_Ru_Expected = 'Введите код из СМС';



/* SELECTORS */
// экран Введите код из СМС
get titleScreen_EnterSmsCode_Ru(){
  return $('//android.widget.TextView[@text="Введите код из СМС"]');}
// get button_Back(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/backButton"]');}
get button_Support(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/supportButton"]');}
get input_SmsCode(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]')}
get button_SmsCodeResend(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_resend"]');}
get button_Continue(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_continue"]');}



/* FUNCTIONS */
async smsCodeInput() { // предварительно установить фокус на поле ввода
  // /*отладка*/ console.log('\n --> input_SmsCode.getText = ' + await SSms.input_SmsCode.getText() + '\n');
  // * Ждем, пока поле ввода не будет заполнено
  let i = 0;
  while (
    // await SSms.input_SmsCode.getText() == '6 цифр' ||
    // (await SSms.input_SmsCode.getText()).length < 6 ||
    i < 100
    ){
      const smsCodeText = await this.input_SmsCode.getText();
      if (smsCodeText == '6 цифр') {
        await driver.pause(500);
      } else if (smsCodeText.length == 6) {
        break;
      }
    i++;
    // /*отладка*/ console.log('\n --> i = ' + i + '\n');
    // /*отладка*/ console.log('\n --> input_SmsCode.getText = ' + await SSms.input_SmsCode.getText() + '\n');
  }
  // /*отладка*/ console.log('\n --> i = ' + i + '\n');
  // /*отладка*/ console.log('\n --> input_SmsCode.getText = ' + await SSms.input_SmsCode.getText() + '\n');
  // await driver.pause(15000);
}



/* EOF class */
}

module.exports = new SmsCodeEnterScreen();