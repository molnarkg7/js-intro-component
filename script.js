const formControl = document.getElementById("formControl");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const password = document.getElementById("password");

formControl.addEventListener("submit", (e) => {
  e.preventDefault();

  let fname = firstName.value.trim();
  let lname = lastName.value.trim();
  let valueEmail = email.value.trim();
  let valuePassword = password.value.trim();
  let validEmail =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  let span = document.getElementById("first-name-span");
  if (fname === "") {
    errFunction(firstName, "First Name cannot be empty", span);
  } else {
    succFunction(firstName, span);
  }
  span = document.getElementById("last-name-span");
  if (lname === "") {
    errFunction(lastName, "Last Name cannot be empty", span);
  } else {
    succFunction(lastName, span);
  }

  span = document.getElementById("email-span");
  if (valueEmail === "") {
    errFunction(email, "Email cannot be empty", span);
  } else if (!valueEmail.match(validEmail)) {
    errFunction(email, "Looks like this is not an email", span);
  } else {
    succFunction(email, span);
  }

  span = document.getElementById("password-span");
  if (valuePassword === "") {
    errFunction(password, "Password cannot be empty", span);
  } else {
    succFunction(password, span);
  }
});

function errFunction(req, mess, span) {
  span.innerText = mess;
  req.className += "err";
  span.className += "text-err";
}

function succFunction(req, span) {
  span.innerText = " ";
  req.style.border = "2px solid hsl(154, 59%, 51%)";
}
