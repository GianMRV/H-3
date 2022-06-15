/**
* mediante el loop while agregar los valores
* de las claves [{a:1},{b:2},{c:3},{d:4},{e:5}]
* dentro del array result 
* 
* 
* output => [1,3,5]
*/

let arr = [{a:1},{b:2},{c:3},{d:4},{e:5}];
let result = [];
let aux = 0;

for (let i = 0; i < arr.length; i++){
    if (i % 2 == 1){
        continue
    }
    else{
        result[aux] = parseInt(Object.values(arr[i]));
        aux += 1;
    }
}

console.log(result)
 
//export result
module.exports = result; 