class ChromeScreen { // related to device tested

/* CONSTANTS */
url_Apexbank_Expected = 'apexbank.uz';
url_Facebook_Expected = 'facebook.com';
url_Instagram_Expected = 'instagram.com';
url_LinkedIn_Expected = 'linkedin.com';



// экран браузера
get urlBar_browser(){
  return $('//*[@resource-id="com.android.chrome:id/url_bar"]');}



/* EOF class */
}

module.exports = new ChromeScreen();