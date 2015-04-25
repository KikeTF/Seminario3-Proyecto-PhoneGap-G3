function consultarParrafos(){
	var parrafos = document.getElementsByTagName("p");
	for(var i=0;i<parrafos.length;i++){
		var parrafo = parrafos[i];
		alert(parrafo.firstChild.nodeValue);
	}
}

function consultarPersonas(){
	var resultado = document.getElementById("resultado");
	var html = '<table><thead><tr><th>C&Eacute;DULA</th><th>NOMBRES</th><th>APELLIDOS</th><th>EDAD</th></tr></thead><tbody><tr class="impar"><td>0999999991</td><td>JORGE</td><td>FERNANDEZ</td><td>20</td></tr><tr class="par"><td>0999999992</td><td>FELIPE</td><td>FERNANDEZ</td><td>30</td></tr><tr class="impar"><td>0999999993</td><td>PEDRO</td><td>HERNANDEz</td><td>40</td></tr><tr class="par"><td>0999999994</td><td>JORGE</td><td>FERNANDEZ</td><td>50</td></tr></tbody></table>';
	resultado.innerHTML = html;
}

function agregarParrafo(){
	var p = document.createElement("p")
	var texto = document.createTextNode("Texto agregado por funcion...");
	p.appendChild(texto);
	document.body.appendChild(p);
}

function agregarParrafo2(){
	var p = document.createElement("p")
	var texto = document.createTextNode("Texto agregado por funcion... (Atributos)");
	p.appendChild(texto);
	p.setAttribute("align","center");
	document.body.appendChild(p);
}

function moverIzquierda(){
	var p = document.getElementById("parrafo");
	var a = p.getAttribute("align");
	var n = "";
	if(a=="right"){
		n = "center";
	}else{
		n = "left";
	}
	p.setAttribute("align",n);
}

function moverDerecha(){
	var p = document.getElementById("parrafo");
	var a = p.getAttribute("align");
	var n = "";
	if(a=="left"){
		n = "center";
	}else{
		n = "right";
	}
	p.setAttribute("align",n);
}

function cargarCombo(){
	var c = document.getElementById("combo");
	var op = document.createTextNode("Opcion 1");
	c.appendChild(op);
}
/*
function crearTabla(){
	var resultado = document.getElementById("resultado");
	var f = document.getElementById("f").value;
	var c = document.getElementById("c").value;
	var tabla = document.createElement("table");
	
	for(var i=0;i<f;i++){
		var tr = document.createElement("tr");
		for(var j=0;j<c;j++){
			var td = document.createElement("td");
			var texto = document.createTextNode("FC");
			
		}       
		
		
	}
		

}*/