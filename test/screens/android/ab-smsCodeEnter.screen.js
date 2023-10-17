class SmsCodeEnterScreen {

/* CONSTANTS */
enterSmsCodeScreenHeaderRu_Expected = 'Введите код из СМС';



/* SELECTORS */
// экран Введите код из СМС
get backButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/backButton"]');}
get supportContacstButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/supportButton"]');}
get enterSmsCodeScreenHeaderRu(){
  return $('//android.widget.TextView[@text="Введите код из СМС"]');}
get smsCodeInput(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]')}
get smsCodeResendButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_resend"]');}
get continueButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}



/* EOF class */
}

module.exports = new SmsCodeEnterScreen();