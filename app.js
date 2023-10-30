
const img = document.querySelector('#main-pic');
let imgCounter = 1;
let thumbImg1 = document.querySelector('#thumb-1');
let thumbImg2 = document.querySelector('#thumb-2');
let thumbImg3 = document.querySelector('#thumb-3');
let thumbImg4 = document.querySelector('#thumb-4');
let counter = 0;
let amount = document.querySelector('#amount-counter');
const subtractCounter = document.querySelector('#subtract-counter');
let emptyMessage = document.querySelector('#cart-empty');
let cartProductContainer= document.querySelector('#cart-product-container'); 
let addCounter = document.querySelector('#add-counter');
let addCartBtn = document.querySelector('#add-cart-btn');
let cartParagraph = document.querySelector('#cart-p');
let trashCart = document.querySelector('#trash');
const strongP = document.querySelector('#strong-p');
const next = document.querySelector('#next-btn');
const prev = document.querySelector('#prev-btn');
const nextMobile = document.querySelector('#next-btn-mobile');
const prevMobile = document.querySelector('#prev-btn-mobile');
const menuMobileIcon = document.querySelector('#menu-mobile-icon');
const menuMobile = document.querySelector('#menu-mobile');
const closeMobileIcon = document.querySelector('#close-icon-mobile');
const lightBoxMobile = document.querySelector('#lightbox-mobile');


next.addEventListener('click', function(){
    if (imgCounter < 4){
    imgCounter += 1;
    }
    else {
        imgCounter = 1;
    }
    changeImg(imgCounter);
});

nextMobile.addEventListener('click', function(){
    if (imgCounter < 4){
    imgCounter += 1;
    }
    else {
        imgCounter = 1;
    }
    changeImg(imgCounter);
});



prev.addEventListener('click', function(){
    if (imgCounter > 1){
    imgCounter -= 1;
    }
    else {
        imgCounter = 4;
    }
    changeImg(imgCounter);
});

prevMobile.addEventListener('click', function(){
    if (imgCounter > 1){
    imgCounter -= 1;
    }
    else {
        imgCounter = 4;
    }
    changeImg(imgCounter);
});







subtractCounter.addEventListener('click', function(){
    if (counter > 0){
    counter -= 1;
    amount.textContent = counter;
    }
});

addCounter.addEventListener('click', function(){
    counter += 1;
    amount.textContent = counter;
});



function changeImg (imgCounter){
    const img = document.querySelector('#main-pic');
    let lightBoxImg = document.querySelector('#lightbox-pic');
    let imgMobile = document.querySelector('#main-pic-mobile');

    switch  (imgCounter){
        case 1:
            img.src = 'images/image-product-1.jpg';
            lightBoxImg.src = 'images/image-product-1.jpg';
            imgMobile.src = 'images/image-product-1.jpg';
            break
        case 2:
            img.src = 'images/image-product-2.jpg';
            lightBoxImg.src = 'images/image-product-2.jpg';
            imgMobile.src = 'images/image-product-2.jpg';
            break
        case 3:
            img.src= 'images/image-product-3.jpg';
            lightBoxImg.src = 'images/image-product-3.jpg';
            imgMobile.src = 'images/image-product-3.jpg';
            break
        case 4:
            img.src = 'images/image-product-4.jpg';
            lightBoxImg.src = 'images/image-product-4.jpg';
            imgMobile.src = 'images/image-product-4.jpg';
            break
        
    }    
};


addCartBtn.addEventListener('click', function(){
    let price = counter + 'X    ';
    let totalPrice = 250.00 * counter;

    if (counter > 0){

    emptyMessage.classList.remove('show');
    emptyMessage.classList.add('hide');

    cartProductContainer.classList.remove('hide');
    cartProductContainer.classList.add('show');


    cartParagraph.textContent = '$ 125.00' + ' ' + price;
    strongP.textContent = '$ ' + totalPrice + '.00';
    }


})


function showLightBox (){
    const img = document.querySelector('#main-pic');
    let lightBoxImg = document.querySelector('#lightbox-pic');
    let lightBox = document.querySelector('#lightbox');

    lightBox.classList.remove('hide');
    lightBox.classList.add('show');

    lightBoxImg.src = img.src;


}


function hideLightBox (){

    const img = document.querySelector('#main-pic');
    let lightBoxImg = document.querySelector('#lightbox-pic');
    let lightBox = document.querySelector('#lightbox');

    lightBox.classList.remove('show');
    lightBox.classList.add('hide');

}

function showCartBox (){
    const cartBox = document.querySelector('#cart-box');


    cartBox.classList.toggle('hide');
    cartBox.classList.toggle('show');

}



trashCart.addEventListener('click', function(){

    emptyMessage.classList.remove('hide');
    emptyMessage.classList.add('show');

    cartProductContainer.classList.remove('show');
    cartProductContainer.classList.add('hide');

    counter = 0;

})



menuMobileIcon.addEventListener('click', function(){
    menuMobile.classList.remove('hide');
    menuMobile.classList.add('show');
    lightBoxMobile.classList.remove('hide');
    lightBoxMobile.classList.add('show');
})


closeMobileIcon.addEventListener('click', function(){
    menuMobile.classList.remove('show');
    menuMobile.classList.add('hide');
    lightBoxMobile.classList.remove('show');
    lightBoxMobile.classList.add('hide');
})