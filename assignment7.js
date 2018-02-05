function editNodeText(regex, input, helpId, helpMessage)
 
{
  // See if the info matches the regex that was defined
  // If the wrong information was entered, warn them
  if (!regex.test(input)) {
 
    if (helpId != null)
      // We need to show a warning
      // Remove any warnings that may exist
      while (helpId.childNodes[0]){
        helpId.removeChild(helpId.childNodes[0]);
      }
 
      // Add new warning
      helpId.appendChild(document.createTextNode(helpMessage));
 
    } else {
 
      // If the right information was entered, clear the help message
      if (helpId != null){
 
        // Remove any warnings that may exist
        while (helpId.childNodes[0]){
          helpId.removeChild(helpId.childNodes[0]);
        }
 
      }
 
    }
}

function isTheFieldEmpty(inputField, helpId) {
 
  // See if the input value contains any text
  return editNodeText(/^[A-Za-z0-9._-]{8,30}$/, inputField.value, helpId, "Should be greater than 8 characters");
}
function isThepassword(inputField, helpId) {
 
  // See if the input value contains any text
  return editNodeText(/^[A-Za-z0-9]{8,30}$/, inputField.value, helpId, "Should be greater than 8 characters");
}
function isTheconfirmpassword() {
 
  // See if the input value contains any text
  
      if (document.getElementById('name_password').value == document.getElementById('name_confirm').value){

      }else{
         document.getElementById('confirm').innerHTML = "Password and Password Confirmation do not matches";
         document.getElementById('confirm').style.color = "red";
      }
};

document.getElementById('name').style.color = "red";
document.getElementById('password').style.color = "red";
document.getElementById('email').style.color = "red";

function isTheemail(inputField, helpId) {
 
  return editNodeText(/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, inputField.value, helpId, "Enter an Email (Ex. example@domain.com)");
 
}