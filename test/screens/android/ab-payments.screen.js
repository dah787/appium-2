class PaymentsScreen {

/* CONSTANTS */
paymentsScreenHeaderRu_Expected = 'Платежи';
paymentScreenHeaderRu_Expected = 'Платеж';



/* SELECTORS */
// экран Платежи
get paymentsScreenHeaderRu(){
  return $('//android.widget.TextView[@text="Платежи"]');}
get mobileOperatorsButtonRu(){
  return $('//android.widget.TextView[@text="Мобильные операторы"]');}

// экран Платежи > экран Мобильные операторы
get mobileOperatorsScreenHeaderRu(){
  return $('//android.widget.TextView[@text="Мобильные операторы"]');}
get uzMobileButton(){
  return $('//android.widget.TextView[@text="UzMobile"]');}

// экран Платежи > экран Мобильные операторы > экран мобильного оператора
get mobileOperatorScreenHeader(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get phoneNumberLabel(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_label"]');}
get phoneNumberInput(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get phoneNumberInputClearButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
get continueButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

// экран Платежи > экран Мобильные операторы > экран мобильного оператора > экран Платеж
get paymentScreenHeader(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get paymentScreenHeaderRu(){
  return $('//android.widget.TextView[@text="Платеж"]');}
// get cardSelectLabel(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_label"]');}
// get cardsSelectButton(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
// get cardSelectionCheck(){
  // return $$('//*[@resource-id="com.fincube.apexbank.debug:id/iv_check"]');}

// get cardsList(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/layout"]').$$('android.widget.TextView');}

get amountInput(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
// get paymentScreenInputs(){
  // return $$('android.widget.EditText');}

// экран Платежи > экран Мобильные операторы > экран мобильного оператора > экран Платеж > экран ?
get amount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/transferred_amount"]');}
get homeButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/back_to_home"]');}



/* EOF class */
}

module.exports = new PaymentsScreen();