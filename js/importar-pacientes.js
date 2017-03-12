//Importando pacientes com AJAX
var importarPacientes = document.querySelector("#importar-pacientes");

importarPacientes.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pac777ientes");

    xhr.addEventListener("load", function(){
        var erroAoImportar = document.querySelector("#erro-importar");

        if(xhr.status == 200){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });
    }else {
        erroAoImportar.classList.remove("invisivel");
    }
    });
    xhr.send();
});
