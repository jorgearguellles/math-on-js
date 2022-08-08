// calc Prom using for
function calcPromFor(array){
    let totalValue = 0;
    for( let i = 0; i < array.length; i++ ){
        totalValue = totalValue + array[i];
    }
    const prom = totalValue/array.length;
    console.log({prom})
};

// Calc prom using reduce
function calcPromReduce(array){

    function plusAllElements(accumulateValue, newValue){
        return accumulateValue + newValue;
    }

    const totalValue = array.reduce(plusAllElements);
    const prom = totalValue/array.length;
    console.log({prom})
};

// Calc prom using reduce and arrow functions
function calcPromReduce(array){

    const plusAllElements = (accumulateValue, newValue) => accumulateValue + newValue;

    const totalValue = array.reduce(plusAllElements);
    const prom = totalValue/array.length;
    console.log({prom})
};