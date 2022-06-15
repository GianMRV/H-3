/**
* en result, reflejar con un objeto literal, la integración
* de los datos en un sola estructura
*
* 1) la propiedad name, modificar el valor a capital
* 2) la propiedad roles, implementar en 1 array con los items en mayúscula
* 3) la prapiedad skills, solo los items HTML y CSS van en mayúscula, del resto en capital
* 4) la porpiedad levels, transformar los valores de l-1 en L1
*  
*
* output => {
    id:100,
    name:"Foo",
    roles:["ADMIN","SUPER_USER","USER"],
    skills:["Git","Github","Javascript","HTML","CSS","Docker","Python","Flask","React","Redux","Deploy"],
    levels:[{LEVEL:"L1"},{LEVEL:"L2"}, {LEVEL:"L3"}]
}
*/
let foo = {
    id:100,
    name:"foo",
    roles:["admin"],
    skills:["javascript","html","css","python","flask","react","redux"],
    alias:"super alias"
};
let roleSuperUser = "SUPER_USER";
let roleUser = "USER";
let skills = ["git","github","docker","deploy"];
let levels = [{LEVEL:"l-1"},{LEVEL:"l-2"},{LEVEL:"l-3"}];

// Estructura basica del objeto result
let result = new Object();
Object.assign(result, foo); // Object.assign(destino, fuente)
delete result.alias;
result.name = result.name.charAt(0).toUpperCase() + result.name.slice(1); //modificar propiedad name
// Modificar propiedad roles
let aux = result.roles;
aux.splice(0,1,aux[0].toUpperCase());
aux.push(roleSuperUser);
aux.push(roleUser);
result.roles = aux;
// Modificar la propiedad skills
result.skills.splice(7,0,skills[3]);
result.skills.splice(3,0,skills[2]);
result.skills.splice(0,0,skills[1]);
result.skills.splice(0,0,skills[0]);
for (let i in result.skills){
    result.skills[i] = result.skills[i].charAt(0).toUpperCase() + result.skills[i].slice(1);
    if (result.skills[i] == "Html" || result.skills[i] == "Css"){
        result.skills[i] = result.skills[i].toUpperCase();
    }
}
// Modificar propiedad levels
for (let i in levels){
    levels[i].LEVEL = "L" + levels[i].LEVEL.slice(2);
}
result.levels = levels;
console.log(result)

//export result
module.exports = result; 