var serviceURL = "http://www.uruapanmovil.com/app/services/";

$(document).delegate('#PaginaListaEmpresas', 'pageshow', function(event) {
	ObtenerListaEmpresas();
});

function ObtenerListaEmpresas() {
		var id = getUrlVars()["id"];
		$.getJSON(serviceURL + 'Empresas.php?id='+id, function(data) {
		$('#ListaEmpresas li').remove();
		Empresas = data.items;
		$.each(Empresas, function(index, Empresa) {
			if (Empresa.Ruta)
			{
			$('#ListaEmpresas').append('<li><a rel="external" href="DetalleEmpresa.html?id=' + Empresa.IdEmpresa + '">' +
					'<img src="http://www.uruapanmovil.com/app/empresas/Imagenes/' + Empresa.Ruta + '"/>' +
					'<h4>' + Empresa.Nombre + '</h4>' +
					'<p>' + Empresa.Calle + '</p>');
			}
			else
			{
				$('#ListaEmpresas').append('<li><a rel="external" href="DetalleEmpresa.html?id=' + Empresa.IdEmpresa + '">' +
					'<img src="./Imagenes/nocamera.jpg"/>' +
					'<h4>' + Empresa.Nombre + '</h4>' +
					'<p>' + Empresa.Calle + '</p>');	
			}
		});
		$('#ListaEmpresas').listview('refresh');
	});
}

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}