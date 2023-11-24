class CardsReceiverWindow {

/* CONSTANTS */
titleWindow_SelectBankOfReceiver_Ru_Expected = 'Выберите банк';

text_ElementAttributeKey_En_Expected = 'resource-id';
text_ElementAttributeValue_En_Expected = 'com.fincube.apexbank.debug:id/select_card_number';
// text_ElementAttributeValue_En_Expected = 'com.fincube.apexbank.debug:id/selection_card_number';



/* SELECTORS */
// экран ...
// get button_OpenReceiverCardsList(){//далее - окно Выберите карту получателя
//       return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
get text_ReceiverCardName(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_name"]');}
get text_ReceiverCardNumber(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}
get text_ReceiverCardBalance(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_balance"]');}

// экран ... > окно Выберите банк (получателя)
get titleWindow_SelectBankOfReceiver(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTitle"]');}
get items_Window_SelectBankOfReceiver_TextView(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/banksRecyclerView"]').$$('android.widget.TextView');}


// экран ... > окно Выберите карту (получателя)
get titleWindow_ReceiverSelectCard_Ru(){
      return $('//android.widget.TextView[@text="Карты"]');}
get items_Window_SelectCardOfReceiver_TextView(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardsRecyclerView"]').$$('android.widget.TextView');}



/* EOF class */
}

module.exports = new CardsReceiverWindow();