const DCard   = require('../../data/ab-cards.data');                    // data > Cards 
const SCards  = require('../../screens/android/ab-cards.screen');       // screen > Cards
const SGen    = require('../../screens/android/ab-general.screen');     // screen > General
const SPay    = require('../../screens/android/ab-payments.screen');    // screen > Payments
const UApp    = require("../../utils/android/ab-app.utils");            // utilities > Application
const UDev    = require("../../utils/android/dt-device.utils");         // utilities > Device
const WCardsS = require('../../screens/android/ab-cardsSender.window'); // window > Cards of sender

class PaymentsScreen {

/* CONSTANTS */
titleScreen_Payment_Ru_Expected = 'Платеж';



/* SELECTORS */
// экран Платежи > экран Мобильные операторы
get titleScreen_MobileOperators_Ru(){
  return $('//android.widget.TextView[@text="Мобильные операторы"]');}
get item_UzMobile_En(){
  return $('//android.widget.TextView[@text="UzMobile"]');}
item_MobileOperator(mobileOperator){
  return $(`//android.widget.TextView[@text="${mobileOperator}"]`);}

// экран Платежи > экран Мобильные операторы > экран мобильного оператора
get titleScreen_MobileOperator(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get titleSection_PhoneNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_label"]');}
get input_PhoneNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get button_PhoneNumberInputClear(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
get button_Continue(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_continue"]');}

// экран Платежи > экран Мобильные операторы > экран мобильного оператора > экран Платеж
get titleScreen_Payment(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get titleScreen_Payment_Ru(){
  return $('//android.widget.TextView[@text="Платеж"]');}
get button_OpenCardsList_From(){ // далее - окно Выберите карту получателя
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
get input_TransferAmount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}

// // ??? экран Платежи > экран Мобильные операторы > экран мобильного оператора > экран Платеж > экран данных о платеже
// get amount(){
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/transferred_amount"]');}
// get homeButton(){
//   // return $('//*[@resource-id="com.fincube.apexbank.debug:id/back_to_home"]');}
//   return $('//*[@resource-id="com.fincube.apexbank.debug:id/btnBackToHome"]');}



/* FUNCTIONS */
// async goToElementAndGetBalance(scrollTo, moneyBalanceElement) { // далее - остаемся на экране главный
//   // * Прокрутить, делая видимыми следующие элементы.
//   await $(`android=${scrollTo}`);
//   // 1.1.Отображаются балансы карт, счетов.
//   await driver.pause(1500); // Ждем стабилизации экрана (иногда система не видит нужный элемент)
//   await moneyBalanceElement.waitForDisplayed(20000);
//   // * Сохранить сумму баланса счета до операции.
//   return await UApp.extractNumbersFromString(await moneyBalanceElement.getText());
// }
async enterPhoneNumberAndContinue(phoneNumber) { // далее - экран платежа
  const phoneNumberDigits = String(await UApp.extractNumbersFromString(phoneNumber));
  await this.input_PhoneNumber.click();
  await UDev.androidKeyboardTypeIn(phoneNumberDigits);
  await expect(this.input_PhoneNumber).toHaveText(phoneNumberDigits);
  await this.button_Continue.click();
  await this.button_OpenCardsList_From.waitForDisplayed(20000);
}
async selectPaymentSource(scrollTo, moneySourceField, moneySourceName, moneySourceNumber) { // далее - остаемся на экране платежа
  await this.button_OpenCardsList_From.click();
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
  scrollTo = UApp.scrollForward;

  const dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollTo);
  // * Контролируем непустоту массива.
  if(dataArray.length === 0){
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
}
async enterPaymentAmountAndContinue(paymentAmount) { // далее - экран данных о платеже
  await this.input_TransferAmount.click();
  await UDev.androidKeyboardTypeIn(paymentAmount);
  const input_TransferAmount = String(await UApp.extractNumbersFromString(await this.input_TransferAmount.getText()));
  // input_TransferAmount = String(input_TransferAmount);
  await expect(input_TransferAmount).toEqual(paymentAmount);
  // * Скрыть клавиатуру
  await driver.hideKeyboard();

  // 10.Нажать кнопку Оплатить.
  await this.button_Continue.click();
  // 10.1.Открыт экран, где доступны кнопка квитанции, кнопка сохранения в PDF, кнопка фискального чека и кнопка возврата на главный экран.
  await SPay.homeButton.waitForDisplayed({timeout: SGen.number_WaitTime_Expected + 20000});
}
async checkReceiptAndBack() {} // далее - экран квитанции платежа
// async goHomeAndCheckBalance(moneyBalanceBefore, moneyAmount) { // далее - экран главный
//   await this.homeButton.click();
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
// }








async goAndGetBalance_0(scrollTo, moneyBalanceElement, elementForGo) { // Должен быть открыт главный экран
  // Если нужно, перейти на требуемый экран.
  if (elementForGo) {
    // await elementForGo.click();
    await SGen.returnToHomeScreen();
    // await moneyBalanceElement.waitForDisplayed(20000);
    await elementForGo.click();
    // * Ждем стабилизации экрана (иногда система не видит нужный элемент после прокрутки)
    await driver.pause(1500);
    await SCards.text_CardBalance.waitForDisplayed({timeout: 15000});
    // 7.1.Открыто окно, где доступен список карт/счетов.
    // * Создать массив видимых элементов.
    const rawArrayKey = 'SCards.items_titleScreen_MyCards';
    const elementAttributeKey = SCards.text_ElementAttributeKey_En_Expected;
    const elementAttributeValues = [
      SCards.text_ElementAttributeValue_En_Expected_Name,
      SCards.text_ElementAttributeValue_En_Expected_Balance,
      SCards.text_ElementAttributeValue_En_Expected,
      '' // cardDate
    ];
    // scrollTo = UApp.scrollForward;

    const dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollTo);
    // * Контролируем непустоту массива.
    if(dataArray.length === 0){
      throw new Error(`Не сформирован dataArray (массив карт) = "${dataArray}"`);
    }
    // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
    //   console.log('\n --> 1-dataArray.length = ' + dataArray.length +
    //   '\n' + await dataArray[i].cardName +
    //   '\n' + await dataArray[i].cardBalance +
    //   '\n' + await dataArray[i].cardNumber +
    //   '\n' + await dataArray[i].cardDate
    //   );
    // }

    const moneySourceName = 'ACCOUNT_UZS ** 7000';
    const moneySourceNumber = DCard.cardNumber_Humo_10;
    const moneySourceField = 'cardNumber'; // 'cardName';
    let selectedCard, moneyBalance;
    switch (moneySourceField) {
      case 'cardName':
        selectedCard = dataArray.find(card => card.cardName.includes(moneySourceName));
        moneyBalance = selectedCard.cardBalance;
        // await $(`//android.widget.TextView[@text="${selectedCard.cardName}"]`).click();
        break;
      case 'cardNumber':
        selectedCard = dataArray.find(card => card.cardNumber.includes(moneySourceNumber.slice(-4)));
        moneyBalance = selectedCard.cardBalance;
        // await $(`//android.widget.TextView[@text="${selectedCard.cardNumber}"]`).click();
        break;
      default:
        // console.log(`\n --> Нет элемента (в dataArray): ${cardField}\n`);
        // break;
        throw new Error(`\n --> Нет элемента (в dataArray): ${moneySourceField}\n`);
    }
  
    // console.log(`\n --> selectedCard[moneySourceField] = "${selectedCard[moneySourceField]}"\n`);
    // console.log(`\n --> selectedCard.cardBalance = ${moneyBalance}\n`);
    // console.log(await $(`//android.widget.TextView[@text="${selectedCard['cardBalance']}"]`).getText());
    console.log(`\n --> Number(moneyBalance) = ${await UApp.extractNumbersFromString(moneyBalance)}\n`);  

    return await UApp.extractNumbersFromString(moneyBalance);
  } else {
    // Прокрутить, делая видимыми следующие элементы.
    await $(`android=${scrollTo}`);
    // * Ждем стабилизации экрана (иногда система не видит нужный элемент после прокрутки)
    await driver.pause(1500);
    // Отображается баланс карты/счето.
    await moneyBalanceElement.waitForDisplayed(20000);
    // Вернуть сумму баланса (в формате числа).
    return await UApp.extractNumbersFromString(await moneyBalanceElement.getText());
  }
}
async goAndGetBalance_1(scrollTo, moneyBalanceElement, elementForGo) { // Должен быть открыт главный экран
  if (!elementForGo) {
    await $(`android=${scrollTo}`);
    // // * Ждем стабилизации экрана (иногда система не видит нужный элемент после прокрутки)
    await driver.pause(3000);
  }
  await SGen.returnToHomeScreen();
  // Если нужно, перейти на требуемый экран.
  if (elementForGo) {
    /*отладка*/ console.log('\nif > if\n');
    // await driver.pause(10000);
    // await elementForGo.click();
    // await SGen.returnToHomeScreen();
    // await moneyBalanceElement.waitForDisplayed(20000);
    await elementForGo.click();
    // * Ждем стабилизации экрана (иногда система не видит нужный элемент после прокрутки)
    // await driver.pause(1500);
    await SCards.text_CardBalance.waitForDisplayed({timeout: 20000});
    // 7.1.Открыто окно, где доступен список карт/счетов.
    // * Создать массив видимых элементов.
    const rawArrayKey = 'SCards.items_titleScreen_MyCards';
    const elementAttributeKey = SCards.text_ElementAttributeKey_En_Expected;
    const elementAttributeValues = [
      SCards.text_ElementAttributeValue_En_Expected_Name,
      SCards.text_ElementAttributeValue_En_Expected_Balance,
      SCards.text_ElementAttributeValue_En_Expected,
      '' // cardDate
    ];

    const dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollTo);
    // * Контролируем непустоту массива.
    if(dataArray.length === 0){
      throw new Error(`Не сформирован dataArray (массив карт) = "${dataArray}"`);
    }
    // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
    //   console.log('\n --> 1-dataArray.length = ' + dataArray.length +
    //   '\n' + await dataArray[i].cardName +
    //   '\n' + await dataArray[i].cardBalance +
    //   '\n' + await dataArray[i].cardNumber +
    //   '\n' + await dataArray[i].cardDate
    //   );
    // }

    const moneySourceName = 'ACCOUNT_UZS ** 7000';
    const moneySourceNumber = DCard.cardNumber_Humo_10;
    const moneySourceField = 'cardNumber'; // 'cardName';
    let selectedCard, moneyBalance;
    switch (moneySourceField) {
      case 'cardName':
        selectedCard = dataArray.find(card => card.cardName.includes(moneySourceName));
        moneyBalance = selectedCard.cardBalance;
        // await $(`//android.widget.TextView[@text="${selectedCard.cardName}"]`).click();
        break;
      case 'cardNumber':
        selectedCard = dataArray.find(card => card.cardNumber.includes(moneySourceNumber.slice(-4)));
        moneyBalance = selectedCard.cardBalance;
        // await $(`//android.widget.TextView[@text="${selectedCard.cardNumber}"]`).click();
        break;
      default:
        // console.log(`\n --> Нет элемента (в dataArray): ${cardField}\n`);
        // break;
        throw new Error(`\n --> Нет элемента (в dataArray): ${moneySourceField}\n`);
    }
  
    // console.log(`\n --> selectedCard[moneySourceField] = "${selectedCard[moneySourceField]}"\n`);
    // console.log(`\n --> selectedCard.cardBalance = ${moneyBalance}\n`);
    // console.log(await $(`//android.widget.TextView[@text="${selectedCard['cardBalance']}"]`).getText());
    // /*отладка*/ console.log(`\n --> Number(moneyBalance) = ${await UApp.extractNumbersFromString(moneyBalance)}\n`);  

    return await UApp.extractNumbersFromString(moneyBalance);
  } else {
    // await SPay.homeButton.click();
    // await SGen.returnToHomeScreen();
    /*отладка*/ console.log('\nif > else\n');
    // await driver.pause(3000);
    // Прокрутить, делая видимыми следующие элементы.
          // await $(`android=${scrollTo}`);
          // // * Ждем стабилизации экрана (иногда система не видит нужный элемент после прокрутки)
          // await driver.pause(3000);
    // await moneyBalanceElement.click();
    await moneyBalanceElement.waitForDisplayed({timeout: 20000});
    // Отображается баланс карты/счето.
    // await moneyBalanceElement.waitForDisplayed(20000);
    // Вернуть сумму баланса (в формате числа).
    return await UApp.extractNumbersFromString(await moneyBalanceElement.getText());
  }
}






async goAndGetBalance(scrollTo, moneyBalanceElement, elementForGo,
  moneySourceName, moneySourceNumber, moneySourceField) { // Должен быть открыт главный экран
  if (!elementForGo) {
    await $(`android=${scrollTo}`);
    // // * Ждем стабилизации экрана (иногда система не видит нужный элемент после прокрутки)
    await driver.pause(3000);
  }
  await SGen.returnToHomeScreen();
  // Если нужно, перейти на требуемый экран.
  if (elementForGo) {
    /*отладка*/ console.log('\nif > if\n');
    // await driver.pause(10000);
    // await elementForGo.click();
    // await SGen.returnToHomeScreen();
    // await moneyBalanceElement.waitForDisplayed(20000);
    await elementForGo.click();
    // * Ждем стабилизации экрана (иногда система не видит нужный элемент после прокрутки)
    // await driver.pause(1500);
    await SCards.text_CardBalance.waitForDisplayed({timeout: 20000});
    // 7.1.Открыто окно, где доступен список карт/счетов.
    // * Создать массив видимых элементов.
    const rawArrayKey = 'SCards.items_titleScreen_MyCards';
    const elementAttributeKey = SCards.text_ElementAttributeKey_En_Expected;
    const elementAttributeValues = [
      SCards.text_ElementAttributeValue_En_Expected_Name,
      SCards.text_ElementAttributeValue_En_Expected_Balance,
      SCards.text_ElementAttributeValue_En_Expected,
      '' // cardDate
    ];

    const dataArray = await SCards.generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollTo);
    // * Контролируем непустоту массива.
    if(dataArray.length === 0){
      throw new Error(`Не сформирован dataArray (массив карт) = "${dataArray}"`);
    }
    // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
    //   console.log('\n --> 1-dataArray.length = ' + dataArray.length +
    //   '\n' + await dataArray[i].cardName +
    //   '\n' + await dataArray[i].cardBalance +
    //   '\n' + await dataArray[i].cardNumber +
    //   '\n' + await dataArray[i].cardDate
    //   );
    // }

    // const moneySourceName = 'ACCOUNT_UZS ** 7000';
    // const moneySourceNumber = DCard.cardNumber_Humo_10;
    // const moneySourceField = 'cardNumber'; // 'cardName';
    const moneyBalance = await this.selectCardAndReturnBalance(dataArray, moneySourceName, moneySourceNumber, moneySourceField);
    return await UApp.extractNumbersFromString(moneyBalance);

  } else {

    // await SPay.homeButton.click();
    // await SGen.returnToHomeScreen();
    /*отладка*/ console.log('\nif > else\n');
    // await driver.pause(3000);
    // Прокрутить, делая видимыми следующие элементы.
          // await $(`android=${scrollTo}`);
          // // * Ждем стабилизации экрана (иногда система не видит нужный элемент после прокрутки)
          // await driver.pause(3000);
    // await moneyBalanceElement.click();
    await moneyBalanceElement.waitForDisplayed({timeout: 20000});
    // Отображается баланс карты/счето.
    // await moneyBalanceElement.waitForDisplayed(20000);
    // Вернуть сумму баланса (в формате числа).
    return await UApp.extractNumbersFromString(await moneyBalanceElement.getText());
  }
}

async selectCardAndReturnBalance(dataArray, moneySourceName, moneySourceNumber, moneySourceField) {
  let selectedCard, balance;
  switch (moneySourceField) {
    case 'cardName':
      selectedCard = dataArray.find(card => card.cardName.includes(moneySourceName));
      balance = selectedCard.cardBalance;
      // await $(`//android.widget.TextView[@text="${selectedCard.cardName}"]`).click();
      break;
    case 'cardNumber':
      selectedCard = dataArray.find(card => card.cardNumber.includes(moneySourceNumber.slice(-4)));
      balance = selectedCard.cardBalance;
      // await $(`//android.widget.TextView[@text="${selectedCard.cardNumber}"]`).click();
      break;
    default:
      // console.log(`\n --> Нет элемента (в dataArray): ${cardField}\n`);
      // break;
      throw new Error(`\n --> Нет элемента (в dataArray): ${moneySourceField}\n`);
  }

  // console.log(`\n --> selectedCard[moneySourceField] = "${selectedCard[moneySourceField]}"\n`);
  // console.log(`\n --> selectedCard.cardBalance = ${balance}\n`);
  // console.log(await $(`//android.widget.TextView[@text="${selectedCard['cardBalance']}"]`).getText());
  // /*отладка*/ console.log(`\n --> Number(moneyBalance) = ${await UApp.extractNumbersFromString(balance)}\n`); 

  return balance;
}

async goAndCheckBalance(scrollTo, moneyBalanceElement, elementForGo, moneyBalanceBefore, moneyAmount) {
  const moneyBalanceAfter = await this.goAndGetBalance(scrollTo, moneyBalanceElement, elementForGo);
  const transferAmount = await UApp.extractNumbersFromString(moneyAmount);
  // /*отладка*/ console.log(
  //   '\n moneyBalanceBefore = ' + moneyBalanceBefore +
  //   '\n moneyBalanceAfter = ' + moneyBalanceAfter +
  //   '\n transferAmount = ' + transferAmount
  // );
  // - баланс выбранного ранее счета отправки платежа, уменьшенный на итоговую сумму перевода
  // await expect(moneyBalanceAfter).toEqual(moneyBalanceBefore - transferAmount);
  const moneyDifference = moneyBalanceBefore - transferAmount;
  await expect(moneyBalanceAfter).toBeGreaterThanOrEqual(moneyDifference - 1);
  await expect(moneyBalanceAfter).toBeLessThanOrEqual(moneyDifference);
}



/* EOF class */
}

module.exports = new PaymentsScreen();