
var carreritas = ["Lucia", "Roberto","Maria","Jesus","Andrea", "Jose"];



console.log(carreritas);

console.log("Andrea rebasa a Maria");
carreritas.splice(2,0,"Andrea");
carreritas.splice(5,1);
console.log(carreritas);



console.log("Se elimina a Jose de la carrera");
carreritas.splice(5,2);
console.log(carreritas);



console.log("Se clasifican 3 nuevos corredores detras de Lucia y antes de Roberto");
carreritas.splice(1,0,"Cristobal","Fernanda","Armando");
console.log(carreritas);

console.log("Nuevo concursante que toma el primer puesto");
carreritas.splice(0,0,"Federico");
console.log(carreritas);