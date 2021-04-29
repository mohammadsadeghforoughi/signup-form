let myFormElement = document.getElementById("my-form");

myFormElement.onsubmit = async (e) => {
  e.preventDefault();
  let formdata = new FormData(myFormElement);

  if (formdata.get("password") != formdata.get("password_verify")) {
      showError('passwords are not same')
  }
  else{
    clearError()
  }

  if(formdata.get("name").length<=3){
    showError('enter name more than 3 characters')
  }
  else{
    clearError()

  }
};

function showError(errorMessage) {
  document.getElementById("error-message").innerHTML = errorMessage;
}
function clearError() {
  document.getElementById("error-message").innerHTML = "";
}
