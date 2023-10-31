class DeviceUtilities { // related to device tested


// asd = 'DeviceUtilities - related to device tested!';


/* SELECTORS */
// экран Выберите контакт
get selectContactScreenHeaderRu(){
  return $('//android.widget.TextView[@text="Выберите контакт"]');}
get contactsSearchButton(){
  // return $('//*[@resource-id="com.android.contacts:id/menu_search"]');}
  return $('~Поиск в контактах');}

// экран Выберите контакт > экран Поиск контактов
get contactsSearchInput(){
  return $('//*[@resource-id="com.google.android.contacts:id/search_view"]');}
  // return $('//android.widget.EditText[@hint="Поиск контактов"]');}
get contactName(){
  return $('//*[@resource-id="com.google.android.contacts:id/cliv_name_textview"]');}



/* FUNCTIONS */
async androidPressBackButton(times) {
  for (let i = 0; i < times; i++) {
    await driver.back();
  }
}

/** KeyCodes List
 * https://thequickadvisor.com/how-do-i-use-my-keyboard-keys-in-appium/
 * KeyCodes List
    ‘a’ – ‘z’ –> 29 – 54.
    ‘0’ – ‘9’–> 7 – 16.
    SPACE –> 62.
    ENTER —> 66.
    BACKSPACE –> 67.
    BACK –> 4.
    CALL –> 5.
    ENDCALL –> 6.
  * Appium Android keycode list https://www.programmersought.com/article/9477385345/
  * KEYCODE_0 ‘0’ key. 7
  0 < pressKeyCode=7
  1 < pressKeyCode=8
  2 < pressKeyCode=9
  3 < pressKeyCode=10
  4 < pressKeyCode=11
  5 < pressKeyCode=12
  6 < pressKeyCode=13
  7 < pressKeyCode=14
  8 < pressKeyCode=15
  9 < pressKeyCode=16
  */
// async keyboardTypeIn(value) {
async androidKeyboardTypeIn(value) {
  // https://www.programmersought.com/article/9477385345/
  // /*отладка*/ console.log('\n --> value-0 = ' + value + '\n');
  // const str1 = value.at(-1);
  // // /*отладка*/ console.log('\n --> str1 = ' + str1 + '\n');
  // value = str1 + value.slice(0, -1);
  // // /*отладка*/ console.log('\n --> value-1 = ' + value + '\n');
  // let symbolsArray = value.split('');
  // // /*отладка*/ console.log('\n --> symbolsArray = ' + symbolsArray + '\n');

  let metaKey = undefined;
  // symbolsArray.forEach(element => {
  for (let element of value) { // for (let element of symbolsArray)
    // /*отладка*/ console.log('\n --> symbolsArray.forEach(element) = ' + element + '\n');
    await driver.pause(700); // замедляем нажатия для приложания, ГитХаб и БраузерСтак
    metaKey = undefined;
    if(element == element.toUpperCase()) metaKey = 1;
    element = element.toLowerCase();
    
    switch (element) {
      // цифры
      case '0':
        driver.pressKeyCode(7, undefined, undefined);
        break;
      case '1':
        driver.pressKeyCode(8, undefined, undefined);
        break;
      case '2':
        driver.pressKeyCode(9, undefined, undefined);
        break;
      case '3':
        driver.pressKeyCode(10, undefined, undefined);
        break;
      case '4':
        driver.pressKeyCode(11, undefined, undefined);
        break;
      case '5':
        driver.pressKeyCode(12, undefined, undefined);
        break;
      case '6':
        driver.pressKeyCode(13, undefined, undefined);
        break;
      case '7':
        driver.pressKeyCode(14, undefined, undefined);
        break;
      case '8':
        driver.pressKeyCode(15, undefined, undefined);
        break;
      case '9':
        driver.pressKeyCode(16, undefined, undefined);
        break;

      case ' ':
        driver.pressKeyCode(62, undefined, undefined);
        break;

      case '+':
        driver.pressKeyCode(81, undefined, undefined);
        break;
      case '-':
        driver.pressKeyCode(69, undefined, undefined);
        break;
      case '*':
        driver.pressKeyCode(17, undefined, undefined);
        break;
      case '/':
        driver.pressKeyCode(76, undefined, undefined);
        break;
      case '=':
        driver.pressKeyCode(70, undefined, undefined);
        break;

      case ',':
        driver.pressKeyCode(55, undefined, undefined);
        break;
      case '.':
        driver.pressKeyCode(56, undefined, undefined);
        break;

      // буквы латинские
      case 'a':
        driver.pressKeyCode(29, metaKey, undefined);
        break;
      case 'b':
        driver.pressKeyCode(30, metaKey, undefined);
        break;
      case 'c':
        driver.pressKeyCode(31, metaKey, undefined);
        break;
      case 'd':
        driver.pressKeyCode(32, metaKey, undefined);
        break;
      case 'e':
        driver.pressKeyCode(33, metaKey, undefined);
        break;
      case 'f':
        driver.pressKeyCode(34, metaKey, undefined);
        break;
      case 'g':
        driver.pressKeyCode(35, metaKey, undefined);
        break;
      case 'h':
        driver.pressKeyCode(36, metaKey, undefined);
        break;
      case 'i':
        driver.pressKeyCode(37, metaKey, undefined);
        break;
      case 'j':
        driver.pressKeyCode(38, metaKey, undefined);
        break;
      case 'k':
        driver.pressKeyCode(39, metaKey, undefined);
        break;
      case 'l':
        driver.pressKeyCode(40, metaKey, undefined);
        break;
      case 'm':
        driver.pressKeyCode(41, metaKey, undefined);
        break;
      case 'n':
        driver.pressKeyCode(42, metaKey, undefined);
        break;
      case 'o':
        driver.pressKeyCode(43, metaKey, undefined);
        break;
      case 'p':
        driver.pressKeyCode(44, metaKey, undefined);
        break;
      case 'q':
        driver.pressKeyCode(45, metaKey, undefined);
        break;
      case 'r':
        driver.pressKeyCode(46, metaKey, undefined);
        break;
      case 's':
        driver.pressKeyCode(47, metaKey, undefined);
        break;
      case 't':
        driver.pressKeyCode(48, metaKey, undefined);
        break;
      case 'u':
        driver.pressKeyCode(49, metaKey, undefined);
        break;
      case 'v':
        driver.pressKeyCode(50, metaKey, undefined);
        break;
      case 'w':
        driver.pressKeyCode(51, metaKey, undefined);
        break;
      case 'x':
        driver.pressKeyCode(52, metaKey, undefined);
        break;
      case 'y':
        driver.pressKeyCode(53, metaKey, undefined);
        break;
      case 'z':
        driver.pressKeyCode(54, metaKey, undefined);
        break;


      

      
      // // буквы кириллицы Дополнительная
      // case 'Д':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // case 'о':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // case 'п':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // // case 'о':
      // //   driver.pressKeyCode(шш, undefined, undefined);
      // //   break;
      // case 'л':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // case 'н':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // case 'и':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // case 'т':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // case 'е':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // case 'ь':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // // case 'н':
      // //   driver.pressKeyCode(шш, undefined, undefined);
      // //   break;
      // case 'а':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;
      // case 'я':
      //   driver.pressKeyCode(шш, undefined, undefined);
      //   break;




      default:
        console.log('\n --> в keyboardTypeIn нет элемента: ' + element + '\n');
        break;
    }
  }//);
}



/* EOF class */
}

module.exports = new DeviceUtilities();