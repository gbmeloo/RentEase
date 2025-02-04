import Header from "./Components/Header.js";
import { flats } from "./Flats.js";

const userData = JSON.parse(sessionStorage.getItem("email"));

document.addEventListener("DOMContentLoaded", (e) => {
  var header = new Header(userData);
  header.render();
  let flatsListDiv = document.getElementsByClassName("flats-list")[0];

  if (document.getElementById("log-out")) {
    document.getElementById("log-out").addEventListener("click", e => {
      sessionStorage.clear();
      window.location.href("./login.html");
    });
  }
  

  flats.forEach((flat) => {
    let flatItem = document.createElement("div");
    flatItem.classList.add("flat-item");

    let flatImages = document.createElement("div");
    flatImages.classList.add("flat-images");
    flatItem.appendChild(flatImages);

    // Create a container for the current image
    let currentImageContainer = document.createElement("div");
    currentImageContainer.classList.add("current-image-container");
    flatImages.appendChild(currentImageContainer);

    // Create navigation buttons (optional)
    let prevButton = document.createElement("button");
    prevButton.innerText = "◄";
    prevButton.classList.add("nav-button");
    flatImages.appendChild(prevButton);

    let nextButton = document.createElement("button");
    nextButton.innerText = "►";
    nextButton.classList.add("nav-button");
    flatImages.appendChild(nextButton);

    let currentImageIndex = 0;
    let currentImage = document.createElement("img");
    currentImage.src = flat.images[currentImageIndex];
    currentImageContainer.appendChild(currentImage);

    // Function to update the current image
    const updateImage = () => {
      currentImage.src = flat.images[currentImageIndex];
    };

    // Event listener for the next button
    nextButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex + 1) % flat.images.length;
      updateImage();
    });

    // Event listener for the previous button
    prevButton.addEventListener("click", () => {
      currentImageIndex = (currentImageIndex - 1 + flat.images.length) % flat.images.length;
      updateImage();
    });

    let flatDescriptionDiv = document.createElement("div");
    flatDescriptionDiv.classList.add("flat-description");
    let flatPriceAndFav = document.createElement("div");
    flatPriceAndFav .classList.add("flat-price-and-fav");

    // Adding street to description
    let flatStreetDiv = document.createElement("div");
    flatStreetDiv.classList.add("desc-and-property");
    flatDescriptionDiv.appendChild(flatStreetDiv);
    let flatStreet = document.createElement("p");
    flatStreet.textContent =  flat.city + ", " + flat.streetName + ", " + flat.streetNumber;
    flatStreetDiv.appendChild(flatStreet);

    // Adding area size to description
    let flatAreaSize = document.createElement("p");
    flatAreaSize.textContent = flat.areaSize + "m²";
    flatDescriptionDiv.appendChild(flatAreaSize);

    // Adding has ac to description
    let flatHasACDiv = document.createElement("div");
    flatHasACDiv.classList.add("desc-and-property");
    flatDescriptionDiv.appendChild(flatHasACDiv);
    let flatHasAC = document.createElement("p");
    let flatHasACLabel = document.createElement("p");
    flatHasACLabel.classList.add("desc-label");
    flatHasACLabel.textContent = "Has AC:";
    flatHasAC.textContent = flat.hasAC ? "Yes" : "No";
    flatHasACDiv.appendChild(flatHasACLabel);
    flatHasACDiv.appendChild(flatHasAC);

    // Adding year built to description
    let flatYearBuiltDiv = document.createElement("div");
    flatYearBuiltDiv.classList.add("desc-and-property");
    flatDescriptionDiv.appendChild(flatYearBuiltDiv);
    let flatYearBuiltLabel = document.createElement("p");
    flatYearBuiltLabel.classList.add("desc-label");
    flatYearBuiltLabel.textContent = "Year built: "
    flatYearBuiltDiv.appendChild(flatYearBuiltLabel);
    let flatYearBuilt = document.createElement("p");
    flatYearBuilt.textContent = flat.yearBuilt;
    flatYearBuiltDiv.appendChild(flatYearBuilt);

    // Adding date available to description
    let flatDateAvailableDiv = document.createElement("div");
    flatDateAvailableDiv.classList.add("desc-and-property");
    flatDescriptionDiv.appendChild(flatDateAvailableDiv);
    let flatDateAvailableLabel = document.createElement("p");
    flatDateAvailableLabel.classList.add("desc-label");
    flatDateAvailableLabel.textContent = "Date available: "
    flatDateAvailableDiv.appendChild(flatDateAvailableLabel);
    let flatDateAvailable = document.createElement("p");
    let timeStamp = Date.parse(flat.dateAvailable);
    let date = new Date(timeStamp);
    console.log(date);
    let dateString = 
      `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
    flatDateAvailable.textContent = dateString;
    flatDateAvailableDiv.appendChild(flatDateAvailable);

    // Fav button creation
    let favButtonDiv = document.createElement("div");
    favButtonDiv.classList.add("desc-and-property");
    favButtonDiv.classList.add("fav-button-div");
    flatDescriptionDiv.appendChild(favButtonDiv);
    let favButton = document.createElement("button");
    let favImg = document.createElement("img");
    favImg.src = "./assets/save-svgrepo-com.svg";
    favButton.appendChild(favImg);
    favButton.classList.add("fav-button");
    favButtonDiv.appendChild(favButton);

    // Appending Description do Items list
    flatItem.appendChild(flatDescriptionDiv);

    let flatRentPrice = document.createElement("p");
    flatRentPrice.textContent = "CA$" + flat.rentPrice;
    flatPriceAndFav.appendChild(flatRentPrice);

    let seeMoreButton = document.createElement("button");
    seeMoreButton.classList.add("see-more-button");
    seeMoreButton.textContent = "See More";
    seeMoreButton.href = "./seeMore.html";
    flatPriceAndFav.appendChild(seeMoreButton);    

    favButton.addEventListener('click', () => {
      if(!email) {
        window.location.href = "./Pages/Login/login.html";
      };
    });

    flatItem.appendChild(flatPriceAndFav);

    flatsListDiv.appendChild(flatItem);
  });
});
