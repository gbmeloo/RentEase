export default class Header {
  constructor(userName) {
    this.headerBody = document.createElement("header");
    this.headerNav = document.createElement("nav");
    this.headerNav.className = "headerNav";
    if (userName) {
      this.items = [
        { content: "RentEase", href: "./index.html" },
        { content: `Hello, ${userName.name} ${userName.lastName}`, href: "#" },
        { content: "Menu", href: "#" },
        { content: "Log out", href: "" },
      ];
      this.menuItems = [
        { content: "Favourites", href: "./favourites.html" },
        { content: "Settings", href: "./settings.html" },
        { content: "New Flat", href: "./newFlat.html" },
      ];
    } else {
      this.items = [
        { content: "RentEase", href: "./index.html" },
        { content: "Log in", href: "./login.html" },
        { content: "Register", href: "./register.html" },
      ];
    }
  }

  render() {
    this.headerNav.innerHTML = "";

    this.items.forEach((itemText) => {
      if (itemText.content === "Menu") {
        // Create a container for the dropdown
        const menuContainer = document.createElement("div");
        menuContainer.className = "menuContainer";

        const menuButton = document.createElement("a");
        menuButton.className = "navItem menuButton";
        menuButton.innerHTML = `Menu <span class="arrow">▼</span>`;
        menuButton.href = "#";

        // Dropdown menu
        const dropdown = document.createElement("div");
        dropdown.className = "dropdownMenu";

        this.menuItems.forEach((option) => {
          const menuItem = document.createElement("a");
          menuItem.className = "dropdownItem";
          menuItem.textContent = option.content;

          menuItem.href = option.href; // Set proper links here
          dropdown.appendChild(menuItem);
        });

        // Append dropdown inside menu container
        menuContainer.appendChild(menuButton);
        menuContainer.appendChild(dropdown);

        // Add event listener for dropdown toggle
        menuButton.addEventListener("click", (event) => {
          event.preventDefault();
          dropdown.classList.toggle("show");

          const arrow = menuButton.querySelector(".arrow");
          if (dropdown.classList.contains("show")) {
            arrow.style.transform = "rotate(-90deg)"; // Point up
          } else {
            arrow.style.transform = "rotate(0deg)"; // Point down
          }
        });

        this.headerNav.appendChild(menuContainer);
      } else {
        const navItem = document.createElement("a");
        navItem.id = itemText.content === "Log out" ? "log-out" : "";
        itemText.content === "RentEase" && navItem.classList.add("logo");
        navItem.classList.add("navItem");
        navItem.textContent = itemText.content;
        navItem.href = itemText.href;
        this.headerNav.appendChild(navItem);
      }
    });

    this.headerBody.appendChild(this.headerNav);
    document.body.before(this.headerBody);
  };

};
