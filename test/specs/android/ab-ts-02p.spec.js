/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */
const DCard   = require('../../data/ab-cards.data');                        // data > Cards 

const SAuth   = require("../../screens/android/ab-authorization.screen");   // screen > Authorization
const SCard   = require('../../screens/android/ab-cards.screen');           // screen > Cards
const SGen    = require('../../screens/android/ab-general.screen');         // screen > General
const SHome   = require('../../screens/android/ab-home.screen');            // screen > Home
const SPay    = require('../../screens/android/ab-payments.screen');        // screen > Payments
const SSms    = require('../../screens/android/ab-smsCodeEnter.screen');    // screen > Sms code enter
const STraBe  = require('../../screens/android/ab-transferBetweenCards.screen');//... > Transfer between cards
const STraTo  = require('../../screens/android/ab-transferToCard.screen');  // screen > Transfer to card

const WCardsS = require('../../screens/android/ab-cardsSender.window');     // window > Cards of sender

const UApp    = require("../../utils/android/ab-app.utils");                // utilities > Application
const UDev    = require("../../utils/android/dt-device.utils");             // utilities > Device

describe('ab-ts-02p: Testing of operations | Тестирование операций |вер.20231110| /Тестов 9 (частично 6)/', () => {
  let counter = 0, tcNum = '', i = 0;
  beforeEach(async () => {
    await SGen.beforeEach(counter, 'o'); // o - operation / e - e2e < typeOfTest
    if (i == 0){
      // * Ждем появления кнопки (пропустить рекламу при запуске приложения)
      await SAuth.button_Login.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
      await SAuth.button_Login.click();
      i++;
    }

    // // * Снимок экрана для контроля
    // await driver.saveScreenshot('_view_shots/screen_before_e-lastTest.png');

    // /*отладка*/ console.log('\n --> counter-beforeEach = ' + counter + '\n');
    // // * Не выполнять этот код для первого теста
    // if (counter == 0) return;
  
    // // * Открыть начальную страницу приложения
    // await driver.startActivity(SGen.appPackage, SGen.appActivity_Text_Expected);
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

// ab-ts-04p: Тестирование карт |вер.20230913| /Тестов 4 (частичен 1, отключен 1)/
it('-*- ab-e-tc-04.001p: Adding card | Добавление карты /частичен/', async () => {
  /** 
  > Можно добавить банковскую карту. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Карты.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать кнопку Карты.
  1.1.Открыт экран Мои карты, где доступна кнопка заказа/добавления карты.

  2.Нажать кнопку заказа/добавления карты.
  2.1.Открыто окно, где доступны кнопка Заказать карту и кнопка Добавить карту.

  3.Нажать кнопку Добавить карту.
  3.1.Открыт экран Добавить карту, где доступны изображение карты, кнопки выбора ее дизайна, поле ввода названия карты, поле ввода номера карты, поле ввода срока действия карты и неактивная кнопка Добавить карту.

  4.Нажать кнопку дизайна карты (любую).
  4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.

  5.Нажать поле ввода названия карты и ввести ее название.
  5.1.В поле ввода отображается введенное значение.

  6.Нажать поле ввода номера карты и ввести ее номер.
  6.1.В поле ввода отображается введенное значение.

  7.Нажать поле ввода срока действия карты и ввести его дату.
  7.1.В поле ввода отображается введенное значение, кнопка Добавить карту активна.

--- ТРЕБУЕТСЯ карта, привязанная к текущему номеру телефона ---

  8.Нажать кнопку Добавить карту.
  8.1....?
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-04.001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const randomChars = await UApp.generateRandomChars(3, 'en');
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const cardName = DCard.cardName_Humo_10 + '-' + randomChars;
  const cardNumber = DCard.cardNumber_Humo_10;
  const cardExpiry = DCard.cardValid_Humo_10;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // 1.Нажать кнопку Карты.
  await SHome.bottomNav_Cards.click();
  // 1.1.Открыт экран Мои карты, где доступна кнопка заказа/добавления карты.
  await SCard.titleScreen_MyCards.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  await expect(SCard.titleScreen_MyCards).toHaveText(SCard.titleScreen_MyCards_Ru_Expected);

  // 2.Нажать кнопку заказа/добавления карты.
  await SCard.button_OrderOrAddCard.click();
  // 2.1.Открыто окно, где доступны кнопка Заказать карту и кнопка Добавить карту.
  await SCard.button_AddCard.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

  // 3.Нажать кнопку Добавить карту.
  await SCard.button_AddCard.click();
  // 3.1.Открыт экран Добавить карту, где доступны изображение карты, кнопки выбора ее дизайна, поле ввода названия карты, поле ввода номера карты, поле ввода срока действия карты и неактивная кнопка Добавить карту.
  await SCard.titleScreen_AddCard.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  await expect(SCard.titleScreen_AddCard).toHaveText(SCard.titleScreen_AddCard_Ru_Expected);

// 4.Нажать кнопку дизайна карты (любую).
// 4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.

  // 5.Нажать поле ввода названия карты и ввести ее название.
  await SCard.input_CardName.click();
  await UDev.androidKeyboardTypeIn(cardName);
  // 5.1.В поле ввода отображается введенное значение.
  await expect(SCard.input_CardName).toHaveText(cardName);

  // 6.Нажать поле ввода номера карты и ввести ее номер.
  await SCard.input_CardNumber.click();
  await UDev.androidKeyboardTypeIn(cardNumber);
  // 6.1.В поле ввода отображается введенное значение.
  await expect(SCard.input_CardNumber).toHaveText(cardNumber);

  // 7.Нажать поле ввода срока действия карты и ввести его дату.
  await SCard.input_CardExpiryDate.click();
  await UDev.androidKeyboardTypeIn(cardExpiry);
  // 7.1.В поле ввода отображается введенное значение, кнопка Добавить карту активна.
  await expect(SCard.input_CardExpiryDate).toHaveTextContaining(cardExpiry.substr(0, 2));
  await expect(SCard.input_CardExpiryDate).toHaveTextContaining(cardExpiry.substr(3, 2));
  await expect(SCard.button_AddCard_1).toBeEnabled();
  // --- ТРЕБУЕТСЯ карта, привязанная к текущему номеру телефона ---

  // 8.Нажать кнопку Добавить карту.
  // 8.1....?
  return;







  // ...
  if (await SHome.button_AddCard.isDisplayed()) {
    // 1а.Если пользователь пока не имеет карты: Нажать кнопку Добавить карту в разделе Карты.
    await SHome.button_AddCard.click();
  } else {
    // 1б.Если пользователь уже имеет карту: Нажать поле карты (любой) или кнопку Мои карты в разделе Общий баланс.
    await SHome.bottomNav_Home.click();
    // 1б.1.Открыт экран Мои карты, где доступна кнопка Добавить.
    // 1б.2.Нажать кнопку Добавить.
    await SCard.items_titleScreen_MyCards.click();
    // 1б.3.Нажать кнопку Добавить карту.
    await SCard.button_AddCard_1.click();
  }
  
  // 1.1.Открыт экран добавления карты, где доступны поле ввода названия карты, поле ввода номера карты, поле ввода даты действительности карты и неактивная кнопка Добавить карту:
  // - поле ввода названия карты
  await expect(SCard.input_CardName).toBeExisting();
  // - поле ввода номера карты
  await expect(SCard.input_CardNumber).toBeExisting();
  // - поле ввода даты действительности карты
  await expect(SCard.input_CardExpiryDate).toBeExisting();
  // - кнопка Добавить карту
  await expect(SCard.button_AddCard_1).toBeExisting();

  // 2.Нажать поле ввода названия карты.
  await SCard.input_CardName.click();
  // 2.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 3.Ввести название карты.
  await UDev.androidKeyboardTypeIn(cardName);
  // 3.1.В поле ввода отображается введенное значение.
  await expect(SCard.input_CardName).toHaveText(cardName);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 4.Нажать поле ввода номера карты.
  await SCard.input_CardNumber.click();
  // 4.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 5.Ввести номер карты.
  await UDev.androidKeyboardTypeIn(cardNumber);
  // 5.1.В поле ввода отображается введенное значение.
  await expect(SCard.input_CardNumber).toHaveText(cardNumber);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 6.Нажать поле ввода даты действительности карты.
  await SCard.input_CardExpiryDate.click();
  // 6.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 7.Ввести дату действительности карты.
  await UDev.androidKeyboardTypeIn(cardExpiry);
  // 7.1.В поле ввода отображается введенное значение, кнопка Добавить карту активна.
  await expect(SCard.input_CardExpiryDate).toHaveTextContaining(cardExpiry.substr(0, 2));
  await expect(SCard.input_CardExpiryDate).toHaveTextContaining(cardExpiry.substr(3, 2));
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();
  // - кнопка Добавить карту
  await expect(SCard.button_AddCard_1).toBeEnabled();

//   // 8.Нажать кнопку Добавить карту.
//   await SCard.button_AddCard_1.click();
//   await SSms.titleScreen_EnterSmsCode_Ru.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
//   // 8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить:
//   // - экран Введите код из СМС
//   await expect(SSms.titleScreen_EnterSmsCode_Ru).toHaveText(SSms.titleScreen_EnterSmsCode_Ru_Expected);
//   // - кнопка Подтвердить
//   await expect(SSms.button_Continue).toBeDisabled();
//   // 9.Нажать поле ввода кода из СМС.
//   await SSms.input_SmsCode.click();
//   // 9.1.Открыта клавиатура.
//   await expect(await driver.isKeyboardShown()).toBe(true);

// // --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

//   // 10.Ввести полученный код.
//   const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
//   await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected); //smsCode_Received
//   // 10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна:
//   // - введенный код ?
//   await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
//   // - кнопка Подтвердить
//   await expect(SSms.button_Continue).toBeEnabled();

//   // 11.Нажать кнопку Подтвердить.
//   await SSms.button_Continue.click();
//   // 11.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...
});
it.skip('-!- ab-e-tc-04.002p: Editing card | Редактирование карты /отключен/', async () => {
  /**
   * 
   * 



--- ТРЕБУЕТСЯ карта, привязанная к текущему номеру телефона ---



  > Можно изменить некоторые данные банковской карты. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс отображаются карты (или одна карта) и кнопка Мои карты.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать кнопку Мои карты в разделе Общий баланс.
  1.1.Открыт экран Мои карты, где доступен список карт.

  2.Нажать карту из списка (любую).
  2.1.Открыт экран действий с картой, где доступна кнопка Свойства карты.

  3.Нажать кнопку Свойства карты.
  3.1.Открыт экран редактирования карты, где доступны изображение карты (с текущими дизайном, названием, балансом, именем владельца, номером, сроком действия), кнопки выбора ее дизайна, поле ввода/редактирования названия карты, кнопка Подтвердить.
  
  4.Нажать кнопку дизайна карты (любую).
  4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.

  5.Нажать поле ввода названия карты.
  5.1.Открыта клавиатура. Курсор установлен в конце текущего названия.

  6.Изменить название карты.
  6.1.Измененное значение отображается:
  - в поле ввода;
  - на изображении карты.

  7.Удалить название карты.
  7.1.Пустое значение отображается:
  - в поле ввода;
  - на изображении карты.

  8.Ввести название карты, нажав поле ввода названия карты.
  8.1.Введенное значение отображается:
  - в поле ввода;
  - на изображении карты.

  9.Нажать кнопку Подтвердить.
  9.1.Открыт экран действий с картой, всплывает сообщение Changed!

  10.Вернуться на экран Мои карты, нажимая кнопку Назад.
  10.1.Открыт экран Мои карты, где изменявшаяся карта имеет отредактированные дизайн и название.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-04.002p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const randomChars = await UApp.generateRandomChars(3, 'en');
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const cardName = DCard.cardName_Humo_10 + '-' + randomChars;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // 1.Нажать кнопку Мои карты в разделе Общий баланс.
    await SHome.bottomNav_Home.click();
  // 1.1.Открыт экран Мои карты, где доступен список карт.

  // 2.Нажать карту из списка (любую).
  await SCard.cardViewFront.click();
  // 2.1.Открыт экран действий с картой, где доступна кнопка Свойства карты.

  // 3.Нажать кнопку Свойства карты.
  await SCard.button_CardSettings.click();
  // 3.1.Открыт экран редактирования карты, где доступны изображение карты (с текущими дизайном, названием, балансом, именем владельца, номером, сроком действия), кнопки выбора ее дизайна, поле ввода/редактирования названия карты, кнопка Подтвердить.

  // * Создать массив существующих дизайнов карты.
  await SCard.image_CardBackground.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  // await SCard.waitForScreenDisplayed_cardSettingsScreen();
  let raw_array = await SCard.items_CardBackgrounds;
  // /*отладка*/ console.log('\n --> raw_array ' + raw_array + '\n');
  // await driver.pause(5000);

  let data_array = [];
  let elementAttributeKey = 'resource-id';
  const elementAttributeValue = 'com.fincube.apexbank.debug:id/bg_image';
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // * Контролируем непустоту массива.
  // await expect(data_array.length).toBeGreaterThan(0);
  if(data_array.length == 0){
    // console.log('\n --> languagesList не сформирован: data_array = ' + data_array + '\n');
    throw "не сформирован data_array (массив дизайнов карты) = '" + data_array + "'";
  }

  for(let i = 0, l = data_array.length; i < l; i++) { // for (const element of data_array) {
    // let nextElement1 = await SHome.image_CardBackgroundChecked;
    // let elementAttributeValueCurrent1 = await nextElement1.getAttribute('resource-id');
    // /*отладка*/ console.log('\n --> elementAttributeValueCurrent1 = ' + elementAttributeValueCurrent1 + '\n');

    // 4.Нажать кнопку дизайна карты (любую).


                                        // ОТКЛЮЧЕн ВЫБОР ДИЗайна
                                        // await data_array[await UApp.generateRandomCharsOfSet(1,'012')].click(); // '012345'

    // let nextElement = await element.nextElement();
    // let elementAttributeValueCurrent = await nextElement.getAttribute('resource-id');

    // let nextElement2 = await SHome.image_CardBackgroundChecked;
    // let elementAttributeValueCurrent2 = await nextElement2.getAttribute('resource-id');
    // /*отладка*/ console.log('\n --> elementAttributeValueCurrent2 = ' + elementAttributeValueCurrent2 + '\n');
  }
  // 4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.
  // -?- непонятно что проверять, т.к. атрибуты элемента не меняются

  // 5.Нажать поле ввода названия карты.
  await SCard.input_CardName_1.click();
  // 5.1.Открыта клавиатура. Курсор установлен в конце текущего названия.

  // * Запомнить название и номер карты
    // * Прокрутить до элемента
    await $(`android=${SCard.scrollToElement_Up}`);
  const cardName_Initial = await SCard.text_CardName_1.getText();
  const cardNumber = await SCard.text_CardNumber_1.getText();
  // /*отладка*/ console.log(
  //   '\n' + cardName_Initial + ' = cardName_Initial... of card' +
  //   '\n' + cardNumber + ' = cardNumber' +
  //   '\n');
  // /*отладка*/ await driver.pause(5000);

  // 6.Изменить название карты.
  // await UDev.androidKeyboardTypeIn('-123');
  await UDev.androidKeyboardTypeIn(randomChars);
  // 6.1.Измененное значение отображается:
  // - в поле ввода;
  await expect(SCard.input_CardName_1).toHaveText(cardName_Initial + randomChars);
  // - на изображении карты.
    // * Прокрутить до элемента
    await $(`android=${SCard.scrollToElement_Up}`);
  await expect(SCard.text_CardName_1).toHaveText(cardName_Initial + randomChars);
    // * hide keyboard (закрывает следующие элементы)
    await driver.hideKeyboard();

  // 7.Удалить название карты.
  // * Очистить поле ввода
  // await SCard.input_CardName_1.clearValue();
  await SCard.button_CardNameInputClear.click();
  // 7.1.Пустое значение отображается:
  // - в поле ввода;
  await expect(SCard.input_CardName_1).toHaveText(''); // 'Название карты'
  // - на изображении карты.
  await expect(SCard.text_CardName_1).toHaveText(''); // .not.toBeExisting();

  // 8.Ввести название карты, нажав поле ввода названия карты.
  await SCard.input_CardName_1.click();
  await UDev.androidKeyboardTypeIn(cardName);
      // * hide keyboard (закрывает следующие элементы)
      await driver.hideKeyboard();
  // 8.1.Введенное значение отображается:
  // - в поле ввода;
  await expect(SCard.input_CardName_1).toHaveText(cardName);
  // - на изображении карты.
    // * Прокрутить до элемента
    // if(!(await SCard.text_CardName_1).isDisplayedInViewport) {
      await $(`android=${SCard.scrollToElement_Up}`);
    // }
  await expect(SCard.text_CardName_1).toHaveText(cardName);

  // 9.Нажать кнопку Подтвердить.
  await SCard.button_Confirm.click();
  // 9.1.Открыт экран действий с картой, всплывает сообщение Changed!
  // await expect(SCard.button_Confirm).toBeDisabled(); // - отключено 24.05.2023, т.к. при проверке опять активируется!
  await SCard.button_CardSettings.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

  // 10.Вернуться на экран Мои карты, нажимая кнопку Назад.
  // await UDev.androidPressBackButton(1);
  while(!await SCard.text_CardName.isDisplayed()){
    await UDev.androidPressBackButton(1);
  }; 
  await SCard.text_CardName.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  // SCard.waitForScreenDisplayed_myCardsScreen();
  // *.Создать массив элементов.
  raw_array = await SCard.items_titleScreen_MyCards;
  data_array = [];
  elementAttributeKey = 'resource-id';
  // /*отладка*/ console.log('\n --> raw_array в ab-e-tc-004p №2 = ' + raw_array + '\n');
  const elementAttributeValue_1 = 'com.fincube.apexbank.debug:id/tvCardName';
  const elementAttributeValue_2 = 'com.fincube.apexbank.debug:id/tvCardNumber';
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1, elementAttributeValue_2);
  // /*отладка*/ console.log('\n --> data_array в ab-e-tc-004p №2 = ' + data_array + '\n');
  // /*отладка*/ await driver.pause(5000);
  // * Контролируем непустоту массива.
  // await expect(data_array.length).toBeGreaterThan(0);
  if(data_array.length == 0){
    // console.log('\n --> languagesList не сформирован: data_array = ' + data_array + '\n');
    throw "не сформирован data_array (массив банковских карт) = '" + data_array + "'";
  }
  
  // 10.1.Открыт экран Мои карты, где изменявшаяся карта имеет отредактированные дизайн и название:
  let currentCardItem = '';
  for(let i = 0, l = data_array.length; i < l; i++) { // for (const element of data_array)
    currentCardItem = await data_array[i].getText();
      // /*отладка*/ console.log(
      //   '\n' + cardNumber + ' = cardNumber' +
      //   '\n' + currentCardItem + ' = currentCardItem' +
      //   '\n');
    if(currentCardItem == cardNumber) {
        // /*отладка ------------------------------------------------------------ */
        // console.log(
        //   '\n --> ' + cardNumber + ' = cardNumber' +
        //   '\n --> ' + currentCardItem + ' = currentCardItem' +
        //   '\n --> ' + cardName + ' = cardName' +
        //   '\n --> ' + await data_array[i-1].getText() + ' = currentCardName' +
        //   '\n');
        // await driver.pause(5000);
        // /*отладка ------------------------------------------------------------ */
      // - название
      await expect(data_array[i-1]).toHaveText(cardName); // expect(SCard.text_CardName_1).
    }
  }
});
it('ab-e-tc-04.003p: Checking balance | Проверка баланса', async () => {
  /**
  > Можно проверить балансы карт и общий баланс. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс отображаются общий баланс и карты (или одна карта), в панели навигации доступна кнопка Карты.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Обратить внимание на баланс каждой карты.
  1.1.Отображается баланс каждой карты.

  2.Обратить внимание на общий баланс.
  2.1.Отображается общий баланс, равный сумме балансов всех карт.

  3.Нажать кнопку Карты.
  3.1.Открыт экран Мои карты, где доступен список карт.

  4.Обратить внимание на баланс каждой карты.
  4.1.Отображается баланс каждой карты.
  4.2.Сумма балансов всех карт равна общему балансу.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-04.003p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);
  
  // 1.Обратить внимание на баланс каждой карты.
  /*
    1.Считываем видимые данные окна и записываем в массив data_array (напр., название, сумма, номер, срок действия карты, ...).
    2.Прокручиваем окно, делая видимыми следующие данные.
    3.Считываем видимые данные окна и записываем в массив data_array, отсеивая уже имеющиеся в массиве данные.
  */
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  // * Создать массив видимых элементов.
  let raw_array = await SHome.items_layout_CardsList;
  let data_array = [];
  const elementAttributeKey = 'resource-id';
  const elementAttributeValues = [
    'com.fincube.apexbank.debug:id/tvCardName',
    'com.fincube.apexbank.debug:id/tvCardBalance',
    'com.fincube.apexbank.debug:id/tvCardNumber',
    'com.fincube.apexbank.debug:id/tvCardDate'
  ];
  
  await UApp.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValues);
  // /*отладка*/ for (let i = 0, l = data_array.length; i < l; i++) {
  // console.log('\n --> 1-data_array.length = ' + data_array.length +
  //   '\n' + await data_array[i].cardName +
  //   '\n' + await data_array[i].cardBalance +
  //   '\n' + await data_array[i].cardNumber +
  //   '\n' + await data_array[i].cardDate
  //  );
  // }

  // * Прокрутить, делая видимыми следующие элементы.
  await $(`android=${SHome.scrollToElement_Right}`);

  // * Создать массив видимых элементов.
  raw_array = await SHome.items_layout_CardsList;
  await UApp.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValues);

  // * Контролируем непустоту массива.
  // await expect(data_array.length).toBeGreaterThan(0);
  if(data_array.length == 0){
    // console.log('\n --> languagesList не сформирован: data_array = ' + data_array + '\n');
    throw "не сформирован data_array (массив-1 карт) = '" + data_array + "'";
  }
  // /*отладка*/ for (let i = 0, l = data_array.length; i < l; i++) {
  //   console.log('\n --> 2-data_array.length = ' + data_array.length +
  //   '\n' + await data_array[i].cardName +
  //   '\n' + await data_array[i].cardBalance +
  //   '\n' + await data_array[i].cardNumber +
  //   '\n' + await data_array[i].cardDate
  //   );
  // }
  // 1.1.Отображается баланс каждой карты.
  let cardBalanceAmountText = '';
  let cardBalance = 0;
  let cardsBalanceAmountTotal = 0;
  for (const element of data_array) {
    // cardBalanceAmountText = await element.getText();
    cardBalanceAmountText = await element.cardBalance;
    cardBalance = await UApp.extractNumbersFromString(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.cardBalance + '\n');
  }
  cardsBalanceAmountTotal = await UApp.roundNumber(cardsBalanceAmountTotal, 2);
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal = ' + cardsBalanceAmountTotal + '\n');

  // 2.Обратить внимание на общий баланс.
  // 2.1.Отображается общий баланс, равный сумме балансов всех карт.
  let totalBalance = await SHome.text_TotalBalanceAmount.getText();
  totalBalance = await UApp.extractNumbersFromString(totalBalance);
  // /*отладка*/ console.log('\n --> totalBalance = ' + totalBalance + '\n');
  await expect(totalBalance).toEqual(cardsBalanceAmountTotal);

  // 3.Нажать кнопку Карты.
  await SHome.bottomNav_Cards.click();
  // 3.1.Открыт экран Мои карты, где доступен список карт.
  // - список карт /...ждем первую карту/
  await SCard.text_CardBalance.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

  // 4.Обратить внимание на баланс каждой карты.
  // *.Создать массив видимых элементов.
  raw_array = await SCard.items_titleScreen_MyCards;
  data_array = [];
  await UApp.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValues);

  // * Прокрутить, делая видимыми следующие элементы.
  await $(`android=${UApp.scrollForward}`);
 
  // * Создать массив видимых элементов.
  raw_array = await SCard.items_titleScreen_MyCards;
  await UApp.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValues);

  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив-2 карт) = '" + data_array + "'";
  }
  // /*отладка*/ for (let i = 0, l = data_array.length; i < l; i++) {
  //   console.log('\n --> data_array.length = ' + data_array.length +
  //   '\n' + await data_array[i].cardName +
  //   '\n' + await data_array[i].cardBalance +
  //   '\n' + await data_array[i].cardNumber +
  //   '\n' + await data_array[i].cardDate
  //   );
  // }
  // 4.1.Отображается баланс каждой карты.
  cardBalanceAmountText = '';
  cardBalance = 0;
  cardsBalanceAmountTotal = 0;
  for (const element of data_array) {
    // cardBalanceAmountText = await element.getText();
    cardBalanceAmountText = await element.cardBalance;
    cardBalance = await UApp.extractNumbersFromString(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.cardBalance + '\n');
  }
  cardsBalanceAmountTotal = await UApp.roundNumber(cardsBalanceAmountTotal, 2);
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal = ' + cardsBalanceAmountTotal + '\n');
  // 4.2.Сумма балансов всех карт равна общему балансу.
  await expect(totalBalance).toEqual(cardsBalanceAmountTotal);
});
it('ab-u-tc-04.004p: Hide/Show balance | Скрыть/Показать баланс', async () => {
  /**
  > Можно скрыть/показать баланс по картам и общий баланс. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс отображаются карты (или одна карта) и их балансы, кнопка Показать/Скрыть баланс.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Обратить внимание на общий баланс и баланс каждой карты.
  1.1.Отображаются соответствующие балансы.

  2.Нажать кнопку Показать/Скрыть баланс.
  2.1.Вместо балансов отображаются символы звездочек (могут отображаться другие подобные символы).

  3.Нажать кнопку Показать/Скрыть баланс.
  3.1.Отображаются соответствующие балансы (вместо символов звездочек или других подобных).
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-u-tc-04.004p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // Пред.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);
  
  // 1.Обратить внимание на общий баланс и баланс каждой карты.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // 1.1.Отображаются соответствующие балансы.
  const totalBalance = await SHome.text_TotalBalanceAmount.getText();
  const cardBalance = await SHome.text_CardBalance.getText(); // значение первой карты с балансом

  // 2.Нажать кнопку Показать/Скрыть баланс.
  await SHome.button_ShowHideBalanceAmount.click();
  // await SHome.text_CardBalance.waitForDisplayed({timeout: 5000});
  // 2.1.Вместо балансов отображаются символы звездочек (могут отображаться другие подобные символы).
  await expect(SHome.text_TotalBalanceAmount).toHaveTextContaining(SHome.text_TotalBalanceHidingSymbols_En_Expected);
  await expect(SHome.text_CardBalance).toHaveTextContaining(SHome.text_CardBalanceHidingSymbols_En_Expected);
  // /*отладка*/ console.log(
  //   '\n-> ' + await SHome.text_TotalBalanceAmount.getText()  + ' = await SHome.text_TotalBalanceAmount.getText();'  +
  //   '\n-> ' + SHome.balanceHidingSymbols          + ' = SHome.balanceHidingSymbols'           +
  //   '\n-> ' + await SHome.text_CardBalance.getText()   + ' = await SHome.text_CardBalance.getText();'   +
  //   '\n-> ' + SHome.balanceHidingSymbols          + ' = SHome.balanceHidingSymbols'           + '\n');

  // 3.Нажать кнопку Показать/Скрыть баланс.
  await SHome.button_ShowHideBalanceAmount.click();
  // 3.1.Отображаются соответствующие балансы (вместо символов звездочек или других подобных).
  await expect(await SHome.text_TotalBalanceAmount.getText()).toEqual(totalBalance);
  await expect(await SHome.text_CardBalance.getText()).toEqual(cardBalance);
  // /*отладка*/ console.log(
  //   '\n-> ' + await SHome.text_TotalBalanceAmount.getText()  + ' = await SHome.text_TotalBalanceAmount.getText();'  +
  //   '\n-> ' + totalBalance                        + ' = totalBalance'                         +
  //   '\n-> ' + await SHome.text_CardBalance.getText()   + ' = await SHome.text_CardBalance.getText();'   +
  //   '\n-> ' + cardBalance                         + ' = cardBalance'                          + '\n');
});

// ab-ts-05p: Тестирование переводов |вер.20230919| /Тестов 4 (частичен 4)/
it.only('-*- ab-e-tc-05.001p: Transfer to card by card number | Перевод на карту по номеру карты /частичен, ограничен/', async () => {
  /**
  > Можно выполнить перевод денежных средств с карты на карту по номеру карты. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступно поле ввода данных получателя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать поле ввода данных получателя в разделе Переводы.
  1.1.Открыта клавиатура.
  2.Ввести номер карты получателя.
  2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.

  3.Нажать кнопку отправки.
  3.1.Открыт экран Перевод на карту, где доступны поле выбора карты отправителя, поле номера карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.

  4.Нажать поле выбора карты.
  4.1.Открыт список карт отправителя.
  5.Выбрать карту отправителя из списка.
  5.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  6.Нажать поле ввода суммы перевода.
  6.1.Открыта клавиатура.
  7.Ввести сумму перевода.
  7.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.

--- ТРЕБУЕТСЯ снять ограничения на количество переводов на карту ---

  8.Нажать кнопку Продолжить.
  8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

  9.Нажать поле ввода кода из СМС.
  9.1.Открыта клавиатура.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  10.Ввести полученный код.
  10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.

  11.Нажать кнопку Подтвердить.
  11.1.Открыт экран..., где доступны...

  *
-?- узнать, как автоматически получить код из СМС, а затем использовать его
-?- продолжить автоматизацию теста, используя валидный код из СМС
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-05.001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  // const phoneNumber = DCard.phoneNumber_1;
  // const phoneNumber_pass = DCard.phoneNumber_1_pass;
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const cardNumber_Receiver = DCard.cardNumber_Humo_7;
  // const moneyAmount = '1000000';
  const moneyAmount = await UApp.generateRandomChars(6, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // * Сохранить сумму баланса карты до операции. 
  const totalBalanceBefore = await SHome.text_TotalBalanceAmount.getText();
  const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');

  // 1.Нажать поле ввода данных получателя в разделе Переводы.
  await SHome.input_ReceiverData.click();
  // 1.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 2.Ввести номер карты получателя.
  await UDev.androidKeyboardTypeIn(cardNumber_Receiver);
  // 2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.
  await expect(SHome.input_ReceiverData).toHaveText(cardNumber_Receiver);
  await SHome.button_Send.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 5000});

  // 3.Нажать кнопку отправки.
  await SHome.button_Send.click();
  // 3.1.Открыт экран Перевод на карту, где доступны поле выбора карты отправителя, поле номера карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.
  await expect(STraTo.titleScreen_TransferToCard_Ru).toHaveText(STraTo.titleScreen_TransferToCard_Ru_Expected);

  // 4.Нажать поле выбора карты.
  await WCardsS.button_OpenSenderCardsList.click();
  // 4.1.Открыт список карт отправителя.
  // 5.Выбрать карту отправителя из списка.
  // * Создать массив видимых элементов.
  const raw_array = await WCardsS.items_TextView_titleWindow_SenderSelectCard;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  const data_array = [];
  const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = WCardsS.text_ElementAttributeValue_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  // - выбрать карту из списка
  await data_array[1].click();
  // 5.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  // 6.Нажать поле ввода суммы перевода.
  await STraTo.input_TransferAmount.click();
  // 6.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 7.Ввести сумму перевода.
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // * Скрыть клавиатуру (добавить время для формирования значения SCard.transferTotalAmount)
  await driver.hideKeyboard();
  // 7.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение,
  const amountSeparatedThousandths = await UApp.separateThousandthsOfNumber(moneyAmount);
  await expect(STraTo.input_TransferAmount).toHaveText(amountSeparatedThousandths);
  // await expect(STraTo.input_TransferAmount).toHaveText(moneyAmount);
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await SCard.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await SCard.transferTotalAmount.getText()
  // );
  await STraTo.text_TransferTotalAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  const transferCommissionInNumbers = await UApp.extractNumbersFromString(await STraTo.text_TransferCommission.getText());
  const transferTotalAmountInNumbers = await UApp.extractNumbersFromString(await STraTo.text_TransferTotalAmount.getText());
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n transferCommissionInNumbers = ' + transferCommissionInNumbers +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers
  // );
  // - итоговая сумма
  const amountInNumbers = Number(moneyAmount) + transferCommissionInNumbers;
  await expect(transferTotalAmountInNumbers).toStrictEqual(amountInNumbers);

  // 8.Нажать кнопку Продолжить.
  await STraTo.button_Continue.click();
  // 8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

  // 9.Нажать поле ввода кода из СМС.
  await SSms.input_SmsCode.click();
  // 9.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 10.Ввести полученный код.
  const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
  await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);
  // 10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.
  // - введенный код ?
  await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
  // - кнопка Подтвердить
  await expect(SSms.button_Continue).toBeEnabled();

  // 11.Нажать кнопку Подтвердить.
  await SSms.button_Continue.click();
  // 11.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...



return;


  
  // 9.Нажать кнопку Продолжить.
  await SCard.continueButtonOnTransferToCardScreen.click();
  // 9.1.Открыт экран Перевод на карту-2, где доступны изображение карты отправителя, номер карты получателя, сумма перевода, кнопка Перевод.
  // - экран Перевод на карту
  await expect(SCard.titleScreen_TransferToCard_Ru).toHaveText(SCard.titleScreen_TransferToCard_Ru_Expected);
  // - изображение карты отправителя
  await expect(SCard.cardSenderDetailsArea).toBeDisplayed();
  // - номер карты получателя
  await expect(SCard.cardReceiverNumber).toBeDisplayed();
  // - сумма перевода
  // await expect(SCard.transferAmount).toBeDisplayed();
  await expect(SCard.transferAmount).toHaveText(amountSeparatedThousandths + '.0 UZS');
  // - кнопка Перевод
  await expect(SCard.continueButtonOnTransferToCardScreen).toBeDisplayed();

  // 10.Нажать кнопку Перевод.
  await SCard.continueButtonOnTransferToCardScreen.click();
  // 10.1.Открыт экран чека перевода на карту, где доступны поле Сумма, кнопка Домой.
  // - поле Сумма
  // const amountSeparatedThousandths =  await UApp.separateThousandthsOfNumber(moneyAmount);
  // await expect(SCard.amount).toHaveText(amountSeparatedThousandths + ' UZS');

  // 11.Нажать кнопку Домой.
  await SCard.homeButton.click();
  // 11.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  // - вкладка Аккаунт
  await expect(SHome.accountTabRu).toBeDisplayed();
  // - текст Общий баланс
  await expect(SHome.titleSection_TotalBalance_Ru).toHaveText(SHome.totalBalanceLabelRu_Expected);
  // - сумма Общий баланс
  await expect(SHome.text_TotalBalanceAmount).toBeDisplayed();

  // *.Сохранить сумму баланса карты после операции. 
  const cardBalanceAfter = await SHome.text_CardBalance.getText();

  // *.Сумма баланса по карте уменьшена на сумму платежа.
  const cardBalanceBeforeInNumbers = await UApp.extractNumbersFromString(cardBalanceBefore);
  const cardBalanceAfterInNumbers = await UApp.extractNumbersFromString(cardBalanceAfter);
  const moneyAmountInNumbers = await UApp.extractNumbersFromString(moneyAmount);
  // /*отладка*/ console.log(
  //   'cardBalanceBeforeInNumbers = ' + cardBalanceBeforeInNumbers +
  //   '\n cardBalanceAfterInNumbers = ' + cardBalanceAfterInNumbers +
  //   '\n      moneyAmountInNumbers =     ' + moneyAmountInNumbers
  // );
  await expect(cardBalanceAfterInNumbers).toEqual(cardBalanceBeforeInNumbers - moneyAmountInNumbers + moneyAmountInNumbers);

});
it('ab-e-tc-05.002p: ! Transfer to card by phone number | Перевод на карту по номеру телефона /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить перевод денежных средств с карты на карту по номеру телефона. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступно поле ввода данных получателя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать поле ввода данных получателя в разделе Переводы.
  1.1.Открыта клавиатура.
  2.Ввести номер телефона получателя.
  2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.

  3.Нажать кнопку отправки.
  3.1.Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступно поле выбора банка получателя.

  4.Нажать поле выбора банка получателя.
  4.1.Открыт список банков.
  5.Выбрать банк получателя из списка.
  5.1.Закрыт список банков. В окне Выберите банк отображается список карт получателя.
  6.Выбрать карту получателя из списка.
  6.1.Закрыты список карт и окно Выберите банк. В поле выбора карты получателя отображается выбранная карта.
  
  7.Нажать поле выбора карты отправителя.
  7.1.Открыт список карт отправителя.
  8.Выбрать карту отправителя из списка.
  8.1.Закрыт список карт. В поле выбора карт отправителя отображается выбранная карта.

  9.Нажать поле ввода суммы перевода.
  9.1.Открыта клавиатура.
  10.Ввести сумму перевода.
  10.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.

  11.Нажать кнопку Продолжить.
  11.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.
  12.Нажать поле ввода кода из СМС.
  12.1.Открыта клавиатура.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  13.Ввести полученный код.
  13.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.

  14.Нажать кнопку Подтвердить.
  14.1.Открыт экран..., где доступны...

  *
-?- узнать, как автоматически получить код из СМС, а затем использовать его
-?- продолжить автоматизацию теста, используя валидный код из СМС
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-05.002p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  // const phoneNumber = DCard.phoneNumber_1;
  // const phoneNumber_pass = DCard.phoneNumber_1_pass;
  const phoneNumber = DCard.phoneNumber_5;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;
  // const cardName = DCard.cardName_Humo_5;
  // const cardNumber = DCard.cardNumber_Humo_5;
  // const cardExpiry = DCard.cardValid_Humo_5;
  // const phoneNumber = DCard.phoneNumber_10;
  // const phoneNumber_pass = DCard.phoneNumber_10_pass;
  // const cardName = DCard.cardName_Humo_10;
  // const cardNumber = DCard.cardNumber_Humo_10;
  // const cardExpiry = DCard.cardValid_Humo_10;
  const phoneNumber_Receiver = DCard.phoneNumber_4;
  // const moneyAmount = '1000000';
  const moneyAmount = await UApp.generateRandomChars(6, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // * Сохранить сумму баланса карты до операции. 
  const totalBalanceBefore = await SHome.text_TotalBalanceAmount.getText();
  const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');

  // 1.Нажать поле ввода данных получателя в разделе Переводы.
  await SHome.input_ReceiverData.click();
  // 1.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 2.Ввести номер телефона получателя.

  await UDev.androidKeyboardTypeIn('998' + phoneNumber_Receiver); // если первые цифры номера 998, то перед таким номером нужно добавить 998

  // 2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.
  // - активная кнопка отправки
  await SHome.button_Send.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 5000});

  // 3.Нажать кнопку отправки.
  await SHome.button_Send.click();
  // 3.1.Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступно поле выбора банка получателя.
  // - окно Выберите банк
  await expect(STraTo.titleWindow_ReceiverSelectBank_Ru).toHaveText(STraTo.titleWindow_ReceiverSelectBank_Ru_Expected);

  // 4.Нажать поле выбора банка получателя.
  await STraTo.button_OpenReceiverBanksList.click();
  // 4.1.Открыт список банков.
  // 5.Выбрать банк получателя из списка.
  // 5.1.Закрыт список банков. В окне Выберите банк отображается список карт получателя.
  // 6.Выбрать карту получателя из списка.
  // await STraTo.check_ReceiverCard.click();
  // * Создать массив видимых элементов.
  let raw_array = await STraTo.items_titleWindow_ReceiverSelectCard;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  let data_array = [];
  const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = WCardsS.text_ElementAttributeValue_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  // - выбрать карту из списка
  await data_array[0].click();
  // 6.1.Закрыты список карт и окно Выберите банк. В поле выбора карты получателя отображается выбранная карта.

  // 7.Нажать поле выбора карты отправителя.
  await WCardsS.button_OpenSenderCardsList.click();
  // 7.1.Открыт список карт отправителя.
  // 8.Выбрать карту отправителя из списка.
  // * Создать массив видимых элементов.
  raw_array = await WCardsS.items_TextView_titleWindow_SenderSelectCard;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  data_array = [];
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  // - выбрать карту из списка
  await data_array[0].click();
  // 8.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  // 9.Нажать поле ввода суммы перевода.
  await STraTo.input_TransferAmount.click();
  // 9.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 10.Ввести сумму перевода.
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // * Скрыть клавиатуру (добавить время для формирования значения SCard.transferTotalAmount)
  await driver.hideKeyboard();
  // 10.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение
  // const amountSeparatedThousandths = await UApp.separateThousandthsOfNumber(moneyAmount);
  // await expect(SCard.input_TransferAmount).toHaveText(amountSeparatedThousandths);
  await expect(STraTo.input_TransferAmount).toHaveText(moneyAmount);
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await SCard.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await SCard.transferTotalAmount.getText()
  // );
  // * Добавить время для формирования значения SCard.transferTotalAmount
  await driver.pause(1000);
  const transferCommissionInNumbers = await UApp.extractNumbersFromString(await STraTo.text_TransferCommission.getText());
  const transferTotalAmountInNumbers = await UApp.extractNumbersFromString(await STraTo.text_TransferTotalAmount.getText());
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n transferCommissionInNumbers = ' + transferCommissionInNumbers +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers
  // );
  // - итоговая сумма
  const amountInNumbers = Number(moneyAmount) + transferCommissionInNumbers;
  await expect(transferTotalAmountInNumbers).toStrictEqual(amountInNumbers);

  // 11.Нажать кнопку Продолжить.
  await STraTo.button_Continue.click();
  // 11.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

  // 12.Нажать поле ввода кода из СМС.
  await SSms.input_SmsCode.click();
  // 12.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 13.Ввести полученный код.
  const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
  await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);
  // 13.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.
  // - введенный код ?
  await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
  // - кнопка Подтвердить
  await expect(SSms.button_Continue).toBeEnabled();

  // 14.Нажать кнопку Подтвердить.
  await SSms.button_Continue.click();
  // 14.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...

});
it('ab-e-tc-05.003p: ! Transfer to card by phone number from contacts | Перевод на карту по номеру телефона из контактов /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить перевод денежных средств с карты на карту по номеру телефона из контактов. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступно поле ввода данных получателя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать кнопку Контакты в разделе Переводы.
  1.1.Открыт экран устройства Выберите контакт, где доступны список контактов и кнопка Поиск контактов.
  2.Нажать кнопку Поиск контактов.
  2.1.Открыто поле ввода поиска контактов.

  3.Нажать поле ввода поиска контактов.
  3.1.Открыта клавиатура.
  4.Ввести запрос поиска требуемого контакта.
  4.1.В поле ввода отображается введенный запрос, список контактов отфильтрован соответственно запросу.

  5.Нажать элемент требуемого контакта.
  5.1.Закрыт экран Выберите контакт. Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступно поле выбора банка получателя.

  6.Нажать поле выбора банка получателя.
  6.1.Открыт список банков.
  7.Выбрать банк получателя из списка.
  7.1.Закрыт список банков. В окне Выберите банк отображается список карт получателя.
  8.Выбрать карту получателя из списка.
  8.1.Закрыты список карт и окно Выберите банк. В поле выбора карты получателя отображается выбранная карта.

  9.Нажать поле выбора карты отправителя.
  9.1.Открыт список карт отправителя.
  10.Выбрать карту отправителя из списка.
  10.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  11.Нажать поле ввода суммы перевода.
  11.1.Открыта клавиатура.
  12.Ввести сумму перевода.
  12.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.

  13.Нажать кнопку Продолжить.
  13.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

  14.Нажать поле ввода кода из СМС.
  14.1.Открыта клавиатура.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  15.Ввести полученный код.
  15.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.

  16.Нажать кнопку Подтвердить.
  16.1.Открыт экран..., где доступны...

  *
-?- узнать, как автоматически получить код из СМС, а затем использовать его
-?- продолжить автоматизацию теста, используя валидный код из СМС
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-05.003p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_5;
  const phoneNumber_pass = DCard.phoneNumber_5_pass;
  // const cardName = DCard.cardName_Humo_5;
  // const cardNumber = DCard.cardNumber_Humo_5;
  // const cardExpiry = DCard.cardValid_Humo_5;
  // const phoneNumber = DCard.phoneNumber_10;
  // const phoneNumber_pass = DCard.phoneNumber_10_pass;
  // const cardName = DCard.cardName_Humo_10;
  // const cardNumber = DCard.cardNumber_Humo_10;
  // const cardExpiry = DCard.cardValid_Humo_10;
  // const phoneNumber_Receiver = DCard.phoneNumber_4;
  const receiverName = 'Апекс';
  // const moneyAmount = '1000000';
  const moneyAmount = await UApp.generateRandomChars(6, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // // * Сохранить сумму баланса карты до операции. 
  // const totalBalanceBefore = await SHome.text_TotalBalanceAmount.getText();
  // const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');

  // 1.Нажать кнопку Контакты в разделе Переводы.
  await SHome.button_Contacts.click();
  // 1.1.Открыт экран устройства Выберите контакт, где доступны список контактов и кнопка Поиск контактов.
  
  // 2.Нажать кнопку Поиск контактов.
  await UDev.contactsSearchButton.click();
  // 2.1.Открыто поле ввода поиска контактов.

  // 3.Нажать поле ввода поиска контактов.
  await UDev.contactsSearchInput.click();
  // 3.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

  // 4.Ввести запрос поиска требуемого контакта.
  await UDev.contactsSearchInput.addValue(receiverName);
  // 4.1.В поле ввода отображается введенный запрос, список контактов отфильтрован соответственно запросу.

  // 5.Нажать элемент требуемого контакта.
  await UDev.contactName.click();
  // 5.1.Закрыт экран Выберите контакт. Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступно поле выбора банка получателя.
  // - окно Выберите банк
  await expect(STraTo.titleWindow_ReceiverSelectBank).toHaveText(STraTo.titleWindow_ReceiverSelectBank_Ru_Expected);

  // 6.Нажать поле выбора банка получателя.
  await STraTo.button_OpenReceiverBanksList.click();
  // 6.1.Открыт список банков.
  // 7.Выбрать банк получателя из списка.
  // 7.1.Закрыт список банков. В окне Выберите банк отображается список карт получателя.
  // 8.Выбрать карту получателя из списка.
  // await STraTo.check_ReceiverCard.click();
  // * Создать массив видимых элементов.
  let raw_array = await STraTo.items_titleWindow_ReceiverSelectCard;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  let data_array = [];
  const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = WCardsS.text_ElementAttributeValue_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  // - выбрать карту из списка
  await data_array[0].click();
  // 8.1.Закрыты список карт и окно Выберите банк. В поле выбора карты получателя отображается выбранная карта.

  // 9.Нажать поле выбора карты отправителя.
  await WCardsS.button_OpenSenderCardsList.click();
  // 9.1.Открыт список карт отправителя.
  // 10.Выбрать карту отправителя из списка.
  // * Создать массив видимых элементов.
  raw_array = await WCardsS.items_TextView_titleWindow_SenderSelectCard;
  // /*отладка*/ console.log('\n --> raw_array-1 = ' + raw_array);
  data_array = [];
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  /*отладка*/ console.log('\n --> data_array-1 = ' + data_array);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  // - выбрать карту из списка
  await data_array[1].click();
  // 10.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  // 11.Нажать поле ввода суммы перевода.
  await STraTo.input_TransferAmount.click();
  // 11.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 12.Ввести сумму перевода.
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // * Скрыть клавиатуру (добавить время для формирования значения SCard.transferTotalAmount)
  await driver.hideKeyboard();
  await driver.pause(SGen.number_WaitTime_Expected);
  // 12.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение
  // const amountSeparatedThousandths = await UApp.separateThousandthsOfNumber(moneyAmount);
  // await expect(SCard.input_TransferAmount).toHaveText(amountSeparatedThousandths);
  await expect(STraTo.input_TransferAmount).toHaveText(moneyAmount);
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await SCard.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await SCard.transferTotalAmount.getText()
  // );
  const transferCommissionInNumbers = await UApp.extractNumbersFromString(await STraTo.text_TransferCommission.getText());
  const transferTotalAmountInNumbers = await UApp.extractNumbersFromString(await STraTo.text_TransferTotalAmount.getText());
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n transferCommissionInNumbers = ' + transferCommissionInNumbers +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers
  // );
  // - итоговая сумма
  const amountInNumbers = Number(moneyAmount) + transferCommissionInNumbers;
  await expect(transferTotalAmountInNumbers).toStrictEqual(amountInNumbers);

  // 13.Нажать кнопку Продолжить.
  await STraTo.button_Continue.click();
  // 13.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.








return;//выдает ошибку Инвалид параметерс...







  // 14.Нажать поле ввода кода из СМС.
  await SSms.input_SmsCode.click();
  // 14.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 15.Ввести полученный код.
  const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
  await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);
  // 15.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.
  // - введенный код ?
  await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
  // - кнопка Подтвердить
  await expect(SSms.button_Continue).toBeEnabled();

  // 16.Нажать кнопку Подтвердить.
  await SSms.button_Continue.click();
  // 16.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...

});
it('ab-e-tc-05.004p: ! Transfer between your accounts/cards | Перевод между своими счетами/картами /Ошибка после нажатия кнопки Продолжить/Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить перевод денежных средств между своими счетами/картами. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступна кнопка Переводы между своими счетами/картами.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать кнопку Переводы между своими счетами/картами.
  1.1.Открыт экран (Перевод) Между своими счетами/картами, где доступны поле выбора счета/карты отправки, поле выбора счета/карты получения, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.

  2.Нажать поле выбора карты отправки.
  2.1.Открыт список карт отправки.
  3.Выбрать карту отправки из списка.
  3.1.Закрыт список карт. В поле выбора карт отправки отображается выбранная карта.

  4.Нажать поле выбора карты получения.
  4.1.Открыт список карт получения.
  5.Выбрать карту получения из списка.
  5.1.Закрыт список карт. В поле выбора карт получения отображается выбранная карта.

  6.Нажать поле ввода суммы перевода.
  6.1.Открыта клавиатура.
  7.Ввести сумму перевода.
  7.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия,( в поле итога - итоговая сумма,) кнопка Продолжить активна.

  8.Нажать кнопку Продолжить.
  8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

-?- ОШИБКА после нажатия кнопки Продолжить ---

  9.Нажать поле ввода кода из СМС.
  9.1.Открыта клавиатура.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  10.Ввести полученный код.
  10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.

  11.Нажать кнопку Подтвердить.
  11.1.Открыт экран..., где доступны...

  *
-?- узнать, как автоматически получить код из СМС, а затем использовать его
-?- продолжить автоматизацию теста, используя валидный код из СМС
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-05.004p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // const moneyAmount = '1000000';
  const moneyAmount = await UApp.generateRandomChars(6, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // * Сохранить сумму баланса карты до операции. 
  const totalBalanceBefore = await SHome.text_TotalBalanceAmount.getText();
  const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');

  // 1.Нажать кнопку Переводы между своими счетами/картами.
  await SHome.button_TransferBetweenCards.click();
  // 1.1.Открыт экран (Перевод) Между своими счетами/картами, где доступны поле выбора счета/карты отправки, поле выбора счета/карты получения, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.

  // - - - - - - - - - - - - - - - - - - - - -
  // console.log('\n\n\n' + await STraBe.button_FromCardsSelect_cardNumber.getText() + '\n\n\n');
  // console.log('\n\n\n' + await $('//*[@resource-id="com.fincube.apexbank.debug:id/fromField_transferOwnCard"]').$('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]').getText() + '\n\n\n');
  // console.log('\n\n\n' + await STraBe.button_FromCardsSelect.$('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]').getText() + '\n\n\n');
  // NO > console.log('\n\n\n' + (await STraBe.button_FromCardsSelect.STraBe.text_CardNumber).getText() + '\n\n\n');
  // - - - - - - - - - - - - - - - - - - - - -

  // 2.Нажать поле выбора карты отправки.
  await STraBe.button_FromCardsSelect.click();
  // 2.1.Открыт список карт отправки.
  // 3.Выбрать карту отправки из списка.
  // * Создать массив видимых элементов.
  let raw_array = await WCardsS.items_TextView_titleWindow_SenderSelectCard;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  let data_array = [];
  const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = WCardsS.text_ElementAttributeValue_En_Expected;
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  // - выбрать карту из списка
  await data_array[1].click();
  // 3.1.Закрыт список карт. В поле выбора карт отправки отображается выбранная карта.

  // 4.Нажать поле выбора карты получения.
  await STraBe.button_ToCardsSelect.click();
  // 4.1.Открыт список карт получения.
  // 5.Выбрать карту получения из списка.
  // * Создать массив видимых элементов.
  raw_array = await WCardsS.items_TextView_titleWindow_SenderSelectCard;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  data_array = [];
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  // - выбрать карту из списка
  await data_array[0].click();
  // 5.1.Закрыт список карт. В поле выбора карт получения отображается выбранная карта.

  // 6.Нажать поле ввода суммы перевода.
  await STraBe.input_TransferAmount.click();
  // 6.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 7.Ввести сумму перевода.
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // * Скрыть клавиатуру (добавить время для формирования значения SCard.transferTotalAmount)
  await driver.hideKeyboard();
  // 7.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение
  // const amountSeparatedThousandths = await UApp.separateThousandthsOfNumber(moneyAmount);
  // await expect(SCard.input_TransferAmount).toHaveText(amountSeparatedThousandths);
  // await expect(STraBe.input_TransferAmount).toHaveText(moneyAmount);
  let input_TransferAmount = await UApp.extractNumbersFromString(await STraBe.input_TransferAmount.getText());
  input_TransferAmount = String(input_TransferAmount);
  await expect(input_TransferAmount).toEqual(moneyAmount);
      // // - комиссия
      // // /*отладка*/ console.log('\n --> ' + 
      // //   'moneyAmount = ' + moneyAmount +
      // //   '\n .transferCommission = ' + await SCard.transferCommission.getText() +
      // //   '\n .transferTotalAmount = ' + await SCard.transferTotalAmount.getText()
      // // );
      // const transferCommissionInNumbers = await UApp.extractNumbersFromString(await text_TransferCommission.getText());
      // const transferTotalAmountInNumbers = await UApp.extractNumbersFromString(await STraBe.text_TransferTotalAmount.getText());
      // // /*отладка*/ console.log('\n --> ' + 
      // //   'moneyAmount = ' + moneyAmount +
      // //   '\n transferCommissionInNumbers = ' + transferCommissionInNumbers +
      // //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers
      // // );
      // // - итоговая сумма
      // const amountInNumbers = Number(moneyAmount) + transferCommissionInNumbers;
      // await expect(transferTotalAmountInNumbers).toStrictEqual(amountInNumbers);

  // 8.Нажать кнопку Продолжить.
  await STraBe.button_Continue.click();
  // 8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

// -?- ОШИБКА после нажатия кнопки Продолжить ---

    //   // 9.Нажать поле ввода кода из СМС.
    //   await SSms.input_SmsCode.click();
    //   // 9.1.Открыта клавиатура.
    //   await expect(await driver.isKeyboardShown()).toBe(true);

    // // -!- ТРЕБУЕТСЯ автоматически получать код из СМС ---

    //   // 10.Ввести полученный код.
    //   const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
    //   await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);
    //   // 10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.
    //   // - введенный код ?
    //   await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
    //   // - кнопка Подтвердить
    //   await expect(SSms.button_Continue).toBeEnabled();

    //   // 11.Нажать кнопку Подтвердить.
    //   await SSms.button_Continue.click();
    //   // 11.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...

});

// ab-ts-06p: Тестирование платежей |вер.20230919| /Тестов 1 (частично 1)/
it('ab-e-tc-06.001p: ! Payment for mobile communication | Оплата мобильной связи /Тест выполнен частично: требуется убрать лимит платежей/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить оплату услуг мобильной связи (с карты). <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Платежи.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать кнопку Платежи в панели навигации.
  1.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.

  2.Нажать кнопку Мобильные операторы.
  2.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  3.Нажать кнопку оператора (любого).
  3.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

  4.Нажать поле ввода номера телефона и ввести валидный номер.
  4.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.

  5.Нажать кнопку Продолжить.
  5.1.Открыт экран Платеж, где доступны поле выбора карты, поле ввода суммы платежа, неактивная кнопка Продолжить.

  6.Нажать поле выбора карты и выбрать карту (любую).
  6.1.В поле выбора карты отображается выбранная карта.

  7.Нажать поле ввода суммы платежа и ввести валидное число.
  7.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.

  8.Нажать кнопку Продолжить.
// -!- ТРЕБУЕТСЯ убрать/повысить лимит платежей --- FAILED ...превышен дневной лимит ---
  8.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.

  9.Нажать кнопку Домой.
  9.1.Открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс доступен Общий баланс, а также балансы по картам.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-06.001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  // const moneyAmount = '12000';
  const moneyAmount = await UApp.generateRandomChars(5, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // // * Сохранить сумму баланса карты до операции. 
  // const totalBalanceBefore = await SHome.text_TotalBalanceAmount.getText();
  // const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');

  // 1.Нажать кнопку Платежи в панели навигации.
  await SHome.bottomNav_Payments.click();
  // 1.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.
  // - экран Платежи
  await expect(SPay.titleScreen_Payments_Ru).toHaveText(SPay.titleScreen_Payments_Ru_Expected);

  // 2.Нажать кнопку Мобильные операторы.
  await SPay.item_MobileOperators.click();
  // 2.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  // 3.Нажать кнопку оператора (любого).
  await SPay.item_UzMobile_En.click();
  // 3.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

  // 4.Нажать поле ввода номера телефона и ввести валидный номер.
  await SPay.input_PhoneNumber.click();
  await UDev.androidKeyboardTypeIn('999664660'); // ...(phoneNumber)
  // 4.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.
  // await expect(SPay.paymentScreenInputs[0]).toHaveText('999664660'); // ...(phoneNumber)
  await expect(SPay.input_PhoneNumber).toHaveText('999664660'); // ...(phoneNumber)

  // 5.Нажать кнопку Продолжить.
  await SPay.button_Continue.click();
  // 5.1.Открыт экран Платеж, где доступны поле выбора карты, поле ввода суммы платежа, неактивная кнопка Продолжить.

  // 6.Нажать поле выбора карты и выбрать карту (любую).
  await WCardsS.button_OpenSenderCardsList.click();
  // * Открыт список карт.
  // * Создать массив видимых элементов.
  const raw_array = await WCardsS.items_TextView_titleWindow_SenderSelectCard;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  const data_array = [];
  const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected; // 'resource-id'
  const elementAttributeValue = WCardsS.text_ElementAttributeValue_En_Expected; // 'com.fincube.apexbank.debug:id/select_card_number'
  await UApp.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  // - выбрать карту из списка
  await data_array[1].click();
  // 6.1.В поле выбора карты отображается выбранная карта.

  // 7.Нажать поле ввода суммы платежа и ввести валидное число.
  await SPay.input_TransferAmount.click();
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // 7.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // await expect(SPay.paymentScreenInputs[0]).toHaveText(moneyAmount);
  // await expect(input_TransferAmount).toHaveText(moneyAmount);
  let input_TransferAmount = await UApp.extractNumbersFromString(await SPay.input_TransferAmount.getText());
  input_TransferAmount = String(input_TransferAmount);
  await expect(input_TransferAmount).toEqual(moneyAmount);
  // * Скрыть клавиатуру
  await driver.hideKeyboard();

  // 8.Нажать кнопку Продолжить.
  await SPay.button_Continue.click();
// -!- ТРЕБУЕТСЯ убрать/повысить лимит платежей --- FAILED ...превышен дневной лимит ---
  // 8.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.

  // 9.Нажать кнопку Домой.
  // 9.1.Открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс доступен Общий баланс, а также балансы по картам.



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



  // // 4.Ввести валидные данные в поля ввода.
  // await SPay.input_PhoneNumber.click();
  // await UDev.androidKeyboardTypeIn(phoneNumber);
  // await SPay.input_TransferAmount.click();
  // await UDev.androidKeyboardTypeIn(moneyAmount);
  // // 4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.
  // // await expect(SPay.input_PhoneNumber).toHaveText(phoneNumber);
  // // await expect(SPay.input_TransferAmount).toHaveText(moneyAmount);
  // // поля phone и amount имеют одинаковые id, поэтому проверяем по их порядку на экране:
  // await expect(SPay.paymentScreenInputs[0]).toHaveText(phoneNumber);
  // await expect(SPay.paymentScreenInputs[1]).toHaveText(moneyAmount);

  // // 5.Нажать кнопку Продолжить.
  // await SPay.button_Continue.click();
  // // 5.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.
  // // - поле Сумма
  // const amountSeparatedThousandths =  await UApp.separateThousandthsOfNumber(moneyAmount);
  // await expect(SPay.amount).toHaveText(amountSeparatedThousandths + ' UZS');

  // // 6.Нажать кнопку Домой.
  // await SPay.homeButton.click();
  // // 6.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  // // - вкладка Аккаунт
  // await expect(SHome.accountTabRu).toBeDisplayed();
  // // - текст Общий баланс
  // await expect(SHome.titleSection_TotalBalance_Ru).toHaveText(SHome.totalBalanceLabelRu_Expected);
  // // - сумма Общий баланс
  // await expect(SHome.text_TotalBalanceAmount).toBeDisplayed();

  // // *.Сохранить сумму баланса карты после операции. 
  // const cardBalanceAfter = await SHome.text_CardBalance.getText();

  // // *.Сумма баланса по карте уменьшена на сумму платежа.
  // const cardBalanceBeforeInNumbers = await UApp.extractNumbersFromString(cardBalanceBefore);
  // const cardBalanceAfterInNumbers = await UApp.extractNumbersFromString(cardBalanceAfter);
  // const moneyAmountInNumbers = await UApp.extractNumbersFromString(moneyAmount);
  // // /*отладка*/ console.log(
  // //   'cardBalanceBeforeInNumbers = ' + cardBalanceBeforeInNumbers +
  // //   '\n cardBalanceAfterInNumbers = ' + cardBalanceAfterInNumbers +
  // //   '\n      moneyAmountInNumbers =     ' + moneyAmountInNumbers
  // // );
  // await expect(cardBalanceAfterInNumbers).toEqual(cardBalanceBeforeInNumbers - moneyAmountInNumbers);

});

// ab-ts-07p: Тестирование истории      |вер.20230913| /Тестов 0/
// ab-ts-08p: Тестирование вкладов      |вер.20230913| /Тестов 0/
// ab-ts-09p: Тестирование микрозаймов  |вер.20230913| /Тестов 0/
// ab-ts-10p: Тестирование кошелька     |вер.20230913| /Тестов 0/
// ab-ts-11p: Тестирование курсов валют |вер.20230913| /Тестов 0/



/* EOF describe */
});

/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */