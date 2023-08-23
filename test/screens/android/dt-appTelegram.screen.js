class AppTelegramScreen { // related to device tested

/* SELECTORS */
get supportContactTelegramName() {
  return $('//android.widget.TextView[@text="Apexbank"]');} // "Jaksibay Khakimov"
get supportContactTelegramJoinButton() {
  return $('//android.view.View[@text="ПРИСОЕДИНИТЬСЯ"]');}
get supportContactTelegramMessageInput() {
  return $('//android.widget.EditText[@text="Message"]');}



/* EOF class */
}

module.exports = new AppTelegramScreen();