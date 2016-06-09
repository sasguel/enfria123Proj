var db=null;

function conexion(){
    db=window.openDatabase("nandoic","1.0","nandoic",9999999);
}

function onDeviceReady(){
	createDataBase();
}

function createDataBase(){
    conexion();
    db.transaction(
    	function (tx){
			//tx.executeSql("DROP TABLE IF EXISTS PACIENTES;");
			tx.executeSql("CREATE TABLE IF NOT EXISTS PACIENTES (id_paciente 		INTEGER 	PRIMARY KEY, paciente_nombre 		varchar(40) 	NOT NULL);");
		},function (err){
			//alert('Ha ocurrido un error en la construcción de la DB: '+err);
			navigator.notification.alert('Ha ocurrido un error en la construcción de la DB: '+err,null,"ERROR","OK");
		},function (){
			//alert("Base de datos Creada");
		}
	);
}








function AgregarPaciente(){

	var id_paciente = document.getElementById('id_paciente').value;
	var paciente_nombre = document.getElementById('paciente_nombre').value;
	conexion();
	db.transaction(
		function(tx){
			tx.executeSql("INSERT INTO PACIENTES VALUES ('"+id_paciente+"','"+paciente_nombre+"');");
		},function (err){
			//alert('Ha ocurrido un error al agregar al paciente: '+err);
			navigator.notification.alert('Ha ocurrido un error al agregar al paciente: '+err,null,"ERROR","OK");
		},function(){
			//alert ('paciente agregado con éxito');
			navigator.notification.alert('El paciente se ha agregado con éxito ',null,"Operación exitosa","OK");
			cargarPacientes();
			history.go(-1);
		}
	);
}




function cargarPacientes() {
	conexion();
	db.transaction(
		function(tx){
			tx.executeSql("SELECT * FROM PACIENTES",[],
				function(tx, datos){
					var temp = "";
					for (var i = 0; i< datos.rows.length; i++) {
						temp+="<a href='#' role='button' class='ui-shadow ui-btn ui-corner-all ui-btn-inline'>"+datos.rows.item(i).paciente_nombre+"</a>";
						temp+="<br>";
					}
					document.getElementById('pacientes').innerHTML=temp;
				},function(err){
					//alert("Ocurrio un error al traer los registros de la database "+err);
					navigator.notification.alert('Ha ocurrido un error al al traer los registros de la database: '+err,null,"ERROR","OK");
				}
			);
		},function(err){
			//alert("Ocurrio un error en la base de datos "+err);
		},function(){
			//alert("exito en la consulta");
			navigator.notification.alert('Consulta Exitosa: ',null,"Exito","OK");
		}
	);
}









/*

	function cargarPacientes() {
	conexion();
	db.transaction(mostrarRegistros,errorMostrar,todoBien);
}

function mostrarRegistros(tx){
	tx.executeSql("SELECT * FROM PACIENTES",[],result,errorMostrar);
}

function result(tx, datos){
	var temp = "";
	for (var i = 0; i< datos.rows.length; i++) {
		temp+="<a href='#' role='button' class='ui-shadow ui-btn ui-corner-all ui-btn-inline'>"+datos.rows.item(i).paciente_nombre+"</a>";
		temp+="<br>";
	}
	document.getElementById('pacientes').innerHTML=temp;
}

function errorMostrar(error){
	alert('Error traer los registros '+error);
}

function todoBien(){
	alert('exito en la consulta');
}*/