// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          } else {
              RegistrarPersonaCliente();
              event.preventDefault();
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

function RegistrarPersonaCliente(){
    //alert("Todo está bien");
    let id = document.querySelector("#txtId").value;
    let tipoId = document.querySelector("#txtTipoId").value;
    let nombres = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtApellidos").value;
    //let indicativo = document.querySelector("#txtIndicativo").value;
    //let cel = document.querySelector("#txtCelular").value;
    //let celular = `${indicativo} ${cel}`;
    let celular = document.querySelector("#txtIndicativo").value 
        + " " + document.querySelector("#txtCelular").value;
    console.log(celular)
    let email = document.querySelector("#txtEmail").value;

    let url = `http://localhost:3000/personaCliente`;
    let datos = {
        id: id,
        tipoId: tipoId,
        nombres: nombres,
        apellidos: apellidos,
        celular: celular,
        email: email,
        rol: 3
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(datos),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    .then(mensaje => {
        console.log(mensaje);
    });
}