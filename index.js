let pagerDisplay = document.getElementById("pager-display")
let phoneDisplay = document.getElementById("phone-display")
let resetButton = document.getElementById("reset-button")
let sendButton = document.getElementById("send-button")
let buttons = document.querySelectorAll("button")

buttons.forEach(button => {
  button.addEventListener("click", function () {
    phoneDisplay.textContent += button.value;
  })
})

resetButton.addEventListener("click", function(){
    phoneDisplay.innerHTML = ""
    pagerDisplay.innerHTML = ""
})

sendButton.addEventListener("click", function(){
    sendButton.textContent = "Sending...";
    setTimeout(() => {
  pagerDisplay.innerHTML = phoneDisplay.innerHTML;
  sendButton.textContent = "SEND"
}, 1000);
})
