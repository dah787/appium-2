const SHome = require('./ab-home.screen');    // Home screen
// const SProf = require('./ab-profile.screen'); // Profile screen

class GeneralScreen {

/* CONSTANTS */
text_AppPackage_En_Expected = 'com.fincube.apexbank.debug';
text_AppActivity_En_Expected = 'com.fincube.apexbank.presentation.ui.activity.MainActivity';

text_Apexbank_En_Expected = 'apexbank';
text_Facebook_En_Expected = 'Facebook';
text_Instagram_En_Expected = 'Instagram';
text_LinkedIn_En_Expected = 'LinkedIn';
text_Telegram_En_Expected = 'Tg';
text_WebSite_En_Expected = 'WebSite';

number_WaitTime_Expected = 5000;



/* SELECTORS */
get titleScreen(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get button_Back(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/backButton"]');}
get button_Logout(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_logout"]');}
get button_LogOutConfirm(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_confirm"]');}


  
/* SELECTORS : есть в Login screen Model (наследуемый класс), но logOutTheApp() оттуда их не видит */
get button_Language_1(){// added on 20230704
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]');}
get input_PhoneNumber_1(){// added on 20230719
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input_phone"]')}
get button_PhoneNumberInputClear_1(){// added on 20230719
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
  


/* FUNCTIONS */
async beforeEach(counter, typeOfTest) {
  // * Снимок экрана для контроля
  await driver.saveScreenshot('_view_shots/screen_before_' + typeOfTest + '-lastTest.png');

  // /*отладка*/ console.log('\n --> counter-beforeEach = ' + counter + '\n');
  // * Не выполнять этот код для первого теста
  if (counter == 0) return;
  
  // * Открыть начальную страницу приложения
  await driver.startActivity(this.text_AppPackage_En_Expected, this.text_AppActivity_En_Expected);
}
async afterEach(counter, tcNum) {    
  // * Снимок экрана для контроля
  // await driver.saveScreenshot('app-screen_afterEach.png');
  // await driver.saveScreenshot('_view_shots/app-screen-1001p_afterEach_' + (counter + 1) + '.png');
  await driver.saveScreenshot('_view_shots/screen_after_' + tcNum + '.png');

  // * Вести счет числу выполненных тестов
  counter++;
  // /*отладка*/ console.log('\n --> counter-afterEach = ' + counter + '\n');

  // * Выйти из приложения
  await this.logOutTheApp();
}
async after(){
  // * Закрыть приложение
  // await driver.closeApp(); // ошибок нет, но не закрывает
  // await driver.closeApp(GenM.text_AppPackage_En_Expected); // Wrong parameters applied for closeApp
  // await driver.close_app(); // TypeError: driver.close_app is not a function
  await driver.terminateApp(this.text_AppPackage_En_Expected);
  // https://appium.io/docs/en/2.0/guides/execute-methods/
  // await driver.executeScript('mobile: terminateApp', [{bundleId: GenM.text_AppPackage_En_Expected}]); // Unknown mobile command "terminateApp".
  // await driver.executeScript('mobile: terminateApp', [{appId: GenM.text_AppPackage_En_Expected}]); // Unknown mobile command "terminateApp".
}
async logOutTheApp(){ // appLogOut
  // * Закрыть клавиатуру
  if( await driver.isKeyboardShown() ) await driver.hideKeyboard();

  // * Выйти из приложения
    // /*отладка*/ let counter = 0;
  while (
    // !(await $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]').isDisplayed()) &&
    // !(await AuthM.languageButton.isDisplayed()) &&
    !(await this.button_Language_1.isDisplayed()) &&
    !(await SHome.bottomNav_Home.isDisplayed())
    ) {
        // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_0_afterCycle_' + (counter + 1) + '.png');
        // /*отладка*/ console.log('\n ---> counter = ' + counter + '\n');
        // /*отладка*/ await driver.pause(10000);
      await driver.back();
  }

  if(await this.button_PhoneNumberInputClear_1.isDisplayed()) {
    await this.button_PhoneNumberInputClear_1.click();
  }

  if(await SHome.bottomNav_Home.isDisplayed()) {
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_1_beforeClick_' + 'bottomNav_Home' + '.png');
    await SHome.bottomNav_Home.click();
    await SHome.button_Profile.waitForDisplayed({timeout: this.number_WaitTime_Expected + 5000});
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_2_afterClick_' + 'bottomNav_Home' + '.png');
    await SHome.button_Profile.click(); // profileButton
    await this.button_Logout.waitForDisplayed({timeout: this.number_WaitTime_Expected + 5000});
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_3_afterClick_' + 'profileButton' + '.png');
    await this.button_Logout.click();
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_4_afterClick_' + 'logOut_Item' + '.png');
    await this.button_LogOutConfirm.waitForDisplayed({timeout: this.number_WaitTime_Expected + 5000});
    await this.button_LogOutConfirm.click();
  }
}



/* EOF class */
}

module.exports = new GeneralScreen();