
document.getElementById("save-btn")
  .addEventListener("click", function (event) {
  send();
});



window.addEventListener("ng-msg", (event) => {
  console.log('CurstomHtml : Message Recieved :  ' ,event.detail);

  const nameInput
    = document.getElementById('name');
  const mobileInput
    = document.getElementById('mobile');
  nameInput.value = event.detail.data.name;
  mobileInput.value = event.detail.data.mobile;
})


function send() {
  console.log('Send')
  const event = new CustomEvent("c-msg", {
    detail:{msg:'Script message'}
  });
  window.dispatchEvent(event);
}

