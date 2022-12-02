//Code to change images in a page
function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `You want to know more, ${myName}?`;
  }
}

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/me_smiling.jpg") {
    myImage.setAttribute("src", "images/me_smiling2.jpg");
  } else {
    myImage.setAttribute("src", "images/me_smiling.jpg");
  }
};

let myButton = document.querySelector("button");
myButton.onclick = () => {
  setUserName();
};

let myHeading = document.querySelector("h1");
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `You want to know more, ${myName}?`;
}
