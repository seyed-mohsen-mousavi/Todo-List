// All variable
// Mr ROoOt :) 
let $ = document
let ulELm = $.querySelector("ul");
let inputElm = $.querySelector("input");
let formElm = $.querySelector(".add");
let lenthTodo = $.querySelector("p");
formElm.addEventListener("submit", (e) => {
  e.preventDefault();
});
let deleteElm = $.querySelectorAll(".delete");
inputElm.addEventListener("keydown", (e) => {
  // check fild ***
  if (e.key === "Enter") {
    if (
      inputElm.value === "" ||
      inputElm.value === ulELm.lastElementChild.firstElementChild.innerHTML
    ) {
      // Error style
      $.querySelector(".error").innerHTML = "Error Check Fild";
      $.querySelector(".error").style.color = "red";
    } else {
      // Add style
      $.querySelector(".error").innerHTML = "Added";
      $.querySelector(".error").style.color = "green";
      // Create New Elment
      let addLiElm = $.createElement("li");
      addLiElm.setAttribute(
        "class",
        "list-group-item d-flex justify-content-between align-items-center"
      );
      let addSpanElm = $.createElement("span");
      let addIElm = $.createElement("i");
      addIElm.setAttribute("class", "fa fa-trash-o delete");
      addLiElm.appendChild(addSpanElm);
      addSpanElm.innerHTML = inputElm.value;
      addLiElm.appendChild(addIElm);
      ulELm.appendChild(addLiElm);
      // add to delete elm 
      deleteElm = $.querySelectorAll(".delete");
      deleteElm.forEach((e) => {
        e.addEventListener("click", (e) => {
          e.target.parentElement.remove();
        });
      });
      inputElm.value = "";
    }
  }
});
