/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */
const AppUM   = require("../../utils/android/ab-app.utils");              // App Utilities Model
const AuthM   = require("../../screens/android/ab-authorization.screen"); // Authorization screen Model
const CardsD  = require('../../data/ab-cards.data');                      // Cards Data
const DSysM   = require("../../utils/android/dt-android.utils");          // (Android) Device Utilities Model
const GenM    = require('../../screens/android/ab-general.screen');       // General screen Model
const HomeM   = require('../../screens/android/ab-home.screen');          // Home screen Model
const ProfM   = require('../../screens/android/ab-profile.screen');       // Profile screen Model
const RegM    = require("../../screens/android/ab-regisration.screen");   // Registration screen Model

describe('ab-ts-01p: Testing of operations provision | Тестирование обеспечения операций |вер.20230914| /Тестов 6 (частично 3)/', () => {
  let counter = 0, tcNum = '', i = 0;
  beforeEach(async () => {
    await GenM.beforeEach(counter, 's'); // s - support / e - e2e < typeOfTest
    // if (i == 0){
    //   // * Ждем появления кнопки (пропустить рекламу при запуске приложения)
    //   await AuthM.loginButton.waitForDisplayed({timeout: GenM.waitTime + 10000});
    //   await AuthM.loginButton.click();
    //   i++;
    // }

    // // * Снимок экрана для контроля
    // await driver.saveScreenshot('_view_shots/screen_before_e-lastTest.png');

    // /*отладка*/ console.log('\n --> counter-beforeEach = ' + counter + '\n');
    // // * Не выполнять этот код для первого теста
    // if (counter == 0) return;
  
    // // * Открыть начальную страницу приложения
    // await driver.startActivity(GenM.appPackage, GenM.appActivity);
  });
  afterEach(async () => {
    await GenM.afterEach(counter, tcNum);

    // // * Снимок экрана для контроля
    // // await driver.saveScreenshot('app-screen_afterEach.png');
    // // await driver.saveScreenshot('_view_shots/app-screen-001p_afterEach_' + (counter + 1) + '.png');
    // await driver.saveScreenshot('_view_shots/screen_after_' + tcNum + '.png');

    // // * Вести счет числу выполненных тестов
    // counter++;

    // // * Выйти из приложения
    // await GenM.logOutTheApp();
  });
  after(async () => {
    await GenM.after();

    // // * Закрыть приложение
    // // await driver.closeApp();
    // await driver.terminateApp(GenM.appPackage);
  });

// ab-ts-01p: Тестирование поддержки |вер.20230913| /Тестов 2 (частично 1)/
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
  await expect(AuthM.phoneNumberInput).toBeDisplayed();
  
  // *.Создать массив существующих языков.
  // *.Открыть окно Выбор языка.
  await AuthM.languageButton.click();

  await AuthM.languagesListItemEn.waitForDisplayed({timeout: 5000});
  // const raw_array = await $$('android.widget.TextView');
  const raw_array = await AuthM.languagesListItems;
  const elementAttributeKey = 'resource-id';
  let  data_array = [];
  let data_array_elems = [];
  await AuthM.generateLanguagesList(raw_array, data_array, data_array_elems, elementAttributeKey, AuthM.languageEn_loginScreen, AuthM.languageRu_loginScreen, AuthM.languageUz_loginScreen, 'Kz');

  // * Контролируем непустоту массива
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
      await AuthM.languageButton.click();
      // 2.1.Открыто окно Выбор языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
      // - окно
      await expect(AuthM.languagesListTitle).toBeDisplayed();
      // - элементы выбора языков
      for (const element of data_array_elems) {
        await expect(element).toBeDisplayed();
      }
      // 2.2.Отображается галочка на элементе текущего выбора языка.
      // - ?
    }
    elementIndex++;

    switch (element) {
      case AuthM.languageEn_loginScreen:
        // /*отладка*/ console.log('\n --> case En: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, английский).
        await AuthM.languagesListItemEn.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(AuthM.languagesListTitle).not.toBeDisplayed();
        // - экран входа в приложение
        await expect(AuthM.welcomeScreenHeaderEn).toHaveText(AuthM.welcomeScreenHeaderEn_Expected);
        // - кнопка выбора языка интерфейса
        await expect(AuthM.languageButton).toBeDisplayed();
        // + код страны
        await expect(AuthM.countryCode).toHaveText(AuthM.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(AuthM.phoneNumberInput).toBeDisplayed();
        break;
      
      case AuthM.languageRu_loginScreen:
        // /*отладка*/ console.log('\n --> case Ru: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, русский).
        await AuthM.languagesListItemRu.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(AuthM.languagesListTitle).not.toBeDisplayed();
        // - экран входа в приложение
        await expect(AuthM.welcomeScreenHeaderRu).toHaveText(AuthM.welcomeScreenHeaderRu_Expected);
        // - кнопка выбора языка интерфейса
        await expect(AuthM.languageButton).toBeDisplayed();
        // + код страны
        await expect(AuthM.countryCode).toHaveText(AuthM.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(AuthM.phoneNumberInput).toBeDisplayed();
        break;
      
      case AuthM.languageUz_loginScreen:
        // /*отладка*/ console.log('\n --> case Uz: ' + element + '\n');
        // 3.Нажать элемент выбора языка (например, узбекский).
        await AuthM.languagesListItemUz.click();
        // 3.1.Закрыто окно Выбор языка. Открыт экран входа в приложение (на выбранном языке), где доступна кнопка выбора языка интерфейса:
        // - окно
        await expect(AuthM.languagesListTitle).not.toBeDisplayed();
        // - экран входа в приложение
        await expect(AuthM.welcomeScreenHeaderUz).toHaveText(AuthM.welcomeScreenHeaderUz_Expected);
        // - кнопка выбора языка интерфейса
        await expect(AuthM.languageButton).toBeDisplayed();
        // + код страны
        await expect(AuthM.countryCode).toHaveText(AuthM.countryCode_Expected);
        // + поле ввода номера телефона
        await expect(AuthM.phoneNumberInput).toBeDisplayed();
        break;
    
      default:
        console.log('\n --> в languagesList нет элемента: ' + element + '\n');
        break;
    }
  }
});
it.skip('ab-u-tc-01.002p: ? Contacting support | Обращение в службу поддержки /Тест выполнен частично: -1-Вызов отсутствует в меню, -2-Telegram является каналом.../', async () => {
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
  await AuthM.selectLanguage(AuthM.languageRu);
  // - кнопка Поддержка
  await expect(AuthM.supportContactsButton_1).toBeDisplayed();

  // 1.Нажать кнопку Поддержка.
  await AuthM.supportContactsButton_1.click();
  // 1.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов, Telegram, WhatsApp (возможна другая комбинация контактов):
  // - окно
  await expect(AuthM.supportContactsListTitle).toBeDisplayed();
    // // - элемент выбора средств контактов: Вызов
    // await expect(AuthM.supportContactsListItemCall).toBeDisplayed();
  // - элемент выбора средств контактов: Telegram
  await expect(AuthM.supportContactsListItemTelegram).toBeDisplayed();
  // - элемент выбора средств контактов: WhatsApp
  await expect(AuthM.supportContactsListItemWhatsApp).toBeDisplayed();

    // // 2.Нажать (если присутствует) элемент средства контактов Вызов.
    // await AuthM.supportContactsListItemCall.click();
    // // 2.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается номер телефона службы поддержки, а также доступна кнопка совершения телефонного вызова:
    // // - экран устройства для совершения телефонного вызова
    // // -?-
    // // - кнопка совершения телефонного вызова
    // await expect(DDialM.androidDialerCallButton).toBeDisplayed();
    // // - номер телефона службы поддержки
    // // await expect(DDialM.androidDialerphoneNumber).toBeDisplayed(); // в этом поле номер не читается, поэтому:
    // // -* скрыть клавиатуру, нажав кнопку Назад и сравниваем номера:
    // // await driver.back();
    // // // /*отладка*/ console.log('\n --> phoneNumber = ' + await ADialM.androidDialerSearchView.getText() + '\n');
    // // await expect(DDialM.androidDialerSearchView).toHaveText(AuthM.supportContactphoneNumber_Expected);
    // await expect(DDialM.androidDialerphoneNumber).toHaveText(AuthM.supportContactphoneNumber_Expected);
    
    // // пп.3-4 о совершении телефонного звонка автотестированию не подлежат

    // // 5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
    // await DSysM.androidPressBackButton(3);
    // // 5.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
    // // - окно > + проверяется в п.1
    // // - элемент выбора средств контактов: Вызов > + проверяется в п.1
    // // - элемент выбора средств контактов: Telegram > waitForDisplayed: v.13 не успевает видеть supportContactsList...
    // await AuthM.supportContactsListItemTelegram.waitForDisplayed({ timeout: 20000 });

  // 6.Нажать (если присутствует) элемент средства контактов Telegram.
  await AuthM.supportContactsListItemTelegram.click();
  // 6.1.Открыт экран приложения Telegram с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения:
  // - экран приложения Telegram с перепиской со службой поддержки > waitForDisplayed: v.13 не успевает открыть Telegram (почему-то сначала запускает браузер)
  await DTlgM.supportContactTelegramName.waitForDisplayed({ timeout: 20000 });
  await expect(DTlgM.supportContactTelegramName).toHaveText(AuthM.supportContactTelegramName_Expected);
  // - кнопка присоединиться к Telegram-каналу
  await expect(DTlgM.supportContactTelegramJoinButton).toBeDisplayed();
  // // - поле ввода сообщения
  // await expect(DTlgM.supportContactTelegramMessageInput).toBeDisplayed();
  
  // п.7 о совершении переписки автотестированию не подлежит

  // 5a.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  await DSysM.androidPressBackButton(2);
  // 5a.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
  // - окно > + проверяется в п.1
  // - элемент выбора средств контактов: Вызов > + проверяется в п.1
  // - элемент выбора средств контактов: Telegram > waitForDisplayed: v.13 не успевает видеть supportContactsList...
  await AuthM.supportContactsListItemTelegram.waitForDisplayed({ timeout: 20000 });

  // 6a.Нажать (если присутствует) элемент средства контактов WhatsApp.
  await AuthM.supportContactsListItemWhatsApp.click();
  // 6a.1.Открыт экран приложения WhatsApp с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения:
  // - экран приложения WhatsApp с перепиской со службой поддержки
  await DTlgM.supportContactTelegramName.waitForDisplayed({ timeout: 20000 });
  await expect(DTlgM.supportContactTelegramName).toHaveText(AuthM.supportContactTelegramName_Expected);
  // - кнопка присоединиться к WhatsApp-каналу
  await expect(DTlgM.supportContactTelegramJoinButton).toBeDisplayed();
  // // - поле ввода сообщения
  // await expect(DTlgM.supportContactWhatsAppMessageInput).toBeDisplayed();
  
  // п.7a о совершении переписки автотестированию не подлежит

  // 8.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  await DSysM.androidPressBackButton(2);
  // 8.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
  // - окно > + проверяется в п.5
  // - элемент выбора средств контактов: Вызов > + проверяется в п.5
  // - элемент выбора средств контактов: Telegram > + проверяется в п.5

  // 9.Выполнить шаги 2-8 для каждого доступного средства контакта.
  // - шаги 2-8 для каждого > проверяется по мере их доступности

  // 10.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
  // await driver.back();
  await DSysM.androidPressBackButton(1);
  // 10.1.Открыт экран входа в приложение.
  // - экран входа в приложение
  await expect(AuthM.welcomeScreenHeaderRu).toHaveText(AuthM.welcomeScreenHeaderRu_Expected);
  // - кнопка Поддержка
  await expect(AuthM.supportContactsButton_1).toBeDisplayed();
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
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
  *
ШАГИ:
  1.Нажать поле ввода номера телефона.
  1.1.Открыта клавиатура.
  2.Ввести номер телефона (незарегистрированный ранее) в поле ввода номера телефона.
  2.1.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны чекбокс согласия с условиями и неактивная кнопка Регистрация.

  3.Нажать чекбокс согласия с условиями.
  3.1.Чекбокс согласия отображается отмеченным, кнопка Регистрация активна.

  4.Нажать кнопку Регистрация.
  4.1.Отображается экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.
  5.Нажать поле ввода кода из СМС.
  5.1.Открыта клавиатура.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  6.Ввести полученный код.
  6.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.

  7.Нажать кнопку Подтвердить.
  7.1.Отображается экран Создайте свой пароль, где доступны поля ввода Создайте пароль, Подтвердите пароль, Введите секретное слово и неактивная кнопка Продолжить.

  8.Ввести создаваемый пароль, подтвердить пароль и ввести секретное слово (в соответствующих полях ввода).
  8.1.В полях ввода отображаются введенные данные (звездочками) и активна кнопка Продолжить.

  9.Нажать кнопку Продолжить.
  9.1.Отображается экран Поздравляем с регистрацией и кнопка Продолжить.

  10.Нажать кнопку Продолжить.
  10.1.Отображается экран Добро пожаловать, где доступны поле кода страны и поле ввода номера телефона.

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
  await AuthM.selectLanguage(AuthM.languageRu);

  // 1.Нажать поле ввода номера телефона.
  await AuthM.phoneNumberInput.click();
  // 1.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

  // 2.Ввести номер телефона (незарегистрированный ранее) в поле ввода номера телефона.
  await DSysM.androidKeyboardTypeIn(RegM.phoneNumber_toBeRegistered); // AuthM.phoneNumber_Expected
  // 2.1.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны чекбокс согласия с условиями и неактивная кнопка Регистрация:
  // - клавиатура
  // await expect(await driver.isKeyboardShown()).toBe(false); // отключено, т.к. ГитХаб и БраузерСтак не успевают
  // - введенный номер
  await expect(AuthM.phoneNumberInput).toHaveText(RegM.phoneNumber_toBeRegistered);
  // - чекбокс согласия с условиями ?
  // - кнопка Регистрация ?
  await RegM.signupButton.waitForDisplayed({timeout: GenM.waitTime + 5000});

  // 3.Нажать чекбокс согласия с условиями.
  await RegM.agreeTermsCheckbox.click();
  // 3.1.Чекбокс согласия отображается отмеченным, кнопка Регистрация активна:
  // - чекбокс
  await expect(RegM.agreeTermsCheckbox).toBeEnabled();
  // - кнопка Регистрация
  await expect(RegM.signupButton).toBeEnabled();

  // 4.Нажать кнопку Регистрация.
  await RegM.signupButton.click();
  // 4.1.Отображается экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить:
  // - экран Введите код из СМС
  await expect(RegM.enterSmsCodeScreenHeaderRu)
    .toHaveText(RegM.enterSmsCodeScreenHeaderRu_Expected);
  // - поле ввода кода из СМС ?
  // - кнопка Подтвердить ?

  // 5.Нажать поле ввода кода из СМС.
  await RegM.smsCodeInput.click();
  // 5.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 6.Ввести полученный код.
  // await DSysM.androidKeyboardTypeIn(RegM.smsCode_Received);
  const smsCode_Received = await AppUM.generateRandomChars(6);
  await DSysM.androidKeyboardTypeIn(smsCode_Received);
  // 6.1.В поле ввода отображается введенный код, кнопка Подтвердить активна:
  // - введенный код ?
  await expect(RegM.smsCodeInput).toHaveText(smsCode_Received);
  // - кнопка Подтвердить
  await expect(RegM.continueButton).toBeEnabled();

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
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
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
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  // const phoneNumber = CardsD.phoneNumber_10_hasCards;
        // const phoneNumber = '20 200 20 20';
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;

  // П.1,1-7.Выполнить авторизацию пользователя (в приложении).
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);
  
});

// ab-ts-03p: Тестирование профиля |вер.20230913| /Тестов 2 (частично 1)/
it('ab-e-tc-03.001p: ! Identification in MyID | Идентификация в MyID /Тест выполнен частично: -1-требуется эмулировать сканирование лица камерой устройства; -2-иногда MyId открывается на английском/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить идентификацию пользователя в службе MyID. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где доступна кнопка профиля пользователя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
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
  // const phoneNumber = CardsD.phoneNumber_5_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_5_pass;
  const phoneNumber = CardsD.phoneNumber_10_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // 1.Нажать кнопку профиля пользователя.
  await HomeM.profileButton.click();
  // 1.1.Открыт экран профиля пользователя, где доступна кнопка статуса пользователя.
  
  // 2.Нажать кнопку статуса пользователя.
  await ProfM.yourStatusItem.click();
          // // 2.1.Открыт экран Возможности, где доступна кнопка Пройти идентификацию.
          // // - экран Возможности
          // await expect(ProfM.possibilitiesScreenHeaderRu).toHaveText(ProfM.possibilitiesScreenHeaderRu_Expected);
          // // - кнопка Пройти идентификацию
          // await ProfM.identificationButton.waitForDisplayed({timeout: GenM.waitTime + 5000});

          // // 3.Нажать кнопку Пройти идентификацию.
          // await ProfM.identificationButton.click();
  // 2.1.Открыт экран Вход или регистрация, где доступны поле ввода Серия и номер паспорта, поле ввода Дата рождения, неактивная кнопка Продолжить.
  // - кнопка Продолжить
  /* await ProfM.continueButton.waitForDisplayed({timeout: GenM.waitTime + 5000});
   * - этот элемент (кнопка идентифицируется на русском: Продолжить) отключен (и другие ниже), т.к. MyId открывается на английском при запуске нескольких тестов (не только одного этого)
   */
  // await ProfM.loginOrRegisterScreenTextViewItems[3].waitForDisplayed({timeout: GenM.waitTime + 5000}); - этот элемент тоже отключен, т.к. выдает ошибку... Не найден)))
    // /*отладка*/ const iCount = await ProfM.loginOrRegisterScreenTextViewItems.length;
    // /*отладка*/ for (let i = 0; i < iCount; i++) {
    //   console.log('\n --> ' +
    //     await ProfM.loginOrRegisterScreenTextViewItems[i].getText() +
    //     ' = .loginOrRegisterScreenTextViewItems[' + i + '].getText()' +
    //     '\n');
    // }
  await ProfM.scannerButton.waitForDisplayed({timeout: GenM.waitTime});

  // 3.Ввести валидные данные в поля ввода.
  // (см.выше для кнопки) await ProfM.passportDataInput.click();
  // let qwe = await ProfM.loginOrRegisterScreenEditTextItems[0];
  // await qwe.click();
  await ProfM.loginOrRegisterScreenEditTextItems[0].click();
  await DSysM.androidKeyboardTypeIn(ProfM.passportData_Expected);
  // (см.выше для кнопки) await ProfM.birthDateInput.click();
  await ProfM.loginOrRegisterScreenEditTextItems[1].click();
  await DSysM.androidKeyboardTypeIn(ProfM.birthDate_Expected);
  // 3.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.
  await expect(ProfM.loginOrRegisterScreenEditTextItems[0]).toHaveText(ProfM.passportData_Expected);
  await expect(ProfM.loginOrRegisterScreenEditTextItems[1]).toHaveText(ProfM.birthDate_Expected);

  // 4.Нажать кнопку Продолжить.
  // (см.выше для кнопки) await ProfM.continueButton.click();
  (await ProfM.loginOrRegisterScreenTextViewItems[3]).click();
  // 4.1.Открыт экран сканирования лица камерой устройства, где доступны текст убедиться пользователю о том, что его лицо находится в выделенном пространстве и область выделенного пространства.
  // - экран сканирования лица (заголовок)
  // await expect(ProfM.faceScannerScreenHeaderRu).toHaveText(ProfM.faceScannerScreenHeaderRu_Expected);
  // - область выделенного пространства
  await ProfM.faceScannerArea.waitForDisplayed({timeout:GenM.waitTime + 180000});

// --- ТРЕБУЕТСЯ эмулировать сканирование лица камерой устройства ---

  // 5.Сканировать лицо пользователя, затем...???
  // 5.1.Открыт экран...???

// -?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства
  // ...

  // * Вернуться на экран Открыт экран Возможности, нажимая кнопку Назад.
  await DSysM.androidPressBackButton(3);
  // if(await AuthM.enterPinCodeScreenHeaderRu.waitForDisplayed({timeout: GenM.waitTime})) {
  //   await AppUM.appKeyboardTypeIn(AuthM.pinCode_Expected);
  // }
  // await ProfM.identificationButton.waitForDisplayed({timeout: GenM.waitTime});
  // // - экран Возможности
  // await expect(ProfM.possibilitiesScreenHeaderRu).toHaveText(ProfM.possibilitiesScreenHeaderRu_Expected);

  // await ProfM.performVerificationButton.click();
  // await ProfM.closeButton.waitForDisplayed({timeout: GenM.waitTime + 5000})
  // await ProfM.closeButton.click();

  // // может эти строки нужно положить в афтерич
  // if(await ProfM.performIdentificationButton.waitForDisplayed({timeout: GenM.waitTime + 5000})) {
  //   await ProfM.closeButton.click();
  // }

});
it.skip('ab-u-tc-03.002p: Language selection | Выбор языка', async () => {
  /** > базовые тесты (см. файл ...) <
  > В профиле пользователя можно менять языки интерфейса приложения. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где доступны кнопка профиля пользователя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
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
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;
  // const phoneNumber = CardsD.phoneNumber_10_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_10_pass;

  // Пред.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // 1.Нажать кнопку профиля пользователя.
  await HomeM.profileButton.click();
  // 1.1.Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на текущем языке.
  
  // 2.Нажать кнопку выбора языка.
  await ProfM.languageItem.click();

  // * Создать массив существующих языков.
  await ProfM.languagesListItemEn.waitForDisplayed({timeout: 5000});
  const raw_array = await $$('android.widget.LinearLayout'); // android.widget.TextView
  // const raw_array = await ProfM.languagesListItems;
  const data_array = [];
  const data_array_elems = [];
  const elementAttributeKey = 'resource-id';

  await AuthM.generateLanguagesList(raw_array, data_array, data_array_elems, elementAttributeKey, AuthM.languageEn, AuthM.languageRu, AuthM.languageUz, 'kz');
  // * Контролируем непустоту массива
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
      await ProfM.languageItem.click();
      // 2.1.Открыто окно выбора языка, где доступны элементы выбора языков: узбекский, русский и английский (возможна другая комбинация языков).
      // - окно
      await expect(ProfM.languagesListTitle).toBeDisplayed();
      // - элементы выбора языков
      for (const element of data_array_elems) {
        await expect(element).toBeDisplayed();
      }
      // 2.2.Отображаются галочка на элементе текущего выбора языка и неактивная кнопка Сохранить (на выбранном языке).
      // - ?
    }
    elementIndex++;

    switch (element) {
      case AuthM.languageEn:
        // /*отладка*/ console.log('\n --> case En: ' + element + '\n');
        // 3.Нажать элемент выбора языка (любого не текущего) /например, английский/.
        await ProfM.languagesListItemEn.click();
        // 3.1.Отображается галочка на элементе нажатого языка, кнопка Сохранить (на выбранном языке) активирована.
        // - ?

        // 4.Нажать кнопку Сохранить.
        await ProfM.languageSaveButton.click();
        // 4.1.Закрыто окно выбора языка. Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на выбранном языке:
        // - окно
        await expect(ProfM.languagesListTitle).not.toBeDisplayed();
        // - кнопка выбора языка интерфейса
        await expect(ProfM.languageItem).toBeDisplayed();
        // - текст названия выбранного языка
        await expect(ProfM.languageItemName).toHaveText(ProfM.languageItemNameEn_Expected);
        // - кнопка выхода из приложения на выбранном языке
        await expect(ProfM.appLogOutItem).toHaveText(ProfM.appLogOutItemEn_Expected);
        break;
      
      case AuthM.languageRu:
        // /*отладка*/ console.log('\n --> case Ru: ' + element + '\n');
        // 3.Нажать элемент выбора языка (любого не текущего) /например, русский/.
        await ProfM.languagesListItemRu.click();
        // 3.1.Отображается галочка на элементе нажатого языка, кнопка Сохранить (на выбранном языке) активирована.
        // - ?

        // 4.Нажать кнопку Сохранить.
        await ProfM.languageSaveButton.click();
        // 4.1.Закрыто окно выбора языка. Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на выбранном языке:
        // - окно
        await expect(ProfM.languagesListTitle).not.toBeDisplayed();
        // - кнопка выбора языка интерфейса
        await expect(ProfM.languageItem).toBeDisplayed();
        // - текст названия выбранного языка
        await expect(ProfM.languageItemName).toHaveText(ProfM.languageItemNameRu_Expected);
        // - кнопка выхода из приложения на выбранном языке
        await expect(ProfM.appLogOutItem).toHaveText(ProfM.appLogOutItemRu_Expected);
        break;
      
      case AuthM.languageUz:
        // /*отладка*/ console.log('\n --> case Uz: ' + element + '\n');
        // 3.Нажать элемент выбора языка (любого не текущего) /например, узбекский/.
        await ProfM.languagesListItemUz.click();
        // 3.1.Отображается галочка на элементе нажатого языка, кнопка Сохранить (на выбранном языке) активирована.
        // - ?

        // 4.Нажать кнопку Сохранить.
        await ProfM.languageSaveButton.click();
        // 4.1.Закрыто окно выбора языка. Открыт экран профиля пользователя, где доступны кнопка выбора языка и кнопка выхода из приложения на выбранном языке:
        // - окно
        await expect(ProfM.languagesListTitle).not.toBeDisplayed();
        // - кнопка выбора языка интерфейса
        await expect(ProfM.languageItem).toBeDisplayed();
        // - текст названия выбранного языка
        await expect(ProfM.languageItemName).toHaveText(ProfM.languageItemNameUz_Expected);
        // - кнопка выхода из приложения на выбранном языке
        await expect(ProfM.appLogOutItem).toHaveText(ProfM.appLogOutItemUz_Expected);
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
  await AuthM.phoneNumberInput.click();
  // 2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
  await DSysM.androidKeyboardTypeIn(phoneNumber);
  // // 3.Нажать поле ввода пароля.
  // await AuthM.passwordInput.click();

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
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);
  
  // 1.Обратить внимание на баланс каждой карты.
  /*
    1.Считываем видимые данные окна и записываем в массив data_array (название, сумма, номер и срок действия карты).
    2.Прокручиваем окно, делая видимыми следующие данные.
    3.Считываем видимые данные окна и записываем в массив data_array, отсеивая уже имеющиеся в массиве данные.
  */
  
  // *.Создать массив видимых элементов.
  let raw_array = await HomeM.cardsBlockItems;
  const data_array = [];
  const elementAttributeKey = 'resource-id';
  const elementAttributeValue_1 = 'com.fincube.apexbank.debug:id/tvCardName';
  // const elementAttributeValue_2 = 'com.fincube.apexbank.debug:id/tvCardBalance';
  // const elementAttributeValue_3 = 'com.fincube.apexbank.debug:id/tvCardNumber';
  // const elementAttributeValue_4 = 'com.fincube.apexbank.debug:id/tvCardDate';
  
  await AppUM.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1/*, elementAttributeValue_2, elementAttributeValue_3, elementAttributeValue_4*/);

  // * Прокрутить, делая видимыми следующие элементы
  await $(`android=${HomeM.scrollToElement_Right}`);

  // *.Создать массив видимых элементов.
  raw_array = await HomeM.cardsBlockItems;
  await AppUM.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1/*, elementAttributeValue_2, elementAttributeValue_3, elementAttributeValue_4*/);

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// return;
});
it.skip('ab-s-d-003: Debug > System/OTP message', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-s-d-003';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

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
// await CardM.cardBalance.waitForDisplayed({timeout: GenM.waitTime});
// *.Нажать кнопку Назад
// await driver.back();
// await DSysM.androidPressBackButton(1);
// *.Скрыть клавиатуру
// await driver.hideKeyboard();
// * Прокрутить до элемента
// await $(`android=${CardM.scrollToElement_Up}`);
// * Открыть отчет
// npx allure open

/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */