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
let footer = document.getElementById("footer");
// let overlap = document.getElementById("overlapped-content");

header.addEventListener("click", (event) => {
	if (event.target.id === "menu-home") {
		// Home Menu Tab
		contentArea.innerHTML = "";
		contentArea.appendChild(addHomeContent());
		if (!document.getElementById("overlapped-content")) {
			container.insertBefore(addHomeOverlappedContent(), footer);
		}
		contentArea.classList.remove("content-flex");
		contentArea.classList.remove("content-menu");
		closeMobileHeader();
	}
	if (event.target.id === "menu-about") {
		//  About Menu Tab
		addAboutContent();
		contentArea.classList.remove("content-menu");
		contentArea.classList.add("content-flex");
		removeOverlappedContent();
		closeMobileHeader();
	}
	if (event.target.id === "menu-menu") {
		//  Menu Menu Tab
		addMenuContent();
		contentArea.classList.remove("content-flex");
		contentArea.classList.add("content-menu");
		removeOverlappedContent();
		closeMobileHeader();
	}
	if (event.target.id === "menu-contact") {
		//  Contact Menu Tab
		addContactContent();
		contentArea.classList.remove("content-menu");
		contentArea.classList.add("content-flex");
		removeOverlappedContent();
		closeMobileHeader();
	}
});

document.getElementById("mobile-menu").addEventListener("click", (event) => {
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

function closeMobileHeader() {
	if (header.classList.contains("toggle-active")) {
		header.classList.remove("toggle-active");
		document.getElementById("mobile-menu").innerHTML =
			"<i class='fas fa-bars'></i>";
	}
}

function removeOverlappedContent() {
	if (document.getElementById("overlapped-content")) {
		document.getElementById("overlapped-content").remove();
	}
}

function addHomeContent() {
	var element = document.createElement("div");
	element.id = "carousel-home";
	element.className += "carousel";
	element.className += " slide";
	element.className += " fit-to-screen";
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
