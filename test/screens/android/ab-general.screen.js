const SPin  = require('../android/ab-pinCodeEnter.screen');       // screen > Pin code enter
const SHome = require('../android/ab-home.screen');               // screen > Home
const SSup  = require("../../screens/android/ab-support.screen"); // screen > Support

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


  
/* SELECTORS : есть в LogInM (наследуемый класс), но тут оттуда их не видно */
// экран Войти в ApexBank
get titleScreen_Welcome_En_LogInM(){ // added on 20231101
  return $('//android.widget.TextView[@text="Login to Apex Bank"]');}
get titleScreen_Welcome_Ru_LogInM(){ // added on 20231101
  return $('//android.widget.TextView[@text="Войти в ApexBank"]');}
get titleScreen_Welcome_Uz_LogInM(){ // added on 20231101
  return $('//android.widget.TextView[@text="Apex Bankga kirish"]');}

get button_Language_LogInM(){ // added on 20230704
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_language"]');}
get button_Support_LogInM(){ // added on 20231101
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_support"]')}

get input_PhoneNumber_LogInM(){ // added on 20230719
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input_phone"]')}
get button_PhoneNumberInputClear_LogInM(){ // added on 20230719
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/clear_text_image"]');}



/* FUNCTIONS */
async beforeEach(counter, typeOfTest) {
  // * Снимок экрана для контроля
  await driver.saveScreenshot('_view_shots/screen_before_' + typeOfTest + '-lastTest.png');

  // /*отладка*/ console.log('\n --> counter-beforeEach = ' + counter + '\n');
// * Пауза для контроля экрана
// await driver.pause(5000);

  // * Не выполнять этот код для первого теста
  // if (counter == 0) return;
  // /*отладка*/ console.log('\n --> counter-beforeEach-1 = ' + counter + '\n');

  // // * Открыть начальную страницу приложения
  // await driver.startActivity(this.text_AppPackage_En_Expected, this.text_AppActivity_En_Expected);

  // return counter;
}
async afterEach(counter, tcNum) {    
  // * Снимок экрана для контроля
  // await driver.saveScreenshot('app-screen_afterEach.png');
  // await driver.saveScreenshot('_view_shots/app-screen-1001p_afterEach_' + (counter + 1) + '.png');
  await driver.saveScreenshot('_view_shots/screen_after-1_' + tcNum + '.png');

  // * Вести счет числу выполненных тестов
  // counter++;
  // /*отладка*/ console.log('\n --> counter-afterEach = ' + counter + '\n');

  // * Открыть главный экран
  await this.returnToHomeScreen();

  // * Выйти из приложения
  // await this.logOutApp();

  // * Снимок экрана для контроля
  await driver.saveScreenshot('_view_shots/screen_after-2_' + tcNum + '.png');
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
async logOutApp(){ // appLogOut
  // * Закрыть клавиатуру
  if( await driver.isKeyboardShown() ) await driver.hideKeyboard();

  // * Выйти из приложения
    // /*отладка*/ let counter = 0;
  while (
    // !(await $('//*[@resource-id="com.fincube.apexbank.debug:id/languageButton"]').isDisplayed()) &&
    // !(await AuthM.languageButton.isDisplayed()) &&
    !(await this.button_Language_LogInM.isDisplayed()) &&
    !(await SHome.bottomNav_Home.isDisplayed())
    ) {
        // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutApp_0_afterCycle_' + (counter + 1) + '.png');
        // /*отладка*/ console.log('\n ---> counter = ' + counter + '\n');
        // /*отладка*/ await driver.pause(10000);
      await driver.back();
  }

  if(await this.button_PhoneNumberInputClear_LogInM.isDisplayed()) {
    await this.button_PhoneNumberInputClear_LogInM.click();
  }

  if(await SHome.bottomNav_Home.isDisplayed()) {
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutApp_1_beforeClick_' + 'bottomNav_Home' + '.png');
    await SHome.bottomNav_Home.click();
    await SHome.button_Profile.waitForDisplayed({timeout: this.number_WaitTime_Expected + 5000});
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutApp_2_afterClick_' + 'bottomNav_Home' + '.png');
    await SHome.button_Profile.click(); // profileButton
    await this.button_Logout.waitForDisplayed({timeout: this.number_WaitTime_Expected + 5000});
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutApp_3_afterClick_' + 'profileButton' + '.png');
    await this.button_Logout.click();
      // /*отладка*/ await driver.saveScreenshot('_view_shots/logOutApp_4_afterClick_' + 'logOut_Item' + '.png');
    await this.button_LogOutConfirm.waitForDisplayed({timeout: this.number_WaitTime_Expected + 5000});
    await this.button_LogOutConfirm.click();
  }
}

async goBackToSpecifiedLocation(specifiedLocation, clickElement) {
   // * Вернуться к указанному месту (предыдущему), нажимая кнопку устройства Назад.
  const isSpecifiedLocationVisible = async () => await specifiedLocation.isDisplayed();

  while (!await isSpecifiedLocationVisible()) {
    await SPin.handleEnterPinCodeScreen(clickElement);

    if (!await isSpecifiedLocationVisible()) {
      await driver.back();
    }
  }
  // *1 Открыто указанное место.
}
async returnToHomeScreen(){
  // * Проверяем, нужен ли возврат на главный экран.
  if (
    await this.button_Support_LogInM.isDisplayed() ||
    await SSup.titleWindow_CallBank.isDisplayed()
    ){
    while(
      !await this.titleScreen_Welcome_En_LogInM.isDisplayed() &
      !await this.titleScreen_Welcome_Ru_LogInM.isDisplayed() &
      !await this.titleScreen_Welcome_Uz_LogInM.isDisplayed() &
      !await SHome.button_Profile.isDisplayed()
    ){
      await driver.back();
    }
    return;
  }

  // * Закрыть клавиатуру.
  if(await driver.isKeyboardShown()) await driver.hideKeyboard();

  // /*отладка*/ console.log('\n --> button_Profile.isDisplayed-0 = ' + await SHome.button_Profile.isDisplayed() + '\n');
  // while (!await SHome.button_Profile.isDisplayed()){
  //   /*отладка*/ console.log('\n --> button_Profile.isDisplayed-1 = ' + await SHome.button_Profile.isDisplayed() + '\n');
  //   await driver.back();
  //   /*отладка*/ console.log('\n --> button_Profile.isDisplayed-2 = ' + await SHome.button_Profile.isDisplayed() + '\n');
  //   await driver.pause(5000);
  // }

  // /*отладка*/ let i = 0;
  while(!await SHome.bottomNav_Home.isDisplayed()){
    // /*отладка*/ console.log('\n --> button_Profile.isDisplayed-1 = ' + await SHome.button_Profile.isDisplayed() + '\n');

    // /*отладка*/ console.log('\n --> titleScreen_EnterPinCode-1 = ' +
    //   await SPin.titleScreen_EnterPinCode.isDisplayed() + '\n');
    // await driver.pause(5000);
    // if (await SPin.titleScreen_EnterPinCode.isDisplayed()) {
    //   /*отладка*/ console.log('\n --> titleScreen_EnterPinCode-2 = ' + await SPin.titleScreen_EnterPinCode.isDisplayed() + '\n');
    //   await driver.pause(5000);
    //   await AppUM.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
    // }

    // if(await SPin.titleScreen_EnterPinCode.isDisplayed()){
    //   await UApp.appKeyboardTypeIn(SAuth.text_PinCode_Expected);
    // }

  // await SProf.identificationButton.waitForDisplayed({timeout: SGen.number_WaitTime_Expected});

    await driver.back();

    // await driver.pause(2000);
    // /*отладка*/ console.log(`\n --> button_Profile.isDisplayed-2-${i} = ${await SHome.button_Profile.isDisplayed()}\n`);
    // await driver.pause(5000);

    // * Проверяем, нужен ли возврат на главный экран
    if (
        await this.titleScreen_Welcome_En_LogInM.isDisplayed() ||
        await this.titleScreen_Welcome_Ru_LogInM.isDisplayed() ||
        await this.titleScreen_Welcome_Uz_LogInM.isDisplayed()
      ) return;
      
    // /*отладка*/ i++;
  }
  // /*отладка*/ console.log('\n --> i-1 = ' + i + '\n');
  await SHome.bottomNav_Home.click();
  await SHome.button_Profile.waitForDisplayed({timeout: this.number_WaitTime_Expected});
}



/* EOF class */
}

module.exports = new GeneralScreen();