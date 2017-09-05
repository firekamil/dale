class Lexer{

constructor(){
	this.Error = -1;
	this.Aceptar = 0;
	this.cadena = null;
	this.contador = 0;
}

Estado_0(valor){
	this.contador = 0;
	this.cadena = valor;
	
	switch(this.cadena.charAt(this.contador)){

		case '+' : return this.Estado_1();
		case '-' : return this.Estado_2();
		case '=' : return this.Estado_3();
		case '0' : return this.Error;
		case '1' : return this.Estado_4();
		case '2' : return this.Estado_4();
		case '3' : return this.Estado_4();
		case '4' : return this.Estado_4();
		case '5' : return this.Estado_4();
		case '6' : return this.Estado_4();
		case '7' : return this.Estado_4();
		case '8' : return this.Estado_4();
		case '9' : return this.Estado_4();
		case 'p' : return this.Estado_8();
		case 'r' : return this.Estado_6();
		case 'i' : return this.Estado_6();
		case 'n' : return this.Estado_6();
		case 't' : return this.Estado_6();
		case 'a' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'c' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'f' : return this.Estado_6();
		case 'q' : return this.Estado_6();
		case 'w' : return this.Estado_6();
		case 'e' : return this.Estado_6();
		case 'y' : return this.Estado_6();
		case 'u' : return this.Estado_6();
		case 'o' : return this.Estado_6();
		case 's' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'g' : return this.Estado_6();
		case 'h' : return this.Estado_6();
		case 'j' : return this.Estado_6();
		case 'k' : return this.Estado_6();
		case 'l' : return this.Estado_6();
		case 'ñ' : return this.Estado_6();
		case 'z' : return this.Estado_6();
		case 'x' : return this.Estado_6();
		case 'v' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'm' : return this.Estado_6();

		default : return this.Error;
	} 
}

Estado_1(){

return  this.Aceptar;
	
}

Estado_2(){

	 return  this.Aceptar;
	
}

Estado_3(){

	 return  this.Aceptar;
	
}

Estado_4(){

	this.contador++;
	switch(this.cadena.charAt(this.contador)){

		case '+' : return this.Estado_5();
		case '-' : return this.Estado_5();
		case '=' : return this.Estado_5();
		case '0' : return this.Estado_4();
		case '1' : return this.Estado_4();
		case '2' : return this.Estado_4();
		case '3' : return this.Estado_4();
		case '4' : return this.Estado_4();
		case '5' : return this.Estado_4();
		case '6' : return this.Estado_4();
		case '7' : return this.Estado_4();
		case '8' : return this.Estado_4();
		case '9' : return this.Estado_4();
		case 'p' : return this.Estado_5();
		case 'r' : return this.Estado_5();
		case 'i' : return this.Estado_5();
		case 'n' : return this.Estado_5();
		case 't' : return this.Estado_5();
		case 'a' : return this.Estado_5();
		case 'b' : return this.Estado_5();
		case 'c' : return this.Estado_5();
		case 'd' : return this.Estado_5();
		case 'f' : return this.Estado_5();
		case 'q' : return this.Estado_5();
		case 'w' : return this.Estado_5();
		case 'e' : return this.Estado_5();
		case 'y' : return this.Estado_5();
		case 'u' : return this.Estado_5();
		case 'o' : return this.Estado_5();
		case 's' : return this.Estado_5();
		case 'd' : return this.Estado_5();
		case 'g' : return this.Estado_5();
		case 'h' : return this.Estado_5();
		case 'j' : return this.Estado_5();
		case 'k' : return this.Estado_5();
		case 'l' : return this.Estado_5();
		case 'ñ' : return this.Estado_5();
		case 'z' : return this.Estado_5();
		case 'x' : return this.Estado_5();
		case 'v' : return this.Estado_5();
		case 'b' : return this.Estado_5();
		case 'm' : return this.Estado_5();

		default : return this.Error;
	} 
}

Estado_5(){

		 return  this.Aceptar;
	
}

Estado_6(){
  this.contador++;
	
	switch(this.cadena.charAt(this.contador)){

		case '+' : return this.Estado_7();
		case '-' : return this.Estado_7();
		case '=' : return this.Estado_7();
		case '0' : return this.Estado_7();
		case '1' : return this.Estado_7();
		case '2' : return this.Estado_7();
		case '3' : return this.Estado_7();
		case '4' : return this.Estado_7();
		case '5' : return this.Estado_7();
		case '6' : return this.Estado_7();
		case '7' : return this.Estado_7();
		case '8' : return this.Estado_7();
		case '9' : return this.Estado_7();
		case 'p' : return this.Estado_6();
		case 'r' : return this.Estado_6();
		case 'i' : return this.Estado_6();
		case 'n' : return this.Estado_6();
		case 't' : return this.Estado_6();
		case 'a' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'c' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'f' : return this.Estado_6();
		case 'q' : return this.Estado_6();
		case 'w' : return this.Estado_6();
		case 'e' : return this.Estado_6();
		case 'y' : return this.Estado_6();
		case 'u' : return this.Estado_6();
		case 'o' : return this.Estado_6();
		case 's' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'g' : return this.Estado_6();
		case 'h' : return this.Estado_6();
		case 'j' : return this.Estado_6();
		case 'k' : return this.Estado_6();
		case 'l' : return this.Estado_6();
		case 'ñ' : return this.Estado_6();
		case 'z' : return this.Estado_6();
		case 'x' : return this.Estado_6();
		case 'v' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'm' : return this.Estado_6();
		
		default : return this.Error;
	} 
}

Estado_7(){

	 return  this.Aceptar;
	
}

Estado_8(){
   this.contador++;
	
	switch(this.cadena.charAt(this.contador)){

		case '+' : return this.Estado_13();
		case '-' : return this.Estado_13();
		case '=' : return this.Estado_13();
		case '0' : return this.Estado_13();
		case '1' : return this.Estado_13();
		case '2' : return this.Estado_13();
		case '3' : return this.Estado_13();
		case '4' : return this.Estado_13();
		case '5' : return this.Estado_13();
		case '6' : return this.Estado_13();
		case '7' : return this.Estado_13();
		case '8' : return this.Estado_13();
		case '9' : return this.Estado_13();
		case 'p' : return this.Estado_6();
		case 'r' : return this.Estado_9();
		case 'i' : return this.Estado_6();
		case 'n' : return this.Estado_6();
		case 't' : return this.Estado_6();
	    case 'a' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'c' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'f' : return this.Estado_6();
		case 'q' : return this.Estado_6();
		case 'w' : return this.Estado_6();
		case 'e' : return this.Estado_6();
		case 'y' : return this.Estado_6();
		case 'u' : return this.Estado_6();
		case 'o' : return this.Estado_6();
		case 's' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'g' : return this.Estado_6();
		case 'h' : return this.Estado_6();
		case 'j' : return this.Estado_6();
		case 'k' : return this.Estado_6();
		case 'l' : return this.Estado_6();
		case 'ñ' : return this.Estado_6();
		case 'z' : return this.Estado_6();
		case 'x' : return this.Estado_6();
		case 'v' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'm' : return this.Estado_6();
		default : return this.Error;
	} 
}

Estado_9(){

	this.contador++;
	switch(this.cadena.charAt(this.contador)){

		case '+' : return this.Estado_13();
		case '-' : return this.Estado_13();
		case '=' : return this.Estado_13();
		case '0' : return this.Estado_13();
		case '1' : return this.Estado_13();
		case '2' : return this.Estado_13();
		case '3' : return this.Estado_13();
		case '4' : return this.Estado_13();
		case '5' : return this.Estado_13();
		case '6' : return this.Estado_13();
		case '7' : return this.Estado_13();
		case '8' : return this.Estado_13();
		case '9' : return this.Estado_13();
		case 'p' : return this.Estado_6();
		case 'r' : return this.Estado_6();
		case 'i' : return this.Estado_10();
		case 'n' : return this.Estado_6();
		case 't' : return this.Estado_6();
		 case 'a' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'c' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'f' : return this.Estado_6();
		case 'q' : return this.Estado_6();
		case 'w' : return this.Estado_6();
		case 'e' : return this.Estado_6();
		case 'y' : return this.Estado_6();
		case 'u' : return this.Estado_6();
		case 'o' : return this.Estado_6();
		case 's' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'g' : return this.Estado_6();
		case 'h' : return this.Estado_6();
		case 'j' : return this.Estado_6();
		case 'k' : return this.Estado_6();
		case 'l' : return this.Estado_6();
		case 'ñ' : return this.Estado_6();
		case 'z' : return this.Estado_6();
		case 'x' : return this.Estado_6();
		case 'v' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'm' : return this.Estado_6();

		default : return this.Error;
	} 
}

Estado_10(){
  this.contador++;
	
	switch(this.cadena.charAt(this.contador)){

		case '+' : return this.Estado_13();
		case '-' : return this.Estado_13();
		case '=' : return this.Estado_13();
		case '0' : return this.Estado_13();
		case '1' : return this.Estado_13();
		case '2' : return this.Estado_13();
		case '3' : return this.Estado_13();
		case '4' : return this.Estado_13();
		case '5' : return this.Estado_13();
		case '6' : return this.Estado_13();
		case '7' : return this.Estado_13();
		case '8' : return this.Estado_13();
		case '9' : return this.Estado_13();
		case 'p' : return this.Estado_6();
		case 'r' : return this.Estado_6();
		case 'i' : return this.Estado_6();
		case 'n' : return this.Estado_11();
		case 't' : return this.Estado_6();
		 case 'a' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'c' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'f' : return this.Estado_6();
		case 'q' : return this.Estado_6();
		case 'w' : return this.Estado_6();
		case 'e' : return this.Estado_6();
		case 'y' : return this.Estado_6();
		case 'u' : return this.Estado_6();
		case 'o' : return this.Estado_6();
		case 's' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'g' : return this.Estado_6();
		case 'h' : return this.Estado_6();
		case 'j' : return this.Estado_6();
		case 'k' : return this.Estado_6();
		case 'l' : return this.Estado_6();
		case 'ñ' : return this.Estado_6();
		case 'z' : return this.Estado_6();
		case 'x' : return this.Estado_6();
		case 'v' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'm' : return this.Estado_6();

		default : return this.Error;
	} 
}

Estado_11(){

	this.contador++;
	switch(this.cadena.charAt(this.contador)){

		case '+' : return this.Estado_13();
		case '-' : return this.Estado_13();
		case '=' : return this.Estado_13();
		case '0' : return this.Estado_13();
		case '1' : return this.Estado_13();
		case '2' : return this.Estado_13();
		case '3' : return this.Estado_13();
		case '4' : return this.Estado_13();
		case '5' : return this.Estado_13();
		case '6' : return this.Estado_13();
		case '7' : return this.Estado_13();
		case '8' : return this.Estado_13();
		case '9' : return this.Estado_13();
		case 'p' : return this.Estado_6();
		case 'r' : return this.Estado_6();
		case 'i' : return this.Estado_6();
		case 'n' : return this.Estado_6();
		case 't' : return this.Estado_12();
		case 'a' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'c' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'f' : return this.Estado_6();
		case 'q' : return this.Estado_6();
		case 'w' : return this.Estado_6();
		case 'e' : return this.Estado_6();
		case 'y' : return this.Estado_6();
		case 'u' : return this.Estado_6();
		case 'o' : return this.Estado_6();
		case 's' : return this.Estado_6();
		case 'd' : return this.Estado_6();
		case 'g' : return this.Estado_6();
		case 'h' : return this.Estado_6();
		case 'j' : return this.Estado_6();
		case 'k' : return this.Estado_6();
		case 'l' : return this.Estado_6();
		case 'ñ' : return this.Estado_6();
		case 'z' : return this.Estado_6();
		case 'x' : return this.Estado_6();
		case 'v' : return this.Estado_6();
		case 'b' : return this.Estado_6();
		case 'm' : return this.Estado_6();
		default : return this.Error;
	} 
}

Estado_12(){

	
	 return  this.Aceptar;
	
}
Estado_13(){
	
	 return  this.Aceptar;
	
}

}

function Start(){
var cadena= document.getElementById("texto").value;
var lexer = new Lexer();
var separar=(" ");
var espacio=cadena.split(separar);
var i = 0;
var imprimir = [null];
for ( i = 0; i < espacio.length; i++) {

     imprimir.push(espacio[i]+": "+lexer.Estado_0(espacio[i])+"\n");

}

alert(imprimir);

}


