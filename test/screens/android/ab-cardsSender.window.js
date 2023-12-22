class CardsSenderWindow {

/* CONSTANTS */
text_ElementAttributeKey_En_Expected = 'resource-id';
text_ElementAttributeValue_En_Expected_Name = 'com.fincube.apexbank.debug:id/select_card_name';
// text_ElementAttributeValue_En_Expected = 'com.fincube.apexbank.debug:id/select_card_number';
text_ElementAttributeValue_En_Expected_Number = 'com.fincube.apexbank.debug:id/select_card_number';
text_ElementAttributeValue_En_Expected_Balance = 'com.fincube.apexbank.debug:id/select_card_balance';



/* SELECTORS */
// экран ...
// get button_OpenSenderCardsList(){//далее - окно Выберите карту отправителя
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
get text_SenderCardName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_name"]');}
get text_SenderCardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}
get text_SenderCardBalance(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_balance"]');}

// экран ... > окно выбора карты или счета (Выберите карту) отправителя
get titleWindow_SenderSelectCard_Ru(){
  return $('//android.widget.TextView[@text="Карты"]');}
get items_Window_SelectCardOfSender_CardName(){
  return $$(`//*[@resource-id="${this.text_ElementAttributeValue_En_Expected_Name}"]`);}
get items_Window_SelectCardOfSender_CardNumber(){
  return $$(`//*[@resource-id="${this.text_ElementAttributeValue_En_Expected_Number}"]`);}
get items_Window_SelectCardOfSender_CardBalance(){
  return $$(`//*[@resource-id="${this.text_ElementAttributeValue_En_Expected_Balance}"]`);}

get items_titleWindow_SenderSelectCard(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/design_bottom_sheet"]')
    .$('//*[@resource-id="com.fincube.apexbank.debug:id/layout"]')
    .$$('//android.view.ViewGroup');}

// экран ... > окно Счета отправителя
get titleWindow_SenderSelectAccount_Ru(){
  return $('//android.widget.TextView[@text="Счета"]');}
get items_Window_SelectAccountOfSender_AccountName(){
  return $$(`//*[@resource-id="${this.text_ElementAttributeValue_En_Expected_Name}"]`);}
get items_Window_SelectAccountOfSender_AccountBalance(){
  return $$(`//*[@resource-id="${this.text_ElementAttributeValue_En_Expected_Balance}"]`);}
  
// /* SELECTORS */
// get titleSection_CardSelect(){//заголовок Откуда или Куда для нижеследующего поля
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_label"]');}
// get button_OpenCardsList(){//далее - titleWindow_Cards_Ru
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
// get text_CardName(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_name"]');}
// get text_CardNumber(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}
// get text_CardBalance(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_balance"]');}

// // экран ... > окно Карты (или Выберите карту, ...)
// get titleWindow_Cards_Ru(){
//   return $('//android.widget.TextView[@text="Карты"]');}
// get items_TextView_titleWindow_Cards(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/layout"]').$$('android.widget.TextView');}



/* EOF class */
}

module.exports = new CardsSenderWindow();