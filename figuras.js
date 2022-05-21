//Código del cuadrado
console.group("Cuadrados");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
	return lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
	return lado * lado;
} 
//console.log("El area del cuadrado es: " + areaCuadrado + "cm^2");

console.groupEnd();

//Código del triangulo
console.group("Triangulos");
// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log("Los lados del triangulo miden: " 
// + ladoTriangulo1 + "cm, " 
// + ladoTriangulo2 + "cm, " 
// + baseTriangulo + "cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del Triangulo es de: " + alturaTriangulo + "cm");


function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
//console.log("El area del triangulo es: " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del circulo
console.group("Circulos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del circulo es: " + radioCirculo + "cm");

//Diametro
function diametroCirculo(radio) {
  return radio * 2;
}

//Pi
const pi = Math.PI;
console.log("PI es: " + pi);

//Circuferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * pi;
}

//area
function areaCirculo (radio) {
  return (radio * radio) * pi;
}

console.groupEnd();

//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("inputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const inputTriangulo1 = document.getElementById("inputTriangulo1");
  const value1 = inputTriangulo1.value;
  const inputTriangulo2 = document.getElementById("inputTriangulo2");
  const value2 = inputTriangulo2.value;
  const inputTriangulo3 = document.getElementById("inputTriangulo3");  
  const value3 = inputTriangulo3.value;

  const perimetro = perimetroTriangulo(value1, value2, value3);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input1 = document.getElementById("inputTriangulo1");
  const value1 = input1.value;
  const input2 = document.getElementById("inputTriangulo2");
  const value2 = input2.value;
  const input3 = document.getElementById("inputTriangulo3");
  const value3 = input3.value;  

  const area = areaTriangulo(input1, input2, input3);
  alert(area);
}

