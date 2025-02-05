import Header from "../../Components/Header.js";

class UserStorage {
  constructor(email, name, lastName, password) {
    this.email = email;
    this.name = name;
    this.lastName = lastName;
    this.password = password;
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
  console.log("submit");

  const email = e.target.elements.email.value;
  const name = e.target.elements.userName.value;
  const lastName = e.target.elements.userLastName.value;
  const password = e.target.elements.password.value;
  const confirmPassword = e.target.elements.confirmPassword.value;

  if (!name) {
    console.log("Name field can't be empty");
    return 0;
  } else if (!lastName) {
    console.log("Last name field can't be empty");
    return 0;
  } else if (localStorage.getItem(email) || !email) {
    const emailExistsErrMsg = document.createElement("p");
    emailExistsErrMsg.textContent = !email ? "Email can't be empty" : "Email already in use";
    emailExistsErrMsg.id = "emailExistsErrMsg";
    emailExistsErrMsg.style.color = "red";
    emailExistsErrMsg.style.fontSize = "12px";
    const emailDiv = document.getElementsByClassName("email")[0];
    emailDiv.appendChild(emailExistsErrMsg);
    return 0;
  } else if (!password || password !== confirmPassword) {
    const pswdMatchErrMsg = document.createElement("p");
    pswdMatchErrMsg.textContent = "Passwords must match";
    pswdMatchErrMsg.id = "passwordMatchErrorMessage";
    pswdMatchErrMsg.style.color = "red";
    pswdMatchErrMsg.style.fontSize = "12px";
    const confirmPasswordDiv =
      document.getElementsByClassName("confirmPassword")[0];
    confirmPasswordDiv.appendChild(pswdMatchErrMsg);
    return 0;
  } else {
    let storage = new UserStorage(email, name, lastName, password);
    storage.save();
    window.location.href("./login");
  }
});
