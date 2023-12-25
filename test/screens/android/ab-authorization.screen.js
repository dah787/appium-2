// const UApp  = require('../../utils/android/ab-app.utils');             // Application Utilities
// const UDev  = require("../../utils/android/dt-device.utils");          // Android Utilities Model

// const HomeM  = require('../../screens/android/ab-home.screen');         // screen > Home
const SHome  = require('../../screens/android/ab-home.screen');         // screen > Home
const GenM   = require('../../screens/android/ab-general.screen');      // screen > General
const LogInM = require('./ab-login.screen');                            // screen > Login
const SPin   = require('../../screens/android/ab-pinCodeEnter.screen'); // screen > Pin code enter
const SSms   = require('../../screens/android/ab-smsCodeEnter.screen'); // screen > Sms code enter

const UApp   = require("../../utils/android/ab-app.utils");             // utilities > Application
const UDev   = require("../../utils/android/dt-device.utils");          // utilities > Device

class AuthorizationScreen extends LogInM {
/* CONSTANTS */
titleScreen_CreatePinCode_Ru_Expected = 'Придумайте код доступа'; // (до 1.0.74 - Создайте новый PIN-код)
text_PinCodeOTP_Expected = '123456';



/* SELECTORS */
// экран Придумайте код доступа (до версии 1.0.74 - Создайте новый PIN-код)
get titleScreen_CreatePinCode(){ // createPinCodeScreenHeader
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_pin_code"]');}
get titleScreen_CreatePinCode_Ru(){
  return $('//android.widget.TextView[@text="Придумайте код доступа"]');}
get image_PinCodeIcon_3(){ // pin code icon
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/iv_pin_3"]');}

// экран Придумайте код доступа : окно Save password to Google?
get window_SavePasswordToGoogle(){
  return $('//*[@resource-id="android:id/autofill_save"]');}
get titleWindow_SavePasswordToGoogle_En(){
  return $('//android.widget.TextView[@text="Save password to Google?"]');}
get button_SaveNo(){
  return $('//*[@resource-id="android:id/autofill_save_no"]');}



/* FUNCTIONS : e2e */
// async customerAuthorization(language, phoneNumber, password, pinCode) {
async authorizeUser(language, phoneNumber, password, pinCode) {
  // П.1. Запустить приложение (автоматически), ...
  // * Проверяем, нужна ли авторизация.
  if (
    !await this.titleScreen_Welcome_En.isDisplayed() &
    !await this.titleScreen_Welcome_Ru.isDisplayed() &
    !await this.titleScreen_Welcome_Uz.isDisplayed()
    ) return;

  // * Проверяем, нужен ли только пин-код.
  if (!await SPin.titleScreen_EnterPinCode.isDisplayed()) {
    // * Выбираем язык интерфейса.
    await this.selectLanguage(language);
    
    // * Очистить поле ввода и чекбокс.
    await this.input_PhoneNumber.clearValue();
    let isChecked = await this.check_AgreeWithTerms.getAttribute('checked');
    // console.log( 'isChecked-1 = ' + isChecked );
    // console.log( 'typeof(isChecked)-1 = ' + typeof(isChecked) ); // string
    // await driver.pause(1000);
    if (isChecked == 'true') {
      await this.check_AgreeWithTerms.click();
      // isChecked = await this.check_AgreeWithTerms.getAttribute('checked');
      // console.log( 'isChecked-2 = ' + isChecked );
    }
    // isChecked = await this.check_AgreeWithTerms.getAttribute('checked');
    // console.log( 'isChecked-3 = ' + isChecked );
    // await driver.pause(10000);

    // 1.Нажать поле ввода номера телефона.
    await this.input_PhoneNumber.click();
    // 11.Открыта клавиатура.
    await expect(await driver.isKeyboardShown()).toBe(true);
    
    // 2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
    await UDev.androidKeyboardTypeIn(phoneNumber);
    // await driver.sendKeys(['9','9','9','6','6','4','6','6','0']); // для БраузерСтак
    // 2.1.Закрыта клавиатура. В поле ввода отображается введенный номер.
    // - клавиатура
    // await expect(await driver.isKeyboardShown()).toBe(false); // отключено, т.к. ГитХаб и БраузерСтак не успевают
    // - введенный номер
    await expect(this.input_PhoneNumber).toHaveText(phoneNumber);

    // 3.Нажать чекбокс согласия с условиями.
    await this.check_AgreeWithTerms.click();
    // 3.1.Чекбокс согласия отображается отмеченным, кнопка Продолжить активна.
    // - чекбокс
    // await expect(this.check_AgreeWithTerms).toBeEnabled();
    // await expect(this.check_AgreeWithTerms).toBeChecked();
    await expect(this.check_AgreeWithTerms.getAttribute('checked')).toBeTruthy();
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
    // await UDev.androidKeyboardTypeIn(text_PinCodeOTP_Expected);



  // --- на 24102025 вводится ВРУЧНУЮ во время паузы (ниже)
  // * Пауза для контроля экрана.
  // await driver.pause(30000);
  await SSms.smsCodeInput();

  
    
    // 6.1.В поле ввода отображается введенный код, кнопка Продолжить активна.
    // - кнопка Продолжить
    await expect(SSms.button_Continue).toBeEnabled();

    // 7.Нажать кнопку Продолжить.
    await SSms.button_Continue.click();
    // 7.1.Открыт экран входа в приложение, где доступны поле кода страны, поле номера телефона, поле ввода пароля и неактивная кнопка Продолжить.

    // 8.Нажать поле ввода пароля.
    // * Ждем появления поля.
    await this.input_Password.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 10000});
    await this.input_Password.click();
    // 8.1.Открыта клавиатура.
    await expect(await driver.isKeyboardShown()).toBe(true);

    // 9.Ввести пароль.
    await UDev.androidKeyboardTypeIn(password);
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
    await expect(await UApp.appKeyboardKey_3.isEnabled()).toBe(true);

    // 11.Ввести пин-код.
    await UApp.appKeyboardTypeIn(pinCode);
    // await UApp.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
    // 11.1.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода открывается экран Введите свой PIN-код.
    // - символы пин-кода ?
    // - экран Введите свой PIN-код
    await expect(SPin.titleScreen_EnterPinCode).toHaveText(SPin.titleScreen_EnterPinCode_Ru_Expected);
  }

  // 12.Ввести пин-код.
  await UApp.appKeyboardTypeIn(pinCode);
  // await UApp.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
  await SHome.layout_Profile.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 15000});
  // 12.1.Открыт главный экран приложения (активна кнопка Главная панели навигации).
  // + элементы профиля клиента
  await expect(SHome.layout_Profile).toBeExisting();
  await expect(SHome.button_Profile).toBeExisting();









  // * Закрыть окно push-уведомления (если открыто).
  // https://webdriver.io/docs/boilerplates/#webdriverioappium-boilerplate
  // https://webdriver.io/docs/api/element/touchAction
//   if (await HomeM.window_PushNotification.isDisplayed()) {
//     // await driver.execute('mobile:swipe', { direction: 'up' });

// /*отладка*/ console.log(`\n --> push-1 = ${await HomeM.window_PushNotification.isDisplayed()} \n`);

//     // await HomeM.window_PushNotification.click();
//           // * Прокрутить элемент (выполняя swipe/смахивание).
//           // await $(`android=${HomeM.scrollToElement_Right}`);
//     // await HomeM.window_PushNotification.touchScroll(1,1);
//     // const screen = HomeM.window_PushNotification;
//     // const otherElement = HomeM.text_TotalBalanceAmount;
//     // await screen.touchAction([
//     //     'press',
//     //     { action: 'moveTo', element: otherElement },
//     //     'release'
//     // ]);
//     // await screen.touchAction([
//     //   'press',
//     //   { action: 'moveTo', x: 200, y: 300 },
//     //   'release'
//     // ]);
//     // await screen.dragAndDrop(otherElement);

//     // await driver.touchAction([
//     //   { action: 'press', x: 500, y: 1500 },
//     //   { action: 'moveTo', x: 500, y: 1000 },
//     //   'release',
//     // ]);

//     // Use WebdriverIO mobile selectors to locate the push notification element
    
//     /*1*/const pushNotification = await $('//*[@resource-id="com.fincube.apexbank.debug:id/clipboardHint"]');
//     // /*2*/const pushNotification = await driver.$('android.widget.FrameLayout[@resource-id="com.fincube.apexbank.debug:id/clipboardHint"]');
//     /*отладка*/ console.log(`\n --> pushNotification = ${pushNotification} \n`);

//     // Get the coordinates of the push notification element
//     // const { x, y } = await HomeM.window_PushNotification.getLocation();
//     const { x, y } = await pushNotification.getLocation();
//     /*отладка*/ console.log(`\n --> x = ${x}, y = ${y} \n`);



//     // -*- Use the mobile
//     // await driver.executeScript(
//     //   'mobile: swipe', // ...'mobile: swipe' not known...
//     //   [
//     //     { start_x: x, start_y: y },
//     //     { end_x: x, end_y: y - 50 }, // Adjust the y-coordinate as needed
//     //     1000, // Swipe duration in milliseconds
//     //   ]
//     // );


//     // -*- Use the mobile
//     // await driver.touchScroll({
//     //   "xoffset": 10,
//     //   "yoffset": 100,
//     //   "element": pushNotification
//     // });
//     await driver.touchScroll(10, 100, '//*[@resource-id="com.fincube.apexbank.debug:id/clipboardHint"]');
//     // await driver.touchPerform([
//     //   { action: 'press', options: { x: 21, y: 63 }},
//     //   { action: 'moveTo', options: { x: 50, y: 100 }},
//     //   { action: 'release' },
//     //   { action: 'perform' }
//     // ]);

//     // -1- Use the mobile
//     // await driver.touchPerform([
//     //   { action: 'press', options: { x, y } },
//     //   // { action: 'wait', options: { ms: 500 } },
//     //   { action: 'moveTo', options: { x, y: y-50 } }, // Adjust the y-coordinate as needed / 3 - 500
//     //   // 'release',
//     //   { action: 'release' }
//     // ]);
   
//     // // -2- Use the mobile: performTouchAction command to perform a swipe gesture
//     // await driver.executeScript(
//     //   'mobile: performTouchAction',
//     //   [
//     //     {
//     //       action: 'press',
//     //       options: { x, y },
//     //     },
//     //     {
//     //       action: 'moveTo',
//     //       options: { x, y: y - 500 }, // Adjust the y-coordinate as needed
//     //     },
//     //     'release',
//     //   ]
//     // );

//     // -3- Check for and handle push notification if present
//     // const notificationView = await driver.$('android.widget.FrameLayout[@resource-id="com.fincube.apexbank.debug:id/clipboardHint"]');
//     // if (await notificationView.isDisplayed()) {
//       // Swipe notification off the screen
//       // await driver.touchPerform([
//       //   { action: 'press', options: { x: '50', y: '100' } },
//       //   { action: 'moveTo', options: { x: '500', y: '100' } },
//       //   { action: 'release' },
//       // ]);
//     // }
        







// /*отладка*/ console.log(`\n --> push-2 = ${await HomeM.window_PushNotification.isDisplayed()} \n`);
// await driver.pause(15000);
//   }

  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: 20000});
  
}



/* EOF class */
}

module.exports = new AuthorizationScreen();