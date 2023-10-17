class TransferBetweenCardsScreen {

/* CONSTANTS */
transferBetweenCardsScreenHeaderRu_Expected = 'Между своими счетами';



/* SELECTORS */
// экран Между своими счетами
get transferBetweenCardsScreenHeaderRu(){
  return $('//android.widget.TextView[@text="Между своими счетами"]');}

get cardsSelectButtons(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]').$$('android.view.ViewGroup');}

get fromCardsSelectButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/fromField_transferOwnCard"]');}
get toCardsSelectButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/toField_transferOwnCard"]');}

get cardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}
get cardBalance(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_balance"]');}

get fromCardsSelectButton_cardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/fromField_transferOwnCard"]').$('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}

get cardsList(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/layout"]').$$('android.widget.TextView');}

get transferAmountInput(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get transferCommission(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_help"]');}
get transferTotalAmount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTotal_transferCard"]');}

get continueButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/buttonContinue_transferOwnCard"]');}

// экран Перевод > экран (б/и) чека перевода на карту
get amount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_amount"]');}
get homeButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_back_to_home"]');}



/* EOF class */
}

module.exports = new TransferBetweenCardsScreen();