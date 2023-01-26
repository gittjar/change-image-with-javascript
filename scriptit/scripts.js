
//const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img");

// Klikkaamalla kuvaa vaihtuu otsikko, kuva ja taustaväritys
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  let myHeading2 = document.querySelector("h1");

  
  if (mySrc === "images/firefox.png") {
    myImage.setAttribute("src", "images/brave.png");
    myHeading2.textContent = `Is Brave even Cooler?`;
    document.body.style.backgroundColor = '#FFFFFF';
  } else {
    myImage.setAttribute("src", "images/firefox.png");
    myHeading2.textContent = `Mozilla is Cool!`;
    document.body.style.backgroundColor = '#FF9500';
  }
};

// buttonilla kysellään nimi

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };

  // CHANGE TEXT

  function changeText(text)
  {
      var display = document.getElementById('text-display');
      display.innerHTML = "";
      display.innerHTML = text;
  }
    function changeback(text)
  {
      var display = document.getElementById('text-display');
      display.innerHTML = "";
      display.innerHTML = text;
  }