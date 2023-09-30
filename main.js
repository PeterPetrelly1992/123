const button = document.querySelector(".enter_message");
const text = document.querySelector(".input_message")

function sendMassege(event){
  event.preventDefault();
  const massage = text.value
  alert(massage)
}

button.addEventListener("submit", sendMassege)
