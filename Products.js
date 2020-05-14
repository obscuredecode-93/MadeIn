const products = [
    {name: "Stainless 10\"", weight: 1.5, price: 65, size: 10, id: 12},
    {name: "Stainless 12\"", weight: 1.8, price: 85, size: 12, id: 13},
    {name: "Carbon Steel 10\"", weight: 1.5, price: 75, size: 10, id: 23},
    {name: "Carbon Steel 12\"", weight: 1.95, price: 75, size: 12, id: 24},
    {name: "Nonstick 10\"", weight: 2.0, price: 70, size: 10, id: 3},
    {name: "Nonstick 12\"", weight: 2.0, price: 70, size: 12, id: 4}
  ]

greaterThanOrEqualTo75 =() => {
    //filter is an array function which returns all values for which the expression evaluates to "true"
    return products.filter(product => product.price >= 75)
}

greaterThan1point8 =() => {
    return products.filter(product => product.weight >= 1.8)
}
convertToObject=() => {
    //map is an array function which performs  callback processing for each element in the array
    return products.map((product) => {
        let result ={};
        result[product.id] = {name:product.name,weight:product.weight,price:product.price,size:product.size};
        return result;
    });
}
console.log(`Greater than or equal to 75 ${JSON.stringify(greaterThanOrEqualTo75(),0,2)}`);
console.log(`Greater than 1.8 ${JSON.stringify(greaterThanOrEqualTo75(),0,2)}`);
console.log(`Convert to object${JSON.stringify(convertToObject(),0,2)}`);

