// Event Handling Ways
// 1. using inline event handling

function handleClick(e) {
  e.preventDefault();
  //   alert("Btn  clicked");

  textbox1 = document.getElementsByName("fname")[0].value;
  paraRef = document.getElementById("para1");
  paraRef.innerText = textbox1;
}

// 2. way of Applying Event Handling
function changebtnColor() {
  btn.style.backgroundColor = "red";
  btn.style.color = "white";
}

function changebtnColor1() {
  btn.style.backgroundColor = "lightgrey";
  btn.style.color = "black";
}

var btn = document.getElementById("btn-1");
btn.onmouseover = changebtnColor;
btn.onmouseout = changebtnColor1;

// 3. way of Applying Event Handling using addEventListener
function bigFont() {
  paraRef.innerText = textbox1;
  paraRef.style.fontSize = "24px";
}

btn.addEventListener("dblclick", bigFont);
// This is a added feature with 3 way, that you can also remove event handling, but you need to provide the name
btn.removeEventListener("click", bigFont);
