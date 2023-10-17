class ChromeScreen { // related to device tested

/* CONSTANTS */
urlApexbank_Expected = 'apexbank.uz';
urlFacebook_Expected = 'facebook.com';
urlInstagram_Expected = 'instagram.com';
urlLinkedIn_Expected = 'linkedin.com';


// экран браузера
get browserUrlBar(){
  return $('//*[@resource-id="com.android.chrome:id/url_bar"]');}



/* EOF class */
}

module.exports = new ChromeScreen();