/**
* en result, reflejar con un objeto literal la integración
* de los 2 objetos
*
* 
* output => {
    id:100,
    name:"foo",
    role:"admin",
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"],
    alias:"Super Alias"
}
*/
let foo = {
    id:100,
    name:"foo",
    role:"admin"
};

let bar = {
    skills:["javascript", "html", "css", "python", "flask", "react", "redux"],
    alias:"Super Alias"
}
let result = new Object();
Object.assign(result, foo, bar);
// Object.assign(destino, fuente 1, fuente 2)
// Este metodo, copia los elementos de uno o varios objetos fuente, a un objeto destino

console.log(result)

//export result
module.exports = result; 