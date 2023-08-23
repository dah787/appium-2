class Home_ProfileScreen {

/* CONSTANTS */
possibilitiesScreenHeaderRu_Expected = 'Возможности';
passportData_Expected = 'AB1234567';
birthDate_Expected = '11.12.2002';
faceScannerScreenHeaderRu_Expected = 'Убедитесь, что Ваше лицо находится в выделенном пространстве';

  languageItemNameEn_Expected = 'English (UK)';
  languageItemNameRu_Expected = 'Русский';
  languageItemNameUz_Expected = 'O‘zbekcha';

supportItemNameEn_Expected = 'Support';
supportItemNameRu_Expected = 'Поддержка';
supportItemNameUz_Expected = 'Qo‘llab-quvvatlash';

supportContactsListTitleEn_Expected = 'Support contact';
supportContactsListTitleRu_Expected = 'Контакт со службой поддержки';
supportContactsListTitleUz_Expected = 'Qo‘llab-quvvatlash aloqa';



/* SELECTORS */
// экран-1 (б/и) профиля
get yourStatusItem() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_status"]');}
get languageItem() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_app_language"]');}
get languageItemName() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_language_current"]');}
  // экран-1 (б/и) профиля > окно выбора языка
  get languagesListTitle() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get languagesListItemEn() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_english"]');}
  get languagesListItemRu() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_russian"]');}
  get languagesListItemUz() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_uzbek"]');}
  get languagesListItems() {
    return $$('android.view.TextView');}

get supportItem() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_support"]');}
get supportItemName() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_support"]');}
  // экран-1 (б/и) профиля > окно выбора контакта со службой поддержки
  get supportContactsListTitle() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}

get appLogOutItem() { // appLogOut
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_logout_toolbar"]');} // item_logout
get appLogOutConfirmButton() { // appLogOut
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_confirm"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-11 (б/и) профиля > экран-1 Возможности
get possibilitiesScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Возможности"]');}
get identificationButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_identification"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-12 (б/и) профиля > экран-2 Вход или регистрация
get loginOrRegisterScreenHeaderRu() {
  return $('//android.widget.TextView[@text="Вход или регистрация"]');}
get passportDataInput() {
  return $('//android.widget.EditText[@text="AA1234567 | ПИНФЛ"]');}
get scannerButton() {
  return $('//android.widget.ImageButton[@text=""]');}
get birthDateInput() {
  return $('//android.widget.EditText[@text="дд.мм.гггг"]');}
get continueButton() {
  return $('//android.widget.TextView[@text="Продолжить"]');}
get loginOrRegisterScreenEditTextItems() {
  return $$('android.widget.EditText');}
get loginOrRegisterScreenTextViewItems() {
  return $$('android.widget.TextView');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран-13 (б/и) профиля > экран-3 (сканирования лица) Убедитесь, что Ваше лицо...
get faceScannerScreenHeaderRu() { // makeSureFaceInScannerFocusHeaderRu
  return $('//android.widget.TextView[@text="Убедитесь, что Ваше лицо находится в выделенном пространстве"]');}
get faceScannerArea() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/myidFaceGraphic"]');}



/* EOF class */
}

module.exports = new Home_ProfileScreen();