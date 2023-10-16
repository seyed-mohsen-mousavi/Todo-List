let ulELm = document.querySelector("ul");
let inputElm = document.querySelector("input");
let formElm = document.querySelector(".add");
let lenthTodo = document.querySelector("p");
formElm.addEventListener("submit", (e) => {
  e.preventDefault();
});
let deleteElm = document.querySelectorAll(".delete");
inputElm.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    if (
      inputElm.value === "" ||
      inputElm.value === ulELm.lastElementChild.firstElementChild.innerHTML
    ) {
      document.querySelector(".error").innerHTML = "Error Check Fild";
      document.querySelector(".error").style.color = "red";
    } else {
      document.querySelector(".error").innerHTML = "Added";
      document.querySelector(".error").style.color = "green";
      let addLiElm = document.createElement("li");
      addLiElm.setAttribute(
        "class",
        "list-group-item d-flex justify-content-between align-items-center"
      );
      let addSpanElm = document.createElement("span");
      let addIElm = document.createElement("i");
      addIElm.setAttribute("class", "fa fa-trash-o delete");
      addLiElm.appendChild(addSpanElm);
      addSpanElm.innerHTML = inputElm.value;
      addLiElm.appendChild(addIElm);
      ulELm.appendChild(addLiElm);
      deleteElm = document.querySelectorAll(".delete");
      deleteElm.forEach((e) => {
        e.addEventListener("click", (e) => {
          e.target.parentElement.remove();
        });
      });
      inputElm.value = "";
    }
  }
});
