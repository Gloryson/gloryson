
let products = {
    truePink:{colors:'#ff52b7', text:'TRUE PINK - bright and rich color. Just great.', price:'$8.99', buy:'Add+', category:'category_pink'},
    trueYellow:{colors:'#fcff00', text:'TRUE YELLOW - great color. Reminds me of the sun.', price:'$8.95', buy:'Add+', category:'category_yellow'},
    lightBlue:{colors:'#43c3ff', text:'LIGHT BLUE - very unusual and nice color.', price:'$9.95', buy:'Add+', category:'category_blue'},
    lightPink:{colors:'#ff8dd0', text:'LIGHT PINK - great muted color. Very calm.', price:'$9.27', buy:'Add+', category:'category_pink'},
    darkPink:{colors:'#82004c', text:'DARK PINK - great color for comfort.', price:'$9.75', buy:'Add+', category:'category_pink'},
    darkYellow:{colors:'#827d26', text:'DARK YELLOW - dark shades of yellow resemble brown.', price:'$9.07', buy:'Add+', category:'category_yellow'},
    trueBlue:{colors:'#008aff', text:'TRUE BLUE - nothing more - perfect color.', price:'$9.55', buy:'Add+', category:'category_blue'},
    lightYellow:{colors:'#feff84', text:'LIGHT YELLOW - very light and unobtrusive color.', price:'$8.79', buy:'Add+', category:'category_yellow'},
    darkBlue:{colors:'#003c6e', text:'DARK BLUE - great color for comfort and relaxation.', price:'$9.79', buy:'Add+', category:'category_blue'}
};





let order = [];
let catalog = document.querySelector('.catalog');
let buttonPink = document.querySelector('.pink');
let buttonBlue = document.querySelector('.blue');
let buttonYellow = document.querySelector('.yellow');
let buttonAll = document.querySelector('.all');
let cart = document.querySelector('.cart');
let cartNotEmpty = document.querySelector('.cart_not_empty');
let buyMenu = document.querySelector('.buy_menu');
let container = document.querySelector('.container');
let payd = document.querySelector('.payd');




function addProduct (key) {
    let product = document.createElement('div');
    product.classList.add('product');
    catalog.appendChild(product);

    let colors = document.createElement('p');
    colors.style.backgroundColor = products[key].colors;
    colors.classList.add('colors');
    product.appendChild(colors);

    let text = document.createElement('p');
    text.textContent = products[key].text;
    text.classList.add('text');
    product.appendChild(text);

    let price = document.createElement('p');
    price.textContent = products[key].price;
    price.classList.add('price');
    product.appendChild(price);

    let buy = document.createElement('p');
    buy.textContent = products[key].buy;
    buy.classList.add('buy');
    product.appendChild(buy);
    buy.addEventListener('click', function gg () {
        order.push(key);
        buy.removeEventListener('click', gg);
        buy.style.animation = 'none';
        buy.style.backgroundColor = '#000000';
        buy.textContent = 'Done';
        buy.style.color = '#777777';
        cartNotEmpty.style.visibility = 'visible';
        cartNotEmpty.textContent = order.length;
    });

    product.classList.add(products[key].category);

};





for (let i in products) {
    addProduct(i);
    
};





let categoryPink = document.querySelectorAll('.category_pink');
let categoryBlue = document.querySelectorAll('.category_blue');
let categoryYellow = document.querySelectorAll('.category_yellow');

buttonPink.addEventListener('click', function () {
    for (let i of categoryPink) {
        i.style.display = 'inline-block';
    };
    for (let i of categoryBlue) {
        i.style.display = 'none';
    };
    for (let i of categoryYellow) {
        i.style.display = 'none';
    };
});

buttonBlue.addEventListener('click', function () {
    for (let i of categoryBlue) {
        i.style.display = 'inline-block';
    };
    for (let i of categoryPink) {
        i.style.display = 'none';
    };
    for (let i of categoryYellow) {
        i.style.display = 'none';
    };
});

buttonYellow.addEventListener('click', function () {
    for (let i of categoryYellow) {
        i.style.display = 'inline-block';
    };
    for (let i of categoryPink) {
        i.style.display = 'none';
    };
    for (let i of categoryBlue) {
        i.style.display = 'none';
    };
});

buttonAll.addEventListener('click', function () {
    for (let i of categoryPink) {
        i.style.display = 'inline-block';
    };
    for (let i of categoryBlue) {
        i.style.display = 'inline-block';
    };
    for (let i of categoryYellow) {
        i.style.display = 'inline-block';
    };
});




function getNormalizePrice (str) {
    str = str.split(/[$]/).join('');
    return Number(str);
};

function getCostValue (arr) {
    let sum = 0;
    for (let i of arr) {
        sum += getNormalizePrice(products[i].price);
    };
    return sum.toFixed(2);
};





cart.addEventListener('click', function () {
    buyMenu.style.display = 'flex';
    let sum = 0;
    for (let i of order) {
        
        
    let purchase = document.createElement('div');
    purchase.classList.add('purchase');
    container.appendChild(purchase);

    let image = document.createElement('div');
    image.style.backgroundColor = products[i].colors;
    image.classList.add('image');
    purchase.appendChild(image);

    let feature = document.createElement('div');
    feature.textContent = products[i].text;
    feature.classList.add('feature');
    purchase.appendChild(feature);

    let buttonSpan = document.createElement('div');
    buttonSpan.classList.add('button-span');
    purchase.appendChild(buttonSpan);

    let pricePrice = document.createElement('p');
    pricePrice.classList.add('price-price');
    pricePrice.textContent = products[i].price;
    purchase.appendChild(pricePrice);

    let button1 = document.createElement('button');
    button1.classList.add('button1');
    button1.textContent = '-';
    buttonSpan.appendChild(button1);

    let buttonSpanSpan = document.createElement('span');
    buttonSpanSpan.classList.add('button-span-span')
    buttonSpanSpan.textContent = 1;
    buttonSpan.appendChild(buttonSpanSpan);

    let button2 = document.createElement('button');
    button2.classList.add('button2');
    button2.textContent = '+';
    buttonSpan.appendChild(button2);


        let counter = 1;

        sum += getNormalizePrice(products[i].price) * counter;

        button1.addEventListener('click', function () {
            if (counter > 0) {
                counter--;
                buttonSpanSpan.textContent = counter;
                pricePrice.textContent = '$' + (getNormalizePrice(products[i].price) * counter).toFixed(2);

                sum -= getNormalizePrice(products[i].price);

                payd.textContent = 'BUY $' + sum.toFixed(2);
                if (sum.toFixed(2) == -0.00) {
                    payd.textContent = '$ 0.00';
                    
                };
            };
        });

        button2.addEventListener('click', function () {
            if (counter < 10) {
                counter++;
                buttonSpanSpan.textContent = counter;
                pricePrice.textContent = '$' + (getNormalizePrice(products[i].price) * counter).toFixed(2);

                sum += getNormalizePrice(products[i].price);

                payd.textContent = 'BUY $' + sum.toFixed(2);
                
            };
        });

        

        payd.textContent = 'BUY $' + sum.toFixed(2);


        payd.addEventListener('click', function () {

            let block = document.querySelector('.block');

            if (payd.textContent !== '$ 0.00' && payd.textContent !== 'Сart is empty') {
                block.style.display = 'flex';
            };
            

        });


    };
});


let close = document.querySelector('.close');

close.addEventListener('click', function () {
    buyMenu.style.display = 'none';
    let purchases = document.querySelectorAll('.purchase');
    for (let i of purchases) {
        container.removeChild(i);
    }
});


















