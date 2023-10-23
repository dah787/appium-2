class TelegramScreen { // related to device tested

/* CONSTANTS */
titleScreen_ApexbankChat_En_Expected = 'Apexbank'; // 'Jaksibay Khakimov'
titleScreen_ApexbankChat_En_Expected_1 = 'APEX BANK';



/* SELECTORS */
// get supportContactTelegramName(){
//   return $('//android.widget.TextView[@text="Apexbank"]');} // "Jaksibay Khakimov"



get titleScreen_ApexbankChat_En(){ // supportContactTelegramName
  return $('//android.widget.TextView[@text="Apexbank"]');} // "Jaksibay Khakimov"
get titleScreen_ApexbankChat_En_1(){
  return $('//android.widget.TextView[@text="APEX BANK"]');}
get button_JoinApexbankChat_Ru(){ // supportContactTelegramJoinButton
  return $('//android.view.View[@content-desc="ПРИСОЕДИНИТЬСЯ"]');}

get input_ChaMessage(){
  return $('//android.widget.EditText');}
get input_ChaMessage_En(){ // supportContactTelegramMessageInput
  return $('//android.widget.EditText[@text="Message"]');}
get input_ChaMessage_Ru(){
  return $('//android.widget.EditText[@text="Сообщение"]');}



/* EOF class */
}

module.exports = new TelegramScreen();