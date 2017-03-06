function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}}}}

enviar.addEventListener('click', function datos(event){
			event.preventDefault();

			var enviar 	= document.getElementById('enviar').value;
			var records = document.getElementById('records').value;
			var uno 		= document.getElementById('uno').value;
			var dos			= document.getElementById('dos').value;
			var tres 		= document.getElementById('tres').value;
			var cuatro 	= document.getElementById('cuatro').value;
			var cinco 	= document.getElementById('cinco').value;
			var seis 		= document.getElementById('seis').value;
			var siete 	= document.getElementById('siete').value;
			var ocho 		= document.getElementById('ocho').value;
			var nueve 	= document.getElementById('nueve').value;
			var enviar 	= document.getElementById('enviar').value;
			var records = document.getElementById('records').value;
			var diez 		= document.getElementById('diez').value;
			var once		= document.getElementById('once').value;
			var doce 		= document.getElementById('doce').value;
			var trece 	= document.getElementById('trece').value;
			var catorce = document.getElementById('catorce').value;
			var quince 			= document.getElementById('quince').value;
			var dieciseis 	= document.getElementById('dieciseis').value;
			var diecisiete 	= document.getElementById('diecisiete').value;
			var dieciocho 	= document.getElementById('dieciocho').value;

			var coders  = document.getElementById('coders').value;

				if(uno != " " && cinco != " " && nueve !=" "){
					alert("¡Felicitciones, 3 respuestas correctas!")
					;}

				if(diez != " " && trece != " " && diecisiete != " "){
					alert("¡Felicitciones, 3 respuestas correctas!")
				;}
				}


			});
