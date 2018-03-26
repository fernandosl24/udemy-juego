var squares = document.querySelectorAll(".square");
var numCuadros = Number(squares.length);
var colors = generateColors(numCuadros);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("ColorDisplay");
var mensaje = document.getElementById("mensaje");
var ache1 = document.getElementById("header");
var reiniciar = document.getElementById("reiniciar");
var facil = document.getElementById("facil");
var dificil = document.getElementById("dificil");
var valorpuntuacion = document.getElementById("valorpuntuacion")
var puntuacion = 0;

for(i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", evaluar);
};

facil.addEventListener("click",function(){
	numCuadros = 3;
	reiniciarJuego();
});

dificil.addEventListener("click",function(){
	numCuadros = 6;
	reiniciarJuego();
});

reiniciar.addEventListener("click",reiniciarJuego);

colorDisplay.textContent = pickedColor;


function changeColors(color){
	for(i=0;i<squares.length;i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var num = Math.floor(Math.random()*colors.length);
	return colors[num];	
}

function generateColors(num){
	var colors = [];

	for(i=0;i<num;i++){
		var num1 = Math.floor(Math.random()*256);
		var num2 = Math.floor(Math.random()*256);
		var num3 = Math.floor(Math.random()*256);

		strcolor = "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
		colors.push(strcolor);
	};

	return colors;
}

function reiniciarJuego(){
	for(i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].addEventListener("click", evaluar);
	};
	colors = generateColors(numCuadros);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		};
	ache1.style.backgroundColor = "steelblue";
	mensaje.textContent = "";
	reiniciar.textContent = "Reiniciar";

	if(numCuadros<4){
		facil.classList.add("selected");
		dificil.classList.remove("selected");
	} else {
		facil.classList.remove("selected");
		dificil.classList.add("selected");
	}
}};

function evaluar(){
		colorCuadrado = this.style.backgroundColor;
		if(pickedColor==colorCuadrado){
		for(i=0; i<squares.length; i++){
			squares[i].removeEventListener("click",evaluar);
		};
			mensaje.textContent = "Correcto!";
			changeColors(colorCuadrado);
			ache1.style.backgroundColor = colorCuadrado;
			reiniciar.textContent = "Jugar de nuevo?";
			mensaje.style.color = "steelblue";
			puntuacion = puntuacion + 10;
			valorpuntuacion.textContent = puntuacion;


		} else {
			this.removeEventListener("click",evaluar);
			this.style.backgroundColor = "#232323";
			mensaje.textContent = "Intentalo de Nuevo";
			mensaje.style.color = "steelblue";
			puntuacion = puntuacion - 2;
			valorpuntuacion.textContent = puntuacion;
		};
}