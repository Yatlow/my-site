let nav_open=false;
const navItemsBox=document.getElementById("navItemsBox");
document.getElementById("Hamburger").addEventListener('click',function(){
    toggleNav();
});
document.getElementById("navItemsBox").addEventListener('click',function(){
    toggleNav();
});
document.getElementById("KWP").addEventListener('mouseenter',function(){
    document.getElementById('KW1').classList.remove('hiddenIMG')
    document.getElementById('KW2').classList.add('hiddenIMG')
});
document.getElementById("KWP").addEventListener('mouseleave',function(){
    document.getElementById('KW1').classList.add('hiddenIMG')
    document.getElementById('KW2').classList.remove('hiddenIMG')
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