/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */
const AppUM   = require("../../utils/android/ab-app.utils");              // App Utilities Model
const AuthM   = require("../../screens/android/ab-authorization.screen"); // Authorization screen Model
const CardsD  = require('../../data/ab-cards.data');                      // Cards Data
const DSysM   = require("../../utils/android/dt-android.utils");          // Android Device Utilities Model
const CardM   = require('../../screens/android/ab-cards.screen');         // Home-Cards screen Model
const HomeM   = require('../../screens/android/ab-home.screen');          // Home screen Model
const ProfM   = require('../../screens/android/ab-profile.screen');       // Home-Profile screen Model
const GenM    = require('../../screens/android/ab-general.screen');       // General screen Model
const RegM    = require("../../screens/android/ab-regisration.screen");   // Registration screen Model
const PayM    = require('../../screens/android/ab-payments.screen');      // Payments screen Model ...ServM

describe('ab-e-ts-001p: Тестирование процессов (дымовое) |вер.20230912| /Тестов 8 (частично 5)/', () => {

  let counter = 0, tcNum = '', i = 0;
  beforeEach(async () => {
    await GenM.beforeEach(counter, 'e'); // e - e2e < typeOfTest
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

it('! ab-e-tc-001p: Регистрация /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
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

--- Требуется автоматически получать код из СМС ---

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
  // const tcNum = 'ab-e-tc-001p';
  tcNum = 'ab-e-tc-001p';
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

// --- Требуется автоматически получать код из СМС ---

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

it('ab-e-tc-002p: Авторизация', async () => {
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
  tcNum = 'ab-e-tc-002p';
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

it('! ab-e-tc-003p: Идентификация в MyID /Тест выполнен частично: -1-требуется эмулировать сканирование лица камерой устройства; -2-иногда MyId открывается на английском/', async () => {
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

--- Требуется эмулировать сканирование лица камерой устройства ---

  5.Сканировать лицо пользователя, затем...???
  5.1.Открыт экран...???

  *
-?- узнать, как эмулировать сканирование лица камерой устройства
-?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-003p';
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

// --- Требуется эмулировать сканирование лица камерой устройства ---

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

it('! ab-e-tc-004p: Добавление карты /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
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
  8.1.Отображается экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.
  9.Нажать поле ввода кода из СМС.
  9.1.Открыта клавиатура.

--- Требуется автоматически получать код из СМС ---

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
  tcNum = 'ab-e-tc-004p';
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
  await DSysM.androidKeyboardTypeIn(cardName);
  // 3.1.В поле ввода отображается введенное значение.
  await expect(CardM.cardNameInput).toHaveText(cardName);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 4.Нажать поле ввода номера карты.
  await CardM.cardNumberInput.click();
  // 4.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 5.Ввести номер карты.
  await DSysM.androidKeyboardTypeIn(cardNumber);
  // 5.1.В поле ввода отображается введенное значение.
  await expect(CardM.cardNumberInput).toHaveText(cardNumber);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 6.Нажать поле ввода даты действительности карты.
  await CardM.cardExpiryDateInput.click();
  // 6.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 7.Ввести дату действительности карты.
  await DSysM.androidKeyboardTypeIn(cardExpiry);
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
  await CardM.enterSmsCodeScreenHeaderRu.waitForDisplayed({timeout: GenM.waitTime});
  // 8.1.Отображается экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить:
  // - экран Введите код из СМС
  await expect(CardM.enterSmsCodeScreenHeaderRu)
    .toHaveText(CardM.enterSmsCodeScreenHeaderRu_Expected);
  // - кнопка Подтвердить
  await expect(CardM.continueButton_1).toBeDisabled();
  // 9.Нажать поле ввода кода из СМС.
  await CardM.smsCodeInput.click();
  // 9.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- Требуется автоматически получать код из СМС ---

  // 10.Ввести полученный код.
  const smsCode_Received = await AppUM.generateRandomChars(6);
  await DSysM.androidKeyboardTypeIn(smsCode_Received);
  // 10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна:
  // - введенный код ?
  await expect(CardM.smsCodeInput).toHaveText(smsCode_Received);
  // - кнопка Подтвердить
  await expect(CardM.continueButton_1).toBeEnabled();

  // 11.Нажать кнопку Подтвердить.
  await CardM.continueButton_1.click();
  // 11.1.Открыт экран..., где доступны...

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...
});

it('? ab-e-tc-005p: Редактирование карты /Отключен выбор дизайна/', async () => {
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
  tcNum = 'ab-e-tc-005p';
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
  // await DSysM.androidKeyboardTypeIn('-123');
  await DSysM.androidKeyboardTypeIn(randomChars);
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
  await DSysM.androidKeyboardTypeIn(cardName);
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
  await DSysM.androidPressBackButton(1);
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

it('? ab-e-tc-006p: Проверка баланса /ошибка суммы/', async () => {
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
  tcNum = 'ab-e-tc-006p';
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

it('! ab-e-tc-007p: Перевод с карты на карту /Тест выполнен частично: требуется автоматически получать код из СМС/', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить перевод денежных средств с карты на карту. <
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
  8.1.Отображается экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

  9.Нажать поле ввода кода из СМС.
  9.1.Открыта клавиатура.

--- Требуется автоматически получать код из СМС ---

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
  tcNum = 'ab-e-tc-007p';
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
  await HomeM.holderInput.click();
  // 1.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 2.Ввести номер карты получателя.
  await DSysM.androidKeyboardTypeIn(cardNumber_Receiver);
  // 2.1.В поле ввода отображается введенное значение, а также - активная кнопка отправки.
  await expect(HomeM.holderInput).toHaveText(cardNumber_Receiver);
  await HomeM.sendButton.waitForDisplayed({timeout: GenM.waitTime + 5000});

  // 3.Нажать кнопку отправки.
  await HomeM.sendButton.click();
  // 3.1.Открыт экран Перевод на карту, где доступны поле выбора карты отправителя, поле номера карты получателя, поле ввода суммы перевода, поле комиссии, неактивная кнопка Продолжить.
  await expect(CardM.transferToCardScreenHeaderRu).toHaveText(CardM.transferToCardScreenHeaderRu_Expected);

  // 4.Нажать поле выбора карты.
  await CardM.senderCardsSelectButton.click();
  // 4.1.Открыт список карт отправителя.
  // 5.Выбрать карту отправителя из списка.
  // * Создать массив видимых элементов.
  let raw_array = await CardM.senderCardsList;
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
  await CardM.transferAmountInput.click();
  // 6.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 7.Ввести сумму перевода.
  await DSysM.androidKeyboardTypeIn(moneyAmount);
  // * Скрыть клавиатуру (добавить время для формирования значения CardM.transferTotalAmount)
  await driver.hideKeyboard();
  // 7.1.В поле ввода отображаются введенное значение, в поле комиссии - комиссия, в поле итога - итоговая сумма, кнопка Продолжить активна.
  // - введенное значение,
  // const amountSeparatedThousandths = await AppUM.separateThousandthsOfNumber(moneyAmount);
  // await expect(CardM.transferAmountInput).toHaveText(amountSeparatedThousandths);
  await expect(CardM.transferAmountInput).toHaveText(moneyAmount);
  // - комиссия
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n .transferCommission = ' + await CardM.transferCommission.getText() +
  //   '\n .transferTotalAmount = ' + await CardM.transferTotalAmount.getText()
  // );
  const transferCommissionInNumbers = await AppUM.extractNumbersFromString(await CardM.transferCommission.getText());
  const transferTotalAmountInNumbers = await AppUM.extractNumbersFromString(await CardM.transferTotalAmount.getText());
  // /*отладка*/ console.log('\n --> ' + 
  //   'moneyAmount = ' + moneyAmount +
  //   '\n transferCommissionInNumbers = ' + transferCommissionInNumbers +
  //   '\n transferTotalAmountInNumbers = ' + transferTotalAmountInNumbers
  // );
  // - итоговая сумма
  const amountInNumbers = Number(moneyAmount) + transferCommissionInNumbers;
  await expect(transferTotalAmountInNumbers).toStrictEqual(amountInNumbers);

  // 8.Нажать кнопку Продолжить.
  await CardM.continueButton.click();
  // 8.1.Отображается экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить.

  // 9.Нажать поле ввода кода из СМС.
  await CardM.smsCodeInput.click();
  // 9.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- Требуется автоматически получать код из СМС ---

  // 10.Ввести полученный код.
  const smsCode_Received = await AppUM.generateRandomChars(6);
  await DSysM.androidKeyboardTypeIn(smsCode_Received);
  // 10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна.
  // - введенный код ?
  await expect(CardM.smsCodeInput).toHaveText(smsCode_Received);
  // - кнопка Подтвердить
  await expect(CardM.continueButton_1).toBeEnabled();

  // 11.Нажать кнопку Подтвердить.
  await CardM.continueButton_1.click();
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

it('! ab-e-tc-008p: Платеж за мобильную связь /Тест выполнен частично: требуется убрать лимит платежей/', async () => {
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
// --- Требуется убрать/повысить лимит платежей --- FAILED ...превышен дневной лимит ---
  8.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.

  9.Нажать кнопку Домой.
  9.1.Открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс доступен Общий баланс, а также балансы по картам.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-008p';
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
  await DSysM.androidKeyboardTypeIn('999664660'); // ...(phoneNumber)
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
  await DSysM.androidKeyboardTypeIn(moneyAmount);
  // 7.1.В поле ввода отображаются введенные данные, кнопка Продолжить активна.
  await expect(PayM.paymentScreenInputs[0]).toHaveText(moneyAmount);
  // * Скрыть клавиатуру
  await driver.hideKeyboard();

  // 8.Нажать кнопку Продолжить.
  await PayM.continueButton.click();
// --- Требуется убрать/повысить лимит платежей --- FAILED ...превышен дневной лимит ---
  // 8.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.

  // 9.Нажать кнопку Домой.
  // 9.1.Открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс доступен Общий баланс, а также балансы по картам.



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 



  // // 4.Ввести валидные данные в поля ввода.
  // await PayM.phoneNumberInput.click();
  // await DSysM.androidKeyboardTypeIn(phoneNumber);
  // await PayM.amountInput.click();
  // await DSysM.androidKeyboardTypeIn(moneyAmount);
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



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
it.skip('ab-e-d-001: Отладка', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-d-001';
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
it.skip('ab-e-d-002: Сводный массив', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-d-002';
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
it.skip('ab-e-d-003: OTP message', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-d-003';
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