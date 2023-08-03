class AndroidDialerScreen { // related to device tested

/* SELECTORS */
// get androidDialerphoneNumber() { // for android v.11
//   return $('//*[@resource-id="com.android.dialer:id/empty_list_view_message"]');}
get androidDialerphoneNumber() { // for android v.13
  return $('//*[@resource-id="com.google.android.dialer:id/digits"]');}
// get androidDialerCallButton() { // for android v.11
//     return $('//*[@resource-id="com.android.dialer:id/dialpad_floating_action_button"]');}
get androidDialerCallButton() { // for android v.13
  return $('//*[@resource-id="com.google.android.dialer:id/dialpad_voice_call_button"]');}
get androidDialerSearchView() {
  return $('//*[@resource-id="com.android.dialer:id/search_view"]');}



/* EOF class */
}

module.exports = new AndroidDialerScreen();