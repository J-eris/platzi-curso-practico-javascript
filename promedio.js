
function calcularMediaArimetica(lista) {
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];    
  }

  //*Segundo método de recorrer 
  // const sumaLista = lista.reduce(
  //   function (valorAcumulado = 0, nuevoElemento) {
  //     return valorAcumulado + nuevoElemento;
  //   }
  // );

  const promedioSumalista = sumaLista /lista.length;

  return promedioSumalista;

}