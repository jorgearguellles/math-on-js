// ( P * ( 100 - d) ) / 100

const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const calc = document.querySelector('#calc')
const result = document.querySelector('#result')

function finalPrice(){
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    console.log({price,discount})

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

calc.addEventListener('click', finalPrice);