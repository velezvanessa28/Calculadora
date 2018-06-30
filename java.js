var calcular = prompt('Que operacion deseas calcular?');

if(calcular == 'Volumen de un cilindro') {
	var radio = prompt('Radio');
	var altura = prompt('Altura');
	var exponente = radio *= radio;
	var pi = exponente *= 3.14159265359;
	var final = pi *= altura;
	alert("El volumen de tu cilindro es "+ final);
}

if (calcular == 'Transformar onzas a toneladas') {
	var onzas = prompt('Onzas');
	var toneladas = onzas * 0.0000283495;
	alert(onzas + ' Onzas equivalen a ' + toneladas);
}

	if(calcular == 'Factorizacion de un numero') {
		var fact = prompt('Numero a factorizar');

	}
 
