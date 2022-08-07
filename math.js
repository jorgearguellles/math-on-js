// Square perimeter
const squareSide = 5;
const squarePerimeter = squareSide * 4 + 'cm';
const squareArea = squareSide * squareSide + 'cm2';
console.log({squareSide, squarePerimeter, squareArea})

function squareCalcs(side){
    return{
        perimeter: side * 4 + 'cm',
        area: side * side
    }
}

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
        area: ( base * height ) / 2
    }
}