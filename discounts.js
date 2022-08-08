// ( P * ( 100 - d) ) / 100

const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const inputCoupon = document.querySelector('#coupon');
const calcDiscount = document.querySelector('#calcDiscount')
const applyCoupon = document.querySelector('#applyCoupon')
const result = document.querySelector('#result')

calcDiscount.addEventListener('click', finalPrice);
applyCoupon.addEventListener('click', finalPriceCoupon);

function finalPrice(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount){
        result.innerHTML = 'Price and Discount is out range of values, please verify it and try again'
        return
    }
    if(discount > 100){
        result.innerHTML = 'Discount of ' + discount + '% is out range of discounts, please verify it and try again'
        return
    }
    if(price <= 0){
        result.innerHTML = 'Price ' + price + ' is out range of prices, please verify it and try again'
        return
    }
    
    const finalPrice = ( price * ( 100 - discount ) ) / 100;
    inputPrice.value = '';
    inputDiscount.value = '';
    result.innerHTML = 'Price with discount: $' + finalPrice 
};


function finalPriceCoupon(){
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    let discount;

    if(coupon === 'ABC'){
        discount = 30
    } else if (coupon === 'DEF'){
        discount = 45
    } else {
        discount = 0
    }

    if(!price || !discount){
        result.innerHTML = 'Price and Discount is out range of values, please verify it and try again'
        return
    }
    if(discount > 100){
        result.innerHTML = 'Discount of ' + discount + '% is out range of discounts, please verify it and try again'
        return
    }
    if(price <= 0){
        result.innerHTML = 'Price ' + price + ' is out range of prices, please verify it and try again'
        return
    }
    
    const finalPrice = ( price * ( 100 - discount ) ) / 100;
    inputPrice.value = '';
    inputCoupon.value = '';
    result.innerHTML = 'Price with discount: $' + finalPrice 
};