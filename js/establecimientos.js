$(document).ready(function () {
    $("#filtrar").click(function () {
        filtrar();
    });
});
function filtrar() {
    const establecimiento = $("#provincia").val();

    if (establecimiento == "provincias") {
        $("#establecimientoss .contenedor article").show();
    }
    else {
        if (establecimiento != "provincias") {
            $("#establecimientoss .contenedor article").hide();
            $("#establecimientoss ." + establecimiento).show();
        }
        else {
            if (establecimiento == "provincias") {
                $("#establecimientoss .contenedor article").show();
            }
            else {
                $("#establecimientoss .contenedor article").hide();
                $("#establecimientoss ." + establecimiento).hide();
            }
        }
    }
}