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



/* EOF class */
}

module.exports = new SmsCodeEnterScreen();