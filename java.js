var calcular = prompt('Que operacion deseas calcular? \n- Volumen de un cilindro \n- Transformar onzas a toneladas \n- Factorizacion de un numero');

if(calcular === 'Volumen de un cilindro') { 
	var radio = prompt('Radio');
	var altura = prompt('Altura');
	var exponente = Math.pow(radio,2);
	var pi = exponente *= Math.PI;
	var final = pi *= altura;
	alert("El volumen de tu cilindro es "+ final);
}

if (calcular === 'Transformar onzas a toneladas') {
	var onzas = prompt('Onzas');
	var toneladas = onzas * 0.0000283495;
	alert(onzas + ' Onzas equivalen a ' + toneladas);
}
	if(calcular === 'Factorizacion de un numero') {
		var fact = prompt('Numero a factorizar');
		var acumulador = 1;
		var ejem = 2;
			for(ejem; ejem <= fact; ejem++) {
			var factorizado = acumulador *= ejem;
			alert('Tu resultado es ' + factorizado);
		}
	}



 
