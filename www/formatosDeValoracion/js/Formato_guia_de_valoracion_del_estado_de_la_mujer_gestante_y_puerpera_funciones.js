
            function inahibilitarEstadoCivilOtro(){

                var divECOCual = document.getElementById("divECOCual");

                 var desactivado="<input name='ECOCual' id='ECOCual' value='' type='text' placeholder='Otro' disabled='true'>";
                 divECOCual.innerHTML=desactivado;
            }
            function habilitarEstadoCivilOtro(){
               
                var activado =" <input name='ECOCual' id='ECOCual' value='' type='text' placeholder='Otro'>";
                var divECOCual = document.getElementById("divECOCual");
                var tieneAlgo = verificarNombPacien();

                if(tieneAlgo){
                    divECOCual.innerHTML=activado;
                }
            }
            function verificarNombPacien(){
                var tieneAlgo = false;
                var nombPacien = document.getElementById("nombPacien").value;
                if (nombPacien != '') {
                    tieneAlgo = true;
                };
                return tieneAlgo;
            }
            function verificar(){
                var tieneAlgo = false;
                var divECOCual = document.getElementById("divECOCual");
                var Otro = document.getElementById("Otro").value;
               
                var activado =" <input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button'>";

                var desactivado="<input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button' disabled='true'>";

                if (Otro != ''){
                    tieneAlgo = true;
                };

                if(tieneAlgo){
                    divECOCual.innerHTML=activado;
                }else{
                    divECOCual.innerHTML=desactivado;
                }
            }

           
            function inhabilitarNeducativoOtrro(){

                var divECOCual = document.getElementById("divECOCual1");

                 var desactivado="<input name='ECOCual1' id='ECOCual1' value='' type='text' placeholder='Otro' disabled='true'>";
                 divECOCual1.innerHTML=desactivado;
            }
            function habilitarNeducativoOtrro(){               

                var activado =" <input name='ECOCual1' id='ECOCual1' value='' type='text' placeholder='Otro'>";
                var divECOCual1 = document.getElementById("divECOCual1");
                var tieneAlgo1 = selectNEAlfabeta();

                if(tieneAlgo1){  
                    divECOCual1.innerHTML=activado;
                }
            }
            function selectNEAlfabeta(){
                var tieneAlgo1 = false;
                var NEAlfabetal = document.getElementById("NEAlfabeta").value;
                if (selectNEAlfabeta != '') {
                    tieneAlgo1 = true;
                };
                return tieneAlgo1;
            }
            function verificar1(){
                var tieneAlgo1 = false;
                var divECOCual1 = document.getElementById("divECOCual1");
                var Otrro = document.getElementById("Otrro").value;
               
                var activado =" <input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button'>";

                var desactivado="<input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button' disabled='true'>";


                if (Otrro != ''){
                    tieneAlgo1 = true;
                };

                if(tieneAlgo1){
                    divECOCual1.innerHTML=activado;
                }else{
                    divECOCual1.innerHTML=desactivado;
                }

            }

           function inahabilitarFuendcontmOtross(){

                var divECOCual2 = document.getElementById("divECOCual2");

                 var desactivado="<input name='ECOCual2' id='ECOCual2' value='' type='text' placeholder='Otro' disabled='true'>";
                 divECOCual2.innerHTML=desactivado;
            }
            function habilitarFuendcontmOtross(){               

                var activado =" <input name='ECOCual2' id='ECOCual2' value='' type='text' placeholder='Otro'>";
                var divECOCual2 = document.getElementById("divECOCual2");
                var tieneAlgo2 = verificarTanimapre();

                if(tieneAlgo2){
                    divECOCual2.innerHTML=activado;
                }
            }

            function verificarTanimapre(){
                var tieneAlgo2 = false;
                var Tanimapre = document.getElementById("Tanimapre").value;
                if (Tanimapre != '') {
                    tieneAlgo2 = true;
                };
                return tieneAlgo2;
            }

            function verificar(){
                var tieneAlgo2 = false;
                var divECOCual2 = document.getElementById("divECOCual2");
                var Otross = document.getElementById("Otross").value;
               
                var activado =" <input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button'>";

                var desactivado="<input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button' disabled='true'>";


                if (Otross != ''){
                    tieneAlgo2 = true;
                };

                if(tieneAlgo2){
                    divECOCual2.innerHTML=activado;
                }else{
                    divECOCual2.innerHTML=desactivado;
                }

            }

            function inhabilitarProblemassueñopsotro(){
                var divECOCual3 = document.getElementById("divECOCual3");
                 var desactivado="<input name='ECOCual3' id='ECOCual3' value='' type='text' placeholder='Otro' disabled='true'>";
                 divECOCual3.innerHTML=desactivado;
            }
            function habilitarProblemassueñopsotro(){       
                var activado =" <input name='ECOCual3' id='ECOCual3' value='' type='text' placeholder='Otro'>";
                var divECOCual3 = document.getElementById("divECOCual3");
                var tieneAlgo3 = verificarEpdsñ();
                if(tieneAlgo3){
                    divECOCual3.innerHTML=activado;
                }
            }
            function verificarEpdsñ(){
                var tieneAlgo3 = false;
                var Epdsñ = document.getElementById("Epdsñ").value;
                if (Epdsñ != '') {
                    tieneAlgo3 = true;
                };
                return tieneAlgo3;
            }
            function verificar(){
                var tieneAlgo3 = false;
                var divECOCual3 = document.getElementById("divECOCual3");
                var psotro = document.getElementById("psotro").value;               
                var activado =" <input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button'>";

                var desactivado="<input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button' disabled='true'>";

                if (psotro != ''){
                    tieneAlgo3 = true;
                };
                if(tieneAlgo3){
                    divECOCual3.innerHTML=activado;
                }else{
                    divECOCual3.innerHTML=desactivado;
                }
            }


            function activarOtro () {
                var insert = "<input name='Olor' id='desOlorOtro' type='text' placeholder='Ingrese Otro Olor' ></input>";
                var add = document.getElementById("add_Olor");
                add.innerHTML=insert;
            }
            function desactivarOtro(){
                var insert = "<br><br>";
                var add = document.getElementById("add_Olor");
                add.innerHTML=insert;
            }
            function actSecreOtro() {
                var insert = "<input name='SecOtro' id='eFSecOtro' type='text' placeholder='Ingrese la secreción' ></input>";
                var add = document.getElementById("Sec_otro");
                add.innerHTML=insert;
            }
            function desSecreOtro(){
                var insert = "<br><br>";
                var add = document.getElementById("Sec_otro");
                add.innerHTML=insert;
            }
            /*function actcaracTFlu() {
                var insert = "<input name='caracTFlu' id='caracTFlu' type='text' placeholder='Caracteristicas' ></input>";
                var add = document.getElementById("Cara_FLujo");
                add.innerHTML=insert;
            }
            function descaracTFlu(){
                var insert = "<br><br>";
                var add = document.getElementById("Cara_FLujo");
                add.innerHTML=insert;
            }*/
            function activarMFP(){
            var insert="<fieldset data-role='controlgroup'><label for='gpMFPMadre'>Madre</label><input name='gpMFPSNS' id='gpMFPMadre' type='radio'><label for='gpMFPExaminador'>Examinador</label><input name='gpMFPSNS' id='gpMFPExaminador' type='radio'></fieldset><input name='gpMFPcantida' id='gpMFPcantidad' placeholder='Cantidad/Frecuencia'>";  
            var add = document.getElementById("MFPin");
            add.innerHTML=insert;
            }
            function desactivarMFP(){
            var insert="";  
            var add = document.getElementById("MFPin");
            add.innerHTML=insert;
            }