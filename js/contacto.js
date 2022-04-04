function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; //expresion regular para emails validos
    var regtel = /^[0-9]{4}(\-[0-9]{4}|[0-9]{4})$/;
    var mensaje =""; //variable que va a almacenar todos los mensajes de error
    var error =0; /*variable auxiliar que se va a utilizar para retornar o no falso. 
                            En caso de que su valor sea 0, retornara verdadero y el formulario se enviara. En el caso de que sea mayor a 0 retornara falso.*/
    reset();



    if ($("#nombre").val()==""){ /*valida que nombre no este vacio*/
        mensaje+= "<p>El campo nombre es obligatorio </p>";
        error++;
        $("#nombre").addClass('error');
    }
    if($("#apellido").val().length < 5){
        mensaje+= "<p>El campo apellido debe tener al menos 4 caracteres </p>";
        error++;
        $("#apellido").addClass('error');
    }


    if(!$("#email").val().match(regexemail)){
        mensaje+= "<p>Debe ser un email valido</p>";
        error++;
        $("#email").addClass('error');
    }
    if(!$("#tel").val().match(regtel)){
        mensaje+= "<p>Debe ser un teléfono valido. Seguir formato xxxx-xxxx o xxxxxxxx</p>";
        error++;
        $("#tel").addClass('error');
    }

    if($("#consulta").val().length < 5 || $("#consulta").val().length > 1000 ){
        
        mensaje+= "<p>El campo de consulta debe tener entre 4 y 1000 caracteres</p>";
        error++;
        $("#consulta").addClass('error');
    }

    /*Si error es mayor a 0 retorna falso y muestra todo los mensajes de errores acumulado en la variable mensaje*/
    if (error>0){
        
        $("#mensaje").append(mensaje); //agregamos al div de id mensaje, los mensajes de error acumulados en la variable mensaje
        return false;
    }
    /*Sino retorna verdadero y el formulario se envía*/
    else{
        return true;
    }

}



function reset(){ /*Esta funciona elimina todas las clases de error*/
    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#email").removeClass('error');
    $("#tel").removeClass('error');
    $("#consulta").removeClass('error');
    $("#mensaje").empty(); //vaciamos el contenido del div de id mensaje
}



$(document).ready(function() {
    
    $("#form").submit(function() {
        return validar();
    });
    $("#nombre").keyup(function() {
        validar();
    });

    $("#apellido").keyup(function() {
        validar();
    });
    
    $("#email").keyup(function() {
        validar("#email");
    });
    $("#tel").keyup(function() {
        validar("#tel");
    });
    $("#consulta").keyup(function() {
        validar("#consulta");
    });



    $("#consulta").keyup(function() {
        var caractermax= 1000 - $(this).val().length;
        
        $("#caracteres").text("(Los caracteres maximos son "+caractermax+")");
       
    });



});