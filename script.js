/* window.onload = function(){ 
    let navbar = document.querySelector('.center_row');

    document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    };
}
*/
var isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
                isMobile.Android()
                || isMobile.BlackBerry()
                || isMobile.iOS()
                || isMobile.Opera()
                || isMobile.Windows()
                );
    }
};
if (isMobile.any()) {
    document.body.classList.add('_mobile');
    let menuArrows = document.querySelector('.menu_arrow');
    document.querySelector('.menu_arrow').onclick = () =>{
    menuArrows.parentElement.classList.toggle('active');}
}
else {
    document.body.classList.add('_pc');
}

const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.nav_container');
document.querySelector('.menu_icon').onclick = () =>{
    document.body.classList.toggle('lock');
    menuBody.classList.toggle('active');
    iconMenu.classList.toggle('active');
}
 //rating stars
 const ratingItemsList = document.querySelectorAll('.rating_item');
 const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);
    ratingItemsArray.forEach(item =>
        item.addEventListener('click', ()=>
        item.parentNode.dataset.totalValue = item.dataset.itemValue)
        );