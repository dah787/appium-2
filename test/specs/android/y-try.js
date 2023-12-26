const DCard   = require('../../data/ab-cards.data');                        // data > Cards

const SAuth   = require("../../screens/android/ab-authorization.screen");   // screen > Authorization
const SCards  = require('../../screens/android/ab-cards.screen');           // screen > Cards
const SGen    = require('../../screens/android/ab-general.screen');         // screen > General
const SHome   = require('../../screens/android/ab-home.screen');            // screen > Home
// const SPay    = require('../../screens/android/ab-payments.screen');        // screen > Payments
// const SPayM   = require('../../screens/android/ab-paymentsMobile.screen');  // screen > Payments fo Mobile
const SPin    = require('../../screens/android/ab-pinCodeEnter.screen');    // screen > Pin code enter
// const SSms    = require('../../screens/android/ab-smsCodeEnter.screen');    // screen > Sms code enter
// const STraBe  = require('../../screens/android/ab-transferBetweenCards.screen');//... > Transfer between cards
// const STraTo  = require('../../screens/android/ab-transferToCard.screen');  // screen > Transfer to card

// const WCardsR = require('../../screens/android/ab-cardsReciever.window');   // window > Cards of receiver
// const WCardsS = require('../../screens/android/ab-cardsSender.window');     // window > Cards of sender

const UApp    = require("../../utils/android/ab-app.utils");                // utilities > Application
// const UDev    = require("../../utils/android/dt-device.utils");             // utilities > Device
let tcNum = '';

    /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

it.only('ab-e-tc-04.004p: Checking balance | Проверка баланса', async () => {
    // > Вывести информацию о тесте в консоль
    tcNum = 'ab-e-tc-04.004p';
    /*отладка*/ console.log(`\n --> tcNum = ${tcNum} \n`);
  
    // > Установить тестовые данные
    const phoneNumber = DCard.phoneNumber_10;
    const phoneNumber_pass = DCard.phoneNumber_10_pass;
  
    // П.1.Выполнить авторизацию пользователя.
    await SAuth.authorizeUser(SAuth.text_LanguageRussian_En, phoneNumber, phoneNumber_pass, SPin.text_PinCode_Expected);
    await SHome.text_TotalBalanceAmount.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 15000});
  
    // 1.Обратить внимание на баланс каждой карты.
    const cardsBalanceAmountTotal_OnHomeScreen = await checkCardBalances(SHome.items_layout_CardsList);
  
    // 2.Обратить внимание на общий баланс.
    const totalBalance = await SHome.text_TotalBalanceAmount.getText();
    await checkTotalBalance(totalBalance, cardsBalanceAmountTotal_OnHomeScreen);
  
    // 3.Нажать кнопку Карты.
    await SHome.bottomNav_Cards.click();
    await SCards.text_CardBalance.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});
  
    // 4.Обратить внимание на баланс каждой карты.
    const cardsBalanceAmountTotal_OnCardsScreen = await checkCardBalances(SCards.items_titleScreen_MyCards);
  
    // 4.2.Сумма балансов всех карт равна общему балансу.
    await checkTotalBalance(totalBalance, cardsBalanceAmountTotal_OnCardsScreen);
  });
  
  async function checkCardBalances(cardListSelector) {
    const dataArray = await SCards.scrollCardstList(cardListSelector, SHome.text_ElementAttributeKey_En_Expected, SHome.array_ElementAttributeValues_En_Expected, SHome.scrollToElement_Right);
  
    let cardsBalanceAmountTotal = 0;
    for (const element of dataArray) {
      const cardBalanceAmountText = await element.cardBalance;
      const cardBalance = await UApp.extractNumbersFromString(cardBalanceAmountText);
      cardsBalanceAmountTotal += cardBalance;
    }
  
    return await UApp.roundNumber(cardsBalanceAmountTotal, 2);
  }
  
  async function checkTotalBalance(totalBalance, expectedTotalBalance) {
    await expect(totalBalance).toBeGreaterThanOrEqual(expectedTotalBalance);
    await expect(totalBalance).toBeLessThanOrEqual(expectedTotalBalance + dataArray.length);
    await expect(expectedTotalBalance).toEqual(cardsBalanceAmountTotal);
  }
  
  /**
   *    КАРТЫ - СЧЕТА
   * -1- карты на экране главный в разделе общий баланс
   * const dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollTo);
   * -2- карты на экране мои карты
   * const dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollTo);
   * -3- счета на экране главный в разделе кошелек
   * -4- карты и счета на экранах с окнами выбора
   * const dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollTo);
   */