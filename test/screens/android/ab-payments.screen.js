class PaymentsScreen {

/* CONSTANTS */
titleScreen_Payments_Ru_Expected = 'Платежи';
titleScreen_Payment_Ru_Expected = 'Платеж';



/* SELECTORS */
// экран Платежи
get titleScreen_Payments_Ru(){
  return $('//android.widget.TextView[@text="Платежи"]');}
get item_MobileOperators(){
  return $('//android.widget.TextView[@text="Мобильные операторы"]');}

// экран Платежи > экран Мобильные операторы
get titleScreen_MobileOperators_Ru(){
  return $('//android.widget.TextView[@text="Мобильные операторы"]');}
get item_UzMobile_En(){
  return $('//android.widget.TextView[@text="UzMobile"]');}

// экран Платежи > экран Мобильные операторы > экран мобильного оператора
get titleScreen_MobileOperator(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get titleSection_PhoneNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_label"]');}
get input_PhoneNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get button_PhoneNumberInputClear(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
get button_Continue(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

// экран Платежи > экран Мобильные операторы > экран мобильного оператора > экран Платеж
get titleScreen_Payment(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get titleScreen_Payment_Ru(){
  return $('//android.widget.TextView[@text="Платеж"]');}
get button_OpenCardsList_From(){//далее - окно Выберите карту получателя
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
get input_TransferAmount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
// get paymentScreenInputs(){
  // return $$('android.widget.EditText');}





// ??? экран Платежи > экран Мобильные операторы > экран мобильного оператора > экран Платеж > экран ?
get amount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/transferred_amount"]');}
get homeButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/back_to_home"]');}



/* EOF class */
}

module.exports = new PaymentsScreen();