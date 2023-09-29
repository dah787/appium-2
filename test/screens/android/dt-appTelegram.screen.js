class AppTelegramScreen { // related to device tested

/* CONSTANTS */
supportChatScreenHeaderEn_Expected = 'Apexbank'; // 'Jaksibay Khakimov'



/* SELECTORS */
// get supportContactTelegramName() {
//   return $('//android.widget.TextView[@text="Apexbank"]');} // "Jaksibay Khakimov"



get supportChatScreenHeader() { // supportContactTelegramName
  return $('//android.widget.TextView[@text="Apexbank"]');} // "Jaksibay Khakimov"
get supportChatJoinButton() { // supportContactTelegramJoinButton
  return $('//android.view.View[@content-desc="ПРИСОЕДИНИТЬСЯ"]');}

get textInput() {
  return $('//android.widget.EditText');}
get textInputEn() { // supportContactTelegramMessageInput
  return $('//android.widget.EditText[@text="Message"]');}
get textInputRu() {
  return $('//android.widget.EditText[@text="Сообщение"]');}



/* EOF class */
}

module.exports = new AppTelegramScreen();