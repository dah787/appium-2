class HomeScreen {

/* CONSTANTS */
profileName_NadiaPage_Expected = 'Nadia Page'; // related to '99 966 46 60'
// profileName_NadiaPage_Expected = 'Дмитрий'; // related to '99 966 46 60'
totalBalanceLabelRu_Expected = 'Общий баланс';
balanceHidingSymbols = '--.-- UZS';
totalBalanceHidingSymbols = '********';
cardBalanceHidingSymbols = '******';



/* SELECTORS */
// главный экран: блок Профиль
get profileLayout(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/profileLayout"]');}
get profile_Button(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/profileButton"]');}
get profileName_NadiaPage(){
  return $('//android.widget.TextView[@text="Nadia Page"]');}
get passVerification_Button(){// performVerificationButton
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnPassVerification"]');}

// главный экран: блок Общий баланс
get totalBalanceLabelRu(){
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
get myCardsButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnNext"]');}
get orderCardButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
get addCardButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderAddCard"]');}

// главный экран: блок Общий баланс (already have card): Сумма общего баланса
get totalBalance(){ // totalBalanceAmount
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTotalBalance"]');} // ...tvBalance
get showHideAmountButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnHideShowBalance"]');}
// https://www.automationtestinghub.com/appium-scroll-examples/
// https://russianblogs.com/article/88992310695/
scrollToElement_Horizontal = 'new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/tvCardBalance"))';
// scrollToElement_Right_Text_1 = 'new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")).setAsHorizontalList().scrollToEnd(1)';
scrollToElement_Right = 'new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")).setAsHorizontalList().scrollForward()';
scrollToElement_Right_Text = 'new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")).setAsHorizontalList().scrollIntoView(new UiSelector().text("t").className("android.widget.TextView"))';

// главный экран: блок Общий баланс already have card): Список карт
get cardsListBlock(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/listCard"]');}
get cardsBlockItems(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/cardsListSmall"]').$$('android.widget.TextView');}
  // return $$('android.widget.TextView');}
  // return $('new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall").setAsHorizontalList(new UiSelector().className("android.widget.TextView"))');}
  // return $('new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")');}
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/listCard"]');}
  // return $$('//android.widget.TextView[@resource-id="com.fincube.apexbank.debug:id/cardsListSmall"]');}
  // return $$('//*[@resource-id="com.fincube.apexbank.debug:id/cardsListSmall"]');}
  // return $$('//*[@resource-id="com.fincube.apexbank.debug:id/cardsListSmall"][@class="android.widget.TextView"]');}
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/cardsListSmall"]').$$('android.widget.TextView');}
  // scrollToElement_Up = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("APEXBANK").className("android.widget.TextView"))';
get cardView(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');} // ...bank_card_view
get cardName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardName"]');} // ...bank_card_view_name
get cardBalance(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardBalance"]');} // ...bank_card_view_balance
get cardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardNumber"]');}
get cardExpiration(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardDate"]');}
get cardLogo(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bank_card_currency_logo"]');}

// главный экран: блок Переводы
get transferLabelRu(){
  return $('//android.widget.TextView[@text="Переводы"]');}
get receiverDataInput(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderInput"]');}
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/etTransfer"]');}
get scannerButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnScanCard"]');}
get contactsButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnContacts"]');}
get sendButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnSend"]');}

// главный экран: блок Переводы между своими счетами/картами
get transferBetweenCardsButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnTransferBetweenCards"]');}

// главный экран: нижняя панель навигации
get bottomNavHome(){ // navBarHomeTab
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_home"]');}
get bottomNavPayments(){ // navBarPaymentsTab
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_payment"]');}
get bottomNavHistory(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_history"]');}
get bottomNavSupport(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_chat"]');}

  

/* EOF class */
}

module.exports = new HomeScreen();