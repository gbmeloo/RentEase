import Header from "../../Components/Header.js";
import Flat from "../../Tools/Flats.js";

const sessionData = JSON.parse(sessionStorage.getItem("email"));
const userData = sessionData
  ? JSON.parse(localStorage.getItem(sessionData.email))
  : "";

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  var header = new Header(userData);
  header.render();

  const flatForm = document.getElementById("flat-form");

  flatForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (!userData) {
        window.location.href = "./login.html";
    }

    const city = e.target.elements.city.value;
    const streetName = e.target.elements.streetName.value;
    const streetNumber = e.target.elements.streetNumber.value;
    const areaSize = parseInt(e.target.elements.areaSize.value);
    const hasAC = e.target.querySelector('input[name="hasAC"]:checked')?.value; // get the checked value
    const dateAvailable = new Date(e.target.elements.dateAvailable.value);

    if (hasAC === undefined) {
      console.log("No AC option selected");
      return;
    }
    const yearBuilt = parseInt(e.target.elements.yearBuilt.value);
    const rentPrice = parseFloat(e.target.elements.rentPrice.value);

    const newFlat = new Flat(city, streetName, streetNumber, areaSize, hasAC, yearBuilt, rentPrice, dateAvailable);
    newFlat.save();
  });
});
