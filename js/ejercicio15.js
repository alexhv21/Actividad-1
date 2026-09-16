let estudiantes=[];

function agregar(){

let nombre = document.getElementById("name").value.trim();
let calificacionTexto = document.getElementById("number").value.trim();

if (nombre==="" || calificacionTexto==="") {
    alert("Rellena los dos camppos");
    return;
}

let calificacion = Number(calificacionTexto);

if (isNaN(calificacion)) {
    alert("Ingresa un numero");
    return;
}

estudiantes.forEach(estudiante => {
console.log(estudiante.nombre);
});

    estudiantes.push({
    nombre: nombre,
    calificacion: calificacion
    });
  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("name").focus();
}

function calcular(){
    let promedio = estudiantes.reduce((total, estudiante) => total +
    estudiante.calificacion, 0) / estudiantes.length;

       let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
  let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

  
  let estudianteMax = estudiantes.find(e => e.calificacion === calificacionMaxima);
  let estudianteMin = estudiantes.find(e => e.calificacion === calificacionMinima);

    document.getElementById("resultado1").value=promedio ;
    document.getElementById("resultado2").value=estudianteMax.nombre ;
    document.getElementById("resultado3").value=estudianteMin.nombre ;        
}