/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */
const DCard   = require('../../data/ab-cards.data');                        // data > Cards

const SAuth   = require("../../screens/android/ab-authorization.screen");   // screen > Authorization
const SCards  = require('../../screens/android/ab-cards.screen');           // screen > Cards
const SGen    = require('../../screens/android/ab-general.screen');         // screen > General
const SHome   = require('../../screens/android/ab-home.screen');            // screen > Home
const SPay    = require('../../screens/android/ab-payments.screen');        // screen > Payments
const SPayM   = require('../../screens/android/ab-paymentsMobile.screen');  // screen > Payments fo Mobile
const SPin    = require('../../screens/android/ab-pinCodeEnter.screen');    // screen > Pin code enter
const SSms    = require('../../screens/android/ab-smsCodeEnter.screen');    // screen > Sms code enter
const STraBe  = require('../../screens/android/ab-transferBetweenCards.screen');//... > Transfer between cards
const STraTo  = require('../../screens/android/ab-transferToCard.screen');  // screen > Transfer to card

const WCardsR = require('../../screens/android/ab-cardsReciever.window');   // window > Cards of receiver
const WCardsS = require('../../screens/android/ab-cardsSender.window');     // window > Cards of sender

const UApp    = require("../../utils/android/ab-app.utils");                // utilities > Application
const UDev    = require("../../utils/android/dt-device.utils");             // utilities > Device

describe('ab-ts-02p: Testing of operations | Тестирование операций |вер.20231226| /Тестов 11 (частично 6)/', () => {
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
    // await SGen.logOutApp();
  });
  after(async () => {
    await SGen.after();

    // // * Закрыть приложение
    // // await driver.closeApp();
    // await driver.terminateApp(SGen.appPackage);
  });

// ab-ts-04p: Тестирование карт |вер.20231226| /Тестов 5 (частичен 1)/
it.skip('ab-e-tc-04.001p: -*- Adding card | Добавление карты /частичен/', async () => {
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

  8.Нажать кнопку Добавить карту.
  8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.

--- Требуется автоматически получать код из СМС ---

  9.Нажать поле ввода кода из СМС и ввести полученный код.
  9.1.В поле ввода отображается введенный код, кнопка Продолжить активна.

  10.Нажать кнопку Продолжить.
  10.1.Открыт экран Мои карты, где в списке карт отображается добавленная карта.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-04.001p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  // const randomChars = await UApp.generateRandomChars(3, 'en');
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  const cardName = DCard.cardName_Uzcard_101; // + '-' + randomChars;
  const cardNumber = DCard.cardNumber_Uzcard_101;
  const cardExpiry = DCard.cardValid_Uzcard_101;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);

  // 1.Нажать кнопку Карты.
  await SHome.bottomNav_Cards.click();
  // 1.1.Открыт экран Мои карты, где доступна кнопка заказа/добавления карты.
  await SCards.titleScreen_MyCards.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  await expect(SCards.titleScreen_MyCards).toHaveText(SCards.titleScreen_MyCards_Ru_Expected);

  // 2.Нажать кнопку заказа/добавления карты.
  await SCards.button_OrderOrAddCard.click();
  // 2.1.Открыто окно, где доступны кнопка Заказать карту и кнопка Добавить карту.
  await SCards.button_AddCard.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

  // 3.Нажать кнопку Добавить карту.
  await SCards.button_AddCard.click();
  // 3.1.Открыт экран Добавить карту, где доступны изображение карты, кнопки выбора ее дизайна, поле ввода названия карты, поле ввода номера карты, поле ввода срока действия карты и неактивная кнопка Добавить карту.
  await SCards.titleScreen_AddCard.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  await expect(SCards.titleScreen_AddCard).toHaveText(SCards.titleScreen_AddCard_Ru_Expected);

  // 4.Нажать кнопку дизайна карты (любую).
  await SCards.items_CardBackgrounds[2].click();
  // 4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.

  // 5.Нажать поле ввода названия карты и ввести ее название.
  await SCards.input_CardName.click();
  await UDev.androidKeyboardTypeIn(cardName);
  // 5.1.В поле ввода отображается введенное значение.
  await expect(SCards.input_CardName).toHaveText(cardName);

  // 6.Нажать поле ввода номера карты и ввести ее номер.
  await SCards.input_CardNumber.click();
  await UDev.androidKeyboardTypeIn(cardNumber);
  // 6.1.В поле ввода отображается введенное значение.
  await expect(SCards.input_CardNumber).toHaveText(cardNumber);

  // 7.Нажать поле ввода срока действия карты и ввести его дату.
  await SCards.input_CardExpiryDate.click();
  await UDev.androidKeyboardTypeIn(cardExpiry);
  // 7.1.В поле ввода отображается введенное значение, кнопка Добавить карту активна.
  await expect(SCards.input_CardExpiryDate).toHaveTextContaining(cardExpiry.substr(0, 2));
  await expect(SCards.input_CardExpiryDate).toHaveTextContaining(cardExpiry.substr(3, 2));
  await expect(SCards.button_AddCard_1).toBeEnabled();

  // 8.Нажать кнопку Добавить карту.
  await SCards.button_AddCard_1.click();
  // 8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.

// --- Требуется автоматически получать код из СМС ---

  // 9.Нажать поле ввода кода из СМС и ввести полученный код.
  await SSms.input_SmsCode.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  // const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
  // await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);



// --- на 24102025 вводится ВРУЧНУЮ во время паузы (ниже)
await SSms.smsCodeInput();


  
  // 9.1.В поле ввода отображается введенный код, кнопка Продолжить активна.
  // - введенный код ?
  // await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
  // - кнопка Продолжить
  await expect(SSms.button_Continue).toBeEnabled();

  // 10.Нажать кнопку Продолжить.
  await SSms.button_Continue.click();
  // 10.1.Открыт экран Мои карты, где в списке карт отображается добавленная карта.
  await SCards.titleScreen_MyCards.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  // * Выйти из экрана Мои карты и вернуться, чтобы обновить список карт.
  await SHome.bottomNav_Home.click();
  await SHome.bottomNav_Cards.click();
  // * Открыт экран Мои карты, где доступен список карт.
  // - список карт /...ждем первую карту/
  await SCards.text_CardBalance.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

  // * Обратить внимание на номер каждой карты.
  await driver.pause(3000); // ждем обновления списка: нередко тормозит и сначала добавленная карта не появляется
  // * Создать список карт.
  // let rawArray = await SHome.items_layout_CardsList;
  const rawArray_Id = 'SCards.items_titleScreen_MyCards'; // = await SCards.items_titleScreen_MyCards;
  // let dataArray = [];
  const elementAttributeKey = 'resource-id';
  const elementAttributeValues = [
    'com.fincube.apexbank.debug:id/tvCardName',
    'com.fincube.apexbank.debug:id/tvCardBalance',
    'com.fincube.apexbank.debug:id/tvCardNumberNotOne', // com.fincube.apexbank.debug:id/tvCardNumber
    'com.fincube.apexbank.debug:id/tvCardDate'
  ];
  const scrollDirection = UApp.scrollForward;
  const dataArray = await SCards.scrollCardstList(rawArray_Id, elementAttributeKey, elementAttributeValues, scrollDirection);

  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray (массив карт) = '" + dataArray + "'";
    // throw new Error(`Не сформирован dataArray (массив карт) = "${dataArray}"`);
    throw new Error(`Не сформирован dataArray (массив карт) = "${dataArray}"`);
  }
  // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
  //   console.log('\n --> dataArray.length = ' + dataArray.length +
  //   '\n' + await dataArray[i].cardName +
  //   '\n' + await dataArray[i].cardBalance +
  //   '\n' + await dataArray[i].cardNumber +
  //   '\n' + await dataArray[i].cardDate
  //   );
  // }

  // * Отображается номер каждой карты.
  let cardNumberText = '';
  for (const element of dataArray) {
    cardNumberText = await element.cardNumber;
    if (cardNumberText.includes(cardNumber.slice(-4))) {
      // /*отладка*/ console.log('\n --> cardNumberText-1 = ' + cardNumberText + '\n');
      break;
    }
    // /*отладка*/ console.log(' -->\n' +
    //   'cardNumber.slice(-4) = ' + cardNumber.slice(-4) + '\n' +
    //   'cardNumberText-2 = ' + cardNumberText + '\n'
    // );
}

  // - отображается добавленная карта
  await expect(cardNumberText).toContain(cardNumber.slice(-4));

});
it('ab-e-tc-04.002p: Editing card | Редактирование карты', async () => {
  /**
  > Можно изменить некоторые данные банковской карты. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Карты.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать кнопку Карты.
  1.1.Открыт экран Мои карты, где доступен список карт.

  2.Нажать карту из списка (любую).
  2.1.Открыт экран данных карты (озаглавленный ее названием), где доступна кнопка редактирования карты.

  3.Нажать кнопку редактирования карты.
  3.1.Открыт экран редактирования карты, где доступны изображение карты (с текущими дизайном, названием, балансом, номером, сроком действия), кнопки выбора ее дизайна, поле ввода/редактирования названия карты, кнопка Сохранить.
  
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

  9.Нажать кнопку Сохранить.
  9.1.Открыт экран данных карты (озаглавленный ее названием).

  10.Вернуться на экран Мои карты, нажимая кнопку Назад.
  10.1.Открыт экран Мои карты, где изменявшаяся карта имеет отредактированные дизайн и название.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-04.002p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  const randomChars = await UApp.generateRandomChars(3, 'en');
  const cardName = DCard.cardName_Humo_10 + '-' + randomChars;
  const cardNumber = DCard.cardNumber_Humo_10;
  
  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);

  // 1.Нажать кнопку Карты.
  await SHome.bottomNav_Cards.click();
  // 1.1.Открыт экран Мои карты, где доступен список карт.
  await SCards.titleScreen_MyCards.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  await SCards.items_titleScreen_MyCards[0].waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  // * Создать массив видимых элементов.
  let rawArray = await SCards.items_titleScreen_MyCards_Numbers_NotOne;
  // /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  // let dataArray = [];
  const elementAttributeKey = SCards.text_ElementAttributeKey_En_Expected;
  let elementAttributeValue = SCards.text_ElementAttributeValue_En_Expected;
  // await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  let dataArray = await UApp.generateElementList(rawArray, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> dataArray = ' + dataArray);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-1 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-1 карт) = "${dataArray}"`);
  }

  // 2.Нажать карту из списка (любую).
  for (let i = 0; i < dataArray.length; i++) {
    // /*отладка*/ console.log('\n --> cardNumber_Receiver = ' + await dataArray[i].getText());
    if ((await dataArray[i].getText()).includes(cardNumber.slice(-4))) {
      await dataArray[i].click();
      break;
    }
  }
  // 2.1.Открыт экран данных карты (озаглавленный ее названием), где доступна кнопка редактирования карты.

  // 3.Нажать кнопку редактирования карты.
  await SCards.button_EditCard.click();
  // 3.1.Открыт экран редактирования карты, где доступны изображение карты (с текущими дизайном, названием, балансом, номером, сроком действия), кнопки выбора ее дизайна, поле ввода/редактирования названия карты, кнопка Сохранить.
  // * Создать массив существующих дизайнов карты.
  await SCards.image_CardBackground.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // await SCards.waitForScreenDisplayed_cardSettingsScreen();
  rawArray = await SCards.items_CardBackgrounds;
  // /*отладка*/ console.log('\n --> rawArray ' + rawArray + '\n');
  dataArray = [];
  elementAttributeValue = 'com.fincube.apexbank.debug:id/bg_image';
  // await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  dataArray = await UApp.generateElementList(rawArray, elementAttributeKey, elementAttributeValue);
  // * Контролируем непустоту массива.
  // await expect(dataArray.length).toBeGreaterThan(0);
  if(dataArray.length === 0){
    // console.log('\n --> languagesList не сформирован: dataArray = ' + dataArray + '\n');
    // throw " Не сформирован dataArray (массив дизайнов карты) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив дизайнов карт) = "${dataArray}"`);
  }

  // 4.Нажать кнопку дизайна карты (любую).
  for(let i = 0, l = dataArray.length; i < l; i++) { // for (const element of dataArray) {
    break;
    // let nextElement1 = await SHome.image_CardBackgroundChecked;
    // let elementAttributeValueCurrent1 = await nextElement1.getAttribute('resource-id');
    // /*отладка*/ console.log('\n --> elementAttributeValueCurrent1 = ' + elementAttributeValueCurrent1 + '\n');
    
                                        // ОТКЛЮЧЕн ВЫБОР ДИЗайна
                                        // await dataArray[await UApp.generateRandomCharsOfSet(1,'012')].click(); // '012345'

    // let nextElement = await element.nextElement();
    // let elementAttributeValueCurrent = await nextElement.getAttribute('resource-id');

    // let nextElement2 = await SHome.image_CardBackgroundChecked;
    // let elementAttributeValueCurrent2 = await nextElement2.getAttribute('resource-id');
    // /*отладка*/ console.log('\n --> elementAttributeValueCurrent2 = ' + elementAttributeValueCurrent2 + '\n');
  }
  // 4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.

  // 5.Нажать поле ввода названия карты.
  await SCards.input_CardName_1.click();
  // 5.1.Открыта клавиатура. Курсор установлен в конце текущего названия.
  // * Запомнить название и номер карты.
  // * Прокрутить до элемента.
  await $(`android=${SCards.scrollTo_CardViewFront}`);
  const cardName_Initial = await SCards.text_CardName_1.getText();
  // const cardNumber_1 = await SCards.text_CardNumber_1.getText();
  // /*отладка*/ console.log(
  //   '\n' + cardName_Initial + ' = cardName_Initial... of card' +
  //   '\n' + cardNumber_1 + ' = cardNumber_1' +
  //   '\n');

  // 6.Изменить название карты.
  await UDev.androidKeyboardTypeIn(randomChars);
  // 6.1.Измененное значение отображается:
  // - в поле ввода;
  await expect(SCards.input_CardName_1).toHaveText(cardName_Initial + randomChars);
  // - на изображении карты.
  // * Прокрутить до элемента.
  await $(`android=${SCards.scrollTo_CardViewFront}`);
  await expect(SCards.text_CardName_1).toHaveText(cardName_Initial + randomChars);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 7.Удалить название карты.
  // * Очистить поле ввода.
  // await SCards.input_CardName_1.clearValue();
  await SCards.button_CardNameInputClear.click();
  // 7.1.Пустое значение отображается:
  // - в поле ввода;
  await expect(SCards.input_CardName_1).toHaveText(''); // 'Название карты'
  // - на изображении карты.
  await expect(SCards.text_CardName_1).toHaveText(''); // .not.toBeExisting();

  // 8.Ввести название карты, нажав поле ввода названия карты.
  await SCards.input_CardName_1.click();
  await UDev.androidKeyboardTypeIn(cardName);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();
  // 8.1.Введенное значение отображается:
  // - в поле ввода;
  await expect(SCards.input_CardName_1).toHaveText(cardName);
  // - на изображении карты.
  // * Прокрутить до элемента.
  // if(!(await SCards.text_CardName_1).isDisplayedInViewport) {
    await $(`android=${SCards.scrollTo_CardViewFront}`);
  // }
  await expect(SCards.text_CardName_1).toHaveText(cardName);

  // 9.Нажать кнопку Сохранить.
  await SCards.button_Confirm.click();
  // 9.1.Открыт экран данных карты (озаглавленный ее названием).
  await SCards.button_EditCard.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

  // 10.Вернуться на экран Мои карты, нажимая кнопку Назад.
  // await UDev.androidPressBackButton(1);
  // while(!await SCards.text_CardName.isDisplayed()){
  //   await UDev.androidPressBackButton(1);
  // }
  // await SCards.text_CardName.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  await SGen.goBackToSpecifiedLocation(SCards.text_CardName);

  // 10.1.Открыт экран Мои карты, где изменявшаяся карта имеет отредактированные дизайн и название.
  // * Выйти из экрана Мои карты и вернуться, чтобы обновить список карт.
  await SHome.bottomNav_Home.click();
  await SHome.bottomNav_Cards.click();
  // * Открыт экран Мои карты, где доступен список карт.
  // - список карт /...ждем первую карту/
  await SCards.items_titleScreen_MyCards[0].waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  // * Обратить внимание на название каждой карты.
  // * Создать массив видимых элементов.
  rawArray = await SCards.items_titleScreen_MyCards;
  dataArray = [];
  const elementAttributeValues = [
    'com.fincube.apexbank.debug:id/tvCardName',
    'com.fincube.apexbank.debug:id/tvCardBalance',
    'com.fincube.apexbank.debug:id/tvCardNumberNotOne', // com.fincube.apexbank.debug:id/tvCardNumber
    'com.fincube.apexbank.debug:id/tvCardDate'
  ];
  await SCards.generateCardstList(rawArray, dataArray, elementAttributeKey, elementAttributeValues);
  // * Прокрутить, делая видимыми следующие элементы.
  await $(`android=${UApp.scrollForward}`);
  // * Создать массив видимых элементов.
  rawArray = await SCards.items_titleScreen_MyCards;
  await SCards.generateCardstList(rawArray, dataArray, elementAttributeKey, elementAttributeValues);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-2 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-2 карт) = "${dataArray}"`);
  }
  /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
    console.log('\n --> dataArray.length = ' + dataArray.length +
    '\n' + await dataArray[i].cardName +
    '\n' + await dataArray[i].cardBalance +
    '\n' + await dataArray[i].cardNumber +
    '\n' + await dataArray[i].cardDate
    );
  }






// return







  // * Отображается название каждой карты.
  let cardNameText = '';
  for (const element of dataArray) {
    cardNameText = await element.cardName;
    if (cardNameText == cardName) {
      // /*отладка*/ console.log(' -->\n' +
      //   'cardName = ' + cardName + '\n' +
      //   'cardNameText = ' + cardNameText + '\n'
      //   );
      break;
    }
    // /*отладка*/ console.log(' -->\n' +
    // 'cardName = ' + cardName + '\n' +
    // 'cardNameText = ' + cardNameText + '\n'
    // );
  }
  // - карта имеет отредактированные дизайн и название.
  await expect(cardNameText).toContain(cardName);
});
it.skip('ab-e-tc-04.003p: Deleting card | Удаление карты', async () => {
  /**
  > Можно удалить банковскую карту. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Карты.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Нажать кнопку Карты.
  1.1.Открыт экран Мои карты, где доступен список карт.

  2.Нажать карту из списка (любую).
  2.1.Открыт экран действий с картой (озаглавленный ее названием), где доступна кнопка удаления карты.

  3.Нажать кнопку удаления карты.
  3.1.Открыто окно удаления карты, где доступна кнопка подтверждения удаления.

  4.Нажать кнопку подтверждения удаления карты.
  4.1.Открыт экран Мои карты, где отсутствует удаленная карта.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-04.003p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  const cardNumber = DCard.cardNumber_Uzcard_101;
  
  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);

  // 1.Нажать кнопку Карты.
  await SHome.bottomNav_Cards.click();
  // 1.1.Открыт экран Мои карты, где доступен список карт.
  await SCards.titleScreen_MyCards.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  await SCards.items_titleScreen_MyCards[0].waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 25000});
  // * Создать массив видимых элементов.
  let rawArray = await SCards.items_titleScreen_MyCards_Numbers_NotOne;
  // /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  // let dataArray = [];
  const elementAttributeKey = SCards.text_ElementAttributeKey_En_Expected;
  let elementAttributeValue = SCards.text_ElementAttributeValue_En_Expected;
  // await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  let dataArray = await UApp.generateElementList(rawArray, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> dataArray = ' + dataArray);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-1 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-1 карт) = "${dataArray}"`);
  }

  // 2.Нажать карту из списка (любую).
  for (let i = 0; i < dataArray.length; i++) {
    // /*отладка*/ console.log('\n --> cardNumber_Receiver = ' + await dataArray[i].getText());
    if ((await dataArray[i].getText()).includes(cardNumber.slice(-4))) {
      await dataArray[i].click();
      break;
    }
  }
  // 2.1.Открыт экран действий с картой (озаглавленный ее названием), где доступна кнопка удаления карты.

  // 3.Нажать кнопку удаления карты.
  await SCards.item_DeleteCard_Ru.click();
  // 3.1.Открыто окно удаления карты, где доступна кнопка подтверждения удаления.

  // 4.Нажать кнопку подтверждения удаления карты.
  await SCards.button_Confirm_CardDelete.click();
  // 4.1.Открыт экран Мои карты, где отсутствует удаленная карта.
  // * Выйти из экрана Мои карты и вернуться, чтобы обновить список карт.
  await SHome.bottomNav_Home.click();
  await SHome.bottomNav_Cards.click();
  // * Открыт экран Мои карты, где доступен список карт.
  // - список карт /...ждем первую карту/
  await SCards.items_titleScreen_MyCards[0].waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  await driver.pause(10000); // ждем обновления списка: нередко тормозит и сначала удаленная карта появляется
  // * Обратить внимание на название каждой карты.
  // * Создать список карт.
  // let rawArray = await SHome.items_layout_CardsList;
  const rawArray_Id = 'SCards.items_titleScreen_MyCards'; // = await SCards.items_titleScreen_MyCards;
  // let dataArray = [];
  // const elementAttributeKey = 'resource-id';
  const elementAttributeValues = [
    'com.fincube.apexbank.debug:id/tvCardName',
    'com.fincube.apexbank.debug:id/tvCardBalance',
    'com.fincube.apexbank.debug:id/tvCardNumberNotOne', // com.fincube.apexbank.debug:id/tvCardNumber
    'com.fincube.apexbank.debug:id/tvCardDate'
  ];
  const scrollDirection = UApp.scrollForward;
  dataArray = await SCards.scrollCardstList(rawArray_Id, elementAttributeKey, elementAttributeValues, scrollDirection);

  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-2 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-2 карт) = "${dataArray}"`);
  }
  // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
  //   console.log('\n --> dataArray.length = ' + dataArray.length +
  //   '\n' + await dataArray[i].cardName +
  //   '\n' + await dataArray[i].cardBalance +
  //   '\n' + await dataArray[i].cardNumber +
  //   '\n' + await dataArray[i].cardDate
  //   );
  // }
  // * Отображается номер каждой карты.
  let cardNumberText = '';
  const cardNumber_LastDigits = cardNumber.slice(-4);
  for (const element of dataArray) {
    cardNumberText = await element.cardNumber;
    if (cardNumberText == cardNumber_LastDigits) {
      // /*отладка*/ console.log(' -->\n' +
      //   'cardName = ' + cardName + '\n' +
      //   'cardNameText = ' + cardNameText + '\n'
      //   );
      break;
    }
    // /*отладка*/ console.log(' -->\n' +
    // 'cardNumber.slice(-4) = ' + cardNumber_LastDigits + '\n' +
    // 'cardNumberText = ' + cardNumberText + '\n'
    // );
    // - отсутствует удаленная карта.
    await expect(cardNumberText).not.toContain(cardNumber_LastDigits);
  }
});
it.only('ab-e-tc-04.004p: Checking balance | Проверка баланса', async () => {
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
  tcNum = 'ab-e-tc-04.004p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: 25000});

  // 1.Обратить внимание на баланс каждой карты.
  // * Создать массив видимых элементов.
  let rawArrayKey = 'SHome.items_layout_CardsList';
  const elementAttributeKey = SCards.text_ElementAttributeKey_En_Expected;
  const elementAttributeValues = [
    SCards.text_ElementAttributeValue_En_Expected_Name,
    SCards.text_ElementAttributeValue_En_Expected_Balance,
    SCards.text_ElementAttributeValue_En_Expected,
    SCards.text_ElementAttributeValue_En_Expected_Date // ''
  ];
  let scrollTo = SHome.scrollToElement_Right;

  let dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollTo);
  // * Контролируем непустоту массива.
  if (dataArray.length === 0) {
    throw new Error(`Не сформирован dataArray (массив-1 карт) = "${dataArray}"`);
  }
  // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
  //   console.log('\n --> 1-dataArray.length = ' + dataArray.length +
  //   '\n' + await dataArray[i].cardName +
  //   '\n' + await dataArray[i].cardBalance +
  //   '\n' + await dataArray[i].cardNumber +
  //   '\n' + await dataArray[i].cardDate
  //   );
  // }
  // 1.1.Отображается баланс каждой карты.
  const cardsBalanceTotal_OnHomeScreen = await SCards.sumUpBalances(dataArray);

  // 2.Обратить внимание на общий баланс.
  // 2.1.Отображается общий баланс, равный сумме балансов всех карт.
  let totalBalance = await SHome.text_TotalBalanceAmount.getText();
  totalBalance = await UApp.extractNumbersFromString(totalBalance);
  // /*отладка*/ console.log('\n --> totalBalance = ' + totalBalance + '\n');
  await expect(totalBalance).toBeGreaterThanOrEqual(cardsBalanceTotal_OnHomeScreen);
  await expect(totalBalance).toBeLessThanOrEqual(cardsBalanceTotal_OnHomeScreen + dataArray.length);

  // 3.Нажать кнопку Карты.
  await SHome.bottomNav_Cards.click();
  // 3.1.Открыт экран Мои карты, где доступен список карт.
  // - список карт /...ждем первую карту/
  await SCards.text_CardBalance.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

  // 4.Обратить внимание на баланс каждой карты.
  // * Создать массив видимых элементов.
  rawArrayKey = 'SCards.items_titleScreen_MyCards';
  scrollTo = UApp.scrollForward;

  dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollTo);
  // * Контролируем непустоту массива.
  if (dataArray.length === 0) {
    throw new Error(`Не сформирован dataArray (массив-2 карт) = "${dataArray}"`);
  }
  // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
  //   console.log('\n --> 2-dataArray.length = ' + dataArray.length +
  //   '\n' + await dataArray[i].cardName +
  //   '\n' + await dataArray[i].cardBalance +
  //   '\n' + await dataArray[i].cardNumber +
  //   '\n' + await dataArray[i].cardDate
  //   );
  // }
  // 4.1.Отображается баланс каждой карты.
  const cardsBalanceTotal_OnMyCardsScreen = await SCards.sumUpBalances(dataArray);
  // /*отладка*/ console.log(`
  //   \n totalBalance                                          = ${totalBalance}
  //   \n cardsBalanceTotal_OnHomeScreen-1                      = ${cardsBalanceTotal_OnHomeScreen}
  //   \n cardsBalanceTotal_OnMyCardsScreen-2                   = ${cardsBalanceTotal_OnMyCardsScreen}
  //   \n dataArray.length                                      = ${dataArray.length}
  //   \n cardsBalanceTotal_OnMyCardsScreen + dataArray.length  = ${cardsBalanceTotal_OnMyCardsScreen + dataArray.length}`);
  // 4.2.Сумма балансов всех карт равна общему балансу.
  // await expect(totalBalance).toEqual(cardsBalanceAmountTotal + dataArray.length);
  await expect(totalBalance).toBeGreaterThanOrEqual(cardsBalanceTotal_OnMyCardsScreen);
  await expect(totalBalance).toBeLessThanOrEqual(cardsBalanceTotal_OnMyCardsScreen + dataArray.length);
  // * Сумма балансов всех карт на экранах Главный и Мои карты равны.
  await expect(cardsBalanceTotal_OnHomeScreen).toEqual(cardsBalanceTotal_OnMyCardsScreen);
});
it('ab-u-tc-04.005p: Hide/Show balance | Скрыть/Показать баланс', async () => {
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
  tcNum = 'ab-u-tc-04.005p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;

  // Пред.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);
  
  // 1.Обратить внимание на общий баланс и баланс каждой карты.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // 1.1.Отображаются соответствующие балансы.
  const totalBalance = await SHome.text_TotalBalanceAmount.getText();
  // * Прокрутить, делая видимыми следующие элементы.
  await $(`android=${SHome.scrollToElement_Right}`);
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

// ab-ts-05p: Тестирование переводов |вер.20231116| /Тестов 4 (частичен 4)/
it('ab-e-tc-05.001p: -*- Transfer to card by card number | Перевод на карту по номеру карты /частичен/', async () => {
  /**
  > Можно выполнить перевод денежных средств с карты на карту по номеру карты. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступно поле ввода данных получателя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Обратить внимание на общий баланс.
  1.1.Отображается общий баланс.

  2.Нажать поле ввода данных получателя в разделе Переводы и ввести номер карты получателя.
  2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.

  3.Нажать кнопку отправки.
  3.1.Открыт экран Перевод на карту, где доступны поле выбора карты отправителя, поле номера карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.

  4.Нажать поле выбора карты отправителя.
  4.1.Открыто окно списка карт отправителя.

  5.Выбрать карту отправителя (любую).
  5.1.Закрыто окно списка карт. В поле выбора карт отправителя отображается выбранная карта.

  6.Нажать поле ввода суммы перевода и вести сумму.
  6.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.

  7.Нажать кнопку Продолжить.
  7.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  8.Нажать поле ввода кода из СМС и ввести полученный код.
  8.1.В поле ввода отображается введенный код, кнопка Продолжить активна.

  9.Нажать кнопку Продолжить.
  9.1.Открыт экран Платеж обрабатывается, где доступна кнопка Вернуться на главную.

  10.Нажать кнопку Вернуться на главную.
  10.1.Открыт главный экран, где в разделе Общий баланс отображаются общий баланс.

  11.Обратить внимание на общий баланс.
  11.1.Отображается общий баланс, уменьшенный на итоговую сумму перевода.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-05.001p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const cardNumber_Sender = DCard.cardNumber_Humo_10; // '5000'
  const cardNumber_Receiver = DCard.cardNumber_Humo_7; // '2885';
  const moneyAmount = await UApp.generateRandomChars(4, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);

  // 1.Обратить внимание на общий баланс.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // 1.1.Отображается общий баланс.
  const totalBalanceBefore = await UApp.extractNumbersFromString(await SHome.text_TotalBalanceAmount.getText());
  // const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');

  // 2.Нажать поле ввода данных получателя в разделе Переводы и ввести номер карты получателя.
  // * Очистить поле ввода
  await SHome.input_ReceiverData.clearValue();
  await SHome.input_ReceiverData.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  await UDev.androidKeyboardTypeIn(cardNumber_Receiver);
  // 2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.
  await expect(SHome.input_ReceiverData).toHaveText(cardNumber_Receiver);
  await SHome.button_Send.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 25000});

  // 3.Нажать кнопку отправки.
  await SHome.button_Send.click();
  // 3.1.Открыт экран Перевод на карту, где доступны поле выбора карты отправителя, поле номера карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.
  await expect(STraTo.titleScreen_TransferToCard_Ru).toHaveText(STraTo.titleScreen_TransferToCard_Ru_Expected);

  // 4.Нажать поле выбора карты отправителя.
  await STraTo.button_OpenCardsList_From.click();
  // 4.1.Открыто окно списка карт отправителя.
  await WCardsS.titleWindow_SenderSelectAccount_Ru.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Создать массив видимых элементов.
  const rawArray = await WCardsS.items_Window_SelectCardOfSender_CardNumber;
  // /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  const dataArray = [];
  const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = WCardsS.text_ElementAttributeValue_En_Expected_Number;
  await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  /*отладка*/ console.log('\n --> dataArray = ' + dataArray);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив карт) = "${dataArray}"`);
  }

  // 5.Выбрать карту отправителя (любую).
  // await dataArray[1].click();
  for (let i = 0; i < dataArray.length; i++) {
    // /*отладка*/ console.log('\n --> cardNumber_Sender = ' + await dataArray[i].getText());
    if ((await dataArray[i].getText()).includes(cardNumber_Sender.slice(-4))) {
      await dataArray[i].click();
      break;
    }
  }
  // 5.1.Закрыто окно списка карт. В поле выбора карт отправителя отображается выбранная карта.

  // 6.Нажать поле ввода суммы перевода и вести сумму.
  await STraTo.input_TransferAmount.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // * Скрыть клавиатуру (добавить время для формирования значения SCards.transferTotalAmount)
  await driver.hideKeyboard();
  // 6.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение,
  const amountSeparatedThousandths = await UApp.separateThousandthsOfNumber(moneyAmount);
  await expect(STraTo.input_TransferAmount).toHaveText(amountSeparatedThousandths);
  // await expect(STraTo.input_TransferAmount).toHaveText(moneyAmount);
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await SCards.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await SCards.transferTotalAmount.getText()
  // );
  await STraTo.text_TransferTotalAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Ждем отображения всех цифр итоговой суммы (последняя цифра может долго не появляться)
  await driver.pause(3000);

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

  // 7.Нажать кнопку Продолжить.
  await STraTo.button_Continue.click();
  // 7.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.

// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 8.Нажать поле ввода кода из СМС и ввести полученный код.
  await SSms.input_SmsCode.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  // const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
  // await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);



// --- на 24102025 вводится ВРУЧНУЮ во время паузы (ниже)
// * Пауза для контроля экрана.
// await driver.pause(30000);
await SSms.smsCodeInput();


  
  // 8.1.В поле ввода отображается введенный код, кнопка Продолжить активна.
  // - введенный код ?
  // await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
  // - кнопка Продолжить
  await expect(SSms.button_Continue).toBeEnabled();

  // 9.Нажать кнопку Продолжить.
  await SSms.button_Continue.click();
  // 9.1.Открыт экран Платеж обрабатывается, где доступна кнопка Вернуться на главную.
  await STraTo.titleScreen_TransferProcessing.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

  // 10.Нажать кнопку Вернуться на главную.
  await STraTo.button_BackToHome.click();
  // 10.1.Открыт главный экран, где в разделе Общий баланс отображаются общий баланс.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  // * Ждем обновления баланса (может долго отображаться предыдущий баланс)
  await driver.pause(5000);

  // 11.Обратить внимание на общий баланс.
  const totalBalanceAfter = await UApp.extractNumbersFromString(await SHome.text_TotalBalanceAmount.getText());
  // 11.1.Отображается общий баланс, уменьшенный на итоговую сумму перевода.
  const totalBalanceAfter_Expected = totalBalanceBefore - transferTotalAmountInNumbers;
  // /*отладка*/ console.log(' -->' + 
  //   '\n totalBalanceBefore = ' + totalBalanceBefore +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers +
  //   '\n totalBalanceAfter = ' + totalBalanceAfter +
  //   '\n totalBalanceAfter_Expected = ' + totalBalanceAfter_Expected + '\n'
  // );
  
  if (totalBalanceAfter > totalBalanceAfter_Expected) {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected + 1);
    // /*отладка*/ console.log('\n --> totalBalanceAfter > totalBalanceAfter_Expected на 1 \n');

  } else if (totalBalanceAfter < totalBalanceAfter_Expected) {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected - 1);
    // /*отладка*/ console.log('\n --> totalBalanceAfter < totalBalanceAfter_Expected на 1 \n');
  } else {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected);
    // /*отладка*/ console.log('\n --> totalBalanceAfter = totalBalanceAfter_Expected \n');
  }

});
it('ab-e-tc-05.002p: -*- Transfer to card by phone number |Перевод на карту по номеру телефона /частичен/', async () => {
  /**
  > Можно выполнить перевод денежных средств с карты на карту по номеру телефона. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступно поле ввода данных получателя.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Обратить внимание на общий баланс.
  1.1.Отображается общий баланс.

  2.Нажать поле ввода данных получателя в разделе Переводы и ввести номер телефона получателя.
  2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.

  3.Нажать кнопку отправки.
  3.1.Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступны поля выбора банка получателя.

  4.Нажать поле выбора банка получателя (любое).
  4.1.Закрыто окно Выберите банк и открыто окно, где отображается список карт получателя.

  5.Выбрать карту получателя (любую).
  5.1.Закрыто окно списка карт. В поле выбора карты получателя отображается выбранная карта.

  6.Нажать поле выбора карты отправителя.
  6.1.Открыто окно, где доступен список карт отправителя.

  7.Выбрать карту отправителя (любую).
  7.1.Закрыто окно списка карт. В поле выбора карт отправителя отображается выбранная карта.

  8.Нажать поле ввода суммы перевода и ввести сумму перевода.
  8.1.В поле ввода отображается введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.

  9.Нажать кнопку Продолжить.
  9.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  10.Нажать поле ввода кода из СМС и ввести полученный код.
  10.1.В поле ввода отображается введенный код, кнопка Продолжить активна.

  11.Нажать кнопку Продолжить.
  11.1.Открыт экран без названия, где доступна кнопка Вернуться на главную.

  12.Нажать кнопку Вернуться на главную.
  12.1.Открыт главный экран, где в разделе Общий баланс отображаются общий баланс.

  13.Обратить внимание на общий баланс.
  13.1.Отображается общий баланс, уменьшенный на итоговую сумму перевода.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-05.002p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const cardNumber_Sender = DCard.cardNumber_Humo_10; // '5000'
  const phoneNumber_Receiver = DCard.phoneNumber_7;
  const cardNumber_Receiver = DCard.cardNumber_Humo_7; // '2885';
  const moneyAmount = await UApp.generateRandomChars(4, 'amount');
  
  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);

  // 1.Обратить внимание на общий баланс.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // 1.1.Отображается общий баланс.
  const totalBalanceBefore = await UApp.extractNumbersFromString(await SHome.text_TotalBalanceAmount.getText());
  // const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');
  
  // 2.Нажать поле ввода данных получателя в разделе Переводы и ввести номер телефона получателя.
  // * Очистить поле ввода
  await SHome.input_ReceiverData.clearValue();
  await SHome.input_ReceiverData.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  await UDev.androidKeyboardTypeIn('998' + phoneNumber_Receiver); // если первые цифры номера 998, то перед таким номером нужно добавить 998
  // 2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.
  // - активная кнопка отправки
  await SHome.button_Send.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});

  // 3.Нажать кнопку отправки.
  await SHome.button_Send.click();
  // 3.1.Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступны поля выбора банка получателя.
  // - окно Выберите банк
  await expect(WCardsR.titleWindow_SelectBankOfReceiver).toHaveText(WCardsR.titleWindow_SelectBankOfReceiver_Ru_Expected);

  // 4.Нажать поле выбора банка получателя (любое).
  await WCardsR.items_Window_SelectBankOfReceiver_TextView[0].click();
  // 4.1.Закрыто окно Выберите банк и открыто окно, где отображается список карт получателя.
  await WCardsR.titleWindow_SelectBankOfReceiver.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Создать массив видимых элементов.
  let rawArray = await WCardsR.items_Window_SelectCardOfReceiver_TextView;
  // /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  let dataArray = [];
  const elementAttributeKey = WCardsR.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = WCardsR.text_ElementAttributeValue_En_Expected;
  await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> dataArray = ' + dataArray);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-1 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-1 карт) = "${dataArray}"`);
  }

  // 5.Выбрать карту получателя (любую).
  // await WCardsR.items_Window_SelectCardOfReceiver_TextView[0].click();
  // await dataArray[0].click();
  for (let i = 0; i < dataArray.length; i++) {
    // /*отладка*/ console.log('\n --> cardNumber_Receiver = ' + await dataArray[i].getText());
    if ((await dataArray[i].getText()).includes(cardNumber_Receiver.slice(-4))) {
      await dataArray[i].click();
      break;
    }
  }
  // 5.1.Закрыто окно списка карт. В поле выбора карты получателя отображается выбранная карта.

  // 6.Нажать поле выбора карты отправителя.
  await STraTo.button_OpenCardsList_From.click();
  // 6.1.Открыто окно, где доступен список карт отправителя.
  await WCardsS.titleWindow_SenderSelectCard_Ru.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Создать массив видимых элементов.
  rawArray = await WCardsS.items_Window_SelectCardOfSender_CardNumber;
  // /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  dataArray = [];
  // const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
  // const elementAttributeValue = WCardsS..text_ElementAttributeValue_En_Expected_Number;
  await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> dataArray = ' + dataArray);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-2 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-2 карт) = "${dataArray}"`);
  }
  
  // 7.Выбрать карту отправителя (любую).
  for (let i = 0; i < dataArray.length; i++) {
    // /*отладка*/ console.log('\n --> cardNumber_Sender = ' + await dataArray[i].getText());
    if ((await dataArray[i].getText()).includes(cardNumber_Sender.slice(-4))) {
      await dataArray[i].click();
      break;
    }
  }
  // 7.1.Закрыто окно списка карт. В поле выбора карт отправителя отображается выбранная карта.

  // 8.Нажать поле ввода суммы перевода и ввести сумму перевода.
  await STraTo.input_TransferAmount.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // 8.1.В поле ввода отображается введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение
  const amountSeparatedThousandths = await UApp.separateThousandthsOfNumber(moneyAmount);
  await expect(STraTo.input_TransferAmount).toHaveText(amountSeparatedThousandths);
  // await driver.hideKeyboard();
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await SCards.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await SCards.transferTotalAmount.getText()
  // );
  await STraTo.text_TransferTotalAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Ждем отображения всех цифр итоговой суммы (последняя цифра может долго не появляться)
  await driver.pause(3000);

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

  // 9.Нажать кнопку Продолжить.
  await STraTo.button_Continue.click();
  // 9.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.
  
// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 10.Нажать поле ввода кода из СМС и ввести полученный код.
  await SSms.input_SmsCode.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  // const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
  // await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);



// --- на 24102025 вводится ВРУЧНУЮ во время паузы (ниже)
// * Пауза для контроля экрана.
// await driver.pause(30000);
await SSms.smsCodeInput();


  
  // 10.1.В поле ввода отображается введенный код, кнопка Продолжить активна.
  // - введенный код ?
  // await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
  // - кнопка Продолжить
  await expect(SSms.button_Continue).toBeEnabled();

  // 11.Нажать кнопку Продолжить.
  await SSms.button_Continue.click();
  // 11.1.Открыт экран без названия, где доступна кнопка Вернуться на главную.

  // 12.Нажать кнопку Вернуться на главную.
  await STraTo.button_BackToHome.click();
  // 12.1.Открыт главный экран, где в разделе Общий баланс отображаются общий баланс.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  // * Ждем обновления баланса (может долго отображаться предыдущий баланс)
  await driver.pause(5000);

  // 13.Обратить внимание на общий баланс.
  const totalBalanceAfter = await UApp.extractNumbersFromString(await SHome.text_TotalBalanceAmount.getText());
  // 13.1.Отображается общий баланс, уменьшенный на итоговую сумму перевода.
  const totalBalanceAfter_Expected = totalBalanceBefore - transferTotalAmountInNumbers;
  // /*отладка*/ console.log(' -->' + 
  //   '\n totalBalanceBefore = ' + totalBalanceBefore +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers +
  //   '\n totalBalanceAfter = ' + totalBalanceAfter +
  //   '\n totalBalanceAfter_Expected = ' + totalBalanceAfter_Expected + '\n'
  // );
  
  if (totalBalanceAfter > totalBalanceAfter_Expected) {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected + 1);
    // /*отладка*/ console.log('\n --> totalBalanceAfter > totalBalanceAfter_Expected на 1 \n');

  } else if (totalBalanceAfter < totalBalanceAfter_Expected) {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected - 1);
    // /*отладка*/ console.log('\n --> totalBalanceAfter < totalBalanceAfter_Expected на 1 \n');
  } else {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected);
    // /*отладка*/ console.log('\n --> totalBalanceAfter = totalBalanceAfter_Expected \n');
  }

});
it('ab-e-tc-05.003p: -*- Transfer to card by phone number from contacts | Перевод на карту по номеру телефона из контактов /частичен/', async () => {
  /**
  > Можно выполнить перевод денежных средств с карты на карту по номеру телефона из контактов. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступна кнопка Контакты.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Обратить внимание на общий баланс.
  1.1.Отображается общий баланс.

  2.Нажать кнопку Контакты в разделе Переводы.
  2.1.Открыт экран устройства Выберите контакт, где доступны список контактов и кнопка Поиск контактов.

  3.Нажать кнопку Поиск контактов.
  3.1.Открыто поле ввода поиска контактов.

  4.Нажать поле ввода поиска контактов и ввести запрос поиска требуемого контакта.
  4.1.В поле ввода отображается введенный запрос, список контактов отфильтрован соответственно запросу.

  5.Нажать элемент требуемого контакта.
  5.1.Закрыт экран устройства Выберите контакт. Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступны поля выбора банка получателя.

  6.Нажать поле выбора банка получателя (любое).
  6.1.Закрыто окно Выберите банк и открыто окно, где отображается список карт получателя.

  7.Выбрать карту получателя (любую).
  7.1.Закрыто окно списка карт. В поле выбора карты получателя отображается выбранная карта.

  8.Нажать поле выбора карты отправителя.
  8.1.Открыто окно, где доступен список карт отправителя.

  9.Выбрать карту отправителя (любую).
  9.1.Закрыто окно списка карт. В поле выбора карт отправителя отображается выбранная карта.

  10.Нажать поле ввода суммы перевода и ввести сумму перевода.
  10.1.В поле ввода отображается введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.

  11.Нажать кнопку Продолжить.
  11.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  12.Нажать поле ввода кода из СМС и ввести полученный код.
  12.1.В поле ввода отображается введенный код, кнопка Продолжить активна.

  13.Нажать кнопку Продолжить.
  13.1.Открыт экран без названия, где доступна кнопка Вернуться на главную.

  14.Нажать кнопку Вернуться на главную.
  14.1.Открыт главный экран, где в разделе Общий баланс отображаются общий баланс.

  15.Обратить внимание на общий баланс.
  15.1.Отображается общий баланс, уменьшенный на итоговую сумму перевода.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-05.003p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const cardNumber_Sender = DCard.cardNumber_Humo_10; // '5000'
  const name_Receiver = 'Апекс-1'; // receiverName
  const cardNumber_Receiver = DCard.cardNumber_Humo_7; // '2885';
  const moneyAmount = await UApp.generateRandomChars(4, 'amount');
  
  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);

  // 1.Обратить внимание на общий баланс.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // 1.1.Отображается общий баланс.
  const totalBalanceBefore = await UApp.extractNumbersFromString(await SHome.text_TotalBalanceAmount.getText());
  // const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');

  // 2.Нажать кнопку Контакты в разделе Переводы.
  // * Очистить поле ввода
  await SHome.input_ReceiverData.clearValue();
  await SHome.button_Contacts.click();
  // 2.1.Открыт экран устройства Выберите контакт, где доступны список контактов и кнопка Поиск контактов.

  // 3.Нажать кнопку Поиск контактов.
  await UDev.contactsSearchButton.click();
  // 3.1.Открыто поле ввода поиска контактов.

  // 4.Нажать поле ввода поиска контактов и ввести запрос поиска требуемого контакта.
  await UDev.contactsSearchInput.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  await UDev.contactsSearchInput.addValue(name_Receiver);
  // 4.1.В поле ввода отображается введенный запрос, список контактов отфильтрован соответственно запросу.

  // 5.Нажать элемент требуемого контакта.
  await UDev.contactName.click();
  // 5.1.Закрыт экран устройства Выберите контакт. Открыт экран Перевод на карту, где отображаются поле выбора карты отправителя, поле выбора карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить, а также открыто окно Выберите банк, в котором доступны поля выбора банка получателя.
  // * Если открыт экран Введите свой PIN-код
  // await UApp.ifEnterYourCodeScreenOpen();
  if(await SPin.titleScreen_EnterPinCode.isDisplayed()){
    await UApp.appKeyboardTypeIn(SPin.text_PinCode_Expected);
  }
  // - окно Выберите банк
  await WCardsR.titleWindow_SelectBankOfReceiver.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  await expect(WCardsR.titleWindow_SelectBankOfReceiver).toHaveText(WCardsR.titleWindow_SelectBankOfReceiver_Ru_Expected);

  // 6.Нажать поле выбора банка получателя (любое).
  await WCardsR.items_Window_SelectBankOfReceiver_TextView[0].click();
  // 6.1.Закрыто окно Выберите банк и открыто окно, где отображается список карт получателя.
  await WCardsR.titleWindow_SelectBankOfReceiver.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Создать массив видимых элементов.
  let rawArray = await WCardsR.items_Window_SelectCardOfReceiver_TextView;
  // /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  let dataArray = [];
  const elementAttributeKey = WCardsR.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = WCardsR.text_ElementAttributeValue_En_Expected;
  await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> dataArray = ' + dataArray);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-1 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-1 карт) = "${dataArray}"`);
  }

  // 7.Выбрать карту получателя (любую).
  for (let i = 0; i < dataArray.length; i++) {
    // /*отладка*/ console.log('\n --> cardNumber_Receiver = ' + await dataArray[i].getText());
    if ((await dataArray[i].getText()).includes(cardNumber_Receiver.slice(-4))) {
      await dataArray[i].click();
      break;
    }
  }
  // 7.1.Закрыто окно списка карт. В поле выбора карты получателя отображается выбранная карта.

  // 8.Нажать поле выбора карты отправителя.
  await STraTo.button_OpenCardsList_From.click();
  // 8.1.Открыто окно, где доступен список карт отправителя.
  await WCardsS.titleWindow_SenderSelectCard_Ru.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Создать массив видимых элементов.
  rawArray = await WCardsS.items_Window_SelectCardOfSender_CardNumber;
  // /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  dataArray = [];
  // const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
  // const elementAttributeValue = WCardsS..text_ElementAttributeValue_En_Expected_Number;
  await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> dataArray = ' + dataArray);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-2 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-2 карт) = "${dataArray}"`);
  }
  
  // 9.Выбрать карту отправителя (любую).
  for (let i = 0; i < dataArray.length; i++) {
    // /*отладка*/ console.log('\n --> cardNumber_Sender = ' + await dataArray[i].getText());
    if ((await dataArray[i].getText()).includes(cardNumber_Sender.slice(-4))) {
      await dataArray[i].click();
      break;
    }
  }
  // 9.1.Закрыто окно списка карт. В поле выбора карт отправителя отображается выбранная карта.

  // 10.Нажать поле ввода суммы перевода и ввести сумму перевода.
  await STraTo.input_TransferAmount.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // 10.1.В поле ввода отображается введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение
  const amountSeparatedThousandths = await UApp.separateThousandthsOfNumber(moneyAmount);
  await expect(STraTo.input_TransferAmount).toHaveText(amountSeparatedThousandths);
  // await driver.hideKeyboard();
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await SCards.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await SCards.transferTotalAmount.getText()
  // );
  await STraTo.text_TransferTotalAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Ждем отображения всех цифр итоговой суммы (последняя цифра может долго не появляться)
  await driver.pause(3000);

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
  // 11.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.
  
// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 12.Нажать поле ввода кода из СМС и ввести полученный код.
  await SSms.input_SmsCode.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  // const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
  // await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);



// --- на 24102025 вводится ВРУЧНУЮ во время паузы (ниже)
// * Пауза для контроля экрана.
// await driver.pause(30000);
await SSms.smsCodeInput();

  
  // 12.1.В поле ввода отображается введенный код, кнопка Продолжить активна.
  // - введенный код ?
  // await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
  // - кнопка Продолжить
  await expect(SSms.button_Continue).toBeEnabled();

  // 13.Нажать кнопку Продолжить.
  await SSms.button_Continue.click();
  // 13.1.Открыт экран без названия, где доступна кнопка Вернуться на главную.

  // 14.Нажать кнопку Вернуться на главную.
  await STraTo.button_BackToHome.click();
  // 14.1.Открыт главный экран, где в разделе Общий баланс отображаются общий баланс.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  // * Ждем обновления баланса (может долго отображаться предыдущий баланс)
  await driver.pause(5000);

  // 15.Обратить внимание на общий баланс.
  const totalBalanceAfter = await UApp.extractNumbersFromString(await SHome.text_TotalBalanceAmount.getText());
  // 15.1.Отображается общий баланс, уменьшенный на итоговую сумму перевода.
  const totalBalanceAfter_Expected = totalBalanceBefore - transferTotalAmountInNumbers;
  // /*отладка*/ console.log(' -->' + 
  //   '\n totalBalanceBefore = ' + totalBalanceBefore +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers +
  //   '\n totalBalanceAfter = ' + totalBalanceAfter +
  //   '\n totalBalanceAfter_Expected = ' + totalBalanceAfter_Expected + '\n'
  // );
  
  if (totalBalanceAfter > totalBalanceAfter_Expected) {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected + 1);
    // /*отладка*/ console.log('\n --> totalBalanceAfter > totalBalanceAfter_Expected на 1 \n');

  } else if (totalBalanceAfter < totalBalanceAfter_Expected) {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected - 1);
    // /*отладка*/ console.log('\n --> totalBalanceAfter < totalBalanceAfter_Expected на 1 \n');
  } else {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected);
    // /*отладка*/ console.log('\n --> totalBalanceAfter = totalBalanceAfter_Expected \n');
  }

});
      // на 16.11.2023 не отображается итоговая сумма перевода (ее проверка отключена)
it('ab-e-tc-05.004p: -!- Transfer between your accounts/cards | Перевод между своими счетами/картами /частичен/', async () => {
  /**
  > Можно выполнить перевод денежных средств между своими счетами/картами. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступна кнопка Переводы между своими счетами.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Обратить внимание на общий баланс.
  1.1.Отображается общий баланс.

  2.Нажать кнопку Переводы между своими счетами.
  2.1.Открыт экран (перевод) Между своими счетами, где доступны поле выбора счета/карты отправки, поле выбора счета/карты получения, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.

  3.Нажать поле выбора счета/карты отправки.
  3.1.Открыто окно, где доступен список счетов/карт отправки.

  4.Выбрать счет/карту отправки (любой).
  4.1.Закрыто окно списка счетов/карт. В поле выбора счетов/карт отправки отображается выбранный счет/карта.

  5.Нажать поле выбора счета/карты получения.
  5.1.Открыто окно, где доступен список счетов/карт получения.

  6.Выбрать счет/карту получения (любой).
  6.1.Закрыто окно списка счетов/карт. В поле выбора счетов/карт получения отображается выбранный счет/карта.

  7.Нажать поле ввода суммы перевода и ввести сумму перевода.
  7.1.В поле ввода отображается введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.

  8.Нажать кнопку Продолжить.
  8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.

--- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  12.Нажать поле ввода кода из СМС и ввести полученный код.
  12.1.В поле ввода отображается введенный код, кнопка Продолжить активна.

  13.Нажать кнопку Продолжить.
  13.1.Открыт экран без названия, где доступна кнопка Вернуться на главную.

  14.Нажать кнопку Вернуться на главную.
  14.1.Открыт главный экран, где в разделе Общий баланс отображаются общий баланс.

  15.Обратить внимание на общий баланс.
  15.1.Отображается общий баланс, уменьшенный на итоговую сумму перевода.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-05.004p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const cardNumber_Sender = DCard.cardNumber_Humo_10; // '5000'
  const cardNumber_Receiver = DCard.cardNumber_Humo_101; // '1080';
  const moneyAmount = await UApp.generateRandomChars(4, 'amount');
  
  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);

  // 1.Обратить внимание на общий баланс.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // 1.1.Отображается общий баланс.
  const totalBalanceBefore = await UApp.extractNumbersFromString(await SHome.text_TotalBalanceAmount.getText());
  // const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');

  // 2.Нажать кнопку Переводы между своими счетами.
  await SHome.button_TransferBetweenCards.click();
  // 2.1.Открыт экран (перевод) Между своими счетами, где доступны поле выбора счета/карты отправки, поле выбора счета/карты получения, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.

  // 3.Нажать поле выбора счета/карты отправки.
  await STraBe.button_OpenCardsList_From.click();
  // 3.1.Открыто окно, где доступен список счетов/карт отправки.
  await WCardsS.titleWindow_SenderSelectAccount_Ru.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Создать массив видимых элементов.
  let rawArray = await WCardsS.items_Window_SelectCardOfSender_CardNumber;
  // /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  let dataArray = [];
  const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
  const elementAttributeValue = WCardsS.text_ElementAttributeValue_En_Expected_Number;
  await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> dataArray = ' + dataArray);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-1 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-1 карт) = "${dataArray}"`);
  }

  // 4.Выбрать счет/карту отправки (любой).
  for (let i = 0; i < dataArray.length; i++) {
    // /*отладка*/ console.log('\n --> cardNumber_Receiver = ' + await dataArray[i].getText());
    if ((await dataArray[i].getText()).includes(cardNumber_Sender.slice(-4))) {
      await dataArray[i].click();
      break;
    }
  }
  // 4.1.Закрыто окно списка счетов/карт. В поле выбора счетов/карт отправки отображается выбранный счет/карта.

  // 5.Нажать поле выбора счета/карты получения.
  await STraBe.button_OpenCardsList_To.click(); // STraTo.button_OpenCardsList_From
  // 5.1.Открыто окно, где доступен список счетов/карт получения.
  await WCardsR.titleWindow_ReceiverSelectCard_Ru.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Создать массив видимых элементов.
  rawArray = await WCardsS.items_Window_SelectCardOfSender_CardNumber; // WCardsR.items_Window_SelectCardOfReceiver_TextView
  // /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  dataArray = [];
  // const elementAttributeKey = WCardsR.text_ElementAttributeKey_En_Expected;
  // const elementAttributeValue = WCardsR.text_ElementAttributeValue_En_Expected;
  await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  // /*отладка*/ console.log('\n --> dataArray = ' + dataArray);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-2 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив-2 карт) = "${dataArray}"`);
  }
  
  // 6.Выбрать счет/карту получения (любой).
  for (let i = 0; i < dataArray.length; i++) {
    // /*отладка*/ console.log('\n --> cardNumber_Sender = ' + await dataArray[i].getText());
    if ((await dataArray[i].getText()).includes(cardNumber_Receiver.slice(-4))) {
      await dataArray[i].click();
      break;
    }
  }
  // 6.1.Закрыто окно списка счетов/карт. В поле выбора счетов/карт получения отображается выбранный счет/карта.

  // 7.Нажать поле ввода суммы перевода и ввести сумму перевода.
  await STraBe.input_TransferAmount.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // 7.1.В поле ввода отображается введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение
  const amountSeparatedThousandths = await UApp.separateThousandthsOfNumber(moneyAmount);
  await expect(STraBe.input_TransferAmount).toHaveText(amountSeparatedThousandths);
  // await driver.hideKeyboard();
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await SCards.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await SCards.transferTotalAmount.getText()
  // );
        // await STraBe.text_TransferTotalAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Ждем отображения всех цифр итоговой суммы (последняя цифра может долго не появляться)
  await driver.pause(3000);

  const transferCommissionInNumbers = await UApp.extractNumbersFromString(await STraBe.text_TransferCommission.getText());
        // const transferTotalAmountInNumbers = await UApp.extractNumbersFromString(await STraBe.text_TransferTotalAmount.getText());
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n transferCommissionInNumbers = ' + transferCommissionInNumbers +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers
  // );
        // - итоговая сумма
        const amountInNumbers = Number(moneyAmount) + transferCommissionInNumbers;
        // await expect(transferTotalAmountInNumbers).toStrictEqual(amountInNumbers);

  // 8.Нажать кнопку Продолжить.
  await STraBe.button_Continue.click();
  // 8.1.Открыт экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Продолжить.
  
// --- ТРЕБУЕТСЯ автоматически получать код из СМС ---

  // 9.Нажать поле ввода кода из СМС и ввести полученный код.
  await SSms.input_SmsCode.click();
  await expect(await driver.isKeyboardShown()).toBe(true);
  // const text_SmsCodeReceived_Expected = await UApp.generateRandomChars(6);
  // await UDev.androidKeyboardTypeIn(text_SmsCodeReceived_Expected);



// --- на 24102025 вводится ВРУЧНУЮ во время паузы (ниже)
// * Пауза для контроля экрана.
// await driver.pause(30000);
await SSms.smsCodeInput();

  
  // 9.1.В поле ввода отображается введенный код, кнопка Продолжить активна.
  // - введенный код ?
  // await expect(SSms.input_SmsCode).toHaveText(text_SmsCodeReceived_Expected);
  // - кнопка Продолжить
  await expect(SSms.button_Continue).toBeEnabled();

  // 10.Нажать кнопку Продолжить.
  await SSms.button_Continue.click();
  // 10.1.Открыт экран без названия, где доступна кнопка Вернуться на главную.

  // 11.Нажать кнопку Вернуться на главную.
  await STraBe.button_BackToHome.click();
  // 11.1.Открыт главный экран, где в разделе Общий баланс отображаются общий баланс.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  // * Ждем обновления баланса (может долго отображаться предыдущий баланс)
  await driver.pause(5000);

  // 12.Обратить внимание на общий баланс.
  const totalBalanceAfter = await UApp.extractNumbersFromString(await SHome.text_TotalBalanceAmount.getText());
  // 12.1.Отображается общий баланс, уменьшенный на итоговую сумму перевода.
        // const totalBalanceAfter_Expected = totalBalanceBefore - transferTotalAmountInNumbers;
        const totalBalanceAfter_Expected = totalBalanceBefore - amountInNumbers;
  // /*отладка*/ console.log(' -->' + 
  //   '\n totalBalanceBefore = ' + totalBalanceBefore +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers +
  //   '\n totalBalanceAfter = ' + totalBalanceAfter +
  //   '\n totalBalanceAfter_Expected = ' + totalBalanceAfter_Expected + '\n'
  // );
  
  if (totalBalanceAfter > totalBalanceAfter_Expected) {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected + 1);
    // /*отладка*/ console.log('\n --> totalBalanceAfter > totalBalanceAfter_Expected на 1 \n');

  } else if (totalBalanceAfter < totalBalanceAfter_Expected) {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected - 1);
    // /*отладка*/ console.log('\n --> totalBalanceAfter < totalBalanceAfter_Expected на 1 \n');
  } else {
    await expect(totalBalanceAfter).toStrictEqual(totalBalanceAfter_Expected);
    // /*отладка*/ console.log('\n --> totalBalanceAfter = totalBalanceAfter_Expected \n');
  }

});

// ab-ts-06p: Тестирование платежей |вер.20231225| /Тестов 2 (частичен 1)/
it('ab-e-tc-06.001p: Payment for mobile communication (from account) | Оплата мобильной связи (со счета)', async () => {
  /**
  > Можно выполнить оплату услуг мобильной связи (с карты или счета). <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/счет с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Платежи.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Обратить внимание на карты в разделах Баланс или Мои карты, на счета в разделе Кошелек.
  1.1.Отображаются балансы карт, счетов.

  2.Нажать кнопку Платежи в панели навигации.
  2.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.

  3.Нажать кнопку Мобильные операторы.
  3.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  4.Нажать кнопку оператора (любого).
  4.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

  5.Нажать поле ввода номера телефона и ввести валидный номер.
  5.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.

  6.Нажать кнопку Продолжить.
  6.1.Открыт экран Платеж, где доступны поле выбора карты/счета, поле ввода суммы платежа, неактивная кнопка Продолжить.

  7.Нажать поле выбора карты/счета отправки платежа.
  7.1.Открыто окно, где доступен список карт/счетов.

  8.Выбрать карту или счет (любые).
  8.1.Закрыто окно списка карт/счетов. В поле выбора счета отображается выбранные карта или счет отправки платежа.

  9.Нажать поле ввода суммы платежа и ввести валидное число.
  9.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Оплатить активна.

  10.Нажать кнопку Оплатить.
  10.1.Открыт экран, где доступны кнопка квитанции, кнопка сохранения в PDF, кнопка фискального чека и кнопка возврата на главный экран.

  11.Нажать кнопку возврата на главный экран.
  11.1.Открыт главный экран приложения, где в соответствующем разделе отображается баланс выбранных ранее карты/счета отправки платежа, уменьшенный на итоговую сумму перевода.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-06.001p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const phoneNumberDigits = String(await UApp.extractNumbersFromString(phoneNumber));

  const moneyAmount = '500'; // ...= await UApp.generateRandomChars(4, 'amount');
  const moneySourceName = 'ACCOUNT_UZS ** 7000'; // название карты или счете
  const moneySourceNumber = DCard.cardNumber_Humo_10; // номер карты или счете
  const moneySourceField = 'cardName'; // 'cardNumber'; // поле карты или счете
  
  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);
  /**/ await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  
  // 1.Обратить внимание на карты в разделах Баланс или Мои карты, на счета в разделе Кошелек.
  // * Прокрутить, делая видимыми следующие элементы.
  let scrollDirection = SHome.scrollTo_MonitoringSection;
  await $(`android=${scrollDirection}`);
  // 1.1.Отображаются балансы карт, счетов.
  await driver.pause(1500); // Ждем стабилизации экрана (иногда система не видит нужный элемент)
  await SHome.text_AccountBalance_1.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Сохранить сумму баланса счета до операции.
  const moneyBalanceBefore = await UApp.extractNumbersFromString(await SHome.text_AccountBalance_1.getText()); // accountBalanceBefore

  // 2.Нажать кнопку Платежи в панели навигации.
  await SHome.bottomNav_Payments.click();
  // 2.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.
  await expect(SPay.titleScreen_Payments_Ru).toHaveText(SPay.titleScreen_Payments_Ru_Expected);

  // 3.Нажать кнопку Мобильные операторы.
  await SPay.item_MobileOperators.click();
  // 3.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  // 4.Нажать кнопку оператора (любого).
  await SPay.item_UzMobile_En.click();
  // 4.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

  // 5.Нажать поле ввода номера телефона и ввести валидный номер.
  await SPay.input_PhoneNumber.click();
  await UDev.androidKeyboardTypeIn(phoneNumberDigits);
  // 5.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.
  await expect(SPay.input_PhoneNumber).toHaveText(phoneNumberDigits);

  // 6.Нажать кнопку Продолжить.
  await SPay.button_Continue.click();
  // 6.1.Открыт экран Платеж, где доступны поле выбора карты/счета, поле ввода суммы платежа, неактивная кнопка Продолжить.
  await SPay.button_OpenCardsList_From.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});

  // 7.Нажать поле выбора карты/счета отправки платежа.
  await SPay.button_OpenCardsList_From.click();
  // 7.1.Открыто окно, где доступен список карт/счетов.
  // * Создать массив видимых элементов.
  const rawArrayKey = 'WCardsS.items_titleWindow_SenderSelectCard';
  const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
  const elementAttributeValues = [
    WCardsS.text_ElementAttributeValue_En_Expected_Name,
    WCardsS.text_ElementAttributeValue_En_Expected_Balance,
    WCardsS.text_ElementAttributeValue_En_Expected_Number,
    '' // cardDate
  ];
  scrollDirection = UApp.scrollForward;

  const dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollDirection);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray-2 (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив карт) = "${dataArray}"`);
  }
  // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
  //   console.log('\n --> dataArray.length = ' + dataArray.length +
  //   '\n' + dataArray[i].cardName +
  //   '\n' + dataArray[i].cardBalance +
  //   '\n' + dataArray[i].cardNumber +
  //   '\n' + dataArray[i].cardDate
  //   );
  // }

  // 8.Выбрать карту или счет (любые).
  // for (let i = 0; i < dataArray.length; i++) {
  //   if ( await dataArray[i].cardName.includes(cardName) ) { // (cardName.slice(-4)))
  //     await $(`//android.widget.TextView[@text="${await dataArray[i].cardName}"]`).click();
  //     break;
  //   }
  // }
  let selectedCard;
  switch (moneySourceField) {
    case 'cardName':
      selectedCard = dataArray.find(card => card.cardName.includes(moneySourceName));
      // await $(`//android.widget.TextView[@text="${selectedCard.cardName}"]`).click();
      break;
    case 'cardNumber':
      selectedCard = dataArray.find(card => card.cardNumber.includes(moneySourceNumber.slice(-4)));
      // await $(`//android.widget.TextView[@text="${selectedCard.cardNumber}"]`).click();
      break;
    default:
      // console.log(`\n --> Нет элемента (в dataArray): ${cardField}\n`);
      // break;
      throw new Error(`\n --> Нет элемента (в dataArray): ${moneySourceField}\n`);
  }
  // if (selectedCard) {
    await $(`//android.widget.TextView[@text="${selectedCard[moneySourceField]}"]`).click();
  // }
  // 8.1.Закрыто окно списка карт/счетов. В поле выбора счета отображается выбранные карта или счет отправки платежа.

  // 9.Нажать поле ввода суммы платежа и ввести валидное число.
  await SPay.input_TransferAmount.click();
  await UDev.androidKeyboardTypeIn(moneyAmount);
  // 9.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Оплатить активна.
  const input_TransferAmount = String(await UApp.extractNumbersFromString(await SPay.input_TransferAmount.getText()));
  // input_TransferAmount = String(input_TransferAmount);
  await expect(input_TransferAmount).toEqual(moneyAmount);
  // * Скрыть клавиатуру
  await driver.hideKeyboard();

  // 10.Нажать кнопку Оплатить.
  await SPay.button_Continue.click();
  // 10.1.Открыт экран, где доступны кнопка квитанции, кнопка сохранения в PDF, кнопка фискального чека и кнопка возврата на главный экран.
  await SPay.homeButton.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 20000});

  // 11.Нажать кнопку возврата на главный экран.
  await SPay.homeButton.click();
  // 11.1.Открыт главный экран приложения, где в соответствующем разделе отображается баланс выбранных ранее карты/счета отправки платежа, уменьшенный на итоговую сумму перевода.
  await SHome.text_AccountBalance_1.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  // * Сохранить сумму баланса счета после операции.
  const moneyBalanceAfter = await UApp.extractNumbersFromString(await SHome.text_AccountBalance_1.getText());
  // - баланс выбранного ранее счета отправки платежа, уменьшенный на итоговую сумму перевода
  const transferAmount = await UApp.extractNumbersFromString(moneyAmount);
  // /*отладка*/ console.log(
  //   'cardBalanceBeforeInNumbers = ' + cardBalanceBeforeInNumbers +
  //   '\n cardBalanceAfterInNumbers = ' + cardBalanceAfterInNumbers +
  //   '\n      transferAmount =     ' + transferAmount
  // );
  await expect(moneyBalanceAfter).toEqual(moneyBalanceBefore - transferAmount);
});




it.skip('ab-e-tc-06.001p: Payment for mobile communication (from account) | Оплата мобильной связи (со счета)', async () => {
  /**
  > Можно выполнить оплату услуг мобильной связи (с карты или счета). <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/счет с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Платежи.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Обратить внимание на карты в разделах Баланс или Мои карты, на счета в разделе Кошелек.
  1.1.Отображаются балансы карт, счетов.

  2.Нажать кнопку Платежи в панели навигации.
  2.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.

  3.Нажать кнопку Мобильные операторы.
  3.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  4.Нажать кнопку оператора (любого).
  4.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

  5.Нажать поле ввода номера телефона и ввести валидный номер.
  5.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.

  6.Нажать кнопку Продолжить.
  6.1.Открыт экран Платеж, где доступны поле выбора карты/счета, поле ввода суммы платежа, неактивная кнопка Продолжить.

  7.Нажать поле выбора карты/счета отправки платежа.
  7.1.Открыто окно, где доступен список карт/счетов.

  8.Выбрать карту или счет (любые).
  8.1.Закрыто окно списка карт/счетов. В поле выбора счета отображается выбранные карта или счет отправки платежа.

  9.Нажать поле ввода суммы платежа и ввести валидное число.
  9.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Оплатить активна.

  10.Нажать кнопку Оплатить.
  10.1.Открыт экран, где доступны кнопка квитанции, кнопка сохранения в PDF, кнопка фискального чека и кнопка возврата на главный экран.

  11.Нажать кнопку возврата на главный экран.
  11.1.Открыт главный экран приложения, где в соответствующем разделе отображается баланс выбранных ранее карты/счета отправки платежа, уменьшенный на итоговую сумму перевода.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-06.001p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  
  const paymentReceiver = 'Мобильные операторы';
  const mobileOperator = 'UzMobile';
  
  const moneySourceName = 'ACCOUNT_UZS ** 7000'; // название карты или счете
  const moneySourceNumber = DCard.cardNumber_Humo_10; // номер карты или счете
  const moneySourceField = 'cardName'; // 'cardNumber'; // поле карты или счете
  const moneyAmount = '500'; // ...= await UApp.generateRandomChars(4, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);
  
  // 1.Обратить внимание на карты в разделах Баланс или Мои карты, на счета в разделе Кошелек.
  const scrollTo = SHome.scrollTo_MonitoringSection;
  const moneyBalanceElement = SHome.text_AccountBalance_1;
  // await SHome.bottomNav_Cards.click();
  // 1.1.Отображаются балансы карт, счетов.
  const moneyBalanceBefore = await SPayM.goAndGetBalance(scrollTo, moneyBalanceElement);

  // 2.Нажать кнопку Платежи в панели навигации.
  await SHome.bottomNav_Payments.click();
  // 2.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.
  
  // 3.Нажать кнопку Мобильные операторы.
  await SPay.item_PaymentReceiver(paymentReceiver).click();
  // 3.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  // 4.Нажать кнопку оператора (любого).
  await SPayM.item_MobileOperator(mobileOperator).click();
  // 4.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

  // 5.Нажать поле ввода номера телефона и ввести валидный номер.
  await SPayM.enterPhoneNumberAndContinue(phoneNumber);
  // 5.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.
  // 6.Нажать кнопку Продолжить.
  // 6.1.Открыт экран Платеж, где доступны поле выбора карты/счета, поле ввода суммы платежа, неактивная кнопка Продолжить.

  // 7.Нажать поле выбора карты/счета отправки платежа.
  const scrollDirection = UApp.scrollForward;
  await SPayM.selectPaymentSource(scrollDirection, moneySourceField, moneySourceName, moneySourceNumber);
  // 7.1.Открыто окно, где доступен список карт/счетов.
  // 8.Выбрать карту или счет (любые).
  // 8.1.Закрыто окно списка карт/счетов. В поле выбора счета отображается выбранные карта или счет отправки платежа.

  // 9.Нажать поле ввода суммы платежа и ввести валидное число.
  await SPayM.enterPaymentAmountAndContinue(moneyAmount);
  // 9.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Оплатить активна.
  // 10.Нажать кнопку Оплатить.
  // 10.1.Открыт экран, где доступны кнопка квитанции, кнопка сохранения в PDF, кнопка фискального чека и кнопка возврата на главный экран.
  
  // 11.Нажать кнопку возврата на главный экран.
  // await SPayM.goHomeAndCheckBalance(moneyBalanceBefore, moneyAmount);
  const elementForGo = SPay.homeButton;
  await SPayM.goAndCheckBalance(scrollTo, moneyBalanceElement, elementForGo, moneyBalanceBefore, moneyAmount);
  // 11.1.Открыт главный экран приложения, где в соответствующем разделе отображается баланс выбранных ранее карты/счета отправки платежа, уменьшенный на итоговую сумму перевода.
  
});

it('ab-e-tc-06.001p: Payment for mobile communication (from account) | Оплата мобильной связи (со счета)', async () => {
  /**
  > Можно выполнить оплату услуг мобильной связи (с карты или счета). <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/счет с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Платежи.
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
  *
ШАГИ:
  1.Обратить внимание на карты в разделах Баланс или Мои карты, на счета в разделе Кошелек.
  1.1.Отображаются балансы карт, счетов.

  2.Нажать кнопку Платежи в панели навигации.
  2.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.

  3.Нажать кнопку Мобильные операторы.
  3.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  4.Нажать кнопку оператора (любого).
  4.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

  5.Нажать поле ввода номера телефона и ввести валидный номер.
  5.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.

  6.Нажать кнопку Продолжить.
  6.1.Открыт экран Платеж, где доступны поле выбора карты/счета, поле ввода суммы платежа, неактивная кнопка Продолжить.

  7.Нажать поле выбора карты/счета отправки платежа.
  7.1.Открыто окно, где доступен список карт/счетов.

  8.Выбрать карту или счет (любые).
  8.1.Закрыто окно списка карт/счетов. В поле выбора счета отображается выбранные карта или счет отправки платежа.

  9.Нажать поле ввода суммы платежа и ввести валидное число.
  9.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Оплатить активна.

  10.Нажать кнопку Оплатить.
  10.1.Открыт экран, где доступны кнопка квитанции, кнопка сохранения в PDF, кнопка фискального чека и кнопка возврата на главный экран.

  11.Нажать кнопку возврата на главный экран.
  11.1.Открыт главный экран приложения, где в соответствующем разделе отображается баланс выбранных ранее карты/счета отправки платежа, уменьшенный на итоговую сумму перевода.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-06.001p';
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  
  const paymentReceiver = 'Мобильные операторы';
  const mobileOperator = 'UzMobile';
  
  const moneySourceName = 'ACCOUNT_UZS ** 7000'; // название карты или счете
  const moneySourceNumber = DCard.cardNumber_Humo_10; // номер карты или счете
  const moneySourceField = 'cardNumber'; // 'cardName'; // поле карты или счете
  const moneyAmount = '500'; // ...= await UApp.generateRandomChars(4, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);
  
  // 1.Обратить внимание на карты в разделах Баланс или Мои карты, на счета в разделе Кошелек.
  const scrollTo = SHome.scrollTo_MonitoringSection; // элемент, к которому требуется прокрутка экрана
  const moneyBalanceElement = SHome.text_AccountBalance_1; // элемент баланса источника оплаты
  const elementForGo = SHome.bottomNav_Cards; // ''; // элемент для перехода на экран мои карты
  // await SHome.bottomNav_Cards.click();
  // 1.1.Отображаются балансы карт, счетов.
  const moneyBalanceBefore = await SPayM.goAndGetBalance(scrollTo, moneyBalanceElement, elementForGo,
    moneySourceName, moneySourceNumber, moneySourceField);




  // const elementForGo = SHome.bottomNav_Cards; // SPay.homeButton;
  // await SPayM.goAndCheckBalance(scrollTo, moneyBalanceElement, elementForGo, moneyBalanceBefore, moneyAmount);






  // 2.Нажать кнопку Платежи в панели навигации.
  await SHome.bottomNav_Payments.click();
  // 2.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.
  
  // 3.Нажать кнопку Мобильные операторы.
  await SPay.item_PaymentReceiver(paymentReceiver).click();
  // 3.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  // 4.Нажать кнопку оператора (любого).
  await SPayM.item_MobileOperator(mobileOperator).click();
  // 4.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

  // 5.Нажать поле ввода номера телефона и ввести валидный номер.
  await SPayM.enterPhoneNumberAndContinue(phoneNumber);
  // 5.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.
  // 6.Нажать кнопку Продолжить.
  // 6.1.Открыт экран Платеж, где доступны поле выбора карты/счета, поле ввода суммы платежа, неактивная кнопка Продолжить.

  // 7.Нажать поле выбора карты/счета отправки платежа.
  const scrollDirection = UApp.scrollForward;
  await SPayM.selectPaymentSource(scrollDirection, moneySourceField, moneySourceName, moneySourceNumber);
  // 7.1.Открыто окно, где доступен список карт/счетов.
  // 8.Выбрать карту или счет (любые).
  // 8.1.Закрыто окно списка карт/счетов. В поле выбора счета отображается выбранные карта или счет отправки платежа.

  // 9.Нажать поле ввода суммы платежа и ввести валидное число.
  await SPayM.enterPaymentAmountAndContinue(moneyAmount);
  // 9.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Оплатить активна.
  // 10.Нажать кнопку Оплатить.
  // 10.1.Открыт экран, где доступны кнопка квитанции, кнопка сохранения в PDF, кнопка фискального чека и кнопка возврата на главный экран.



// await SGen.returnToHomeScreen();



  // 11.Нажать кнопку возврата на главный экран.
  // await SPayM.goHomeAndCheckBalance(moneyBalanceBefore, moneyAmount);
  // const elementForGo = SHome.bottomNav_Cards; // SPay.homeButton;
  await SPayM.goAndCheckBalance(scrollTo, moneyBalanceElement, elementForGo, moneyBalanceBefore, moneyAmount);
  // 11.1.Открыт главный экран приложения, где в соответствующем разделе отображается баланс выбранных ранее карты/счета отправки платежа, уменьшенный на итоговую сумму перевода.
  
});







// it('ab-e-tc-06.001p: Payment for mobile communication (from account) | Оплата мобильной связи (со счета)', async () => {
//   /**
//   > Можно выполнить оплату услуг мобильной связи (с карты или счета). <
// ПРЕДУСЛОВИЯ:
//   1.Выполнена авторизация пользователя (уже имеющего карту/счет с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в панели навигации доступна кнопка Платежи.
// ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
//   *
// ШАГИ:
//   1.Обратить внимание на карты в разделах Баланс или Мои карты, на счета в разделе Кошелек.
//   1.1.Отображаются балансы карт, счетов.

//   2.Нажать кнопку Платежи в панели навигации.
//   2.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.

//   3.Нажать кнопку Мобильные операторы.
//   3.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

//   4.Нажать кнопку оператора (любого).
//   4.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

//   5.Нажать поле ввода номера телефона и ввести валидный номер.
//   5.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.

//   6.Нажать кнопку Продолжить.
//   6.1.Открыт экран Платеж, где доступны поле выбора карты/счета, поле ввода суммы платежа, неактивная кнопка Продолжить.

//   7.Нажать поле выбора карты/счета отправки платежа.
//   7.1.Открыто окно, где доступен список карт/счетов.

//   8.Выбрать карту или счет (любые).
//   8.1.Закрыто окно списка карт/счетов. В поле выбора счета отображается выбранные карта или счет отправки платежа.

//   9.Нажать поле ввода суммы платежа и ввести валидное число.
//   9.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Оплатить активна.

//   10.Нажать кнопку Оплатить.
//   10.1.Открыт экран, где доступны кнопка квитанции, кнопка сохранения в PDF, кнопка фискального чека и кнопка возврата на главный экран.

//   11.Нажать кнопку возврата на главный экран.
//   11.1.Открыт главный экран приложения, где в соответствующем разделе отображается баланс выбранных ранее карты/счета отправки платежа, уменьшенный на итоговую сумму перевода.
//   *
//   */

//   // > Вывести информацию о тесте в консоль
//   tcNum = 'ab-e-tc-06.001p';
//   /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

//   // > Установить тестовые данные
//   const phoneNumber = DCard.phoneNumber_10;
//   const phoneNumber_pass = DCard.phoneNumber_10_pass;
//   const phoneNumberDigits = String(await UApp.extractNumbersFromString(phoneNumber));

//   const moneyAmount = '500'; // ...= await UApp.generateRandomChars(4, 'amount');
//   const moneySourceName = 'ACCOUNT_UZS ** 7000'; // название карты или счете
//   const moneySourceNumber = DCard.cardNumber_Humo_10; // номер карты или счете
//   const moneySourceField = 'cardName'; // 'cardNumber'; // поле карты или счете
  
//   // П.1.Выполнить авторизацию пользователя.
//  // await authorizeUser();
//   await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);
//   /**/ await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  
//   // 1.Обратить внимание на карты в разделах Баланс или Мои карты, на счета в разделе Кошелек.
// // await SHome.generateMoneySourcestList();


//   // * Прокрутить, делая видимыми следующие элементы.
//   let scrollDirection = SHome.scrollTo_MonitoringSection;
//   await $(`android=${scrollDirection}`);
//   // 1.1.Отображаются балансы карт, счетов.
//   await driver.pause(1500); // Ждем стабилизации экрана (иногда система не видит нужный элемент)
//   await SHome.text_AccountBalance_1.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
//   // * Сохранить сумму баланса счета до операции.
//   const moneyBalanceBefore = await UApp.extractNumbersFromString(await SHome.text_AccountBalance_1.getText()); // accountBalanceBefore

//   // 2.Нажать кнопку Платежи в панели навигации.
//   await SHome.bottomNav_Payments.click();
//   // 2.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.
//   await expect(SPay.titleScreen_Payments_Ru).toHaveText(SPay.titleScreen_Payments_Ru_Expected);

//   // 3.Нажать кнопку Мобильные операторы.
// await SPay.selectPaymentReceiver('Мобильные операторы');
//   await SPay.item_MobileOperators.click();
//   // 3.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

//   // 4.Нажать кнопку оператора (любого).
// await SPayM.selectMobileOperator('UzMobile');

//   await SPay.item_UzMobile_En.click();
//   // 4.1.Открыт экран оператора, где доступны поле ввода номера телефона, неактивная кнопка Продолжить.

//   // 5.Нажать поле ввода номера телефона и ввести валидный номер.
// await enterPhoneNumberAndContinue(DCard.phoneNumber_10);
//   await SPay.input_PhoneNumber.click();
//   await UDev.androidKeyboardTypeIn(phoneNumberDigits);
//   // 5.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.
//   await expect(SPay.input_PhoneNumber).toHaveText(phoneNumberDigits);

//   // 6.Нажать кнопку Продолжить.
// await proceedToPaymentScreen();
//   await SPay.button_Continue.click();
//   // 6.1.Открыт экран Платеж, где доступны поле выбора карты/счета, поле ввода суммы платежа, неактивная кнопка Продолжить.
//   await SPay.button_OpenCardsList_From.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});

//   // 7.Нажать поле выбора карты/счета отправки платежа.
// await selectPaymentSource('ACCOUNT_UZS ** 7000');
//   await SPay.button_OpenCardsList_From.click();
//   // 7.1.Открыто окно, где доступен список карт/счетов.
//   // * Создать массив видимых элементов.
//   const rawArrayKey = 'WCardsS.items_titleWindow_SenderSelectCard';
//   const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected;
//   const elementAttributeValues = [
//     WCardsS.text_ElementAttributeValue_En_Expected_Name,
//     WCardsS.text_ElementAttributeValue_En_Expected_Balance,
//     WCardsS.text_ElementAttributeValue_En_Expected_Number,
//     '' // cardDate
//   ];
//   scrollDirection = UApp.scrollForward;

//   const dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollDirection);
//   // * Контролируем непустоту массива.
//   if(dataArray.length === 0){
//     // throw " Не сформирован dataArray-2 (массив карт) = '" + dataArray + "'";
//     throw new Error(`Не сформирован dataArray (массив карт) = "${dataArray}"`);
//   }
//   // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
//   //   console.log('\n --> dataArray.length = ' + dataArray.length +
//   //   '\n' + dataArray[i].cardName +
//   //   '\n' + dataArray[i].cardBalance +
//   //   '\n' + dataArray[i].cardNumber +
//   //   '\n' + dataArray[i].cardDate
//   //   );
//   // }

//   // 8.Выбрать карту или счет (любые).
//   // for (let i = 0; i < dataArray.length; i++) {
//   //   if ( await dataArray[i].cardName.includes(cardName) ) { // (cardName.slice(-4)))
//   //     await $(`//android.widget.TextView[@text="${await dataArray[i].cardName}"]`).click();
//   //     break;
//   //   }
//   // }
//   let selectedCard;
//   switch (moneySourceField) {
//     case 'cardName':
//       selectedCard = dataArray.find(card => card.cardName.includes(moneySourceName));
//       // await $(`//android.widget.TextView[@text="${selectedCard.cardName}"]`).click();
//       break;
//     case 'cardNumber':
//       selectedCard = dataArray.find(card => card.cardNumber.includes(moneySourceNumber.slice(-4)));
//       // await $(`//android.widget.TextView[@text="${selectedCard.cardNumber}"]`).click();
//       break;
//     default:
//       // console.log(`\n --> Нет элемента (в dataArray): ${cardField}\n`);
//       // break;
//       throw new Error(`\n --> Нет элемента (в dataArray): ${moneySourceField}\n`);
//   }
//   // if (selectedCard) {
//     await $(`//android.widget.TextView[@text="${selectedCard[moneySourceField]}"]`).click();
//   // }
//   // 8.1.Закрыто окно списка карт/счетов. В поле выбора счета отображается выбранные карта или счет отправки платежа.

//   // 9.Нажать поле ввода суммы платежа и ввести валидное число.
// await enterPaymentAmountAndContinue('500');
//   await SPay.input_TransferAmount.click();
//   await UDev.androidKeyboardTypeIn(moneyAmount);
//   // 9.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Оплатить активна.
//   const input_TransferAmount = String(await UApp.extractNumbersFromString(await SPay.input_TransferAmount.getText()));
//   // input_TransferAmount = String(input_TransferAmount);
//   await expect(input_TransferAmount).toEqual(moneyAmount);
//   // * Скрыть клавиатуру
//   await driver.hideKeyboard();

//   // 10.Нажать кнопку Оплатить.
// await makePayment();
//   await SPay.button_Continue.click();
//   // 10.1.Открыт экран, где доступны кнопка квитанции, кнопка сохранения в PDF, кнопка фискального чека и кнопка возврата на главный экран.
//   await SPay.homeButton.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 20000});

//   // 11.Нажать кнопку возврата на главный экран.
//   await SPay.homeButton.click();
//   // 11.1.Открыт главный экран приложения, где в соответствующем разделе отображается баланс выбранных ранее карты/счета отправки платежа, уменьшенный на итоговую сумму перевода.
//   await SHome.text_AccountBalance_1.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
//   // * Сохранить сумму баланса счета после операции.
//   const moneyBalanceAfter = await UApp.extractNumbersFromString(await SHome.text_AccountBalance_1.getText());
//   // - баланс выбранного ранее счета отправки платежа, уменьшенный на итоговую сумму перевода
//   const transferAmount = await UApp.extractNumbersFromString(moneyAmount);
//   // /*отладка*/ console.log(
//   //   'cardBalanceBeforeInNumbers = ' + cardBalanceBeforeInNumbers +
//   //   '\n cardBalanceAfterInNumbers = ' + cardBalanceAfterInNumbers +
//   //   '\n      transferAmount =     ' + transferAmount
//   // );
//   await expect(moneyBalanceAfter).toEqual(moneyBalanceBefore - transferAmount);
// });





// ab-ts-07p: Тестирование истории      |вер.20230913| /Тестов 0/
// ab-ts-08p: Тестирование вкладов      |вер.20230913| /Тестов 0/
// ab-ts-09p: Тестирование микрозаймов  |вер.20230913| /Тестов 0/
// ab-ts-10p: Тестирование кошелька     |вер.20230913| /Тестов 0/
// ab-ts-11p: Тестирование курсов валют |вер.20230913| /Тестов 0/



/* EOF describe */
});

/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */