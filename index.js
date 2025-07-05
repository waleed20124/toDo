let add = document.querySelector("#add");
let add_btn = document.querySelector(".btn-add");
let ul = document.querySelector("ul");
let i = 0;
function removeTask(elm) {
  elm.parentNode.removeChild(elm);
  i-=1;
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
    span.textContent = `${++i}`;
    btn_remove.classList.add("btn-remove");
    li.appendChild(span);
    li.appendChild(inputA);
    li.appendChild(btn_remove);
    ul.append(li);

    add.value = "";

  
  }

  document.querySelector(".btn_remove");
  btn_remove.addEventListener("click", function () {
    removeTask(li);
     
        
  });
}

add_btn.addEventListener("click", function () {
  addTask();
   
});


 