const GenM    = require('./ab-general.screen');                         // General screen Model
const SHome   = require('../../screens/android/ab-home.screen');        // screen > Home
const WCardsS = require('../../screens/android/ab-cardsSender.window'); // window > Cards of sender
const UApp    = require("../../utils/android/ab-app.utils");            // utilities > Application

class CardsScreen {
/* CONSTANTS */
titleScreen_MyCards_Ru_Expected = 'Мои карты';
titleScreen_AddCard_Ru_Expected = 'Добавить карту';

text_ElementAttributeKey_En_Expected = 'resource-id';
text_ElementAttributeValue_En_Expected = 'com.fincube.apexbank.debug:id/tvCardNumberNotOne';
text_ElementAttributeValue_En_Expected_Name = 'com.fincube.apexbank.debug:id/tvCardName';
text_ElementAttributeValue_En_Expected_Number = 'com.fincube.apexbank.debug:id/tvCardNumber';
text_ElementAttributeValue_En_Expected_Balance = 'com.fincube.apexbank.debug:id/tvCardBalance';
text_ElementAttributeValue_En_Expected_Date = 'com.fincube.apexbank.debug:id/tvCardDate';


/* SELECTORS */
// экран Мои карты
get titleScreen_MyCards(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_may_cards_title"]');}
get titleScreen_MyCards_Ru(){
  return $('//android.widget.TextView[@text="Мои карты"]');}
get button_OrderOrAddCard(){ // далее - окно заказа/добавления карты
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/addCardButton"]');}
get button_MyCards_Ru(){
  return $('//android.widget.TextView[@text="Карты"]');}
get button_MyOrders_Ru(){
  return $('//android.widget.TextView[@text="Мои заявки"]');}

get frame_CardViewFront(){ // далее - экран данных карты
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
get text_CardBalance(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardBalance"]');} // ...bank_card_view_balance
get text_CardName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardName"]');} // ...tvCardBankName
get text_CardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardNumber"]');}
get text_CardNumber_NotOne(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardNumberNotOne"]');}
get text_CardDate(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardDate"]');}

get items_titleScreen_MyCards(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/recyclerViewCards"]').$$('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardViewFront"]');}
get items_titleScreen_MyCards_Balances(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/recyclerViewCards"]').$$('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardBalance"]');}
get items_titleScreen_MyCards_Numbers_NotOne(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/recyclerViewCards"]').$$('//*[@resource-id="com.fincube.apexbank.debug:id/tvCardNumberNotOne"]');}

waitForScreenDisplayed_myCardsScreen(){
  this.titleScreen_MyCards.waitForDisplayed({timeout: GenM.number_WaitTime_Expected + 15000});}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Мои карты > окно заказа/добавления карты
get button_OrderCard(){ // далее - экран Заказать карту
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_order_card"]');}
get button_AddCard(){ // далее - экран Добавить карту
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_add_card"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран Мои карты > окно заказа/добавления карты > экран Добавить карту
get titleScreen_AddCard(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get input_CardName(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_name"]');}
get input_CardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_number"]');}
get input_CardExpiryDate(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/inputEdit_card_expiry_date"]');}
get button_AddCard_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_add_card"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран данных карты
get titleScreen_CardDetails(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get button_EditCard(){ // далее - экран редактирования карты
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/ll_end_actions"]');}
get button_TopUpCard(){ // далее - XXX
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_top_up_card"]');}
get button_PayOrTransfer(){ // далее - XXX
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_pay_or_transfer"]');}
get item_ChangeCardPinCode_Ru(){ // далее - XXX
  return $('//android.widget.TextView[@text="Сменить PIN-код карты"]');}
get item_TransactionHistory_Ru(){ // далее - XXX
  return $('//android.widget.TextView[@text="История операций"]');}
get item_CardInformation_Ru(){ // далее - XXX
  return $('//android.widget.TextView[@text="Информация о карте"]');}
get item_BlockCard_Ru(){ // далее - XXX
  return $('//android.widget.TextView[@text="Заблокировать карту"]');}
get item_DeleteCard_Ru(){ // далее - окно удаления карты
  return $('//android.widget.TextView[@text="Удалить карту"]');}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран данных карты > экран редактирования карты
get text_CardName_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_card_name"]');} // ...bank_card_view_name
get text_CardBalance_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_card_balance"]');} // ...bank_card_view_balance
get text_CardNumber_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_card_number"]');} // ...bank_card_view_number
get image_CardBackground(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bg_image"]');}
get image_CardBackgroundChecked(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/checked"]');}
get items_CardBackgrounds(){
  // return $$('android.widget.ImageView');}
  return $$('//*[@resource-id="com.fincube.apexbank.debug:id/bg_image"]');}
get input_CardName_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');} // ...input_card_name
get button_CardNameInputClear(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
get button_Confirm(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/button_confirm"]');}
// https://www.automationtestinghub.com/appium-scroll-examples/
  scrollTo_CardViewFront = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/bank_card_front_view"))';
  scrollToElement_Up = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().text("APEXBANK").className("android.widget.TextView"))';  
  scrollToElement_Up_CardName = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/bank_card_view_name"))';
  scrollToElement_Middle = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/input"))';
  scrollToElement_Down = 'new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().resourceId("com.fincube.apexbank.debug:id/button_confirm"))';

waitForScreenDisplayed_cardSettingsScreen(){ // wait_for_screen_displayed(){
  this.image_CardBackground.waitForDisplayed({timeout: GenM.waitTime + 15000});}
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// экран данных карты > окно удаления карты
get button_Confirm_CardDelete(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_confirm"]');}



/* FUNCTIONS */
async addCardsTotList(rawArray, dataArray, elementAttributeKey, elementAttributeValues){
  /*
    Записываем определенные данные из rawArray в dataArray, отсеивая уже имеющиеся в массиве dataArray данные (напр., название, сумма, номер, срок действия карты, ...).
    
    1.Считываем видимые данные окна и записываем в массив dataArray (напр., название, сумма, номер, срок действия карты, ...).
    2.Прокручиваем окно, делая видимыми следующие данные.
    3.Считываем видимые данные окна и записываем в массив dataArray, отсеивая уже имеющиеся в массиве данные.
  */
   // * Verify that rawArray is an array.
   if (!Array.isArray(rawArray)) {
    throw new Error('Invalid rawArray. Must be an array of elements.');
  }

  // const dataArray = [];
  let elementAttributeValue_Current = '';
  // let elements = [];
  // /*отладка*/ console.log('\n --> rawArray = ' + rawArray + '\n');
  for (let i = 0, l = rawArray.length; i < l; i++) { // перебираем карты
    const elements = await rawArray[i].$$('android.widget.TextView');
    let cardName = '';
    let cardBalance = '';
    let cardNumber = '';
    let cardDate = '';
    // /*отладка*/ console.log('\n --> card ' +  i + ' = '  + rawArray[i]);
        
    for (let x = 0; x < elements.length; x++) { // перебираем элементы текущей карты
      elementAttributeValue_Current = await elements[x].getAttribute(elementAttributeKey);
      // /*отладка*/ console.log(' --> element ' + x + ' = ' + await elements[x].getText());

      switch(elementAttributeValue_Current) {
        case elementAttributeValues[0]: // if (elementAttributeValue_Current === elementAttributeValues[0])
          cardName = await elements[x].getText();
          break;
        case elementAttributeValues[1]:
          cardBalance = await elements[x].getText();
          break;
        case elementAttributeValues[2]:
          cardNumber = await elements[x].getText();
          break;
        case elementAttributeValues[3]:
          cardDate = await elements[x].getText();
          break;
        default:
          console.log(`\n --> Нет элемента с атрибутом: ${elementAttributeValue_Current}\n`);
          // throw " ! нет элемента с атрибутом = '" + elementAttributeValue_Current + "'";
          break;
      }
    }

    if ( // если значения элементов текущей карты пустые, прерываем цикл, идем к следующему
      cardName == '' &
      cardBalance == '' &
      cardNumber == '' &
      cardDate == ''
    ) continue;
    
    if (dataArray.length > 0) { // если массив уже не пустой...
      const dataArray_0 = [];
      dataArray_0.push( // добавляем данные текущей карты в промежуточный массив
        {
          key_1 : cardName,
          key_2 : cardBalance,
          key_3 : cardNumber,
          key_4 : cardDate
        }
      );
      
      let notExisted = true;
      for (let i = 0, l = dataArray.length; i < l; i++) {
        if ( // проверяем, не добавлены ли уже данные текущей карты в массив
          dataArray[i].cardName == dataArray_0[0].key_1 &
          dataArray[i].cardBalance == dataArray_0[0].key_2 &
          dataArray[i].cardNumber == dataArray_0[0].key_3 &
          dataArray[i].cardDate == dataArray_0[0].key_4
          )
        {
          notExisted = false;
          continue; // прерываем цикл, идем к следующему
        }
      }

      if (notExisted) { // если данные текущей карты пока не добавлены...
        dataArray.push( // добавляем данные текущей карты в массив
          {
            cardName : dataArray_0[0].key_1,
            cardBalance : dataArray_0[0].key_2,
            cardNumber : dataArray_0[0].key_3,
            cardDate : dataArray_0[0].key_4
          }
        );
      }
    } else { // если массив пока пустой...
      dataArray.push( // добавляем данные текущей карты в массив
        {
          cardName : cardName,
          cardBalance : cardBalance,
          cardNumber : cardNumber,
          cardDate : cardDate
        }
      );
    }

    // /*отладка*/ console.log('\n --> elements = ' +
    //   '\n' + cardName +
    //   '\n' + cardBalance +
    //   '\n' + cardNumber +
    //   '\n' + cardDate
    // );
  }

  // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
  //   console.log('\n --> dataArray = ' +
  //     '\n' + await dataArray[i].cardName +
  //     '\n' + await dataArray[i].cardBalance +
  //     '\n' + await dataArray[i].cardNumber +
  //     '\n' + await dataArray[i].cardDate
  //   );
  // }
  return dataArray;

}
async getRawArray(rawArrayKey) { // * Получить массив видимых элементов.
  const rawArrays = { // редактировать по мере задействования в различных тестах
    'SHome.items_layout_CardsList': SHome.items_layout_CardsList,
    'SCards.items_titleScreen_MyCards': this.items_titleScreen_MyCards,
    'WCardsS.items_titleWindow_SenderSelectCard': WCardsS.items_titleWindow_SenderSelectCard,
  };

  const selectedRawArray = rawArrays[rawArrayKey];

  if (selectedRawArray === undefined) {
    console.log(`\n --> Нет элемента (в generateCardstList): ${rawArrayKey}\n`);
    return;
  }

  return await selectedRawArray;
}
async generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollDirection) {
  const array = [];
  let lastCard = [];

  // * Получить массив видимых элементов.
  let rawArray = await this.getRawArray(rawArrayKey);
  
  // * Verify that rawArray is an array.
  if (!Array.isArray(rawArray)) {
    throw new Error('Invalid rawArray. Must be an array of elements.');
  }
  
  // *1-создать массив объектов карт.
  // * Добавить элементы в массив.
  await this.addCardsTotList(rawArray, array, elementAttributeKey, elementAttributeValues);
  
  do {
    // *2-запомнить последний объект массива
    lastCard = await array[array.length - 1];
    // /*отладка*/ console.log('\n --> lastCard-array.length = ' + array.length +
    //   '\n' + await lastCard.cardName +
    //   '\n' + await lastCard.cardBalance +
    //   '\n' + await lastCard.cardNumber +
    //   '\n' + await lastCard.cardDate
    // );
    
    // *3-прокрутить элементы
    // * Прокрутить, делая видимыми следующие элементы.
    await $(`android=${scrollDirection}`);
    // * Получить массив видимых элементов.
    rawArray = await this.getRawArray(rawArrayKey);

    // *4-дополнить массив объектов
    // * Добавить элементы в массив.
    await this.addCardsTotList(rawArray, array, elementAttributeKey, elementAttributeValues);

  } while (lastCard !== await array[array.length - 1]); // *5-сравнить последний объект с запомненным

  return array;
}
async sumUpBalances(dataArray) {
  let balanceTotal = 0;
  for (const element of dataArray) {
    let balanceAsText = await element.cardBalance;
    let balanceAsNumber = await UApp.extractNumbersFromString(balanceAsText);
    balanceTotal += balanceAsNumber;
    // /*отладка*/ console.log('\n --> await element.getText(); = ' + await element.cardBalance + '\n');
  }
  // /*отладка*/ console.log('\n --> cardsBalanceAmountTotal-1 = ' + balanceTotal + '\n');
    return await UApp.roundNumber(balanceTotal, 2);
}












async x_addCardsTotList(rawArray, dataArray, elementAttributeKey, elementAttributeValues){
  /*
    Записываем определенные данные из rawArray в dataArray, отсеивая уже имеющиеся в массиве dataArray данные (напр., название, сумма, номер, срок действия карты, ...).
    
    1.Считываем видимые данные окна и записываем в массив dataArray (напр., название, сумма, номер, срок действия карты, ...).
    2.Прокручиваем окно, делая видимыми следующие данные.
    3.Считываем видимые данные окна и записываем в массив dataArray, отсеивая уже имеющиеся в массиве данные.
  */
   // * Verify that rawArray is an array.
   if (!Array.isArray(rawArray)) {
    throw new Error('Invalid rawArray. Must be an array of elements.');
  }

  // const dataArray = [];
  let elementAttributeValue_Current = '';
  let elements = [];
  // /*отладка*/ console.log('\n --> rawArray = ' + rawArray + '\n');
  for (let i = 0, l = rawArray.length; i < l; i++) { // перебираем карты
    let cardName = '';
    let cardBalance = '';
    let cardNumber = '';
    let cardDate = '';
    // /*отладка*/ console.log('\n --> card ' +  i + ' = '  + rawArray[i]);
    elements = await rawArray[i].$$('android.widget.TextView');
    
    for (let x = 0; x < elements.length; x++) { // перебираем элементы текущей карты
      elementAttributeValue_Current = await elements[x].getAttribute(elementAttributeKey);
      // /*отладка*/ console.log(' --> element ' + x + ' = ' + await elements[x].getText());

      switch(elementAttributeValue_Current) {
        case elementAttributeValues[0]: // if (elementAttributeValue_Current === elementAttributeValues[0])
          cardName = await elements[x].getText();
          break;
        case elementAttributeValues[1]:
          cardBalance = await elements[x].getText();
          break;
        case elementAttributeValues[2]:
          cardNumber = await elements[x].getText();
          break;
        case elementAttributeValues[3]:
          cardDate = await elements[x].getText();
          break;
        default:
          console.log(`\n --> Нет элемента с атрибутом: ${elementAttributeValue_Current}\n`);
          // throw " ! нет элемента с атрибутом = '" + elementAttributeValue_Current + "'";
          break;
      }
    }

    if ( // если значения элементов текущей карты пустые, прерываем цикл, идем к следующему
      cardName == '' &
      cardBalance == '' &
      cardNumber == '' &
      cardDate == ''
    ) continue;
    
    if (dataArray.length > 0) { // если массив уже не пустой...
      const dataArray_0 = [];
      dataArray_0.push( // добавляем данные текущей карты в промежуточный массив
        {
          key_1 : cardName,
          key_2 : cardBalance,
          key_3 : cardNumber,
          key_4 : cardDate
        }
      );
      
      let notExisted = true;
      for (let i = 0, l = dataArray.length; i < l; i++) {
        if ( // проверяем, не добавлены ли уже данные текущей карты в массив
          dataArray[i].cardName == dataArray_0[0].key_1 &
          dataArray[i].cardBalance == dataArray_0[0].key_2 &
          dataArray[i].cardNumber == dataArray_0[0].key_3 &
          dataArray[i].cardDate == dataArray_0[0].key_4
          )
        {
          notExisted = false;
          continue; // прерываем цикл, идем к следующему
        }
      }

      if (notExisted) { // если данные текущей карты пока не добавлены...
        dataArray.push( // добавляем данные текущей карты в массив
          {
            cardName : dataArray_0[0].key_1,
            cardBalance : dataArray_0[0].key_2,
            cardNumber : dataArray_0[0].key_3,
            cardDate : dataArray_0[0].key_4
          }
        );
      }
    } else { // если массив пока пустой...
      dataArray.push( // добавляем данные текущей карты в массив
        {
          cardName : cardName,
          cardBalance : cardBalance,
          cardNumber : cardNumber,
          cardDate : cardDate
        }
      );
    }

    // /*отладка*/ console.log('\n --> elements = ' +
    //   '\n' + cardName +
    //   '\n' + cardBalance +
    //   '\n' + cardNumber +
    //   '\n' + cardDate
    // );
  }

  // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
  //   console.log('\n --> dataArray = ' +
  //     '\n' + await dataArray[i].cardName +
  //     '\n' + await dataArray[i].cardBalance +
  //     '\n' + await dataArray[i].cardNumber +
  //     '\n' + await dataArray[i].cardDate
  //   );
  // }
  return dataArray;

}
async x_generateCardstList(rawArrayKey, elementAttributeKey, elementAttributeValues, scrollDirection) {
  let rawArray = await this.getRawArray(rawArrayKey);
  // /*отладка*/ console.log('\n --> rawArray-11 = ' + rawArray + '\n'); await driver.pause(10000);
  // if (!rawArray) {
  //   console.log(`\n --> Element not found in generateCardstList: ${rawArrayKey}\n`);
  //   return;
  // }
  
  // Verify that rawArray is an array.
  if (!Array.isArray(rawArray)) {
    throw new Error('Invalid rawArray. Must be an array of elements.');
  }

  const array = [];
  // *1-создать массив объектов карт
  // * Создать массив видимых элементов.
  await this.addCardsTotList(rawArray, array, elementAttributeKey, elementAttributeValues);

  // let lastCard = await array[array.length - 1];
  let lastCard = [];

  while (lastCard !== await array[array.length - 1]) {// *5-сравнить последний объект с запомненным
    // *2-запомнить последний объект массива
    lastCard = await array[array.length - 1];
    // /*отладка*/ console.log('\n --> lastCard-array.length = ' + array.length +
    //   '\n' + await lastCard.cardName +
    //   '\n' + await lastCard.cardBalance +
    //   '\n' + await lastCard.cardNumber +
    //   '\n' + await lastCard.cardDate
    // );
    
    // *3-прокрутить элементы
    // * Прокрутить, делая видимыми следующие элементы.
    await $(`android=${scrollDirection}`);

    // *4-дополнить массив объектов
    // * Создать массив видимых элементов.
    rawArray = await this.getRawArray(rawArrayKey);
    // /*отладка*/ console.log('\n --> rawArray-12 = ' + rawArray + '\n'); await driver.pause(10000);
    // if (!rawArray) {
    //   console.log(`\n --> Element not found in generateCardstList: ${rawArrayKey}\n`);
    //   return;
    // }
    
    await this.addCardsTotList(rawArray, array, elementAttributeKey, elementAttributeValues);
  }
  return array;
}
async generateCardstList_O(rawArray, dataArray, elementAttributeKey, elementAttributeValues){
  /*
    Записываем определенные данные из rawArray в dataArray, отсеивая уже имеющиеся в массиве dataArray данные (напр., название, сумма, номер, срок действия карты, ...).
    
    1.Считываем видимые данные окна и записываем в массив dataArray (напр., название, сумма, номер, срок действия карты, ...).
    2.Прокручиваем окно, делая видимыми следующие данные.
    3.Считываем видимые данные окна и записываем в массив dataArray, отсеивая уже имеющиеся в массиве данные.
  */
   // Verify that rawArray is an array.
   if (!Array.isArray(rawArray)) {
    throw new Error('Invalid rawArray. Must be an array of elements.');
  }

  // const dataArray = [];
  let elementAttributeValue_Current = '';
  let elements = [];
  // /*отладка*/ console.log('\n --> rawArray = ' + rawArray + '\n');
  for (let i = 0, l = rawArray.length; i < l; i++) { // перебираем карты
    let cardName = '';
    let cardBalance = '';
    let cardNumber = '';
    let cardDate = '';
    // /*отладка*/ console.log('\n --> card ' +  i + ' = '  + rawArray[i]);
    elements = await rawArray[i].$$('android.widget.TextView');
    
    for (let x = 0; x < elements.length; x++) { // перебираем элементы текущей карты
      elementAttributeValue_Current = await elements[x].getAttribute(elementAttributeKey);
      // /*отладка*/ console.log(' --> element ' + x + ' = ' + await elements[x].getText());

      switch(elementAttributeValue_Current) {
        case elementAttributeValues[0]: // if (elementAttributeValue_Current === elementAttributeValues[0])
          cardName = await elements[x].getText();
          break;
        case elementAttributeValues[1]:
          cardBalance = await elements[x].getText();
          break;
        case elementAttributeValues[2]:
          cardNumber = await elements[x].getText();
          break;
        case elementAttributeValues[3]:
          cardDate = await elements[x].getText();
          break;
        default:
          console.log(`\n --> Нет элемента с атрибутом: ${elementAttributeValue_Current}\n`);
          // throw " ! нет элемента с атрибутом = '" + elementAttributeValue_Current + "'";
          break;
      }
    }

    if ( // если значения элементов текущей карты пустые, прерываем цикл, идем к следующему
      cardName == '' &
      cardBalance == '' &
      cardNumber == '' &
      cardDate == ''
    ) continue;
    
    if (dataArray.length > 0) { // если массив уже не пустой...
      const dataArray_0 = [];
      dataArray_0.push( // добавляем данные текущей карты в промежуточный массив
        {
          key_1 : cardName,
          key_2 : cardBalance,
          key_3 : cardNumber,
          key_4 : cardDate
        }
      );
      
      let notExisted = true;
      for (let i = 0, l = dataArray.length; i < l; i++) {
        if ( // проверяем, не добавлены ли уже данные текущей карты в массив
          dataArray[i].cardName == dataArray_0[0].key_1 &
          dataArray[i].cardBalance == dataArray_0[0].key_2 &
          dataArray[i].cardNumber == dataArray_0[0].key_3 &
          dataArray[i].cardDate == dataArray_0[0].key_4
          )
        {
          notExisted = false;
          continue; // прерываем цикл, идем к следующему
        }
      }

      if (notExisted) { // если данные текущей карты пока не добавлены...
        dataArray.push( // добавляем данные текущей карты в массив
          {
            cardName : dataArray_0[0].key_1,
            cardBalance : dataArray_0[0].key_2,
            cardNumber : dataArray_0[0].key_3,
            cardDate : dataArray_0[0].key_4
          }
        );
      }
    } else { // если массив пока пустой...
      dataArray.push( // добавляем данные текущей карты в массив
        {
          cardName : cardName,
          cardBalance : cardBalance,
          cardNumber : cardNumber,
          cardDate : cardDate
        }
      );
    }

    // /*отладка*/ console.log('\n --> elements = ' +
    //   '\n' + cardName +
    //   '\n' + cardBalance +
    //   '\n' + cardNumber +
    //   '\n' + cardDate
    // );
  }

  // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
  //   console.log('\n --> dataArray = ' +
  //     '\n' + await dataArray[i].cardName +
  //     '\n' + await dataArray[i].cardBalance +
  //     '\n' + await dataArray[i].cardNumber +
  //     '\n' + await dataArray[i].cardDate
  //   );
  // }
  return dataArray;

}
async scrollCardstList_O(rawArray_Id, elementAttributeKey, elementAttributeValues, scrollDirection) {
  let rawArray = await this.getRawArray(rawArray_Id);
  // /*отладка*/ console.log('\n --> rawArray-11 = ' + rawArray + '\n'); await driver.pause(10000);
  // if (!rawArray) {
  //   console.log(`\n --> Element not found in scrollCardstList: ${rawArray_Id}\n`);
  //   return;
  // }
  
  // Verify that rawArray is an array.
  if (!Array.isArray(rawArray)) {
    throw new Error('Invalid rawArray. Must be an array of elements.');
  }

  const array = [];
  // *1-создать массив объектов карт
  // * Создать массив видимых элементов.
  await this.generateCardstList(rawArray, array, elementAttributeKey, elementAttributeValues);

  // let lastCard = await array[array.length - 1];
  let lastCard = [];

  while (lastCard !== await array[array.length - 1]) {// *5-сравнить последний объект с запомненным
    // *2-запомнить последний объект массива
    lastCard = await array[array.length - 1];
    // /*отладка*/ console.log('\n --> lastCard-array.length = ' + array.length +
    //   '\n' + await lastCard.cardName +
    //   '\n' + await lastCard.cardBalance +
    //   '\n' + await lastCard.cardNumber +
    //   '\n' + await lastCard.cardDate
    // );
    
    // *3-прокрутить элементы
    // * Прокрутить, делая видимыми следующие элементы.
    await $(`android=${scrollDirection}`);

    // *4-дополнить массив объектов
    // * Создать массив видимых элементов.
    rawArray = await this.getRawArray(rawArray_Id);
    // /*отладка*/ console.log('\n --> rawArray-12 = ' + rawArray + '\n'); await driver.pause(10000);
    // if (!rawArray) {
    //   console.log(`\n --> Element not found in scrollCardstList: ${rawArray_Id}\n`);
    //   return;
    // }
    
    await this.generateCardstList(rawArray, array, elementAttributeKey, elementAttributeValues);
  }
  return array;
}
async getRawArray_000(rawArray_Id) {
  switch (rawArray_Id) {
    case 'SHome.items_layout_CardsList':
      return await SHome.items_layout_CardsList;
    case 'SCards.items_titleScreen_MyCards':
      return await this.items_titleScreen_MyCards;
    case 'WCardsS.items_titleWindow_SenderSelectCard':
      return await WCardsS.items_titleWindow_SenderSelectCard;
    default:
      console.log(`\n --> Нет элемента (в generateCardstList): ${rawArray_Id}\n`);
      // return null;
      return;
  }
}

async generateCardstList_Single(rawArray, elementAttributeKey, elementAttributeValues){
  /*
    Записываем определенные данные из rawArray в dataArray, отсеивая уже имеющиеся в массиве dataArray данные (напр., название, сумма, номер, срок действия карты, ...).
    
    1.Считываем видимые данные окна и записываем в массив dataArray (напр., название, сумма, номер, срок действия карты, ...).
    2.Прокручиваем окно, делая видимыми следующие данные.
    3.Считываем видимые данные окна и записываем в массив dataArray, отсеивая уже имеющиеся в массиве данные.
  */
   // Verify that rawArray is an array.
   if (!Array.isArray(rawArray)) {
    throw new Error('Invalid rawArray. Must be an array of elements.');
  }

  const dataArray = [];
  let elementAttributeValue_Current = '';
  let elements = [];
  // /*отладка*/ console.log('\n --> rawArray = ' + rawArray + '\n');
  for (let i = 0, l = rawArray.length; i < l; i++) { // перебираем карты
    let cardName = '';
    let cardBalance = '';
    let cardNumber = '';
    let cardDate = '';
    // /*отладка*/ console.log('\n --> card ' +  i + ' = '  + rawArray[i]);
    elements = await rawArray[i].$$('android.widget.TextView');
    
    for (let x = 0; x < elements.length; x++) { // перебираем элементы текущей карты
      elementAttributeValue_Current = await elements[x].getAttribute(elementAttributeKey);
      // /*отладка*/ console.log(' --> element ' + x + ' = ' + await elements[x].getText());

      switch(elementAttributeValue_Current) {
        case elementAttributeValues[0]: // if (elementAttributeValue_Current === elementAttributeValues[0])
          cardName = await elements[x].getText();
          break;
        case elementAttributeValues[1]:
          cardBalance = await elements[x].getText();
          break;
        case elementAttributeValues[2]:
          cardNumber = await elements[x].getText();
          break;
        case elementAttributeValues[3]:
          cardDate = await elements[x].getText();
          break;
        default:
          console.log(`\n --> Нет элемента с атрибутом: ${elementAttributeValue_Current}\n`);
          // throw " ! нет элемента с атрибутом = '" + elementAttributeValue_Current + "'";
          break;
      }
    }

    if ( // если значения элементов текущей карты пустые, прерываем цикл, идем к следующему
      cardName == '' &
      cardBalance == '' &
      cardNumber == '' &
      cardDate == ''
    ) continue;
    
    if (dataArray.length > 0) { // если массив уже не пустой...
      const dataArray_0 = [];
      dataArray_0.push( // добавляем данные текущей карты в промежуточный массив
        {
          key_1 : cardName,
          key_2 : cardBalance,
          key_3 : cardNumber,
          key_4 : cardDate
        }
      );
      
      let notExisted = true;
      for (let i = 0, l = dataArray.length; i < l; i++) {
        if ( // проверяем, не добавлены ли уже данные текущей карты в массив
          dataArray[i].cardName == dataArray_0[0].key_1 &
          dataArray[i].cardBalance == dataArray_0[0].key_2 &
          dataArray[i].cardNumber == dataArray_0[0].key_3 &
          dataArray[i].cardDate == dataArray_0[0].key_4
          )
        {
          notExisted = false;
          continue; // прерываем цикл, идем к следующему
        }
      }

      if (notExisted) { // если данные текущей карты пока не добавлены...
        dataArray.push( // добавляем данные текущей карты в массив
          {
            cardName : dataArray_0[0].key_1,
            cardBalance : dataArray_0[0].key_2,
            cardNumber : dataArray_0[0].key_3,
            cardDate : dataArray_0[0].key_4
          }
        );
      }
    } else { // если массив пока пустой...
      dataArray.push( // добавляем данные текущей карты в массив
        {
          cardName : cardName,
          cardBalance : cardBalance,
          cardNumber : cardNumber,
          cardDate : cardDate
        }
      );
    }

    // /*отладка*/ console.log('\n --> elements = ' +
    //   '\n' + cardName +
    //   '\n' + cardBalance +
    //   '\n' + cardNumber +
    //   '\n' + cardDate
    // );
  }

  // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
  //   console.log('\n --> dataArray = ' +
  //     '\n' + await dataArray[i].cardName +
  //     '\n' + await dataArray[i].cardBalance +
  //     '\n' + await dataArray[i].cardNumber +
  //     '\n' + await dataArray[i].cardDate
  //   );
  // }
  return dataArray;

}
async scrollCardstList_OLD(rawArray_Id, dataArray, elementAttributeKey, elementAttributeValues, scrollDirection) {
  
  let rawArray = [];
  // await this.name(rawArray_Id, rawArray);
  // if (rawArray_Id == 'SHome.items_layout_CardsList') {
  //   rawArray = await SHome.items_layout_CardsList;
  // } else {
  //   rawArray = await this.items_titleScreen_MyCards;
  // }
  switch (rawArray_Id) {
    case 'SHome.items_layout_CardsList':
      rawArray = await SHome.items_layout_CardsList;
      break;
    case 'SCards.items_titleScreen_MyCards':
      rawArray = await this.items_titleScreen_MyCards;
      break;

    default:
      console.log('\n --> в scrollCardstList нет элемента: ' + rawArray_Id + '\n');
      break;
  }
  // /*отладка*/ console.log('\n --> rawArray-11 = ' + rawArray + '\n'); await driver.pause(10000);
  
  // *1-создать массив объектов карт
  // * Создать массив видимых элементов.
  await this.generateCardstList(rawArray, dataArray, elementAttributeKey, elementAttributeValues);

  let lastCard = [];
  while (lastCard !== await dataArray[dataArray.length - 1]) {// *5-сравнить последний объект с запомненным
    // *2-запомнить последний объект массива
    lastCard = await dataArray[dataArray.length - 1];
    // /*отладка*/ console.log('\n --> lastCard-dataArray.length = ' + dataArray.length +
    //   '\n' + await lastCard.cardName +
    //   '\n' + await lastCard.cardBalance +
    //   '\n' + await lastCard.cardNumber +
    //   '\n' + await lastCard.cardDate
    // );
    
    // *3-прокрутить элементы
    // * Прокрутить, делая видимыми следующие элементы.
    await $(`android=${scrollDirection}`);

    // *4-дополнить массив объектов
    // * Создать массив видимых элементов.
    // /*отладка*/ console.log('\n --> rawArray-121 = ' + rawArray + '\n');
    // await this.name(rawArray_Id, rawArray);
    // if (rawArray_Id == 'SHome.items_layout_CardsList') {
    //   rawArray = await SHome.items_layout_CardsList;
    // } else {
    //   rawArray = await this.items_titleScreen_MyCards;
    // }
    switch (rawArray_Id) {
      case 'SHome.items_layout_CardsList':
        rawArray = await SHome.items_layout_CardsList;
        break;
      case 'SCards.items_titleScreen_MyCards':
        rawArray = await this.items_titleScreen_MyCards;
        break;
  
      default:
        console.log('\n --> в scrollCardstList нет элемента: ' + rawArray_Id + '\n');
        break;
    }
    // /*отладка*/ console.log('\n --> rawArray-122 = ' + rawArray + '\n'); await driver.pause(10000);
    await this.generateCardstList(rawArray, dataArray, elementAttributeKey, elementAttributeValues);
  }
}
async scrollCardstList_OLD_1(rawArray_Id, dataArray, elementAttributeKey, elementAttributeValues, scrollDirection) {
  let rawArray = await this.getRawArray(rawArray_Id);
  // /*отладка*/ console.log('\n --> rawArray-11 = ' + rawArray + '\n'); await driver.pause(10000);
  // if (!rawArray) {
  //   console.log(`\n --> Element not found in scrollCardstList: ${rawArray_Id}\n`);
  //   return;
  // }

  // *1-создать массив объектов карт
  // * Создать массив видимых элементов.
  await this.generateCardstList(rawArray, dataArray, elementAttributeKey, elementAttributeValues);

  // let lastCard = await dataArray[dataArray.length - 1];
  let lastCard = [];

  while (lastCard !== await dataArray[dataArray.length - 1]) {// *5-сравнить последний объект с запомненным
    // *2-запомнить последний объект массива
    lastCard = await dataArray[dataArray.length - 1];
    // /*отладка*/ console.log('\n --> lastCard-dataArray.length = ' + dataArray.length +
    //   '\n' + await lastCard.cardName +
    //   '\n' + await lastCard.cardBalance +
    //   '\n' + await lastCard.cardNumber +
    //   '\n' + await lastCard.cardDate
    // );
    
    // *3-прокрутить элементы
    // * Прокрутить, делая видимыми следующие элементы.
    await $(`android=${scrollDirection}`);

    // *4-дополнить массив объектов
    // * Создать массив видимых элементов.
    rawArray = await this.getRawArray(rawArray_Id);
    // /*отладка*/ console.log('\n --> rawArray-12 = ' + rawArray + '\n'); await driver.pause(10000);
    // if (!rawArray) {
    //   console.log(`\n --> Element not found in scrollCardstList: ${rawArray_Id}\n`);
    //   return;
    // }
    
    await this.generateCardstList(rawArray, dataArray, elementAttributeKey, elementAttributeValues);
  }
}
async generateCardsList_GPT(rawArray, dataArray, elementAttributeKey, elementAttributeValues) {
  for (let i = 0, l = rawArray.length; i < l; i++) {// перебираем карты
  // for (const rawCard of rawArray) {
    let cardName = '';
    let cardBalance = '';
    let cardNumber = '';
    let cardDate = '';

    const elements = await rawArray[i].$$('android.widget.TextView');

    for (let x = 0; x < elements.length; x++) { // перебираем элементы текущей карты
    // for (const element of elements) {
      const elementAttributeValue = await elements[x].getAttribute(elementAttributeKey);

      switch (elementAttributeValue) {
        case elementAttributeValues[0]:
          cardName = await elements[x].getText();
          break;
        case elementAttributeValues[1]:
          cardBalance = await elements[x].getText();
          break;
        case elementAttributeValues[2]:
          cardNumber = await elements[x].getText();
          break;
        case elementAttributeValues[3]:
          cardDate = await elements[x].getText();
          break;
        default:
          console.log(`! нет элемента с атрибутом = '${elementAttributeValue}'`);
          break;
      }
    }

    if (!(cardName === '' && cardBalance === '' && cardNumber === '' && cardDate === '')) {
      const cardData = {
        cardName,
        cardBalance,
        cardNumber,
        cardDate,
      };

      const isCardDataNotExists = dataArray.every(existingData => {
        return Object.keys(existingData).every(key => existingData[key] !== cardData[key]);
      });

      if (isCardDataNotExists) {
        dataArray.push(cardData);
      }
    }
  }
}



/* FUNCTIONS */
// сохранить балансы карт/счетов
async saveMoneySourceBalance(moneySourceNumber, moneySourceName) {
  moneySourceNumber
  moneySourceName
}



/* EOF class */
}

module.exports = new CardsScreen();