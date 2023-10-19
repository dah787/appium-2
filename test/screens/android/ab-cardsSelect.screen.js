class CardsSelectScreen {

/* CONSTANTS */
text_ElementAttributeKey_En_Expected = 'resource-id';
text_ElementAttributeValue_En_Expected = 'com.fincube.apexbank.debug:id/select_card_number';



/* SELECTORS */
get titleSection_CardSelect(){//заголовок Откуда или Куда для нижеследующего поля
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_label"]');}
get button_OpenCardsList(){//далее - titleWindow_Cards_Ru
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
get text_CardName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_name"]');}
get text_CardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}
get text_CardBalance(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_balance"]');}

get titleWindow_Cards_Ru(){
  return $('//android.widget.TextView[@text="Карты"]');}
get itemClass_TextView_titleWindow_Cards(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/layout"]').$$('android.widget.TextView');}



/* EOF class */
}

module.exports = new CardsSelectScreen();