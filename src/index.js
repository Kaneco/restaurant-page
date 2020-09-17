// another JS file
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/all";
import { homeContent, overlappedContent } from "./pageLoadHome";
import { aboutContent } from "./pageLoadAbout";
import { menuContent } from "./pageLoadMenu";
import { contactContent } from "./pageLoadContact";

let contentArea = document.getElementById("content");
let header = document.getElementById("header");
let container = document.getElementById("container");
let mobileMenu = document.getElementById("mobile-menu");
let footer = document.getElementById("footer");
// let overlap = document.getElementById("overlapped-content");

header.addEventListener("click", (event) => {
	if (event.target.id === "menu-home") {
    // Home Menu Tab
    contentArea.innerHTML ="";
		contentArea.appendChild(addHomeContent());
    container.insertBefore(addHomeOverlappedContent(), footer);
    header.classList.remove("toggle-active");
    document.getElementById("mobile-menu").innerHTML =
    "<i class='fas fa-bars'></i>";
    contentArea.classList.remove("content-flex");
	}
	if (event.target.id === "menu-about") {
		//  About Menu Tab
    addAboutContent();
    header.classList.remove("toggle-active");
    contentArea.classList.add("content-flex");
    document.getElementById("mobile-menu").innerHTML =
    "<i class='fas fa-bars'></i>";
    document.getElementById("overlapped-content").remove();
	}
	if (event.target.id === "menu-menu") {
		//  Menu Menu Tab
    addMenuContent();
    header.classList.remove("toggle-active");
    contentArea.classList.add("content-flex");
    document.getElementById("mobile-menu").innerHTML =
    "<i class='fas fa-bars'></i>";
    document.getElementById("overlapped-content").remove();
	}
	if (event.target.id === "menu-contact") {
		//  Contact Menu Tab
    addContactContent();
    header.classList.remove("toggle-active");
    contentArea.classList.add("content-flex");
    document.getElementById("mobile-menu").innerHTML =
    "<i class='fas fa-bars'></i>";
    document.getElementById("overlapped-content").remove();
	}
});

mobileMenu.addEventListener("click", (event) => {
	if (header.classList.contains("toggle-active")) {
		header.classList.remove("toggle-active");
		document.getElementById("mobile-menu").innerHTML =
			"<i class='fas fa-bars'></i>";
	} else {
		header.classList.add("toggle-active");
		document.getElementById("mobile-menu").innerHTML =
			"<i class='fas fa-times'></i>";
	}
});

function addHomeContent() {
	var element = document.createElement("div");
	element.id = "carousel";
	element.className += "carousel";
	element.className += " slide";
	element.setAttribute("data-ride", "carousel");
	element.setAttribute("data-interval", "3000");
	// use your function!
	element.innerHTML = homeContent();
	return element;
}

function addHomeOverlappedContent() {
	var element = document.createElement("div");
	element.id = "overlapped-content";
	// use your function!
	element.innerHTML = overlappedContent();
	return element;
}

function addAboutContent() {
	contentArea.innerHTML = aboutContent();
}

function addMenuContent() {
	contentArea.innerHTML = menuContent();
}

function addContactContent() {
	contentArea.innerHTML = contactContent();
}

contentArea.appendChild(addHomeContent());
container.insertBefore(addHomeOverlappedContent(), footer);
