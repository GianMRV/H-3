/**
* mediante el loop for agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [2,3,4]
*/

let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];

let aux = arr.slice(1,4);
for (let i = 0; i < aux.length; i++){
    result[i] = parseInt(Object.values(aux[i]));
}

console.log(result)

//export result
module.exports = result;