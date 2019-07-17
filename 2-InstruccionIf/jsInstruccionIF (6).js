function mostrar()
{
    var edad = document.getElementById("edad").value;
    edad= parseInt(edad);
    if(edad>=18){
        alert("es mayor de edad");
    }
    else{if(edad >=13 && edad<=17){
        alert("es adolescente");
    }
        else{
            alert("niño");
        }
    }
}