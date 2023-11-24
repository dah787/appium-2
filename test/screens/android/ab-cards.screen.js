const GenM  = require('./ab-general.screen');                  // General screen Model
const SHome = require('../../screens/android/ab-home.screen'); // screen > Home

class CardsScreen {
/* CONSTANTS */
titleScreen_MyCards_Ru_Expected = 'Мои карты';
titleScreen_AddCard_Ru_Expected = 'Добавить карту';

text_ElementAttributeKey_En_Expected = 'resource-id';
text_ElementAttributeValue_En_Expected = 'com.fincube.apexbank.debug:id/tvCardNumberNotOne';



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
async generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValues){
  /*
    Записываем определенные данные из raw_array в data_array, отсеивая уже имеющиеся в массиве data_array данные (напр., название, сумма, номер, срок действия карты, ...).
    
    1.Считываем видимые данные окна и записываем в массив data_array (напр., название, сумма, номер, срок действия карты, ...).
    2.Прокручиваем окно, делая видимыми следующие данные.
    3.Считываем видимые данные окна и записываем в массив data_array, отсеивая уже имеющиеся в массиве данные.
  */
  let cardName = '';
  let cardBalance = '';
  let cardNumber = '';
  let cardDate = '';
    
  let elementAttributeValue_Current = '';
  let elements = [];
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array + '\n');
  for (let i = 0, l = raw_array.length; i < l; i++) { // перебираем карты
    // /*отладка*/ console.log('\n --> card ' +  i + ' = '  + raw_array[i]);
    elements = await raw_array[i].$$('android.widget.TextView');
    
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
          console.log("! нет элемента с атрибутом = '" + elementAttributeValue_Current + "'");
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
    
    if (await data_array.length > 0) { // если массив уже не пустой...
      const data_array_0 = [];
      data_array_0.push( // добавляем данные текущей карты в промежуточный массив
        {
          key_1 : cardName,
          key_2 : cardBalance,
          key_3 : cardNumber,
          key_4 : cardDate
        }
      );
      
      let notExisted = true;
      for (let i = 0, l = await data_array.length; i < l; i++) {
        if ( // проверяем, не добавлены ли уже данные текущей карты в массив
          data_array[i].cardName == data_array_0[0].key_1 &
          data_array[i].cardBalance == data_array_0[0].key_2 &
          data_array[i].cardNumber == data_array_0[0].key_3 &
          data_array[i].cardDate == data_array_0[0].key_4
          )
        {
          notExisted = false;
          continue; // прерываем цикл, идем к следующему
        }
      }

      if (notExisted) { // если данные текущей карты пока не добавлены...
        data_array.push( // добавляем данные текущей карты в массив
          {
            cardName : data_array_0[0].key_1,
            cardBalance : data_array_0[0].key_2,
            cardNumber : data_array_0[0].key_3,
            cardDate : data_array_0[0].key_4
          }
        );
      }
    } else { // если массив пока пустой...
      data_array.push( // добавляем данные текущей карты в массив
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

  // /*отладка*/ for (let i = 0, l = data_array.length; i < l; i++) {
  //   console.log('\n --> data_array = ' +
  //     '\n' + await data_array[i].cardName +
  //     '\n' + await data_array[i].cardBalance +
  //     '\n' + await data_array[i].cardNumber +
  //     '\n' + await data_array[i].cardDate
  //   );
  // }

}
// async name(raw_array_Id, raw_array) {
//   /*отладка*/ console.log('\n --> raw_array_Id = ' + raw_array_Id);
//   if (raw_array_Id == 'SHome.items_layout_CardsList') {
//     /*отладка*/ console.log('\n --> raw_array_Id-101 = ' + raw_array_Id);
//     raw_array = await SHome.items_layout_CardsList;
//     /*отладка*/ console.log('\n --> raw_array-101 = ' + raw_array);
//   } else {
//     /*отладка*/ console.log('\n --> raw_array_Id-102 = ' + raw_array_Id);
//     raw_array = await this.items_titleScreen_MyCards;
//     /*отладка*/ console.log('\n --> raw_array-102 = ' + raw_array);
//   }
// }
async scrollCardstList(raw_array_Id, data_array, elementAttributeKey, elementAttributeValues, scrollDirection) {
  
  let raw_array = [];
  // await this.name(raw_array_Id, raw_array);
  // if (raw_array_Id == 'SHome.items_layout_CardsList') {
  //   raw_array = await SHome.items_layout_CardsList;
  // } else {
  //   raw_array = await this.items_titleScreen_MyCards;
  // }
  switch (raw_array_Id) {
    case 'SHome.items_layout_CardsList':
      raw_array = await SHome.items_layout_CardsList;
      break;
    case 'SCards.items_titleScreen_MyCards':
      raw_array = await this.items_titleScreen_MyCards;
      break;

    default:
      console.log('\n --> в scrollCardstList нет элемента: ' + raw_array_Id + '\n');
      break;
  }
  // /*отладка*/ console.log('\n --> raw_array-11 = ' + raw_array + '\n'); await driver.pause(10000);
  
  // *1-создать массив объектов карт
  // * Создать массив видимых элементов.
  await this.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValues);

  let lastCard = [];
  while (lastCard !== await data_array[data_array.length - 1]) {// *5-сравнить последний объект с запомненным
    // *2-запомнить последний объект массива
    lastCard = await data_array[data_array.length - 1];
    // /*отладка*/ console.log('\n --> lastCard-data_array.length = ' + data_array.length +
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
    // /*отладка*/ console.log('\n --> raw_array-121 = ' + raw_array + '\n');
    // await this.name(raw_array_Id, raw_array);
    // if (raw_array_Id == 'SHome.items_layout_CardsList') {
    //   raw_array = await SHome.items_layout_CardsList;
    // } else {
    //   raw_array = await this.items_titleScreen_MyCards;
    // }
    switch (raw_array_Id) {
      case 'SHome.items_layout_CardsList':
        raw_array = await SHome.items_layout_CardsList;
        break;
      case 'SCards.items_titleScreen_MyCards':
        raw_array = await this.items_titleScreen_MyCards;
        break;
  
      default:
        console.log('\n --> в scrollCardstList нет элемента: ' + raw_array_Id + '\n');
        break;
    }
    // /*отладка*/ console.log('\n --> raw_array-122 = ' + raw_array + '\n'); await driver.pause(10000);
    await this.generateCardstList(raw_array, data_array, elementAttributeKey, elementAttributeValues);
  }
}



/* EOF class */
}

module.exports = new CardsScreen();