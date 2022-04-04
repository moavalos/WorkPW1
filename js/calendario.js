$(document).ready(function(){
    $("#filtrar").click(function(){
        filtrar();
    });
});
function filtrar(){
    const establecimiento=$("#establecimiento").val();
    const idioma=$("#idioma").val();

    
   if (establecimiento=="todosestablecimientos" && idioma!="todosidiomas" ){
        $("#cursos .contenedorCalendario article").hide();
        $("#cursos ."+idioma).show();
   }
   else{
       if(idioma=="todosidiomas" && establecimiento!="todosestablecimientos"){
            $("#cursos .contenedorCalendario article").hide();
            $("#cursos ."+establecimiento).show();
        } 
       else {
            if(establecimiento=="todosestablecimientos" && idioma=="todosidiomas"){
                $("#cursos .contenedorCalendario article").show();
            }
            else{
                $("#cursos .contenedorCalendario article").hide();
                $("#cursos ."+establecimiento+"."+idioma).show();
            }
        }   
    }
}