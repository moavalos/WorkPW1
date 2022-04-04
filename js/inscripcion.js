// LOCALSTORE









// FORMULARIO
function validar() {
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/;
    var regextel = /^[0-9-()+]{3,20}/;
    var mensaje = "";
    var error = 0;

    reset();
    if ($("#name").val() == "") {
        mensaje += "<p>Debes escribir tu nombre </p>";
        error++;
        $("#name").addClass('error');
    }
    if ($("#surname").val().length < 5) {
        mensaje += "<p>El apellido debe tener al menos 5 caracteres. </p>";
        error++;
        $("#surname").addClass('error');
    }
    if (!$("#tel").val().match(regextel)) {
        mensaje += "<p>Debe ser un número de télefono válido.</p>";
        error++;
        $("#tel").addClass('error');
    }
    if (!$("#email").val().match(regexemail)) {
        mensaje += "<p>Debe ser un email valido</p>";
        error++;
        $("#email").addClass('error');
    }
    if ($("#prov option:selected").val() == 0) {
        mensaje += "<p>Debe seleccionar una provincia</p>";
        error++;
        $("#prov").addClass('error');
    }
    if ($("#ciudad option:selected").val() == 0) {
        mensaje += "<p>Debe seleccionar una ciudad</p>";
        error++;
        $("#ciudad").addClass('error');
    }

    if (error > 0) {
        $("#mensaje").append(mensaje);
        return false;
    }
    else {
        return true;
    }

}
function reset() {
    $("#name").removeClass('error');
    $("#surname").removeClass('error');
    $("#tel").removeClass('error');
    $("#email").removeClass('error');
    $("#prov").removeClass('error');
    $("#ciudad").removeClass('error');
    $("#mensaje").empty();
}

$(document).ready(function () {

    $("#form").submit(function () {
        return validar();
    });
    $("#name").keyup(function () {
        validar("#name");
    });
    $("#surname").keyup(function () {
        validar("#surname");
    });
    $("#tel").change(function () {
        validar("#tel");
    });
    $("#email").keyup(function () {
        validar("#email");
    });
    $("#prov").keyup(function () {
        validar("#prov");
    });
    $("#ciudad").keyup(function () {
        validar("#ciudad");
    });
    $("#idiomas").text(localStorage.getItem("idiomas"));
    $("#provincia").text(localStorage.getItem("provincia"));
    $("#comboHorarioModalidad").text(localStorage.getItem("comboHorarioModalidad"));

});