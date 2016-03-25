// Script que envia informaci+on por medio de json

$(document).ready(function(){
        $('#respuesta').hide();
        $('#tuto-ajax-form').submit(function(evento){
            $('#respuesta').hide();         
            evento.preventDefault();
            var datos_formulario = $(this).serialize();         
            $.ajax({
                url: 'tutorial-ajax.php',
                dataType: 'json',
                data: datos_formulario,
                type: 'POST',
                success: function(datos){
                    $('#resultados').text(JSON.stringify(datos, null, 4));
                    $('#respuesta').text(datos.respuesta).fadeIn('slow');
                }
            });
             
        });
    });