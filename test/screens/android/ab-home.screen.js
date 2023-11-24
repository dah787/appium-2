class HomeScreen {

/* CONSTANTS */
// profileName_NadiaPage_Expected = 'Nadia Page'; // related to '99 966 46 60'
// profileName_NadiaPage_Expected = 'Дмитрий'; // related to '99 966 46 60'
titleSection_TotalBalance_Ru_Expected = 'Общий баланс';

text_BalanceHidingSymbols_En_Expected = '--.-- UZS';
text_TotalBalanceHidingSymbols_En_Expected = '********';
text_CardBalanceHidingSymbols_En_Expected = '******';



/* SELECTORS */
// главный экран: блок Профиль
get layout_Profile(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/profileLayout"]');}
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/toolbar"]');}
get button_Profile(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/profileButton"]');}
// get text_ProfileNameNadiaPage_En(){
//   return $('//android.widget.TextView[@text="Nadia Page"]');}
get button_PassVerification(){// performVerificationButton
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnPassVerification"]');}

// главный экран: блок Общий баланс
get titleSection_TotalBalance_Ru(){
  return $('//android.widget.TextView[@text="Общий баланс"]');}
  
// главный экран: блок Общий баланс 1/4 (no card yet): заказать или добавить карту
// get orderOrAddCardTitleRu(){
//   return $('//android.widget.TextView[@text="Добавьте карту или закажите в приложении для получения доступа к функционалу"]');}
// get orderOrAddCardButton(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnOrderOrAddCard"]');}
// get moreButtonAllCard(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnAllCard"]');}
// get addNewCardButton(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnAddCard"]');}
get button_MyCards(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnNext"]');}
get button_OrderCard(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
get button_AddCard(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderAddCard"]');}

// главный экран: блок Общий баланс (already have card): Сумма общего баланса
get text_TotalBalanceAmount(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTotalBalance"]');} // ...tvBalance
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTotalBalanceBig"]');}
get button_ShowHideBalanceAmount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnHideShowBalance"]');}
// https://www.automationtestinghub.com/appium-scroll-examples/
// https://russianblogs.com/article/88992310695/
scrollToElement_Horizontal = 'new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/tvCardBalance"))';
// scrollToElement_Right_Text_1 = 'new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")).setAsHorizontalList().scrollToEnd(1)';
scrollToElement_Right = 'new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")).setAsHorizontalList().scrollForward()';
scrollToElement_Right_Text = 'new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")).setAsHorizontalList().scrollIntoView(new UiSelector().text("t").className("android.widget.TextView"))';

// главный экран: блок Общий баланс already have card): Список карт
get layout_CardsList(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderCardsList"]');}
get items_layout_CardsList(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderCardsList"]').$$('android.widget.TextView');}
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderCardsList"]').$$('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
get items_layout_CardsList_Balances(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderCardsList"]').$$('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardBalance"]');}
get frame_CardViewFront(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');} // ...bank_card_view
get text_CardName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardName"]');} // ...bank_card_view_name
get text_CardBalance(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardBalance"]');} // ...bank_card_view_balance
get text_CardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardNumber"]');}
get text_CardExpiration(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardDate"]');}
get text_CardLogo(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_currency_logo"]');}

// главный экран: блок Переводы
get titleSection_Transfer_Ru(){
  return $('//android.widget.TextView[@text="Переводы"]');}
get input_ReceiverData(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderInput"]');}
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/etTransfer"]');}
get button_Scanner(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnScanCard"]');}
get button_Contacts(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnContacts"]');}
get button_Send(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnSend"]');}

// главный экран: блок Переводы между своими счетами/картами
get button_TransferBetweenCards(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnTransferBetweenCards"]');}

// главный экран: нижняя панель навигации
get bottomNav_Home(){ // navBarHomeTab
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_home"]');}
get bottomNav_Cards(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_cards"]');}
get bottomNav_Payments(){ // navBarPaymentsTab
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_payment"]');}
get bottomNav_History(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_history"]');}
get bottomNav_Support(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_chat"]');}

  

/* EOF class */
}

module.exports = new HomeScreen();