const AppUM   = require('../../utils/android/ab-app.utils');              // Application Utilities
const DSysM   = require("../../utils/android/dt-device.utils");           // Android Utilities Model
const HomeM   = require('../../screens/android/ab-home.screen');          // Home screen Model
const GenM    = require('../../screens/android/ab-general.screen');       // General screen Model
const LogInM  = require('./ab-login.screen');                             // Login screen Model
const SSms    = require('../../screens/android/ab-smsCodeEnter.screen');  // screen > Sms code enter

class AuthorizationScreen extends LogInM {

/* CONSTANTS */
titleScreen_CreatePinCode_Ru_Expected = 'Создайте новый PIN-код';
titleScreen_EnterPinCode_Ru_Expected = 'Введите свой PIN-код';

text_PinCode_Expected = '0123';
text_PinCodeOTP_Expected = '123456';



/* SELECTORS */
// экран Создайте новый PIN-код
get titleScreen_CreatePinCode(){// createPinCodeScreenHeader
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_pin_code"]');}
get titleScreen_CreatePinCode_Ru(){
  return $('//android.widget.TextView[@text="Создайте новый PIN-код"]');}
get image_PinCodeIcon_3(){ // pin code icon
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/iv_pin_3"]');}

// экран Введите свой PIN-код
get titleScreen_EnterPinCode(){// screenHeader_Text_enterPinCode
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_pin_code"]');}
get titleScreen_EnterPinCode_Ru(){
  return $('//android.widget.TextView[@text="Введите свой PIN-код"]');}



/* FUNCTIONS : e2e */
async customerAuthorization(language, phoneNumber, password, pinCode) {
  // П.1. Запустить приложение (автоматически), ...
  // * Проверяем, нужна ли авторизация
  if (
    !await this.titleScreen_Welcome_En.isDisplayed() &
    !await this.titleScreen_Welcome_Ru.isDisplayed() &
    !await this.titleScreen_Welcome_Uz.isDisplayed()
    ) return;

  // * Проверяем, нужен ли только пин-код
  if (!await this.titleScreen_EnterPinCode.isDisplayed()) {
    // * Выбираем язык интерфейса
    await this.selectLanguage(language);
    
    // 1.Нажать поле ввода номера телефона.
    await this.input_PhoneNumber.click();
    // 11.Открыта клавиатура.
    await expect(await driver.isKeyboardShown()).toBe(true);
    // * Очистить поле ввода
    await this.input_PhoneNumber.clearValue();

    // 2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
    await DSysM.androidKeyboardTypeIn(phoneNumber);
    // await driver.sendKeys(['9','9','9','6','6','4','6','6','0']); // для БраузерСтак
    // 21.Закрыта клавиатура. В поле ввода отображается введенный номер.
    // - клавиатура
    // await expect(await driver.isKeyboardShown()).toBe(false); // отключено, т.к. ГитХаб и БраузерСтак не успевают
    // - введенный номер
    await expect(this.input_PhoneNumber).toHaveText(phoneNumber);

    // 3.Нажать чекбокс согласия с условиями.
    await this.check_AgreeWithTerms.click();
    // 3.1.Чекбокс согласия отображается отмеченным, кнопка Продолжить активна.
    // - чекбокс
    await expect(this.check_AgreeWithTerms).toBeEnabled();
    // - кнопка Продолжить
    await expect(this.button_Continue).toBeEnabled();
    
    // 4.Нажать кнопку Продолжить.
    await this.button_Continue.click();
    // 4.1.Открыт экран Введите код из СМС, где доступны поле ввода кода и неактивная кнопка Продолжить.
    // - экран Введите код из СМС
    await expect(SSms.titleScreen_EnterSmsCode_Ru).toHaveText(SSms.titleScreen_EnterSmsCode_Ru_Expected);
    // - поле ввода кода?
    // - кнопка Продолжить ?

    // 5.Нажать поле ввода кода.
    await SSms.input_SmsCode.click();
    // 5.1.Открыта клавиатура.
    await expect(await driver.isKeyboardShown()).toBe(true);

  // --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

    // 6.Ввести код.
    // await DSysM.androidKeyboardTypeIn(text_PinCodeOTP_Expected);



  // --- на 24102025 вводится ВРУЧНУЮ во время паузы (ниже)
  // * Пауза для контроля экрана
  await driver.pause(30000);


    
    // 6.1.В поле ввода отображается введенный код, кнопка Продолжить активна.
    // - кнопка Продолжить
    await expect(SSms.button_Continue).toBeEnabled();

    // 7.Нажать кнопку Продолжить.
    await SSms.button_Continue.click();
    // 7.1.Открыт экран входа в приложение, где доступны поле кода страны, поле номера телефона, поле ввода пароля и неактивная кнопка Продолжить.

    // 8.Нажать поле ввода пароля.
    // * Ждем появления поля
    await this.input_Password.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 10000});
    await this.input_Password.click();
    // 8.1.Открыта клавиатура.
    await expect(await driver.isKeyboardShown()).toBe(true);

    // 9.Ввести пароль.
    await DSysM.androidKeyboardTypeIn(password);
    // 9.1.В поле ввода введенный пароль отображается звездочками, кнопка Продолжить активна.
    // - пароль отображается звездочками ?
    // - кнопка Продолжить
    await expect(this.button_Continue).toBeEnabled();
    
    // 10.Нажать кнопку Продолжить.
    await this.button_Continue.click();
    // 10.1.Открыт экран Создайте новый PIN-код, где доступны неактивные символы пин-кода и клавиатура приложения.
    // - экран Создайте новый PIN-код
    await expect(this.titleScreen_CreatePinCode).toHaveText(this.titleScreen_CreatePinCode_Ru_Expected);
    // - символ пин-кода (проверяем одну иконку)
    await expect(await this.image_PinCodeIcon_3.isEnabled()).toBe(true);
    // - клавиатура приложения (проверяем одну клавишу)
    await expect(await AppUM.appKeyboardKey_3.isEnabled()).toBe(true);

    // 11.Ввести пин-код.
    await AppUM.appKeyboardTypeIn(pinCode);
    // await AppUM.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
    // 11.1.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода открывается экран Введите свой PIN-код.
    // - символы пин-кода ?
    // - экран Введите свой PIN-код
    await expect(this.titleScreen_EnterPinCode).toHaveText(this.titleScreen_EnterPinCode_Ru_Expected);
  }

  // 12.Ввести пин-код.
  await AppUM.appKeyboardTypeIn(pinCode);
  // await AppUM.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
  await HomeM.layout_Profile.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 15000});
  // 12.1.Открыт главный экран приложения (активна кнопка Главная панели навигации).
  // + элемент профиля клиента
  await expect(HomeM.layout_Profile).toBeExisting();
  // + кнопка профиля пользователя
  await expect(HomeM.button_Profile).toBeExisting();
            // // +
            // if(await HomeM.titleSection_TotalBalance_Ru.isDisplayed()) {
            //   // - текст Общий баланс  
            //   await expect(HomeM.titleSection_TotalBalance_Ru).toHaveText(HomeM.titleSection_TotalBalance_Ru_Expected);
            //   // - сумма общего баланса -?-
            // } else {
            //   // - кнопка Заказать карту
            //   await expect(HomeM.button_OrderCard).toBeExisting();
            //   // - кнопка Добавить карту
            //   await expect(HomeM.button_AddCard).toBeExisting();
            // }
}

// async customerAuthorization(language, phoneNumber, password, pinCode) {
//   // П.1. Запустить приложение (автоматически), ...
//   // // * Ждем появления кнопки
//   // await this.button_Login.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 10000});
//   // await this.button_Login.click();
//   // * Выбираем язык интерфейса
//   await this.selectLanguage(language);
  
//   // 1.Нажать поле ввода номера телефона.
//   await this.input_PhoneNumber.click();
//   // 11.Открыта клавиатура.
//   await expect(await driver.isKeyboardShown()).toBe(true);
//   // * Очистить поле ввода
//   await this.input_PhoneNumber.clearValue();

//   // 2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
//   await DSysM.androidKeyboardTypeIn(phoneNumber);
//   // await driver.sendKeys(['9','9','9','6','6','4','6','6','0']); // для БраузерСтак
//   // 21.Закрыта клавиатура. В поле ввода отображается введенный номер.
//   // - клавиатура
//   // await expect(await driver.isKeyboardShown()).toBe(false); // отключено, т.к. ГитХаб и БраузерСтак не успевают
//   // - введенный номер
//   await expect(this.input_PhoneNumber).toHaveText(phoneNumber);

//   // 3.Нажать чекбокс согласия с условиями.
//   await this.check_AgreeWithTerms.click();
//   // 3.1.Чекбокс согласия отображается отмеченным, кнопка Продолжить активна.
//   // - чекбокс
//   await expect(this.check_AgreeWithTerms).toBeEnabled();
//   // - кнопка Продолжить
//   await expect(this.button_Continue).toBeEnabled();
  
//   // 4.Нажать кнопку Продолжить.
//   await this.button_Continue.click();
//   // 4.1.Открыт экран Введите код из СМС, где доступны поле ввода кода и неактивная кнопка Продолжить.
//   // - экран Введите код из СМС
//   await expect(SSms.titleScreen_EnterSmsCode_Ru).toHaveText(SSms.titleScreen_EnterSmsCode_Ru_Expected);
//   // - поле ввода кода?
//   // - кнопка Продолжить ?

//   // 5.Нажать поле ввода кода.
//   await SSms.input_SmsCode.click();
//   // 5.1.Открыта клавиатура.
//   await expect(await driver.isKeyboardShown()).toBe(true);

// // --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

//   // 6.Ввести код.
//   // await DSysM.androidKeyboardTypeIn(text_PinCodeOTP_Expected);



// // --- на 24102025 вводится ВРУЧНУЮ во время паузы (ниже)
// // * Пауза для контроля экрана
// await driver.pause(30000);


  
//   // 6.1.В поле ввода отображается введенный код, кнопка Продолжить активна.
//   // - кнопка Продолжить
//   await expect(SSms.button_Continue).toBeEnabled();

//   // 7.Нажать кнопку Продолжить.
//   await SSms.button_Continue.click();
//   // 7.1.Открыт экран входа в приложение, где доступны поле кода страны, поле номера телефона, поле ввода пароля и неактивная кнопка Продолжить.

//   // 8.Нажать поле ввода пароля.
//   // * Ждем появления поля
//   await this.input_Password.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 10000});
//   await this.input_Password.click();
//   // 8.1.Открыта клавиатура.
//   await expect(await driver.isKeyboardShown()).toBe(true);

//   // 9.Ввести пароль.
//   await DSysM.androidKeyboardTypeIn(password);
//   // 9.1.В поле ввода введенный пароль отображается звездочками, кнопка Продолжить активна.
//   // - пароль отображается звездочками ?
//   // - кнопка Продолжить
//   await expect(this.button_Continue).toBeEnabled();
  
//   // 10.Нажать кнопку Продолжить.
//   await this.button_Continue.click();
//   // 10.1.Открыт экран Создайте новый PIN-код, где доступны неактивные символы пин-кода и клавиатура приложения.
//   // - экран Создайте новый PIN-код
//   await expect(this.titleScreen_CreatePinCode).toHaveText(this.titleScreen_CreatePinCode_Ru_Expected);
//   // - символ пин-кода (проверяем одну иконку)
//   await expect(await this.image_PinCodeIcon_3.isEnabled()).toBe(true);
//   // - клавиатура приложения (проверяем одну клавишу)
//   await expect(await AppUM.appKeyboardKey_3.isEnabled()).toBe(true);

//   // 11.Ввести пин-код.
//   await AppUM.appKeyboardTypeIn(pinCode);
//   // await AppUM.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
//   // 11.1.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода открывается экран Введите свой PIN-код.
//   // - символы пин-кода ?
//   // - экран Введите свой PIN-код
//   await expect(this.titleScreen_EnterPinCode).toHaveText(this.titleScreen_EnterPinCode_Ru_Expected);

//   // 12.Ввести пин-код.
//   await AppUM.appKeyboardTypeIn(pinCode);
//   // await AppUM.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
//   await HomeM.layout_Profile.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 15000});
//   // 12.1.Открыт главный экран приложения (активна кнопка Главная панели навигации).
//   // + элемент профиля клиента
//   await expect(HomeM.layout_Profile).toBeExisting();
//   // + кнопка профиля пользователя
//   await expect(HomeM.button_Profile).toBeExisting();
//   // +
//   if( await HomeM.titleSection_TotalBalance_Ru.isDisplayed() ) {
//     // - текст Общий баланс  
//     await expect(HomeM.titleSection_TotalBalance_Ru).toHaveText(HomeM.titleSection_TotalBalance_Ru_Expected);
//     // - сумма общего баланса -?-
//   } else {
//     // - кнопка Заказать карту
//     await expect(HomeM.button_OrderCard).toBeExisting();
//     // - кнопка Добавить карту
//     await expect(HomeM.button_AddCard).toBeExisting();
//   }
// }

// /*ранее*/ async customerAuthorization(language, phoneNumber, password, pinCode) {
//   // П.1. Запустить приложение (автоматически), ...
//   // // * Ждем появления кнопки
//   // await this.button_Login.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 10000});
//   // await this.button_Login.click();
//   // * Выбираем язык интерфейса
//   await this.selectLanguage(language);
  
//   // 1.Нажать поле ввода номера телефона.
//   await this.input_PhoneNumber.click();
//   // 11.Открыта клавиатура.
//   await expect(await driver.isKeyboardShown()).toBe(true);
//   // * Очистить поле ввода
//   await this.input_PhoneNumber.clearValue();

//   // 2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
//   await DSysM.androidKeyboardTypeIn(phoneNumber);
//   // await driver.sendKeys(['9','9','9','6','6','4','6','6','0']); // для БраузерСтак
//   // 21.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны поле ввода пароля и неактивная кнопка Войти:
//   // - клавиатура
//   // await expect(await driver.isKeyboardShown()).toBe(false); // отключено, т.к. ГитХаб и БраузерСтак не успевают
//   // - введенный номер
//   await expect(this.input_PhoneNumber).toHaveText(phoneNumber);
//   // - кнопка Войти
//   // await expect(this.button_Signin).toBeDisabled(); // отключено, т.к. ГитХаб и БраузерСтак не успевают




//           // добавлено 24102023
//                 // 3.Нажать чекбокс согласия с условиями.
//                 await SReg.check_AgreeWithTerms.click();
//                 // 3.1.Чекбокс согласия отображается отмеченным, кнопка Регистрация активна:
//                 // - чекбокс
//                 await expect(SReg.check_AgreeWithTerms).toBeEnabled();









//   // 3.Нажать поле ввода пароля.
//   // * Ждем появления поля
//   await this.input_Password.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 10000});
//   await this.input_Password.click();
//   // 31.Открыта клавиатура.
//   await expect(await driver.isKeyboardShown()).toBe(true);

//   // 4.Ввести пароль.
//   await DSysM.androidKeyboardTypeIn(password);
//   // await driver.sendKeys(['q','w','e','r','t','y','1','2','3']); // для БраузерСтак
//   // 41.В поле ввода введенный пароль отображается звездочками, кнопка Войти активна (при вводе не менее определенного числа символов пароля):
//   // - пароль отображается звездочками ?
//   // - кнопка Войти
//   await expect(this.button_Signin).toBeEnabled();
  
//   // 5.Нажать кнопку Войти.
//   await this.button_Signin.click();
//   // 51.Отображается экран Создайте новый PIN-код, где доступны неактивные символы пин-кода и клавиатура приложения:
//   // - страница Создайте новый PIN-код
//   await expect(this.titleScreen_CreatePinCode).toHaveText(this.titleScreen_CreatePinCode_Ru_Expected);
//   // - символ пин-кода (проверяем одну иконку)
//   await expect( await this.image_PinCodeIcon_3.isEnabled() ).toBe(true);
//   // - клавиатура приложения (проверяем одну клавишу)
//   await expect( await AppUM.appKeyboardKey_3.isEnabled() ).toBe(true);

//   // 6.Ввести пин-код.
//   await AppUM.appKeyboardTypeIn(pinCode);
//   // await AppUM.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
//   // 61.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода отображается экран Введите свой PIN-код:
//   // - символы пин-кода ?
//   // - страница Введите свой PIN-код
//   await expect(this.titleScreen_EnterPinCode).toHaveText(this.titleScreen_EnterPinCode_Ru_Expected);

//   // 7.Ввести пин-код.
//   await AppUM.appKeyboardTypeIn(pinCode);
//   // await AppUM.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
//   await HomeM.layout_Profile.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 15000});
//   // 71.Открыт главный экран приложения (активна кнопка Главная панели навигации), где доступны кнопка профиля пользователя, текст Общий баланс и... одно из следующего:
//   // - сумма общего баланса (если пользователь уже имеет карту банка).
//   // - ккнопка Заказать карту и кнопка Добавить карту (если пользователь пока не имеет или не добавил карту банка):
//   // + элемент профиля клиента
//   await expect(HomeM.layout_Profile).toBeExisting();
//   // - кнопка профиля пользователя
//   await expect(HomeM.button_Profile).toBeExisting();
//   // // - имя пользователя
//   // await expect(HomeM.profileName_NadiaPage).toHaveText(HomeM.profileName_NadiaPage_Expected);
//   // // - вкладка Аккаунт
//   // await expect(HomeM.accountTabRu).toBeExisting();
//   if( await HomeM.titleSection_TotalBalance_Ru.isDisplayed() ) {
//     // - текст Общий баланс  
//     await expect(HomeM.titleSection_TotalBalance_Ru).toHaveText(HomeM.titleSection_TotalBalance_Ru_Expected);
//     // - сумма общего баланса -?-
//   } else {
//     // - кнопка Заказать карту
//     await expect(HomeM.button_OrderCard).toBeExisting();
//     // - кнопка Добавить карту
//     await expect(HomeM.button_AddCard).toBeExisting();
//   }
  
  
//   // // - кнопка Заказать карту
//   // if(phoneNumber == this.phoneNumber_Registered_noCards) {
//   //   await expect(HomeM.orderCardButton).toBeExisting();
//   // }
// }

// /*отладка*/ async customerAuthorization_Debug(language, phoneNumber, password, pinCode) {
//   // П.1. Запустить приложение (автоматически), ...
//   await this.selectLanguage(language);
  
//   // 1.Нажать поле ввода номера телефона.
//   await this.input_PhoneNumber.click();
//   // 11.Открыта клавиатура.
// await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 11 + '.png');
//   await expect(await driver.isKeyboardShown()).toBe(true);

//   // 2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
//   await DSysM.androidKeyboardTypeIn(phoneNumber);
//   // await driver.sendKeys(['9','9','9','6','6','4','6','6','0']);
//   // 21.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны поле ввода пароля и неактивная кнопка Войти:
// await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 21 + '.png');
//   // - клавиатура
//   await expect(await driver.isKeyboardShown()).toBe(false);
//   // - введенный номер
//   await expect(this.input_PhoneNumber).toHaveText(phoneNumber);
//   // - кнопка Войти
//   await expect(this.button_Signin).toBeDisabled();

//   // 3.Нажать поле ввода пароля.
//   await this.input_Password.click();
//   // 31.Открыта клавиатура.
// await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 31 + '.png');
//   await expect(await driver.isKeyboardShown()).toBe(true);

//   // 4.Ввести пароль.
//   await DSysM.androidKeyboardTypeIn(password);
//   // 41.В поле ввода введенный пароль отображается звездочками, кнопка Войти активна (при вводе не менее определенного числа символов пароля):
// await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 41 + '.png');
//   // - пароль отображается звездочками ?
//   // - кнопка Войти
//   await expect(this.button_Signin).toBeEnabled();
  
//   // 5.Нажать кнопку Войти.
//   await this.button_Signin.click();
//   // 51.Отображается экран Создайте новый PIN-код, где доступны неактивные символы пин-кода и клавиатура приложения:
// await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 51 + '.png');
//   // - страница Создайте новый PIN-код
//   await expect(this.titleScreen_CreatePinCode)
//     .toHaveText(this.titleScreen_CreatePinCode_Ru_Expected);
//   // - символ пин-кода (проверяем одну иконку)
//   await expect( await this.image_PinCodeIcon_3.isEnabled() ).toBe(true);
//   // - клавиатура приложения (проверяем одну клавишу)
//   await expect( await AppUM.appKeyboardKey_3.isEnabled() ).toBe(true);

//   // 6.Ввести пин-код.
//   await AppUM.appKeyboardTypeIn(pinCode);
//   // 61.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода отображается экран Введите свой PIN-код:
// await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 61 + '.png');
//   // - символы пин-кода ?
//   // - страница Введите свой PIN-код
//   await expect(this.titleScreen_EnterPinCode)
//     .toHaveText(this.titleScreen_EnterPinCode_Ru_Expected);

//   // 7.Ввести пин-код.
//   await AppUM.appKeyboardTypeIn(pinCode);
//   await HomeM.profileLayout.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 5000});
//   // 71.Отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где доступны имя пользователя, текст Общий баланс и... одно из следующего:
// await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 71 + '.png');
//   // - сумма общего баланса (если пользователь уже имеет карту банка).
//   // - кнопка Заказать или добавить карту (если пользователь пока не имеет карту банка):
//   // + элемент профиля клиента
//   await expect(HomeM.profileLayout).toBeExisting();
//   // - имя пользователя
//   await expect(HomeM.profileName_NadiaPage).toHaveText(HomeM.profileName_NadiaPage_Expected);
//   // - вкладка Аккаунт
//   await expect(HomeM.accountTabRu).toBeExisting();
//   // - текст Общий баланс
//   await expect(HomeM.totalBalanceLabelRu).toHaveText(HomeM.totalBalanceLabelRu_Expected);
//   // - сумма общего баланса -?-
//   // - кнопка Заказать или добавить карту
//   if(phoneNumber == this.phoneNumber_Registered_noCards) {
//     await expect(HomeM.orderOrAddCardButton).toBeExisting();
//   }
// }



/* EOF class */
}

module.exports = new AuthorizationScreen();