let nav_open=false;
const navItemsBox=document.getElementById("navItemsBox");
document.getElementById("Hamburger").addEventListener('click',function(){
    toggleNav();
});
document.getElementById("navItemsBox").addEventListener('click',function(){
    toggleNav();
});


function toggleNav(){
    if (nav_open){
        navItemsBox.classList.add("hideMobile");
        nav_open=false;
    }else{
        navItemsBox.classList.remove("hideMobile");
        nav_open=true;
    }
}