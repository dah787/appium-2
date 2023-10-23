class RegistrationScreen {

/* CONSTANTS */
text_PhoneNumberToBeRegistered_Expected = '90 751 28 34';
text_SmsCodeReceived_Expected = '123456';

// titleScreen_EnterSmsCode_Ru_Expected = 'Введите код из СМС';// 'Введите смс код'



/* SELECTORS */
// экран-1 Registration (for unregistered phone numbers): Приветствие
get titleSection_AgreeTerms_En(){ // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="I agree with the terms of the public offer"]');}
get check_AgreeTerms(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/checkbox"]');}
get button_Signup(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_sign_up"]');}

// экран-2 Введите код из СМС
// get titleScreen_EnterSmsCode_Ru(){
//   return $('//android.widget.TextView[@text="Введите код из СМС"]');}
// get button_SupportContacts_2(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/support_button"]');}
// get input_SmsCode(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]')}
// get button_SmsCodeResend(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_resend"]');}

// экран-21 Мы отправили код подтверждения на ваш номер телефона в SMS
get text_SmsVerificationMessage_En(){ // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="We\'ve just send you sms verification code on your phone number"]');}
get text_SmsVerificationMessage_Ru(){ // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="Мы отправили код подтверждения на ваш номер телефона в SMS"]');}
get text_PhoneNumberEntered(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_phone"]');}
get text_PhoneNumberEnterTime(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_time"]');}
get button_Continue(){// enterSmsCodeScreen, createPasswordScreen
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

// экран-3 Создайте свой пароль
get titleScreen_CreatePassword_Ru(){
  return $('//android.widget.TextView[@text="Создайте свой пароль"]');}
get input_CreatePassword_Ru(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
  return $('//android.widget.EditText[@text="Создайте пароль"]');}
get input_ConfirmPassword_Ru(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
  return $('//android.widget.EditText[@text="Подтвердить пароль"]');}
get input_EnterSecretWord_Ru(){
  return $('//android.widget.EditText[@text="Введите секретное слово"]');}
// get continueButton On createPasswordScreen(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

// экран-4 Поздравляем
get titleScreen_Congratulations_Ru(){
  return $('//android.widget.TextView[@text="*Поздравляем!Вы успешно зарегистрировались в Apex Bank*"]');}
// get continueButton On congratulationsScreen(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}



/* EOF class */
}

module.exports = new RegistrationScreen();