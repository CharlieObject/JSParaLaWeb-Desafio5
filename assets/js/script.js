// Arreglo tareas
let tareas = [{actividad: "Jugar", id: "11", estado: false},
              {actividad: "Programar", id: "21", estado: false},
              {actividad: "Salir de fiestas", id: "17", estado: false}]






//Se obtiene la referencia del botón 'agregar', del div donde se iran renderizando y actualizando las tareas y del div donde se mostrarán las tareas totales y las realizadas
const button = document.querySelector("#button");
const obtener = document.querySelector("#todo_list_int1_der_bottom");
const total = document.querySelector("#total");
const realizadas = document.querySelector("#realizadas");
const inputguardar = document.querySelector("#input");

let contadorid = 22;
let contadorTareasTotales = 3;
let contadorTareasRealizadas = 0;
let inputs = 0;

 /// Renderizar primeras tres tareas
if(contadorid == 22)
{renderizarYactualizar(tareas)}

/// Evento de guardar tarea nueva y llamar a la función de renderización
button.addEventListener("click", (event) => {
let arregloAunir = [{actividad: inputguardar.value, id:contadorid}]
tareas = tareas.concat(arregloAunir);
inputguardar.value = "";
contadorid++;
total.innerHTML = "";
total.innerHTML = `<b>${tareas.length}</b>`;
renderizarYactualizar(tareas);
})

/// Funcion renderizar
function renderizarYactualizar(tareas){
let html = "";
for(let tarea of tareas){

if(tarea.estado == true){
    html += `<div class="renderizado">
    <div class="nro"><p>${tarea.id}</p></div>
    <div class="tarea"><p>${tarea.actividad}</p></div>
    <div class="input"><input type="checkbox" checked id="checkbox${tarea.id}"></div>
    <div class="eliminar" onclick="eliminarTarea(${tarea.id})"><b><i class="fa-solid fa-x rojo" ></i></b></div>
    </div>`;
  }
else{
    html += `<div class="renderizado">
    <div class="nro"><p>${tarea.id}</p></div>
    <div class="tarea"><p>${tarea.actividad}</p></div>
    <div class="input"><input type="checkbox" id="checkbox${tarea.id}"></div>
    <div class="eliminar" onclick="eliminarTarea(${tarea.id})"><b><i class="fa-solid fa-x rojo" ></i></b></div>
    </div>`; 
  }
 
}
obtener.innerHTML = html;
total.innerHTML = `<b>${tareas.length}</b>`;

TareasRealizadas(tareas);
}


/// Función eliminar tareas y actualizar tareas realizadas en caso de que la eliminada haya estado seleccionada
function eliminarTarea(id){

let indice = tareas.findIndex((tarea) => tarea.id == id);
if (tareas[indice].estado == true){
  contadorTareasRealizadas--;
  realizadas.innerHTML = "";
  realizadas.innerHTML = `<b>${contadorTareasRealizadas}</b>`
}

tareas = tareas.filter(tarea => tarea.id != id);
renderizarYactualizar(tareas);
}












///Función contar tareas realizadas
function TareasRealizadas(tareas){
  for(let tarea of tareas){
    let input = document.querySelector("#checkbox"+tarea.id);
    input.addEventListener("change",(e)=>{
      if(e.target.checked == true){
        tarea.estado = true;
        contadorTareasRealizadas++;
      }
      else
      {
        tarea.estado = false;
        contadorTareasRealizadas--;
      }
      renderizarYactualizar(tareas);
    })
    realizadas.innerHTML = "";
    realizadas.innerHTML = `<b>${contadorTareasRealizadas}</b>`
  }
  
}

