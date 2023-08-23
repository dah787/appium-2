const HomeM   = require('./ab-home.screen');          // Home screen Model
const HProfM  = require('./ab-home-profile.screen');  // Home-Profile screen Model

class GeneralScreen {

/* CONSTANTS */
appPackage = 'com.fincube.apexbank.debug';
appActivity = 'com.fincube.apexbank.presentation.ui.activity.MainActivity';
waitTime = 5000;



/* SELECTORS : есть в Login screen Model (наследуемый класс), но logOutTheApp() оттуда их не видит */
get languageButton_1() { // added on 20230704
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]');}
get phoneNumberInput_1() { // added on 20230719
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input_phone"]')}
get phoneNumberInputClearButton_1() { // added on 20230719
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}
  


/* FUNCTIONS */
async beforeEach(counter, typeOfTest) {
  // * Снимок экрана для контроля
  await driver.saveScreenshot('_view_shots/screen_before_' + typeOfTest + '-lastTest.png');
  
  // /*отладка*/ console.log('\n --> counter = ' + counter + '\n');
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
  
  // * Выйти из приложения
  await this.logOutTheApp();
}
async after() {
  // * Закрыть приложение
  // await driver.closeApp(); // ошибок нет, но не закрывает
  // await driver.closeApp(GenM.appPackage); // Wrong parameters applied for closeApp
  // await driver.close_app(); // TypeError: driver.close_app is not a function
  await driver.terminateApp(this.appPackage);
  // https://appium.io/docs/en/2.0/guides/execute-methods/
  // await driver.executeScript('mobile: terminateApp', [{bundleId: GenM.appPackage}]); // Unknown mobile command "terminateApp".
  // await driver.executeScript('mobile: terminateApp', [{appId: GenM.appPackage}]); // Unknown mobile command "terminateApp".
}

async logOutTheApp() { // appLogOut
  // * Закрыть клавиатуру
  if( await driver.isKeyboardShown() ) await driver.hideKeyboard();

  // * Выйти из приложения
    // /*отладка*/ let counter = 0;
  while (
    // !(await $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]').isDisplayed()) &&
    // !(await AuthM.languageButton.isDisplayed()) &&
    !(await this.languageButton_1.isDisplayed()) &&
    !(await HomeM.navBarHomeTab.isDisplayed())
    ) {
        // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_0_afterCycle_' + (counter + 1) + '.png');
        // /*отладка*/ console.log('\n ---> counter = ' + counter + '\n');
        // /*отладка*/ await driver.pause(10000);
      await driver.back();
  }

  if(await this.phoneNumberInputClearButton_1.isDisplayed()) {
    await this.phoneNumberInputClearButton_1.click();
  }

  if(await HomeM.navBarHomeTab.isDisplayed()) {
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_1_beforeClick_' + 'navBarHomeTab' + '.png');
    await HomeM.navBarHomeTab.click();
    await HomeM.profileLayout.waitForDisplayed({timeout: this.waitTime + 5000});
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_2_afterClick_' + 'navBarHomeTab' + '.png');
    await HomeM.profileLayout.click(); // profileButton
    await HProfM.appLogOutItem.waitForDisplayed({timeout: this.waitTime + 5000});
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_3_afterClick_' + 'profileButton' + '.png');
    await HProfM.appLogOutItem.click();
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutTheApp_4_afterClick_' + 'appLogOutItem' + '.png');
    await HProfM.appLogOutConfirmButton.waitForDisplayed({timeout: this.waitTime + 5000});
    await HProfM.appLogOutConfirmButton.click();
  }
}



/* EOF class */
}

module.exports = new GeneralScreen();