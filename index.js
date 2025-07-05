let add = document.querySelector("#add");
let add_btn = document.querySelector(".btn-add");
let ul = document.querySelector("ul");

function removeTask(elm) {
  elm.parentNode.removeChild(elm);
  updateNumbers();
}

function updateNumbers() {
  let allSpans = ul.querySelectorAll("li span");
  allSpans.forEach((span, index) => {
    span.textContent = index + 1;
  });
}

function addTask() {
  let inputA = document.createElement("input");
  let btn_remove = document.createElement("button");
  let li = document.createElement("li");
  let atr = document.createAttribute("readonly");
  let span = document.createElement("span");

  inputA.setAttributeNode(atr);

  let text = add.value.trim();
  if (text !== "") {
    inputA.value = text;
    btn_remove.textContent = "Remove";
    btn_remove.classList.add("btn-remove");

    li.appendChild(span);
    li.appendChild(inputA);
    li.appendChild(btn_remove);
    ul.append(li);

  
    updateNumbers();

    add.value = "";
  }

  btn_remove.addEventListener("click", function () {
    removeTask(li);
  });
}

add_btn.addEventListener("click", function () {
  addTask();
});
