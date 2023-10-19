const GenM = require('./ab-general.screen'); // General screen Model

class CardsScreen {

/* SELECTORS */
// экран-1 Мои карты
get titleScreen_MyCards_Ru(){
  return $('//android.widget.TextView[@text="Мои карты"]');}
get itemClass_TextView_titleScreen_MyCards(){
  return $$('android.widget.TextView');}
get button_AddCard(){//addButtonOnMyCardsScreen
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/addCardButton"]');}
get button_AddCard_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_add_card"]');}
get frame_CardViewFront(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
get text_CardBalance(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardBalance"]');} // ...bank_card_view_balance
get text_CardName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardName"]');} // ...tvCardBankName
waitForScreenDisplayed_myCardsScreen(){
  this.titleScreen_MyCards_Ru.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 15000});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-2 Добавить карту > экран (б/и) ввода данных
get input_CardName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_name"]');}
get input_CardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_number"]');}
get input_CardExpiryDate(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_expiry_date"]');}
get button_AddCard_2(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_add_card"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-3 (б/и) действий с картой
get frame_CardViewBack(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewBack"]');}
get button_CardSettings(){
  // return $('//android.widget.TextView[@text="Свойства карты"]');} // "Настройка"
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/ll_end_actions"]');}

// экран-31 (б/и) действий с картой > экран (б/и) настройки карты
get text_CardName_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_card_name"]');} // ...bank_card_view_name
get text_CardBalance_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_card_balance"]');} // ...bank_card_view_balance
get text_CardNumber_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_card_number"]');} // ...bank_card_view_number
get image_CardBackground(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bg_image"]');}
get image_CardBackgroundChecked(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/checked"]');}
get itemClass_ImageView_CardBackgrounds(){
  return $$('android.widget.ImageView');}
get input_CardName_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');} // ...input_card_name
get button_CardNameInputClear(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
get button_Confirm(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_confirm"]');}

// https://www.automationtestinghub.com/appium-scroll-examples/
scrollToElement_Up = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("APEXBANK").className("android.widget.TextView"))';
scrollToElement_Up_CardName = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/bank_card_view_name"))';
scrollToElement_Middle = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/input"))';
scrollToElement_Down = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/button_confirm"))';

waitForScreenDisplayed_cardSettingsScreen(){ // wait_for_screen_displayed(){
  this.image_CardBackground.waitForDisplayed({timeout: GenM.waitTime + 15000});
}



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // экран-43 Перевод > экран-3 (б/и) чека перевода на карту
// get amount(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_amount"]');}
// get homeButton(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_back_to_home"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/* EOF class */
}

module.exports = new CardsScreen();