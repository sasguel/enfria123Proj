function verPacientesParaNanda(carDefCheck,etiqueta,facRelCheck,dominio,definicion,clase){
    //alert("Entro en la funcion");
    navigator.notification.alert("Seleccione un paciente para adjuntar la información",null,"ERROR","OK");
    conexion();
    db.transaction(
        function(tx){
            tx.executeSql("SELECT * FROM PACIENTES ORDER BY paciente_nombre ASC",[],function(tx, response){

                var div=document.getElementById("divBusqueda");

                var temp="<div class='ui-controlgroup-controls'>";
                temp+="<br><br>características: "+carDefCheck;
                temp+="<br><br>etiqueta: "+etiqueta;
                temp+="<br><br>factor con que se relaciona: "+facRelCheck;
                temp+="<br><br>dominio: "+dominio;
                temp+="<br><br>definición: "+definicion;
                temp+="<br><br>clase: "+clase;


                for(var i=0; i<response.rows.length; i++){
                    if(i==0){
                        temp +="<a role='button' class='ui-mini ui-link ui-btn ui-shadow ui-corner-all ui-first-child' href='#' onclick=\"adjuntarNandaPaciente("+response.rows.item(i).id_paciente+",'"+carDefCheck+"','"+etiqueta+"','"+facRelCheck+"','"+dominio+"','"+definicion+"','"+clase+"');\" data-role='button' rel='external'>"+response.rows.item(i).paciente_nombre+"</a>";
                    }else if(i ==response.rows.length-1){
                    temp +=" <a role='button' class='ui-mini ui-link ui-btn ui-shadow ui-corner-all ui-last-child' href='#' onclick=\"adjuntarNandaPaciente("+response.rows.item(i).id_paciente+",'"+carDefCheck+"','"+etiqueta+"','"+facRelCheck+"','"+dominio+"','"+definicion+"','"+clase+"');\" data-role='button' rel='external'>"+response.rows.item(i).paciente_nombre+"</a>";
                    }
                    else{
                        temp +="<a role='button' class='ui-mini ui-link ui-btn ui-shadow ui-corner-all' href='#' onclick=\"adjuntarNandaPaciente("+response.rows.item(i).id_paciente+",'"+carDefCheck+"','"+etiqueta+"','"+facRelCheck+"','"+dominio+"','"+definicion+"','"+clase+"');\" data-role='button' rel='external'>"+response.rows.item(i).paciente_nombre+"</a>";
                    }
                }
                temp+="</div>";
                div.innerHTML= temp;
            },function(err){
                //alert('UY! Ocurrió un error en: ' +err);
                navigator.notification.alert("Ups! Ha ocurrido un error en: "+err,null,"ERROR","OK");
            });
        },function(err){
            //alert('Ocurrió un error en: ' +err);
            navigator.notification.alert("Ha ocurrido un error. location: "+err,null,"ERROR","OK");
        },function(){
            //alert('Exito! ');
        }
    );                
}
            

function adjuntarNandaPaciente(id_paciente,carDefCheck,etiqueta,facRelCheck,dominio,definicion,clase){
    navigator.notification.confirm(
        '¿Está segur@ de adjuntar la información al paciente?'+id_paciente+carDefCheck+etiqueta+facRelCheck+dominio+definicion+clase, // message
        function(buttonIndex){ // callback to invoke with index of button pressed
            //alert('You selected button ' + buttonIndex);
            switch (buttonIndex){
                case 1:
                    navigator.notification.alert("Ha ocurrido un error<br> no se guardaron los registros en la DB: ",null,"ERROR","OK");
                break;
                default:
            }
        },            
        '¿Segur@ que desea adjuntar?', // title
        ['Si, estoy segur@','Cancelar']     // buttonLabels
    );
    //alert("Seguro");
}
        
