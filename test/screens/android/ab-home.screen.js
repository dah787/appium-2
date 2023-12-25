class HomeScreen {

/* CONSTANTS */
text_ElementAttributeKey_En_Expected = 'resource-id';
// text_ElementAttributeValue_En_Expected = 'com.fincube.apexbank.debug:id/tvCardNumberNotOne';
array_ElementAttributeValues_En_Expected = [
  'com.fincube.apexbank.debug:id/tvCardName',
  'com.fincube.apexbank.debug:id/tvCardBalance',
  'com.fincube.apexbank.debug:id/tvCardNumber',
  'com.fincube.apexbank.debug:id/tvCardDate'
];

titleSection_TotalBalance_Ru_Expected = 'Общий баланс';

text_BalanceHidingSymbols_En_Expected = '--.-- UZS';
text_TotalBalanceHidingSymbols_En_Expected = '********';
text_CardBalanceHidingSymbols_En_Expected = '******';



/* SELECTORS */
// экран Главный : окно push-уведомления (напр., Нажмите, чтобы перевести на)
get window_PushNotification(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clipboardHint"]');}
get titleWindow_PushNotification(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clipboardHint"]').$('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get button_GotIt(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clipboardHint"]').$('//*[@resource-id="com.fincube.apexbank.debug:id/iv_icon_send"]');}


// экран Главный: раздел Профиль
get layout_Profile(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/profileLayout"]');}
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/toolbar"]');}
get button_Profile(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/profileButton"]');}
// get text_ProfileNameNadiaPage_En(){
//   return $('//android.widget.TextView[@text="Nadia Page"]');}
get button_PassVerification(){// performVerificationButton
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnPassVerification"]');}


// экран Главный: раздел Общий баланс (и карты)
get titleSection_TotalBalance_Ru(){
  return $('//android.widget.TextView[@text="Общий баланс"]');}
  
// экран Главный: блок Общий баланс 1/4 (no card yet): заказать или добавить карту
// get orderOrAddCardTitleRu(){
//   return $('//android.widget.TextView[@text="Добавьте карту или закажите в приложении для получения доступа к функционалу"]');}
// get orderOrAddCardButton(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnOrderOrAddCard"]');}
// get moreButtonAllCard(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnAllCard"]');}
// get addNewCardButton(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnAddCard"]');}
// get button_MyCards(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnNext"]');}
// get button_OrderCard(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
// get button_AddCard(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderAddCard"]');}


// экран Главный: раздел Общий баланс (и карты) (already have card)
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


// экран Главный: раздел Общий баланс (и карты) (already have card): Список карт
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


// экран Главный: раздел Переводы
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


// экран Главный: раздел Переводы между своими счетами (и картами)
get button_TransferBetweenCards(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnTransferBetweenCards"]');}


// экран Главный: раздел Вклады
// экран Главный: раздел Микрозаймы

// экран Главный: раздел Кошелек
get titleSection_Wallet_Ru(){
  return $('//android.widget.TextView[@text="Кошелёк"]');}
get text_AccountBalance_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderWallets"]').$('//*[@resource-id="com.fincube.apexbank.debug:id/tvAccountBalance1"]');}
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvAccountBalance1"]');}
get text_AccountNumber_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderWallets"]').$('//*[@resource-id="com.fincube.apexbank.debug:id/tvAccountNumber1"]');}
// get items_titleSection_Wallet_AccountsList_Numbers(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/holderWallets"]').$$('//*[@resource-id="com.fincube.apexbank.debug:id/tvAccountNumber1"]');}

  scrollTo_WalletSection = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/holderWallets"))';
  scrollTo_WalletSectionTitle = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Кошелёк").className("android.widget.TextView"))';
  scrollTo_WalletSection_AccountNumber = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/tvAccountNumber"))';


// экран Главный: раздел Последние операции (Мониторинг)
  scrollTo_MonitoringSection = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/holderMonitoring"))';
  scrollTo_MonitoringSectionTitle = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Последние операции").className("android.widget.TextView"))';


// экран Главный: раздел Курс валют


// экран Главный: нижняя панель навигации
get bottomNav_Home(){ // далее - экран главный
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_home"]');}
get bottomNav_Cards(){ // далее - экран карт
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_cards"]');}
get bottomNav_Payments(){ // далее - экран платежей
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_payment"]');}
get bottomNav_History(){ // далее - экран истории операций
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_history"]');}
get bottomNav_Support(){ // далее - экран поддержки
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/navigation_chat"]');}



/* EOF class */
}

module.exports = new HomeScreen();