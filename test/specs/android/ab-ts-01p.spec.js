/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */
const DCard  = require('../../data/ab-cards.data');                       // data > Cards

const SAuth  = require("../../screens/android/ab-authorization.screen");  // screen > Authorization
const SGen   = require('../../screens/android/ab-general.screen');        // screen > General
const SHome  = require('../../screens/android/ab-home.screen');           // screen > Home
const SProf  = require('../../screens/android/ab-profile.screen');        // screen > Profile
const SReg   = require("../../screens/android/ab-regisration.screen");    // screen > Registration
const SSup   = require("../../screens/android/ab-support.screen");        // screen > Support

const SChrom = require("../../screens/android/dt-chrome.screen");         // screen > Chrome app
const SDial  = require("../../screens/android/dt-dialer.screen");         // screen > Dialer app
const STlg   = require("../../screens/android/dt-telegram.screen");       // screen > Telegram app

const UApp   = require("../../utils/android/ab-app.utils");               // utilities > App
const UDev   = require("../../utils/android/dt-device.utils");            // utilities > Device

describe('ab-ts-01p: Testing of operations provision | Тестирование обеспечения операций |вер.20231006| /Тестов 11 (частично 5)/', () => {
  let counter = 0, tcNum = '', i = 0;
  beforeEach(async () => {
    await SGen.beforeEach(counter, 's'); // s - support / e - e2e < typeOfTest
    // if (i == 0){
    //   // * Ждем появления кнопки (пропустить рекламу при запуске приложения)
    //   await SAuth.loginButton.waitForDisplayed({timeout: SGen.waitTime + 10000});
    //   await SAuth.loginButton.click();
    //   i++;
    // }

    // // * Снимок экрана для контроля
    // await driver.saveScreenshot('_view_shots/screen_before_e-lastTest.png');

    // /*отладка*/ console.log('\n --> counter-beforeEach = ' + counter + '\n');
    // // * Не выполнять этот код для первого теста
    // if (counter == 0) return;
  
    // // * Открыть начальную страницу приложения
    // await driver.startActivity(SGen.appPackage, SGen.appActivity);
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

// ab-ts-01p: Тестирование поддержки |вер.20230922| /Тестов 7 (частично 3)/
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
  await expect(SAuth.phoneNumberInput).toBeDisplayed();
  
  // * Создать массив существующих языков.
  // * Открыть окно Выбор языка.
  await SAuth.languageButton.click();

  await SAuth.languagesListItemEn.waitForDisplayed({timeout: 5000});
  // const raw_array = await $$('android.widget.TextView');
  const raw_array = await SAuth.languagesListItems;
  const elementAttributeKey = 'resource-id';
  let  data_array = [];
  let data_array_elems = [];
  await SAuth.generateLanguagesList(raw_array, data_array, data_array_elems, elementAttributeKey, SAuth.languageEn_loginScreen, SAuth.languageRu_loginScreen, SAuth.languageUz_loginScreen, 'Kz');

  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    // console.log('\n --> languagesList не сформирован: data_array = ' + data_array + '\n');
    throw "languagesList не сформирован: data_array = '" + data_array + "'";
    // throw data_array;
  }

  let elementIndex = 0;
  for (const element of data_array) {
    // /*отладка*/ console.log('\n --> elementIndex = ' + elementIndex + '\n');
    // /*отладка*/ console.log('\n --> element = ' + element + '\n');
    // 2.Нажать кнопку выбора языка интерфейса.
    if (elementIndex > 0) {
      await SAuth.languageButton.click();
      // 2.1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
      // - окно
      await expect(SAuth.languagesListTitle).toBeDisplayed();
      // - элементы выбора языков
      for (const element of data_array_elems) {
        await expect(element).toBeDisplayed();
      }
      // 2.2.Отображается галочка на элементе текущего выбора языка.
      // - ?
    }
    elementIndex++;

    switch (element) {
      case SAuth.languageEn_loginScreen:
        // /*отладка*/ console.log('\n --> case En: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, английский).
        await SAuth.languagesListItemEn.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(SAuth.languagesListTitle).not.toBeDisplayed();
        // - экран входа в приложение
        await expect(SAuth.welcomeScreenHeaderEn).toHaveText(SAuth.welcomeScreenHeaderEn_Expected);
        // - кнопка выбора языка интерфейса
        await expect(SAuth.languageButton).toBeDisplayed();
        // + код страны
        await expect(SAuth.countryCode).toHaveText(SAuth.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(SAuth.phoneNumberInput).toBeDisplayed();
        break;
      
      case SAuth.languageRu_loginScreen:
        // /*отладка*/ console.log('\n --> case Ru: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, русский).
        await SAuth.languagesListItemRu.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(SAuth.languagesListTitle).not.toBeDisplayed();
        // - экран входа в приложение
        await expect(SAuth.welcomeScreenHeaderRu).toHaveText(SAuth.welcomeScreenHeaderRu_Expected);
        // - кнопка выбора языка интерфейса
        await expect(SAuth.languageButton).toBeDisplayed();
        // + код страны
        await expect(SAuth.countryCode).toHaveText(SAuth.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(SAuth.phoneNumberInput).toBeDisplayed();
        break;
      
      case SAuth.languageUz_loginScreen:
        // /*отладка*/ console.log('\n --> case Uz: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, узбекский).
        await SAuth.languagesListItemUz.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(SAuth.languagesListTitle).not.toBeDisplayed();
        // - экран входа в приложение
        await expect(SAuth.welcomeScreenHeaderUz).toHaveText(SAuth.welcomeScreenHeaderUz_Expected);
        // - кнопка выбора языка интерфейса
        await expect(SAuth.languageButton).toBeDisplayed();
        // + код страны
        await expect(SAuth.countryCode).toHaveText(SAuth.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(SAuth.phoneNumberInput).toBeDisplayed();
        break;
    
      default:
        console.log('\n --> в languagesList нет элемента: ' + element + '\n');
        break;
    }
  }
});
it.skip('ab-u-tc-01.002p: !? Contacting bank | Обращение в банк /Тест выполнен частично: -1-Вызов отсутствует в меню, -2-Telegram является каналом.../', async () => {
  /**
  Parameters
  на 23.08.2023 автотест выполнен частично:
  - Вызов отсутствует в меню
  - Telegram является каналом, к которому нужно присоединиться, выбрать другие параметры
  - WhatApp на деле подключается к Telegram
    * > базовые тесты (см. файл ТК 1 (Регистрация)):
    * - 22 Стр. регист, кнопка "Поддержка": Позитив (ш?: 1)
    * - ? ... <
  > Можно осуществить контакты со службой поддержки приложения на экране входа в приложение. <
ПРЕДУСЛОВИЯ:
  1.Установлены соответствующие мессенджеры (Telegram, WhatsApp, ...) в тестируемом устройстве, а также выполнен вход в аккаунты пользователя.
  2.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступна кнопка Поддержка.
ПОСТУСЛОВИЯ: 1.Нет.
  *
ШАГИ:
  1.Нажать кнопку Поддержка.
  1.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов, Telegram, WhatsApp (возможна другая комбинация контактов).
  
  2.Нажать (если присутствует) элемент средства контактов Вызов.
  2.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов, Telegram, WhatsApp (возможна другая комбинация контактов).

  3.Нажать кнопку совершения телефонного вызова.
  3.1.Открыт экран устройства выполнения телефонного вызова, где доступна кнопка завершения вызова.

  4.Выполнить разговор со службой поддержки и/или нажать кнопку завершения вызова.
  4.1.Открыт экран устройства со списком выполненных телефонных звонков, а также доступна кнопка устройства Назад.

  5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  5.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов.

  6.Нажать (если присутствует) элемент средства контактов Telegram.
  6.1.Открыт экран приложения Telegram с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения.

  7.Выполнить переписку со службой поддержки, и/или ввести соответствующий текст в поле ввода сообщения и отправить его.
  7.1.Введенный текст отображается в переписке отправленным, а также доступна кнопка устройства Назад.

  8.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  8.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов.

  9.Выполнить шаги 2-8 для каждого доступного средства контакта.

  10.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  10.1.Открыт экран входа в приложение.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-01.002p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // П.1.Установлены соответствующие мессенджеры (Telegram, WhatsApp, ...) в тестируемом устройстве, а также выполнен вход в аккаунты пользователя.
  // -?-
  // П.2.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступна кнопка Поддержка:
  await SAuth.selectLanguage(SAuth.languageRu);
  // - кнопка Поддержка
  await expect(SAuth.supportContactsButton_1).toBeDisplayed();

  // 1.Нажать кнопку Поддержка.
  await SAuth.supportContactsButton_1.click();
  // 1.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов, Telegram, WhatsApp (возможна другая комбинация контактов):
  // - окно
  await expect(SAuth.supportContactsListTitle).toBeDisplayed();
    // // - элемент выбора средств контактов: Вызов
    // await expect(SAuth.supportContactsListItemCall).toBeDisplayed();
  // - элемент выбора средств контактов: Telegram
  await expect(SAuth.supportContactsListItemTelegram).toBeDisplayed();
  // - элемент выбора средств контактов: WhatsApp
  await expect(SAuth.supportContactsListItemWhatsApp).toBeDisplayed();

    // // 2.Нажать (если присутствует) элемент средства контактов Вызов.
    // await SAuth.supportContactsListItemCall.click();
    // // 2.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается номер телефона службы поддержки, а также доступна кнопка совершения телефонного вызова:
    // // - экран устройства для совершения телефонного вызова
    // // -?-
    // // - кнопка совершения телефонного вызова
    // await expect(DSDial.dialerCallButton).toBeDisplayed();
    // // - номер телефона службы поддержки
    // // await expect(DSDial.androidDialerphoneNumber).toBeDisplayed(); // в этом поле номер не читается, поэтому:
    // // -* скрыть клавиатуру, нажав кнопку Назад и сравниваем номера:
    // // await driver.back();
    // // // /*отладка*/ console.log('\n --> phoneNumber = ' + await ASDial.dialerSearchView.getText() + '\n');
    // // await expect(DSDial.dialerSearchView).toHaveText(SAuth.supportContactphoneNumber_Expected);
    // await expect(DSDial.androidDialerphoneNumber).toHaveText(SAuth.supportContactphoneNumber_Expected);
    
    // // пп.3-4 о совершении телефонного звонка автотестированию не подлежат

    // // 5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await UDev.androidPressBackButton(3);
    // // 5.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
    // // - окно > + проверяется в п.1
    // // - элемент выбора средств контактов: Вызов > + проверяется в п.1
    // // - элемент выбора средств контактов: Telegram > waitForDisplayed: v.13 не успевает видеть supportContactsList...
    // await SAuth.supportContactsListItemTelegram.waitForDisplayed({ timeout: 20000 });

  // 6.Нажать (если присутствует) элемент средства контактов Telegram.
  await SAuth.supportContactsListItemTelegram.click();
  // 6.1.Открыт экран приложения Telegram с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения:
  // - экран приложения Telegram с перепиской со службой поддержки > waitForDisplayed: v.13 не успевает открыть Telegram (почему-то сначала запускает браузер)
  await STlg.supportChatScreenHeader.waitForDisplayed({ timeout: 20000 });
  await expect(STlg.supportChatScreenHeader).toHaveText(STlg.supportChatScreenHeaderEn_Expected);
  // - кнопка присоединиться к Telegram-каналу
  await expect(STlg.supportChatJoinButton).toBeDisplayed();
  // // - поле ввода сообщения
  // await expect(STlg.textInput).toBeDisplayed();
  
  // п.7 о совершении переписки автотестированию не подлежит

  // 5a.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  await UDev.androidPressBackButton(2);
  // 5a.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
  // - окно > + проверяется в п.1
  // - элемент выбора средств контактов: Вызов > + проверяется в п.1
  // - элемент выбора средств контактов: Telegram > waitForDisplayed: v.13 не успевает видеть supportContactsList...
  await SAuth.supportContactsListItemTelegram.waitForDisplayed({ timeout: 20000 });

  // 6a.Нажать (если присутствует) элемент средства контактов WhatsApp.
  await SAuth.supportContactsListItemWhatsApp.click();
  // 6a.1.Открыт экран приложения WhatsApp с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения:
  // - экран приложения WhatsApp с перепиской со службой поддержки
  await STlg.supportChatScreenHeader.waitForDisplayed({ timeout: 20000 });
  await expect(STlg.supportChatScreenHeader).toHaveText(STlg.supportChatScreenHeaderEn_Expected);
  // - кнопка присоединиться к WhatsApp-каналу
  await expect(STlg.supportChatJoinButton).toBeDisplayed();
  // // - поле ввода сообщения
  // await expect(STlg.supportContactWhatsAppMessageInput).toBeDisplayed();
  
  // п.7a о совершении переписки автотестированию не подлежит

  // 8.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  await UDev.androidPressBackButton(2);
  // 8.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
  // - окно > + проверяется в п.5
  // - элемент выбора средств контактов: Вызов > + проверяется в п.5
  // - элемент выбора средств контактов: Telegram > + проверяется в п.5

  // 9.Выполнить шаги 2-8 для каждого доступного средства контакта.
  // - шаги 2-8 для каждого > проверяется по мере их доступности

  // 10.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  // await driver.back();
  await UDev.androidPressBackButton(1);
  // 10.1.Открыт экран входа в приложение.
  // - экран входа в приложение
  await expect(SAuth.welcomeScreenHeaderRu).toHaveText(SAuth.welcomeScreenHeaderRu_Expected);
  // - кнопка Поддержка
  await expect(SAuth.supportContactsButton_1).toBeDisplayed();
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
  const phoneNumber = DCard.phoneNumber_5_hasCards;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNavSupport.click();
  // 1.1.Открыт экран Поддержка, где доступна кнопка Позвонить в банк.
  // - экран Поддержка
  await expect(SSup.supportScreenHeader).toHaveText(SSup.supportScreenHeaderRu_Expected);

  // 2.Нажать кнопку Позвонить в банк.
  await SSup.supportCallButton.click();
  // 2.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.
  // - окно Позвонить в банк
  await expect(SSup.supportWindowLabel).toHaveText(SSup.supportWindowLabelCallRu_Expected);
  // * Создать массив видимых элементов.
  const raw_array = await SSup.supportContactsList;
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
  const elementAttributeKey = SSup.elementAttributeKey;
  const elementAttributeValue = SSup.elementAttributeValue_Part;
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
    throw "не сформирован data_array (массив телефонных номеров) = '" + data_array + "'";
  }

  let supportContact = '';
  for(let i = 0; i < data_array.length; i++){
    // 3.Нажать телефонный номер (любой).
    // * Сохранить телефонный номер.
    supportContact = await data_array[i].getText();
    // * Убрать из телефонного номера любые знаки, кроме цифр.
    supportContact = await UApp.extractNumbersFromString(supportContact);
    supportContact = String(supportContact);
    // /*отладка*/ console.log('\n --> supportContact = ' + supportContact + '\n');
    await data_array[i].click();
    // 3.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается выбранный номер телефона, а также доступна кнопка совершения телефонного вызова.
    // - экран устройства для совершения телефонного вызова
    // -?-
    // - кнопка совершения телефонного вызова
    await expect(SDial.dialerCallButton).toBeDisplayed();
    // - номер телефона службы поддержки
    // /*отладка*/ console.log('\n --> supportContact (in SDial) = ' + await SDial.dialerphoneNumber.getText() + '\n');
    await expect(SDial.dialerphoneNumber).toHaveText(supportContact);
    
    // 4.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await UDev.androidPressBackButton(3);
    while(!await SSup.supportWindowLabel.isDisplayed()){
      await UDev.androidPressBackButton(1);
    };
    // 4.1.Открыто окно Позвонить в банк, где доступен список телефонных номеров службы поддержки.
    // - окно Позвонить в банк
    await expect(SSup.supportWindowLabel).toHaveText(SSup.supportWindowLabelCallRu_Expected);

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
  const phoneNumber = DCard.phoneNumber_5_hasCards;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNavSupport.click();
  // 1.1.Открыт экран Поддержка, где доступна кнопка Написать в банк.
  // - экран Поддержка
  await expect(SSup.supportScreenHeader).toHaveText(SSup.supportScreenHeaderRu_Expected);

  // 2.Нажать кнопку Написать в банк.
  await SSup.supportMessageButton.click();
  // 2.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).
  // - окно Написать в банк
  await expect(SSup.supportWindowLabel).toHaveText(SSup.supportWindowLabelMessageRu_Expected);
  // * Создать массив видимых элементов.
  const raw_array = await SSup.supportContactsList;
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
  const elementAttributeKey = SSup.elementAttributeKey;
  const elementAttributeValue = SSup.elementAttributeValue_Part;
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
    throw "не сформирован data_array (массив мессенджеров) = '" + data_array + "'";
  }

  for(let i = 0; i < data_array.length; i++){
    // 3.Нажать мессенджер (любой).
    await data_array[i].click();
    // 3.1.Открыт в выбранном мессенджере экран переписки со службой поддержки, где отображается предыдущая переписка, доступно поле ввода сообщения.
    await STlg.supportChatScreenHeader.waitForDisplayed({timeout: SGen.waitTime + 10000});
    // - экран переписки со службой поддержки
    await expect(STlg.supportChatScreenHeader).toHaveText(STlg.supportChatScreenHeaderEn_Expected);
    // - поле ввода сообщения
    // await expect(STlg.textInput).toBeDisplayed();
    // /*отладка*/ console.log('\n --> STlg.supportChatScreenHeader = ' + await STlg.supportChatScreenHeader.getText() + '\n');
    
    // 4.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await UDev.androidPressBackButton(2);
    while(!await SSup.supportWindowLabel.isDisplayed()){
      await UDev.androidPressBackButton(1);
    };
    // 4.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).
    // - окно Написать в банк
    await expect(SSup.supportWindowLabel).toHaveText(SSup.supportWindowLabelMessageRu_Expected);
  
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
  const phoneNumber = DCard.phoneNumber_5_hasCards;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNavSupport.click();
  // 1.1.Открыт экран Поддержка, где доступна кнопка Написать в банк.
  // - экран Поддержка
  await expect(SSup.supportScreenHeader).toHaveText(SSup.supportScreenHeaderRu_Expected);

  // 2.Нажать кнопку Посмотреть на карте.
  await SSup.supportViewOnMapButton.click();
  // 2.1.Открыт экран Наши офисы, где доступна кнопка Написать в банк.
  // - экран Наши офисы
  await expect(SSup.supportOfficesScreenHeader).toHaveText(SSup.supportOfficesScreenHeaderRu_Expected);
 
  // 3.Нажать кнопку Написать в банк.
  await SSup.supportMessageButton_1.click();
  // 3.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).
  // - окно Написать в банк
  await expect(SSup.supportWindowLabel).toHaveText(SSup.supportWindowLabelMessageRu_Expected);
  // * Создать массив видимых элементов.
  const raw_array = await SSup.supportContactsList;
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
  const elementAttributeKey = SSup.elementAttributeKey;
  const elementAttributeValue = SSup.elementAttributeValue_Part;
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
    throw "не сформирован data_array (массив мессенджеров) = '" + data_array + "'";
  }

  for(let i = 0; i < data_array.length; i++){
    // 4.Нажать мессенджер (любой).
    await data_array[i].click();
    // 4.1.Открыт в выбранном мессенджере экран переписки со службой поддержки, где отображается предыдущая переписка, доступно поле ввода сообщения.
    await STlg.supportChatScreenHeader.waitForDisplayed({timeout: SGen.waitTime + 10000});
    // - экран переписки со службой поддержки
    await expect(STlg.supportChatScreenHeader).toHaveText(STlg.supportChatScreenHeaderEn_Expected);
    // - поле ввода сообщения
    // await expect(STlg.textInput).toBeDisplayed();
    // /*отладка*/ console.log('\n --> STlg.supportChatScreenHeader = ' + await STlg.supportChatScreenHeader.getText() + '\n');
    
    // 5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await UDev.androidPressBackButton(2);
    while(!await SSup.supportWindowLabel.isDisplayed()){
      await UDev.androidPressBackButton(1);
    };
    // 5.1.Открыто окно Написать в банк, где доступен список мессенджеров (с аккаунтами службы поддержки банка).
    // - окно Написать в банк
    await expect(SSup.supportWindowLabel).toHaveText(SSup.supportWindowLabelMessageRu_Expected);
  
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
  const phoneNumber = DCard.phoneNumber_5_hasCards;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNavSupport.click();
  // 1.1.Открыт экран Поддержка, где в разделе Дополнительная связь доступен список ресурсов банка.
  // - экран Поддержка
  await expect(SSup.supportScreenHeader).toHaveText(SSup.supportScreenHeaderRu_Expected);
  // - список ресурсов банка (заголовок)
  await expect(SSup.supportAdditionalLinksLabel).toHaveText(SSup.supportAdditionalLinksLabelRu_Expected);

  // * Прокрутить, делая видимыми следующие элементы
  await $(`android=${UApp.scrollForward}`);
  // * Создать массив видимых элементов.
  let raw_array = await SSup.supportAdditionalLinksList;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  // /*отладка*/ console.log(
  //   '\n --> ' + await raw_array[0].getAttribute('resource-id') + ' = raw_array[0]' +
  //   '\n --> ' + await raw_array[1].getAttribute('resource-id') + ' = raw_array[1]' +
  //   '\n --> ' + await raw_array[2].getAttribute('resource-id') + ' = raw_array[2]' +
  //   '\n --> ' + await raw_array[3].getAttribute('resource-id') + ' = raw_array[3]' +
  //   '\n --> ' + await raw_array[4].getAttribute('resource-id') + ' = raw_array[4]' +
  //   '\n');
  let data_array = [];
  const elementAttributeKey = SSup.elementAttributeKey;
  const elementAttributeValue = SSup.elementAttributeValue_Part;
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
    throw "не сформирован data_array (массив доп.ресурсов) = '" + data_array + "'";
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

    if(supportContact.includes('Tg')){
      // /*отладка*/ console.log('\n --> supportContact.includes(Tg) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await STlg.supportChatScreenHeader_1.waitForDisplayed({timeout: SGen.waitTime + 10000});
      // - экран переписки со службой поддержки
      await expect(STlg.supportChatScreenHeader_1).toHaveText(STlg.supportChatScreenHeader_1En_Expected);

    } else if(supportContact.includes(SGen.textLinkedIn)){
      // /*отладка*/ console.log('\n --> supportContact.includes(LinkedIn) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await SChrom.browserUrlBar.waitForDisplayed({timeout: SGen.waitTime + 10000});
      // - адрес ресурса
      await expect(await SChrom.browserUrlBar.getText()).toContain(SChrom.urlLinkedIn_Expected);
      await expect(await SChrom.browserUrlBar.getText()).toContain(SGen.textApexbank);

    } else if(supportContact.includes(SGen.textInstagram)){
      // /*отладка*/ console.log('\n --> supportContact.includes(Instagram) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await SChrom.browserUrlBar.waitForDisplayed({timeout: SGen.waitTime + 10000});
      // - адрес ресурса
      await expect(await SChrom.browserUrlBar.getText()).toContain(SChrom.urlInstagram_Expected);
      await expect(await SChrom.browserUrlBar.getText()).toContain(SGen.textApexbank);

    } else if(supportContact.includes(SGen.textFacebook)){
      // /*отладка*/ console.log('\n --> supportContact.includes(Facebook) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await SChrom.browserUrlBar.waitForDisplayed({timeout: SGen.waitTime + 10000});
      // - адрес ресурса
      await expect(await SChrom.browserUrlBar.getText()).toContain(SChrom.urlFacebook_Expected);
      await expect(await SChrom.browserUrlBar.getText()).toContain(SGen.textApexbank);

    } else if(supportContact.includes(SGen.textWebSite)){
      // /*отладка*/ console.log('\n --> supportContact.includes(WebSite) = ' + supportContact + '\n');
      await data_array[i].click();
      // 2.1.Открыт экран ресурса банка, где отображается соответствующая информация.
      await SChrom.browserUrlBar.waitForDisplayed({timeout: SGen.waitTime + 10000});
      // - адрес ресурса
      await expect(await SChrom.browserUrlBar.getText()).toContain(SChrom.urlApexbank_Expected);
      await expect(await SChrom.browserUrlBar.getText()).toContain(SGen.textApexbank);

    } else {
      // /*отладка*/ console.log('\n --> в supportContact нет искомого содержимого: ' + supportContact + '\n');
      throw "в supportContact нет искомого содержимого = '" + supportContact + "'";
    }

    // 3.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // do {
    //   await UDev.androidPressBackButton(1);
    // } while (!await SSup.supportAdditionalLinksLabel.isDisplayed());
    while(!await SSup.supportAdditionalLinksLabel.isDisplayed()){
      await UDev.androidPressBackButton(1);
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
  const phoneNumber = DCard.phoneNumber_5_hasCards;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);

  // 1.Нажать кнопку Поддержка.
  await SHome.bottomNavSupport.click();
  // 1.1.Открыт экран Поддержка, где доступна кнопка Часто задаваемые вопросы.
  // - экран Поддержка
  await expect(SSup.supportScreenHeader).toHaveText(SSup.supportScreenHeaderRu_Expected);

  // 2.Нажать кнопку Часто задаваемые вопросы.
  await SSup.supportFaqButton.click();
  // 2.1.Открыт экран Часто задаваемые вопросы, где доступен список вопросов.
  // - экран Часто задаваемые вопросы
  await expect(SSup.supportFaqScreenHeader).toHaveText(SSup.supportFaqScreenHeaderRu_Expected);

  // // * Прокрутить, делая видимыми следующие элементы
  // await $(`android=${UApp.scrollForward}`);
  // * Создать массив видимых элементов.
  let raw_array = await SSup.supportFaqList;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  // /*отладка*/ console.log(
  //   '\n --> ' + await raw_array[0].getAttribute('resource-id') + ' = raw_array[0]' +
  //   '\n --> ' + await raw_array[1].getAttribute('resource-id') + ' = raw_array[1]' +
  //   '\n --> ' + await raw_array[2].getAttribute('resource-id') + ' = raw_array[2]' +
  //   '\n --> ' + await raw_array[3].getAttribute('resource-id') + ' = raw_array[3]' +
  //   '\n --> ' + await raw_array[4].getAttribute('resource-id') + ' = raw_array[4]' +
  //   '\n');
  let data_array = [];
  const elementAttributeKey = SSup.elementAttributeKey;
  const elementAttributeValue = SSup.elementAttributeValue_supportFaq;
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
    throw "не сформирован data_array (массив вопросов) = '" + data_array + "'";
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
    if(await SSup.supportFaqReply.isDisplayed()){
      // - Отображается ответ
      await SSup.supportFaqReply.waitForDisplayed({timeout: SGen.waitTime});
      await expect(SSup.supportFaqReply).toBeDisplayed();
    }
    
    // 4.Нажать вопрос (повторно).
    await data_array[i].click();
    // 4.1.Скрыт ответ.
    // - Скрыт ответ
    // await driver.pause(500);
    await expect(SSup.supportFaqReply).not.toBeDisplayed();

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
  1.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступны поле кода страны и поле ввода номера телефона.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать поле ввода номера телефона.
  1.1.Открыта клавиатура.
  2.Ввести номер телефона (незарегистрированный ранее) в поле ввода номера телефона.
  2.1.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны чекбокс согласия с условиями и неактивная кнопка Регистрация.

  3.Нажать чекбокс согласия с условиями.
  3.1.Чекбокс согласия отображается отмеченным, кнопка Регистрация активна.

  4.Нажать кнопку Регистрация.
  4.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.
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
-?- узнать, как автоматически получить код из СМС, а затем использовать его
-?- продолжить автоматизацию теста, используя валидный код из СМС
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-02.001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');
  // /*отладка*/ console.log('\n --> Package = ' + await driver.getCurrentPackage() + '\n');
  // /*отладка*/ console.log('\n --> Activity = ' + await driver.getCurrentActivity() + '\n');
  // /*отладка*/ console.log('\n --> this.test.title = ' + this.test.title + '\n'); // wrong

  // П.1. Запустить приложение (автоматически), ...
  await SAuth.selectLanguage(SAuth.languageRu);

  // 1.Нажать поле ввода номера телефона.
  await SAuth.phoneNumberInput.click();
  // 1.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

  // 2.Ввести номер телефона (незарегистрированный ранее) в поле ввода номера телефона.
  await UDev.androidKeyboardTypeIn(SReg.phoneNumber_toBeRegistered); // SAuth.phoneNumber_Expected
  // 2.1.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны чекбокс согласия с условиями и неактивная кнопка Регистрация:
  // - клавиатура
  // await expect(await driver.isKeyboardShown()).toBe(false); // отключено, т.к. ГитХаб и БраузерСтак не успевают
  // - введенный номер
  await expect(SAuth.phoneNumberInput).toHaveText(SReg.phoneNumber_toBeRegistered);
  // - чекбокс согласия с условиями ?
  // - кнопка Регистрация ?
  await SReg.signupButton.waitForDisplayed({timeout: SGen.waitTime + 5000});

  // 3.Нажать чекбокс согласия с условиями.
  await SReg.agreeTermsCheckbox.click();
  // 3.1.Чекбокс согласия отображается отмеченным, кнопка Регистрация активна:
  // - чекбокс
  await expect(SReg.agreeTermsCheckbox).toBeEnabled();
  // - кнопка Регистрация
  await expect(SReg.signupButton).toBeEnabled();

  // 4.Нажать кнопку Регистрация.
  await SReg.signupButton.click();
  // 4.1.Отображается экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить:
  // - экран Введите код из СМС
  await expect(SReg.enterSmsCodeScreenHeaderRu)
    .toHaveText(SReg.enterSmsCodeScreenHeaderRu_Expected);
  // - поле ввода кода из СМС ?
  // - кнопка Подтвердить ?

  // 5.Нажать поле ввода кода из СМС.
  await SReg.smsCodeInput.click();
  // 5.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 6.Ввести полученный код.
  // await UDev.androidKeyboardTypeIn(SReg.smsCode_Received);
  const smsCode_Received = await UApp.generateRandomChars(6);
  await UDev.androidKeyboardTypeIn(smsCode_Received);
  // 6.1.В поле ввода отображается введенный код, кнопка Подтвердить активна:
  // - введенный код ?
  await expect(SReg.smsCodeInput).toHaveText(smsCode_Received);
  // - кнопка Подтвердить
  await expect(SReg.continueButton).toBeEnabled();

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...
});
it('ab-e-tc-02.002p: Authorization | Авторизация', async () => {
/** > базовые тесты (см. файл ТК 1 (Регистрация)):
 * - 2 Стр. выбор языка, выбор языка (Русский) (ш10: П.1)
 * - 59 Стр. аутентификации, поле "Пароль":валидный (ш10: 1-5)
 * - 64 Стр. создания ПИН-кода: Валид ПИН (ш10: 6-7) <
  > Можно авторизоваться в приложении, используя валидные номер телефона и пароль. <
ПРЕДУСЛОВИЯ:
  1.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступны поле кода страны и поле ввода номера телефона.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать поле ввода номера телефона.
  1.1.Открыта клавиатура.
  2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
  2.1.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны поле ввода пароля и неактивная кнопка Войти.

  3.Нажать поле ввода пароля.
  3.1.Открыта клавиатура.
  4.Ввести пароль.
  4.1.В поле ввода введенный пароль отображается звездочками, кнопка Войти активна (при вводе не менее определенного числа символов пароля).

  5.Нажать кнопку Войти.
  5.1.Отображается экран Создайте новый PIN-код, где доступны неактивные символы пин-кода и клавиатура приложения.
  6.Ввести пин-код.
  6.1.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода отображается экран Введите свой PIN-код.
  7.Ввести пин-код.
  7.1.Открыт главный экран приложения (активна кнопка Главная панели навигации), где доступны кнопка профиля пользователя и... одно из следующего:
  - сумма общего баланса (если пользователь уже имеет карту банка).
  - кнопка Заказать карту и кнопка Добавить карту (если пользователь пока не имеет или не добавил карту банка).
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-02.002p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_5_hasCards;
  // const phoneNumber = DCard.phoneNumber_10_hasCards;
        // const phoneNumber = '20 200 20 20';
  const phoneNumber_pass = DCard.phoneNumber_5_pass;

  // П.1,1-7.Выполнить авторизацию пользователя (в приложении).
  await SAuth.customerAuthorization(
    SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);
  
});

// ab-ts-03p: Тестирование профиля |вер.20230913| /Тестов 2 (частично 1)/
it.only('ab-e-tc-03.001p: ! Identification in MyID | Идентификация в MyID /Тест выполнен частично: -1-требуется эмулировать сканирование лица камерой устройства; -2-иногда MyId открывается на английском/', async () => {
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
  // const phoneNumber = DCard.phoneNumber_5_hasCards;
  // const phoneNumber_pass = DCard.phoneNumber_5_pass;
  const phoneNumber = DCard.phoneNumber_10_hasCards;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);

  // 1.Нажать кнопку профиля пользователя.
  await SHome.profile_Button.click();
  // 1.1.Открыт экран профиля пользователя, где доступна кнопка статуса пользователя.
  
  // 2.Нажать кнопку статуса пользователя.
  await SProf.status_Item.click();
          // // 2.1.Открыт экран Возможности, где доступна кнопка Пройти идентификацию.
          // // - экран Возможности
          // await expect(SProf.possibilitiesScreenHeaderRu).toHaveText(SProf.possibilitiesScreenHeaderRu_Expected);
          // // - кнопка Пройти идентификацию
          // await SProf.identificationButton.waitForDisplayed({timeout: SGen.waitTime + 5000});

          // // 3.Нажать кнопку Пройти идентификацию.
          // await SProf.identificationButton.click();
  // 2.1.Открыт экран Вход или регистрация, где доступны поле ввода Серия и номер паспорта, поле ввода Дата рождения, неактивная кнопка Продолжить.
  // - кнопка Продолжить
  /* await SProf.continue_Button.waitForDisplayed({timeout: SGen.waitTime + 5000});
   * - этот элемент (кнопка идентифицируется на русском: Продолжить) отключен (и другие ниже), т.к. MyId открывается на английском при запуске нескольких тестов (не только одного этого)
   */
  // await SProf.screen_loginOrRegister_TextView_Items[3].waitForDisplayed({timeout: SGen.waitTime + 5000}); - этот элемент тоже отключен, т.к. выдает ошибку... Не найден)))
    // /*отладка*/ const iCount = await SProf.screen_loginOrRegister_TextView_Items.length;
    // /*отладка*/ for (let i = 0; i < iCount; i++) {
    //   console.log('\n --> ' +
    //     await SProf.screen_loginOrRegister_TextView_Items[i].getText() +
    //     ' = .screen_loginOrRegister_TextView_Items[' + i + '].getText()' +
    //     '\n');
    // }
  await SProf.scanner_Button.waitForDisplayed({timeout: SGen.waitTime});

  // 3.Ввести валидные данные в поля ввода.
  // (см.выше для кнопки) await SProf.documentData_Input.click();
  // let qwe = await SProf.screen_loginOrRegister_EditText_Items[0];
  // await qwe.click();
  await SProf.screen_loginOrRegister_EditText_Items[0].click();
  await UDev.androidKeyboardTypeIn(SProf.passportSeriesAndNumber_Expected);
  // (см.выше для кнопки) await SProf.birthDate_Input.click();
  await SProf.screen_loginOrRegister_EditText_Items[1].click();
  await UDev.androidKeyboardTypeIn(SProf.birthDate_Expected);
  // 3.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.
  await expect(SProf.screen_loginOrRegister_EditText_Items[0]).toHaveText(SProf.passportSeriesAndNumber_Expected);
  await expect(SProf.screen_loginOrRegister_EditText_Items[1]).toHaveText(SProf.birthDate_Expected);

  // 4.Нажать кнопку Продолжить.
  // (см.выше для кнопки) await SProf.continue_Button.click();
  await SProf.screen_loginOrRegister_TextView_Items[3].click();
  // 4.1.Открыт экран сканирования лица камерой устройства, где доступны текст убедиться пользователю о том, что его лицо находится в выделенном пространстве и область выделенного пространства.
  // - экран сканирования лица (заголовок)
  // await expect(SProf.screenHeader_Text_faceScanner_Ru).toHaveText(SProf.screenHeader_Text_faceScanner_Ru_Expected);
  // - область выделенного пространства
  await SProf.faceScanner_Frame.waitForDisplayed({timeout:SGen.waitTime + 180000});

// --- ТРЕБУЕТСЯ эмулировать сканирование лица камерой устройства ---

  // 5.Сканировать лицо пользователя, затем...???
  // 5.1.Открыт экран...???

// -?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства
  // ...

  // * Вернуться на экран Открыт экран Возможности, нажимая кнопку Назад.
  await UDev.androidPressBackButton(3);
  // if(await SAuth.enterPinCodeScreenHeader.waitForDisplayed({timeout: SGen.waitTime})) {
  //   await UApp.appKeyboardTypeIn(SAuth.pinCode_Expected);
  // }
  // await SProf.identificationButton.waitForDisplayed({timeout: SGen.waitTime});
  // // - экран Возможности
  // await expect(SProf.possibilitiesScreenHeaderRu).toHaveText(SProf.possibilitiesScreenHeaderRu_Expected);

  // await SHome.passVerification_Button.click();
  // await SProf.close_Button.waitForDisplayed({timeout: SGen.waitTime + 5000})
  // await SProf.closeButton.click();

  // // может эти строки нужно положить в афтерич
  // if(await SProf.passIdentification_Button.waitForDisplayed({timeout: SGen.waitTime + 5000})) {
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
  const phoneNumber = DCard.phoneNumber_5_hasCards;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;
  // const phoneNumber = DCard.phoneNumber_10_hasCards;
  // const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // Пред.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);

  // 1.Нажать кнопку профиля пользователя.
  await SHome.profile_Button.click();
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

  await SAuth.generateLanguagesList(raw_array, data_array, data_array_elems, elementAttributeKey, SAuth.languageEn, SAuth.languageRu, SAuth.languageUz, 'kz');
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    // console.log('\n --> languagesList не сформирован: data_array = ' + data_array + '\n');
    throw "не сформирован data_array (массив языков) = '" + data_array + "'";
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
      case SAuth.languageEn:
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
        await expect(SProf.languageItemName).toHaveText(SProf.languageItemNameEn_Expected);
        // - кнопка выхода из приложения на выбранном языке
        await expect(SProf.appLogOutItem).toHaveText(SProf.appLogOutItemEn_Expected);
        break;
      
      case SAuth.languageRu:
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
        await expect(SProf.languageItemName).toHaveText(SProf.languageItemNameRu_Expected);
        // - кнопка выхода из приложения на выбранном языке
        await expect(SProf.appLogOutItem).toHaveText(SProf.appLogOutItemRu_Expected);
        break;
      
      case SAuth.languageUz:
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
        await expect(SProf.languageItemName).toHaveText(SProf.languageItemNameUz_Expected);
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
  await SAuth.phoneNumberInput.click();
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
  const phoneNumber = DCard.phoneNumber_5_hasCards;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);
  
  // 1.Обратить внимание на баланс каждой карты.
  /*
    1.Считываем видимые данные окна и записываем в массив data_array (название, сумма, номер и срок действия карты).
    2.Прокручиваем окно, делая видимыми следующие данные.
    3.Считываем видимые данные окна и записываем в массив data_array, отсеивая уже имеющиеся в массиве данные.
  */
  
  // *.Создать массив видимых элементов.
  let raw_array = await SHome.cardsBlockItems;
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
  raw_array = await SHome.cardsBlockItems;
  await UApp.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1/*, elementAttributeValue_2, elementAttributeValue_3, elementAttributeValue_4*/);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// return;
});
it.skip('ab-s-d-003: Debug > System/OTP message', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-s-d-003';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_5_hasCards;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.languageRu, phoneNumber, phoneNumber_pass, SAuth.pinCode_Expected);

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

// * Пауза для контроля экрана
// await driver.pause(5000);
// await CardM.cardBalance.waitForDisplayed({timeout: SGen.waitTime});
// *.Нажать кнопку Назад
// await driver.back();
// await UDev.androidPressBackButton(1);
// *.Скрыть клавиатуру
// await driver.hideKeyboard();
// * Прокрутить до элемента
// await $(`android=${CardM.scrollToElement_Up}`);
// * Открыть отчет
// npx allure open

/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */