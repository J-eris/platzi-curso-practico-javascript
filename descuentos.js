// const precioOriginal = 120;
// const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
	const porcentajePrecioConDescuento = 100 - descuento;
	const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

	return precioConDescuento;
}

// const DescountCupon = [
// 	{
// 		name: "JuanDC_es_Batman",
// 		descount: 15,
// 	},
// 	{
// 		name: "pero_no_le_digas_a_nadie",
// 		descount: 30,
// 	},
// 	{
// 		name: "es_un_secreto",
// 		descount: 25,
// 	},
// 	];

function onclickPriceDescount() {
	const inputPrice = document.getElementById("inputPrice");
	const priceValue =inputPrice.value;

	const inputDescount = document.getElementById("inputDescount");
	const descountValue =inputDescount.value;

	// const inputDescountCupon = document.getElementById("inputDescountCupon");
	// const descountCuponValue =inputDescountCupon.value;

	const precioConDescuento = calcularPrecioConDescuento(priceValue, descountValue);

	const resultPrice = document.getElementById("resultPrice");
	resultPrice.innerText = "El precio con descuento son: $" + precioConDescuento;	
}


// console.log({
// 	precioOriginal,
// 	descuento,
// 	porcentajePrecioConDescuento,
// 	precioConDescuento
// });