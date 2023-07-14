function seleccionarResponsive(link) {
    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

function seleccionar(link){
    var x = document.getElementById("selector");
    x.className = "";
}

function change(){
    var x = document.getElementById("selector");
    if(x.className === ""){
        x.className = "select";
    }else{
        x.className = "";
    }
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}