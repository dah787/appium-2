


const DCard   = driver.pause(5000);



describe('ab-ts-01p: Testing of operations provision | Тестирование обеспечения операций', () => {


// перенесен сюда 03.11.2023
// it('ab-u-tc-01.002p: !? Contacting bank | Обращение в банк /Тест выполнен частично: -1-Вызов отсутствует в меню, -2-Telegram является каналом.../', async () => {
//   /**
//   Parameters
//   на 23.08.2023 автотест выполнен частично:
//   - Вызов отсутствует в меню
//   - Telegram является каналом, к которому нужно присоединиться, выбрать другие параметры
//   - WhatApp на деле подключается к Telegram
//     * > базовые тесты (см. файл ТК 1 (Регистрация)):
//     * - 22 Стр. регист, кнопка "Поддержка": Позитив (ш?: 1)
//     * - ? ... <
//   > Можно осуществить контакты со службой поддержки приложения на экране входа в приложение. <
// ПРЕДУСЛОВИЯ:
//   1.Установлены соответствующие мессенджеры (Telegram, WhatsApp, ...) в тестируемом устройстве, а также выполнен вход в аккаунты пользователя.
//   2.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступна кнопка Поддержка.
// ПОСТУСЛОВИЯ: 1.Нет.
//   *
// ШАГИ:
//   1.Нажать кнопку Поддержка.
//   1.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов, Telegram, WhatsApp (возможна другая комбинация контактов).
  
//   2.Нажать (если присутствует) элемент средства контактов Вызов.
//   2.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов, Telegram, WhatsApp (возможна другая комбинация контактов).

//   3.Нажать кнопку совершения телефонного вызова.
//   3.1.Открыт экран устройства выполнения телефонного вызова, где доступна кнопка завершения вызова.

//   4.Выполнить разговор со службой поддержки и/или нажать кнопку завершения вызова.
//   4.1.Открыт экран устройства со списком выполненных телефонных звонков, а также доступна кнопка устройства Назад.

//   5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
//   5.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов.

//   6.Нажать (если присутствует) элемент средства контактов Telegram.
//   6.1.Открыт экран приложения Telegram с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения.

//   7.Выполнить переписку со службой поддержки, и/или ввести соответствующий текст в поле ввода сообщения и отправить его.
//   7.1.Введенный текст отображается в переписке отправленным, а также доступна кнопка устройства Назад.

//   8.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
//   8.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов.

//   9.Выполнить шаги 2-8 для каждого доступного средства контакта.

//   10.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
//   10.1.Открыт экран входа в приложение.
//   *
//   */

//   // > Вывести информацию о тесте в консоль
//   tcNum = 'ab-u-tc-01.002p';
//   /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

//   // П.1.Установлены соответствующие мессенджеры (Telegram, WhatsApp, ...) в тестируемом устройстве, а также выполнен вход в аккаунты пользователя.
//   // -?-
//   // П.2.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступна кнопка Поддержка:
//   await SAuth.selectLanguage(SAuth.text_LanguageRussian_En);
//   // - кнопка Поддержка
//   await expect(SAuth.button_Support).toBeDisplayed();

//   // 1.Нажать кнопку Поддержка.
//   await SAuth.button_Support.click();
//   // 1.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов: Вызов, Telegram, WhatsApp (возможна другая комбинация контактов):
//   // - окно
//   await expect(SAuth.titleWindow_Support).toBeDisplayed();
//     // // - элемент выбора средств контактов: Вызов
//     // await expect(SAuth.supportContactsListItemCall).toBeDisplayed();
//   // - элемент выбора средств контактов: Telegram
//   await expect(SAuth.item_Telegram).toBeDisplayed();
//   // - элемент выбора средств контактов: WhatsApp
//   await expect(SAuth.item_WhatsApp).toBeDisplayed();

//     // // 2.Нажать (если присутствует) элемент средства контактов Вызов.
//     // await SAuth.supportContactsListItemCall.click();
//     // // 2.1.Открыт экран устройства для совершения телефонного вызова, где в поле ввода вызываемого номера отображается номер телефона службы поддержки, а также доступна кнопка совершения телефонного вызова:
//     // // - экран устройства для совершения телефонного вызова
//     // // -?-
//     // // - кнопка совершения телефонного вызова
//     // await expect(DSDial.button_Call).toBeDisplayed();
//     // // - номер телефона службы поддержки
//     // // await expect(DSDial.androidDialerphoneNumber).toBeDisplayed(); // в этом поле номер не читается, поэтому:
//     // // -* скрыть клавиатуру, нажав кнопку Назад и сравниваем номера:
//     // // await driver.back();
//     // // // /*отладка*/ console.log('\n --> phoneNumber = ' + await ASDial.input_Search.getText() + '\n');
//     // // await expect(DSDial.input_Search).toHaveText(SAuth.text_PhoneNumber_Expected);
//     // await expect(DSDial.androidDialerphoneNumber).toHaveText(SAuth.text_PhoneNumber_Expected);
    
//     // // пп.3-4 о совершении телефонного звонка автотестированию не подлежат

//     // // 5.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
//     // await UDev.androidPressBackButton(3);
//     // // 5.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
//     // // - окно > + проверяется в п.1
//     // // - элемент выбора средств контактов: Вызов > + проверяется в п.1
//     // // - элемент выбора средств контактов: Telegram > waitForDisplayed: v.13 не успевает видеть items_titleWindow_CallBank...
//     // await SAuth.item_Telegram.waitForDisplayed({ timeout: 20000 });

//   // 6.Нажать (если присутствует) элемент средства контактов Telegram.
//   await SAuth.item_Telegram.click();
//   // 6.1.Открыт экран приложения Telegram с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения:
//   // - экран приложения Telegram с перепиской со службой поддержки > waitForDisplayed: v.13 не успевает открыть Telegram (почему-то сначала запускает браузер)
//   await STlg.titleScreen_ApexbankChat_En.waitForDisplayed({ timeout: 20000 });
//   await expect(STlg.titleScreen_ApexbankChat_En).toHaveText(STlg.titleScreen_ApexbankChat_En_Expected);
//   // - кнопка присоединиться к Telegram-каналу
//   await expect(STlg.button_JoinApexbankChat_Ru).toBeDisplayed();
//   // // - поле ввода сообщения
//   // await expect(STlg.input_ChaMessage).toBeDisplayed();
  
//   // п.7 о совершении переписки автотестированию не подлежит

//   // 5a.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
//   await UDev.androidPressBackButton(2);
//   // 5a.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
//   // - окно > + проверяется в п.1
//   // - элемент выбора средств контактов: Вызов > + проверяется в п.1
//   // - элемент выбора средств контактов: Telegram > waitForDisplayed: v.13 не успевает видеть items_titleWindow_CallBank...
//   await SAuth.item_Telegram.waitForDisplayed({ timeout: 20000 });

//   // 6a.Нажать (если присутствует) элемент средства контактов WhatsApp.
//   await SAuth.item_WhatsApp.click();
//   // 6a.1.Открыт экран приложения WhatsApp с перепиской со службой поддержки, где отображается предыдущая переписка и доступно поле ввода сообщения:
//   // - экран приложения WhatsApp с перепиской со службой поддержки
//   await STlg.titleScreen_ApexbankChat_En.waitForDisplayed({ timeout: 20000 });
//   await expect(STlg.titleScreen_ApexbankChat_En).toHaveText(STlg.titleScreen_ApexbankChat_En_Expected);
//   // - кнопка присоединиться к WhatsApp-каналу
//   await expect(STlg.button_JoinApexbankChat_Ru).toBeDisplayed();
//   // // - поле ввода сообщения
//   // await expect(STlg.supportContactWhatsAppMessageInput).toBeDisplayed();
  
//   // п.7a о совершении переписки автотестированию не подлежит

//   // 8.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
//   await UDev.androidPressBackButton(2);
//   // 8.1.Открыто окно Контакт со службой поддержки, где доступны элементы выбора средств контактов:
//   // - окно > + проверяется в п.5
//   // - элемент выбора средств контактов: Вызов > + проверяется в п.5
//   // - элемент выбора средств контактов: Telegram > + проверяется в п.5

//   // 9.Выполнить шаги 2-8 для каждого доступного средства контакта.
//   // - шаги 2-8 для каждого > проверяется по мере их доступности

//   // 10.Вернуться к предыдущему состоянию приложения, нажимая кнопку устройства Назад.
//   // await driver.back();
//   await UDev.androidPressBackButton(1);
//   // 10.1.Открыт экран входа в приложение.
//   // - экран входа в приложение
//   await expect(SAuth.titleScreen_Welcome_Ru).toHaveText(SAuth.titleScreen_Welcome_Ru_Expected);
//   // - кнопка Поддержка
//   await expect(SAuth.button_Support).toBeDisplayed();
// });







/* EOF describe */
});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


describe('ab-ts-02p: Testing of operations | Тестирование операций', () => {



// ab-ts-04p: Тестирование карт
// перенесен сюда 03.11.2023
it('ab-e-tc-04.001p: ! Adding card | Добавление карты /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
  /** > базовые тесты (см. файл Тест_Сценарий_Добавление_Карты_(Существующей_Новой)):
   * - см. AB-TC-102p: Customer authorization (ш?: П.1)
   * - 3 Всплывающее окно "Добро пожаловать в Apex Bank", кнопка "Добавить карту": Поз (ш?: 1)
   * - 30 Стр "Добав карты", ввод валид №карты (16 сим), валид даты (4 сим), валид назв карты (12 симв): Поз (ш?: 1-9)
   * - ? ... <
  > Можно добавить банковскую карту. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где доступны элементы раздела Общий баланс (если пользователь уже имеет карту банка) или раздела Карты (если пользователь пока не имеет или не добавил карту банка).
ПОСТУСЛОВИЯ: 1.Выйти из приложения (выполняется в SGen.afterEach).
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
  const randomChars = await UApp.generateRandomChars(3, 'en');
  // const phoneNumber = DCard.phoneNumber_5;
  // const phoneNumber_pass = DCard.phoneNumber_5_pass;
  // const cardName = DCard.cardName_Humo_5 + '-' + randomChars;
  // const cardNumber = DCard.cardNumber_Humo_5;
  // const cardExpiry = DCard.cardValid_Humo_5;
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const cardName = DCard.cardName_Humo_10 + '-' + randomChars;
  const cardNumber = DCard.cardNumber_Humo_10;
  const cardExpiry = DCard.cardValid_Humo_10;

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

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
// перенесен сюда 08.11.2023
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
  let data_array = await SHome.items_layout_CardsList_Balances;
  // console.log('\n --> data_array-1 = ' + data_array + '\n');
  // console.log('\n --> data_array-1[i] = ' + await data_array[1].getText() + '\n');

  // * Прокрутить, делая видимыми следующие элементы.
  await $(`android=${SHome.scrollToElement_Right}`);
  
  // * Создать массив видимых элементов.
  data_array = await SHome.items_layout_CardsList_Balances;
  // console.log('\n --> data_array-2 = ' + data_array + '\n');
  // console.log('\n --> data_array-2[i] = ' + await data_array[1].getText() + '\n');

  // * Контролируем непустоту массива.
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
    cardBalanceAmountText = await element.getText();
    // cardBalanceAmountText = await element.key_2; // key_2 - сумма
    cardBalance = await UApp.extractNumbersFromString(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.key_2 + '\n');
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
  data_array = await SCard.items_titleScreen_MyCards_Balances;
  // console.log('\n --> data_array-1 = ' + data_array + '\n');
  // console.log('\n --> data_array-1[i] = ' + await data_array[1].getText() + '\n');

  // * Прокрутить, делая видимыми следующие элементы.
  await $(`android=${UApp.scrollForward}`);

  // * Создать массив видимых элементов.
  data_array = await SCard.items_titleScreen_MyCards_Balances;

  // * Контролируем непустоту массива.
  if(data_array.length == 0){
    throw "не сформирован data_array (массив-2 балансов карт) = '" + data_array + "'";
  }
  
  // 4.1.Отображается баланс каждой карты.
  cardBalanceAmountText = '';
  cardBalance = 0;
  cardsBalanceAmountTotal = 0;
  for (const element of data_array) {
    cardBalanceAmountText = await element.getText();
    // cardBalanceAmountText = await element.key_0; // key_0 - сумма
    cardBalance = await UApp.extractNumbersFromString(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.key_0 + '\n');
  }
  cardsBalanceAmountTotal = await UApp.roundNumber(cardsBalanceAmountTotal, 2);
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal = ' + cardsBalanceAmountTotal + '\n');
  // 4.2.Сумма балансов всех карт равна общему балансу.
  await expect(totalBalance).toEqual(cardsBalanceAmountTotal);
});



// ab-ts-05p: Тестирование переводов
// перенесен сюда 16.11.2023
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
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const receiverName = 'Апекс-1';
  const moneyAmount = await UApp.generateRandomChars(4, 'amount');

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
  await expect(WCardsR.titleWindow_SelectBankOfReceiver).toHaveText(WCardsR.titleWindow_SelectBankOfReceiver_Ru_Expected);

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
    throw " ! не сформирован data_array (массив карт) = '" + data_array + "'";
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
    throw " ! не сформирован data_array (массив карт) = '" + data_array + "'";
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
it('ab-e-tc-05.004p: -*- Transfer between your accounts/cards | Перевод между своими счетами/картами /частичен/', async () => {
  /**
  > Можно выполнить перевод денежных средств между своими счетами/картами. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карты с денежными средствами) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Переводы доступна кнопка Переводы между своими счетами.
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
  const moneyAmount = await UApp.generateRandomChars(4, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

  // * Сохранить сумму баланса карты до операции. 
  const totalBalanceBefore = await SHome.text_TotalBalanceAmount.getText();
  // const cardBalanceBefore = await SHome.text_CardBalance.getText();
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
    throw " ! не сформирован data_array (массив карт) = '" + data_array + "'";
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
    throw " ! не сформирован data_array (массив карт) = '" + data_array + "'";
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

// ab-ts-05p: Тестирование платежей
// перенесен сюда 21.12.2023
it('ab-e-tc-06.001p: -!- Payment for mobile communication (from card) | Оплата мобильной связи (с карты) /Тест выполнен частично: требуется убрать лимит платежей/', async () => {
  /**
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
  /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);

  // > Установить тестовые данные
  const phoneNumber = DCard.phoneNumber_10;
  const phoneNumber_pass = DCard.phoneNumber_10_pass;
  const moneyAmount = '500';
  // const moneyAmount = await UApp.generateRandomChars(4, 'amount');

  // П.1.Выполнить авторизацию пользователя.
  await SAuth.customerAuthorization(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);

  // * Сохранить сумму баланса карты до операции.
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});
  let totalBalanceBefore = await SHome.text_TotalBalanceAmount.getText();
  totalBalanceBefore = await UApp.extractNumbersFromString(totalBalanceBefore);
  // const cardBalanceBefore = await SHome.text_CardBalance.getText();
  // /*отладка*/ console.log('\n --> totalBalanceBefore = ' + totalBalanceBefore + '\n');

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
  await SPay.button_OpenCardsList_From.click();
  // * Открыт список карт.
  // * Создать массив видимых элементов.
  // const rawArray = await WCardsS.items_TextView_titleWindow_SenderSelectCard;
  await driver.pause(1000);
  const rawArray = await WCardsS.items_Window_SelectAccountOfSender_AccountName;
  /*отладка*/ console.log(`\n --> rawArray = "${rawArray}"`);
  // const dataArray = [];
  const elementAttributeKey = WCardsS.text_ElementAttributeKey_En_Expected; // 'resource-id'
  const elementAttributeValue = 'com.fincube.apexbank.debug:id/select_card_name'; // WCardsS..text_ElementAttributeValue_En_Expected_Number; // 'com.fincube.apexbank.debug:id/select_card_number'
  // await UApp.generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue);
  const dataArray = await UApp.generateElementList(rawArray, elementAttributeKey, elementAttributeValue);
  /*отладка*/ console.log(`\n --> dataArray= "${dataArray}"`);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
    // throw " Не сформирован dataArray (массив карт) = '" + dataArray + "'";
    throw new Error(`Не сформирован dataArray (массив карт) = "${dataArray}"`);
  }
  // - выбрать карту из списка
  await dataArray[1].click();
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
  // 8.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.
  await SPay.homeButton.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 20000});

  // 9.Нажать кнопку Домой.
  await SPay.homeButton.click();
  // 9.1.Открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс доступен Общий баланс, а также балансы по картам.
  // - сумма Общий баланс
  await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 10000});

  // * Сохранить сумму баланса карты после операции.
  // const cardBalanceAfter = await SHome.text_CardBalance.getText();
  let totalBalanceAfter = await SHome.text_TotalBalanceAmount.getText();
  totalBalanceAfter = await UApp.extractNumbersFromString(totalBalanceAfter);

  // * Сумма баланса по карте уменьшена на сумму платежа.
  // const cardBalanceBeforeInNumbers = await UApp.extractNumbersFromString(cardBalanceBefore);
  // const cardBalanceAfterInNumbers = await UApp.extractNumbersFromString(cardBalanceAfter);
  const moneyAmountInNumbers = await UApp.extractNumbersFromString(moneyAmount);
  // /*отладка*/ console.log(
  //   'cardBalanceBeforeInNumbers = ' + cardBalanceBeforeInNumbers +
  //   '\n cardBalanceAfterInNumbers = ' + cardBalanceAfterInNumbers +
  //   '\n      moneyAmountInNumbers =     ' + moneyAmountInNumbers
  // );
  await expect(totalBalanceAfter).toEqual(totalBalanceBefore - moneyAmountInNumbers);

});



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
it.skip('ab-o-d-001: Debug > JavaScript heap out of memory', async () => {
/*
    Из-за .toContain (см. п.2.1), следующего после ввода номера (см. п.2), при вводе номера не вводится последний знак числа (любой длины) и возникает ошибка (см. <--- Last few GCs --->)
*/
    // > Вывести информацию о тесте в консоль
    tcNum = 'ab-o-d-001';
    /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

    // > Установить тестовые данные
    const phoneNumber = DCard.phoneNumber_5;
    const phoneNumber_pass = DCard.phoneNumber_5_pass;

    // П.1.Выполнить авторизацию пользователя.
    await SAuth.customerAuthorization(
    SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SAuth.text_PinCode_Expected);

    // 1.Нажать поле ввода данных получателя в разделе Переводы.
    await SHome.input_ReceiverData.click();
    // 2.Ввести номер телефона получателя.
    await UDev.androidKeyboardTypeIn('998998877218');
    
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
    await expect(SHome.input_ReceiverData).toContain('998998877218');

});
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


/* EOF describe */
});





class AppUtilities {
// перенесен сюда 08.11.2023
async generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1/*, elementAttributeValue_2, elementAttributeValue_3, elementAttributeValue_4*/){
  /*
    Записываем определенные данные из raw_array в data_array, отсеивая уже имеющиеся в массиве data_array данные (название, сумма, номер и срок действия карты).
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    const elementAttributeKey = 'resource-id';
    const elementAttributeValue_1 = 'com.fincube.apexbank.debug:id/tvCardName';
    // const elementAttributeValue_2 = 'com.fincube.apexbank.debug:id/tvCardBalance';
    // const elementAttributeValue_3 = 'com.fincube.apexbank.debug:id/tvCardNumber';
    // const elementAttributeValue_4 = 'com.fincube.apexbank.debug:id/tvCardDate';
  */
    let elementAttributeValue_Current = '';
    // /*отладка*/ console.log('\n --> raw_array = ' + raw_array + '\n');
    for(let i = 0, l = raw_array.length; i < l; i++){
      elementAttributeValue_Current = await raw_array[i].getAttribute(elementAttributeKey);
      // /*отладка*/ console.log('\n --> [' + i + '] elementAttributeValue_Current = ' + elementAttributeValue_Current + '\n');
      if(elementAttributeValue_Current == elementAttributeValue_1){
        // /*отладка*/ console.log(
        //   '\n --> ' + elementAttributeValue_1       + ' = [' + i + '] elementAttributeValue_1' +
        //   '\n --> ' + elementAttributeValue_Current + ' = [' + i + '] elementAttributeValue_Current' + '\n');
  
        // Проверяем, не добавлены ли уже данные текущего элемента в массив
        if(await data_array.length > 0){
          const data_array_0 = [];
          data_array_0.push(
            {
              key_1 : await raw_array[i].getText(),   // название
              key_2 : await raw_array[i+1].getText(), // сумма
              key_3 : await raw_array[i+2].getText(), // номер
              key_4 : await raw_array[i+3].getText()  // срок действия
            }
          );
  
          let notExisted = true;
          for(let i = 0, l = await data_array.length; i < l; i++){
            if (
              data_array[i].key_1 == data_array_0[0].key_1 &
              data_array[i].key_2 == data_array_0[0].key_2 &
              data_array[i].key_3 == data_array_0[0].key_3 &
              data_array[i].key_4 == data_array_0[0].key_4
              )
            {
              notExisted = false;
              continue; // прерываем цикл 'i', идем к следующему
            }
          }
  
          if(notExisted){
            data_array.push(
              {
                key_1 : await data_array_0[0].key_1,
                key_2 : await data_array_0[0].key_2,
                key_3 : await data_array_0[0].key_3,
                key_4 : await data_array_0[0].key_4
              }
            );
          }
        } else {
          data_array.push(
            {
              key_1 : await raw_array[i].getText(),
              key_2 : await raw_array[i+1].getText(),
              key_3 : await raw_array[i+2].getText(),
              key_4 : await raw_array[i+3].getText()
            }
          );
        }
      }
    }
    // /*отладка*/ for (let i = 0, l = data_array.length; i < l; i++) {
    //   console.log('\n --> data_array = ' +
    //     '\n' + await data_array[i].key_1 +
    //     '\n' + await data_array[i].key_2 +
    //     '\n' + await data_array[i].key_3 +
    //     '\n' + await data_array[i].key_4
    //   );
    // }
}



/* EOF class */
}



class AuthorizationScreen {
  // перенесен сюда 10.11.2023
async customerAuthorization(language, phoneNumber, password, pinCode) {
  // П.1. Запустить приложение (автоматически), ...
  // // * Ждем появления кнопки
  // await this.button_Login.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 10000});
  // await this.button_Login.click();
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

  // 12.Ввести пин-код.
  await AppUM.appKeyboardTypeIn(pinCode);
  // await AppUM.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
  await HomeM.layout_Profile.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 15000});
  // 12.1.Открыт главный экран приложения (активна кнопка Главная панели навигации).
  // + элемент профиля клиента
  await expect(HomeM.layout_Profile).toBeExisting();
  // + кнопка профиля пользователя
  await expect(HomeM.button_Profile).toBeExisting();
  // +
  if( await HomeM.titleSection_TotalBalance_Ru.isDisplayed() ) {
    // - текст Общий баланс  
    await expect(HomeM.titleSection_TotalBalance_Ru).toHaveText(HomeM.titleSection_TotalBalance_Ru_Expected);
    // - сумма общего баланса -?-
  } else {
    // - кнопка Заказать карту
    await expect(HomeM.button_OrderCard).toBeExisting();
    // - кнопка Добавить карту
    await expect(HomeM.button_AddCard).toBeExisting();
  }
}

/*ранее*/ async customerAuthorization(language, phoneNumber, password, pinCode) {
  // П.1. Запустить приложение (автоматически), ...
  // // * Ждем появления кнопки
  // await this.button_Login.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 10000});
  // await this.button_Login.click();
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
  // 21.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны поле ввода пароля и неактивная кнопка Войти:
  // - клавиатура
  // await expect(await driver.isKeyboardShown()).toBe(false); // отключено, т.к. ГитХаб и БраузерСтак не успевают
  // - введенный номер
  await expect(this.input_PhoneNumber).toHaveText(phoneNumber);
  // - кнопка Войти
  // await expect(this.button_Signin).toBeDisabled(); // отключено, т.к. ГитХаб и БраузерСтак не успевают




          // добавлено 24102023
                // 3.Нажать чекбокс согласия с условиями.
                await SReg.check_AgreeWithTerms.click();
                // 3.1.Чекбокс согласия отображается отмеченным, кнопка Регистрация активна:
                // - чекбокс
                await expect(SReg.check_AgreeWithTerms).toBeEnabled();









  // 3.Нажать поле ввода пароля.
  // * Ждем появления поля
  await this.input_Password.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 10000});
  await this.input_Password.click();
  // 31.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

  // 4.Ввести пароль.
  await DSysM.androidKeyboardTypeIn(password);
  // await driver.sendKeys(['q','w','e','r','t','y','1','2','3']); // для БраузерСтак
  // 41.В поле ввода введенный пароль отображается звездочками, кнопка Войти активна (при вводе не менее определенного числа символов пароля):
  // - пароль отображается звездочками ?
  // - кнопка Войти
  await expect(this.button_Signin).toBeEnabled();
  
  // 5.Нажать кнопку Войти.
  await this.button_Signin.click();
  // 51.Отображается экран Создайте новый PIN-код, где доступны неактивные символы пин-кода и клавиатура приложения:
  // - страница Создайте новый PIN-код
  await expect(this.titleScreen_CreatePinCode).toHaveText(this.titleScreen_CreatePinCode_Ru_Expected);
  // - символ пин-кода (проверяем одну иконку)
  await expect( await this.image_PinCodeIcon_3.isEnabled() ).toBe(true);
  // - клавиатура приложения (проверяем одну клавишу)
  await expect( await AppUM.appKeyboardKey_3.isEnabled() ).toBe(true);

  // 6.Ввести пин-код.
  await AppUM.appKeyboardTypeIn(pinCode);
  // await AppUM.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
  // 61.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода отображается экран Введите свой PIN-код:
  // - символы пин-кода ?
  // - страница Введите свой PIN-код
  await expect(this.titleScreen_EnterPinCode).toHaveText(this.titleScreen_EnterPinCode_Ru_Expected);

  // 7.Ввести пин-код.
  await AppUM.appKeyboardTypeIn(pinCode);
  // await AppUM.appKeyboardTypeIn(['0','1','2','3']); // для БраузерСтак
  await HomeM.layout_Profile.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 15000});
  // 71.Открыт главный экран приложения (активна кнопка Главная панели навигации), где доступны кнопка профиля пользователя, текст Общий баланс и... одно из следующего:
  // - сумма общего баланса (если пользователь уже имеет карту банка).
  // - ккнопка Заказать карту и кнопка Добавить карту (если пользователь пока не имеет или не добавил карту банка):
  // + элемент профиля клиента
  await expect(HomeM.layout_Profile).toBeExisting();
  // - кнопка профиля пользователя
  await expect(HomeM.button_Profile).toBeExisting();
  // // - имя пользователя
  // await expect(HomeM.profileName_NadiaPage).toHaveText(HomeM.profileName_NadiaPage_Expected);
  // // - вкладка Аккаунт
  // await expect(HomeM.accountTabRu).toBeExisting();
  if( await HomeM.titleSection_TotalBalance_Ru.isDisplayed() ) {
    // - текст Общий баланс  
    await expect(HomeM.titleSection_TotalBalance_Ru).toHaveText(HomeM.titleSection_TotalBalance_Ru_Expected);
    // - сумма общего баланса -?-
  } else {
    // - кнопка Заказать карту
    await expect(HomeM.button_OrderCard).toBeExisting();
    // - кнопка Добавить карту
    await expect(HomeM.button_AddCard).toBeExisting();
  }
  
  
  // // - кнопка Заказать карту
  // if(phoneNumber == this.phoneNumber_Registered_noCards) {
  //   await expect(HomeM.orderCardButton).toBeExisting();
  // }
}

/*отладка*/ async customerAuthorization_Debug(language, phoneNumber, password, pinCode) {
  // П.1. Запустить приложение (автоматически), ...
  await this.selectLanguage(language);
  
  // 1.Нажать поле ввода номера телефона.
  await this.input_PhoneNumber.click();
  // 11.Открыта клавиатура.
await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 11 + '.png');
  await expect(await driver.isKeyboardShown()).toBe(true);

  // 2.Ввести номер телефона (уже зарегистрированный) в поле ввода номера телефона.
  await DSysM.androidKeyboardTypeIn(phoneNumber);
  // await driver.sendKeys(['9','9','9','6','6','4','6','6','0']);
  // 21.Закрыта клавиатура. В поле ввода отображается введенный номер, а также доступны поле ввода пароля и неактивная кнопка Войти:
await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 21 + '.png');
  // - клавиатура
  await expect(await driver.isKeyboardShown()).toBe(false);
  // - введенный номер
  await expect(this.input_PhoneNumber).toHaveText(phoneNumber);
  // - кнопка Войти
  await expect(this.button_Signin).toBeDisabled();

  // 3.Нажать поле ввода пароля.
  await this.input_Password.click();
  // 31.Открыта клавиатура.
await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 31 + '.png');
  await expect(await driver.isKeyboardShown()).toBe(true);

  // 4.Ввести пароль.
  await DSysM.androidKeyboardTypeIn(password);
  // 41.В поле ввода введенный пароль отображается звездочками, кнопка Войти активна (при вводе не менее определенного числа символов пароля):
await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 41 + '.png');
  // - пароль отображается звездочками ?
  // - кнопка Войти
  await expect(this.button_Signin).toBeEnabled();
  
  // 5.Нажать кнопку Войти.
  await this.button_Signin.click();
  // 51.Отображается экран Создайте новый PIN-код, где доступны неактивные символы пин-кода и клавиатура приложения:
await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 51 + '.png');
  // - страница Создайте новый PIN-код
  await expect(this.titleScreen_CreatePinCode)
    .toHaveText(this.titleScreen_CreatePinCode_Ru_Expected);
  // - символ пин-кода (проверяем одну иконку)
  await expect( await this.image_PinCodeIcon_3.isEnabled() ).toBe(true);
  // - клавиатура приложения (проверяем одну клавишу)
  await expect( await AppUM.appKeyboardKey_3.isEnabled() ).toBe(true);

  // 6.Ввести пин-код.
  await AppUM.appKeyboardTypeIn(pinCode);
  // 61.Символы пин-кода активируются по мере ввода, а после ввода последнего символа пин-кода отображается экран Введите свой PIN-код:
await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 61 + '.png');
  // - символы пин-кода ?
  // - страница Введите свой PIN-код
  await expect(this.titleScreen_EnterPinCode)
    .toHaveText(this.titleScreen_EnterPinCode_Ru_Expected);

  // 7.Ввести пин-код.
  await AppUM.appKeyboardTypeIn(pinCode);
  await HomeM.profileLayout.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 5000});
  // 71.Отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где доступны имя пользователя, текст Общий баланс и... одно из следующего:
await driver.saveScreenshot('view_shots/customerAuth_afterStep_' + 71 + '.png');
  // - сумма общего баланса (если пользователь уже имеет карту банка).
  // - кнопка Заказать или добавить карту (если пользователь пока не имеет карту банка):
  // + элемент профиля клиента
  await expect(HomeM.profileLayout).toBeExisting();
  // - имя пользователя
  await expect(HomeM.profileName_NadiaPage).toHaveText(HomeM.profileName_NadiaPage_Expected);
  // - вкладка Аккаунт
  await expect(HomeM.accountTabRu).toBeExisting();
  // - текст Общий баланс
  await expect(HomeM.totalBalanceLabelRu).toHaveText(HomeM.totalBalanceLabelRu_Expected);
  // - сумма общего баланса -?-
  // - кнопка Заказать или добавить карту
  if(phoneNumber == this.phoneNumber_Registered_noCards) {
    await expect(HomeM.orderOrAddCardButton).toBeExisting();
  }
}



/* EOF class */
}




// https://www.automationtestinghub.com/appium-scroll-examples/
// https://russianblogs.com/article/88992310695/
scrollToElement_Horizontal = 'new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/tvCardBalance"))';
// scrollToElement_Right_Text_1 = 'new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")).setAsHorizontalList().scrollToEnd(1)';
scrollToElement_Right = 'new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")).setAsHorizontalList().scrollForward()';
scrollToElement_Right_Text = 'new UiScrollable(new UiSelector().resourceId("com.fincube.apexbank.debug:id/cardsListSmall")).setAsHorizontalList().scrollIntoView(new UiSelector().text("t").className("android.widget.TextView"))';
scrollTo_WalletSection = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/holderWallets"))';
scrollTo_WalletSectionTitle = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("Кошелёк").className("android.widget.TextView"))';

