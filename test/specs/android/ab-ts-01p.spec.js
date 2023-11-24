/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */
const DCard  = require('../../data/ab-cards.data');                       // data > Cards

const SAuth  = require("../../screens/android/ab-authorization.screen");  // screen > Authorization
const SGen   = require('../../screens/android/ab-general.screen');        // screen > General
const SHome  = require('../../screens/android/ab-home.screen');           // screen > Home
const SProf  = require('../../screens/android/ab-profile.screen');        // screen > Profile
const SReg   = require("../../screens/android/ab-regisration.screen");    // screen > Registration
const SSms   = require('../../screens/android/ab-smsCodeEnter.screen');   // screen > Sms code enter
const SSup   = require("../../screens/android/ab-support.screen");        // screen > Support

const SChrom = require("../../screens/android/dt-chrome.screen");         // screen > Chrome app
const SDial  = require("../../screens/android/dt-dialer.screen");         // screen > Dialer app
const STlg   = require("../../screens/android/dt-telegram.screen");       // screen > Telegram app

const UApp   = require("../../utils/android/ab-app.utils");               // utilities > App
const UDev   = require("../../utils/android/dt-device.utils");            // utilities > Device

describe('ab-ts-01p: Testing of operations provision | Тестирование обеспечения операций |вер.20231102| /Тестов 11 (частично 4)/', () => {
  let counter = 0, tcNum = '', i = 0;
  beforeEach(async () => {
    await SGen.beforeEach(counter, 's'); // s - support / e - e2e < typeOfTest
    // * Ждем появления кнопки (пропустить рекламу при запуске приложения)
    if(i == 0){
      await SAuth.button_Login.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
      await SAuth.button_Login.click();
      i++;
    }
    // * Вести счет числу выполненных тестов
    counter++;
  });
  afterEach(async () => {
    await SGen.afterEach(counter, tcNum);

    // // * Снимок экрана для контроля
    // // await driver.saveScreenshot('app-screen_afterEach.png');
    // // await driver.saveScreenshot('_view_shots/app-screen-001p_afterEach_' + (counter + 1) + '.png');
    // await driver.saveScreenshot('_view_shots/screen_after_' + tcNum + '.png');

    // // * Вести счет числу выполненных тестов
    // counter++;

    // // * Выйти из приложения
    // await SGen.logOutTheApp();
  });
  after(async () => {
    await SGen.after();

    // // * Закрыть приложение
    // // await driver.closeApp();
    // await driver.terminateApp(SGen.appPackage);
  });

// ab-ts-01p: Тестирование поддержки |вер.20230922| /Тестов 7 (частично 2)/
it.skip('ab-u-tc-01.001p: Language selection | Выбор языка', async () => {
/** > базовые тесты (см. файл ТК 1 (Регистрация)):
   * - 2 Стр. выбор языка, выбор языка (Русский) (ш?: П.1)
   * - ? ... <
  > Можно выбрать язык интерфейса приложения на экране входа в приложение. <
ПРЕДУСЛОВИЯ: Нет.
ПОСТУСЛОВИЯ: Нет.
  *
ШАГИ:
  1.Запустить приложение.
  1.1.Открыт экран входа в приложение (на языке текущего выбора языка), где доступна кнопка выбора языка интерфейса.
  
  2.Нажать кнопку выбора языка интерфейса.
  2.1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
  2.2.Отображается галочка на элементе текущего выбора языка.

  3.Нажать элемент выбора языка (например, русский).
  3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса.

  4.Выполнить шаги 2-3 для каждого доступного языка.
  4.1.-
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-01.001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');
  // /*отладка*/ console.log('\n --> Package = ' + await driver.getCurrentPackage() + '\n');
  // /*отладка*/ console.log('\n --> Activity = ' + await driver.getCurrentActivity() + '\n');
  // /*отладка*/ console.log('\n --> this.test.title = ' + this.test.title + '\n'); // wrong

  // 1.Запустить приложение.
  // ...
  // 1.1.Открыт экран входа в приложение (на языке текущего выбора языка), где доступна кнопка выбора языка интерфейса.
  // - экран входа в приложение ?-текст разный, т.к. отсутствует resource-id
  // + поле ввода номера телефона.
  await expect(SAuth.input_PhoneNumber).toBeDisplayed();
  
  // * Создать массив существующих языков.
  // * Открыть окно Выбор языка.
  await SAuth.button_Language.click();

  await SAuth.item_LanguageEnglish.waitForDisplayed({timeout: 5000});
  // const raw_array = await $$('android.widget.TextView');
  const raw_array = await SAuth.items_TextView_titleWindow_Languages;
  const elementAttributeKey = 'resource-id';
  let  data_array = [];
  let data_array_elems = [];
  await SAuth.generateLanguagesList(raw_array, data_array, data_array_elems, elementAttributeKey, SAuth.text_English_En_LoginScreen, SAuth.text_Russian_En_LoginScreen, SAuth.text_Uzbek_En_LoginScreen, 'Kz');

  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    // console.log('\n --> languagesList не сформирован: data_array = ' + data_array + '\n');
    throw " ! languagesList не сформирован: data_array = '" + data_array + "'";
    // throw data_array;
  }

  let elementIndex = 0;
  for (const element of data_array) {
    // /*отладка*/ console.log('\n --> elementIndex = ' + elementIndex + '\n');
    // /*отладка*/ console.log('\n --> element = ' + element + '\n');
    // 2.Нажать кнопку выбора языка интерфейса.
    if (elementIndex > 0) {
      await SAuth.button_Language.click();
      // 2.1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
      // - окно
      await expect(SAuth.titleWindow_Languages).toBeDisplayed();
      // - элементы выбора языков
      for (const element of data_array_elems) {
        await expect(element).toBeDisplayed();
      }
      // 2.2.Отображается галочка на элементе текущего выбора языка.
      // - ?
    }
    elementIndex++;

    switch (element) {
      case SAuth.text_English_En_LoginScreen:
        // /*отладка*/ console.log('\n --> case En: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, английский).
        await SAuth.item_LanguageEnglish.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(SAuth.titleWindow_Languages).not.toBeDisplayed();
        // - экран входа в приложение
        await expect(SAuth.titleScreen_Welcome_En).toHaveText(SAuth.titleScreen_Welcome_En_Expected);
        // - кнопка выбора языка интерфейса
        await expect(SAuth.button_Language).toBeDisplayed();
        // + код страны
        await expect(SAuth.countryCode).toHaveText(SAuth.text_countryCode_Expected);
        // + поле ввода номера телефона
        await expect(SAuth.input_PhoneNumber).toBeDisplayed();
        break;
      
      case SAuth.text_Russian_En_LoginScreen:
        // /*отладка*/ console.log('\n --> case Ru: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, русский).
        await SAuth.item_LanguageRussian.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(SAuth.titleWindow_Languages).not.toBeDisplayed();
        // - экран входа в приложение
        await expect(SAuth.titleScreen_Welcome_Ru).toHaveText(SAuth.titleScreen_Welcome_Ru_Expected);
        // - кнопка выбора языка интерфейса
        await expect(SAuth.button_Language).toBeDisplayed();
        // + код страны
        await expect(SAuth.countryCode).toHaveText(SAuth.text_countryCode_Expected);
        // + поле ввода номера телефона
        await expect(SAuth.input_PhoneNumber).toBeDisplayed();
        break;
      
      case SAuth.text_Uzbek_En_LoginScreen:
        // /*отладка*/ console.log('\n --> case Uz: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, узбекский).
        await SAuth.item_LanguageUzbek.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(SAuth.titleWindow_Languages).not.toBeDisplayed();
        // - экран входа в приложение
        await expect(SAuth.titleScreen_Welcome_Uz).toHaveText(SAuth.titleScreen_Welcome_Uz_Expected);
        // - кнопка выбора языка интерфейса
        await expect(SAuth.button_Language).toBeDisplayed();
        // + код страны
        await expect(SAuth.countryCode).toHaveText(SAuth.text_countryCode_Expected);
        // + поле ввода номера телефона
        await expect(SAuth.input_PhoneNumber).toBeDisplayed();
        break;
    
      default:
        console.log('\n --> в languagesList нет элемента: ' + element + '\n');
        break;
    }
  }
});
it('ab-u-tc-01.002Ap: Call bank (login screen) | Позвонить в банк (экран входа)', async () => {
  /**
  > Можно осуществить контакты со службой поддержки приложения, позвонив в банк (на экране входа в приложение). <
ПРЕДУСЛОВИЯ:
  1.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступна кнопка Поддержка.
ПОСТУСЛОВИЯ: 1.Выйти из приложения.
  *
ШАГИ:
  1.Нажать кнопку Поддержка.
  1.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.

  2.Нажать телефонный номер (любой).
  2.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается выбранный номер телефона, а также доступна кнопка совершения телефонного вызова.

  3.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  3.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.

  4.Выполнить шаги 2-3 для каждого телефонного номера.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-01.002Ap';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // П.1.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступна кнопка Поддержка.
  // - языком интерфейса выбран русский
  await SAuth.selectLanguage(SAuth.text_LanguageRussian_En);
  // - кнопка Поддержка
  await expect(SAuth.button_Support).toBeDisplayed();
  
  // 1.Нажать кнопку Поддержка.
  await SAuth.button_Support.click();
  // 1.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.
  // - окно Позвонить в банк
  await expect(SSup.titleWindow_CallBank).toHaveText(SSup.titleWindow_CallBank_Ru_Expected);
  // * Создать массив видимых элементов.
  const raw_array = await SSup.items_titleWindow_CallBank;
  // const raw_array = await $('//*[@resource-id="com.fincube.apexbank.debug:id/design_bottom_sheet"]').$$('android.widget.TextView');
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  // /*отладка*/ console.log(
  //   '\n --> ' + await raw_array[0].getAttribute('resource-id') + ' = raw_array[0]' +
  //   '\n --> ' + await raw_array[1].getAttribute('resource-id') + ' = raw_array[1]' +
  //   '\n --> ' + await raw_array[2].getAttribute('resource-id') + ' = raw_array[2]' +
  //   '\n --> ' + await raw_array[3].getAttribute('resource-id') + ' = raw_array[3]' +
  //   '\n --> ' + await raw_array[4].getAttribute('resource-id') + ' = raw_array[4]' +
  //   '\n');
  let data_array = [];
  const elementAttributeKey = SSup.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = SSup.text_ElementAttributeValue_Part_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array + ' | data_array.length = '+data_array.length);
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getAttribute('resource-id') + ' = data_array[0]' +
  //   '\n --> ' + await data_array[1].getAttribute('resource-id') + ' = data_array[1]' +
  //   '\n --> ' + await data_array[2].getAttribute('resource-id') + ' = data_array[2]' +
  //   '\n --> ' + await data_array[3].getAttribute('resource-id') + ' = data_array[3]' +
  //   '\n');
  // /*отладка*/ await driver.pause(5000);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw " ! не сформирован data_array (массив телефонных номеров) = '" + data_array + "'";
  }

  let supportContact = '';
  for(let i = 0; i < data_array.length; i++){
    // 2.Нажать телефонный номер (любой).
    // * Сохранить телефонный номер.
    supportContact = await data_array[i].getText();
    // * Убрать из телефонного номера любые знаки, кроме цифр.
    supportContact = await UApp.extractNumbersFromString(supportContact);
    // supportContact = String(supportContact);
    // /*отладка*/ console.log('\n --> supportContact = ' + supportContact + '\n');
    await data_array[i].click();
    // 2.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается выбранный номер телефона, а также доступна кнопка совершения телефонного вызова.
    // - экран устройства для совершения телефонного вызова
    // -?-
    // - кнопка совершения телефонного вызова
    await expect(SDial.button_Call).toBeDisplayed();
    // - номер телефона службы поддержки
    // /*отладка*/ console.log('\n --> supportContact (in SDial) = ' + await SDial.input_PhoneNumber.getText() + '\n');
    let dialerPhoneNumber = await SDial.input_PhoneNumber.getText();
    dialerPhoneNumber = await UApp.extractNumbersFromString(dialerPhoneNumber);
    // dialerPhoneNumber = String(dialerPhoneNumber);
    // /*отладка*/ console.log('\n --> dialerPhoneNumber-2 = ' + dialerPhoneNumber + '\n'); await driver.pause(5000);
    await expect(dialerPhoneNumber).toEqual(supportContact);
    
    // 3.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await UDev.androidPressBackButton(3);
    while(!await SSup.titleWindow_CallBank.isDisplayed()){
      if(await SAuth.titleScreen_EnterPinCode.isDisplayed()){
        await UApp.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
        // * Нажать кнопку Позвонить в банк.
        await SSup.item_CallBank.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
        await SSup.item_CallBank.click();
      }
      // await driver.pause(1000);
      if(!await SSup.titleWindow_CallBank.isDisplayed()) {
        await driver.back();
      }
    };
    // 3.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.
    // - окно Позвонить в банк
    await expect(SSup.titleWindow_CallBank).toHaveText(SSup.titleWindow_CallBank_Ru_Expected);

    // 4.Выполнить шаги 2-3 для каждого телефонного номера.
  }
});
it('ab-u-tc-01.003p: Call bank | Позвонить в банк', async () => {
  /**
  > Можно осуществить контакты со службой поддержки приложения, позвонив в банк. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Поддержка.
ПОСТУСЛОВИЯ: 1.Выйти из приложения.
  *
ШАГИ:
  1.Нажать кнопку Поддержка.
  1.1.Открыт экран Поддержка, где доступна кнопка Позвонить в банк.

  2.Нажать кнопку Позвонить в банк.
  2.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.

  3.Нажать телефонный номер (любой).
  3.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается выбранный номер телефона, а также доступна кнопка совершения телефонного вызова.

    -!-1.Нажать кнопку совершения телефонного вызова.
    -!-1.1.Открыт экран устройства выполнения телефонного вызова, где доступна кнопка завершения вызова.

    -!-2.Выполнить разговор со службой поддержки и/или завершить его, нажав кнопку завершения вызова.
    -!-2.1.Открыт экран устройства с недавними телефонными звонками или экран устройства с контактами, а также доступна кнопка устройства Назад.

  4.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  4.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.

  5.Выполнить шаги 3-4 для каждого телефонного номера.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-01.003p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNav_Support.click();
  // 1.1.Открыт экран Поддержка, где доступна кнопка Позвонить в банк.
  // - экран Поддержка
  await expect(SSup.titleScreen_Support).toHaveText(SSup.titleScreen_Support_Ru_Expected);

  // 2.Нажать кнопку Позвонить в банк.
  await SSup.item_CallBank.click();
  // 2.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.
  // - окно Позвонить в банк
  await expect(SSup.titleWindow_CallBank).toHaveText(SSup.titleWindow_CallBank_Ru_Expected);
  // * Создать массив видимых элементов.
  const raw_array = await SSup.items_titleWindow_CallBank;
  // const raw_array = await $('//*[@resource-id="com.fincube.apexbank.debug:id/design_bottom_sheet"]').$$('android.widget.TextView');
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  // /*отладка*/ console.log(
  //   '\n --> ' + await raw_array[0].getAttribute('resource-id') + ' = raw_array[0]' +
  //   '\n --> ' + await raw_array[1].getAttribute('resource-id') + ' = raw_array[1]' +
  //   '\n --> ' + await raw_array[2].getAttribute('resource-id') + ' = raw_array[2]' +
  //   '\n --> ' + await raw_array[3].getAttribute('resource-id') + ' = raw_array[3]' +
  //   '\n --> ' + await raw_array[4].getAttribute('resource-id') + ' = raw_array[4]' +
  //   '\n');
  let data_array = [];
  const elementAttributeKey = SSup.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = SSup.text_ElementAttributeValue_Part_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array + ' | data_array.length = '+data_array.length);
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getAttribute('resource-id') + ' = data_array[0]' +
  //   '\n --> ' + await data_array[1].getAttribute('resource-id') + ' = data_array[1]' +
  //   '\n --> ' + await data_array[2].getAttribute('resource-id') + ' = data_array[2]' +
  //   '\n --> ' + await data_array[3].getAttribute('resource-id') + ' = data_array[3]' +
  //   '\n');
  // /*отладка*/ await driver.pause(5000);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw " ! не сформирован data_array (массив телефонных номеров) = '" + data_array + "'";
  }

  let supportContact = '';
  for(let i = 0; i < data_array.length; i++){
    // 3.Нажать телефонный номер (любой).
    // * Сохранить телефонный номер.
    supportContact = await data_array[i].getText();
    // * Убрать из телефонного номера любые знаки, кроме цифр.
    supportContact = await UApp.extractNumbersFromString(supportContact);
    // supportContact = String(supportContact);
    // /*отладка*/ console.log('\n --> supportContact = ' + supportContact + '\n');
    await data_array[i].click();
    // 3.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается выбранный номер телефона, а также доступна кнопка совершения телефонного вызова.
    // - экран устройства для совершения телефонного вызова
    // -?-
    // - кнопка совершения телефонного вызова
    await expect(SDial.button_Call).toBeDisplayed();
    // - номер телефона службы поддержки
    // /*отладка*/ console.log('\n --> supportContact (in SDial) = ' + await SDial.input_PhoneNumber.getText() + '\n');
    let dialerPhoneNumber = await SDial.input_PhoneNumber.getText();
    dialerPhoneNumber = await UApp.extractNumbersFromString(dialerPhoneNumber);
    // dialerPhoneNumber = String(dialerPhoneNumber);
    // /*отладка*/ console.log('\n --> dialerPhoneNumber-2 = ' + dialerPhoneNumber + '\n'); await driver.pause(5000);
    await expect(dialerPhoneNumber).toEqual(supportContact);
    
    // 4.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await UDev.androidPressBackButton(3);
    while(!await SSup.titleWindow_CallBank.isDisplayed()){
      if(await SAuth.titleScreen_EnterPinCode.isDisplayed()){
        await UApp.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
        // * Нажать кнопку Позвонить в банк.
        await SSup.item_CallBank.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
        await SSup.item_CallBank.click();
      }
      // await driver.pause(1000);
      if(!await SSup.titleWindow_CallBank.isDisplayed()) {
        await driver.back();
      }
    };
    // 4.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.
    // - окно Позвонить в банк
    await expect(SSup.titleWindow_CallBank).toHaveText(SSup.titleWindow_CallBank_Ru_Expected);

    // 5.Выполнить шаги 3-4 для каждого телефонного номера.
  }
});
it('ab-u-tc-01.004p: ? Write to bank | Написать в банк /Тест выполнен частично: -1-Telegram является каналом, -2-WhatApp подключен к Telegram/', async () => {
  /**
  > Можно осуществить контакты со службой поддержки приложения, написав в мессенджер. <
ПРЕДУСЛОВИЯ:
  1.Установлены в тестируемом устройстве соответствующие мессенджеры (Telegram, WhatsApp, ...), а также выполнен вход в аккаунты пользователя.
  2.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Поддержка.
ПОСТУСЛОВИЯ: 1.Выйти из приложения.
  *
ШАГИ:
  1.Нажать кнопку Поддержка.
  1.1.Открыт экран Поддержка, где доступна кнопка Написать в банк.

  2.Нажать кнопку Позвонить в банк.
  2.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).

  3.Нажать мессенджер (любой).
  3.1.Открыт в выбранном мессенджере экран переписки со службой поддержки, где отображается предыдущая переписка, доступно поле ввода сообщения.

    -!-1.Выполнить переписку со службой поддержки.
    -!-1.1.Отображается переписка на экране.

  4.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  4.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).

  5.Выполнить шаги 3-4 для каждого мессенджера.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-01.004p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNav_Support.click();
  // 1.1.Открыт экран Поддержка, где доступна кнопка Написать в банк.
  // - экран Поддержка
  await expect(SSup.titleScreen_Support).toHaveText(SSup.titleScreen_Support_Ru_Expected);

  // 2.Нажать кнопку Написать в банк.
  await SSup.item_WriteToBank.click();
  // 2.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).
  // - окно Написать в банк
  await expect(SSup.titleWindow_CallBank).toHaveText(SSup.titleWindow_WriteToBank_Ru_Expected);
  // * Создать массив видимых элементов.
  const raw_array = await SSup.items_titleWindow_CallBank;
  // const raw_array = await $('//*[@resource-id="com.fincube.apexbank.debug:id/design_bottom_sheet"]').$$('android.widget.TextView');
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  // /*отладка*/ console.log(
  //   '\n --> ' + await raw_array[0].getAttribute('resource-id') + ' = raw_array[0]' +
  //   '\n --> ' + await raw_array[1].getAttribute('resource-id') + ' = raw_array[1]' +
  //   '\n --> ' + await raw_array[2].getAttribute('resource-id') + ' = raw_array[2]' +
  //   '\n --> ' + await raw_array[3].getAttribute('resource-id') + ' = raw_array[3]' +
  //   '\n --> ' + await raw_array[4].getAttribute('resource-id') + ' = raw_array[4]' +
  //   '\n');
  let data_array = [];
  const elementAttributeKey = SSup.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = SSup.text_ElementAttributeValue_Part_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array + ' | data_array.length = '+data_array.length);
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getAttribute('resource-id') + ' = data_array[0]' +
  //   '\n --> ' + await data_array[1].getAttribute('resource-id') + ' = data_array[1]' +
  //   '\n --> ' + await data_array[2].getAttribute('resource-id') + ' = data_array[2]' +
  //   '\n --> ' + await data_array[3].getAttribute('resource-id') + ' = data_array[3]' +
  //   '\n');
  // /*отладка*/ await driver.pause(5000);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw " ! не сформирован data_array (массив мессенджеров) = '" + data_array + "'";
  }

  for(let i = 0; i < data_array.length; i++){
    // 3.Нажать мессенджер (любой).
    await data_array[i].click();
    // 3.1.Открыт в выбранном мессенджере экран переписки со службой поддержки, где отображается предыдущая переписка, доступно поле ввода сообщения.
    await STlg.titleScreen_ApexbankChat_En.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
    // - экран переписки со службой поддержки
    await expect(STlg.titleScreen_ApexbankChat_En).toHaveText(STlg.titleScreen_ApexbankChat_En_Expected);
    // - поле ввода сообщения
    // await expect(STlg.input_ChaMessage).toBeDisplayed();
    // /*отладка*/ console.log('\n --> STlg.titleScreen_ApexbankChat_En = ' + await STlg.titleScreen_ApexbankChat_En.getText() + '\n');
    
    // 4.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await UDev.androidPressBackButton(2);
    while(!await SSup.titleWindow_CallBank.isDisplayed()){
      if(await SAuth.titleScreen_EnterPinCode.isDisplayed()){
        await UApp.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
        // * Нажать кнопку Написать в банк.
        await SSup.item_WriteToBank.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
        await SSup.item_WriteToBank.click();
      }
      // await driver.pause(1000);
      if(!await SSup.titleWindow_CallBank.isDisplayed()) {
        await driver.back();
      }
    };
    // 4.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).
    // - окно Написать в банк
    await expect(SSup.titleWindow_CallBank).toHaveText(SSup.titleWindow_WriteToBank_Ru_Expected);
  
    // 5.Выполнить шаги 3-4 для каждого мессенджера.
  }
});
it('ab-u-tc-01.005p: ? Write to bank (offices and ATMs) | Написать в банк (офисы и банкоматы) /Тест выполнен частично: -1-Telegram является каналом, -2-WhatApp подключен к Telegram/', async () => {
  /**
  > Можно осуществить контакты со службой поддержки приложения, написав в мессенджер (из раздела Офисы и банкоматы). <
ПРЕДУСЛОВИЯ:
  1.Установлены в тестируемом устройстве соответствующие мессенджеры (Telegram, WhatsApp, ...), а также выполнен вход в аккаунты пользователя.
  2.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Поддержка.
ПОСТУСЛОВИЯ: 1.Выйти из приложения.
  *
ШАГИ:
  1.Нажать кнопку Поддержка.
  1.1.Открыт экран Поддержка, где доступна кнопка Написать в банк.

  2.Нажать кнопку Посмотреть на карте.
  2.1.Открыт экран Наши офисы, где доступна кнопка Написать в банк.

  3.Нажать кнопку Позвонить в банк.
  3.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).

  4.Нажать мессенджер (любой).
  4.1.Открыт в выбранном мессенджере экран переписки со службой поддержки, где отображается предыдущая переписка, доступно поле ввода сообщения.

    -!-1.Выполнить переписку со службой поддержки.
    -!-1.1.Отображается переписка на экране.

  5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  5.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).

  6.Выполнить шаги 4-5 для каждого мессенджера.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-01.005p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNav_Support.click();
  // 1.1.Открыт экран Поддержка, где доступна кнопка Написать в банк.
  // - экран Поддержка
  await expect(SSup.titleScreen_Support).toHaveText(SSup.titleScreen_Support_Ru_Expected);

  // 2.Нажать кнопку Посмотреть на карте.
  await SSup.item_ViewOnMap.click();
  // 2.1.Открыт экран Наши офисы, где доступна кнопка Написать в банк.
  // - экран Наши офисы
  await expect(SSup.titleScreen_OurOffices).toHaveText(SSup.titleScreen_OurOffices_Ru_Expected);
 
  // 3.Нажать кнопку Написать в банк.
  await SSup.button_WriteToBank.click();
  // 3.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).
  // - окно Написать в банк
  await expect(SSup.titleWindow_CallBank).toHaveText(SSup.titleWindow_WriteToBank_Ru_Expected);
  // * Создать массив видимых элементов.
  const raw_array = await SSup.items_titleWindow_CallBank;
  // const raw_array = await $('//*[@resource-id="com.fincube.apexbank.debug:id/design_bottom_sheet"]').$$('android.widget.TextView');
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  // /*отладка*/ console.log(
  //   '\n --> ' + await raw_array[0].getAttribute('resource-id') + ' = raw_array[0]' +
  //   '\n --> ' + await raw_array[1].getAttribute('resource-id') + ' = raw_array[1]' +
  //   '\n --> ' + await raw_array[2].getAttribute('resource-id') + ' = raw_array[2]' +
  //   '\n --> ' + await raw_array[3].getAttribute('resource-id') + ' = raw_array[3]' +
  //   '\n --> ' + await raw_array[4].getAttribute('resource-id') + ' = raw_array[4]' +
  //   '\n');
  let data_array = [];
  const elementAttributeKey = SSup.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = SSup.text_ElementAttributeValue_Part_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array + ' | data_array.length = '+data_array.length);
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getAttribute('resource-id') + ' = data_array[0]' +
  //   '\n --> ' + await data_array[1].getAttribute('resource-id') + ' = data_array[1]' +
  //   '\n --> ' + await data_array[2].getAttribute('resource-id') + ' = data_array[2]' +
  //   '\n --> ' + await data_array[3].getAttribute('resource-id') + ' = data_array[3]' +
  //   '\n');
  // /*отладка*/ await driver.pause(5000);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw " ! не сформирован data_array (массив мессенджеров) = '" + data_array + "'";
  }

  for(let i = 0; i < data_array.length; i++){
    // 4.Нажать мессенджер (любой).
    await data_array[i].click();
    // 4.1.Открыт в выбранном мессенджере экран переписки со службой поддержки, где отображается предыдущая переписка, доступно поле ввода сообщения.
    await STlg.titleScreen_ApexbankChat_En.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
    // - экран переписки со службой поддержки
    await expect(STlg.titleScreen_ApexbankChat_En).toHaveText(STlg.titleScreen_ApexbankChat_En_Expected);
    // - поле ввода сообщения
    // await expect(STlg.input_ChaMessage).toBeDisplayed();
    // /*отладка*/ console.log('\n --> STlg.titleScreen_ApexbankChat_En = ' + await STlg.titleScreen_ApexbankChat_En.getText() + '\n');
    
    // 5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await UDev.androidPressBackButton(2);
    while(!await SSup.titleWindow_CallBank.isDisplayed()){
      if(await SAuth.titleScreen_EnterPinCode.isDisplayed()){
        await UApp.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
        // * Нажать кнопку Написать в банк.
        await SSup.button_WriteToBank.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
        await SSup.button_WriteToBank.click();
      }
      // await driver.pause(1000);
      if(!await SSup.titleWindow_CallBank.isDisplayed()) {
        await driver.back();
      }
    };
    // 5.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).
    // - окно Написать в банк
    await expect(SSup.titleWindow_CallBank).toHaveText(SSup.titleWindow_WriteToBank_Ru_Expected);
  
    // 6.Выполнить шаги 4-5 для каждого мессенджера.
  }
});
it('ab-u-tc-01.006p: ? Additional communication | Дополнительная связь /Тест выполнен частично: -1-Telegram является каналом, -2-.../', async () => {
  /**
  > Можно осуществить связь с банком, используя дополнительные ресурсы. <
ПРЕДУСЛОВИЯ:
  1.Установлены в тестируемом устройстве веб-браузер, соответствующие приложения (Telegram, Instagram...), а также выполнен вход в аккаунты пользователя.
  2.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Поддержка.
ПОСТУСЛОВИЯ: 1.Выйти из приложения.
  *
ШАГИ:
  1.Нажать кнопку Поддержка.
  1.1.Открыт экран Поддержка, где в разделе Дополнительная связь доступен список ресурсов банка.

  2.Нажать ресурс (любой).
  2.1.Открыт экран ресурса банка, где отображается соответствующая информация.

    -!-1.Выполнить требуемые действия, используя информацию ресурса.
    -!-1.1.-

  3.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  3.1.Открыт экран Поддержка, где в разделе Дополнительная связь доступен список ресурсов банка.

  4.Выполнить шаги 2-3 для каждого ресурса.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-01.006p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNav_Support.click();
  // 1.1.Открыт экран Поддержка, где в разделе Дополнительная связь доступен список ресурсов банка.
  // - экран Поддержка
  await expect(SSup.titleScreen_Support).toHaveText(SSup.titleScreen_Support_Ru_Expected);
  // - список ресурсов банка (заголовок)
  await expect(SSup.titleSection_AdditionalLinks).toHaveText(SSup.titleSection_AdditionalLinks_Ru_Expected);

  // * Прокрутить, делая видимыми следующие элементы
  await $(`android=${UApp.scrollForward}`);
  // * Создать массив видимых элементов.
  let raw_array = await SSup.items_titleSection_AdditionalLinks;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  // /*отладка*/ console.log(
  //   '\n --> ' + await raw_array[0].getAttribute('resource-id') + ' = raw_array[0]' +
  //   '\n --> ' + await raw_array[1].getAttribute('resource-id') + ' = raw_array[1]' +
  //   '\n --> ' + await raw_array[2].getAttribute('resource-id') + ' = raw_array[2]' +
  //   '\n --> ' + await raw_array[3].getAttribute('resource-id') + ' = raw_array[3]' +
  //   '\n --> ' + await raw_array[4].getAttribute('resource-id') + ' = raw_array[4]' +
  //   '\n');
  let data_array = [];
  const elementAttributeKey = SSup.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = SSup.text_ElementAttributeValue_Part_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array + ' | data_array.length = '+data_array.length);
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getAttribute('resource-id') + ' = data_array[0]' +
  //   '\n --> ' + await data_array[1].getAttribute('resource-id') + ' = data_array[1]' +
  //   '\n --> ' + await data_array[2].getAttribute('resource-id') + ' = data_array[2]' +
  //   '\n --> ' + await data_array[3].getAttribute('resource-id') + ' = data_array[3]' +
  //   '\n --> ' + await data_array[4].getAttribute('resource-id') + ' = data_array[4]' +
  //   '\n');
  // /*отладка*/ await driver.pause(5000);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw " ! не сформирован data_array (массив доп.ресурсов) = '" + data_array + "'";
  }
  // /*отладка*/ for (let i = 0; i < data_array.length; i++) {
  //   console.log('data_array[' + i + ']' + await data_array[i].getText());
  // }
  // /*отладка*/ await driver.pause(5000);

  let supportContact = '';
  for (let i = 0; i < data_array.length; i++) {
    // 2.Нажать ресурс (любой).
    // * Сохранить название мессенджера.
    supportContact = await data_array[i].getAttribute('resource-id'); // ...getText();
    // /*отладка*/ console.log('\n --> supportContact = ' + supportContact + '\n');

    if(supportContact.includes(SGen.text_Telegram_En_Expected)){
      // /*отладка*/ console.log('\n --> supportContact.includes(Tg) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await STlg.titleScreen_ApexbankChat_En_1.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
      // - экран переписки со службой поддержки
      await expect(STlg.titleScreen_ApexbankChat_En_1).toHaveText(STlg.titleScreen_ApexbankChat_En_Expected_1);

    } else if(supportContact.includes(SGen.text_LinkedIn_En_Expected)){
      // /*отладка*/ console.log('\n --> supportContact.includes(LinkedIn) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await SChrom.urlBar_browser.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
      // - адрес ресурса
      await expect(await SChrom.urlBar_browser.getText()).toContain(SChrom.url_LinkedIn_Expected);
      await expect(await SChrom.urlBar_browser.getText()).toContain(SGen.text_Apexbank_En_Expected);

    } else if(supportContact.includes(SGen.text_Instagram_En_Expected)){
      // /*отладка*/ console.log('\n --> supportContact.includes(Instagram) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await SChrom.urlBar_browser.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
      // - адрес ресурса
      await expect(await SChrom.urlBar_browser.getText()).toContain(SChrom.url_Instagram_Expected);
      await expect(await SChrom.urlBar_browser.getText()).toContain(SGen.text_Apexbank_En_Expected);

    } else if(supportContact.includes(SGen.text_Facebook_En_Expected)){
      // /*отладка*/ console.log('\n --> supportContact.includes(Facebook) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await SChrom.urlBar_browser.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
      // - адрес ресурса
      await expect(await SChrom.urlBar_browser.getText()).toContain(SChrom.url_Facebook_Expected);
      await expect(await SChrom.urlBar_browser.getText()).toContain(SGen.text_Apexbank_En_Expected);

    } else if(supportContact.includes(SGen.text_WebSite_En_Expected)){
      // /*отладка*/ console.log('\n --> supportContact.includes(WebSite) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await SChrom.urlBar_browser.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
      // - адрес ресурса
      await expect(await SChrom.urlBar_browser.getText()).toContain(SChrom.url_Apexbank_Expected);
      await expect(await SChrom.urlBar_browser.getText()).toContain(SGen.text_Apexbank_En_Expected);

    } else {
      // /*отладка*/ console.log('\n --> в supportContact нет искомого содержимого: ' + supportContact + '\n');
      throw " ! в supportContact нет искомого содержимого = '" + supportContact + "'";
    }

    // 3.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await UDev.androidPressBackButton(1);
    while(!await SSup.titleSection_AdditionalLinks.isDisplayed()){
      if(await SAuth.titleScreen_EnterPinCode.isDisplayed()){
        await UApp.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
      }
      await driver.pause(1000);
      if(!await SSup.titleSection_AdditionalLinks.isDisplayed()) {
        await driver.back();
      }
    };
    // 3.1.Открыт экран Поддержка, где в разделе Дополнительная связь доступен список ресурсов банка.
    // - список ресурсов банка (заголовок)
    // ! см. внутри while выше

    // 4.Выполнить шаги 2-3 для каждого ресурса.
  }
});
it('ab-u-tc-01.007p: ? Frequently asked questions | Частые вопросы /Теряет элемент (сбивается и не находит) после прокрутки/', async () => {
  /**
  > Можно получить информацию о работе банка, используя ответы на часто задаваемые вопросы. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Поддержка.
ПОСТУСЛОВИЯ: 1.Выйти из приложения.
  *
ШАГИ:
  1.Нажать кнопку Поддержка.
  1.1.Открыт экран Поддержка, где доступна кнопка Часто задаваемые вопросы.

  2.Нажать кнопку Часто задаваемые вопросы.
  2.1.Открыт экран Часто задаваемые вопросы, где доступен список вопросов.

  3.Нажать вопрос (любой).
  3.1.Отображается ответ (под вопросом).

  4.Нажать вопрос (повторно).
  4.1.Скрыт ответ.

  5.Выполнить шаги 3-4 для каждого вопроса.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-01.007p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNav_Support.click();
  // 1.1.Открыт экран Поддержка, где доступна кнопка Часто задаваемые вопросы.
  // - экран Поддержка
  await expect(SSup.titleScreen_Support).toHaveText(SSup.titleScreen_Support_Ru_Expected);

  // 2.Нажать кнопку Часто задаваемые вопросы.
  await SSup.item_Faq.click();
  // 2.1.Открыт экран Часто задаваемые вопросы, где доступен список вопросов.
  // - экран Часто задаваемые вопросы
  await expect(SSup.titleScreen_Faq).toHaveText(SSup.titleScreen_Faq_Ru_Expected);

  // // * Прокрутить, делая видимыми следующие элементы
  // await $(`android=${UApp.scrollForward}`);
  // * Создать массив видимых элементов.
  let raw_array = await SSup.items_titleScreen_Faq;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  // /*отладка*/ console.log(
  //   '\n --> ' + await raw_array[0].getAttribute('resource-id') + ' = raw_array[0]' +
  //   '\n --> ' + await raw_array[1].getAttribute('resource-id') + ' = raw_array[1]' +
  //   '\n --> ' + await raw_array[2].getAttribute('resource-id') + ' = raw_array[2]' +
  //   '\n --> ' + await raw_array[3].getAttribute('resource-id') + ' = raw_array[3]' +
  //   '\n --> ' + await raw_array[4].getAttribute('resource-id') + ' = raw_array[4]' +
  //   '\n');
  let data_array = [];
  const elementAttributeKey = SSup.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = SSup.text_ElementAttributeValue_SupportFaq_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array + ' | data_array.length = '+data_array.length);
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getAttribute('resource-id') + ' = data_array[0]' +
  //   '\n --> ' + await data_array[1].getAttribute('resource-id') + ' = data_array[1]' +
  //   '\n --> ' + await data_array[2].getAttribute('resource-id') + ' = data_array[2]' +
  //   '\n --> ' + await data_array[3].getAttribute('resource-id') + ' = data_array[3]' +
  //   '\n --> ' + await data_array[4].getAttribute('resource-id') + ' = data_array[4]' +
  //   '\n --> ' + await data_array[5].getText() + ' = data_array[5].getText()' +
  //   '\n');
  // /*отладка*/ await driver.pause(5000);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw " ! не сформирован data_array (массив вопросов) = '" + data_array + "'";
  }
  // /*отладка*/ for (let i = 0; i < data_array.length; i++) {
  //   console.log('data_array[' + i + ']' + await data_array[i].getText());
  // }
  // /*отладка*/ await driver.pause(5000);
  for(let i=0; i<data_array.length; i++){
    if(!data_array[i].isDisplayed()){
      // * Прокрутить, делая видимыми следующие элементы
      await $(`android=${UApp.scrollForward}`);
    }
    // 3.Нажать вопрос (любой).
    await data_array[i].click();
    // 3.1.Отображается ответ (под вопросом).
    if(await SSup.item_FaqReply.isDisplayed()){
      // - Отображается ответ
      await SSup.item_FaqReply.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
      await expect(SSup.item_FaqReply).toBeDisplayed();
    }
    
    // 4.Нажать вопрос (повторно).
    await data_array[i].click();
    // 4.1.Скрыт ответ.
    // - Скрыт ответ
    // await driver.pause(500);
    await expect(SSup.item_FaqReply).not.toBeDisplayed();

    // 5.Выполнить шаги 3-4 для каждого вопроса.
  }
});

// ab-ts-02p: Тестирование авторизации |вер.20230913| /Тестов 2 (частично 1)/
it('ab-e-tc-02.001p: ! Registration | Регистрация /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
/** > базовые тесты (см. файл ТК 1 (Регистрация)):
   * - 2 Стр. выбор языка, выбор языка (Русский) (ш?: П.1)
   * - 15 Стр. регист, кнопка "Далее" (ш?: 1-4)
   * - 27 Стр. Стр. ОТР, кнопка "Далее" (ш?: 5-6)
   * - ? ... <
  > Можно зарегистрироваться в приложении. <
ПРЕДУСЛОВИЯ:
  1.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступны поле ввода номера телефона, чекбокс согласия с условиями и неактивная кнопка Продолжить.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать поле ввода номера телефона.
  1.1.Открыта клавиатура.
  2.Ввести номер телефона (незарегистрированный ранее) в поле ввода номера телефона.
  2.1.Закрыта клавиатура. В поле ввода отображается введенный номер.

  3.Нажать чекбокс согласия с условиями.
  3.1.Чекбокс согласия отображается отмеченным, кнопка Продолжить активна.

  4.Нажать кнопку Продолжить.
  4.1.Открыт экран Введите код из СМС, где доступны поле ввода кода и неактивная кнопка Продолжить.
  5.Нажать поле ввода кода из СМС.
  5.1.Открыта клавиатура.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  6.Ввести полученный код.
  6.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.

    7.Нажать кнопку Подтвердить.
    7.1.Открыт экран Создайте свой пароль, где доступны поля ввода Создайте пароль, Подтвердите пароль, Введите секретное слово и неактивная кнопка Продолжить.

    8.Ввести создаваемый пароль, подтвердить пароль и ввести секретное слово (в соответствующих полях ввода).
    8.1.В полях ввода отображаются введенные данные (звездочками) и активна кнопка Продолжить.

    9.Нажать кнопку Продолжить.
    9.1.Открыт экран Поздравляем с регистрацией и кнопка Продолжить.

    10.Нажать кнопку Продолжить.
    10.1.Открыт экран Добро пожаловать, где доступны поле кода страны и поле ввода номера телефона.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-02.001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');
  // /*отладка*/ console.log('\n --> Package = ' + await driver.getCurrentPackage() + '\n');
  // /*отладка*/ console.log('\n --> Activity = ' + await driver.getCurrentActivity() + '\n');
  // /*отладка*/ console.log('\n --> this.test.title = ' + this.test.title + '\n'); // wrong

  // * Выйти из приложения (если необходимо)
  if (
    !await SAuth.titleScreen_Welcome_En.isDisplayed() &
    !await SAuth.titleScreen_Welcome_Ru.isDisplayed() &
    !await SAuth.titleScreen_Welcome_Uz.isDisplayed()
    ) await SGen.logOutTheApp();
    
  // П.1. Запустить приложение (автоматически), ...
  await SAuth.selectLanguage(SAuth.text_LanguageRussian_En);

  // 1.Нажать поле ввода номера телефона.
  await SAuth.input_PhoneNumber.click();
  // 1.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

  // 2.Ввести номер телефона (незарегистрированный ранее) в поле ввода номера телефона.
  await UDev.androidKeyboardTypeIn(SReg.text_PhoneNumberToBeRegistered_Expected); // SAuth.phoneNumber_Expected
  // 2.1.Закрыта клавиатура. В поле ввода отображается введенный номер.
  // - клавиатура
  // await expect(await driver.isKeyboardShown()).toBe(false); // отключено, т.к. ГитХаб и БраузерСтак не успевают
  // - введенный номер
  await expect(SAuth.input_PhoneNumber).toHaveText(SReg.text_PhoneNumberToBeRegistered_Expected);

  // 3.Нажать чекбокс согласия с условиями.
  await SAuth.check_AgreeWithTerms.click();
  // 3.1.Чекбокс согласия отображается отмеченным, кнопка Продолжить активна.
  // - чекбокс
  await expect(SAuth.check_AgreeWithTerms).toBeEnabled();
  // - кнопка Продолжить
  await expect(SAuth.button_Continue).toBeEnabled();

  // 4.Нажать кнопку Продолжить.
  await SAuth.button_Continue.click();
  // 4.1.Открыт экран Введите код из СМС, где доступны поле ввода кода и неактивная кнопка Продолжить.
  // - экран Введите код из СМС
  await expect(SSms.titleScreen_EnterSmsCode_Ru).toHaveText(SSms.titleScreen_EnterSmsCode_Ru_Expected);
  // - поле ввода кода ?
  // - кнопка Продолжить ?

  // 5.Нажать поле ввода кода из СМС.
  await SSms.input_SmsCode.click();
  // 5.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 6.Ввести полученный код.
  // await UDev.androidKeyboardTypeIn(SReg.text_SmsCodeReceived_Expected);
  const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6); //smsCode_Received
  await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);
  // 6.1.В поле ввода отображается введенный код, кнопка Продолжить активна.
  // - введенный код ?
  await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
  // - кнопка Продолжить
  await expect(SSms.button_Continue).toBeEnabled();

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...
});
it.only('ab-e-tc-02.002p: Authorization | Авторизация', async () => {
/** > базовые тесты (см. файл ТК 1 (Регистрация)):
 * - 2 Стр. выбор языка, выбор языка (Русский) (ш10: П.1)
 * - 59 Стр. аутентификации, поле "Пароль":валидный (ш10: 1-5)
 * - 64 Стр. создания ПИН-кода: Валид ПИН (ш10: 6-7) <
  > Можно авторизоваться в приложении, используя валидные номер телефона и пароль. <
ПРЕДУСЛОВИЯ:
  1.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступны поле ввода номера телефона, чекбокс согласия с условиями и неактивная кнопка Продолжить.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать поле ввода номера телефона.
  1.1.Открыта клавиатура.
  2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
  2.1.Закрыта клавиатура. В поле ввода отображается введенный номер.

  3.Нажать чекбокс согласия с условиями.
  3.1.Чекбокс согласия отображается отмеченным, кнопка Продолжить активна.

  4.Нажать кнопку Продолжить.
  4.1.Открыт экран Введите код из СМС, где доступны поле ввода кода и неактивная кнопка Продолжить.

  5.Нажать поле ввода кода.
  5.1.Открыта клавиатура.
  6.Ввести код.
  6.1.В поле ввода отображается введенный код, кнопка Продолжить активна.

  7.Нажать кнопку Продолжить.
  7.1.Открыт экран входа в приложение, где доступны поле кода страны, поле номера телефона, поле ввода пароля и неактивная кнопка Продолжить.

  8.Нажать поле ввода пароля.
  8.1.Открыта клавиатура.
  9.Ввести пароль.
  9.1.В поле ввода введенный пароль отображается звездочками, кнопка Продолжить активна.

  10.Нажать кнопку Продолжить.
  10.1.Открыт экран Создайте новый PIN-код, где доступны неактивные символы пин-кода и клавиатура приложения.

  11.Ввести пин-код.
  11.1.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода открывается экран Введите свой PIN-код.
  12.Ввести пин-код.
  12.1.Открыт главный экран приложения (активна кнопка Главная панели навигации).
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-02.002p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1,1-7.Выполнить авторизацию пользователя (в приложении).
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);
});

// ab-ts-03p: Тестирование профиля |вер.20230913| /Тестов 2 (частично 1)/
it('ab-e-tc-03.001p: ! Identification in MyID | Идентификация в MyID /Тест выполнен частично: -1-требуется эмулировать сканирование лица камерой устройства; -2-иногда MyId открывается на английском/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить идентификацию пользователя в службе MyID. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где доступна кнопка профиля пользователя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать кнопку профиля пользователя.
  1.1.Открыт экран профиля пользователя, где доступна кнопка статуса пользователя.

  2.Нажать кнопку статуса пользователя.
  2.1.Открыт экран Вход или регистрация, где доступны поле ввода Серия и номер паспорта, поле ввода Дата рождения, неактивная кнопка Продолжить.

  3.Ввести валидные данные в поля ввода.
  3.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.

  4.Нажать кнопку Продолжить.
  4.1.Открыт экран камеры устройства (для фотографирования лица пользователя), где доступны текст убедиться пользователю о том, что его лицо находится в выделенном пространстве и область выделенного пространства.

--- ТРЕБУЕТСЯ эмулировать сканирование лица камерой устройства ---

  5.Сканировать лицо пользователя, затем...???
  5.1.Открыт экран...???

  *
-?- узнать, как эмулировать сканирование лица камерой устройства
-?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-03.001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  // const phoneNumber = DCard.phoneNumber_5;
  // const phoneNumber_pass = DCard.phoneNumber_5_pass;
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // 1.Нажать кнопку профиля пользователя.
  await SHome.button_Profile.click();
  // 1.1.Открыт экран профиля пользователя, где доступна кнопка статуса пользователя.
  
  // * Проверяем, нужна ли идентификация
  if (await SProf.text_Status.isDisplayed()) {
    console.log('\n --> Идентификация не требуется, т.к. пользователь уже идентифицирован. \n');
    return;
  }

  // 2.Нажать кнопку статуса пользователя.
  await SProf.item_Status.click();
          // // 2.1.Открыт экран Возможности, где доступна кнопка Пройти идентификацию.
          // // - экран Возможности
          // await expect(SProf.possibilitiesScreenHeaderRu).toHaveText(SProf.possibilitiesScreenHeaderRu_Expected);
          // // - кнопка Пройти идентификацию
          // await SProf.identificationButton.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 5000});

          // // 3.Нажать кнопку Пройти идентификацию.
          // await SProf.identificationButton.click();
  // 2.1.Открыт экран Вход или регистрация, где доступны поле ввода Серия и номер паспорта, поле ввода Дата рождения, неактивная кнопка Продолжить.
  // - кнопка Продолжить
  /* await SProf.button_Continue.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 5000});
   * - этот элемент (кнопка идентифицируется на русском: Продолжить) отключен (и другие ниже), т.к. MyId открывается на английском при запуске нескольких тестов (не только одного этого)
   */
  // await SProf.Items_TextView_TitleWindow_LoginOrRegister[3].waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 5000}); - этот элемент тоже отключен, т.к. выдает ошибку... Не найден)))
    // /*отладка*/ const iCount = await SProf.Items_TextView_TitleWindow_LoginOrRegister.length;
    // /*отладка*/ for (let i = 0; i < iCount; i++) {
    //   console.log('\n --> ' +
    //     await SProf.Items_TextView_TitleWindow_LoginOrRegister[i].getText() +
    //     ' = .Items_TextView_TitleWindow_LoginOrRegister[' + i + '].getText()' +
    //     '\n');
    // }
  await SProf.button_Scanner.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

  // 3.Ввести валидные данные в поля ввода.
  // (см.выше для кнопки) await SProf.input_DocumentData.click();
  // let qwe = await SProf.Items_EditText_TitleWindow_LoginOrRegister[0];
  // await qwe.click();
  await SProf.Items_EditText_TitleWindow_LoginOrRegister[0].click();
  await UDev.androidKeyboardTypeIn(SProf.text_PassportSeriesAndNumber_En_Expected);
  // (см.выше для кнопки) await SProf.input_BirthDate.click();
  await SProf.Items_EditText_TitleWindow_LoginOrRegister[1].click();
  await UDev.androidKeyboardTypeIn(SProf.text_BirthDate_Expected);
  // 3.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.
  await expect(SProf.Items_EditText_TitleWindow_LoginOrRegister[0]).toHaveText(SProf.text_PassportSeriesAndNumber_En_Expected);
  await expect(SProf.Items_EditText_TitleWindow_LoginOrRegister[1]).toHaveText(SProf.text_BirthDate_Expected);

  // 4.Нажать кнопку Продолжить.
  // (см.выше для кнопки) await SProf.button_Continue.click();
  await SProf.Items_TextView_TitleWindow_LoginOrRegister[3].click();
  // 4.1.Открыт экран сканирования лица камерой устройства, где доступны текст убедиться пользователю о том, что его лицо находится в выделенном пространстве и область выделенного пространства.
  // - экран сканирования лица (заголовок)
  // await expect(SProf.titleWindow_FaceScanner_Ru_Expected).toHaveText(SProf.titleWindow_FaceScanner_Ru_Expected);
  // - область выделенного пространства
  await SProf.frame_FaceScanner.waitForDisplayed({timeout:SGen.number_WaitTime_Expected + 180000});

// --- ТРЕБУЕТСЯ эмулировать сканирование лица камерой устройства ---

  // 5.Сканировать лицо пользователя, затем...???
  // 5.1.Открыт экран...???

// -?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства
  // ...

  // * Вернуться на экран Открыт экран Возможности, нажимая кнопку Назад.
  await UDev.androidPressBackButton(3);
  // if(await SAuth.enterPinCodeScreenHeader.waitForDisplayed({timeout: SGen.number_WaitTime_Expected})) {
  //   await UApp.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
  // }
  // await SProf.identificationButton.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  // // - экран Возможности
  // await expect(SProf.possibilitiesScreenHeaderRu).toHaveText(SProf.possibilitiesScreenHeaderRu_Expected);

  // await SHome.button_PassVerification.click();
  // await SProf.close_Button.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 5000})
  // await SProf.closeButton.click();

  // // может эти строки нужно положить в афтерич
  // if(await SProf.passIdentification_Button.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 5000})) {
  //   await SProf.close_Button.click();
  // }

});
it.skip('ab-u-tc-03.002p: Language selection | Выбор языка', async () => {
  /** > базовые тесты (см. файл ...) <
  > В профиле пользователя можно менять языки интерфейса приложения. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где доступны кнопка профиля пользователя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать кнопку профиля пользователя.
  1.1.Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на текущем языке.
  
  2.Нажать кнопку выбора языка.
  2.1.Открыто окно выбора языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
  2.2.Отображаются галочка на элементе текущего выбора языка и неактивная кнопка Сохранить (на выбранном языке).

  3.Нажать элемент выбора языка (любого не текущего).
  3.1.Отображается галочка на элементе нажатого языка, кнопка Сохранить (на выбранном языке) активирована.

  4.Нажать кнопку Сохранить.
  4.1.Закрыто окно выбора языка. Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на выбранном языке.

  5.Выполнить шаги 2-4 для каждого доступного языка.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-03.002p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  // const phoneNumber = DCard.phoneNumber_10;
  // const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // Пред.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // 1.Нажать кнопку профиля пользователя.
  await SHome.button_Profile.click();
  // 1.1.Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на текущем языке.
  
  // 2.Нажать кнопку выбора языка.
  await SProf.languageItem.click();

  // * Создать массив существующих языков.
  await SProf.languagesListItemEn.waitForDisplayed({timeout: 5000});
  const raw_array = await $$('android.widget.LinearLayout'); // android.widget.TextView
  // const raw_array = await SProf.languagesListItems;
  const data_array = [];
  const data_array_elems = [];
  const elementAttributeKey = 'resource-id';

  await SAuth.generateLanguagesList(raw_array, data_array, data_array_elems, elementAttributeKey, SAuth.text_LanguageEnglish_En, SAuth.text_LanguageRussian_En, SAuth.text_LanguageUzbek_En, 'kz');
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    // console.log('\n --> languagesList не сформирован: data_array = ' + data_array + '\n');
    throw " ! не сформирован data_array (массив языков) = '" + data_array + "'";
  }

  let elementIndex = 0;
  for (const element of data_array) {
    // /*отладка*/ console.log('\n --> elementIndex ' + elementIndex + '\n');
    // /*отладка*/ console.log('\n --> element ' + element + '\n');
    
    if (elementIndex > 0) {
      // 2.Нажать кнопку выбора языка.
      await SProf.languageItem.click();
      // 2.1.Открыто окно выбора языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
      // - окно
      await expect(SProf.languagesListTitle).toBeDisplayed();
      // - элементы выбора языков
      for (const element of data_array_elems) {
        await expect(element).toBeDisplayed();
      }
      // 2.2.Отображаются галочка на элементе текущего выбора языка и неактивная кнопка Сохранить (на выбранном языке).
      // - ?
    }
    elementIndex++;

    switch (element) {
      case SAuth.text_LanguageEnglish_En:
        // /*отладка*/ console.log('\n --> case En: ' + element + '\n');
        // 3.Нажать элемент выбора языка (любого не текущего) /например, английский/.
        await SProf.languagesListItemEn.click();
        // 3.1.Отображается галочка на элементе нажатого языка, кнопка Сохранить (на выбранном языке) активирована.
        // - ?

        // 4.Нажать кнопку Сохранить.
        await SProf.languageSaveButton.click();
        // 4.1.Закрыто окно выбора языка. Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на выбранном языке:
        // - окно
        await expect(SProf.languagesListTitle).not.toBeDisplayed();
        // - кнопка выбора языка интерфейса
        await expect(SProf.languageItem).toBeDisplayed();
        // - текст названия выбранного языка
        await expect(SProf.languageItemName).toHaveText(SProf.text_AppLanguage_En_Expected);
        // - кнопка выхода из приложения на выбранном языке
        await expect(SProf.appLogOutItem).toHaveText(SProf.appLogOutItemEn_Expected);
        break;
      
      case SAuth.text_LanguageRussian_En:
        // /*отладка*/ console.log('\n --> case Ru: ' + element + '\n');
        // 3.Нажать элемент выбора языка (любого не текущего) /например, русский/.
        await SProf.languagesListItemRu.click();
        // 3.1.Отображается галочка на элементе нажатого языка, кнопка Сохранить (на выбранном языке) активирована.
        // - ?

        // 4.Нажать кнопку Сохранить.
        await SProf.languageSaveButton.click();
        // 4.1.Закрыто окно выбора языка. Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на выбранном языке:
        // - окно
        await expect(SProf.languagesListTitle).not.toBeDisplayed();
        // - кнопка выбора языка интерфейса
        await expect(SProf.languageItem).toBeDisplayed();
        // - текст названия выбранного языка
        await expect(SProf.languageItemName).toHaveText(SProf.text_AppLanguage_Ru_Expected);
        // - кнопка выхода из приложения на выбранном языке
        await expect(SProf.appLogOutItem).toHaveText(SProf.appLogOutItemRu_Expected);
        break;
      
      case SAuth.text_LanguageUzbek_En:
        // /*отладка*/ console.log('\n --> case Uz: ' + element + '\n');
        // 3.Нажать элемент выбора языка (любого не текущего) /например, узбекский/.
        await SProf.languagesListItemUz.click();
        // 3.1.Отображается галочка на элементе нажатого языка, кнопка Сохранить (на выбранном языке) активирована.
        // - ?

        // 4.Нажать кнопку Сохранить.
        await SProf.languageSaveButton.click();
        // 4.1.Закрыто окно выбора языка. Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на выбранном языке:
        // - окно
        await expect(SProf.languagesListTitle).not.toBeDisplayed();
        // - кнопка выбора языка интерфейса
        await expect(SProf.languageItem).toBeDisplayed();
        // - текст названия выбранного языка
        await expect(SProf.languageItemName).toHaveText(SProf.text_AppLanguage_Uz_Expected);
        // - кнопка выхода из приложения на выбранном языке
        await expect(SProf.appLogOutItem).toHaveText(SProf.appLogOutItemUz_Expected);
        break;
    
      default:
        console.log('\n --> в languagesList нет элемента: ' + element + '\n');
        break;
    }
  }

  // 5.Выполнить шаги 2-4 для каждого доступного языка.
});



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
it.skip('ab-s-d-001: Debug', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-s-d-001';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  const phoneNumber = '99 392 30 75';
  // 1.Нажать поле ввода номера телефона.
  await SAuth.input_PhoneNumber.click();
  // 2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
  await UDev.androidKeyboardTypeIn(phoneNumber);
  // // 3.Нажать поле ввода пароля.
  // await SAuth.passwordInput.click();

  // await (await $('android.widget.EditText')[1]).click();
  // Xpaht= //android.widdget.TextView[@text=”Annual Return (History)”]/following-sibling::android.widget.RelativeLayout/android.widget.LinearLayout[0]/android.widget.LinearLayout[ 1]

  const anySymbols = 'Password';
  const selector = 'new UiSelector().text("' + anySymbols + '").className("android.widget.EditText")';
  const button = await $(`android=${selector}`);
  await button.click();
  
  const elem = await $$('android.widget.EditText');
  await elem[1].click();

  // x-path - (//tagname[@attibute=value]), where tagname = class attibute
  // await $('//android.widget.TextView[@text="Перевод"]').click();
  // await $('//android.widget.EditText[@bounds="[363,620][904,719]"]').click();
  await $('//android.widget.EditText[@package="com.fincube.apexbank.debug"]').click();
  await $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[1]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.EditText').click();

  await $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.EditText').click();



  /* пауза */ await driver.pause(5000);
});
it.skip('ab-s-d-002: Debug > Сводный массив', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-s-d-002';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);
  
  // 1.Обратить внимание на баланс каждой карты.
  /*
    1.Считываем видимые данные окна и записываем в массив data_array (название, сумма, номер и срок действия карты).
    2.Прокручиваем окно, делая видимыми следующие данные.
    3.Считываем видимые данные окна и записываем в массив data_array, отсеивая уже имеющиеся в массиве данные.
  */
  
  // *.Создать массив видимых элементов.
  let raw_array = await SHome.items_layout_CardsList;
  const data_array = [];
  const elementAttributeKey = 'resource-id';
  const elementAttributeValue_1 = 'com.fincube.apexbank.debug:id/tvCardName';
  // const elementAttributeValue_2 = 'com.fincube.apexbank.debug:id/tvCardBalance';
  // const elementAttributeValue_3 = 'com.fincube.apexbank.debug:id/tvCardNumber';
  // const elementAttributeValue_4 = 'com.fincube.apexbank.debug:id/tvDCardate';
  
  await UApp.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1/*, elementAttributeValue_2, elementAttributeValue_3, elementAttributeValue_4*/);

  // * Прокрутить, делая видимыми следующие элементы
  await $(`android=${SHome.scrollToElement_Right}`);

  // *.Создать массив видимых элементов.
  raw_array = await SHome.items_layout_CardsList;
  await UApp.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1/*, elementAttributeValue_2, elementAttributeValue_3, elementAttributeValue_4*/);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// return;
});
it.skip('ab-s-d-003: Debug > System/OTP message', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-s-d-003';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  await driver.openNotifications();
  await driver.pause(5000);
  const otpElement = $('//android.widget.TextView[contains(@text,"200")]'); // @text,"bank"
  const OTPmessage = await otpElement.getText();
  /*отладка*/ console.log('\n --> OTPmessage = ' + OTPmessage + '\n');
  
  // await browser.url('http://google.com');
  // // make an asynchronous call using any 3rd party library supporting promises
  // // e.g. call to backend or db to inject fixture data
  // await browser.call(() => {
  //     return somePromiseLibrary.someMethod().then(() => {
  //         // ...
  //     })
  // })




// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// return;
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/* EOF describe */
});

//    * Пауза для контроля экрана
// await driver.pause(5000);
// await CardM.cardBalance.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
//    * Нажать кнопку Назад
// await driver.back();
// await UDev.androidPressBackButton(1);
//    * Скрыть клавиатуру
// await driver.hideKeyboard();
//    * Прокрутить до элемента
// await $(`android=${CardM.scrollToElement_Up}`);
//    * Открыть отчет
// npx allure open
//    * Если открыт экран Введите свой PIN-код
// if(await SAuth.titleScreen_EnterPinCode.isDisplayed()){
//   await UApp.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
// }

/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */