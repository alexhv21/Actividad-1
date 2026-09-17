const obtenerTareas = () => {
  let tareasGuardadas = localStorage.getItem("tareas");
  return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
};

const guardarTareas = (tareas) => {
  localStorage.setItem("tareas", JSON.stringify(tareas));
};

const gestorDeTareas = () => {
  return {
    agregar: (textoTarea) => {
      let tareas = obtenerTareas();
      let nuevaTarea = {
        id: Date.now(),
        texto: textoTarea
      };
      tareas.push(nuevaTarea);
      guardarTareas(tareas);
    },
    eliminar: (idTarea) => {
      let tareas = obtenerTareas();
      let tareasActualizadas = tareas.filter(t => t.id !== idTarea);
      guardarTareas(tareasActualizadas);
    }
  };
};

const manejarTareas = gestorDeTareas();

const renderizarTareas = () => {
  let lista = document.getElementById("listaTareas");
  let tareas = obtenerTareas();

  lista.innerHTML = "";

  if (tareas.length === 0) {
    lista.innerHTML = "<li>No hay tareas pendientes</li>";
    return;
  }

  tareas.forEach((item) => {
    let li = document.createElement("li");

    let spanTexto = document.createElement("span");
    spanTexto.textContent = item.texto;
    spanTexto.style.display = "block";
    spanTexto.style.marginBottom = "5px";

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.type = "button";
    btnEliminar.className = "boton";
    btnEliminar.onclick = () => confirmarEliminacion(item.id);

    li.appendChild(spanTexto);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
};

const ejecutarAgregar = () => {
  let input = document.getElementById("txtTarea");
  let texto = input.value.trim();

  if (texto === "") {
    Swal.fire({
      icon: "warning",
      title: "Campo vacío",
      text: "Por favor escribe una tarea"
    });
    return;
  }

  manejarTareas.agregar(texto);
  input.value = "";
  input.focus();
  renderizarTareas();
};

const confirmarEliminacion = (id) => {
  Swal.fire({
    title: "¿Estás seguro, papi?",
    text: "La tarea será eliminada",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Eliminar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      manejarTareas.eliminar(id);
      renderizarTareas();
      Swal.fire({
        title: "Eliminada",
        text: "La tarea ha sido eliminada",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    }
  });
};

window.onload = renderizarTareas;