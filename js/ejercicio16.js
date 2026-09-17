const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) =>  a / b;

const calcularOperacion = (operacion) => {
  let val1 = document.getElementById("numero1").value.trim();
  let val2 = document.getElementById("numero2").value.trim();

  if (val1 === "" || val2 === "") {
    Swal.fire({
      icon: "warning",
      title: "Campos vacíos",
      text: "Por favor llena ambos capos"
    });
    return;
  }

  let num1 = Number(val1);
  let num2 = Number(val2);

  if (isNaN(num1) || isNaN(num2)) {
    Swal.fire({
      icon: "error",
      title: "Dato inválido",
      text: "Ingresa únicamente números válidos."
    });
    return;
  }

  let res;

  switch (operacion) {
    case "suma":
      res = sumar(num1, num2);
      break;
    case "resta":
      res = restar(num1, num2);
      break;
    case "multiplicacion":
      res = multiplicar(num1, num2);
      break;
    case "division":
      if (num2 === 0) {
        Swal.fire({
          icon: "error",
          title: "División inválida",
          text: "No se puede dividir entre cero."
        });
        document.getElementById("resultado").value = "No se puede dividir entre 0 crack";
        return;
      }
      res = dividir(num1, num2);
      break;
  }

  document.getElementById("resultado").value = res;
};