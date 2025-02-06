import Header from "../../Components/Header.js";

const sessionData = JSON.parse(sessionStorage.getItem("email"));
const userData = sessionData
  ? JSON.parse(localStorage.getItem(sessionData.email))
  : "";

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  var header = new Header(userData);
  header.render();

  let updateInfoForm = document.getElementById("register-form");

  let name = document.getElementById("userName");
  name.value = userData.name;

  let lastName = document.getElementById("userLastName");
  lastName.value = userData.lastName;

  let birthDate = document.getElementById("birthdate");
  birthDate.value = new Date(userData.birthDate).toISOString().split("T")[0];

  console.log(birthDate.value)

  let email = document.getElementById("email");
  email.value = userData.email;

  let password = document.getElementById("password");
  password.value = userData.password;

  let confirmPassword = document.getElementById("confirmPassword");
  confirmPassword.value = userData.password;

  const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/;
  const regexName = /^[A-Za-z]{2,}$/;

  updateInfoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const existingPasswordError = document.getElementById(
      "passwordErrorMessage"
    );
    if (existingPasswordError) {
      existingPasswordError.remove();
    }

    const existingNameErrMsg = document.getElementById("nameErrMsg");
    if (existingNameErrMsg) {
      existingNameErrMsg.remove();
    }

    const existingbirthErrMsg = document.getElementById("birthErrMsg");
    if (existingbirthErrMsg) {
      existingbirthErrMsg.remove();
    }

    if (!name.value) {
      const nameErrMsg = document.createElement("p");
      nameErrMsg.textContent = "Name can't be empty";
      nameErrMsg.id = "nameErrMsg";
      nameErrMsg.style.color = "red";
      nameErrMsg.style.fontSize = "12px";
      const nameDiv = document.getElementsByClassName("userName")[0];
      nameDiv.appendChild(nameErrMsg);
      return;
    } else if (!regexName.test(name.value)) {
      const nameErrMsg = document.createElement("p");
      nameErrMsg.textContent = "Type a valid name";
      nameErrMsg.id = "nameErrMsg";
      nameErrMsg.style.color = "red";
      nameErrMsg.style.fontSize = "12px";
      const nameDiv = document.getElementsByClassName("userName")[0];
      nameDiv.appendChild(nameErrMsg);
      return;
    } else if (!lastName.value) {
      const nameErrMsg = document.createElement("p");
      nameErrMsg.textContent = "Last name can't be empty";
      nameErrMsg.id = "nameErrMsg";
      nameErrMsg.style.color = "red";
      nameErrMsg.style.fontSize = "12px";
      const lastNameDiv = document.getElementsByClassName("userLastName")[0];
      lastNameDiv.appendChild(nameErrMsg);
      return;
    } else if (!regexName.test(lastName.value)) {
      const nameErrMsg = document.createElement("p");
      nameErrMsg.textContent = "Type a valid last name";
      nameErrMsg.id = "nameErrMsg";
      nameErrMsg.style.color = "red";
      nameErrMsg.style.fontSize = "12px";
      const lastNameDiv = document.getElementsByClassName("userLastName")[0];
      lastNameDiv.appendChild(nameErrMsg);
      return;
    } else if (!birthDate.valueOf) {
      const birthErrMsg = document.createElement("p");
      birthErrMsg.textContent = "Birth date can't be empty";
      birthErrMsg.id = "birthErrMsg";
      birthErrMsg.style.color = "red";
      birthErrMsg.style.fontSize = "12px";
      const birthDateDiv = document.getElementsByClassName("birthDate")[0];
      birthDateDiv.appendChild(birthErrMsg);
      return;
    } else if (!regexPassword.test(password.value)) {
      const pswdErrMsg = document.createElement("p");
      pswdErrMsg.textContent =
        "Password must have at least 8 characters and 1 number";
      pswdErrMsg.id = "passwordErrorMessage";
      pswdErrMsg.style.color = "red";
      pswdErrMsg.style.fontSize = "12px";
      const confirmPasswordDiv = document.getElementsByClassName("password")[0];
      confirmPasswordDiv.appendChild(pswdErrMsg);
      return;
    } else if (password.value !== confirmPassword.value) {
      const pswdErrMsg = document.createElement("p");
      pswdErrMsg.textContent = "Passwords must match";
      pswdErrMsg.id = "passwordErrorMessage";
      pswdErrMsg.style.color = "red";
      pswdErrMsg.style.fontSize = "12px";
      const confirmPasswordDiv =
        document.getElementsByClassName("confirmPassword")[0];
      confirmPasswordDiv.appendChild(pswdErrMsg);
      return;
    } else {
      const dataToUpdate = JSON.stringify({
        email: userData.email,
        name: name.value,
        lastName: lastName.value,
        password: password.value,
        birthDate: new Date(birthDate.value),
        favourites: userData.favourites,
      });

      localStorage.removeItem(userData.email);
      localStorage.setItem(userData.email, dataToUpdate);
      window.location.href = "./index.html";
      return;
    }
  });
});
