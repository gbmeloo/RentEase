import Header from "../../Components/Header.js";

var header = new Header();
header.render();

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    if (!email) {
        console.log("Wrong e-mail or password");
        return;
    }

    let userData = JSON.parse(localStorage.getItem(email));
    console.log(JSON.stringify(userData));

    if (!userData) {
        console.log("Wrong e-mail or password");
        return;
    }

    if (password !== userData.password) {
        console.log("Wrong e-mail or password");
        return;
    }
    
    sessionStorage.setItem("email", JSON.stringify(userData));
    window.location.href = "./index.html"

});
