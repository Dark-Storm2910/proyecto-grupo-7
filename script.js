// ===============================
// SISTEMA WEB CONTROL ASISTENCIA
// ===============================

// VALIDACIÓN REGISTRO DOCENTE
function validarDocente(event){

    event.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let telefono = document.getElementById("telefono").value;

    if(nombre === "" || correo === "" || telefono === ""){
        alert("Todos los campos son obligatorios");
        return;
    }

    if(telefono.length !== 10){
        alert("El teléfono debe tener 10 números");
        return;
    }

    alert("Docente registrado correctamente");

}


// VALIDACIÓN REGISTRO ASISTENCIA
function validarAsistencia(event){

    event.preventDefault();

    let docente = document.getElementById("docente").value;
    let hora = document.getElementById("hora").value;
    let ubicacion = document.getElementById("ubicacion").value;

    if(docente === "" || hora === "" || ubicacion === ""){
        alert("Complete todos los campos de asistencia");
        return;
    }

    alert("Asistencia registrada correctamente");

}


// VALIDACIÓN LOGIN
function validarLogin(event){

    event.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    if(usuario === "" || password === ""){
        alert("Ingrese usuario y contraseña");
        return;
    }

    if(password.length < 5){
        alert("La contraseña debe tener mínimo 5 caracteres");
        return;
    }

    alert("Bienvenido al sistema");

}


// CONFIRMACIÓN ELIMINAR
function eliminarRegistro(){

    let confirmar = confirm("¿Desea eliminar este registro?");

    if(confirmar){
        alert("Registro eliminado correctamente");
    }else{
        alert("Operación cancelada");
    }

}
