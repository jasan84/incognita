var codigoGenerado=[];
var codigoCodificado=[];
var codigoIngresado = [];
var codigoDecodificado=[];
var clave=0;


/*
  ----------------------------------------------------------------------------------------------
  |																								|
  |											MAQUINA 1											|
  |																								|
  ----------------------------------------------------------------------------------------------
  */


/* +++++++++++++++++++++++++++++++++++++ FUNCIONES CLAVES +++++++++++++++++++++++++++++++++++++ */

function clave1Generar(){
	clave=1;

	clave1Gen.style.transform="rotate(-45deg)";
	clave1Gen.style.transition="ease 0.5s";

	clave2Gen.style="";
	clave2Gen.style.transition="ease 0.2s";

	clave3Gen.style="";
	clave3Gen.style.transition="ease 0.2s";

}

function clave2Generar(){
	clave=2;

	clave2Gen.style.transform="rotate(-45deg)";
	clave2Gen.style.transition="ease 0.5s";

	clave1Gen.style="";
	clave1Gen.style.transition="ease 0.2s";

	clave3Gen.style="";
	clave3Gen.style.transition="ease 0.2s";
}

function clave3Generar(){
	clave=3;

	clave3Gen.style.transform="rotate(-45deg)";
	clave3Gen.style.transition="ease 0.5s";

	clave1Gen.style="";
	clave1Gen.style.transition="ease 0.2s";

	clave2Gen.style="";
	clave2Gen.style.transition="ease 0.2s";
}

/* ------------------------------------- FUNCIONES CLAVES ------------------------------------- */

/* +++++++++++++++++++++++++++++++++++++ FUNCIONES LETRAS +++++++++++++++++++++++++++++++++++++ */

function letraQ(){
	mensajeGenerado.innerHTML+="<p>"+(Qgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("D");
		mensajeCodificado.innerHTML+="D";
	}

	if(clave == 2){
		codigoCodificado.push("S");
		mensajeCodificado.innerHTML+="S";
	}

	if(clave == 3){
		codigoCodificado.push("J");
		mensajeCodificado.innerHTML+="J";
	}
}

function letraW(){
	mensajeGenerado.innerHTML+="<p>"+(Wgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("N");
		mensajeCodificado.innerHTML+="N";
	}

	if(clave == 2){
		codigoCodificado.push("T");
		mensajeCodificado.innerHTML+="T";
	}

	if(clave == 3){
		codigoCodificado.push("B");
		mensajeCodificado.innerHTML+="B";
	}
}

function letraE(){
	mensajeGenerado.innerHTML+="<p>"+(Egen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("L");
		mensajeCodificado.innerHTML+="L";
	}

	if(clave == 2){
		codigoCodificado.push("B");
		mensajeCodificado.innerHTML+="B";
	}

	if(clave == 3){
		codigoCodificado.push("Z");
		mensajeCodificado.innerHTML+="Z";
	}
}

function letraR(){
	mensajeGenerado.innerHTML+="<p>"+(Rgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("G");
		mensajeCodificado.innerHTML+="G";
	}

	if(clave == 2){
		codigoCodificado.push("X");
		mensajeCodificado.innerHTML+="X";
	}

	if(clave == 3){
		codigoCodificado.push("I");
		mensajeCodificado.innerHTML+="I";
	}
}

function letraT(){
	mensajeGenerado.innerHTML+="<p>"+(Tgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("B");
		mensajeCodificado.innerHTML+="B";
	}

	if(clave == 2){
		codigoCodificado.push("G");
		mensajeCodificado.innerHTML+="G";
	}

	if(clave == 3){
		codigoCodificado.push("V");
		mensajeCodificado.innerHTML+="V";
	}
}

function letraY(){
	mensajeGenerado.innerHTML+="<p>"+(Ygen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("F");
		mensajeCodificado.innerHTML+="F";
	}

	if(clave == 2){
		codigoCodificado.push("Q");
		mensajeCodificado.innerHTML+="Q";
	}

	if(clave == 3){
		codigoCodificado.push("O");
		mensajeCodificado.innerHTML+="O";
	}
}

function letraU(){
	mensajeGenerado.innerHTML+="<p>"+(Ugen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("I");
		mensajeCodificado.innerHTML+="I";
	}

	if(clave == 2){
		codigoCodificado.push("E");
		mensajeCodificado.innerHTML+="E";
	}

	if(clave == 3){
		codigoCodificado.push("C");
		mensajeCodificado.innerHTML+="C";
	}
}

function letraI(){
	mensajeGenerado.innerHTML+="<p>"+(Igen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("T");
		mensajeCodificado.innerHTML+="T";
	}

	if(clave == 2){
		codigoCodificado.push("J");
		mensajeCodificado.innerHTML+="J";
	}

	if(clave == 3){
		codigoCodificado.push("W");
		mensajeCodificado.innerHTML+="W";
	}
}

function letraO(){
	mensajeGenerado.innerHTML+="<p>"+(Ogen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("V");
		mensajeCodificado.innerHTML+="V";
	}

	if(clave == 2){
		codigoCodificado.push("F");
		mensajeCodificado.innerHTML+="F";
	}

	if(clave == 3){
		codigoCodificado.push("G");
		mensajeCodificado.innerHTML+="G";
	}
}

function letraP(){
	mensajeGenerado.innerHTML+="<p>"+(Pgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("E");
		mensajeCodificado.innerHTML+="E";
	}

	if(clave == 2){
		codigoCodificado.push("L");
		mensajeCodificado.innerHTML+="L";
	}

	if(clave == 3){
		codigoCodificado.push("D");
		mensajeCodificado.innerHTML+="D";
	}
}




function letraA(){
	mensajeGenerado.innerHTML+="<p>"+(Agen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("R");
		mensajeCodificado.innerHTML+="R";
	}

	if(clave == 2){
		codigoCodificado.push("D");
		mensajeCodificado.innerHTML+="D";
	}

	if(clave == 3){
		codigoCodificado.push("Ñ");
		mensajeCodificado.innerHTML+="Ñ";
	}
}

function letraS(){
	mensajeGenerado.innerHTML+="<p>"+(Sgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("C");
		mensajeCodificado.innerHTML+="C";
	}

	if(clave == 2){
		codigoCodificado.push("N");
		mensajeCodificado.innerHTML+="N";
	}

	if(clave == 3){
		codigoCodificado.push("F");
		mensajeCodificado.innerHTML+="F";
	}
}

function letraD(){
	mensajeGenerado.innerHTML+="<p>"+(Dgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("Z");
		mensajeCodificado.innerHTML+="Z";
	}

	if(clave == 2){
		codigoCodificado.push("Y");
		mensajeCodificado.innerHTML+="Y";
	}

	if(clave == 3){
		codigoCodificado.push("X");
		mensajeCodificado.innerHTML+="X";
	}
}

function letraF(){
	mensajeGenerado.innerHTML+="<p>"+(Fgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("Y");
		mensajeCodificado.innerHTML+="Y";
	}

	if(clave == 2){
		codigoCodificado.push("R");
		mensajeCodificado.innerHTML+="R";
	}

	if(clave == 3){
		codigoCodificado.push("S");
		mensajeCodificado.innerHTML+="S";
	}
}

function letraG(){
	mensajeGenerado.innerHTML+="<p>"+(Ggen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("U");
		mensajeCodificado.innerHTML+="U";
	}

	if(clave == 2){
		codigoCodificado.push("Ñ");
		mensajeCodificado.innerHTML+="Ñ";
	}

	if(clave == 3){
		codigoCodificado.push("E");
		mensajeCodificado.innerHTML+="E";
	}
}

function letraH(){
	mensajeGenerado.innerHTML+="<p>"+(Hgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("K");
		mensajeCodificado.innerHTML+="K";
	}

	if(clave == 2){
		codigoCodificado.push("P");
		mensajeCodificado.innerHTML+="P";
	}

	if(clave == 3){
		codigoCodificado.push("T");
		mensajeCodificado.innerHTML+="T";
	}
}

function letraJ(){
	mensajeGenerado.innerHTML+="<p>"+(Jgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("M");
		mensajeCodificado.innerHTML+="M";
	}

	if(clave == 2){
		codigoCodificado.push("I");
		mensajeCodificado.innerHTML+="I";
	}

	if(clave == 3){
		codigoCodificado.push("A");
		mensajeCodificado.innerHTML+="A";
	}
}

function letraK(){
	mensajeGenerado.innerHTML+="<p>"+(Kgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("P");
		mensajeCodificado.innerHTML+="P";
	}

	if(clave == 2){
		codigoCodificado.push("M");
		mensajeCodificado.innerHTML+="M";
	}

	if(clave == 3){
		codigoCodificado.push("N");
		mensajeCodificado.innerHTML+="N";
	}
}

function letraL(){
	mensajeGenerado.innerHTML+="<p>"+(Lgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("X");
		mensajeCodificado.innerHTML+="X";
	}

	if(clave == 2){
		codigoCodificado.push("C");
		mensajeCodificado.innerHTML+="C";
	}

	if(clave == 3){
		codigoCodificado.push("M");
		mensajeCodificado.innerHTML+="M";
	}
}

function letraÑ(){
	mensajeGenerado.innerHTML+="<p>"+(Ñgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("Q");
		mensajeCodificado.innerHTML+="Q";
	}

	if(clave == 2){
		codigoCodificado.push("A");
		mensajeCodificado.innerHTML+="A";
	}

	if(clave == 3){
		codigoCodificado.push("P");
		mensajeCodificado.innerHTML+="P";
	}
}




function letraZ(){
	mensajeGenerado.innerHTML+="<p>"+(Zgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("Ñ");
		mensajeCodificado.innerHTML+="Ñ";
	}

	if(clave == 2){
		codigoCodificado.push("K");
		mensajeCodificado.innerHTML+="K";
	}

	if(clave == 3){
		codigoCodificado.push("Q");
		mensajeCodificado.innerHTML+="Q";
	}
}

function letraX(){
	mensajeGenerado.innerHTML+="<p>"+(Xgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("A");
		mensajeCodificado.innerHTML+="A";
	}

	if(clave == 2){
		codigoCodificado.push("W");
		mensajeCodificado.innerHTML+="W";
	}

	if(clave == 3){
		codigoCodificado.push("K");
		mensajeCodificado.innerHTML+="K";
	}
}

function letraC(){
	mensajeGenerado.innerHTML+="<p>"+(Cgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("O");
		mensajeCodificado.innerHTML+="O";
	}

	if(clave == 2){
		codigoCodificado.push("H");
		mensajeCodificado.innerHTML+="H";
	}

	if(clave == 3){
		codigoCodificado.push("Y");
		mensajeCodificado.innerHTML+="Y";
	}
}

function letraV(){
	mensajeGenerado.innerHTML+="<p>"+(Vgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("J");
		mensajeCodificado.innerHTML+="J";
	}

	if(clave == 2){
		codigoCodificado.push("V");
		mensajeCodificado.innerHTML+="V";
	}

	if(clave == 3){
		codigoCodificado.push("U");
		mensajeCodificado.innerHTML+="U";
	}
}

function letraB(){
	mensajeGenerado.innerHTML+="<p>"+(Bgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("H");
		mensajeCodificado.innerHTML+="H";
	}

	if(clave == 2){
		codigoCodificado.push("Z");
		mensajeCodificado.innerHTML+="Z";
	}

	if(clave == 3){
		codigoCodificado.push("L");
		mensajeCodificado.innerHTML+="L";
	}
}

function letraN(){
	mensajeGenerado.innerHTML+="<p>"+(Ngen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("W");
		mensajeCodificado.innerHTML+="W";
	}

	if(clave == 2){
		codigoCodificado.push("U");
		mensajeCodificado.innerHTML+="U";
	}

	if(clave == 3){
		codigoCodificado.push("R");
		mensajeCodificado.innerHTML+="R";
	}
}

function letraM(){
	mensajeGenerado.innerHTML+="<p>"+(Mgen.value)+"</p>";

	if(clave == 1){
		codigoCodificado.push("S");
		mensajeCodificado.innerHTML+="S";
	}

	if(clave == 2){
		codigoCodificado.push("O");
		mensajeCodificado.innerHTML+="O";
	}

	if(clave == 3){
		codigoCodificado.push("H");
		mensajeCodificado.innerHTML+="H";
	}
}



function espacioGen(){
	mensajeGenerado.innerHTML+="<p>" + " - " + "</p>";
	mensajeCodificado.innerHTML+="<p>" + " - " + "</p>";
	codigoCodificado.push("-");
}

/* ------------------------------------- FUNCIONES LETRAS ------------------------------------- */



/*
  ----------------------------------------------------------------------------------------------
  |																								|
  |											MAQUINA 2											|
  |																								|
  ----------------------------------------------------------------------------------------------
  */

/* +++++++++++++++++++++++++++++++++++++ FUNCIONES CLAVES +++++++++++++++++++++++++++++++++++++ */

function clave1Ingresar(){
	clave=1;
}

function clave2Ingresar(){
	clave=2;
}

function clave3Ingresar(){
	clave=3;
}

/* ------------------------------------- FUNCIONES CLAVES ------------------------------------- */

/* +++++++++++++++++++++++++++++++++++++ FUNCIONES LETRAS +++++++++++++++++++++++++++++++++++++ */

function letraQing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Qing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("Ñ");
		mensajeDecodificado.innerHTML+="Ñ";

		Ñvisor.style.background="yellow";
		Ñvisor.style.color="black";
		setTimeout(function() {
			Ñvisor.style.background="";
			Ñvisor.style.color="";
		}, 150);
	}

	if(clave == 2){
		codigoDecodificado.push("Y");
		mensajeDecodificado.innerHTML+="Y";

		Yvisor.style.background="yellow";
		setTimeout(function() {
			Yvisor.style.background="";
		}, 150);
	}

	if(clave == 3){
		codigoDecodificado.push("Z");
		mensajeDecodificado.innerHTML+="Z";

		Zvisor.style.background="yellow";
		setTimeout(function() {
			Zvisor.style.background="";
		}, 150);
	}
}


function letraWing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Wing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("N");
		mensajeDecodificado.innerHTML+="N";
	}

	if(clave == 2){
		codigoDecodificado.push("X");
		mensajeDecodificado.innerHTML+="X";
	}

	if(clave == 3){
		codigoDecodificado.push("I");
		mensajeDecodificado.innerHTML+="I";
	}
}

function letraEing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Eing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("P");
		mensajeDecodificado.innerHTML+="P";
	}

	if(clave == 2){
		codigoDecodificado.push("U");
		mensajeDecodificado.innerHTML+="U";
	}

	if(clave == 3){
		codigoDecodificado.push("G");
		mensajeDecodificado.innerHTML+="G";
	}
}

function letraRing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ring.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("A");
		mensajeDecodificado.innerHTML+="A";
	}

	if(clave == 2){
		codigoDecodificado.push("F");
		mensajeDecodificado.innerHTML+="F";
	}

	if(clave == 3){
		codigoDecodificado.push("N");
		mensajeDecodificado.innerHTML+="N";
	}
}

function letraTing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ting.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("I");
		mensajeDecodificado.innerHTML+="I";
	}

	if(clave == 2){
		codigoDecodificado.push("W");
		mensajeDecodificado.innerHTML+="W";
	}

	if(clave == 3){
		codigoDecodificado.push("H");
		mensajeDecodificado.innerHTML+="H";
	}
}

function letraYing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ying.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("F");
		mensajeDecodificado.innerHTML+="F";
	}

	if(clave == 2){
		codigoDecodificado.push("D");
		mensajeDecodificado.innerHTML+="D";
	}

	if(clave == 3){
		codigoDecodificado.push("C");
		mensajeDecodificado.innerHTML+="C";
	}
}

function letraUing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Uing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("G");
		mensajeDecodificado.innerHTML+="G";
	}

	if(clave == 2){
		codigoDecodificado.push("N");
		mensajeDecodificado.innerHTML+="N";
	}

	if(clave == 3){
		codigoDecodificado.push("V");
		mensajeDecodificado.innerHTML+="V";
	}
}

function letraIing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Iing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("U");
		mensajeDecodificado.innerHTML+="U";
	}

	if(clave == 2){
		codigoDecodificado.push("J");
		mensajeDecodificado.innerHTML+="J";
	}

	if(clave == 3){
		codigoDecodificado.push("R");
		mensajeDecodificado.innerHTML+="R";
	}
}

function letraOing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Oing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("C");
		mensajeDecodificado.innerHTML+="C";
	}

	if(clave == 2){
		codigoDecodificado.push("M");
		mensajeDecodificado.innerHTML+="M";
	}

	if(clave == 3){
		codigoDecodificado.push("Y");
		mensajeDecodificado.innerHTML+="Y";
	}
}

function letraPing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ping.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("K");
		mensajeDecodificado.innerHTML+="K";
	}

	if(clave == 2){
		codigoDecodificado.push("H");
		mensajeDecodificado.innerHTML+="H";
	}

	if(clave == 3){
		codigoDecodificado.push("Ñ");
		mensajeDecodificado.innerHTML+="Ñ";
	}
}




function letraAing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Aing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("X");
		mensajeDecodificado.innerHTML+="X";
	}

	if(clave == 2){
		codigoDecodificado.push("Ñ");
		mensajeDecodificado.innerHTML+="Ñ";
	}

	if(clave == 3){
		codigoDecodificado.push("J");
		mensajeDecodificado.innerHTML+="J";
	}
}

function letraSing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Sing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("M");
		mensajeDecodificado.innerHTML+="M";
	}

	if(clave == 2){
		codigoDecodificado.push("Q");
		mensajeDecodificado.innerHTML+="Q";
	}

	if(clave == 3){
		codigoDecodificado.push("F");
		mensajeDecodificado.innerHTML+="F";
	}
}

function letraDing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ding.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("Q");
		mensajeDecodificado.innerHTML+="Q";
	}

	if(clave == 2){
		codigoDecodificado.push("A");
		mensajeDecodificado.innerHTML+="A";
	}

	if(clave == 3){
		codigoDecodificado.push("P");
		mensajeDecodificado.innerHTML+="P";
	}
}

function letraFing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Fing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("Y");
		mensajeDecodificado.innerHTML+="Y";
	}

	if(clave == 2){
		codigoDecodificado.push("O");
		mensajeDecodificado.innerHTML+="O";
	}

	if(clave == 3){
		codigoDecodificado.push("S");
		mensajeDecodificado.innerHTML+="S";
	}
}

function letraIGing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(IGing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("R");
		mensajeDecodificado.innerHTML+="R";
	}

	if(clave == 2){
		codigoDecodificado.push("T");
		mensajeDecodificado.innerHTML+="T";
	}

	if(clave == 3){
		codigoDecodificado.push("S");
		mensajeDecodificado.innerHTML+="S";
	}
}

function letraHing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Hing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("B");
		mensajeDecodificado.innerHTML+="B";
	}

	if(clave == 2){
		codigoDecodificado.push("C");
		mensajeDecodificado.innerHTML+="C";
	}

	if(clave == 3){
		codigoDecodificado.push("M");
		mensajeDecodificado.innerHTML+="M";
	}
}

function letraJing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Jing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("V");
		mensajeDecodificado.innerHTML+="V";
	}

	if(clave == 2){
		codigoDecodificado.push("I");
		mensajeDecodificado.innerHTML+="I";
	}

	if(clave == 3){
		codigoDecodificado.push("Q");
		mensajeDecodificado.innerHTML+="Q";
	}
}

function letraKing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(King.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("H");
		mensajeDecodificado.innerHTML+="H";
	}

	if(clave == 2){
		codigoDecodificado.push("Z");
		mensajeDecodificado.innerHTML+="Z";
	}

	if(clave == 3){
		codigoDecodificado.push("X");
		mensajeDecodificado.innerHTML+="X";
	}
}

function letraLing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ling.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("E");
		mensajeDecodificado.innerHTML+="E";
	}

	if(clave == 2){
		codigoDecodificado.push("P");
		mensajeDecodificado.innerHTML+="P";
	}

	if(clave == 3){
		codigoDecodificado.push("C");
		mensajeDecodificado.innerHTML+="C";
	}
}

function letraÑing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ñing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("Z");
		mensajeDecodificado.innerHTML+="Z";
	}

	if(clave == 2){
		codigoDecodificado.push("G");
		mensajeDecodificado.innerHTML+="G";
	}

	if(clave == 3){
		codigoDecodificado.push("A");
		mensajeDecodificado.innerHTML+="A";
	}
}




function letraZing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Zing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("D");
		mensajeDecodificado.innerHTML+="D";
	}

	if(clave == 2){
		codigoDecodificado.push("B");
		mensajeDecodificado.innerHTML+="B";
	}

	if(clave == 3){
		codigoDecodificado.push("E");
		mensajeDecodificado.innerHTML+="E";
	}
}

function letraXing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Xing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("L");
		mensajeDecodificado.innerHTML+="L";
	}

	if(clave == 2){
		codigoDecodificado.push("R");
		mensajeDecodificado.innerHTML+="R";
	}

	if(clave == 3){
		codigoDecodificado.push("D");
		mensajeDecodificado.innerHTML+="D";
	}
}

function letraCing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Cing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("S");
		mensajeDecodificado.innerHTML+="S";
	}

	if(clave == 2){
		codigoDecodificado.push("L");
		mensajeDecodificado.innerHTML+="L";
	}

	if(clave == 3){
		codigoDecodificado.push("U");
		mensajeDecodificado.innerHTML+="U";
	}
}

function letraVing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ving.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("O");
		mensajeDecodificado.innerHTML+="O";
	}

	if(clave == 2){
		codigoDecodificado.push("V");
		mensajeDecodificado.innerHTML+="V";
	}

	if(clave == 3){
		codigoDecodificado.push("T");
		mensajeDecodificado.innerHTML+="T";
	}
}

function letraBing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Bing.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("T");
		mensajeDecodificado.innerHTML+="T";
	}

	if(clave == 2){
		codigoDecodificado.push("E");
		mensajeDecodificado.innerHTML+="E";
	}

	if(clave == 3){
		codigoDecodificado.push("W");
		mensajeDecodificado.innerHTML+="W";
	}
}

function letraNing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ning.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("W");
		mensajeDecodificado.innerHTML+="W";
	}

	if(clave == 2){
		codigoDecodificado.push("S");
		mensajeDecodificado.innerHTML+="S";
	}

	if(clave == 3){
		codigoDecodificado.push("K");
		mensajeDecodificado.innerHTML+="K";
	}
}

function letraMing(){
	mensajeCodificadoIng.innerHTML+="<p>"+(Ming.value)+"</p>";

	if(clave == 1){
		codigoDecodificado.push("J");
		mensajeDecodificado.innerHTML+="J";
	}

	if(clave == 2){
		codigoDecodificado.push("K");
		mensajeDecodificado.innerHTML+="K";
	}

	if(clave == 3){
		codigoDecodificado.push("L");
		mensajeDecodificado.innerHTML+="L";
	}
}




function espacioIng(){
	mensajeCodificadoIng.innerHTML+="<p>" + " - " + "</p>";
	mensajeDecodificado.innerHTML+="<p>" + " - " + "</p>";
	codigoCodificado.push("-");
}