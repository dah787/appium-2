/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */
const AppUM   = require("../../utils/android/ab-app.utils");                // App utilities Model
const AuthM   = require("../../screens/android/ab-authorization.screen");   // Authorization screen Model
const CardM   = require('../../screens/android/ab-cards.screen');           // Cards screen Model
const CardsD  = require('../../data/ab-cards.data');                        // Cards Data
const DevM    = require("../../utils/android/dt-device.utils");             // Device utilities Model
const GenM    = require('../../screens/android/ab-general.screen');         // General screen Model
const HomeM   = require('../../screens/android/ab-home.screen');            // Home screen Model
const PayM    = require('../../screens/android/ab-payments.screen');        // Payments screen Model ...ServM
const SmsM    = require('../../screens/android/ab-smsCodeEnter.screen');    // Sms code enter screen Model
const TraTCM  = require('../../screens/android/ab-transferToCard.screen');  // Transfer to card screen Model

describe('ab-ts-02p: Testing of operations | Тестирование операций |вер.20230918| /Тестов 7 (частично 4)/', () => {
  let counter = 0, tcNum = '', i = 0;
  beforeEach(async () => {
    await GenM.beforeEach(counter, 'o'); // o - operation / e - e2e < typeOfTest
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

// ab-ts-04p: Тестирование карт |вер.20230913| /Тестов 4 (частично 1)/
it('ab-e-tc-04.001p: ! Adding card | Добавление карты /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
  /** > базовые тесты (см. файл Тест_Сценарий_Добавление_Карты_(Существующей_Новой)):
   * - см. AB-TC-102p: Customer authorization (ш?: П.1)
   * - 3 Всплывающее окно "Добро пожаловать в Apex Bank", кнопка "Добавить карту": Поз (ш?: 1)
   * - 30 Стр "Добав карты", ввод валид №карты (16 сим), валид даты (4 сим), валид назв карты (12 симв): Поз (ш?: 1-9)
   * - ? ... <
  > Можно добавить банковскую карту. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где доступны элементы раздела Общий баланс (если пользователь уже имеет карту банка) или раздела Карты (если пользователь пока не имеет или не добавил карту банка).
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
  *
ШАГИ:
  1а.Если пользователь пока не имеет карты: Нажать кнопку Добавить карту в разделе Карты. 
  1б.Если пользователь уже имеет карту: Нажать поле карты (любой) или кнопку Мои карты в разделе Общий баланс.
  1б.1.Открыт экран Мои карты, где доступна кнопка Добавить.
  1б.2.Нажать кнопку Добавить.
  1б.3.Нажать кнопку Добавить карту.
  1.1.Открыт экран добавления карты, где доступны поле ввода названия карты, поле ввода номера карты, поле ввода даты действительности карты и неактивная кнопка Добавить карту.

  2.Нажать поле ввода названия карты.
  2.1.Открыта клавиатура.
  3.Ввести название карты.
  3.1.В поле ввода отображается введенное значение.

  4.Нажать поле ввода номера карты.
  4.1.Открыта клавиатура.
  5.Ввести номер карты.
  5.1.В поле ввода отображается введенное значение.

  6.Нажать поле ввода даты действительности карты.
  6.1.Открыта клавиатура
  7.Ввести дату действительности карты.
  7.1.В поле ввода отображается введенное значение, кнопка Добавить карту активна.

  8.Нажать кнопку Добавить карту.
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
  tcNum = 'ab-e-tc-04.001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const randomChars = await AppUM.generateRandomChars(3, 'en');
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_5_pass;
  // const cardName = CardsD.cardName_Humo_5 + '-' + randomChars;
  // const cardNumber = CardsD.cardNumber_Humo_5;
  // const cardExpiry = CardsD.cardValidThrough_Humo_5;
  // const phoneNumber = CardsD.phoneNumber_10_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_10_pass;
  const cardName = CardsD.cardName_Humo_10 + '-' + randomChars;
  const cardNumber = CardsD.cardNumber_Humo_10;
  const cardExpiry = CardsD.cardValidThrough_Humo_10;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // ...
  if (await HomeM.addCardButton.isDisplayed()) {
    // 1а.Если пользователь пока не имеет карты: Нажать кнопку Добавить карту в разделе Карты.
    await HomeM.addCardButton.click();
  } else {
    // 1б.Если пользователь уже имеет карту: Нажать поле карты (любой) или кнопку Мои карты в разделе Общий баланс.
    await HomeM.myCardsButton.click();
    // 1б.1.Открыт экран Мои карты, где доступна кнопка Добавить.
    // 1б.2.Нажать кнопку Добавить.
    await CardM.addButtonOnMyCardsScreen.click();
    // 1б.3.Нажать кнопку Добавить карту.
    await CardM.addCardButtonOnMyCardsScreen.click();
  }
  
  // 1.1.Открыт экран добавления карты, где доступны поле ввода названия карты, поле ввода номера карты, поле ввода даты действительности карты и неактивная кнопка Добавить карту:
  // - поле ввода названия карты
  await expect(CardM.cardNameInput).toBeExisting();
  // - поле ввода номера карты
  await expect(CardM.cardNumberInput).toBeExisting();
  // - поле ввода даты действительности карты
  await expect(CardM.cardExpiryDateInput).toBeExisting();
  // - кнопка Добавить карту
  await expect(CardM.addCardButtonOnDataInputScreen).toBeExisting();

  // 2.Нажать поле ввода названия карты.
  await CardM.cardNameInput.click();
  // 2.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 3.Ввести название карты.
  await DevM.androidKeyboardTypeIn(cardName);
  // 3.1.В поле ввода отображается введенное значение.
  await expect(CardM.cardNameInput).toHaveText(cardName);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 4.Нажать поле ввода номера карты.
  await CardM.cardNumberInput.click();
  // 4.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 5.Ввести номер карты.
  await DevM.androidKeyboardTypeIn(cardNumber);
  // 5.1.В поле ввода отображается введенное значение.
  await expect(CardM.cardNumberInput).toHaveText(cardNumber);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 6.Нажать поле ввода даты действительности карты.
  await CardM.cardExpiryDateInput.click();
  // 6.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 7.Ввести дату действительности карты.
  await DevM.androidKeyboardTypeIn(cardExpiry);
  // 7.1.В поле ввода отображается введенное значение, кнопка Добавить карту активна.
  await expect(CardM.cardExpiryDateInput)
    .toHaveTextContaining(cardExpiry.substr(0, 2));
  await expect(CardM.cardExpiryDateInput)
    .toHaveTextContaining(cardExpiry.substr(3, 2));
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();
  // - кнопка Добавить карту
  await expect(CardM.addCardButtonOnDataInputScreen).toBeEnabled();

  // 8.Нажать кнопку Добавить карту.
  await CardM.addCardButtonOnDataInputScreen.click();
  await SmsM.enterSmsCodeScreenHeaderRu.waitForDisplayed({timeout: GenM.waitTime});
  // 8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить:
  // - экран Введите код из СМС
  await expect(SmsM.enterSmsCodeScreenHeaderRu)
    .toHaveText(SmsM.enterSmsCodeScreenHeaderRu_Expected);
  // - кнопка Подтвердить
  await expect(SmsM.continueButton).toBeDisabled();
  // 9.Нажать поле ввода кода из СМС.
  await SmsM.smsCodeInput.click();
  // 9.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 10.Ввести полученный код.
  const smsCode_Received = await AppUM.generateRandomChars(6);
  await DevM.androidKeyboardTypeIn(smsCode_Received);
  // 10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна:
  // - введенный код ?
  await expect(SmsM.smsCodeInput).toHaveText(smsCode_Received);
  // - кнопка Подтвердить
  await expect(SmsM.continueButton).toBeEnabled();

  // 11.Нажать кнопку Подтвердить.
  await SmsM.continueButton.click();
  // 11.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...
});
it('ab-e-tc-04.002p: ? Editing card | Редактирование карты /Отключен выбор дизайна/', async () => {
  /** > базовые тесты... <
  > Можно изменить некоторые данные банковской карты. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс отображаются карты (или одна карта) и кнопка Мои карты.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
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
  const randomChars = await AppUM.generateRandomChars(3, 'en');
  const phoneNumber = CardsD.phoneNumber_4_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_4_pass;
  const cardName = CardsD.cardName_Humo_4 + '-' + randomChars;
  // const phoneNumber = CardsD.phoneNumber_5_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_5_pass;
  // const cardName = CardsD.cardName_Humo_5 + '-' + randomChars;
  // const cardNumber = CardsD.cardNumber_Humo_5;
  // const cardExpiry = CardsD.cardValidThrough_Humo_5;
  // const phoneNumber = CardsD.phoneNumber_10_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_10_pass;
  // const cardName = CardsD.cardName_Humo_10 + '-' + randomChars;
  // const cardNumber = CardsD.cardNumber_Humo_10;
  // const cardExpiry = CardsD.cardValidThrough_Humo_10;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // 1.Нажать кнопку Мои карты в разделе Общий баланс.
    await HomeM.myCardsButton.click();
  // 1.1.Открыт экран Мои карты, где доступен список карт.

  // 2.Нажать карту из списка (любую).
  await CardM.cardViewFront.click();
  // 2.1.Открыт экран действий с картой, где доступна кнопка Свойства карты.

  // 3.Нажать кнопку Свойства карты.
  await CardM.cardSettingsButton.click();
  // 3.1.Открыт экран редактирования карты, где доступны изображение карты (с текущими дизайном, названием, балансом, именем владельца, номером, сроком действия), кнопки выбора ее дизайна, поле ввода/редактирования названия карты, кнопка Подтвердить.

  // * Создать массив существующих дизайнов карты.
  await CardM.cardBackgroundImageButton.waitForDisplayed({timeout: GenM.waitTime + 15000});
  // await CardM.waitForScreenDisplayed_cardSettingsScreen();
  let raw_array = await CardM.cardBackgroundImageButtons;
  // /*отладка*/ console.log('\n --> raw_array ' + raw_array + '\n');
  // await driver.pause(5000);

  let data_array = [];
  let elementAttributeKey = 'resource-id';
  const elementAttributeValue = 'com.fincube.apexbank.debug:id/bg_image';
  await AppUM.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // * Контролируем непустоту массива
  // await expect(data_array.length).toBeGreaterThan(0);
  if(data_array.length == 0){
    // console.log('\n --> languagesList не сформирован: data_array = ' + data_array + '\n');
    throw "не сформирован data_array (массив дизайнов карты) = '" + data_array + "'";
  }

  for(let i = 0, l = data_array.length; i < l; i++) { // for (const element of data_array) {
    // let nextElement1 = await HomeM.cardBackgroundImageButtonChecked;
    // let elementAttributeValueCurrent1 = await nextElement1.getAttribute('resource-id');
    // /*отладка*/ console.log('\n --> elementAttributeValueCurrent1 = ' + elementAttributeValueCurrent1 + '\n');

    // 4.Нажать кнопку дизайна карты (любую).


                                        // ОТКЛЮЧЕн ВЫБОР ДИЗайна
                                        // await data_array[await AppUM.generateRandomCharsOfSet(1,'012')].click(); // '012345'

    // let nextElement = await element.nextElement();
    // let elementAttributeValueCurrent = await nextElement.getAttribute('resource-id');

    // let nextElement2 = await HomeM.cardBackgroundImageButtonChecked;
    // let elementAttributeValueCurrent2 = await nextElement2.getAttribute('resource-id');
    // /*отладка*/ console.log('\n --> elementAttributeValueCurrent2 = ' + elementAttributeValueCurrent2 + '\n');
  }
  // 4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.
  // -?- непонятно что проверять, т.к. атрибуты элемента не меняются

  // 5.Нажать поле ввода названия карты.
  await CardM.cardNameEdit.click();
  // 5.1.Открыта клавиатура. Курсор установлен в конце текущего названия.

  // * Запомнить название и номер карты
    // * Прокрутить до элемента
    await $(`android=${CardM.scrollToElement_Up}`);
  const cardName_Initial = await CardM.cardViewFrontName.getText();
  const cardNumber = await CardM.cardViewFrontNumber.getText();
  // /*отладка*/ console.log(
  //   '\n' + cardName_Initial + ' = cardName_Initial... of card' +
  //   '\n' + cardNumber + ' = cardNumber' +
  //   '\n');
  // /*отладка*/ await driver.pause(5000);

  // 6.Изменить название карты.
  // await DevM.androidKeyboardTypeIn('-123');
  await DevM.androidKeyboardTypeIn(randomChars);
  // 6.1.Измененное значение отображается:
  // - в поле ввода;
  await expect(CardM.cardNameEdit).toHaveText(cardName_Initial + randomChars);
  // - на изображении карты.
    // * Прокрутить до элемента
    await $(`android=${CardM.scrollToElement_Up}`);
  await expect(CardM.cardViewFrontName).toHaveText(cardName_Initial + randomChars);
    // * hide keyboard (закрывает следующие элементы)
    await driver.hideKeyboard();

  // 7.Удалить название карты.
  // * Очистить поле ввода
  // await CardM.cardNameEdit.clearValue();
  await CardM.cardNameEditClearButton.click();
  // 7.1.Пустое значение отображается:
  // - в поле ввода;
  await expect(CardM.cardNameEdit).toHaveText(''); // 'Название карты'
  // - на изображении карты.
  await expect(CardM.cardViewFrontName).toHaveText(''); // .not.toBeExisting();

  // 8.Ввести название карты, нажав поле ввода названия карты.
  await CardM.cardNameEdit.click();
  await DevM.androidKeyboardTypeIn(cardName);
      // * hide keyboard (закрывает следующие элементы)
      await driver.hideKeyboard();
  // 8.1.Введенное значение отображается:
  // - в поле ввода;
  await expect(CardM.cardNameEdit).toHaveText(cardName);
  // - на изображении карты.
    // * Прокрутить до элемента
    // if(!(await CardM.cardViewFrontName).isDisplayedInViewport) {
      await $(`android=${CardM.scrollToElement_Up}`);
    // }
  await expect(CardM.cardViewFrontName).toHaveText(cardName);

  // 9.Нажать кнопку Подтвердить.
  await CardM.confirmButton.click();
  // 9.1.Открыт экран действий с картой, всплывает сообщение Changed!
  // await expect(CardM.confirmButton).toBeDisabled(); // - отключено 24.05.2023, т.к. при проверке опять активируется!
  await CardM.cardSettingsButton.waitForDisplayed({timeout: GenM.waitTime});

  // 10.Вернуться на экран Мои карты, нажимая кнопку Назад.
  await DevM.androidPressBackButton(1);
  await CardM.cardViewFrontNameOnMyCardsScreen.waitForDisplayed({timeout: GenM.waitTime + 15000});
  // CardM.waitForScreenDisplayed_myCardsScreen();
  // *.Создать массив элементов.
  raw_array = await CardM.cardsBlockItems;
  data_array = [];
  elementAttributeKey = 'resource-id';
  // /*отладка*/ console.log('\n --> raw_array в ab-e-tc-004p №2 = ' + raw_array + '\n');
  const elementAttributeValue_1 = 'com.fincube.apexbank.debug:id/tvCardName';
  const elementAttributeValue_2 = 'com.fincube.apexbank.debug:id/tvCardNumber';
  await AppUM.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1, elementAttributeValue_2);
  // /*отладка*/ console.log('\n --> data_array в ab-e-tc-004p №2 = ' + data_array + '\n');
  // /*отладка*/ await driver.pause(5000);
  // * Контролируем непустоту массива
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
      await expect(data_array[i-1]).toHaveText(cardName); // expect(CardM.cardViewFrontName).
    }
  }
});
it('ab-e-tc-04.003p: ? Checking balance | Проверка баланса /ошибка суммы/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно проверить балансы карт и общий баланс. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс отображаются карты (или одна карта), их балансы, кнопка Мои карты.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
  *
ШАГИ:
  1.Обратить внимание на баланс каждой карты.
  1.1.Отображается баланс каждой карты.

  2.Обратить внимание на общий баланс.
  2.1.Отображается общий баланс, равный сумме балансов всех карт.

  3.Нажать кнопку Мои карты в разделе Общий баланс.
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
  // * Создать массив видимых элементов.
  let raw_array = await HomeM.cardsBlockItems;
  let data_array = [];
  const elementAttributeKey = 'resource-id';
  const elementAttributeValue_1 = 'com.fincube.apexbank.debug:id/tvCardName';
  // const elementAttributeValue_2 = 'com.fincube.apexbank.debug:id/tvCardBalance';
  // const elementAttributeValue_3 = 'com.fincube.apexbank.debug:id/tvCardNumber';
  // const elementAttributeValue_4 = 'com.fincube.apexbank.debug:id/tvCardDate';
  
  await AppUM.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1/*, elementAttributeValue_2, elementAttributeValue_3, elementAttributeValue_4*/);

  // * Прокрутить, делая видимыми следующие элементы
  await $(`android=${HomeM.scrollToElement_Right}`);

  // * Создать массив видимых элементов.
  raw_array = await HomeM.cardsBlockItems;
  await AppUM.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1);

  // * Контролируем непустоту массива
  // await expect(data_array.length).toBeGreaterThan(0);
  if(data_array.length == 0){
    // console.log('\n --> languagesList не сформирован: data_array = ' + data_array + '\n');
    throw "не сформирован data_array (массив-1 балансов карт) = '" + data_array + "'";
  }
  // 1.1.Отображается баланс каждой карты.
  let cardBalanceAmountText = '';
  let cardBalance = 0;
  let cardsBalanceAmountTotal = 0;
  for (const element of data_array) {
    // cardBalanceAmountText = await element.getText();
    cardBalanceAmountText = await element.key_2; // key_2 - сумма
    cardBalance = await AppUM.extractNumbersFromString(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.key_2 + '\n');
  }
  cardsBalanceAmountTotal = await AppUM.roundNumber(cardsBalanceAmountTotal, 2);
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal = ' + cardsBalanceAmountTotal + '\n');

  // 2.Обратить внимание на общий баланс.
  // 2.1.Отображается общий баланс, равный сумме балансов всех карт.
  let totalBalance = await HomeM.totalBalance.getText();
  totalBalance = await AppUM.extractNumbersFromString(totalBalance);
  // /*отладка*/ console.log('\n --> totalBalance = ' + totalBalance + '\n');



                                                          await expect(totalBalance).not.toEqual(cardsBalanceAmountTotal);
  // 3.Нажать кнопку Мои карты в разделе Общий баланс.
  await HomeM.myCardsButton.click();
  // 3.1.Открыт экран Мои карты, где доступен список карт.
  // - список карт /...ждем первую карту/
  await CardM.cardBalance.waitForDisplayed({timeout: GenM.waitTime});

  // 4.Обратить внимание на баланс каждой карты.
  // *.Создать массив видимых элементов.
  raw_array = await CardM.cardsBlockItems;
  data_array = [];
  await AppUM.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1);

  // * Прокрутить, делая видимыми следующие элементы
  await $(`android=${AppUM.scrollForward}`);
 
  // * Создать массив видимых элементов.
  raw_array = await CardM.cardsBlockItems;
  await AppUM.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1);

  // * Контролируем непустоту массива
  if(data_array.length == 0){
    throw "не сформирован data_array (массив-2 балансов карт) = '" + data_array + "'";
  }
  
  // 4.1.Отображается баланс каждой карты.
  cardBalanceAmountText = '';
  cardBalance = 0;
  cardsBalanceAmountTotal = 0;
  for (const element of data_array) {
    // cardBalanceAmountText = await element.getText();
    cardBalanceAmountText = await element.key_2; // key_2 - сумма
    cardBalance = await AppUM.extractNumbersFromString(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.key_2 + '\n');
  }
  cardsBalanceAmountTotal = await AppUM.roundNumber(cardsBalanceAmountTotal, 2);
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal = ' + cardsBalanceAmountTotal + '\n');
  // 4.2.Сумма балансов всех карт равна общему балансу.



                                                          await expect(totalBalance).not.toEqual(cardsBalanceAmountTotal);
});
it('ab-u-tc-04.004p: Hide/Show balance | Скрыть/Показать баланс', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно скрыть/показать баланс по картам и общий баланс. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс отображаются карты (или одна карта) и их балансы, кнопка Показать/Скрыть баланс.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
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
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;

  // Пред.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);
  
  // 1.Обратить внимание на общий баланс и баланс каждой карты.
  // 1.1.Отображаются соответствующие балансы.
  const totalBalance = await HomeM.totalBalance.getText();
  const cardBalance = await HomeM.cardBalance.getText();

  // 2.Нажать кнопку Показать/Скрыть баланс.
  await HomeM.showHideAmountButton.click();
  // await HomeM.cardBalance.waitForDisplayed({timeout: 5000});
  // 2.1.Вместо балансов отображаются символы звездочек (могут отображаться другие подобные символы).
  await expect(HomeM.totalBalance).toHaveTextContaining(HomeM.totalBalanceHidingSymbols);
  await expect(HomeM.cardBalance).toHaveTextContaining(HomeM.cardBalanceHidingSymbols);
  // /*отладка*/ console.log(
  //   '\n-> ' + await HomeM.totalBalance.getText()  + ' = await HomeM.totalBalance.getText();'  +
  //   '\n-> ' + HomeM.balanceHidingSymbols          + ' = HomeM.balanceHidingSymbols'           +
  //   '\n-> ' + await HomeM.cardBalance.getText()   + ' = await HomeM.cardBalance.getText();'   +
  //   '\n-> ' + HomeM.balanceHidingSymbols          + ' = HomeM.balanceHidingSymbols'           + '\n');

  // 3.Нажать кнопку Показать/Скрыть баланс.
  await HomeM.showHideAmountButton.click();
  // 3.1.Отображаются соответствующие балансы (вместо символов звездочек или других подобных).
  await expect(await HomeM.totalBalance.getText()).toEqual(totalBalance);
  await expect(await HomeM.cardBalance.getText()).toEqual(cardBalance);
  // /*отладка*/ console.log(
  //   '\n-> ' + await HomeM.totalBalance.getText()  + ' = await HomeM.totalBalance.getText();'  +
  //   '\n-> ' + totalBalance                        + ' = totalBalance'                         +
  //   '\n-> ' + await HomeM.cardBalance.getText()   + ' = await HomeM.cardBalance.getText();'   +
  //   '\n-> ' + cardBalance                         + ' = cardBalance'                          + '\n');
});

// ab-ts-05p: Тестирование переводов |вер.20230913| /Тестов 1 (частично 1)/
it('ab-e-tc-05.001p: ! Transfer to card by card number | Перевод на карту по номеру карты /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить перевод денежных средств с карты на карту по номеру карты. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступно поле ввода данных получателя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
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
  // const phoneNumber = CardsD.phoneNumber_1_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_1_pass;
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;
  // const cardName = CardsD.cardName_Humo_5;
  // const cardNumber = CardsD.cardNumber_Humo_5;
  // const cardExpiry = CardsD.cardValidThrough_Humo_5;
  // const phoneNumber = CardsD.phoneNumber_10_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_10_pass;
  // const cardName = CardsD.cardName_Humo_10;
  // const cardNumber = CardsD.cardNumber_Humo_10;
  // const cardExpiry = CardsD.cardValidThrough_Humo_10;
  const cardNumber_Receiver = CardsD.cardNumber_Humo_10;
  // const moneyAmount = '1000000';
  const moneyAmount = await AppUM.generateRandomChars(6, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // *.Сохранить сумму баланса карты до операции. 
  const cardBalanceBefore = await HomeM.cardBalance.getText();

  // 1.Нажать поле ввода данных получателя в разделе Переводы.
  await HomeM.receiverDataInput.click();
  // 1.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 2.Ввести номер карты получателя.
  await DevM.androidKeyboardTypeIn(cardNumber_Receiver);
  // 2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.
  await expect(HomeM.receiverDataInput).toHaveText(cardNumber_Receiver);
  await HomeM.sendButton.waitForDisplayed({timeout: GenM.waitTime + 5000});

  // 3.Нажать кнопку отправки.
  await HomeM.sendButton.click();
  // 3.1.Открыт экран Перевод на карту, где доступны поле выбора карты отправителя, поле номера карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.
  await expect(TraTCM.transferToCardScreenHeaderRu).toHaveText(TraTCM.transferToCardScreenHeaderRu_Expected);

  // 4.Нажать поле выбора карты.
  await TraTCM.senderCardsSelectButton.click();
  // 4.1.Открыт список карт отправителя.
  // 5.Выбрать карту отправителя из списка.
  // * Создать массив видимых элементов.
  let raw_array = await TraTCM.senderCardsList;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  let data_array = [];
  let elementAttributeKey = 'resource-id';
  const elementAttributeValue = 'com.fincube.apexbank.debug:id/select_card_number';
  await AppUM.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  await data_array[1].click();
  // 5.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  // 6.Нажать поле ввода суммы перевода.
  await TraTCM.transferAmountInput.click();
  // 6.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 7.Ввести сумму перевода.
  await DevM.androidKeyboardTypeIn(moneyAmount);
  // * Скрыть клавиатуру (добавить время для формирования значения CardM.transferTotalAmount)
  await driver.hideKeyboard();
  // 7.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение,
  // const amountSeparatedThousandths = await AppUM.separateThousandthsOfNumber(moneyAmount);
  // await expect(CardM.transferAmountInput).toHaveText(amountSeparatedThousandths);
  await expect(TraTCM.transferAmountInput).toHaveText(moneyAmount);
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await CardM.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await CardM.transferTotalAmount.getText()
  // );
  const transferCommissionInNumbers = await AppUM.extractNumbersFromString(await TraTCM.transferCommission.getText());
  const transferTotalAmountInNumbers = await AppUM.extractNumbersFromString(await TraTCM.transferTotalAmount.getText());
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n transferCommissionInNumbers = ' + transferCommissionInNumbers +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers
  // );
  // - итоговая сумма
  const amountInNumbers = Number(moneyAmount) + transferCommissionInNumbers;
  await expect(transferTotalAmountInNumbers).toStrictEqual(amountInNumbers);

  // 8.Нажать кнопку Продолжить.
  await TraTCM.continueButton.click();
  // 8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

  // 9.Нажать поле ввода кода из СМС.
  await SmsM.smsCodeInput.click();
  // 9.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 10.Ввести полученный код.
  const smsCode_Received = await AppUM.generateRandomChars(6);
  await DevM.androidKeyboardTypeIn(smsCode_Received);
  // 10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.
  // - введенный код ?
  await expect(SmsM.smsCodeInput).toHaveText(smsCode_Received);
  // - кнопка Подтвердить
  await expect(SmsM.continueButton).toBeEnabled();

  // 11.Нажать кнопку Подтвердить.
  await SmsM.continueButton.click();
  // 11.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...



return;


  
  // 9.Нажать кнопку Продолжить.
  await CardM.continueButtonOnTransferToCardScreen.click();
  // 9.1.Открыт экран Перевод на карту-2, где доступны изображение карты отправителя, номер карты получателя, сумма перевода, кнопка Перевод.
  // - экран Перевод на карту
  await expect(CardM.transferToCardScreenHeaderRu).toHaveText(CardM.transferToCardScreenHeaderRu_Expected);
  // - изображение карты отправителя
  await expect(CardM.cardSenderDetailsArea).toBeDisplayed();
  // - номер карты получателя
  await expect(CardM.cardReceiverNumber).toBeDisplayed();
  // - сумма перевода
  // await expect(CardM.transferAmount).toBeDisplayed();
  await expect(CardM.transferAmount).toHaveText(amountSeparatedThousandths + '.0 UZS');
  // - кнопка Перевод
  await expect(CardM.continueButtonOnTransferToCardScreen).toBeDisplayed();

  // 10.Нажать кнопку Перевод.
  await CardM.continueButtonOnTransferToCardScreen.click();
  // 10.1.Открыт экран чека перевода на карту, где доступны поле Сумма, кнопка Домой.
  // - поле Сумма
  // const amountSeparatedThousandths =  await AppUM.separateThousandthsOfNumber(moneyAmount);
  // await expect(CardM.amount).toHaveText(amountSeparatedThousandths + ' UZS');

  // 11.Нажать кнопку Домой.
  await CardM.homeButton.click();
  // 11.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  // - вкладка Аккаунт
  await expect(HomeM.accountTabRu).toBeDisplayed();
  // - текст Общий баланс
  await expect(HomeM.totalBalanceLabelRu).toHaveText(HomeM.totalBalanceLabelRu_Expected);
  // - сумма Общий баланс
  await expect(HomeM.totalBalance).toBeDisplayed();

  // *.Сохранить сумму баланса карты после операции. 
  const cardBalanceAfter = await HomeM.cardBalance.getText();

  // *.Сумма баланса по карте уменьшена на сумму платежа.
  const cardBalanceBeforeInNumbers = await AppUM.extractNumbersFromString(cardBalanceBefore);
  const cardBalanceAfterInNumbers = await AppUM.extractNumbersFromString(cardBalanceAfter);
  const moneyAmountInNumbers = await AppUM.extractNumbersFromString(moneyAmount);
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
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
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
  // const phoneNumber = CardsD.phoneNumber_1_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_1_pass;
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;
  // const cardName = CardsD.cardName_Humo_5;
  // const cardNumber = CardsD.cardNumber_Humo_5;
  // const cardExpiry = CardsD.cardValidThrough_Humo_5;
  // const phoneNumber = CardsD.phoneNumber_10_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_10_pass;
  // const cardName = CardsD.cardName_Humo_10;
  // const cardNumber = CardsD.cardNumber_Humo_10;
  // const cardExpiry = CardsD.cardValidThrough_Humo_10;
  const phoneNumber_Receiver = CardsD.phoneNumber_4_hasCards;
  // const moneyAmount = '1000000';
  const moneyAmount = await AppUM.generateRandomChars(6, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // *.Сохранить сумму баланса карты до операции. 
  const cardBalanceBefore = await HomeM.cardBalance.getText();

  // 1.Нажать поле ввода данных получателя в разделе Переводы.
  await HomeM.receiverDataInput.click();
  // 1.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 2.Ввести номер телефона получателя.

  await DevM.androidKeyboardTypeIn('998' + phoneNumber_Receiver); // если первые цифры номера 998, то перед таким номером нужно добавить 998

  // 2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.
  // - активная кнопка отправки
  await HomeM.sendButton.waitForDisplayed({timeout: GenM.waitTime + 5000});

  // 3.Нажать кнопку отправки.
  await HomeM.sendButton.click();
  // 3.1.Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступно поле выбора банка получателя.
  // - окно Выберите банк
  await expect(TraTCM.receiverSelectBankWindowHeaderRu).toHaveText(TraTCM.receiverSelectBankWindowHeaderRu_Expected);

  // 4.Нажать поле выбора банка получателя.
  await TraTCM.receiverBankSelection.click();
  // 4.1.Открыт список банков.
  // 5.Выбрать банк получателя из списка.
  // 5.1.Закрыт список банков. В окне Выберите банк отображается список карт получателя.
  // 6.Выбрать карту получателя из списка.
  await TraTCM.receiverCardSelectionCheck.click();
  // 6.1.Закрыты список карт и окно Выберите банк. В поле выбора карты получателя отображается выбранная карта.

  // 7.Нажать поле выбора карты отправителя.
  await TraTCM.senderCardsSelectButton.click();
  // 7.1.Открыт список карт отправителя.
  // 8.Выбрать карту отправителя из списка.
  // * Создать массив видимых элементов.
  let raw_array = await TraTCM.senderCardsList;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  let data_array = [];
  let elementAttributeKey = 'resource-id';
  const elementAttributeValue = 'com.fincube.apexbank.debug:id/select_card_number';
  await AppUM.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  await data_array[1].click();
  // 8.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  // 9.Нажать поле ввода суммы перевода.
  await TraTCM.transferAmountInput.click();
  // 9.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 10.Ввести сумму перевода.
  await DevM.androidKeyboardTypeIn(moneyAmount);
  // * Скрыть клавиатуру (добавить время для формирования значения CardM.transferTotalAmount)
  await driver.hideKeyboard();
  // 10.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение
  // const amountSeparatedThousandths = await AppUM.separateThousandthsOfNumber(moneyAmount);
  // await expect(CardM.transferAmountInput).toHaveText(amountSeparatedThousandths);
  await expect(TraTCM.transferAmountInput).toHaveText(moneyAmount);
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await CardM.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await CardM.transferTotalAmount.getText()
  // );
  const transferCommissionInNumbers = await AppUM.extractNumbersFromString(await TraTCM.transferCommission.getText());
  const transferTotalAmountInNumbers = await AppUM.extractNumbersFromString(await TraTCM.transferTotalAmount.getText());
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n transferCommissionInNumbers = ' + transferCommissionInNumbers +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers
  // );
  // - итоговая сумма
  const amountInNumbers = Number(moneyAmount) + transferCommissionInNumbers;
  await expect(transferTotalAmountInNumbers).toStrictEqual(amountInNumbers);

  // 11.Нажать кнопку Продолжить.
  await TraTCM.continueButton.click();
  // 11.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

  // 12.Нажать поле ввода кода из СМС.
  await SmsM.smsCodeInput.click();
  // 12.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 13.Ввести полученный код.
  const smsCode_Received = await AppUM.generateRandomChars(6);
  await DevM.androidKeyboardTypeIn(smsCode_Received);
  // 13.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.
  // - введенный код ?
  await expect(SmsM.smsCodeInput).toHaveText(smsCode_Received);
  // - кнопка Подтвердить
  await expect(SmsM.continueButton).toBeEnabled();

  // 14.Нажать кнопку Подтвердить.
  await SmsM.continueButton.click();
  // 14.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...

});
it('ab-e-tc-05.003p: ! Transfer to card by phone number from contacts | Перевод на карту по номеру телефона из контактов /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить перевод денежных средств с карты на карту по номеру телефона из контактов. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступно поле ввода данных получателя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
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
  // const phoneNumber = CardsD.phoneNumber_1_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_1_pass;
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;
  // const cardName = CardsD.cardName_Humo_5;
  // const cardNumber = CardsD.cardNumber_Humo_5;
  // const cardExpiry = CardsD.cardValidThrough_Humo_5;
  // const phoneNumber = CardsD.phoneNumber_10_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_10_pass;
  // const cardName = CardsD.cardName_Humo_10;
  // const cardNumber = CardsD.cardNumber_Humo_10;
  // const cardExpiry = CardsD.cardValidThrough_Humo_10;
  // const phoneNumber_Receiver = CardsD.phoneNumber_4_hasCards;
  const receiverName = 'Апекс';
  // const moneyAmount = '1000000';
  const moneyAmount = await AppUM.generateRandomChars(6, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // *.Сохранить сумму баланса карты до операции. 
  const cardBalanceBefore = await HomeM.cardBalance.getText();

  // 1.Нажать кнопку Контакты в разделе Переводы.
  await HomeM.contactsButton.click();
  // 1.1.Открыт экран устройства Выберите контакт, где доступны список контактов и кнопка Поиск контактов.
  
  // 2.Нажать кнопку Поиск контактов.
  await DevM.contactsSearchButton.click();
  // 2.1.Открыто поле ввода поиска контактов.

  // 3.Нажать поле ввода поиска контактов.
  await DevM.contactsSearchInput.click();
  // 3.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

  // 4.Ввести запрос поиска требуемого контакта.
  await DevM.contactsSearchInput.addValue(receiverName);
  // 4.1.В поле ввода отображается введенный запрос, список контактов отфильтрован соответственно запросу.

  // 5.Нажать элемент требуемого контакта.
  await DevM.contactName.click();
  // 5.1.Закрыт экран Выберите контакт. Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступно поле выбора банка получателя.
  // - окно Выберите банк
  await expect(TraTCM.receiverSelectBankWindowHeaderRu).toHaveText(TraTCM.receiverSelectBankWindowHeaderRu_Expected);

  // 6.Нажать поле выбора банка получателя.
  await TraTCM.receiverBankSelection.click();
  // 6.1.Открыт список банков.
  // 7.Выбрать банк получателя из списка.
  // 7.1.Закрыт список банков. В окне Выберите банк отображается список карт получателя.
  // 8.Выбрать карту получателя из списка.
  await TraTCM.receiverCardSelectionCheck.click();
  // 8.1.Закрыты список карт и окно Выберите банк. В поле выбора карты получателя отображается выбранная карта.

  // 9.Нажать поле выбора карты отправителя.
  await TraTCM.senderCardsSelectButton.click();
  // 9.1.Открыт список карт отправителя.
  // 10.Выбрать карту отправителя из списка.
  // * Создать массив видимых элементов.
  let raw_array = await TraTCM.senderCardsList;
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array);
  let data_array = [];
  let elementAttributeKey = 'resource-id';
  const elementAttributeValue = 'com.fincube.apexbank.debug:id/select_card_number';
  await AppUM.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> data_array = ' + data_array);
  // * Контролируем непустоту массива
  if(data_array.length == 0){
    throw "не сформирован data_array (массив карт) = '" + data_array + "'";
  }
  await data_array[1].click();
  // 10.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  // 11.Нажать поле ввода суммы перевода.
  await TraTCM.transferAmountInput.click();
  // 11.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 12.Ввести сумму перевода.
  await DevM.androidKeyboardTypeIn(moneyAmount);
  // * Скрыть клавиатуру (добавить время для формирования значения CardM.transferTotalAmount)
  await driver.hideKeyboard();
  // 12.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение
  // const amountSeparatedThousandths = await AppUM.separateThousandthsOfNumber(moneyAmount);
  // await expect(CardM.transferAmountInput).toHaveText(amountSeparatedThousandths);
  await expect(TraTCM.transferAmountInput).toHaveText(moneyAmount);
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await CardM.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await CardM.transferTotalAmount.getText()
  // );
  const transferCommissionInNumbers = await AppUM.extractNumbersFromString(await TraTCM.transferCommission.getText());
  const transferTotalAmountInNumbers = await AppUM.extractNumbersFromString(await TraTCM.transferTotalAmount.getText());
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n transferCommissionInNumbers = ' + transferCommissionInNumbers +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers
  // );
  // - итоговая сумма
  const amountInNumbers = Number(moneyAmount) + transferCommissionInNumbers;
  await expect(transferTotalAmountInNumbers).toStrictEqual(amountInNumbers);

  // 13.Нажать кнопку Продолжить.
  await TraTCM.continueButton.click();
  // 13.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

  // 14.Нажать поле ввода кода из СМС.
  await SmsM.smsCodeInput.click();
  // 14.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 15.Ввести полученный код.
  const smsCode_Received = await AppUM.generateRandomChars(6);
  await DevM.androidKeyboardTypeIn(smsCode_Received);
  // 15.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.
  // - введенный код ?
  await expect(SmsM.smsCodeInput).toHaveText(smsCode_Received);
  // - кнопка Подтвердить
  await expect(SmsM.continueButton).toBeEnabled();

  // 16.Нажать кнопку Подтвердить.
  await SmsM.continueButton.click();
  // 16.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...

});

// ab-ts-06p: Тестирование платежей |вер.20230913| /Тестов 1 (частично 1)/
it('ab-e-tc-06.001p: ! Payment for mobile communication | Платеж за мобильную связь /Тест выполнен частично: требуется убрать лимит платежей/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить платеж за услуги мобильной связи с карты. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Платежи.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в GenM.afterEach).
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
  5.1.Открыт экран Платеж, где доступны поле выбора карты, поле ввода суммы платежа, поле комиссии, неактивная кнопка Продолжить.

  6.Нажать поле выбора карты и выбрать карту (любую).
  6.1.В поле выбора карты отображается выбранная карта.

  7.Нажать поле ввода суммы платежа и ввести валидное число.
  7.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.

  8.Нажать кнопку Продолжить.
// --- ТРЕБУЕТСЯ убрать/повысить лимит платежей --- FAILED ...превышен дневной лимит ---
  8.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.

  9.Нажать кнопку Домой.
  9.1.Открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс доступен Общий баланс, а также балансы по картам.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-06.001p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = CardsD.phoneNumber_4_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_4_pass;
  // const moneyAmount = '12000';
  const moneyAmount = await AppUM.generateRandomChars(5, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // *.Сохранить сумму баланса карты до операции. 
  // const cardBalanceBefore = await HomeM.cardBalance.getText();

  // 1.Нажать кнопку Платежи в панели навигации.
  await HomeM.servicesNavigationTab.click();
  // 1.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.
  // - экран Платежи
  await expect(PayM.paymentsScreenHeaderRu).toHaveText(PayM.paymentsScreenHeaderRu_Expected);

  // 2.Нажать кнопку Мобильные операторы.
  await PayM.mobileOperatorButton.click();
  // 2.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  // 3.Нажать кнопку оператора (любого).
  await PayM.uzMobileOperatorButton.click();
  // 3.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

  // 4.Нажать поле ввода номера телефона и ввести валидный номер.
  await PayM.phoneNumberInput.click();
  await DevM.androidKeyboardTypeIn('999664660'); // ...(phoneNumber)
  // 4.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.
  await expect(PayM.paymentScreenInputs[0]).toHaveText('999664660'); // ...(phoneNumber)

  // 5.Нажать кнопку Продолжить.
  await PayM.continueButton.click();
  // 5.1.Открыт экран Платеж, где доступны поле выбора карты, поле ввода суммы платежа, поле комиссии, неактивная кнопка Продолжить.

  // 6.Нажать поле выбора карты и выбрать карту (любую).
  await PayM.cardSelection.click();
  // * Открыт список карт (отправителя).
  await PayM.cardSelectionCheck.waitForDisplayed({timeout: GenM.waitTime});
  // - выбрать карту из списка
  await PayM.cardSelectionCheck.click();
  // 6.1.В поле выбора карты отображается выбранная карта.

  // 7.Нажать поле ввода суммы платежа и ввести валидное число.
  await PayM.amountInput.click();
  await DevM.androidKeyboardTypeIn(moneyAmount);
  // 7.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.
  await expect(PayM.paymentScreenInputs[0]).toHaveText(moneyAmount);
  // * Скрыть клавиатуру
  await driver.hideKeyboard();

  // 8.Нажать кнопку Продолжить.
  await PayM.continueButton.click();
// --- ТРЕБУЕТСЯ убрать/повысить лимит платежей --- FAILED ...превышен дневной лимит ---
  // 8.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.

  // 9.Нажать кнопку Домой.
  // 9.1.Открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс доступен Общий баланс, а также балансы по картам.



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



  // // 4.Ввести валидные данные в поля ввода.
  // await PayM.phoneNumberInput.click();
  // await DevM.androidKeyboardTypeIn(phoneNumber);
  // await PayM.amountInput.click();
  // await DevM.androidKeyboardTypeIn(moneyAmount);
  // // 4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.
  // // await expect(PayM.phoneNumberInput).toHaveText(phoneNumber);
  // // await expect(PayM.amountInput).toHaveText(moneyAmount);
  // // поля phone и amount имеют одинаковые id, поэтому проверяем по их порядку на экране:
  // await expect(PayM.paymentScreenInputs[0]).toHaveText(phoneNumber);
  // await expect(PayM.paymentScreenInputs[1]).toHaveText(moneyAmount);

  // // 5.Нажать кнопку Продолжить.
  // await PayM.continueButton.click();
  // // 5.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.
  // // - поле Сумма
  // const amountSeparatedThousandths =  await AppUM.separateThousandthsOfNumber(moneyAmount);
  // await expect(PayM.amount).toHaveText(amountSeparatedThousandths + ' UZS');

  // // 6.Нажать кнопку Домой.
  // await PayM.homeButton.click();
  // // 6.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  // // - вкладка Аккаунт
  // await expect(HomeM.accountTabRu).toBeDisplayed();
  // // - текст Общий баланс
  // await expect(HomeM.totalBalanceLabelRu).toHaveText(HomeM.totalBalanceLabelRu_Expected);
  // // - сумма Общий баланс
  // await expect(HomeM.totalBalance).toBeDisplayed();

  // // *.Сохранить сумму баланса карты после операции. 
  // const cardBalanceAfter = await HomeM.cardBalance.getText();

  // // *.Сумма баланса по карте уменьшена на сумму платежа.
  // const cardBalanceBeforeInNumbers = await AppUM.extractNumbersFromString(cardBalanceBefore);
  // const cardBalanceAfterInNumbers = await AppUM.extractNumbersFromString(cardBalanceAfter);
  // const moneyAmountInNumbers = await AppUM.extractNumbersFromString(moneyAmount);
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



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
it.skip('ab-o-d-001: Debug > JavaScript heap out of memory', async () => {
/*
  Из-за .toContain (см. п.2.1), следующего после ввода номера (см. п.2), при вводе номера не вводится последний знак числа (любой длины) и возникает ошибка (см. <--- Last few GCs --->)
*/
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-o-d-001';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // 1.Нажать поле ввода данных получателя в разделе Переводы.
  await HomeM.receiverDataInput.click();
  // 2.Ввести номер телефона получателя.
  await DevM.androidKeyboardTypeIn('998998877218');
  
  /*
  <--- Last few GCs --->
  [0-0]
  [0-0] [21052:0000026EE2076FB0]    68485 ms: Scavenge 2036.5 (2073.7) -> 2036.5 (2078.5) MB, 3.3 / 0.0 ms  (average mu = 0.169, current mu = 0.115) allocation failure
  [0-0] [21052:0000026EE2076FB0]    68493 ms: Scavenge 2039.4 (2078.5) -> 2039.5 (2079.5) MB, 6.3 / 0.0 ms  (average mu = 0.169, current mu = 0.115) allocation failure
  [0-0] [21052:0000026EE2076FB0]    68507 ms: Scavenge 2040.3 (2079.5) -> 2040.1 (2090.5) MB, 11.9 / 0.0 ms  (average mu = 0.169, current mu = 0.115) allocation failure
  [0-0]
  [0-0]
  [0-0] <--- JS stacktrace --->
  [0-0]
  [0-0] FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
  [0-0]  1: 00007FF7B868158F v8::internal::CodeObjectRegistry::~CodeObjectRegistry+122159
  [0-0]  2: 00007FF7B860B326 DSA_meth_get_flags+64118
  [0-0]  3: 00007FF7B860C3A2 DSA_meth_get_flags+68338
  [0-0]  4: 00007FF7B8F42374 v8::Isolate::ReportExternalAllocationLimitReached+116
  [0-0]  5: 00007FF7B8F2C93D v8::SharedArrayBuffer::Externalize+781
  [0-0]  6: 00007FF7B8DCFEBC v8::internal::Heap::EphemeronKeyWriteBarrierFromCode+1468
  [0-0]  7: 00007FF7B8DDCB69 v8::internal::Heap::PublishPendingAllocations+1129
  [0-0]  8: 00007FF7B8DD9B3A v8::internal::Heap::PageFlagsAreConsistent+2842
  [0-0]  9: 00007FF7B8DCC799 v8::internal::Heap::CollectGarbage+2137
  [0-0] 10: 00007FF7B8DD505B v8::internal::Heap::GlobalSizeOfObjects+331
  [0-0] 11: 00007FF7B8E1B7EB v8::internal::StackGuard::HandleInterrupts+891
  [0-0] 12: 00007FF7B8B23F86 v8::internal::DateCache::Weekday+8630
  [0-0] 13: 00007FF7B8FD0051 v8::internal::SetupIsolateDelegate::SetupHeap+494417
  [0-0] 14: 0000026EE3F658CA
  */

  // 2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.
  await expect(HomeM.receiverDataInput).toContain('998998877218');

});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/* EOF describe */
});

/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */