const sidebarOpen = document.querySelector("#hamburger_open");
const sidebarClose = document.querySelector("#hamburger_close");
const sidebar = document.querySelector("#sidebar");
const contentSection = document.querySelector("#content");
const header = document.querySelector("#header")

sidebarOpen.addEventListener("click", openNav);
function openNav() {
    sidebar.classList.add("sidebar--open"); 
    sidebarOpen.style.display ="none";  
    sidebarClose.style.display ="block";
}
sidebarClose.addEventListener("click", clickHandler);
function clickHandler(event) {
   if(event.target.closest(".iris__sidebar")) return;


    sidebar.classList.remove("sidebar--open");
    sidebarClose.style.display ="none";  
    sidebarOpen.style.display ="block";  

}


  
    
