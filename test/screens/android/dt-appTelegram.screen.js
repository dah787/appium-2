class AppTelegramScreen { // related to device tested

/* SELECTORS */
get supportContactTelegramName() {
  return $('//android.widget.TextView[@text="Apexbank"]');} // "Jaksibay Khakimov"
get supportContactTelegramMessageInput() {
  return $('//android.widget.EditText[@text="Message"]');}



/* EOF class */
}

module.exports = new AppTelegramScreen();