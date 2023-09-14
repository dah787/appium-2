const GenM = require('./ab-general.screen'); // General screen Model

class CardsScreen {

/* CONSTANTS */



/* SELECTORS */
// экран-1 Мои карты
get myCardsScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Мои карты"]');}
get cardsBlockItems() {
  return $$('android.widget.TextView');}
get addButtonOnMyCardsScreen() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/addCardButton"]');}
get addCardButtonOnMyCardsScreen() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_add_card"]');}
get cardViewFront() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
get cardBalance() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardBalance"]');} // ...bank_card_view_balance
get cardViewFrontNameOnMyCardsScreen() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardName"]');} // ...tvCardBankName
// get cardViewFrontNumber() {
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_number"]');}

waitForScreenDisplayed_myCardsScreen() {
  this.myCardsScreenHeaderRu.waitForDisplayed({timeout: GenM.waitTime + 15000});
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-2 Добавить карту > экран (б/и) ввода данных
get cardNameInput() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_name"]');}
get cardNumberInput() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_number"]');}
get cardExpiryDateInput() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_expiry_date"]');}
get addCardButtonOnDataInputScreen() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_add_card"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-3 (б/и) действий с картой
get cardViewBack() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewBack"]');}
get cardSettingsButton() {
  // return $('//android.widget.TextView[@text="Свойства карты"]');} // "Настройка"
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/ll_end_actions"]');}

// экран-31 (б/и) действий с картой > экран (б/и) настройки карты
get cardViewFrontName() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_card_name"]');} // ...bank_card_view_name
get cardViewFrontBalance() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_card_balance"]');} // ...bank_card_view_balance
get cardViewFrontNumber() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_card_number"]');} // ...bank_card_view_number
// get switchMain() {
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/switch_main"]');}
get cardBackgroundImageButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bg_image"]');}
get cardBackgroundImageButtonChecked() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/checked"]');}
get cardBackgroundImageButtons() {
  return $$('android.widget.ImageView');}
get cardNameEdit() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');} // ...input_card_name
get cardNameEditClearButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
get confirmButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_confirm"]');}

// https://www.automationtestinghub.com/appium-scroll-examples/
scrollToElement_Up = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("APEXBANK").className("android.widget.TextView"))';
scrollToElement_Up_CardName = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/bank_card_view_name"))';
scrollToElement_Middle = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/input"))';
scrollToElement_Down = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/button_confirm"))';

waitForScreenDisplayed_cardSettingsScreen() { // wait_for_screen_displayed() {
  this.cardBackgroundImageButton.waitForDisplayed({timeout: GenM.waitTime + 15000});
}



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // экран-43 Перевод > экран-3 (б/и) чека перевода на карту
// get amount() {
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_amount"]');}
// get homeButton() {
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_back_to_home"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/* EOF class */
}

module.exports = new CardsScreen();