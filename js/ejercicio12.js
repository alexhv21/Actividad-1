function convertir(){
    var num1= document.getElementById("number").value;
    if (num1.trim() === "") {
        alert('Inserta un numero')
    }
    var resultado = parseFloat(num1) * 0.058;
    document.getElementById("resultado").value="$"+ resultado.toFixed(2);
}