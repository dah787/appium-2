class SupportScreen {

/* CONSTANTS */
elementAttributeKey = 'resource-id';
elementAttributeValue_Part = 'com.fincube.apexbank.debug:id/tvSupport_';
// elementAttributeValue_supportFaq = 'com.fincube.apexbank.debug:id/tvFaq_title';
elementAttributeValue_supportFaq = 'com.fincube.apexbank.debug:id/card_layout';

supportScreenHeaderRu_Expected = 'Поддержка';
supportOfficesLabelRu_Expected = 'Офисы и банкоматы';
  supportOfficesScreenHeaderRu_Expected = 'Наши офисы';
supportAdditionalLinksLabelRu_Expected = 'Дополнительная связь';

supportWindowLabelCallRu_Expected = 'Позвонить в банк';
supportWindowLabelMessageRu_Expected = 'Написать в банк';

supportFaqScreenHeaderRu_Expected = 'Часто задаваемые вопросы';



/* SELECTORS */
// экран Поддержка
get supportScreenHeader(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/title"]');}
get supportCallButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_call"]');}

  // экран Поддержка > окно Позвонить/Написать в банк
  get supportWindowLabel(){ // supportCallWindowLabel, supportMessageWindowLabel
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get supportContactsList(){ // supportCallContactsList, supportMessageContactsList
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/design_bottom_sheet"]').$$('android.widget.TextView');}

  // экран Поддержка > окно Позвонить в банк
  get supportCallFirstContactButton(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_firstContact"]');}

get supportMessageButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_message"]');}

get supportFaqButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_faq"]');}
  // экран Поддержка > экран Часто задаваемые вопросы
  get supportFaqScreenHeader(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get supportFaqList(){
    // return $('//*[@resource-id="com.fincube.apexbank.debug:id/rvFaq"]').$$('android.widget.TextView');}
    // return $('//*[@resource-id="com.fincube.apexbank.debug:id/rvFaq"]').$$('androidx.cardview.widget.CardView');}
    // return $('//*[@resource-id="com.fincube.apexbank.debug:id/rvFaq"]').$$('android.view.ViewGroup');}
    // return $$('android.widget.TextView');}
    return $$('androidx.cardview.widget.CardView');}
    // экран Поддержка > экран Часто задаваемые вопросы - Ответ открыт
    get supportFaqReply(){
      return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_description"]');}

get supportOfficesLabel(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_label_locationOfOffices"]');}
get supportViewOnMapButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_viewFromMap"]');}
  // экран Поддержка > экран Наши офисы
  get supportOfficesScreenHeader(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get supportMessageButton_1(){
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/ll_end_actions"]');}

get supportAdditionalLinksLabel(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_label_additionalConnection"]');}
get supportAdditionalLinkTelegramButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_channelInTg"]');}
get supportAdditionalLinkLinkedInButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInLinkedIn"]');}
get supportAdditionalLinkInstagramButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInInstagram"]');}
get supportAdditionalLinkFacebookButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInFacebook"]');}
get supportAdditionalLinkWebSiteButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_oficialWebSite"]');}
get supportAdditionalLinksList(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/additionalConnection_card"]').$$('android.widget.TextView');}



/* EOF class */
}

module.exports = new SupportScreen();