#include <stdio.h>
#include <stdlib.h>

int main()
{
 int dinero;
 char tipo;
 float promedioPositivo;
 int contador;
 int maximoImporteEnDolar;
 int esElPrimerDolar;

 contador =0;
 esElPrimerDolar=1;

 while(contador<10){
    contador++;
    printf("ingrese dinero:");
    scanf("&d", &dinero );
    printf("ingrese tipo:");
    fflush(stdin);
    scanf("&c", &tipo);

     if(tipo=='d')
     {
         if(esElPrimerDolar)
            {
                maximoImporteEnDolar=dinero;
                esElPrimerDolar=0;
            }else{
                if(dinero<maximoImporteEnDolar)
                {
                    maximoImporteEnDolar=dinero;
                }
            }
     }
 }
    printf("el importe maximo en dolares es: &d",maximoImporteEnDolar);

    return 0;
}
