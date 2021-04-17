const toggleBtn=document.querySelector('.sidebar-toggle');
const closebBtn=document.querySelector('.close-btn');
const sideBar=document.querySelector('.sidebar');

toggleBtn.addEventListener('click',function(){
    sideBar.classList.toggle("show-sidebar");
});
closebBtn.addEventListener('click',function(){
    sideBar.classList.remove("show-sidebar");
});