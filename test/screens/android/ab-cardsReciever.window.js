class CardsReceiverWindow {

/* CONSTANTS */
text_ElementAttributeKey_En_Expected = 'resource-id';
    text_ElementAttributeValue_En_Expected = 'com.fincube.apexbank.debug:id/select_card_number';
// text_ElementAttributeValue_En_Expected = 'com.fincube.apexbank.debug:id/selection_card_number';



/* SELECTORS */
// экран ...
get button_OpenReceiverCardsList(){//далее - окно Выберите карту получателя
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
get text_ReceiverCardName(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_name"]');}
get text_ReceiverCardNumber(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}
get text_ReceiverCardBalance(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_balance"]');}

// экран ... > окно Выберите карту получателя
get titleWindow_ReceiverSelectCard_Ru(){
      return $('//android.widget.TextView[@text="Карты"]');}
get items_TextView_titleWindow_ReceiverSelectCard(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/layout"]').$$('android.widget.TextView');}



/* EOF class */
}

module.exports = new CardsReceiverWindow();