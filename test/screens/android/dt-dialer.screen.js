class DialerScreen { // related to device tested

/* SELECTORS */
// get androidDialerphoneNumber(){ // for android v.11
//   return $('//*[@resource-id="com.android.dialer:id/empty_list_view_message"]');}
get input_PhoneNumber(){ // for android v.13
  return $('//*[@resource-id="com.google.android.dialer:id/digits"]');}
// get button_Call(){ // for android v.11
//     return $('//*[@resource-id="com.android.dialer:id/dialpad_floating_action_button"]');}
get button_Call(){ // for android v.13
  return $('//*[@resource-id="com.google.android.dialer:id/dialpad_voice_call_button"]');}
get input_Search(){
  return $('//*[@resource-id="com.android.dialer:id/search_view"]');}



/* EOF class */
}

module.exports = new DialerScreen();