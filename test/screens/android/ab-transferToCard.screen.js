class TransferToCardScreen {

/* CONSTANTS */
titleScreen_TransferToCard_Ru_Expected = 'Перевод на карту';
titleWindow_ReceiverSelectBank_Ru_Expected = 'Выберите банк';



/* SELECTORS */
// экран Перевод на карту
get titleScreen_TransferToCard_Ru(){
  return $('//android.widget.TextView[@text="Перевод на карту"]');}

get button_OpenSenderCardsList(){//далее - ?
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/select_bank_card_layout"]');}
get text_SenderCardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_number"]');}
get text_SenderCardBalance(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/selection_card_balance"]');}

get button_OpenReceiverBanksList(){//далее - titleWindow_ReceiverSelectBank
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/banksRecyclerView"]');}
get text_ReceiverCardNumber(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/to_card_number"]');}

get input_TransferAmount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/input"]');}
get text_TransferCommission(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_help"]');}
get text_TransferTotalAmount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTotal_transferCard"]');}

get button_Continue(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/buttonContinue_transferCard"]');}

// экран Перевод на карту > окно Выберите банк
get titleWindow_ReceiverSelectBank(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTitle"]');}
get button_OpenReceiverCardsList(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/banksRecyclerView"]');}

// экран Перевод на карту > окно Выберите банк > окно Выберите банк (должно быть ...карту)
get titleWindow_ReceiverSelectCard(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tvTitle"]');}
get check_ReceiverCard(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/iv_check"]');}
get itemClass_TextView_titleWindow_ReceiverSelectCard(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/bankCardsRecyclerView"]').$$('android.widget.TextView');}

// ??? экран Перевод > экран (б/и) чека перевода на карту
get amount(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/tv_amount"]');}
get homeButton(){
  return $('//*[@resource-id="com.fincube.apexbank.debug:id/btn_back_to_home"]');}



/* EOF class */
}

module.exports = new TransferToCardScreen();