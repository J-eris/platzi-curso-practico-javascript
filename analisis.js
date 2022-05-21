//Funciones Helpers
function esPar(numero) {
	if (numero % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

function calcularMediaArimetica(lista) {
  let sumaLista = 0;
  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];    
  };

  const promedioSumalista = sumaLista /lista.length;

  return promedioSumalista;

}

//Calculadora de mediana
function medianaSalariosCol(lista) {
	const mitad = parseInt(lista.length / 2);

	if (esPar(lista.length)) {
		const personaMitad1 = lista[mitad - 1];
		const personaMitad2 = lista[mitad];

		const mediana = calcularMediaArimetica([personaMitad1, personaMitad2]);
		return mediana;
	} else {
		const personaMitad = lista[mitad];
		return personaMitad;
	}
}

//Mediana General
const salariosCol =colombia.map(
	function (persona) {
		return persona.salary;
	}
);

const salariosColSorted = salariosCol.sort(
	function (salaryA, salaryB) {
		return salaryA - salaryB;
	}
);

const medianaGeneralCol = medianaSalariosCol(salariosColSorted);

//Mediana del top 10
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;

const salariosColTop10 = salariosColSorted.splice(
	spliceStart,
	spliceCount,
);

const medianaTop10Col = medianaSalariosCol(salariosColTop10);

console.log({
	medianaGeneralCol,
	medianaTop10Col,
});

