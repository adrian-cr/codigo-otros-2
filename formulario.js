var formulario = document.querySelector("form") //Se cambió el nombre del argumento '#form' a 'form'

formulario.onsubmit = function(e) {

  e.preventDefault(); //Se modificó el nombre de la función 'prevent()' a 'preventDefault()'.
  /*Se modificaron los nombres de variables de las siguientes tres líneas por 'elementoNombre', 'elementoEdad' y 'elementoNacionalidad', respectivamente.*/
  var elementoNombre = formulario.elements[0]
  var elementoEdad = formulario.elements[1]
  var elementoNacionalidad = formulario.elements[2]

  var nombre = elementoNombre.value
  var edad = elementoEdad.value

  var indiceNacionalidad = elementoNacionalidad.selectedIndex //Se modificó nombre de la variable ('i') a 'indiceNacionalidad'.
  var nacionalidad = elementoNacionalidad.options[indiceNacionalidad].value

  /*Se comentaron las impresiones de consola de abajo. */
  /*
  console.log(nombre, edad)
  console.log(nacionalidad)
  */

  if (nombre.length === 0) {
    elementoNombre.classList.add("error")
  }
  if (edad < 18 || edad > 120) {
    elementoEdad.classList.add("error")
  }

if (nombre.length > 0
  && (edad > 18
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}
/*Se omite el bloque de código comentado abajo, ya que su funionalidad ya se implementa en la función 'agregarInvitado()'.*/

/* var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar" */

var corteLinea = document.createElement("br")
document.body.appendChild(corteLinea)
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

  var lista = document.getElementById("lista-de-invitados")

  var elementoLista = document.createElement("div")
  elementoLista.classList.add("elemento-lista") //Se cambió nombre de función 'added()' a 'add()'.
  lista.appendChild(elementoLista)

  /*Se omite el bloque de código comentado abajo, ya que su funionalidad ya se implementa en la función 'crearElemento()'.*/

  /* var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio) */

  function crearElemento(descripcion, valor) {
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = descripcion + ": "
  inputNombre.value = valor
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidad)

/*Se modifica la distribución de las siguientes ocho líneas pra mejorar su legibilidad y organización.*/
  var botonBorrar = document.createElement("button")
  var corteLinea = document.createElement("br")

  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"

  elementoLista.appendChild(corteLinea)
  elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
  //this.parentNode.style.display = 'none'; //Línea de código innecesaria; su funcionalidad equivalente se implemente en la línea de abajo.
  botonBorrar.parentNode.remove()
  }
}
