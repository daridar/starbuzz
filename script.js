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
//popup










//sumup prices
let carts = document.querySelectorAll('.add-cart');

let products = [
    {   
        name: 'Blonde Espresso',
        tag: 'blonde',
        price: 155,
        inCart: 0
    },
    {   
        name: 'Holiday Blend',
        tag: 'holiday',
        price: 144,
        inCart: 0
    },
    {   
        name: 'House Blend',
        tag: 'house',
        price: 160,
        inCart: 0
    },
    {   
        name: 'Espresso Roast',
        tag: 'roast blend',
        price: 175,
        inCart: 0
    }
];

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.shopping span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.shopping span').textContent = productNumbers + 1;
    } else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.shopping span').textContent = 1;
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
    cartItems = {
        [product.tag]: product
    }
}
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product){
    //console.log("the products price is", product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log("my cartCost is", cartCost);

    if(cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    }
    else{
        localStorage.setItem('totalCost', product.price);
    }
}

function displayCart(){
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');
    let cartCost = localStorage.getItem('totalCost');

    console.log(cartItems)
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <img src="./img/${item.tag}.png" style="height:150px; width:150px">
                <p>${item.name}</p>
            </div>
            <div class="price">₴${item.price}</div>
            <div class="quantity">
            <img src="./img/arrow-left.png">
                <span>${item.inCart}</span>
                <img src="./img/arrow-right.png">
            </div>
            <div class="total">
            ₴${item.inCart * item.price}
            </div>
            `;
        });

        productContainer.innerHTML += `
        <div class="basketTotalContainer">
            <h4 class="basketTotalTitle">
                Усього:
            </h4>
            <h4 class="basketTotal">
                ₴${cartCost}
            </h4>
        </div>
        `
    }
}

onLoadCartNumbers();
displayCart();