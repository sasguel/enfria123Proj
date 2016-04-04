
            function inahibilitarEstadoCivilOtro(){

                var divECOCual = document.getElementById("divECOCual");

                 var desactivado="<input name='ECOCual' id='ECOCual' value='' type='text' placeholder='Estado Civil' disabled='true'>";
                 divECOCual.innerHTML=desactivado;
            }
            function habilitarEstadoCivilOtro(){
               

                var activado =" <input name='ECOCual' id='ECOCual' value='' type='text' placeholder='Estado Civil'>";

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
                var otro = document.getElementById("otro").value;
               
                var activado =" <input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button'>";

                var desactivado="<input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button' disabled='true'>";


                if (otro != ''){
                    tieneAlgo = true;
                };

                if(tieneAlgo){
                    divECOCual.innerHTML=activado;
                }else{
                    divECOCual.innerHTML=desactivado;
                }

            }

            
           function inahibilitarNiveleducativoAotro(){

                var divECOCual1 = document.getElementById("divECOCual1");

                 var desactivado="<input name='ECOCual1' id='ECOCual1' value='' type='text' placeholder='Nivel educativo' disabled='true'>";
                 divECOCual1.innerHTML=desactivado;
            }
            function habilitarNiveleduvativoAotro(){
               

                var activado =" <input name='ECOCual1' id='ECOCual1' value='' type='text' placeholder='Nivel educativo'>";

                var divECOCual1 = document.getElementById("divECOCual1");
                var tienealgo1 = verificarSeguridadsocial();

                if(tienealgo1){
                    divECOCual1.innerHTML=activado;
                }
            }

            function verificarSeguridadsocial(){
                var tienealgo1 = false;
                var Seguridadsocial = document.getElementById("Seguridadsocial").value;
                if (Seguridadsocial != '') {
                    tienealgo1 = true;
                };
                return tienealgo1;
            }

            function verificar(){
                var tienealgo1 = false;
                var divECOCual1 = document.getElementById("divECOCual1");
                var Aotro = document.getElementById("Aotro").value;
               
                var activado =" <input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button'>";

                var desactivado="<input name='botonVerificado' id='botonVerificado' value='hola mundo' type='button' disabled='true'>";


                if (Aotro != ''){
                   tienealgo1 = true;
                };

                if(tienealgo1){
                    divECOCual1.innerHTML=activado;
                }else{
                    divECOCual1.innerHTML=desactivado;
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
            function actcaracTFlu() {
                var insert = "<input name='caracTFlu' id='caracTFlu' type='text' placeholder='Caracteristicas' ></input>";
                var add = document.getElementById("Cara_FLujo");
                add.innerHTML=insert;
            }
            function descaracTFlu(){
                var insert = "<br><br>";
                var add = document.getElementById("Cara_FLujo");
                add.innerHTML=insert;
            }

