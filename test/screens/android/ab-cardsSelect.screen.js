class CardsSelectScreen {

/* CONSTANTS */
elementAttributeKey = 'resource-id';
elementAttributeValue = 'com.fincube.apexbank.debug:id/select_card_number';



/* SELECTORS */
get cardSelectLabel(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_label"]');}
get cardName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_name"]');}
get cardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}
get cardBalance(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_balance"]');}

get cardsSelectButton(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
  get cardsList(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/layout"]').$$('android.widget.TextView');}



/* EOF class */
}

module.exports = new CardsSelectScreen();