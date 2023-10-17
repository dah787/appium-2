const GenM  = require('./ab-general.screen'); // General screen Model

class LoginScreen {

/* CONSTANTS */
// welcomeScreenHeaderEn_Expected = 'Welcome';
welcomeScreenHeaderEn_Expected = 'Login to Apex Bank'; // 'Welcome'
// welcomeScreenHeaderRu_Expected = 'Добро пожаловать';
welcomeScreenHeaderRu_Expected = 'Войти в ApexBank'; // 'Добро пожаловать'
welcomeScreenHeaderUz_Expected = 'Apex Bankga kirish'; // 'Xush kelibsiz'

countryCode_Expected = '+998';

languageEn_loginScreen = 'english'; // 'En'
languageRu_loginScreen = 'russian'; // 'Ru'
languageUz_loginScreen = 'uzbek';   // 'Uz'

languageEn = 'language_en'; // 'english', 'En'
languageRu = 'language_ru'; // 'russian', 'Ru'
languageUz = 'language_uz';   // 'uzbek', 'Uz'

supportContactsListTitleEn_Expected = 'Support contact';
supportContactsListTitleRu_Expected = 'Контакт со службой поддержки';
supportContactsListTitleUz_Expected = 'Qo‘llab-quvvatlash aloqa';
supportContactphoneNumber_Expected = '+998 91 394 11 13';



/* SELECTORS */
get loginButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_login"]')}
get supportContactsButton_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/supportButton"]')}
get supportContactsListTitle(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
// get supportContactsListItemCall(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/container_call"]');}
get supportContactsListItemTelegram(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_firstContact"]');} // '.../container_telegram'
get supportContactsListItemWhatsApp(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_secondContact"]');}
waitForScreenDisplayed_welcomeScreen(){ // wait_for_screen_displayed(){
  this.supportContactsButton_1.waitForDisplayed({timeout: GenM.waitTime})
  this.languageButton.waitForDisplayed({timeout: GenM.waitTime})
  this.phoneNumberInput.waitForDisplayed({timeout: GenM.waitTime})
}

get languageButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]')}
get languagesListTitle(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get languagesListItemEn(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_english"]');}
get languagesListItemRu(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_russian"]');}
get languagesListItemUz(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_uzbek"]');}
get languagesListItems(){
  return $$('android.widget.TextView');}

get welcomeScreenHeaderEn(){ // find element by Xpath - (//tagname[@attribute=value])
  return $('//android.widget.TextView[@text="Login to Apex Bank"]');} // "Welcome"
get welcomeScreenHeaderRu(){
  return $('//android.widget.TextView[@text="Войти в ApexBank"]');} // "Добро пожаловать"
get welcomeScreenHeaderUz(){
  return $('//android.widget.TextView[@text="Apex Bankga kirish"]');} // 'Xush kelibsiz'

// get phoneNumberInputLabelEn(){ // find element by Xpath - (//tagname[@attribute=value])
//   return $('//android.widget.TextView[@text="Enter your mobile number"]');}

get countryCode(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/country_code"]');}
get phoneNumberInput(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input_phone"]')}
// get phoneNumberInputClearButton(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}



/* FUNCTIONS : e2e */
async selectLanguage(language) { // appLanguageChoose
  // /*отладка*/ console.log('\n --> language = ' + language + '\n);
  // // * Нажать кнопку выбора языка интерфейса.
  // await this.languageButton.click();
  // // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
  // // - окно
  // await expect(this.languagesListTitle).toBeDisplayed();
  // // - элементы выбора языков
  // await expect(this.languagesListItemEn).toBeDisplayed();
  // await expect(this.languagesListItemRu).toBeDisplayed();
  // await expect(this.languagesListItemUz).toBeDisplayed();
  // // *- 2.Отображается галочка на элементе текущего выбора языка.
  // // ?

  // * Нажать элемент выбора языка.
  switch (language) {
    case this.languageEn:
      // * Выполнить, если требуемый язык пока не установлен
      if(!await this.welcomeScreenHeaderEn.isDisplayed()) {
        // * Нажать кнопку выбора языка интерфейса.
        await this.languageButton.click();
        // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
        // - окно
        await expect(this.languagesListTitle).toBeDisplayed();
        // - элементы выбора языков
        // -?-
        // *- 2.Отображается галочка на элементе текущего выбора языка.
        // -?-

        // * Нажать элемент выбора языка (например, английский).
        await this.languagesListItemEn.click();
        // *- Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Welcome для английского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(this.languagesListTitle).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(this.welcomeScreenHeaderEn).toHaveText(this.welcomeScreenHeaderEn_Expected);
        // - кнопка выбора языка интерфейса
        await expect(this.languageButton).toBeExisting();
        // await expect(this.languageButton).toBeEnabled();
        // await expect(this.languageButton).toBeDisplayed();
        // + код страны
        await expect(this.countryCode).toHaveText(this.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(this.phoneNumberInput).toBeDisplayed();
      }
      break;
    
    case this.languageRu:
      // * Выполнить, если требуемый язык пока не установлен
      if(!await this.welcomeScreenHeaderRu.isDisplayed()) {
        // * Нажать кнопку выбора языка интерфейса.
        await this.languageButton.click();
        // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
        // - окно
        await expect(this.languagesListTitle).toBeDisplayed();
        // - элементы выбора языков
        // -?-
        // *- 2.Отображается галочка на элементе текущего выбора языка.
        // -?-

        // * Нажать элемент выбора языка (например, русский).
        await this.languagesListItemRu.click();
        // *- Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Добро пожаловать для русского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(this.languagesListTitle).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(this.welcomeScreenHeaderRu).toHaveText(this.welcomeScreenHeaderRu_Expected);
        // - кнопка выбора языка интерфейса
        // await expect(this.languageButton).toBeExisting();
        await expect(this.languageButton).toBeEnabled();
        // await expect(this.languageButton).toBeDisplayed();
        // + код страны
        await expect(this.countryCode).toHaveText(this.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(this.phoneNumberInput).toBeDisplayed();
      }
      break;
  
    case this.languageUz:
      // * Выполнить, если требуемый язык пока не установлен
      if(!await this.welcomeScreenHeaderUz.isDisplayed()) {
        // * Нажать кнопку выбора языка интерфейса.
        await this.languageButton.click();
        // *- 1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
        // - окно
        await expect(this.languagesListTitle).toBeDisplayed();
        // - элементы выбора языков
        // -?-
        // *- 2.Отображается галочка на элементе текущего выбора языка.
        // -?-

        // * Нажать элемент выбора языка (например, узбекский).
        await this.languagesListItemUz.click();
        // *- Закрыто окно Выбор языка. Открыт экран приветствия приложения (например, Xush kelibsiz для узбекского языка), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(this.languagesListTitle).not.toBeDisplayed();
        // - экран приветствия приложения
        await expect(this.welcomeScreenHeaderUz).toHaveText(this.welcomeScreenHeaderUz_Expected);
        // - кнопка выбора языка интерфейса
        // await expect(this.languageButton).toBeExisting();
        // await expect(this.languageButton).toBeEnabled();
        await expect(this.languageButton).toBeDisplayed();
        // + код страны
        await expect(this.countryCode).toHaveText(this.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(this.phoneNumberInput).toBeDisplayed();
      }
      break;
    
    default:
      console.log('\n --> в languagesListItem.. нет элемента: ' + language + '\n');
      break;
  }
}
  


/* FUNCTIONS : elements */
async generateLanguagesList(raw_array, data_array, data_array_elems, elementAttributeKey,
  language_1, language_2, language_3, language_4) { // appLanguagesList(raw_array, ...)
  let elementIndex = 0;
  let elementAttributeText = '';
  for (const element of raw_array) {
    elementAttributeText = await element.getAttribute(elementAttributeKey);

    // /*отладка*/ console.log('\n --> raw_array = ' + raw_array + '\n');
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
      data_array.push(elementAttributeText);
      data_array_elems.push(element);
    }
  }
  // /*отладка*/ console.log('\n --> data_array = ' + data_array + '\n');
  // /*отладка*/ console.log('\n --> data_array_elems[1] = ' + await data_array_elems[1].getAttribute(elementAttributeKey) + '\n');
}



/* EOF class */
}

module.exports = LoginScreen;