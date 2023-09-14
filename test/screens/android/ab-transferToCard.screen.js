class TransferToCardScreen {

/* CONSTANTS */
transferToCardScreenHeaderRu_Expected = 'Перевод на карту';
receiverSelectBankWindowHeaderRu_Expected = 'Выберите банк';



/* SELECTORS */
// экран Перевод на карту
get transferToCardScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Перевод на карту"]');}

get senderCardNumber() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}
get senderCardBalance() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_balance"]');}
  get senderCardsSelectButton() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
  get senderCardsList() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/layout"]').$$('android.widget.TextView');}

get receiverCardNumber() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/to_card_number"]');}
  get receiverSelectBankWindowHeaderRu() {
    return $('//android.widget.TextView[@text="Выберите банк"]');}
  get receiverBankSelection() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/banksRecyclerView"]');}
  get receiverCardSelectionCheck() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/iv_check"]');}

get transferAmountInput() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get transferCommission() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_help"]');}
get transferTotalAmount() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTotal_transferCard"]');}

get continueButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/buttonContinue_transferCard"]');}

// экран Перевод > экран (б/и) чека перевода на карту
get amount() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_amount"]');}
get homeButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_back_to_home"]');}



/* EOF class */
}

module.exports = new TransferToCardScreen();