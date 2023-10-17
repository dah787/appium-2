class RegistrationScreen {

/* CONSTANTS */
phoneNumber_toBeRegistered = '90 751 28 34';
smsCode_Received = '123456';
enterSmsCodeScreenHeaderRu_Expected = 'Введите код из СМС';// 'Введите смс код'



/* SELECTORS */
// экран-1 Registration (for unregistered phone numbers): Приветствие
get agreeTermsCheckbox(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/checkbox"]');}
get agreeTermsCheckboxLabelEn(){ // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="I agree with the terms of the public offer"]');}
get signupButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_sign_up"]');}

// экран-2 Введите смс код
get backButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/backButton"]');}
get supportContacstButton_2(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/support_button"]');}
get enterSmsCodeScreenHeaderRu(){
  return $('//android.widget.TextView[@text="Введите код из СМС"]');} // 'Введите смс код'
get smsCodeInput(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]')}
get smsCodeResendButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_resend"]');}

// экран-21 Мы отправили код подтверждения на ваш номер телефона в SMS
get smsVerificationMessageEn(){ // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="We\'ve just send you sms verification code on your phone number"]');}
get smsVerificationMessageRu(){ // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="Мы отправили код подтверждения на ваш номер телефона в SMS"]');}
get phoneNumberEntered(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_phone"]');}
get phoneNumberEnteredTime(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_time"]');}
get continueButton(){// enterSmsCodeScreen, createPasswordScreen
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

// экран-3 Создайте свой пароль
get createPasswordScreenHeaderRu(){
  return $('//android.widget.TextView[@text="Создайте свой пароль"]');}
get createPasswordInput(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
  return $('//android.widget.EditText[@text="Создайте пароль"]');}
get confirmPasswordInput(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
  return $('//android.widget.EditText[@text="Подтвердить пароль"]');}
get enterSecretWordInput(){
  return $('//android.widget.EditText[@text="Введите секретное слово"]');}
// get continueButton On createPasswordScreen(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

// экран-4 Поздравляем
get congratulationsScreenHeaderRu(){
  return $('//android.widget.TextView[@text="*Поздравляем!Вы успешно зарегистрировались в Apex Bank*"]');}
// get continueButton On congratulationsScreen(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}



/* EOF class */
}

module.exports = new RegistrationScreen();