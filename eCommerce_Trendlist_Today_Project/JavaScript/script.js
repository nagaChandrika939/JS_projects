/* ------------------------------------------------------- Header Logic here ----------------------------------------------------------------*/
function Header(para1, para2, para3) {
    document.querySelector(para1).style.display = 'block';
    document.querySelector(para2).setAttribute('class', para3);
}
// Toggle-bar Event-Listener
document.getElementById('toggle-bar').addEventListener('click', function (event) {
    Header('.toggle-bar-list', '#toggle-bar', 'fa-solid fa-xmark');
    document.querySelector('.profile-list').style.display = 'none';
});

// profile-icon Event-Listener
document.getElementById('profile-icon').addEventListener('click', function (event) {
    Header('.profile-list', '#profile-icon', 'fa-solid fa-user');
    document.querySelector('.toggle-bar-list').style.display = 'none';
    document.querySelector('#toggle-bar').setAttribute('class', 'fa-solid fa-bars');
});

// Removing Toggle-bar list and profile-icon
document.querySelector('.banner').addEventListener('click', function () {
    document.querySelector('.toggle-bar-list').style.display = 'none';
    document.querySelector('#toggle-bar').setAttribute('class', 'fa-solid fa-bars');
    document.querySelector('.profile-list').style.display = 'none';
});
// let bar_icon=document.querySelector(".toggle-bar");
// let is_clicked=true;
// bar_icon.addEventListener('click',function(e){
    
//     if(is_clicked==true){
//         bar_icon.setAttribute('class',"fa-solid fa-x fa-sm");
//         document.querySelector('.toggle-bar-list').style.display='block';
//         is_clicked=false;
//     }else{
//         bar_icon.setAttribute('class',"fa-solid fa-bars fa-sm");
//         document.querySelector('.toggle-bar-list').style.display='none';
//         is_clicked=true;
//     }
// })
/* ------------------------------------------------------- Banner Logic Here -------------------------------------------------------------*/
let radioButtons = document.querySelectorAll('.input-radio');
let banner = document.querySelector('.banner');
let prevBanner = document.querySelector('.banner-prev');
let nextBanner = document.querySelector('.banner-next');
let currentValue = 0;
let previousRadio = `<input type="radio" name="carousel1" class="input-radio">`;

// Inside Banner radio buttons shift.........................................................................
radioButtons.forEach((presentRadio, index) => {
    presentRadio.addEventListener('click', function () {
        banner.style.backgroundImage = `url('../Assets/banner-${index + 1}.jpg')`;
        if (previousRadio !== presentRadio) {
            previousRadio.checked = false;
            previousRadio = presentRadio;
        }
        currentValue = index;
    })
})

// Inside Banner previous buttons shift.......................................................................
prevBanner.addEventListener('click', function () {
    currentValue--;
    if (currentValue >= 0) {
        banner.style.backgroundImage = `url('../Assets/banner-${currentValue + 1}.jpg')`;
    }
    else {
        currentValue = radioButtons.length - 1;
        banner.style.backgroundImage = `url('../Assets/banner-${currentValue + 1}.jpg')`;
    }
    if (previousRadio !== radioButtons[currentValue]) {
        previousRadio.checked = false;
        radioButtons[currentValue].checked = true;
        previousRadio = radioButtons[currentValue];
    }
});

// Inside Banner next buttons shift............................................................................
nextBanner.addEventListener('click', function () {
    currentValue++;
    if (currentValue <= radioButtons.length - 1) {
        banner.style.backgroundImage = `url('../Assets/banner-${currentValue + 1}.jpg')`;
    }
    else {
        currentValue = 0;
        banner.style.backgroundImage = `url('../Assets/banner-${currentValue + 1}.jpg')`;
    }
    if (previousRadio !== radioButtons[currentValue]) {
        previousRadio.checked = false;
        radioButtons[currentValue].checked = true;
        previousRadio = radioButtons[currentValue];
    }
});

/* -----------------------------------------Section-6 Oculus Quest's------------------------------------------------ */
let oculusArray = [
    {
        imagePath: './Assets/product-2.jpg',
        imageTitle: 'Oculus Quest',
        imageDescription: 'All in one gaming headset with lightweight flexible design',
        imagePrice: 399
    }
];
let section6Img = document.querySelectorAll('.section6-img');
let section6P1 = document.querySelectorAll('.section6-p1');
let section6P2 = document.querySelectorAll('.section6-p2');
let section6Icon = document.getElementsByName('price-icon');

for (let i = 0; i < section6Img.length; i++) {
    section6Img[i].setAttribute('src', oculusArray[0].imagePath);
    section6P1[i].innerHTML = oculusArray[0].imageTitle;
    section6P2[i].innerHTML = oculusArray[0].imageDescription;
    section6Icon[i].innerHTML = ' ' + oculusArray[0].imagePrice;
}

// Section-6 Oculus Quest's Add to Cart to cart icon
let addToCart = document.querySelectorAll('.Add-to-cart');
let cartHtml = document.querySelector('.cart-value');
let cartValue = +(localStorage.getItem('storageValue'));
cartHtml.innerHTML = cartValue;

addToCart.forEach((cart) => {
    cart.addEventListener('click', function () {
        if(cartValue===50){
            localStorage.setItem('storageValue', 0);
            cartHtml.innerHTML = 0;
        }
        else{
            cartValue++;
            cartHtml.innerHTML = cartValue;
            localStorage.setItem('storageValue', cartValue);
        }
    });
});
