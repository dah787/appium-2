class Scheme {

            /* CONSTANTS, SELECTORS */

название экрана     -   titleScreen_createPinCode_Ru_Expected = 'Создайте новый PIN-код';
название экрана     -   titleScreen_createPinCode_Ru

название экрана     -   titleScreen_Welcome_En_Expected = 'Login to Apex Bank';
название экрана     -   titleScreen_Welcome_En


название окна       -   titleWindow_supportContacts_Ru_Expected = 'Контакт со службой поддержки';
название окна       -   titleWindow_supportContacts_Ru
название окна       -   titleWindow_SupportContacts


название раздела    -   titleSection_totalBalance_Ru_Expected = 'Общий баланс';
название раздела    -   titleSection_totalBalance_Ru


текст               -   text_WebSite_En_Expected = 'WebSite';
текст               -   text_WebSite_En

текст               -   text_CountryCode_Expected = '+998';
текст               -   text_CountryCode

текст               -   text_AppPackage_En_Expected
текст               -   text_Facebook_En_Expected
текст               -   text_CardName


число               -   number_WaitTime_Expected = 5000;

картинка            -   image_UserIcon
картинка            -   image_pinCodeIcon_3
поле ввода          -   input_DocumentData
область ввода       -   area_DocumentData
область выделенная  -   frame_FaceScanner
переключатель       -   switch_UseFingerprint
чек-бокс            -   check_UseFingerprint
радио-кнопка        -   radio_UseFingerprint
кнопка              -   button_Scanner
кнопка              -   button_PhoneNumberInputClear
позиция списка      -   item_PersonalData

элемент класса      -   itemClass_TextView + _On + _titleScreen +_loginOrRegister
элемент класса      -   itemClass_TextView_titleWindow_Languages


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
ab-login.screen
ab-authorization.screen
ab-general.screen
ab-cards.screen
ab-cardsSelect.screen
ab-transferToCard.screen

/** https://medium.com/@stefanovskyi/unit-test-naming-conventions-dd9208eadbea
  
  MethodName_StateUnderTest_ExpectedBehavior
    cons: should be renamed if method change name
    example: isAdult_AgeLessThan18_False
 */

























            /* - */
число               -   anyName_Number                       + _Expected
текст               -   anyName_Text                   + _Ru + _Expected

название экрана     -   screenHeader_Text_xxxYyy    + _Ru + _Expected
название окна       -   windowTitle_Text_xxxYyy     + _Ru + _Expected
название раздела    -   sectionTitle_Text_xxxYyy    + _Ru + _Expected
название чего-то    -   ???Title_Text_xxxYyy        + _Ru + _Expected

кнопка              -   anyName_Button
позиция списка      -   anyName_Item
картинка            -   anyName_Image
поле ввода          -   anyName_Input
область выделенная  -   anyName_Frame
переключатель       -   anyName_Switch
группа элементов    -   screen_loginOrRegister_TextView_Items


            /* CONSTANTS */
число               -   waitTime_Number_Expected = 5000;

текст               -   webSite_Text_En_Expected = 'WebSite';
текст               -   text_webSite_En_Expected = 'WebSite';

текст               -   countryCode_Text_Expected = '+998';
текст               -   passportSeriesAndNumber...__Text..._Expected = 'AB1234567';

название экрана     -   screenHeader_Text_createPinCode_Ru_Expected = 'Создайте новый PIN-код';
название экрана     -   titleScreen_createPinCode_Ru_Expected = 'Создайте новый PIN-код';

// название окна       -   windowTitle_Text_supportContactsList_Ru_Expected = 'Контакт со службой поддержки';
название окна       -   windowTitle_Text_supportContacts_Ru_Expected = 'Контакт со службой поддержки';
название окна       -   titleWindow_supportContacts_Ru_Expected = 'Контакт со службой поддержки';

название раздела    -   sectionTitle_Text_totalBalance_Ru_Expected = 'Общий баланс';
название раздела    -   titleSection_totalBalance_Ru_Expected = 'Общий баланс';


            /* SELECTORS */
число               -   waitTime_Number
текст               -   webSite_Text_En
текст               -   countryCode_Text
текст               -   userName_Text

название экрана     -   screenHeader_Text_createPinCode_Ru
название окна       -   windowTitle_Text_supportContacts
название раздела    -   sectionTitle_Text_totalBalance_Ru

кнопка              -   scanner_Button
позиция списка      -   personalData_Item

картинка            -   userIcon_Image
поле ввода          -   documentData_Input
область выделенная  -   faceScanner_Frame
переключатель       -   useFingerprint_Switch

группа элементов    -   screen_loginOrRegister_TextView_Items
группа элементов    -   items_TextView_On_titleScreen_loginOrRegister

/* EOF class */
}