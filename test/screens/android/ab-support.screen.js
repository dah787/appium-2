class SupportScreen {

/* CONSTANTS */
supportScreenHeaderRu_Expected = 'Поддержка';
supportOfficesLabelRu_Expected = 'Офисы и банкоматы';
supportAdditionalLinksLabelRu_Expected = 'Дополнительная связь';

supportWindowLabelCallRu_Expected = 'Позвонить в банк';
supportWindowLabelMessageRu_Expected = 'Написать в банк';

// supportChatScreenHeaderEn_Expected = 'Apexbank';

elementAttributeKey = 'resource-id';
elementAttributeValue_Part = 'com.fincube.apexbank.debug:id/tvSupport_';



/* SELECTORS */
// экран Поддержка
get supportScreenHeader() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/title"]');}
get supportCallButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_call"]');}

  // экран Поддержка > окно Позовнить/Написать в банк
  get supportWindowLabel() { // supportCallWindowLabel, supportMessageWindowLabel
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get supportContactsList() { // supportCallContactsList, supportMessageContactsList
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/design_bottom_sheet"]').$$('android.widget.TextView');}

  // экран Поддержка > окно Позовнить в банк
  get supportCallFirstContactButton() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_firstContact"]');}

get supportMessageButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_message"]');}
  // экран Поддержка > окно Написать в банк
    // экран Поддержка > окно Написать в банк > экран мессенджера (напр., Телеграм)
    // get supportChatScreenHeader() {
    //   return $('//android.widget.TextView[@text="Apexbank"]');}

get supportFaqButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_faq"]');}

get supportOfficesLabel() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_label_locationOfOffices"]');}
get supportViewOnMapButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_viewFromMap"]');}

get supportAdditionalLinksLabel() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_label_additionalConnection"]');}
get supportAdditionalLinkTelegramButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_channelInTg"]');}
get supportAdditionalLinkLinkedInButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInLinkedIn"]');}
get supportAdditionalLinkLinkedInButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInLinkedIn"]');}
get supportAdditionalLinkInstagramButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInInstagram"]');}
get supportAdditionalLinkFacebookButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_groupInFacebook"]');}
get supportAdditionalLinkWebSiteButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_oficialWebSite"]');}
get supportAdditionalLinksList() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/additionalConnection_card"]').$$('android.widget.TextView');}



/* EOF class */
}

module.exports = new SupportScreen();