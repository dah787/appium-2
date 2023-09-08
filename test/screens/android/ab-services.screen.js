class ServicesScreen {

/* CONSTANTS */
paymentsScreenHeaderRu_Expected = 'Платежи';
paymentScreenHeaderRu_Expected = 'Платеж';



/* SELECTORS */
get mobileOperatorButton() {
  return $('//android.widget.TextView[@text="Мобильные операторы"]');}
get paymentsScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Платежи"]');}
get uzMobileOperatorButton() {
  return $('//android.widget.TextView[@text="UzMobile"]');}
get phoneNumberInput() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get cardSelection() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
get cardSelectionCheck() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/iv_check"]');}
get amountInput() {
  // return $('//android.widget.EditText[@text="Сумма"]');}
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get paymentScreenInputs() {
  return $$('android.widget.EditText');}
get continueButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}
get amount() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/transferred_amount"]');}
get homeButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/back_to_home"]');}



/* EOF class */
}

module.exports = new ServicesScreen();