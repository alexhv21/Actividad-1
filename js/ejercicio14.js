function calcular(){
    let numeros=document.getElementById("number").value.trim();
    if(numeros===""){
        alert("Ingresa los numeros plis")
        return;
    }
    let arreglo=numeros.split(",");
    let array=arreglo.map(Number);
    if (arreglo.some(isNaN)) {
        alert("Ingresa numeros validos separados por comas");
        return;
        
    }
    let max=Math.max(...array);
    let min=Math.min(...array);
    let suma=array.reduce((acc,valor)=>acc+valor,0);
    let promedio=suma/arreglo.length;
  document.getElementById("resultado1").value=max ;
    document.getElementById("resultado2").value=min ;
      document.getElementById("resultado3").value=promedio ;
}