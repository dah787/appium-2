class AppTelegramScreen { // related to device tested

/* SELECTORS */
get supportContactTelegramName() {
  return $('//android.widget.TextView[@text="Apexbank"]');} // "Jaksibay Khakimov"
get supportContactTelegramJoinButton() {
  return $('//android.view.View[@content-desc="ПРИСОЕДИНИТЬСЯ"]');}
get supportContactTelegramMessageInput() {
  return $('//android.widget.EditText[@text="Message"]');}



/* EOF class */
}

module.exports = new AppTelegramScreen();