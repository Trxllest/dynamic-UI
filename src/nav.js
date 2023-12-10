// eslint-disable-next-line quotes
import "./style.css";

// Add nav to node: Input:'class', Return -> None
export default function nav(cls) {
  // eslint-disable-next-line prefer-template
  const target = document.querySelector("." + cls);


  if (target) {
    // eslint-disable-next-line no-use-before-define
    const dropdown = createNav();
    target.appendChild(dropdown);

    document.addEventListener("click", (e) => {
      const menuContent = dropdown.querySelector(".menuContent");

      if (
        !menuContent.contains(e.target) &&
        !e.target.classList.contains("dropbtn")
      ) {
        // Clicked outside the dropdown, close it
        menuContent.classList.remove("show");
      }
    });
  } else {
    console.error("Target element not found:", cls);
  }
}

// Create the nav elements: Input:None, Return -> nav
function createNav() {
  // nav: Wrapper
  const navWrapper = document.createElement("div");
  navWrapper.classList.add("menu");

  // nav: Icon
  const navIcon = document.createElement("div");
  navIcon.classList.add("dropbtn");

  navIcon.innerHTML =
    // eslint-disable-next-line quotes
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" /></svg>';

  const navDropDownContent = document.createElement("div");
  navDropDownContent.classList.add("menuContent");
  const link1 = document.createElement("a");
  const link2 = document.createElement("a");
  const link3 = document.createElement("a");
  const link4 = document.createElement("a");
  link1.classList.add("menuItem");
  link2.classList.add("menuItem");
  link3.classList.add("menuItem");
  link4.classList.add("menuItem");
  link1.href = "#";
  link2.href = "#";
  link3.href = "#";
  link4.href = "#";
  link1.textContent = "Home";
  link2.textContent = "Settings";
  link3.textContent = "Photos";
  link4.textContent = "About";

  navDropDownContent.appendChild(link1);
  navDropDownContent.appendChild(link2);
  navDropDownContent.appendChild(link3);
  navDropDownContent.appendChild(link4);

  navWrapper.appendChild(navIcon);
  navWrapper.appendChild(navDropDownContent);

  navIcon.addEventListener("click", () => {
    navDropDownContent.classList.toggle("show");
  });

  return navWrapper;
}
