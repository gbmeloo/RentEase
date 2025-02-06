import Header from "../../Components/Header.js";

const sessionData = JSON.parse(sessionStorage.getItem("email"));
const userData = sessionData
  ? JSON.parse(localStorage.getItem(sessionData.email))
  : "";

document.addEventListener("DOMContentLoaded", (e) => {
    var header = new Header(userData);
    header.render();

    console.log(userData);

    let updateInfoForm = document.getElementById("register-form");

    let userName = document.getElementById("userName");
    userName.value = userData.name;

    let userLastName = document.getElementById("userLastName");
    userLastName.value = userData.lastName;

    let birthDate = document.getElementById("birthDate");
    birthDate.value = userData.birthDate;

});
