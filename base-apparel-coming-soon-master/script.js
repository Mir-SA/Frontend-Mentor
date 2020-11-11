var form = document.getElementById("form");
var email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var emailVal = email.value;

  // check if it is a valid email or not

  //   !valid(emailVal)
  //     ? form.classList.add("error")
  //     : form.classList.remove("error");

  //   var timeOut = () => {
  //     setTimeout(form.classList.remove("error"), 3000);
  //   };

  if (!valid(emailVal)) {
    form.classList.add("error");
    var timeOut = () => {
      form.classList.remove("error");
    };
    var time = () => {
      setTimeout(timeOut, 3000);
    };
    time();
  }
});

var valid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
