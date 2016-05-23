var db=null;

function conexion(){
    db=window.openDatabase("nandoic","1.0","nandoic",9999999);
}

function onDeviceReady(){
	createDataBase();
}

function createDataBase(){
    conexion();
    db.transaction(updateDba,errorUpdateDba,successUpdateDba);
}

	function updateDba(tx){
		//tx.executeSql("DROP TABLE IF EXISTS PACIENTES;");
		tx.executeSql("CREATE TABLE IF NOT EXISTS PACIENTES (id_paciente 		INTEGER 	PRIMARY KEY, paciente_nombre 		varchar(40) 	NOT NULL);");
	}
	function errorUpdateDba(err){
		alert('Ha ocurrido un error en '+err);
	}
	function successUpdateDba(){
		alert("Base de datos Creada");
	}








function AgregarPaciente(){

	var id_paciente = document.getElementById('id_paciente').value;
	var paciente_nombre = document.getElementById('paciente_nombre').value;
	conexion();
	db.transaction(function(tx){
		tx.executeSql("INSERT INTO PACIENTES VALUES ("+id_paciente+",'"+paciente_nombre+"');");
	},errorAgrePacien,successAgrePacien);
}
	function errorAgrePacien(err){
		alert('Ha ocurrido un error en '+err);
	}
	function successAgrePacien(){
		alert ('paciente agregado con éxito');
		cargarPacientes();
		history.go(-1);
	}







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
}