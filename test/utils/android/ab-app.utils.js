const SAuth = require("../../screens/android/ab-authorization.screen"); // screen > Authorization
const SSms  = require('../../screens/android/ab-smsCodeEnter.screen');  // screen > Sms code enter

class AppUtilities {

/* SELECTORS */
// https://www.automationtestinghub.com/appium-scroll-examples/
// https://russianblogs.com/article/88992310695/
scrollForward = 'new UiScrollable(new UiSelector()).scrollForward()';
scrollBackward = 'new UiScrollable(new UiSelector()).scrollBackward()';

// app keyboard
get appKeyboardKey_1(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_1"]');}
get appKeyboardKey_2(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_2"]');}
get appKeyboardKey_3(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_3"]');}
get appKeyboardKey_4(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_4"]');}
get appKeyboardKey_5(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_5"]');}
get appKeyboardKey_6(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_6"]');}
get appKeyboardKey_7(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_7"]');}
get appKeyboardKey_8(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_8"]');}
get appKeyboardKey_9(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_9"]');}
get appKeyboardKey_0(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_0"]');}
get appKeyboardKey_Backspace(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_backspace"]');}



/* FUNCTIONS */
// async appKeyboardTypeIn(value) {
//   // /*отладка*/ console.log('\n --> value-0 = ' + value + '\n');
//   // const str1 = value.at(-1);
//   // // /*отладка*/ console.log('\n --> str1 = ' + str1 + '\n');
//   // value = str1 + value.slice(0, -1);
//   // // /*отладка*/ console.log('\n --> value-1 = ' + value + '\n');
//   // let symbolsArray = value.split('');

//   // symbolsArray.forEach(element => {
//   for (const element of value) { // for (const element of symbolsArray) {
//     // /*отладка*/ console.log('\n --> value = ' + element + '\n');
//     await driver.pause(500); // замедляем нажатия для приложания, ГитХаб и БраузерСтак
//     switch (element) {
//       // цифры
//       case '0':
//         this.appKeyboardKey_0.click();
//         break;
//       case '1':
//         this.appKeyboardKey_1.click();
//         break;
//       case '2':
//         this.appKeyboardKey_2.click();
//         break;
//       case '3':
//         this.appKeyboardKey_3.click();
//         break;
//       case '4':
//         this.appKeyboardKey_4.click();
//         break;
//       case '5':
//         this.appKeyboardKey_5.click();
//         break;
//       case '6':
//         this.appKeyboardKey_6.click();
//         break;
//       case '7':
//         this.appKeyboardKey_7.click();
//         break;
//       case '8':
//         this.appKeyboardKey_8.click();
//         break;
//       case '9':
//         this.appKeyboardKey_9.click();
//         break;

//       default:
//         console.log('\n --> в appKeyboardTypeIn нет элемента: ' + element + '\n');
//         break;
//     }
//   }//);
// }
async appKeyboardTypeIn(value) {
  // /*отладка*/ console.log('\n --> value-0 = ' + value + '\n');
  // const str1 = value.at(-1);
  // // /*отладка*/ console.log('\n --> str1 = ' + str1 + '\n');
  // value = str1 + value.slice(0, -1);
  // // /*отладка*/ console.log('\n --> value-1 = ' + value + '\n');
  // let symbolsArray = value.split('');

  // Verify that the input value is a non-empty string.
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error('Invalid input value. Must be a non-empty string.');
  }

  // symbolsArray.forEach(element => {
  for (const element of value) { // for (const element of symbolsArray) {
    // /*отладка*/ console.log('\n --> value = ' + element + '\n');
    await driver.pause(500); // замедляем нажатия для приложания, ГитХаб и БраузерСтак
    switch (element) {
      // цифры
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        this[`appKeyboardKey_${element}`].click();
        break;

      default:
        // console.log('\n --> в appKeyboardTypeIn нет элемента: ' + element + '\n');
        console.log(`\n Нет элемента (в appKeyboardTypeIn) = ${element} \n`);
        break;
    }
  }//);
}

// async generateElementList(rawArray, dataArray, elementAttributeKey, elementAttributeValue_1, elementAttributeValue_2) {
//   let elementAttributeValue_Current = '';
//   // /*отладка*/ console.log('\n --> rawArray = ' + rawArray + '\n');

//   for(let i = 0, l = rawArray.length; i < l; i++) { // for (const element of rawArray) {
//     // elementAttributeValue_Current = await element.getAttribute('resource-id');
//     elementAttributeValue_Current = await rawArray[i].getAttribute(elementAttributeKey);
//     if(elementAttributeValue_Current == null) continue;
//     // /*отладка*/ console.log('\n --> [' + i + '] elementAttributeValue_Current = ' + elementAttributeValue_Current + '\n');
//     // /*отладка*/ console.log('\n --> [' + i + '] elementAttributeValue_1 = ' + elementAttributeValue_1 + '\n');
//     // /*отладка*/ console.log('\n --> [' + i + '] elementAttributeValue_Current.includes(elementAttributeValue_1) = ' + elementAttributeValue_Current.includes(elementAttributeValue_1) + '\n');
//     // if(elementAttributeValue_Current == elementAttributeValue_1){
//     if(elementAttributeValue_Current !== null){
//       if(elementAttributeValue_Current == elementAttributeValue_1 || elementAttributeValue_Current.includes(elementAttributeValue_1)){
//         // /*отладка*/ console.log(
//         //   '\n --> ' + elementAttributeValue_1       + ' = [' + i + '] elementAttributeValue_1' +
//         //   '\n --> ' + elementAttributeValue_Current + ' = [' + i + '] elementAttributeValue_Current' + '\n');
//         // /*отладка*/ await driver.pause(5000);
//         dataArray.push(rawArray[i]); // .push(element)

//         if(elementAttributeValue_2 !== undefined){
//           for(let y = i+1; y < l; y++) {
//             elementAttributeValue_Current = await rawArray[y].getAttribute(elementAttributeKey);
//             if(elementAttributeValue_Current == elementAttributeValue_2){
//               // /*отладка*/ console.log(
//               //   '\n --> ' + elementAttributeValue_2       + ' = elementAttributeValue_2' +
//               //   '\n --> ' + elementAttributeValue_Current + ' = elementAttributeValue_Current' + '\n');
//               // /*отладка*/ await driver.pause(5000);
//               dataArray.push(rawArray[y]);
//               y = l; // terminates second loop // break;
//             }
//           }
//         }
//       }
//     }
//   }
//   // /*отладка*/ console.log(
//   //   '\n --> ' + await dataArray[0].getAttribute('resource-id') + ' = dataArray[0]' +
//   //   '\n --> ' + await dataArray[1].getAttribute('resource-id') + ' = dataArray[1]' +
//   //   // '\n --> ' + await dataArray[2].getAttribute('resource-id') + ' = dataArray[2]' +
//   //   // '\n --> ' + await dataArray[3].getAttribute('resource-id') + ' = dataArray[3]' +
//   //   '\n');
//   // /*отладка*/ console.log(
//   //   '\n --> ' + await dataArray[0].getText() + ' = dataArray[0].getText()' +
//   //   '\n --> ' + await dataArray[1].getText() + ' = dataArray[1].getText()' +
//   //   // '\n --> ' + await dataArray[2].getText() + ' = dataArray[2].getText()' +
//   //   // '\n --> ' + await dataArray[3].getText() + ' = dataArray[3].getText()' +
//   //   '\n');

//   // /*отладка*/ for (let i = 0, l = dataArray.length; i < l; i++) {
//   //   console.log('\n --> ' + await dataArray[i].getText() +
//   //     ' = dataArray[' + i + '].getText()');
//   // }
//   // /*отладка*/ await driver.pause(10000);
// }
async generateElementList(rawArray, elementAttributeKey, elementAttributeValue_1, elementAttributeValue_2) {
  // Verify that rawArray is an array.
  if (!Array.isArray(rawArray)) {
    throw new Error('Invalid rawArray. Must be an array of elements.');
  }

  const array = [];
  let elementAttributeValue_Current = '';
  // /*отладка*/ console.log('\n --> rawArray = ' + rawArray + '\n');

  for(let i = 0, l = rawArray.length; i < l; i++) { // for (const element of rawArray) {
    // elementAttributeValue_Current = await element.getAttribute('resource-id');
    elementAttributeValue_Current = await rawArray[i].getAttribute(elementAttributeKey);
    if(elementAttributeValue_Current == null) continue;
    // /*отладка*/ console.log('\n --> [' + i + '] elementAttributeValue_Current = ' + elementAttributeValue_Current + '\n');
    // /*отладка*/ console.log('\n --> [' + i + '] elementAttributeValue_1 = ' + elementAttributeValue_1 + '\n');
    // /*отладка*/ console.log('\n --> [' + i + '] elementAttributeValue_Current.includes(elementAttributeValue_1) = ' + elementAttributeValue_Current.includes(elementAttributeValue_1) + '\n');
    // if(elementAttributeValue_Current == elementAttributeValue_1){
    if(elementAttributeValue_Current !== null){
      if(elementAttributeValue_Current == elementAttributeValue_1 || elementAttributeValue_Current.includes(elementAttributeValue_1)){
        // /*отладка*/ console.log(
        //   '\n --> ' + elementAttributeValue_1       + ' = [' + i + '] elementAttributeValue_1' +
        //   '\n --> ' + elementAttributeValue_Current + ' = [' + i + '] elementAttributeValue_Current' + '\n');
        // /*отладка*/ await driver.pause(5000);
        array.push(rawArray[i]); // .push(element)

        if(elementAttributeValue_2 !== undefined){
          for(let y = i+1; y < l; y++) {
            elementAttributeValue_Current = await rawArray[y].getAttribute(elementAttributeKey);
            if(elementAttributeValue_Current == elementAttributeValue_2){
              // /*отладка*/ console.log(
              //   '\n --> ' + elementAttributeValue_2       + ' = elementAttributeValue_2' +
              //   '\n --> ' + elementAttributeValue_Current + ' = elementAttributeValue_Current' + '\n');
              // /*отладка*/ await driver.pause(5000);
              array.push(rawArray[y]);
              y = l; // terminates second loop // break;
            }
          }
        }
      }
    }
  }
  // /*отладка*/ console.log(
  //   '\n --> ' + await array[0].getAttribute('resource-id') + ' = array[0]' +
  //   '\n --> ' + await array[1].getAttribute('resource-id') + ' = array[1]' +
  //   // '\n --> ' + await array[2].getAttribute('resource-id') + ' = array[2]' +
  //   // '\n --> ' + await array[3].getAttribute('resource-id') + ' = array[3]' +
  //   '\n');
  // /*отладка*/ console.log(
  //   '\n --> ' + await array[0].getText() + ' = array[0].getText()' +
  //   '\n --> ' + await array[1].getText() + ' = array[1].getText()' +
  //   // '\n --> ' + await array[2].getText() + ' = array[2].getText()' +
  //   // '\n --> ' + await array[3].getText() + ' = array[3].getText()' +
  //   '\n');

  // /*отладка*/ for (let i = 0, l = array.length; i < l; i++) {
  //   console.log('\n --> ' + await array[i].getText() +
  //     ' = array[' + i + '].getText()');
  // }
  // /*отладка*/ await driver.pause(10000);
  return array;
}

// async generateRandomChars(length, charType) { // randomChars(length, charType)
//   // Declare all characters
//   // const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   // const chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
//   // const chars = '0123456789';
//   let chars = '';
  
//   switch (charType) {
//     case 'en':
//       chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//       break;

//     case 'ru': // ! неизвестны коды кириллицы, используемые в appKeyboardTypeIn(value)
//       chars = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789';
//       break;

//     case 'amount':
//       chars = '123456789';
//       break;

//     default:
//       chars = '0123456789';
//       break;
//   }

//   // Pick characers randomly
//   let string = '';
//   for (let i = 0; i < length; i++) {
//     string += chars.charAt(Math.floor(Math.random() * chars.length));
//   }

//   return string;
// }
async generateRandomChars(length, charType) { // randomChars(length, charType)
  // Verify that the length is a positive integer.
  if (!Number.isInteger(length) || length <= 0) {
    throw new Error('Invalid length. Must be a positive integer.');
  }

  // Declare all characters
  const charSets = {
    'en': 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    'ru': 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя0123456789',
    'amount': '123456789',
    'default': '0123456789'
  };
  
  const chars = charSets[charType] || charSets['default'];
  
  // Pick characers randomly
  let string = '';

  for (let i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return string;
}
  async generateRandomCharsOfSet(length, charSet, charType) { // перепроверить когда она потребуется
    let chars = '';

    if (charSet) {
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
    let string = '';
    
    for (let i = 0; i < length; i++) {
      string += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return string;
  }
async extractNumbersFromString(value) { // getNumbers(value), removeLetters(value)
  // /*отладка*/ console.log('\n --> value = ' + value + '\n');
  // Verify that the input value is a non-empty string.
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error('Invalid input value. Must be a non-empty string representing a number.');
  }
  
  const string = value.replace(/[a-zа-я-+();:\s]/gi, '');
  // /*отладка*/ console.log('\n --> string = ' + string + '\n');
  // /*отладка*/ console.log('\n --> typeof Number(string) = ' + typeof Number(string) + '\n');
  return Number(string);
}
async roundNumber(value, precision = 0) { // async roundNumber(value, precision)
  // Ensure that the precision is a non-negative integer.
  if (!Number.isInteger(precision) || precision < 0) {
    throw new Error('Precision must be a non-negative integer.');
  }

  // const multiplier = Math.pow(10, precision || 0);
  const multiplier = 10 ** precision;

  // Verify that the input value is a valid number.
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error('Invalid input value. Must be a valid number.');
  }

  return Math.round(value * multiplier) / multiplier;
}
async separateThousandthsOfNumber(value) { // separateThousandths(value)
  // /*отладка*/ console.log('\n --> value = ' + value + '\n');
  // /*отладка*/ console.log('\n --> typeof(value) = ' + typeof(value) + '\n');
  // Verify that the input value is a non-empty string.
  if (typeof value !== 'string' || value.trim() === '') {
    throw new Error('Invalid input value. Must be a non-empty string representing a number.');
  }

  const symbolsArray = value.split('');
  let string = '';

  for (let i = symbolsArray.length - 1; i >= 0; i--) {
    // /*отладка*/ console.log('\n --> symbolsArray[' + i + '] = ' + symbolsArray[i] + '\n');
    if ((string.length + 1) % 4 === 0) string = ' ' + string;
    string = symbolsArray[i] + string;
  }
  // /*отладка*/ console.log('\n --> string = ' + string + '\n');

  return string;
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// функции, применимые к разным экранам
async smsCodeInput() { // предварительно установить фокус на поле ввода
  // /*отладка*/ console.log('\n --> input_SmsCode.getText = ' + await SSms.input_SmsCode.getText() + '\n');
  // * Ждем, пока поле ввода не будет заполнено
  let i = 0;
  while (
    // await SSms.input_SmsCode.getText() == '6 цифр' ||
    // (await SSms.input_SmsCode.getText()).length < 6 ||
    i < 100
    ){
      const smsCodeText = await SSms.input_SmsCode.getText();
      if (smsCodeText == '6 цифр') {
        await driver.pause(500);
      } else if (smsCodeText.length == 6) {
        break;
      }
    i++;
    // /*отладка*/ console.log('\n --> i = ' + i + '\n');
    // /*отладка*/ console.log('\n --> input_SmsCode.getText = ' + await SSms.input_SmsCode.getText() + '\n');
  }
  // /*отладка*/ console.log('\n --> i = ' + i + '\n');
  // /*отладка*/ console.log('\n --> input_SmsCode.getText = ' + await SSms.input_SmsCode.getText() + '\n');
  // await driver.pause(15000);
}
      // почему-то не видит SAuth
async ifEnterYourCodeScreenOpen() { // если открыт экран Введите свой PIN-код
  if(await SAuth.titleScreen_EnterPinCode.isDisplayed()){
    await this.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
  }
}



/* EOF class */
}

module.exports = new AppUtilities();