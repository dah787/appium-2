const SHome = require('./ab-home.screen');    // Home screen
const SProf = require('./ab-profile.screen'); // Profile screen

class GeneralScreen {

/* CONSTANTS */
appPackage = 'com.fincube.apexbank.debug';
appActivity = 'com.fincube.apexbank.presentation.ui.activity.MainActivity';

textApexbank = 'apexbank';
textFacebook = 'Facebook';
textInstagram = 'Instagram';
textLinkedIn = 'LinkedIn';
textWebSite = 'WebSite';

waitTime = 5000;



/* SELECTORS */
get screenHeader_Text(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
get back_Button(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/backButton"]');}
get logout_Button(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_logout"]');}
get logOutConfirm_Button(){ // appLogOutConfirmButton
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_confirm"]');}


  
/* SELECTORS : есть в Login screen Model (наследуемый класс), но logOutTheApp() оттуда их не видит */
get languageButton_1(){// added on 20230704
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]');}
get phoneNumberInput_1(){// added on 20230719
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input_phone"]')}
get phoneNumberInputClearButton_1(){// added on 20230719
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
  


/* FUNCTIONS */
async beforeEach(counter, typeOfTest) {
  // * Снимок экрана для контроля
  await driver.saveScreenshot('_view_shots/screen_before_' + typeOfTest + '-lastTest.png');

  // /*отладка*/ console.log('\n --> counter-beforeEach = ' + counter + '\n');
  // * Не выполнять этот код для первого теста
  if (counter == 0) return;
  
  // * Открыть начальную страницу приложения
  await driver.startActivity(this.appPackage, this.appActivity);
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
  // await driver.closeApp(GenM.appPackage); // Wrong parameters applied for closeApp
  // await driver.close_app(); // TypeError: driver.close_app is not a function
  await driver.terminateApp(this.appPackage);
  // https://appium.io/docs/en/2.0/guides/execute-methods/
  // await driver.executeScript('mobile: terminateApp', [{bundleId: GenM.appPackage}]); // Unknown mobile command "terminateApp".
  // await driver.executeScript('mobile: terminateApp', [{appId: GenM.appPackage}]); // Unknown mobile command "terminateApp".
}
async logOutTheApp(){ // appLogOut
  // * Закрыть клавиатуру
  if( await driver.isKeyboardShown() ) await driver.hideKeyboard();

  // * Выйти из приложения
    // /*отладка*/ let counter = 0;
  while (
    // !(await $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]').isDisplayed()) &&
    // !(await AuthM.languageButton.isDisplayed()) &&
    !(await this.languageButton_1.isDisplayed()) &&
    !(await SHome.bottomNavHome.isDisplayed())
    ) {
        // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_0_afterCycle_' + (counter + 1) + '.png');
        // /*отладка*/ console.log('\n ---> counter = ' + counter + '\n');
        // /*отладка*/ await driver.pause(10000);
      await driver.back();
  }

  if(await this.phoneNumberInputClearButton_1.isDisplayed()) {
    await this.phoneNumberInputClearButton_1.click();
  }

  if(await SHome.bottomNavHome.isDisplayed()) {
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_1_beforeClick_' + 'bottomNavHome' + '.png');
    await SHome.bottomNavHome.click();
    await SHome.profile_Button.waitForDisplayed({timeout: this.waitTime + 5000});
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_2_afterClick_' + 'bottomNavHome' + '.png');
    await SHome.profile_Button.click(); // profileButton
    await this.logout_Button.waitForDisplayed({timeout: this.waitTime + 5000});
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_3_afterClick_' + 'profileButton' + '.png');
    await this.logout_Button.click();
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_4_afterClick_' + 'logOut_Item' + '.png');
    await this.logOutConfirm_Button.waitForDisplayed({timeout: this.waitTime + 5000});
    await this.logOutConfirm_Button.click();
  }
}



/* EOF class */
}

module.exports = new GeneralScreen();