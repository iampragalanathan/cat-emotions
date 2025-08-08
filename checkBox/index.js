const continueBtn = document.getElementById("continue-btn");
const acceptTerms=document.getElementById("accept-terms")
const mailList=document.getElementById("mail-list")

continueBtn.addEventListener("click", function () {
  if(acceptTerms.checked){
    console.log("terms accepted")
  }
  else{
    console.log("terms refused")
  }
   if(mailList.checked){
    console.log("MailList accepted")
  }
  else{
    console.log("MailList refused")
  }
});


// create another label in html with text "add me to your mailing list"
// create a new input with type checkbox connect the checkbox to label
// when the continueBtn clicked after selecting checkbox console log newsletter subscribed, if not selected and btn clicked print, newsletter not subscribed
