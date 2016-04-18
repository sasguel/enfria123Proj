            function justNumbers(e)
            {
            var keynum = window.event ? window.event.keyCode : e.which;
            if ((keynum == 8) || (keynum == 46))
            return true;
             
            return /\d/.test(String.fromCharCode(keynum));
            }

            function habilitarPreocupadoOtro()
            {
                var activado ="<input name='ECOCual' id='ECOCual' value='' type='text'>";
                var divECOCual = document.getElementById("divECOCual");

                var selectOtro = activarOtro();
                
                if(selectOtro)
                    {
                        divECOCual.innerHTML=activado;
                    }
             }
            function activarOtro()
            {
                var selectOtro = false;
                var preoAcudeOtro = document.getElementById("preoAcudeOtro").value;

                if (preoAcudeOtro) 
                {
                    selectOtro = true;
                };
                return selectOtro;

            }
            function desabilitarOtro()
            {
                var desactivado ="<br>";
                var divECOCual = document.getElementById("divECOCual");
                var selectFami = ocultarOtro();

                if(selectFami)
                {
                    divECOCual.innerHTML=desactivado;
                }    
            }
            function ocultarOtro()
            {
                var selectOtro = false;
                var preoAcudeFami = document.getElementById("preoAcudeFami").value;

                if (preoAcudeFami)
                {
                    selectOtro =true;
                };
                return selectOtro;
            }

            function habilitarMomentosDifiOtro()
            {
                var activado1 ="<input name='ECOCual1' id='ECOCual1' value='' type='text'>";
                var divECOCual1 = document.getElementById("divECOCual1");
                var selectOtro1 = activarOtro1();

                if(selectOtro1)
                    {
                        divECOCual1.innerHTML=activado1;
                    }
            }
            function activarOtro1()
            {
                var selectOtro1 = false;
                var momenDifiOtro = document.getElementById("momenDifiOtro").value;

                if(momenDifiOtro)
                {
                    selectOtro1 =true;
                }
                return selectOtro1;
            }
            function desabilitarOtro1()
            {
                var desactivado1 ="<br>";

                var divECOCual1 = document.getElementById("divECOCual1");
                var selectDroga = ocultarOtro1();

                if(selectDroga)
                {
                    divECOCual1.innerHTML=desactivado1;
                }    
            }
            function ocultarOtro1()
            {
                var selectOtro1 = false;
                var momenDifiDrog = document.getElementById("momenDifiDrog").value;

                if (momenDifiDrog)
                {
                    selectOtro1 =true;
                };
                return selectOtro1;
            }
            /*   
            function habilitarInputEctopico()
            {
                var divEAP = document.getElementById("divEAP");
                var divEAP2 = document.getElementById("divEAP2");
                var divEAP3 = document.getElementById("divEAP3");

                var crearInputEctopico="<input name='ectopico' id='ectopico' onkeypress='return justNumbers(event);'></input>";
                var quitarAborto = "";
                var quitarParto = "";
                var selectEctopico = activarEctopico();

                if(selectEctopico)
                    {
                        divEAP.innerHTML=crearInputEctopico;
                        divEAP2.innerHTML=quitarAborto;
                        divEAP3.innerHTML=quitarParto;
                    }
            }
            function activarEctopico()
            {
                var selectEctopico = false;
                var selectEctopico = document.getElementById("selectEctopico").value;

                if(selectEctopico)
                {
                    selectEctopico=true;
                }
                return selectEctopico;
            }
            function habilitarInputAborto()
            {
                var divEAP = document.getElementById("divEAP");
                var divEAP2 = document.getElementById("divEAP2");
                var divEAP3 = document.getElementById("divEAP3");

                var crearInputAborto="<input name='aborto' id='aborto' onkeypress='return justNumbers(event);'></input>";
                var selectAborto = activarAborto();
                var quitarEctopico = "";
                var quitarParto = "";
                if(selectAborto)
                {
                    divEAP2.innerHTML=crearInputAborto;
                    divEAP.innerHTML=quitarEctopico;
                    divEAP3.innerHTML=quitarParto;
                }
            }
            function activarAborto()
            {
                var selectAborto = false;
                var selectAborto = document.getElementById("selectAborto").value;

                if(selectAborto)
                {
                    selectAborto = true;
                }
                return selectAborto;
            }
            function habilitarInputParto()
            {
                var divEAP = document.getElementById("divEAP");
                var divEAP2 = document.getElementById("divEAP2");
                var divEAP3 = document.getElementById("divEAP3");

                var crearOpcionesParto="<input name='parto' id='parto' onkeypress='return justNumbers(event);'></input> <fieldset data-role='controlgroup' data-type='vertical'><input name='selectVC' id='selectVaginal' value='Vaginal' type='checkbox' onclick='habilitarInputVaginal();'><label for='selectVaginal'>Vaginal</label><div id='divmostrarInputVaginal'></div><input name='selectVC' id='selectCesarea' value='Cesárea' type='checkbox' onclick='habilitarInputCesarea();'><label for='selectCesarea'>Cesárea</label><div id='divmostrarInputCesarea'></div><div id='divPVC'></div></fieldset>";
                var selectParto = activarParto();
                var quitarEctopico ="";
                var quitarAborto ="";
                if(selectParto)
                {
                    divEAP3.innerHTML=crearOpcionesParto;
                    divEAP.innerHTML=quitarEctopico;
                    divEAP2.innerHTML=quitarAborto;
                }

            }
            function activarParto()
            {
                var selectParto = false;
                var selectParto = document.getElementById("selectParto").value;
                if(selectParto)
                {
                    selectParto=true;
                }
                return selectParto;
            }
            function habilitarInputVaginal()
            {
                var divPVC = document.getElementById("divPVC");
                var divmostrarInputVaginal = document.getElementById("divmostrarInputVaginal");
                
                var crearAbajoVaginalInput ="<input name='vaginal' id='vaginal' onkeypress='return justNumbers(event);'></input>"; 
                
                var crearOpcionVivoMuerto="<fieldset data-role='controlgroup' data-type='vertical'><input name='selectVivoMuerto' id='selectVivos' value='selectVivos' type='checkbox' onclick='habilitarInputVivos();'><label for='selectVivos'>Nacieron Vivos</label><div id='divVivos'></div><input name='selectVivoMuerto' id='selectMuertos' value='selectMuertos' type='checkbox' onclick='habilitarInputMuertos();'><label for='selectMuertos'>Nacieron Muertos</label><div id='divMuertos'></div></fieldset>"
                
                var selectVaginal1 = activarVaginal();
                var esconderCesarea ="";

                if(selectVaginal1)
                {
                    divPVC.innerHTML=crearOpcionVivoMuerto;
                    divmostrarInputVaginal.innerHTML=crearAbajoVaginalInput;
                    divmostrarInputCesarea.innerHTML=esconderCesarea;
                }
            }
            function activarVaginal()
            {
                var selectVaginal = false;
                
                var selectVaginal1 = document.getElementById("selectVaginal").value;
                if(selectVaginal)
                {
                    selectVaginal=true;
                }
                return selectVaginal1;
            }
            function habilitarInputCesarea()
            {
                var divPVC = document.getElementById("divPVC");
                var divmostrarInputCesarea = document.getElementById("divmostrarInputCesarea");
                
                var crearAbajoCesarealInput ="<input name='cesarea' id='cesarea' onkeypress='return justNumbers(event);'></input>"; 
                
                var crearOpcionVivoMuerto="<fieldset data-role='controlgroup' data-type='vertical'><input name='selectVivoMuerto' id='selectVivos' value='selectVivos' type='checkbox' onclick='habilitarInputVivos();'><label for='selectVivos'>Nacieron Vivos</label><div id='divVivos'></div><input name='selectVivoMuerto' id='selectMuertos' value='selectMuertos' type='checkbox' onclick='habilitarInputMuertos();'><label for='selectMuertos'>Nacieron Muertos</label><div id='divMuertos'></div></fieldset>"
                
                var selectCesarea1 = activarCesarea();

                var esconderVaginal = "";
                if(selectCesarea1)
                {
                    divPVC.innerHTML=crearOpcionVivoMuerto;
                    divmostrarInputCesarea.innerHTML=crearAbajoCesarealInput;
                    divmostrarInputVaginal.innerHTML=esconderVaginal;
                }
            }
            function activarCesarea()
            {
                var selectCesarea = false;
                var selectCesarea1 = document.getElementById("selectCesarea").value;

                if(selectCesarea)
                {
                    selectCesarea=true;
                }
                return selectCesarea1;
            }
            function habilitarInputVivos()
            {
                var divVivos = document.getElementById("divVivos");
                var divMuertos = document.getElementById("divMuertos");

                var crearAbajoVivosInput ="<input name='vivos' id='vivos' onkeypress='return justNumbers(event);'></input>";
                var selectVivos = activarVivos();

                var ocultarMuertos="";

                if(selectVivos)
                {
                    divVivos.innerHTML=crearAbajoVivosInput;
                    divMuertos.innerHTML=ocultarMuertos;
                }
            }
            function activarVivos()
            {
                var selectVivos = false;
                var selectVivos = document.getElementById("selectVivos").value;

                if (selectVivos) 
                {
                    selectVivos = true;
                }
                return selectVivos;
            }
            function habilitarInputMuertos()
            {
                var divMuertos = document.getElementById("divMuertos");
                var divVivos = document.getElementById("divVivos");

                var crearAbajoMuertosInput ="<input name='muertos' id='muertos' onkeypress='return justNumbers(event);'></input>";
                var ocultarVivos=" ";

                var selectMuertos = activarMuertos();

                if(selectMuertos)
                {
                    divMuertos.innerHTML=crearAbajoMuertosInput;
                    divVivos.innerHTML=ocultarVivos;
                }
            }
            function activarMuertos()
            {
                var selectMuertos = false;
                var selectMuertos = document.getElementById("selectMuertos").value;

                if (selectMuertos) 
                {
                    selectMuertos = true;
                }
                return selectMuertos;
            }*/
            