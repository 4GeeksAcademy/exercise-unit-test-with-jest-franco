
let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
};


function fromEuroToDollar(euro) {
    return euro * oneEuroIs.USD;
}

function fromDollarToYen(dollar) {
    let euro = dollar / oneEuroIs.USD;
    let yen = euro * oneEuroIs.JPY;
    return yen;
}


function fromYenToPound(yen) {
    let euro = yen / oneEuroIs.JPY;
    let pound = euro * oneEuroIs.GBP;
    return pound;
}

const sum = (a, b) => {
    return a + b;
};

console.log(sum(7, 3));

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
