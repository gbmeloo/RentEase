import Header from "../../Components/Header.js";

const sessionData = JSON.parse(sessionStorage.getItem("email"));
const userData = sessionData ? JSON.parse(localStorage.getItem(sessionData.email)) : "";
const flats = JSON.parse(localStorage.getItem("flats"));

document.addEventListener("DOMContentLoaded", (e) => {
  var header = new Header(userData);
  header.render();
  let flatsListDiv = document.getElementsByClassName("flats-list")[0];

  // Listing favourites
  let userFavourites = userData.favourites;
  const userFlatsFavourites = flats.filter((flat) => userFavourites.includes(flat.id));

  // Log out function
  if (document.getElementById("log-out")) {
    document.getElementById("log-out").addEventListener("click", (e) => {
      sessionStorage.clear();
      window.location.href("./login.html");
    });
  }

  // Pagination variables
  let currentPage = 1;
  const flatsPerPage = 10;
  const totalPages = Math.ceil(userFlatsFavourites.length / flatsPerPage);

  // Function to display flats for the current page
  const displayFlats = (page) => {
    // Clear the current flats list
    flatsListDiv.innerHTML = "";

    // Calculate the start and end index for the current page
    const startIndex = (page - 1) * flatsPerPage;
    const endIndex = startIndex + flatsPerPage;
    const flatsToDisplay = userFlatsFavourites.slice(startIndex, endIndex);

    // Render flats for the current page
    flatsToDisplay.forEach((flat) => {
      let flatItem = document.createElement("div");
      flatItem.classList.add("flat-item");

      // Your existing flat rendering logic here
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
        currentImageIndex =
          (currentImageIndex - 1 + flat.images.length) % flat.images.length;
        updateImage();
      });

      let flatDescriptionDiv = document.createElement("div");
      flatDescriptionDiv.classList.add("flat-description");
      let flatPriceAndFav = document.createElement("div");
      flatPriceAndFav.classList.add("flat-price-and-fav");

      // Adding street to description
      let flatStreetDiv = document.createElement("div");
      flatStreetDiv.classList.add("desc-and-property");
      flatDescriptionDiv.appendChild(flatStreetDiv);
      let flatStreet = document.createElement("p");
      flatStreet.textContent =
        flat.city + ", " + flat.streetName + ", " + flat.streetNumber;
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
      flatYearBuiltLabel.textContent = "Year built: ";
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
      flatDateAvailableLabel.textContent = "Date available: ";
      flatDateAvailableDiv.appendChild(flatDateAvailableLabel);
      let flatDateAvailable = document.createElement("p");
      let timeStamp = Date.parse(flat.dateAvailable);
      let date = new Date(timeStamp);
      let dateString = `${(date.getMonth() + 1)
        .toString()
        .padStart(2, "0")}/${date
        .getDate()
        .toString()
        .padStart(2, "0")}/${date.getFullYear()}`;
      flatDateAvailable.textContent = dateString;
      flatDateAvailableDiv.appendChild(flatDateAvailable);

      // Fav button encapsulation
      let favButtonDiv = document.createElement("div");
      favButtonDiv.classList.add("desc-and-property");
      favButtonDiv.classList.add("fav-button-div");
      flatDescriptionDiv.appendChild(favButtonDiv);
      // Fav button creation
      let favButton = document.createElement("button");
      favButton.classList.add("fav-button");
      favButtonDiv.appendChild(favButton);

      // Inline SVG for the favourite icon
      let favSvg = `
      <svg class="fav-icon" width="30" height="30" viewBox="0 0 24 24" stroke="rgb(0, 62, 149)" stroke-width="2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
      `;
      favButton.innerHTML = favSvg;

      // Check if the flat is in favourites and update the SVG color
      if (userData.favourites.includes(flat.id)) {
        favButton.querySelector(".fav-icon").style.fill = "rgb(0, 62, 149)"; // Change fill color
      }

      favButton.addEventListener("click", (e) => {
        if (userData.favourites.includes(flat.id)) {
          userData.favourites = userData.favourites.filter(obj => obj !== flat.id);
          // console.log(userData.favourites);
          localStorage.setItem(userData.email, JSON.stringify(userData));
          window.location.reload();
        } else {
          const index = userData.favourites.indexOf(flat.id);
          userData.favourites.splice(index, 1);
          localStorage.setItem(userData.email, JSON.stringify(userData));
          favButton.querySelector(".fav-icon").style.fill = "none"; // Reset fill color when removed from favourites
        }
      });

      // Appending Description do Items list
      flatItem.appendChild(flatDescriptionDiv);

      let flatRentPrice = document.createElement("p");
      flatRentPrice.textContent = "CA$" + flat.rentPrice;
      flatPriceAndFav.appendChild(flatRentPrice);

      // let seeMoreButton = document.createElement("button");
      // seeMoreButton.classList.add("see-more-button");
      // seeMoreButton.textContent = "See More";
      // seeMoreButton.href = "./seeMore.html";
      // flatPriceAndFav.appendChild(seeMoreButton);

      favButton.addEventListener("click", () => {
        if (!userData) {
          window.location.href = "./Pages/Login/login.html";
        }
      });

      flatItem.appendChild(flatPriceAndFav);

      flatsListDiv.appendChild(flatItem);
    });
  };

  // Function to update pagination controls
  const updatePaginationControls = () => {
    const paginationDiv = document.getElementById("pagination-controls");
    if (!paginationDiv) return;

    paginationDiv.innerHTML = 
       `<button id="prev-page" ${currentPage === 1 ? "disabled" : ""}>◄</button>
        <span>Page ${currentPage} of ${totalPages}</span>
        <button id="next-page" ${currentPage === totalPages ? "disabled" : ""}>►</button>`;

    // Add event listeners for pagination buttons
    document.getElementById("prev-page").addEventListener("click", () => {
      if (currentPage > 1) {
        currentPage--;
        displayFlats(currentPage);
        updatePaginationControls();
      }
    });

    document.getElementById("next-page").addEventListener("click", () => {
      if (currentPage < totalPages) {
        currentPage++;
        displayFlats(currentPage);
        updatePaginationControls();
      }
    });
  };

  // Initial render
  displayFlats(currentPage);
  updatePaginationControls();
});
