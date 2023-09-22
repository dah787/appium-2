class SupportScreen {

/* CONSTANTS */
supportScreenHeaderRu_Expected = 'Поддержка';
supportOfficesLabelRu_Expected = 'Офисы и банкоматы';
supportAdditionalLinksLabelRu_Expected = 'Дополнительная связь';

supportCallWindowLabelRu_Expected = 'Позвонить в банк';


/* SELECTORS */
// экран Поддержка
get supportScreenHeader() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/title"]');}
get supportCallButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_call"]');}
  get supportCallWindowLabel() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_title"]');}
  get supportCallFirstContactButton() {
    return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_firstContact"]');}






get supportMessageButton() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvSupport_message"]');}
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
get supportAdditionalLinksButtons() {
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/additionalConnection_card"]').$$('android.widget.TextView');}



/* EOF class */
}

module.exports = new SupportScreen();