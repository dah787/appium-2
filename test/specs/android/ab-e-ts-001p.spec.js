/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */
const AppUM   = require("../../utils/android/ab-app.utils");              // App Utilities Model
const AuthM   = require("../../screens/android/ab-authorization.screen"); // Authorization screen Model
const CardsD  = require('../../data/ab-cards.data');                      // Cards Data
const DSysM   = require("../../utils/android/dt-android.utils");          // Android Device Utilities Model
const HCardM  = require('../../screens/android/ab-home-cards.screen');    // Home-Cards screen Model
const HomeM   = require('../../screens/android/ab-home.screen');          // Home screen Model
const HProfM  = require('../../screens/android/ab-home-profile.screen');  // Home-Profile screen Model
const GenM    = require('../../screens/android/ab-general.screen');       // General screen Model
const RegM    = require("../../screens/android/ab-regisration.screen");   // Registration screen Model
const ServM   = require('../../screens/android/ab-services.screen');      // Services screen Model

describe('ab-e-ts-001p: Тестирование процессов (дымовое) |вер.20230729| > Тестов 8 (частично 5) <', () => {

  let counter = 0, tcNum = '', i = 0;
  beforeEach(async () => {
    await GenM.beforeEach(counter, 'e'); // e - e2e < typeOfTest

    // /*отладка*/ console.log('\n --> counter-beforeEach = ' + counter + '\n');
    if (i == 0){
      // * Ждем появления кнопки
      await AuthM.loginButton.waitForDisplayed({timeout: GenM.waitTime + 10000});
      await AuthM.loginButton.click();
      i++;
    }

    // // * Снимок экрана для контроля
    // await driver.saveScreenshot('_view_shots/screen_before_e-lastTest.png');
    
    // // /*отладка*/ console.log('\n --> counter = ' + counter + '\n');
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

it('* ab-e-tc-001p: Регистрация !Тест выполнен частично: требуется автоматически получать код из СМС!', async () => {
/** > базовые тесты (см. файл ТК 1 (Регистрация)):
 * - 2 Стр. выбор языка, выбор языка (Русский) (ш?: П.1)
 * - 15 Стр. регист, кнопка "Далее" (ш?: 1-4)
 * - 27 Стр. Стр. ОТР, кнопка "Далее" (ш?: 5-6)
 * - ? ... <
  > Можно зарегистрироваться в приложении <
ПРЕДУСЛОВИЯ:
  1.Выполнен запуск приложения, языком интерфейса выбран русский, открыт экран входа в приложение, где доступны поле кода страны и поле ввода номера телефона.
ПОСТУСЛОВИЯ: Выйти из приложения (выполняется в GenM.afterEach).
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
ПОСТУСЛОВИЯ: Выйти из приложения (выполняется в GenM.afterEach).
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

it('* ab-e-tc-003p: Добавление карты !Тест выполнен частично: требуется автоматически получать код из СМС!', async () => {
  /** > базовые тесты (см. файл Тест_Сценарий_Добавление_Карты_(Существующей_Новой)):
   * - см. AB-TC-102p: Customer authorization (ш?: П.1)
   * - 3 Всплывающее окно "Добро пожаловать в Apex Bank", кнопка "Добавить карту": Поз (ш?: 1)
   * - 30 Стр "Добав карты", ввод валид №карты (16 сим), валид даты (4 сим), валид назв карты (12 симв): Поз (ш?: 1-9)
   * - ? ... <
  > Можно добавить банковскую карту. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где доступны элементы раздела Общий баланс (если пользователь уже имеет карту банка) или раздела Карты (если пользователь пока не имеет или не добавил карту банка).
ПОСТУСЛОВИЯ: Выйти из приложения (выполняется в GenM.afterEach).
  *
ШАГИ:
  1а.Если пользователь пока не имеет карты: Нажать кнопку Добавить карту в разделе Карты. 
  1б.Если пользователь уже имеет карту: Нажать поле карты (любой) или кнопку Мои карты в разделе Общий баланс.
  1б.1.Открыт экран Мои карты, где доступна кнопка Добавить.
  1б.2.Нажать кнопку Добавить.
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
  tcNum = 'ab-e-tc-003p';
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
    await HCardM.addCardButtonOnMyCardsScreen.click();
  }
  
  // 1.1.Открыт экран добавления карты, где доступны поле ввода названия карты, поле ввода номера карты, поле ввода даты действительности карты и неактивная кнопка Добавить карту:
  // - поле ввода названия карты
  await expect(HCardM.cardNameInput).toBeExisting();
  // - поле ввода номера карты
  await expect(HCardM.cardNumberInput).toBeExisting();
  // - поле ввода даты действительности карты
  await expect(HCardM.cardExpiryDateInput).toBeExisting();
  // - кнопка Добавить карту
  await expect(HCardM.addCardButtonOnDataInputScreen).toBeExisting();

  // 2.Нажать поле ввода названия карты.
  await HCardM.cardNameInput.click();
  // 2.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 3.Ввести название карты.
  await DSysM.androidKeyboardTypeIn(cardName);
  // 3.1.В поле ввода отображается введенное значение.
  await expect(HCardM.cardNameInput).toHaveText(cardName);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 4.Нажать поле ввода номера карты.
  await HCardM.cardNumberInput.click();
  // 4.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 5.Ввести номер карты.
  await DSysM.androidKeyboardTypeIn(cardNumber);
  // 5.1.В поле ввода отображается введенное значение.
  await expect(HCardM.cardNumberInput).toHaveText(cardNumber);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 6.Нажать поле ввода даты действительности карты.
  await HCardM.cardExpiryDateInput.click();
  // 6.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);
  // 7.Ввести дату действительности карты.
  await DSysM.androidKeyboardTypeIn(cardExpiry);
  // 7.1.В поле ввода отображается введенное значение, кнопка Добавить карту активна.
  await expect(HCardM.cardExpiryDateInput)
    .toHaveTextContaining(cardExpiry.substr(0, 2));
  await expect(HCardM.cardExpiryDateInput)
    .toHaveTextContaining(cardExpiry.substr(3, 2));
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();
  // - кнопка Добавить карту
  await expect(HCardM.addCardButtonOnDataInputScreen).toBeEnabled();

  // 8.Нажать кнопку Добавить карту.
  await HCardM.addCardButtonOnDataInputScreen.click();
  // 8.1.Отображается экран Введите код из СМС, где доступны поле ввода кода из СМС и неактивная кнопка Подтвердить:
  // - экран Введите код из СМС
  await expect(HCardM.enterSmsCodeScreenHeaderRu)
    .toHaveText(HCardM.enterSmsCodeScreenHeaderRu_Expected);
  // - кнопка Подтвердить
  await expect(HCardM.continueButton).toBeDisabled();
  // 9.Нажать поле ввода кода из СМС.
  await HCardM.smsCodeInput.click();
  // 9.1.Открыта клавиатура.
  await expect(await driver.isKeyboardShown()).toBe(true);

// --- Требуется автоматически получать код из СМС ---

  // 10.Ввести полученный код.
  const smsCode_Received = await AppUM.generateRandomChars(6);
  await DSysM.androidKeyboardTypeIn(smsCode_Received);
  // 10.1.В поле ввода отображается введенный код, кнопка Подтвердить активна:
  // - введенный код ?
  await expect(HCardM.smsCodeInput).toHaveText(smsCode_Received);
  // - кнопка Подтвердить
  await expect(HCardM.continueButton).toBeEnabled();

// -?- продолжить автоматизацию теста, используя валидный код из СМС
  // ...
});

it.only('ab-e-tc-004p: Редактирование карты', async () => {
  /** > базовые тесты... <
  > Можно изменить некоторые данные банковской карты. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту/карты) в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где в разделе Общий баланс отображаются карты (или одна карта) и кнопка Мои карты.
ПОСТУСЛОВИЯ: Выйти из приложения (выполняется в GenM.afterEach).
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
  tcNum = 'ab-e-tc-004p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const randomChars = await AppUM.generateRandomChars(3, 'en');
  const phoneNumber = CardsD.phoneNumber_1_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_1_pass;
  const cardName = CardsD.cardName_Humo_1 + '-' + randomChars;
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
  await HCardM.cardViewFront.click();
  // 2.1.Открыт экран действий с картой, где доступна кнопка Свойства карты.

  // 3.Нажать кнопку Свойства карты.
  await HCardM.cardSettingsButton.click();
  // 3.1.Открыт экран редактирования карты, где доступны изображение карты (с текущими дизайном, названием, балансом, именем владельца, номером, сроком действия), кнопки выбора ее дизайна, поле ввода/редактирования названия карты, кнопка Подтвердить.

  // * Создать массив существующих дизайнов карты.
  await HCardM.cardBackgroundImageButton.waitForDisplayed({timeout: GenM.waitTime + 15000});
  // await HCardM.waitForScreenDisplayed_cardSettingsScreen();
  let raw_array = await HCardM.cardBackgroundImageButtons;
  // /*отладка*/ console.log('\n --> raw_array ' + raw_array + '\n');
  // await driver.pause(5000);

  let data_array = [];
  let elementAttributeKey = 'resource-id';
  let elementAttributeValue = 'com.fincube.apexbank.debug:id/bg_image';
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
    await data_array[await AppUM.generateRandomCharsOfSet(1,'012')].click(); // '012345'

    // let nextElement = await element.nextElement();
    // let elementAttributeValueCurrent = await nextElement.getAttribute('resource-id');

    // let nextElement2 = await HomeM.cardBackgroundImageButtonChecked;
    // let elementAttributeValueCurrent2 = await nextElement2.getAttribute('resource-id');
    // /*отладка*/ console.log('\n --> elementAttributeValueCurrent2 = ' + elementAttributeValueCurrent2 + '\n');
  }
  // 4.1.Изменен фон изображения карты в соответствии с дизайном нажатой кнопки.
  // -?- непонятно что проверять, т.к. атрибуты элемента не меняются

  // 5.Нажать поле ввода названия карты.
  await HCardM.cardNameEdit.click();
  // 5.1.Открыта клавиатура. Курсор установлен в конце текущего названия.

  // * Запомнить название и номер карты
  // * Прокрутить до элемента
  await $(`android=${HCardM.scrollToElement_Up}`);
  const cardName_Initial = await HCardM.cardViewFrontName.getText();
  const cardNumber = await HCardM.cardViewFrontNumber.getText();
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
  await expect(HCardM.cardNameEdit).toHaveText(cardName_Initial + randomChars);
  // - на изображении карты.
    // * Прокрутить до элемента
    await $(`android=${HCardM.scrollToElement_Up}`);
  await expect(HCardM.cardViewFrontName).toHaveText(cardName_Initial + randomChars);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 7.Удалить название карты.
  // * Очистить поле ввода
  await HCardM.cardNameEdit.clearValue();
  // 7.1.Пустое значение отображается:
  // - в поле ввода;
  await expect(HCardM.cardNameEdit).toHaveText('Название карты');
  // - на изображении карты.
  await expect(HCardM.cardViewFrontName).not.toBeExisting();

  // 8.Ввести название карты, нажав поле ввода названия карты.
  await HCardM.cardNameEdit.click();
  await DSysM.androidKeyboardTypeIn(cardName);
  // 8.1.Введенное значение отображается:
  // - в поле ввода;
  await expect(HCardM.cardNameEdit).toHaveText(cardName);
  // - на изображении карты.
    // * Прокрутить до элемента
    // if(!(await HCardM.cardViewFrontName).isDisplayedInViewport) {
      await $(`android=${HCardM.scrollToElement_Up}`);
    // }
  await expect(HCardM.cardViewFrontName).toHaveText(cardName);
  // * hide keyboard (закрывает следующие элементы)
  await driver.hideKeyboard();

  // 9.Нажать кнопку Подтвердить.
  await HCardM.confirmButton.click();
  // 9.1.Открыт экран действий с картой, всплывает сообщение Changed!
  // await expect(HCardM.confirmButton).toBeDisabled(); // - отключено 24.05.2023, т.к. при проверке опять активируется!

  // 10.Вернуться на экран Мои карты, нажимая кнопку Назад.
  await DSysM.androidPressBackButton(2);
  await HCardM.cardViewFrontNameOnMyCardsScreen.waitForDisplayed({timeout: GenM.waitTime + 15000});
  // HCardM.waitForScreenDisplayed_myCardsScreen();
  // *.Создать массив элементов.
  raw_array = await HCardM.cardsBlockItems;
  data_array = [];
  elementAttributeKey = 'resource-id';
  let elementAttributeValue_1 = 'com.fincube.apexbank.debug:id/bank_card_view_name';
  let elementAttributeValue_2 = 'com.fincube.apexbank.debug:id/bank_card_view_number';
  await AppUM.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1, elementAttributeValue_2);
  // /*отладка*/ console.log('\n --> data_array ' + data_array + '\n');
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
      await expect(data_array[i-1]).toHaveText(cardName); // expect(HCardM.cardViewFrontName).
    }
  }
});

it('ab-e-tc-005p: Перевод с карты на карту !Тест проваливается, поэтому проверки: суммы в п.10.1 отключена, баланса в п.11.1 искажена!', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить перевод денежных средств с карты на карту <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту с денежными средствами на ней), при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступна кнопка P2P.
  *
ШАГИ:
  1.Нажать кнопку P2P в разделе Общий баланс.
  1.1.Открыт экран Перевод (активна навигационная кнопка P2P), где доступна кнопка Перевод на карту.

  2.Нажать кнопку Перевод на карту.
  2.1.Открыт экран Перевод на карту, где доступны поле выбора карты, поле ввода номера карты, поле ввода суммы перевода, неактивная кнопка Продолжить.

  3.Нажать поле выбора карты.
  3.1.Открыт список карт (отправителя).
  4.Выбрать карту (отправителя) из списка.
  4.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.

  5.Нажать поле ввода номера карты (получателя).
  5.1.Открыта клавиатура.
  6.Ввести номер карты (получателя).
  6.1.В поле ввода отображается введенное значение.

  7.Нажать поле ввода суммы перевода.
  7.1.Открыта клавиатура (цифровая).
  8.Ввести сумму перевода.
  8.1.В поле ввода отображается введенное значение, кнопка Продолжить активна.

  9.Нажать кнопку Продолжить.
  9.1.Открыт экран Перевод на карту-2, где доступны изображение карты отправителя, номер карты получателя, сумма перевода, кнопка Перевод.

  10.Нажать кнопку Перевод.
  10.1.Открыт экран чека перевода на карту, где доступны поле Сумма, кнопка Домой.

  11.Нажать кнопку Домой.
  11.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-005p';
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

  // П.1.Выполнить авторизацию пользователя (уже имеющего карту с денежными средствами на ней), при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступна кнопка P2P.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // *.Сохранить сумму баланса карты до операции. 
  const cardBalanceBefore = await HomeM.cardBalance.getText();

  // 1.Нажать кнопку P2P в разделе Общий баланс.
  await HomeM.p2pButton.click();
  // 1.1.Открыт экран Перевод (активна навигационная кнопка P2P), где доступна кнопка Перевод на карту.
  // - экран Перевод
  await expect(HCardM.transferScreenHeaderRu).toHaveText(HCardM.transferScreenHeaderRu_Expected);
  // - кнопка Перевод на карту: > не проверяем, т.к. используем ниже.

  // 2.Нажать кнопку Перевод на карту.
  await HCardM.cardToCardTransferButton.click();
  // 2.1.Открыт экран Перевод на карту, где доступны поле выбора карты, поле ввода номера карты, поле ввода суммы перевода, неактивная кнопка Продолжить.
  // - экран Перевод на карту
  await expect(HCardM.transferToCardScreenHeaderRu).toHaveText(HCardM.transferToCardScreenHeaderRu_Expected);
  // - остальные элементы: > не проверяем, т.к. используем ниже.

  // 3.Нажать поле выбора карты.
  await HCardM.cardSenderChoose.click();
  // 3.1.Открыт список карт (отправителя).
  // - список карт: > не проверяем, т.к. используем ниже.

  // 4.Выбрать карту (отправителя) из списка.
  await HCardM.cardSenderView.click();
  // 4.1.Закрыт список карт. В поле выбора карт отображается выбранная карта.
  // - список карт: ?
  // - отображается выбранная карта
  /* await expect(HCardM.cardSenderBalance).toHaveText(cardSenderBalance);
----- пропускаем проверку... с 18.05.2023 чинят */

  // 5.Нажать поле ввода номера карты (получателя).
  await HCardM.cardReceiverNumberInput.click();
  // 5.1.Открыта клавиатура.
  // 6.Ввести номер карты (получателя).
  await DSysM.androidKeyboardTypeIn(cardNumber_Receiver);
  // 6.1.В поле ввода отображается введенное значение.
  await expect(HCardM.cardReceiverNumberInput).toHaveText(cardNumber_Receiver);

  // 7.Нажать поле ввода суммы перевода.
  await HCardM.transferAmountInput.click();
  // 7.1.Открыта клавиатура (цифровая).
  // 8.Ввести сумму перевода.
  await DSysM.androidKeyboardTypeIn(moneyAmount);
  // 8.1.В поле ввода отображается введенное значение, кнопка Продолжить активна.
  const amountSeparatedThousandths = await AppUM.separateThousandthsOfNumber(moneyAmount);
  await expect(HCardM.transferAmountInput).toHaveText(amountSeparatedThousandths);
  
  // 9.Нажать кнопку Продолжить.
  await HCardM.continueButtonOnTransferToCardScreen.click();
  // 9.1.Открыт экран Перевод на карту-2, где доступны изображение карты отправителя, номер карты получателя, сумма перевода, кнопка Перевод.
  // - экран Перевод на карту
  await expect(HCardM.transferToCardScreenHeaderRu).toHaveText(HCardM.transferToCardScreenHeaderRu_Expected);
  // - изображение карты отправителя
  await expect(HCardM.cardSenderDetailsArea).toBeDisplayed();
  // - номер карты получателя
  await expect(HCardM.cardReceiverNumber).toBeDisplayed();
  // - сумма перевода
  // await expect(HCardM.transferAmount).toBeDisplayed();
  await expect(HCardM.transferAmount).toHaveText(amountSeparatedThousandths + '.0 UZS');
  // - кнопка Перевод
  await expect(HCardM.continueButtonOnTransferToCardScreen).toBeDisplayed();

  // 10.Нажать кнопку Перевод.
  await HCardM.continueButtonOnTransferToCardScreen.click();
  // 10.1.Открыт экран чека перевода на карту, где доступны поле Сумма, кнопка Домой.
  // - поле Сумма
  // const amountSeparatedThousandths =  await AppUM.separateThousandthsOfNumber(moneyAmount);
  // await expect(HCardM.amount).toHaveText(amountSeparatedThousandths + ' UZS');

  // 11.Нажать кнопку Домой.
  await HCardM.homeButton.click();
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

it('ab-e-tc-006p: Оплата мобильной связи !Тест проваливается, поэтому шаги п.5-6 отключены,', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить оплату услуг мобильной связи с карты <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя (уже имеющего карту с денежными средствами на ней), при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в главном меню доступна кнопка Услуги.
  *
ШАГИ:
  1.Нажать кнопку Услуги на главном меню.
  1.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.

  2.Нажать кнопку Мобильные операторы.
  2.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  3.Нажать кнопку оператора (любого).
  3.1.Открыт экран Оператор, где доступны поле ввода номера телефона, поле ввода суммы, поле выбора карты, неактивная кнопка Продолжить.

  4.Ввести валидные данные в поля ввода.
  4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.

  5.Нажать кнопку Продолжить.
  5.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.

  6.Нажать кнопку Домой.
  6.1.Открыт главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс доступны поле общего баланса, а также поля балансов по картам.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-006p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;
  // const moneyAmount = '12000';
  const moneyAmount = await AppUM.generateRandomChars(5, 'amount');

  // П.1.Выполнена авторизация пользователя (уже имеющего карту с денежными средствами на ней), при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в главном меню доступна кнопка Услуги.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // *.Сохранить сумму баланса карты до операции. 
// const cardBalanceBefore = await HomeM.cardBalance.getText();

  // 1.Нажать кнопку Услуги на главном меню.
  await HomeM.servicesNavigationTab.click();
  // 1.1.Открыт экран Платежи, где доступна кнопка Мобильные операторы.
  // - экран Платежи
  await expect(ServM.paymentsScreenHeaderRu).toHaveText(ServM.paymentsScreenHeaderRu_Expected);

  // 2.Нажать кнопку Мобильные операторы.
  await ServM.mobileOperatorButton.click();
  // 2.1.Открыт экран Мобильные операторы, где доступны кнопки операторов.

  // 3.Нажать кнопку оператора (любого).
  await ServM.uzMobileOperatorButton.click();
  // 3.1.Открыт экран Оператор, где доступны поле ввода номера телефона, поле ввода суммы, поле выбора карты, неактивная кнопка Продолжить.

  // 4.Ввести валидные данные в поля ввода.
  await ServM.phoneNumberInput.click();
  await DSysM.androidKeyboardTypeIn(phoneNumber);
  await ServM.amountInput.click();
  await DSysM.androidKeyboardTypeIn(moneyAmount);
  // 4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.
  // await expect(ServM.phoneNumberInput).toHaveText(phoneNumber);
  // await expect(ServM.amountInput).toHaveText(moneyAmount);
  // поля phone и amount имеют одинаковые id, поэтому проверяем по их порядку на экране:
  await expect(ServM.paymentScreenInputs[0]).toHaveText(phoneNumber);
  await expect(ServM.paymentScreenInputs[1]).toHaveText(moneyAmount);

  // // 5.Нажать кнопку Продолжить.
  // await ServM.continueButton.click();
  // // 5.1.Открыт экран чека оплаты, где доступны поле Сумма, кнопка Домой.
  // // - поле Сумма
  // const amountSeparatedThousandths =  await AppUM.separateThousandthsOfNumber(moneyAmount);
  // await expect(ServM.amount).toHaveText(amountSeparatedThousandths + ' UZS');

  // // 6.Нажать кнопку Домой.
  // await ServM.homeButton.click();
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

it('* ab-e-tc-007p: Идентификация в MyID !Тест выполнен частично: -1-требуется эмулировать сканирование лица камерой устройства; -2-иногда MyId открывается на английском!', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно выполнить идентификацию пользователя в службе MyID. <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя в приложении, языком интерфейса выбран русский, открыт главный экран приложения (активна кнопка Главная панели навигации), где доступны кнопка профиля (фото) и имя пользователя.
ПОСТУСЛОВИЯ: Выйти из приложения (выполняется в GenM.afterEach).
  *
ШАГИ:
  1.Нажать кнопку профиля пользователя.
  1.1.Открыт экран профиля пользователя, где доступна кнопка Ваш статус.

  2.Нажать кнопку Ваш статус.
  2.1.Открыт экран Возможности, где доступна кнопка Пройти идентификацию.

  3.Нажать кнопку Пройти идентификацию.
  3.1.Открыт экран Вход или регистрация, где доступны поле ввода Серия и номер паспорта, поле ввода Дата рождения, неактивная кнопка Продолжить.

  4.Ввести валидные данные в поля ввода.
  4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.

  5.Нажать кнопку Продолжить.
  5.1.Открыт экран камеры устройства (для фотографирования лица пользователя), где доступны текст убедиться пользователю о том, что его лицо находится в выделенном пространстве и область выделенного пространства.

--- Требуется эмулировать сканирование лица камерой устройства ---

  6.Сканировать лицо пользователя, затем...???
  6.1.Открыт экран...???

  *
-?- узнать, как эмулировать сканирование лица камерой устройства
-?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-007p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;
  // const phoneNumber = CardsD.phoneNumber_10_hasCards;
  // const phoneNumber_pass = CardsD.phoneNumber_10_pass;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);

  // 1.Нажать кнопку профиля пользователя.
  await HomeM.profileButton.click();
  // 1.1.Открыт экран профиля пользователя, где доступна кнопка Ваш статус.
  
  // 2.Нажать кнопку Ваш статус.
  await HProfM.yourStatusItem.click();
  // 2.1.Открыт экран Возможности, где доступна кнопка Пройти идентификацию.
  // - экран Возможности
  await expect(HProfM.possibilitiesScreenHeaderRu).toHaveText(HProfM.possibilitiesScreenHeaderRu_Expected);
  // - кнопка Пройти идентификацию
  await HProfM.identificationButton.waitForDisplayed({timeout: GenM.waitTime + 5000});

  // 3.Нажать кнопку Пройти идентификацию.
  await HProfM.identificationButton.click();
  // 3.1.Открыт экран Вход или регистрация, где доступны поле ввода Серия и номер паспорта, поле ввода Дата рождения, неактивная кнопка Продолжить.
  // - кнопка Продолжить
  /* await HProfM.continueButton.waitForDisplayed({timeout: GenM.waitTime + 5000});
   * - этот элемент (кнопка идентифицируется на русском: Продолжить) отключен (и другие ниже), т.к. MyId открывается на английском при запуске нескольких тестов (не только одного этого)
   */
  // await HProfM.loginOrRegisterScreenTextViewItems[3].waitForDisplayed({timeout: GenM.waitTime + 5000}); - этот элемент тоже отключен, т.к. выдает ошибку... Не найден)))
    // /*отладка*/ const iCount = await HProfM.loginOrRegisterScreenTextViewItems.length;
    // /*отладка*/ for (let i = 0; i < iCount; i++) {
    //   console.log('\n --> ' +
    //     await HProfM.loginOrRegisterScreenTextViewItems[i].getText() +
    //     ' = .loginOrRegisterScreenTextViewItems[' + i + '].getText()' +
    //     '\n');
    // }
  await HProfM.scannerButton.waitForDisplayed({timeout: GenM.waitTime});

  // 4.Ввести валидные данные в поля ввода.
  // (см.выше для кнопки) await HProfM.passportDataInput.click();
  // let qwe = await HProfM.loginOrRegisterScreenEditTextItems[0];
  // await qwe.click();
  await HProfM.loginOrRegisterScreenEditTextItems[0].click();
  await DSysM.androidKeyboardTypeIn(HProfM.passportData_Expected);
  // (см.выше для кнопки) await HProfM.birthDateInput.click();
  await HProfM.loginOrRegisterScreenEditTextItems[1].click();
  await DSysM.androidKeyboardTypeIn(HProfM.birthDate_Expected);
  // 4.1.В полях ввода отображаются введенные значения, кнопка Продолжить активна.
  await expect(HProfM.loginOrRegisterScreenEditTextItems[0]).toHaveText(HProfM.passportData_Expected);
  await expect(HProfM.loginOrRegisterScreenEditTextItems[1]).toHaveText(HProfM.birthDate_Expected);

  // 5.Нажать кнопку Продолжить.
  // (см.выше для кнопки) await HProfM.continueButton.click();
  (await HProfM.loginOrRegisterScreenTextViewItems[3]).click();
  // 5.1.Открыт экран сканирования лица камерой устройства, где доступны текст убедиться пользователю о том, что его лицо находится в выделенном пространстве и область выделенного пространства.
  // - экран сканирования лица (заголовок)
  // await expect(HProfM.faceScannerScreenHeaderRu).toHaveText(HProfM.faceScannerScreenHeaderRu_Expected);
  // - область выделенного пространства
  await HProfM.faceScannerArea.waitForDisplayed({timeout:GenM.waitTime + 180000});

// --- Требуется эмулировать сканирование лица камерой устройства ---

  //   6.Сканировать лицо пользователя, затем...???
  //   6.1.Открыт экран...???

// -?- продолжить автоматизацию теста, используя эмуляцию сканирования лица камерой устройства
  // ...

  // * Вернуться на экран Открыт экран Возможности, нажимая кнопку Назад.
  await DSysM.androidPressBackButton(2);
  if(await AuthM.enterPinCodeScreenHeaderRu.waitForDisplayed({timeout: GenM.waitTime})) {
    await AppUM.appKeyboardTypeIn(AuthM.pinCode_Expected);
  }
  await HProfM.identificationButton.waitForDisplayed({timeout: GenM.waitTime});
  // - экран Возможности
  await expect(HProfM.possibilitiesScreenHeaderRu).toHaveText(HProfM.possibilitiesScreenHeaderRu_Expected);

});

it('ab-e-tc-008p: Проверка баланса', async () => {
  /** > базовые тесты (см. файл ...) <
  > Можно проверить баланс по картам и общий баланс <
ПРЕДУСЛОВИЯ:
  1.Выполнена авторизация пользователя, при этом отображается главный экран приложения (активны навигационная кнопка Home и вкладка Аккаунт), где в разделе Общий баланс отображаются карты (или одна карта) и их балансы.
  *
ШАГИ:
  1.Обратить внимание на баланс каждой карты.
  1.1.Отображается баланс каждой карты.

  2.Обратить внимание на общий баланс.
  2.1.Отображается общий баланс равный сумме балансов всех карт.

  3.Нажать поле карты (любой).
  3.1.Открыт экран Мои карты, где доступен список карт.

  4.Обратить внимание на баланс каждой карты.
  4.1.Отображается баланс каждой карты.
  4.2.Сумма балансов всех карт равна общему балансу.
  *
  */

  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-008p';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');

  // > Установить тестовые данные
  const phoneNumber = CardsD.phoneNumber_5_hasCards;
  const phoneNumber_pass = CardsD.phoneNumber_5_pass;

  // П.1.Выполнить авторизацию пользователя.
  await AuthM.customerAuthorization(
    AuthM.languageRu, phoneNumber, phoneNumber_pass, AuthM.pinCode_Expected);
  
  // 1.Обратить внимание на баланс каждой карты.
  // *.Создать массив элементов.
  let raw_array = await HomeM.cardsBlockItems;
  let data_array = [];
  let elementAttributeKey = 'resource-id';
  let elementAttributeValue = 'com.fincube.apexbank.debug:id/bank_card_view_balance';
  await AppUM.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // 1.1.Отображается баланс каждой карты.
  let cardBalanceAmountText = '';
  let cardBalance = 0;
  let cardsBalanceAmountTotal = 0;
  for (const element of data_array) {
    cardBalanceAmountText = await element.getText();
    cardBalance = await AppUM.extractNumbersFromString(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.getText() + '\n');
  }
  cardsBalanceAmountTotal = await AppUM.roundNumber(cardsBalanceAmountTotal, 2);
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal = ' + cardsBalanceAmountTotal + '\n');

  // 2.Обратить внимание на общий баланс.
  // 2.1.Отображается общий баланс равный сумме балансов всех карт.
  let totalBalance = await HomeM.totalBalance.getText();
  totalBalance = await AppUM.extractNumbersFromString(totalBalance);
  // /*отладка*/ console.log('\n --> totalBalance = ' + totalBalance + '\n');
  await expect(totalBalance).toEqual(cardsBalanceAmountTotal);

  // 3.Нажать поле карты (любой).
  await HomeM.cardView.click();
  // 3.1.Открыт экран Мои карты, где доступен список карт.
  // - список карт
  await HCardM.cardBalance.waitForDisplayed({timeout: GenM.waitTime});

  // 4.Обратить внимание на баланс каждой карты.
  // *.Создать массив элементов.
  raw_array = await HCardM.cardsBlockItems;
  // raw_array = await $$('android.widget.TextView');
  data_array = [];
  elementAttributeKey = 'resource-id';
  elementAttributeValue = 'com.fincube.apexbank.debug:id/bank_card_view_balance';
  await AppUM.generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue);
  // 4.1.Отображается баланс каждой карты.
  cardBalanceAmountText = '';
  cardBalance = 0;
  cardsBalanceAmountTotal = 0;
  for (const element of data_array) {
    cardBalanceAmountText = await element.getText();
    cardBalance = await AppUM.extractNumbersFromString(cardBalanceAmountText);
    cardsBalanceAmountTotal += cardBalance;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.getText() + '\n');
  }
  cardsBalanceAmountTotal = await AppUM.roundNumber(cardsBalanceAmountTotal, 2);
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal = ' + cardsBalanceAmountTotal + '\n');
  // 4.2.Сумма балансов всех карт равна общему балансу.
  await expect(totalBalance).toEqual(cardsBalanceAmountTotal);

});



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
it.skip('ab-e-tc-e_02x: Отладка ab-e-tc-004p', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-e_02x';
  /*отладка*/ console.log('\n --> tcNum = ' + tcNum + '\n');


});
it.skip('ab-e-tc-e_01x: Отладка', async () => {
  // > Вывести информацию о тесте в консоль
  tcNum = 'ab-e-tc-e_01x';
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
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -



/* EOF describe */
});

// * Пауза для контроля экрана
// await driver.pause(5000);
// await HCardM.cardBalance.waitForDisplayed({timeout: GenM.waitTime});
// *.Нажать кнопку Назад
// await driver.back();
// await DSysM.androidPressBackButton(1);
// *.Скрыть клавиатуру
// await driver.hideKeyboard();
// * Открыть отчет
// npx allure open

/* to start run : npx wdio config/wdio.android.conf.js
- - - - - - - - - - - - - - - - - - - - - - - - - - - */