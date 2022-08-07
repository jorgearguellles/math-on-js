//Class 1
// Square
console.group('Square')
const squareSide = 5;
const squarePerimeter = squareSide * 4 + 'cm';
const squareArea = squareSide * squareSide + 'cm2';
console.log({squareSide, squarePerimeter, squareArea})

function squareCalcs(side){
    return{
        perimeter: side * 4 + 'cm',
        area: side * side + 'cm2'
    };
};
console.groupEnd('Square')

//Triangle
console.group('Triangle')
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleSideBase = 4;
const triangleHeight = 5.5;
const trianglePerimeter = triangleSide1 + triangleSide2 + triangleSideBase + 'cm';
const triangleArea = ( triangleSideBase * triangleHeight ) / 2
console.log({triangleSide1, triangleSide2, triangleSideBase, triangleHeight,trianglePerimeter, triangleArea})

function triangleCalcs(side1, side2, base, height){
    return{
        perimeter: side1 + side2 + base + 'cm',
        area: ( base * height ) / 2 + 'cm2'
    };
};
console.groupEnd('Triangle')

// Class 2
// Circle
console.group('Circle');
const circleRadio = 5;
const circleDiameter = circleRadio * 2;

const circlePerimeter = circleDiameter * Math.PI;
const circleArea = (circleRadio * circleRadio) * Math.PI;
// const circleArea2 = (circleRadio ** 2) * Math.PI;
// const circleArea3 = Math.pow(radio,2) * Math.PI;

console.log({circleRadio, circleDiameter, circlePerimeter, circleArea});

function circleCalcs(radio){
    return{
        diameter: radio * 2,
        perimeter: ((radio * 2) * Math.PI).toFixed(3),
        area: (Math.pow(radio,2) * Math.PI).toFixed(3)
    }
}
console.groupEnd('Circle');

// Class 3

function triangleH(side,base){
    if(side == base){
        console.warn('This is not a Isosceles triangle, please verify it');
        return
    };

    return Math.sqrt( (Math.pow(side,2)) - (Math.pow(base,2) / 4) )
};

// Challenge Scalene Triangle Height calc
function compareNumbers(a, b) {
    return a - b;
};

function scaleneTriangleH(side1, side2, side3){
    const semiPerimeter = ( side1 + side2 + side3 ) / 2;
    const sideArray = [side1,side2,side3];
    const [a,b,c] = sideArray.sort(compareNumbers);

    return (2 / a)*(Math.sqrt( semiPerimeter * (semiPerimeter-a) * (semiPerimeter-b) * (semiPerimeter-c) ))
};