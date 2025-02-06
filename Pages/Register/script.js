import Header from "../../Components/Header.js";

class UserStorage {
  constructor(email, name, lastName, password, birthDate) {
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.password = password;
    this.birthDate = birthDate;
    this.favourites = [];
  }

  save() {
    localStorage.setItem(this.email, JSON.stringify(this));
  }
}

var header = new Header();
header.render();

document.getElementById("register-form").addEventListener("submit", (e) => {
  e.preventDefault();
  
  const existingPasswordError = document.getElementById("passwordErrorMessage");
  if (existingPasswordError) {
    existingPasswordError.remove();
  }

  const existingNameErrMsg = document.getElementById("nameErrMsg");
  if (existingNameErrMsg) {
    existingNameErrMsg.remove();
  }

  const existingbirthErrMsg = document.getElementById("birthErrMsg");
  if (existingbirthErrMsg ) {
    existingbirthErrMsg .remove();
  }

  const existingEmailError = document.getElementById("emailErrMsg");
  if (existingEmailError) {
    existingEmailError.remove();
  }


  const email = e.target.elements.email.value;
  const name = e.target.elements.userName.value;
  const lastName = e.target.elements.userLastName.value;
  const birthDate = e.target.elements.birthdate.value;
  const password = e.target.elements.password.value;
  const confirmPassword = e.target.elements.confirmPassword.value;

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  const regexName = /^[A-Za-z]{2,}$/;


  if (!name) {
    const nameErrMsg = document.createElement("p");
    nameErrMsg.textContent = "Name can't be empty";
    nameErrMsg.id = "nameErrMsg";
    nameErrMsg.style.color = "red";
    nameErrMsg.style.fontSize = "12px";
    const nameDiv = document.getElementsByClassName("userName")[0];
    nameDiv.appendChild(nameErrMsg);
    return;
  } else if (!regexName.test(name)){
    const nameErrMsg = document.createElement("p");
    nameErrMsg.textContent = "Type a valid name";
    nameErrMsg.id = "nameErrMsg";
    nameErrMsg.style.color = "red";
    nameErrMsg.style.fontSize = "12px";
    const nameDiv = document.getElementsByClassName("userName")[0];
    nameDiv.appendChild(nameErrMsg);
    return;
  } else if (!lastName) {
    const nameErrMsg = document.createElement("p");
    nameErrMsg.textContent = "Last name can't be empty";
    nameErrMsg.id = "nameErrMsg";
    nameErrMsg.style.color = "red";
    nameErrMsg.style.fontSize = "12px";
    const lastNameDiv = document.getElementsByClassName("userLastName")[0];
    lastNameDiv.appendChild(nameErrMsg);
    return;
  } else if (!regexName.test(lastName)){
    const nameErrMsg = document.createElement("p");
    nameErrMsg.textContent = "Type a valid last name";
    nameErrMsg.id = "nameErrMsg";
    nameErrMsg.style.color = "red";
    nameErrMsg.style.fontSize = "12px";
    const lastNameDiv = document.getElementsByClassName("userLastName")[0];
    lastNameDiv.appendChild(nameErrMsg);
    return;
  } else if (!birthDate) {
    const birthErrMsg = document.createElement("p");
    birthErrMsg.textContent = "Birth date can't be empty";
    birthErrMsg.id = "birthErrMsg";
    birthErrMsg.style.color = "red";
    birthErrMsg.style.fontSize = "12px";
    const birthDateDiv = document.getElementsByClassName("birthDate")[0];
    birthDateDiv.appendChild(birthErrMsg);
    return;
  } 
  else if (localStorage.getItem(email) || !email) {
    const emailErrMsg = document.createElement("p");
    emailErrMsg.textContent = localStorage.getItem(email) ? "Email address already registered" : "";
    emailErrMsg.id = "emailErrMsg";
    emailErrMsg.style.color = "red";
    emailErrMsg.style.fontSize = "12px";
    const emailDiv = document.getElementsByClassName("email")[0];
    emailDiv.appendChild(emailErrMsg);
    return;
  } else if (!regexEmail.test(email)) {
    const emailErrMsg = document.createElement("p");
    emailErrMsg.textContent = "Type a valid email address";
    emailErrMsg.id = "emailErrMsg";
    emailErrMsg.style.color = "red";
    emailErrMsg.style.fontSize = "12px";
    const emailDiv = document.getElementsByClassName("email")[0];
    emailDiv.appendChild(emailErrMsg);
    return;
  } else if (!regexPassword.test(password)) {
    const pswdErrMsg = document.createElement("p");
    pswdErrMsg.textContent = "Password must have at least 8 characters and 1 number";
    pswdErrMsg.id = "passwordErrorMessage";
    pswdErrMsg.style.color = "red";
    pswdErrMsg.style.fontSize = "12px";
    const confirmPasswordDiv =
      document.getElementsByClassName("password")[0];
    confirmPasswordDiv.appendChild(pswdErrMsg);
    return;
  } else if (password !== confirmPassword) {
    const pswdErrMsg = document.createElement("p");
    pswdErrMsg.textContent = "Passwords must match";
    pswdErrMsg.id = "passwordErrorMessage";
    pswdErrMsg.style.color = "red";
    pswdErrMsg.style.fontSize = "12px";
    const confirmPasswordDiv =
      document.getElementsByClassName("confirmPassword")[0];
    confirmPasswordDiv.appendChild(pswdErrMsg);
    return;
  } 
  else {
    let storage = new UserStorage(email, name, lastName, password, birthDate);
    storage.save();
    window.location.href = "./login.html";
    return;
  }
});
