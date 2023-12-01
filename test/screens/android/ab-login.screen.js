const GenM  = require('./ab-general.screen'); // General screen Model

class LoginScreen {

/* CONSTANTS */
titleScreen_Welcome_En_Expected = 'Login to Apex Bank'; //screenHeader_Text_Welcome_En_Expected
titleScreen_Welcome_Ru_Expected = 'Войти в ApexBank'; //screenHeader_Text_Welcome_Ru_Expected
titleScreen_Welcome_Uz_Expected = 'Apex Bankga kirish'; //screenHeader_Text_Welcome_Uz_Expected

text_CountryCode_Expected = '+998'; //countryCode_Text_Expected
text_PhoneNumber_Expected = '+998 91 394 11 13'; //supportContactphoneNumber_Expected

text_English_En_LoginScreen = 'english'; // 'En'
text_Russian_En_LoginScreen = 'russian'; // 'Ru'
text_Uzbek_En_LoginScreen = 'uzbek'; // 'Uz'

text_LanguageEnglish_En = 'language_en'; // 'english', 'En'
text_LanguageRussian_En = 'language_ru'; // 'russian', 'Ru'
text_LanguageUzbek_En = 'language_uz'; // 'uzbek', 'Uz'

titleWindow_Support_En_Expected = 'Support contact'; // supportContactsListTitleEn_Expected
titleWindow_Support_Ru_Expected = 'Контакт со службой поддержки'; //supportContactsListTitleRu_Expected
titleWindow_Support_Uz_Expected = 'Qo‘llab-quvvatlash aloqa'; // supportContactsListTitleUz_Expected
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/* SELECTORS */
// экран рекламы на старте приложения (до экрана Войти в ApexBank)
get button_Login(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_login"]')}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Войти в ApexBank
get titleScreen_Welcome_En(){ // * продублировано в GenM
  return $('//android.widget.TextView[@text="Login to Apex Bank"]');} // "Welcome"
get titleScreen_Welcome_Ru(){ // * продублировано в GenM
  return $('//android.widget.TextView[@text="Войти в ApexBank"]');} // "Добро пожаловать"
get titleScreen_Welcome_Uz(){ // * продублировано в GenM
  return $('//android.widget.TextView[@text="Apex Bankga kirish"]');} // 'Xush kelibsiz'

get button_Language(){ // далее - окно Языки // * продублировано в GenM
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_language"]')}
get button_Support(){ // далее - окно Поддержка // * продублировано в GenM
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_support"]')}

get text_CountryCode(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/left_text"]');} // country_code
get input_PhoneNumber(){ // * продублировано в GenM
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]')} // input_phone
get button_PhoneNumberInputClear(){ // * продублировано в GenM
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}

get check_AgreeWithTerms(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/checkbox"]');}
get text_AgreeWithTerms(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvAgreement"]')}
get text_AgreeWithTerms_En(){ // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="I agree with the terms of the public offer"]');}
get text_AgreeWithTerms_Ru(){
  return $('//android.widget.TextView[@text="Я соглашаюсь с условиями пользовательского соглашения"]');}

get button_Continue(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_continue"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Войти в ApexBank - 2 (доп.элементы после ввода OTP кода из смс)
get input_Password(){
  // return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
  return $('//android.widget.EditText[@text="Введите пароль"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Войти в ApexBank > окно Языки
get titleWindow_Languages(){ // languagesListTitle
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get item_LanguageEnglish(){ // languagesListItemEn
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_english"]');}
get item_LanguageRussian(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_russian"]');}
get item_LanguageUzbek(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_uzbek"]');}
get items_TextView_titleWindow_Languages(){ // languagesListItems
  return $$('android.widget.TextView');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Войти в ApexBank > окно Поддержка
get titleWindow_Support(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get item_Telegram(){ //supportContactsListItemTelegram
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_firstContact"]');} // '.../container_telegram'
get item_WhatsApp(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_secondContact"]');}
waitForScreenDisplayed_Welcome(){ // wait_for_screen_displayed(){
  this.button_Support.waitForDisplayed({timeout: GenM.number_WaitTime_Expected})
  this.button_Language.waitForDisplayed({timeout: GenM.number_WaitTime_Expected})
  this.input_PhoneNumber.waitForDisplayed({timeout: GenM.number_WaitTime_Expected})}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/* FUNCTIONS : e2e */
async selectLanguage(language) { // appLanguageChoose
  // /*отладка*/ console.log('\n --> language = ' + language + '\n);
  // // * Нажать кнопку выбора языка интерфейса.
  // await this.button_Language.click();
  // // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
  // // - окно
  // await expect(this.titleWindow_Languages).toBeDisplayed();
  // // - элементы выбора языков
  // await expect(this.item_LanguageEnglish).toBeDisplayed();
  // await expect(this.item_LanguageRussian).toBeDisplayed();
  // await expect(this.item_LanguageUzbek).toBeDisplayed();
  // // *- 2.Отображается галочка на элементе текущего выбора языка.
  // // ?

  // * Нажать элемент выбора языка.
  switch (language) {
    case this.text_LanguageEnglish_En:
      // * Выполнить, если требуемый язык пока не установлен
      if(!await this.titleScreen_Welcome_En.isDisplayed()) {
        // * Нажать кнопку выбора языка интерфейса.
        await this.button_Language.click();
        // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
        // - окно
        await expect(this.titleWindow_Languages).toBeDisplayed();
        // - элементы выбора языков
        // -?-
        // *- 2.Отображается галочка на элементе текущего выбора языка.
        // -?-

        // * Нажать элемент выбора языка (например, английский).
        await this.item_LanguageEnglish.click();
        // *- Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Welcome для английского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(this.titleWindow_Languages).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(this.titleScreen_Welcome_En).toHaveText(this.titleScreen_Welcome_En_Expected);
        // - кнопка выбора языка интерфейса
        await expect(this.button_Language).toBeExisting();
        // await expect(this.button_Language).toBeEnabled();
        // await expect(this.button_Language).toBeDisplayed();
        // + код страны
        await expect(this.text_CountryCode).toHaveText(this.text_CountryCode_Expected);
        // + поле ввода номера телефона
        await expect(this.input_PhoneNumber).toBeDisplayed();
      }
      break;
    
    case this.text_LanguageRussian_En:
      // * Выполнить, если требуемый язык пока не установлен
      if(!await this.titleScreen_Welcome_Ru.isDisplayed()) {
        // * Нажать кнопку выбора языка интерфейса.
        await this.button_Language.click();
        // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
        // - окно
        await expect(this.titleWindow_Languages).toBeDisplayed();
        // - элементы выбора языков
        // -?-
        // *- 2.Отображается галочка на элементе текущего выбора языка.
        // -?-

        // * Нажать элемент выбора языка (например, русский).
        await this.item_LanguageRussian.click();
        // *- Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Добро пожаловать для русского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(this.titleWindow_Languages).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(this.titleScreen_Welcome_Ru).toHaveText(this.titleScreen_Welcome_Ru_Expected);
        // - кнопка выбора языка интерфейса
        // await expect(this.button_Language).toBeExisting();
        await expect(this.button_Language).toBeEnabled();
        // await expect(this.button_Language).toBeDisplayed();
        // + код страны
        await expect(this.text_CountryCode).toHaveText(this.text_CountryCode_Expected);
        // + поле ввода номера телефона
        await expect(this.input_PhoneNumber).toBeDisplayed();
      }
      break;
  
    case this.text_LanguageUzbek_En:
      // * Выполнить, если требуемый язык пока не установлен
      if(!await this.titleScreen_Welcome_Uz.isDisplayed()) {
        // * Нажать кнопку выбора языка интерфейса.
        await this.button_Language.click();
        // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
        // - окно
        await expect(this.titleWindow_Languages).toBeDisplayed();
        // - элементы выбора языков
        // -?-
        // *- 2.Отображается галочка на элементе текущего выбора языка.
        // -?-

        // * Нажать элемент выбора языка (например, узбекский).
        await this.item_LanguageUzbek.click();
        // *- Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Xush kelibsiz для узбекского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(this.titleWindow_Languages).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(this.titleScreen_Welcome_Uz).toHaveText(this.titleScreen_Welcome_Uz_Expected);
        // - кнопка выбора языка интерфейса
        // await expect(this.button_Language).toBeExisting();
        // await expect(this.button_Language).toBeEnabled();
        await expect(this.button_Language).toBeDisplayed();
        // + код страны
        await expect(this.text_CountryCode).toHaveText(this.text_CountryCode_Expected);
        // + поле ввода номера телефона
        await expect(this.input_PhoneNumber).toBeDisplayed();
      }
      break;
    
    default:
      console.log('\n --> в languagesListItem.. нет элемента: ' + language + '\n');
      break;
  }
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/* FUNCTIONS : elements */
async generateLanguagesList(rawArray, dataArray, dataArray_elems, elementAttributeKey,
  language_1, language_2, language_3, language_4) { // appLanguagesList(rawArray, ...)
  let elementIndex = 0;
  let elementAttributeText = '';
  for (const element of rawArray) {
    elementAttributeText = await element.getAttribute(elementAttributeKey);

    // /*отладка*/ console.log('\n --> rawArray = ' + rawArray + '\n');
    // /*отладка*/ console.log('\n --> language_1 = ' + language_1 + '-' + language_2 + '-' + language_3 + '-' + language_4 + '\n');
    // /*отладка*/ console.log('\n --> await elementAttributeText.endsWith(en) = ' + await elementAttributeText.endsWith('en') + '\n');
    // /*отладка*/ console.log('\n --> await elementAttributeText.endsWith(ru) = ' + await elementAttributeText.endsWith('ru') + '\n');
    // /*отладка*/ console.log('\n --> elementAttributeText = ' + elementAttributeText + '\n');

    if(elementAttributeText == null){
      /*отладка*/ console.log('\n --> elementAttributeText-A = ' + elementAttributeText + '\n');
      // break;
      continue;
    }
    // /*отладка*/ console.log('\n --> elementAttributeText-B = ' + elementAttributeText + '\n');

    if(
      await elementAttributeText.endsWith(language_1) ||
      await elementAttributeText.endsWith(language_2) ||
      await elementAttributeText.endsWith(language_3) ||
      await elementAttributeText.endsWith(language_4)
      // await elementAttributeText.includes(language_4)
    ){
      elementIndex = elementAttributeText.indexOf('_');
      elementAttributeText = elementAttributeText.slice(elementIndex + 1)
      // /*отладка*/ console.log('\n --> elementAttributeText-1 = ' + elementAttributeText + '\n');
      dataArray.push(elementAttributeText);
      dataArray_elems.push(element);
    }
  }
  // /*отладка*/ console.log('\n --> dataArray = ' + dataArray + '\n');
  // /*отладка*/ console.log('\n --> dataArray_elems[1] = ' + await dataArray_elems[1].getAttribute(elementAttributeKey) + '\n');
}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/* EOF class */
}

module.exports = LoginScreen;