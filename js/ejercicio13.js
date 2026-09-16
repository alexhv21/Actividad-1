function verificar(){
    var num1= document.getElementById("number").value;
    if (num1.trim() === "") {
        alert('Inserta tu edad');
        return;
    }
    var edad = parseInt(num1);
    if (edad<0) {
        alert('Ingresa un numero positivo');
        document.getElementById("resultado").value = ""; 
        return; 
    }
    if (edad>=18) {
        document.getElementById("resultado").value="Puedes votar" ;
    } else {
         document.getElementById("resultado").value="No puedes votar" ;
    }
  
    
}