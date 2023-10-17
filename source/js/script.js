// All variable
// Mr ROoOt :)
let $ = document;
let ulELm = $.querySelector("ul");
let inputElm = $.querySelector("input");
let formElm = $.querySelector(".add");
let lenthTodo = $.querySelector("p");
formElm.addEventListener("submit", (e) => {
  e.preventDefault();
});
// Add FUN
function addNewElm() {
  let addLiElm = $.createElement("li");
  addLiElm.setAttribute(
    "class",
    "list-group-item d-flex justify-content-between align-items-center"
  );
  let addSpanElm = $.createElement("span");
  let addIElm = $.createElement("i");
  addIElm.className = "fa fa-trash-o delete";
  addLiElm.appendChild(addSpanElm);
  addSpanElm.innerHTML = inputElm.value;
  addLiElm.appendChild(addIElm);
  ulELm.appendChild(addLiElm);
}
let deleteElm = $.querySelectorAll(".delete");
inputElm.addEventListener("keydown", (e) => {
  // check fild ***---
  if (e.key === "Enter") {
    if (inputElm.value === "") {
      // Error style---
      $.querySelector(".error").innerHTML = "Error Check Fild";
      $.querySelector(".error").style.color = "#f47e7e";
    } else {
      // Add style---
      $.querySelector(".error").innerHTML = "Added";
      $.querySelector(".error").style.color = "#97ee97";
      // add ELement---
      localStorage.setItem("s", addNewElm());
      localStorage.getItem("s");
      // add to delete elm ---
      deleteElm = $.querySelectorAll(".delete");
      // for Fun =>
      deleteElm.forEach((e) => {
        e.addEventListener("click", (e) => {
          e.target.parentElement.remove();
          $.querySelector("#aui-flag-container").style.visibility = "visible";
          $.querySelector("#aui-flag-container").style.opacity = "1";
          $.getElementById("close").addEventListener("click", () => {
            $.querySelector("#aui-flag-container").style.visibility = "hidden";
            $.querySelector("#aui-flag-container").style.opacity = "0";
          });
          setTimeout(() => {
            $.querySelector("#aui-flag-container").style.visibility = "hidden";
            $.querySelector("#aui-flag-container").style.opacity = "0";
          }, 4000);
        });
      });
      // clear input and WORNING ---
      inputElm.value = "";
      setTimeout(function () {
        $.querySelector(".error").innerHTML = "";
      }, 2000);
    }
  }
});
