function redirectPage() { window.location = linkLocation; }

$(document).ready(function(){
	
	$("body").fadeIn(6);

	$('a').click(function(event) {
    if (this.href == "" || this.href == null) {
      event.preventDefault();
      return;
    }
    if ((this.href.indexOf("#") == -1) && (this.href.indexOf("mailto:") == -1) && (this.href.indexOf("javascript:") == -1) && (this.target != "_blank") && (this.href.indexOf("tel:"))) {
      event.preventDefault();
      linkLocation = this.href;
      $("body").fadeOut(4, redirectPage);
    }
  	});
	
	document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() { document.addEventListener("backbutton", onBackKeyDown, false); }
    function onBackKeyDown() 
	{
		navigator.notification.confirm(
            'Usa el boton "Atras" que esta en la parte superior para poder regresar. O realmente deseas salir de la App?',  // message
            function( index ){
                if( index == 1 ){//look at the docs for this part
                    navigator.app.exitApp();
                }
            },              // callback to invoke with index of button pressed
            'Alerta!',            // title
            'Si,No'          // buttonLabels
        );									
	
	}
				
});