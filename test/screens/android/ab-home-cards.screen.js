const GenM = require('../../screens/android/ab-general.screen'); // General screen Model

class Home_CardsScreen {

/* CONSTANTS */
enterSmsCodeScreenHeaderRu_Expected = 'Введите код из СМС';
smsCode_Received = '123456';

transferScreenHeaderRu_Expected = 'Перевод';
transferToCardScreenHeaderRu_Expected = 'Перевод на карту';



/* SELECTORS */
// экран-1 Мои карты
get myCardsScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Мои карты"]');}
get cardsBlockItems() {
  return $$('android.widget.TextView');}
get addCardButtonOnMyCardsScreen() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/addCardButton"]');}
get cardViewFront() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
get cardBalance() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_balance"]');}
get cardViewFrontName() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_name"]');}
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

// экран-21 Добавить карту > экран Введите код из СМС
get enterSmsCodeScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Введите код из СМС"]');}
get smsCodeInput() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]')}
get continueButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-3 (б/и) действий с картой
get cardViewBack() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewBack"]');}
get cardSettingsButton() {
  return $('//android.widget.TextView[@text="Настройка"]');}

// экран-31 (б/и) действий с картой > экран (б/и) настройки карты
get cardViewFrontBalance() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_balance"]');}
get cardViewFrontNumber() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_view_number"]');}
get switchMain() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/switch_main"]');}
get cardBackgroundImageButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bg_image"]');}
get cardBackgroundImageButtonChecked() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/checked"]');}
get cardBackgroundImageButtons() {
  return $$('android.widget.ImageView');}
get cardNameEdit() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
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

// экран-4 Перевод
get transferScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Перевод"]');}
get cardToCardTransferButton() {
  return $('//android.widget.TextView[@text="Перевод на карту"]');}

// экран-41 Перевод > экран-1 Перевод на карту
get transferToCardScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Перевод на карту"]');}
get cardSenderChoose() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/iv_choose_card"]');}
get cardSenderBalance() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_balance"]');}
get cardReceiverNumberInput() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/etReceiverNumber_itemReceiverCard"]');}
get transferAmountInput() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/etTransferAmount_transferToCard"]');}
get cardSenderView() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/senderCardsRecyclerView"]');}
get continueButtonOnTransferToCardScreen() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/buttonNext_TransferToCard"]');}

// экран-42 Перевод > экран-2 Перевод на карту
get cardSenderDetailsArea() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/ivCard_transferCardDetail"]');}
get cardReceiverNumber() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvRecipientCardNumber_transferToCardDetail"]');}
get transferAmount() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTransferAmount_transferToCardDetail"]');}

// экран-43 Перевод > экран-3 (б/и) чека перевода на карту
get amount() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_amount"]');}
get homeButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_back_to_home"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/* EOF class */
}

module.exports = new Home_CardsScreen();