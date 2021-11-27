//alert("Hola mundo");

let colores = ["blue", "white", "gray", "red", "purple", "yellow", "black", "orange", "gray", "pink"];

function CambiarFondo(){
    let indice = parseInt(Math.random() * 10) - 1;
    let color = colores[indice];
    document.querySelector("body").style.background = color;
    let mensaje = document.querySelector("#txtMensaje").value;
    //alert(mensaje);
    document.querySelector("#miDivision").innerHTML = mensaje;
}

/**
setTimeout(() => {
    CambiarFondo();
}, 4000);
*/
setInterval(() => {
    CambiarFondo();
}, 2000);

$( '#btn-validate' ).click(function(){
    var $captcha = $( '#recaptcha' ),
        response = grecaptcha.getResponse();
      if (response.length === 0) {
      $( '.msg-error').text( "reCAPTCHA is mandatory" );
      if( !$captcha.hasClass( "error" ) ){
        $captcha.addClass( "error" );
      }
    } else {
      $( '.msg-error' ).text('');
      $captcha.removeClass( "error" );
      alert( 'reCAPTCHA marked' );
    }
  })

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
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()