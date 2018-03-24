var colors = generateColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("ColorDisplay");
var mensaje = document.getElementById("mensaje");
var ache1 = document.getElementById("header");
var reiniciar = document.getElementById("reiniciar");
var facil = document.getElementById("facil");
var dificil = document.getElementById("dificil");

facil.addEventListener("click",function(){
	facil.classList.add("selected");
	dificil.classList.remove("selected");
	colors = generateColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i=0; i<squares.length; i++){
		if(i<3){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.backgroundColor = "#232323";
		}
		
	};
	ache1.style.backgroundColor = "#232323";
	mensaje.textContent = "";
	reiniciar.textContent = "Reiniciar";
});

dificil.addEventListener("click",function(){
	facil.classList.remove("selected");
	dificil.classList.add("selected");
	reiniciarJuego();
});

reiniciar.addEventListener("click",reiniciarJuego);

colorDisplay.textContent = pickedColor;

for(i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		colorCuadrado = this.style.backgroundColor;
		if(pickedColor==colorCuadrado){
			mensaje.textContent = "Correcto!";
			changeColors(colorCuadrado);
			ache1.style.backgroundColor = colorCuadrado;
			reiniciar.textContent = "Jugar de nuevo?";

		} else {
			this.style.backgroundColor = "#232323";
			mensaje.textContent = "Intentalo de Nuevo";
		};
	});
};

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
	colors = generateColors(6);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	};
	ache1.style.backgroundColor = "#232323";
	mensaje.textContent = "";
	reiniciar.textContent = "Reiniciar";
	dificil.classList.add("selected");
	facil.classList.remove("selected");
}