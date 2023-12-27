function encriptar(){
    var mensaje = document.getElementById("msg1").value;
    
    var encryted = btoa(mensaje);
    document.getElementById("msg2").value = encryted;
    
    }
    
    function desencriptar(){
    }