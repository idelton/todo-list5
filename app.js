const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function addTask(){
   if(inputBox.value === '') {
    alert("tu dois ecrire quelque chose");
   } else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

//btn croix
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

   }
   inputBox.value = "";
   saveDate()
}

//validation list-check
listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
  else if (e.target.tagName === "SPAN"){
  e.target.parentElement.remove()
  }
}, false);

//stockage locale
function saveDate(){
  localStorage.setItem("date",listContainer.innerHTML);
}
//récupere les données
function showTask(){
  listContainer.innerHTML =localStorage.getItem("date");
}
showTask()