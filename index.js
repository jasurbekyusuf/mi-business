const navAnim = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".navbar-nav");
    const navlinks = document.querySelectorAll(".navbar-nav a");

burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    navlinks.forEach((link, index)=>{
    if (link.style.animation){
        link.style.animation="";
    }
    else{
        link.style.animation = `navlinksMove 0.5s ease forwards ${index/7+0.4}s`
    }
})
});
//    navlinks.forEach(navItem=>{
//        navItem.addEventListener('click', ()=>{
//            nav.classList.remove('nav-active')
//        })
//    })


};
navAnim();