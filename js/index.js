let opcionesProvincia=["Buenos Aires","Jujuy","Mendoza","Santa Cruz"];
let opcionesEstablecimiento=["San Martin","Mao zedong","Gran Londres","D.C."];
let opcionesIdioma=["Inglés", "Portugués", "Francés","Chino","Japonés","Alemán"];
let opcionesHorarioModalidad=["Lunes 8am a 10am / presencial", "Lunes 6pm a 8pm / virtual", "Viernes 8am a 10am / virtual","Viernes 6pm a 8pm / presencial"];
let opcionesPrecio=["2000","3000"];
let opcionesHMP=[
    {
        "modalidadhorario":"Lunes 8am a 10am / presencial",
        "precio":"2000",
    },
    {
        "modalidadhorario":"Lunes 6pm a 8pm / virtual",
        "precio":"3000",
    },
    {
        "modalidadhorario":"Viernes 8am a 10am / virtual",
        "precio":"2000",
    },
    {
        "modalidadhorario":"Viernes 6pm a 8pm / presencial",
        "precio":"3000",
    },
];

let infoEstablecimiento=[
    {
        "establecimiento":"San Martin",
        "direccion":"Belgrano 200",
        "localidad":"CABA",
        "provincia":"Buenos Aires",
        "email":"sanmartin@tuidioma.com",
    },
    {
        "establecimiento":"Mao zedong",
        "direccion":"Dorrego 1400",
        "localidad":"San Salvador de Jujuy",
        "provincia":"Provincia:Jujuy",
        "email":"maozedong@tuidioma.com",
    },
    {
        "establecimiento":"Gran Londres",
        "direccion":"Balcarse 170",
        "localidad":"Ciudad de Mendoza",
        "provincia":"Mendoza",
        "email":"granlondres@tuidioma.com",
    },
    {
        "establecimiento":"D. C.",
        "direccion":"Avenida Indenpendencia 3600",
        "localidad":"Ciudad de Santa Cruz",
        "provincia":"Santa Cruz",
        "email":"dc@tuidioma.com",
    },
   
];

function vaciarTodo(){
    $("#establecimiento").empty();
    $("#idioma").empty();
    $("#comboHorarioModalidad").empty();
    $("#precio").empty();
}

function llenarEstablecimiento(valor){
    vaciarTodo();

    if (valor==""){

        vaciarTodo();

        $("#establecimiento").append('<option value="">Selecciona el establecimiento</option>');
        $("#idioma").append('<option value="">Selecciona tu idioma</option>');
        $("#comboHorarioModalidad").append('<option value="">Selecciona tu Horario y Modalidad</option>');
        $("#precio").val("");


    }
    else{
        $("#establecimiento").append('<option value="">Selecciona el establecimiento</option>');
        $("#idioma").append('<option value="">Selecciona tu idioma</option>');
        $("#comboHorarioModalidad").append('<option value="">Selecciona tu Horario y Modalidad</option>');
        $("#precio").val("");

        $("#establecimiento").append('<option value="'+valor+'">'+opcionesEstablecimiento[valor]+'</option>');

        for(i in opcionesIdioma){
            $("#idioma").append('<option value="'+i+'">'+opcionesIdioma[i]+'</option>');
        }
        for(i in opcionesHorarioModalidad){
            $("#comboHorarioModalidad").append('<option value="'+i+'">'+opcionesHMP[i].modalidadhorario+'</option>');
        }
        $("#comboHorarioModalidad").change(function(){
            var val = $(this).val();
            if($("#comboHorarioModalidad").val()==""){
                $("#precio").val("");

            }else {
            $("#precio").val(opcionesHMP[val].precio);}
        
        });
 
    }
 
}


function vaciarInfo(){
    $("#nombreEstablecimiento").empty();
    $("#nombreDireccion").empty();
    $("#nombreLocalidad").empty();
    $("#nombreProvincia").empty();
    $("#nombreEmail").empty();
}
function cambiarInfo (valor){

    if(valor=="" || $("#establecimiento").val(valor)=="" ){

        vaciarInfo();
    } else {
    $("#nombreEstablecimiento").text(infoEstablecimiento[valor].establecimiento);

    $("#nombreDireccion").text(infoEstablecimiento[valor].direccion);
    $("#nombreLocalidad").text(infoEstablecimiento[valor].localidad);
    $("#nombreProvincia").text(infoEstablecimiento[valor].provincia);
    $("#nombreEmail").text(infoEstablecimiento[valor].email);

}

}

function guardarDatosLocalstorage(){

    let provincia1=opcionesProvincia[$("#provincia").val()];
    localStorage.setItem("provincia",provincia1);
    let establecimiento1=opcionesEstablecimiento[$("#establecimiento").val()];
    localStorage.setItem("establecimiento",establecimiento1);
    let idioma1=opcionesIdioma[$("#idioma").val()];
    localStorage.setItem("idioma",idioma1);
    let modalidadhorario1=opcionesHMP[$("#comboHorarioModalidad").val()].modalidadhorario;
    localStorage.setItem("comboHorarioModalidad",modalidadhorario1);
    let precio1=$("#precio").val();
    localStorage.setItem("precio",precio1);

}

function validar(e){
    let error=false;
  
    if($("#provincia").val()==""){
        error=true;
    }

    guardarDatosLocalstorage();

    

    if (error){
        e.preventDefault();
    }
}



$(document).ready(function(){

    $("#provincia").change(function(){
        llenarEstablecimiento($(this).val());
        vaciarInfo();

    });
    $("#establecimiento").change(function(){
        cambiarInfo($(this).val());

    });

    $("#form").submit(function(e){
        validar(e);
    }); 

    $("a.desplegable").click(function(){
        if($('.menu').is(":visible")){
            $('.menu').slideUp();
        }else{
          $('.menu').slideDown();
        }
      });
      $(window).resize(function(){
          if($(this).width()>768){
              $(".menu").show();
          } else{
              $(".menu").hide();
          }
      });
       
});