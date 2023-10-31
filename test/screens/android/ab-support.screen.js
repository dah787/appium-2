class SupportScreen {

/* CONSTANTS */
text_ElementAttributeKey_En_Expected = 'resource-id';
text_ElementAttributeValue_Part_En_Expected = 'com.fincube.apexbank.debug:id/tvSupport_';
// text_ElementAttributeValue_SupportFaq_En_Expected = 'com.fincube.apexbank.debug:id/tvFaq_title';
text_ElementAttributeValue_SupportFaq_En_Expected = 'com.fincube.apexbank.debug:id/card_layout';

titleScreen_Support_Ru_Expected = 'Поддержка';
titleSection_Offices_Ru_Expected = 'Офисы и банкоматы';

titleScreen_OurOffices_Ru_Expected = 'Наши офисы';
titleSection_AdditionalLinks_Ru_Expected = 'Дополнительная связь';

titleWindow_CallBank_Ru_Expected = 'Всегда рады вам помочь!'; //'Позвонить в банк'
titleWindow_WriteToBank_Ru_Expected = 'Написать в банк';

titleScreen_Faq_Ru_Expected = 'Часто задаваемые вопросы';



/* SELECTORS */
// экран Поддержка
get titleScreen_Support(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/title"]');}
get item_CallBank(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_call"]');}

  // экран Поддержка > окно Позвонить/Написать в банк
  get titleWindow_CallBank(){ // supportCallWindowLabel, supportMessageWindowLabel
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get items_titleWindow_CallBank(){ // supportCallContactsList, supportMessageContactsList
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/design_bottom_sheet"]').$$('android.widget.TextView');}

  // экран Поддержка > окно Позвонить в банк
  get item_titleWindow_CallBank_FirstContact(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_firstContact"]');}

get item_WriteToBank(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_message"]');}

get item_Faq(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_faq"]');}
  // экран Поддержка > экран Часто задаваемые вопросы
  get titleScreen_Faq(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get items_titleScreen_Faq(){
    // return $('//*[@resource-id="com.fincube.apexbank.debug:id/rvFaq"]').$$('android.widget.TextView');}
    // return $('//*[@resource-id="com.fincube.apexbank.debug:id/rvFaq"]').$$('androidx.cardview.widget.CardView');}
    // return $('//*[@resource-id="com.fincube.apexbank.debug:id/rvFaq"]').$$('android.view.ViewGroup');}
    // return $$('android.widget.TextView');}
    return $$('androidx.cardview.widget.CardView');}
    // экран Поддержка > экран Часто задаваемые вопросы - Ответ открыт
    get item_FaqReply(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_description"]');}

get titleSection_Offices(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_label_locationOfOffices"]');}
get item_ViewOnMap(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_viewFromMap"]');}
  // экран Поддержка > экран Наши офисы
  get titleScreen_OurOffices(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get button_WriteToBank(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/ll_end_actions"]');}

get titleSection_AdditionalLinks(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_label_additionalConnection"]');}
get item_Telegram(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_channelInTg"]');}
get item_LinkedIn(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInLinkedIn"]');}
get item_Instagram(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInInstagram"]');}
get item_Facebook(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInFacebook"]');}
get item_Website(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_oficialWebSite"]');}
get items_titleSection_AdditionalLinks(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/additionalConnection_card"]').$$('android.widget.TextView');}



/* EOF class */
}

module.exports = new SupportScreen();