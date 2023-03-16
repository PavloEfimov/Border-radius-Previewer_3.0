let showDiv = document.querySelector("#showDiv");

let inputs = document.querySelectorAll("input");
let inpTopRight = document.querySelector("#inpTopRight");
let inpTopLeft = document.querySelector("#inpTopLeft");
let inpLeftTop = document.querySelector("#inpLeftTop");
let inpLeftBottom = document.querySelector("#inpLeftBottom");
let inpRightTop = document.querySelector("#inpRightTop");
let inpRightBottom = document.querySelector("#inpRightBottom");
let inpBottomRight = document.querySelector("#inpBottomRight");
let inpBottomLeft = document.querySelector("#inpBottomLeft");

let inpTopRightValue = 0;
let inpTopLeftValue = 0;
let inpLeftTopValue = 0;
let inpLeftBottomValue = 0;
let inpRightTopValue = 0;
let inpRightBottomValue = 0;
let inpBottomRightValue = 0;
let inpBottomLeftValue = 0;

let btnCopy = document.querySelector("#btnCopy");
let btnReset = document.querySelector("#btnReset");
let choiseDiv = document.querySelector("#choise_div");
let choiseValue = 4;
let measValue = "px";
let cssScript = "";

let fnBtnCopy = function () {
  console.log("cssScript:", cssScript);
  navigator.clipboard.writeText(cssScript);
};

let fnBtnReset = function () {
  showDiv.style.borderRadius = ``;
  inputs.forEach((input) => {
    if (input.type == "number") {
      input.value = "";
    }
    if (input.type == "radio") {
      if (input.value == 4) {
        input.checked = true;
      } else if (input.value == 8){
        input.checked = false;
      } 
      if (input.value == "px") {
        input.checked = true;
      } else if (input.value == "%"){
        input.checked = false;
      } 
    }
  });
};

let fnInputs = function (e) {
  if (e.target.id == "choise4") {
    choiseValue = 4;
  } else if (e.target.id == "choise8") {
    choiseValue = 8;
  }

  if (e.target.id == "measPX") {
    measValue = "px";
  } else if (e.target.id == "measPCT") {
    measValue = "%";
  }

  if (choiseValue == 4) {
    inpTopRight.style.visibility = "hidden";
    inpTopLeft.style.visibility = "hidden";
    inpBottomRight.style.visibility = "hidden";
    inpBottomLeft.style.visibility = "hidden";

    switch (e.target.id) {
      case "inpLeftTop":
        showDiv.style.borderTopLeftRadius = `${e.target.value}${measValue}`;
        break;

      case "inpRightTop":
        showDiv.style.borderTopRightRadius = `${e.target.value}${measValue}`;
        break;

      case "inpRightBottom":
        showDiv.style.borderBottomRightRadius = `${e.target.value}${measValue}`;
        break;

      case "inpLeftBottom":
        showDiv.style.borderBottomLeftRadius = `${e.target.value}${measValue}`;
        break;
    }

    cssScript = `border-radius: ${showDiv.style.borderTopLeftRadius} ${showDiv.style.borderTopRightRadius} ${showDiv.style.borderBottomRightRadius} ${showDiv.style.borderBottomLeftRadius}`;
  } else if (choiseValue == 8) {
    inpTopRight.style.visibility = "visible";
    inpTopLeft.style.visibility = "visible";
    inpBottomRight.style.visibility = "visible";
    inpBottomLeft.style.visibility = "visible";

    switch (e.target.id) {
      case "inpLeftTop":
        inpLeftTopValue = e.target.value;
        break;

      case "inpTopLeft":
        inpTopLeftValue = e.target.value;
        break;

      case "inpTopRight":
        inpTopRightValue = e.target.value;
        break;

      case "inpRightTop":
        inpRightTopValue = e.target.value;
        break;

      case "inpRightBottom":
        inpRightBottomValue = e.target.value;
        break;

      case "inpBottomRight":
        inpBottomRightValue = e.target.value;
        break;

      case "inpLeftBottom":
        inpLeftBottomValue = e.target.value;
        break;

      case "inpBottomLeft":
        inpBottomLeftValue = e.target.value;
        break;
    }

    showDiv.style.borderRadius = `${inpLeftTopValue}${measValue}  ${inpRightTopValue}${measValue}
  ${inpRightBottomValue}${measValue} ${inpLeftBottomValue}${measValue} /
  ${inpTopLeftValue}${measValue} ${inpTopRightValue}${measValue} 
  ${inpBottomRightValue}${measValue} ${inpBottomLeftValue}${measValue}`;

    console.log("showDiv.style.borderRadius", showDiv.style.borderRadius);

    cssScript = `border-radius: ${showDiv.style.borderRadius}`;
  }
};

let fnChangeClear = function (e) {
  if (e.target.type == "radio") {
    showDiv.style.borderRadius = ``;
    inputs.forEach((input) => {
      if (input.type == "number") {
        input.value = "";
      }
    });
  }
};

btnCopy.addEventListener("click", fnBtnCopy);
btnReset.addEventListener("click", fnBtnReset);
inputs.forEach((input) => input.addEventListener("input", fnInputs));
inputs.forEach((input) => input.addEventListener("change", fnChangeClear));
