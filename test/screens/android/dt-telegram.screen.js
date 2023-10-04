class TelegramScreen { // related to device tested

/* CONSTANTS */
supportChatScreenHeaderEn_Expected = 'Apexbank'; // 'Jaksibay Khakimov'
supportChatScreenHeader_1En_Expected = 'APEX BANK';



/* SELECTORS */
// get supportContactTelegramName() {
//   return $('//android.widget.TextView[@text="Apexbank"]');} // "Jaksibay Khakimov"



get supportChatScreenHeader() { // supportContactTelegramName
  return $('//android.widget.TextView[@text="Apexbank"]');} // "Jaksibay Khakimov"
get supportChatScreenHeader_1() {
  return $('//android.widget.TextView[@text="APEX BANK"]');}
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

module.exports = new TelegramScreen();