/*Debemos realizar la carga de cuatro mascotas de una veterinaria, 
de cada una debo optener los siguientes datos: 
el tipo (validar "perro" o "gato") , 
la edad (validar entre 1 y 25),
el peso (validar entre 1 y 100) 
y el nombre. 
Se debe Informar al usuario lo siguiente: 
a) El promedio de los pesos totales. 
b) El nombre del perro mas viejo 
c) La cantidad animales menores a 10 kilos de mas de 10 años.
*/
function mostrar() {
  var tipo;
  var edad;
  var peso;
  var nombre;
  var contador;
  var acumulador;
  var promedioPesoTotal;
  var perroMasViejo;
  var nombreMasViejo;
  var menoresDe10KMasDe10Años;
  /*while (contador< 4)
  {
    contador ++;
    do {
      peso = prompt("ingrese el peso de la mascota")
    }  while (isNaN (peso)== true || peso >100 ||peso <1  );
  while (tipo)*/
  for (contador = 0; contador < 4; contador++) {
    nombre = prompt("ingrese el nombre de su mascota");
    tipo = prompt("ingrese el tipo de mascota");
    while (tipo != "perro" && tipo != "gato") {
      tipo = prompt("ERROR: Ingrese el tipo de mascota")
    }
    peso = prompt("ingrese el peso de la mascota");
    peso = parseInt(peso);
    while (isNaN(peso == true || peso < 1 || peso > 100)) {
      peso = prompt("ERROR: Ingrese el peso de la mascota)");
      peso = parseInt(pesp);
    }
    edad = prompt("ingrese la edad de la mascota");
    edad = parseInt(edad);
    while (isNaN(edad == true || edad < 1 || edad > 25));
    {
      edad = prompt("ERROR: Ingrese la edad de la mascota");
      edad = parseInt(edad);
    }
    
  }
  acumulador=acumulador+1;
if(tipo=="perro");
{
  if(nombreMasViejo==true)
    {
      perroMasViejo
    
    }
    else if()
}
}



