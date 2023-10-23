class ProfileScreen {

/* CONSTANTS */
// экран Профиль
titleWindow_Profile_Ru_Expected = 'Профиль';

// // экран Профиль > экран Возможности
// possibilitiesScreenHeaderRu_Expected = 'Возможности';

// экран Профиль > экран Вход или регистрация (сервис myID)
text_PassportSeriesAndNumber_En_Expected = 'AB1234567'; // passportData_Expected
text_BirthDate_Expected = '11.12.2002';
titleWindow_FaceScanner_Ru_Expected = 'Убедитесь, что Ваше лицо находится в выделенном пространстве';

// экран Профиль > экран Безопасность
titleWindow_Security_Ru_Expected = 'Безопасность'; // securityScreenHeaderRu_Expected

// экран Профиль > экран Язык
text_AppLanguage_En_Expected = 'Application language'; // English (UK)'
text_AppLanguage_Ru_Expected = 'Язык приложения'; // 'Русский'
text_AppLanguage_Uz_Expected = 'Ilova tili'; // 'O‘zbekcha'

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
get image_UserIcon(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/imageUserPhoto"]');}
get text_UserName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_username"]');}

get item_Status(){// экран Профиль > экран Вход или регистрация (сервис myID)
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_status"]');}
get item_PersonalData(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_personal_data"]');}
get item_Security(){// экран Профиль > экран Безопасность
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_security"]');}
get item_Theme(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_app_theme"]');}
get item_Language(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_app_language"]');}
get item_PublicOffer(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_public_offer"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Профиль > экран Вход или регистрация (сервис myID)
get titleWindow_LoginOrRegister_Ru_Expected(){// loginOrRegisterScreenHeaderRu
  return $('//android.widget.TextView[@text="Вход или регистрация"]');}
get input_DocumentData(){// passportDataInput
  return $('//android.widget.EditText[@text="AA1234567 | ПИНФЛ"]');}
get button_Scanner(){
  return $('//android.widget.ImageButton[@text=""]');}
get input_BirthDate(){
  return $('//android.widget.EditText[@text="дд.мм.гггг"]');}
get button_Continue(){
  return $('//android.widget.TextView[@text="Продолжить"]');}
get Items_TextView_TitleWindow_LoginOrRegister(){// loginOrRegisterScreenTextViewItems
  return $$('android.widget.TextView');}
get Items_EditText_TitleWindow_LoginOrRegister(){// loginOrRegisterScreenEditTextItems
  return $$('android.widget.EditText');}

// экран Профиль > экран Вход или регистрация (сервис myID) > экран сканирования лица
get titleWindow_FaceScanner_Ru_Expected(){ // faceScannerScreenHeaderRu
  return $('//android.widget.TextView[@text="Убедитесь, что Ваше лицо находится в выделенном пространстве"]');}
get frame_FaceScanner(){// faceScannerArea
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/myidFaceGraphic"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Профиль > экран Личные данные
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Профиль > экран Безопасность
get item_UseFingerprint(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/item_use_fingerprint"]');}
get text_UseFingerprint(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title_use_fingerprint"]');}
get switch_UseFingerprint(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/switch_use_fingerprint"]');}
get item_EditPin(){
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