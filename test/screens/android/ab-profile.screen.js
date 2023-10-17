class ProfileScreen {

/* CONSTANTS */
// экран Профиль
screenHeader_Text_Profile_Ru_Expected = 'Профиль';

// // экран Профиль > экран Возможности
// possibilitiesScreenHeaderRu_Expected = 'Возможности';

// экран Профиль > экран Вход или регистрация (сервис myID)
passportSeriesAndNumber_Expected = 'AB1234567'; // passportData_Expected
birthDate_Expected = '11.12.2002';
screenHeader_Text_faceScanner_Ru_Expected = 'Убедитесь, что Ваше лицо находится в выделенном пространстве';

// экран Профиль > экран Безопасность
screenHeader_Text_Security_Expected_Ru = 'Безопасность'; // securityScreenHeaderRu_Expected

// экран Профиль > экран Язык
languageItemNameEn_Expected = 'Application language'; // English (UK)'
languageItemNameRu_Expected = 'Язык приложения'; // 'Русский'
languageItemNameUz_Expected = 'Ilova tili'; // 'O‘zbekcha'

// // экран Профиль > экран Поддержка
// supportItemNameEn_Expected = 'Support';
// supportItemNameRu_Expected = 'Поддержка';
// supportItemNameUz_Expected = 'Qo‘llab-quvvatlash';

// // экран Профиль > экран Контакты
// supportContactsListTitleEn_Expected = 'Support contact';
// supportContactsListTitleRu_Expected = 'Контакт со службой поддержки';
// supportContactsListTitleUz_Expected = 'Qo‘llab-quvvatlash aloqa';



/* SELECTORS */
// экран Профиль
get userIcon_Image(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/imageUserPhoto"]');}
get userName_Text(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_username"]');}

get status_Item(){// экран Профиль > экран Вход или регистрация (сервис myID)
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_status"]');}
get personalData_Item(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_personal_data"]');}
get security_Item(){// экран Профиль > экран Безопасность
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_security"]');}
get theme_Item(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_app_theme"]');}
get language_Item(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_app_language"]');}
get publicOffer_Item(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_public_offer"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Профиль > экран Вход или регистрация (сервис myID)
get screenHeader_Text_loginOrRegister_Ru(){// loginOrRegisterScreenHeaderRu
  return $('//android.widget.TextView[@text="Вход или регистрация"]');}
get documentData_Input(){// passportDataInput
  return $('//android.widget.EditText[@text="AA1234567 | ПИНФЛ"]');}
get scanner_Button(){
  return $('//android.widget.ImageButton[@text=""]');}
get birthDate_Input(){
  return $('//android.widget.EditText[@text="дд.мм.гггг"]');}
get continue_Button(){
  return $('//android.widget.TextView[@text="Продолжить"]');}
get screen_loginOrRegister_TextView_Items(){// loginOrRegisterScreenTextViewItems
  return $$('android.widget.TextView');}
get screen_loginOrRegister_EditText_Items(){// loginOrRegisterScreenEditTextItems
  return $$('android.widget.EditText');}

// экран Профиль > экран Вход или регистрация (сервис myID) > экран сканирования лица
get screenHeader_Text_faceScanner_Ru(){ // faceScannerScreenHeaderRu
  return $('//android.widget.TextView[@text="Убедитесь, что Ваше лицо находится в выделенном пространстве"]');}
get faceScanner_Frame(){// faceScannerArea
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/myidFaceGraphic"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Профиль > экран Личные данные
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Профиль > экран Безопасность
get useFingerprint_Item(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_use_fingerprint"]');}
get useFingerprint_Text(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title_use_fingerprint"]');}
get useFingerprint_Switch(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/switch_use_fingerprint"]');}
get editPin_Item(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_edit_pin"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Профиль > экран Тема
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Профиль > экран Язык
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Профиль > экран Публиччная оферта
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -









// - - - - - - - - - - - - - - НИЖНЕЕ подлежит заменен ВЕРХНИМ - - - - - - - - - - - - - - - -
/* SELECTORS */
// экран-1 (б/и) профиля
get languageItem(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_app_language"]');}
get languageItemName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_app_language"]');} //...tv_language_current
  // экран-1 (б/и) профиля > окно выбора языка
  get languagesListTitle(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get languagesListItemEn(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_language_en"]');} // tv_english
    // return $('//android.widget.TextView[@text="English (UK)"]');}
  get languagesListItemRu(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_language_ru"]');} // tv_russian
    // return $('//android.widget.TextView[@text="Русский"]');}
  get languagesListItemUz(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_language_uz"]');} // item_uzbek
    // return $('//android.widget.TextView[@text="O‘zbekcha"]');}
  get languagesListItems(){
    return $$('android.view.TextView');}
  get languageSaveButton(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_save"]');}

// get supportItem(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_support"]');}
// get supportItemName(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_support"]');}
//   // экран-1 (б/и) профиля > окно выбора контакта со службой поддержки
//   get supportContactsListTitle(){
//     return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}

// get appLogOutItem(){ // appLogOut
//   // return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_logout_toolbar"]');} // item_logout
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_logout"]');}
// get appLogOutConfirmButton(){ // appLogOut
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_confirm"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // экран-11 (б/и) профиля > экран-1 Возможности
// get possibilitiesScreenHeaderRu(){
//   return $('//android.widget.TextView[@text="Возможности"]');}
// get identificationButton(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_identification"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // экран-12 (б/и) профиля > экран-2 Вход или регистрация
// get loginOrRegisterScreenHeaderRu(){
//   return $('//android.widget.TextView[@text="Вход или регистрация"]');}
// get passportDataInput(){
//   return $('//android.widget.EditText[@text="AA1234567 | ПИНФЛ"]');}
// get scannerButton(){
//   return $('//android.widget.ImageButton[@text=""]');}
// get birthDateInput(){
//   return $('//android.widget.EditText[@text="дд.мм.гггг"]');}
// get continueButton(){
//   return $('//android.widget.TextView[@text="Продолжить"]');}
// get loginOrRegisterScreenEditTextItems(){
//   return $$('android.widget.EditText');}
// get loginOrRegisterScreenTextViewItems(){
//   return $$('android.widget.TextView');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// // экран-13 (б/и) профиля > экран-3 (сканирования лица) Убедитесь, что Ваше лицо...
// get faceScannerScreenHeaderRu(){ // makeSureFaceInScannerFocusHeaderRu
//   return $('//android.widget.TextView[@text="Убедитесь, что Ваше лицо находится в выделенном пространстве"]');}
// get faceScannerArea(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/myidFaceGraphic"]');}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Главный > окно кнопки Пройти идентификацию сейчас
get passIdentification_Button(){// performIdentificationButton
  // return $('//android.widget.TextView[@text="Пройти MyID"]');}
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_confirm"]');}
get close_Button(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_close"]');}



/* EOF class */
}

module.exports = new ProfileScreen();