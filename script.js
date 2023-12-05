const navBar = document.querySelector('.navbar');
const content = document.querySelector('.content');

window.addEventListener("scroll", ()=> {
    console.log(content.offsetTop);
    if(window.scrollY > content.offsetTop - navBar.offsetHeight - 50) {
        navBar.classList.add('active');
    } else {
        navBar.classList.remove('active');
    }
});