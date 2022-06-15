/**
* agregar las propiedades del objeto foo al array result, 
* cada propiedad dentro de un array, con 2 items, 
* que se representa con la clave y el valor
* debes utilizar for ó while
*
* 
* output => [["id",100], ["name","foo"], ["role","admin"]]
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};
let result = [];
let contador = 0;
let values = Object.values(foo)
for (let i in foo){
    let aux = [i,values[contador]];
    result[contador] = aux;
    contador += 1;
}
console.log(result);

//export result
module.exports = result; 