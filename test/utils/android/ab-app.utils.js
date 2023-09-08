class AppUtilities {
  
/* SELECTORS */
// app keyboard
get appKeyboardKey_1() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_1"]');}
get appKeyboardKey_2() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_2"]');}
get appKeyboardKey_3() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_3"]');}
get appKeyboardKey_4() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_4"]');}
get appKeyboardKey_5() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_5"]');}
get appKeyboardKey_6() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_6"]');}
get appKeyboardKey_7() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_7"]');}
get appKeyboardKey_8() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_8"]');}
get appKeyboardKey_9() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_9"]');}
get appKeyboardKey_0() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_0"]');}
get appKeyboardKey_Backspace() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_backspace"]');}



/* FUNCTIONS */
async appKeyboardTypeIn(value) {
  // /*отладка*/ console.log('\n --> value-0 = ' + value + '\n');
  // const str1 = value.at(-1);
  // // /*отладка*/ console.log('\n --> str1 = ' + str1 + '\n');
  // value = str1 + value.slice(0, -1);
  // // /*отладка*/ console.log('\n --> value-1 = ' + value + '\n');
  // let symbolsArray = value.split('');

  // symbolsArray.forEach(element => {
  for (const element of value) { // for (const element of symbolsArray) {
    // /*отладка*/ console.log('\n --> value = ' + element + '\n');
    await driver.pause(350); // замедляем нажатия для приложания, ГитХаб и БраузерСтак
    switch (element) {
      // цифры
      case '0':
        this.appKeyboardKey_0.click();
        break;
      case '1':
        this.appKeyboardKey_1.click();
        break;
      case '2':
        this.appKeyboardKey_2.click();
        break;
      case '3':
        this.appKeyboardKey_3.click();
        break;
      case '4':
        this.appKeyboardKey_4.click();
        break;
      case '5':
        this.appKeyboardKey_5.click();
        break;
      case '6':
        this.appKeyboardKey_6.click();
        break;
      case '7':
        this.appKeyboardKey_7.click();
        break;
      case '8':
        this.appKeyboardKey_8.click();
        break;
      case '9':
        this.appKeyboardKey_9.click();
        break;

      default:
        console.log('\n --> в appKeyboardTypeIn нет элемента: ' + element + '\n');
        break;
    }
  }//);
}
// async generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue) { // appList(raw_array, ...)
//   let elementAttributeValueCurrent = '';
//   for (const element of raw_array) {
//     // elementAttributeValueCurrent = await element.getAttribute('resource-id');
//     elementAttributeValueCurrent = await element.getAttribute(elementAttributeKey);
//     if(elementAttributeValueCurrent == elementAttributeValue){
//       // /*отладка*/ console.log('\n --> elementAttributeValueCurrent = ' + elementAttributeValueCurrent + '\n');
//       data_array.push(element);
//     }
//   }
//   /*отладка*/ console.log(
//     '\n --> ' + await data_array[0].getAttribute('resource-id') + ' = data_array[0]' +
//     '\n --> ' + await data_array[1].getAttribute('resource-id') + ' = data_array[1]' +
//     // '\n --> ' + await data_array[2].getAttribute('resource-id') + ' = data_array[2]' +
//     // '\n --> ' + await data_array[3].getAttribute('resource-id') + ' = data_array[3]' +
//     '\n');
//   /*отладка*/ console.log(
//     '\n --> ' + await data_array[0].getText() + ' = data_array[0].getText()' +
//     '\n --> ' + await data_array[1].getText() + ' = data_array[1].getText()' +
//     // '\n --> ' + await data_array[2].getText() + ' = data_array[2].getText()' +
//     // '\n --> ' + await data_array[3].getText() + ' = data_array[3].getText()' +
//     '\n');
//   /*отладка*/ await driver.pause(10000);
// }
async generateElementList(raw_array, data_array, elementAttributeKey, elementAttributeValue_1, elementAttributeValue_2) {
  let elementAttributeValue_Current = '';
  // /*отладка*/ console.log('\n --> raw_array = ' + raw_array + '\n');

  for(let i = 0, l = raw_array.length; i < l; i++) { // for (const element of raw_array) {
    // elementAttributeValue_Current = await element.getAttribute('resource-id');
    elementAttributeValue_Current = await raw_array[i].getAttribute(elementAttributeKey);
    // /*отладка*/ console.log('\n --> [' + i + '] elementAttributeValue_Current = ' + elementAttributeValue_Current + '\n');
    if(elementAttributeValue_Current == elementAttributeValue_1){
      // /*отладка*/ console.log(
      //   '\n --> ' + elementAttributeValue_1       + ' = [' + i + '] elementAttributeValue_1' +
      //   '\n --> ' + elementAttributeValue_Current + ' = [' + i + '] elementAttributeValue_Current' + '\n');
      // /*отладка*/ await driver.pause(5000);
      data_array.push(raw_array[i]); // .push(element)

      if(elementAttributeValue_2 !== undefined){
        for(let y = i+1; y < l; y++) {
          elementAttributeValue_Current = await raw_array[y].getAttribute(elementAttributeKey);
          if(elementAttributeValue_Current == elementAttributeValue_2){
            // /*отладка*/ console.log(
            //   '\n --> ' + elementAttributeValue_2       + ' = elementAttributeValue_2' +
            //   '\n --> ' + elementAttributeValue_Current + ' = elementAttributeValue_Current' + '\n');
            // /*отладка*/ await driver.pause(5000);
            data_array.push(raw_array[y]);
            y = l; // terminates second loop // break;
          }
        }
      }
    }
  }
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getAttribute('resource-id') + ' = data_array[0]' +
  //   '\n --> ' + await data_array[1].getAttribute('resource-id') + ' = data_array[1]' +
  //   // '\n --> ' + await data_array[2].getAttribute('resource-id') + ' = data_array[2]' +
  //   // '\n --> ' + await data_array[3].getAttribute('resource-id') + ' = data_array[3]' +
  //   '\n');
  // /*отладка*/ console.log(
  //   '\n --> ' + await data_array[0].getText() + ' = data_array[0].getText()' +
  //   '\n --> ' + await data_array[1].getText() + ' = data_array[1].getText()' +
  //   // '\n --> ' + await data_array[2].getText() + ' = data_array[2].getText()' +
  //   // '\n --> ' + await data_array[3].getText() + ' = data_array[3].getText()' +
  //   '\n');

  // /*отладка*/ for (let i = 0, l = data_array.length; i < l; i++) {
  //   console.log('\n --> ' + await data_array[i].getText() +
  //     ' = data_array[' + i + '].getText()');
  // }
  // /*отладка*/ await driver.pause(10000);
}
async generateRandomChars(length, charType) { // randomChars(length, charType)
  // Declare all characters
  // const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  // const chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
  // const chars = '0123456789';
  let chars = '';
  switch (charType) {
    case 'en':
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      break;

    case 'ru': // ! неизвестны коды кириллицы, используемые в appKeyboardTypeIn(value)
      chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
      break;

    case 'amount':
      chars = '123456789';
      break;

    default:
      chars = '0123456789';
      break;
  }

  // Pick characers randomly
  let str = '';
  for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
}
async generateRandomCharsOfSet(length, charSet, charType) {
  let chars = '';
  if(charSet){
    chars = charSet;
  } else {
    switch (charType) {
      case 'en':
        chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        break;

      case 'ru': // ! неизвестны коды кириллицы, используемые в appKeyboardTypeIn(value)
        chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
        break;

      case 'amount':
        chars = '123456789';
        break;

      default:
        chars = '0123456789';
        break;
    }
  }

  // Pick characers randomly
  let str = '';
  for (let i = 0; i < length; i++) {
      str += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return str;
}
async extractNumbersFromString(value) { // getNumbers(value), removeLetters(value)
  const string = value.replace(/[a-z-+()\s]/gi, '');
  // /*отладка*/ console.log('\n --> string = ' + string + '\n');
  // /*отладка*/ console.log('\n --> typeof Number(string) = ' + typeof Number(string) + '\n');
  return Number(string);
}
async roundNumber(value, precision) {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
async separateThousandthsOfNumber(value) { // separateThousandths(value)
  const symbolsArray = value.split('');
  let string = '';

  for (let i = symbolsArray.length - 1; i >= 0 ; i--) {
    // /*отладка*/ console.log('\n --> symbolsArray[' + i + '] = ' + symbolsArray[i] + '\n');
    if((string.length+1)%4 == 0) string = ' ' + string;
    string = symbolsArray[i] + string;
  }
  // /*отладка*/ console.log('\n --> string = ' + string + '\n');
  return string;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// функции, применимые к разным экранам
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
            data_array[i].key_4 == data_array_0[0].key_4)
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

module.exports = new AppUtilities();