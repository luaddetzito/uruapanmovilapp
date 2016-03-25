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
	

				
});