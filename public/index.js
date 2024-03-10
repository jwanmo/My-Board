let isLoggedIn = false;
showHideAuthLinks();

document.addEventListener("DOMContentLoaded", loadDocument);

function loadDocument() {
  const token = getLocalStoarge("token");
  if (token) {
    navigateTo("home");
  } else {
    navigateTo("login");
  }
}

function navigateTo(page) {
  console.log("navigate to: ", page);
  fetch(`${page}.html`)
    .then((response) => response.text())
    .then((content) => {
      document.getElementById("content").innerHTML = content;

      const scriptElement = document.createElement("script");
      scriptElement.src = `${page}.js`;

      if (!document.querySelector(`script[src="${page}.js"]`)) {
        document.body.appendChild(scriptElement);
      }
    })
    .catch((error) => console.error("Error fetching page:", error));
}

function getLocalStoarge(key) {
  const storedData = localStorage.getItem(key);
  return storedData;
}

function setLocalStoarge(key, value) {
  localStorage.setItem(key, value);
}

function showHideAuthLinks() {
  const token = getLocalStoarge("token");
  const authLinks = document.getElementById("authLinks");
  const logOutbtn = document.getElementById("logOutbtn");

  isLoggedIn = token != undefined;

  if (isLoggedIn) {
    authLinks.style.display = "none";
    logOutbtn.style.display = "block";
    profileBtn.style.display = "block";
  } else {
    authLinks.style.display = "";
    logOutbtn.style.display = "none";
    profileBtn.style.display = "none"; 
  }
}

function logOut() {
  localStorage.removeItem("token");
  localStorage.removeItem("username"); 
  isLoggedIn = false;
  showHideAuthLinks();
  navigateTo("login");
}