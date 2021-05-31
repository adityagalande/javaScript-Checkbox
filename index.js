const checkboxs = document.querySelectorAll(".inbox input[type=checkbox]");
// console.warn(checkbox);

function handleCheck(r){
  console.log(r.isTrusted);
  let inBetween = false;
  if(r.shiftkey && this.checked){
    checkboxs.forEach(checkbox => {
      console.log(checkbox);
    });

  }
}

checkboxs.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
