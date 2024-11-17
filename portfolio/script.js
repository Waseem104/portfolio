const isDarkTheme = JSON.parse(localStorage.getItem("theme")) || false;

const toggleThemeBtn = document.getElementById("toggleTheme");

if (isDarkTheme) {
  document.body.classList.add("dark-mode");
  toggleThemeBtn.style.color = "#e0e0e0";
} else {
  toggleThemeBtn.style.color = "#333333";
}

toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleThemeBtn.style.color = "#e0e0e0";
  } else {
    toggleThemeBtn.style.color = "#333333";
  }

  localStorage.setItem("theme",JSON.stringify(document.body.classList.contains("dark-mode"))
  );
});

document.getElementById("message").addEventListener("focus", () => {
  document.getElementById("message").value = "";
});

const navtoggle=document.getElementById("navToggle");
const dropdownMenu=document.getElementById("dropdownMenu");
const navCancel=document.getElementById("navCancel");

navtoggle.addEventListener("click",()=>{
  dropdownMenu.style.display="block";
  navtoggle.style.display="none";
  navCancel.style.display="block";
});


navCancel.addEventListener("click",()=>{
  dropdownMenu.style.display="none";
  navtoggle.style.display="block";
  navCancel.style.display="none";
});

// form---
const inputs=document.querySelectorAll(".form-page input,textarea");
// console.log(inputs);
const generalErrorMessage=document.querySelector(".general-error-message");

inputs.forEach((input) => {
  input.addEventListener("blur",()=>{
    const errorMessage=input.nextElementSibling;
    if(input.value.trim()===""){
      errorMessage.textContent="This feild is required";
      errorMessage.style.display="block";
    }else{
      errorMessage.style.display="none";
    }
  checkFields();
  })
});
// remove message when click outside
document.addEventListener("click",(e)=>{
  inputs.forEach((input)=>{
    if(!input.contains(e.target)){
       const errorMessage=input.nextElementSibling;
       errorMessage.style.display="none";
    }
  });
    if(!formpage.contains(e.target)){
      generalErrorMessage.style.display="none";
  }
});

// ---------------------------------------
const formpage=document.getElementById("form");
const submitBtn=document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();

  let allFeilds=true;

  inputs.forEach((input)=>{
    const errorMessage=input.nextElementSibling;
    if(input.value.trim()===""){
      errorMessage.textContent="This feild is necessary";
      errorMessage.style.display="block";
      allFeilds=false;
    }else{
      errorMessage.style.display="none";
    }
  });

  if(!allFeilds){
    generalErrorMessage.textContent="All feilds are necessary";
    generalErrorMessage.style.display="block";
  }else{
    generalErrorMessage.textContent="none";
    alert("form submitted successfully");
    formpage.reset();
  }
})

