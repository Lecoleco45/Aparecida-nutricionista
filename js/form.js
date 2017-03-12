var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
	event.preventDefault();

	var form = document.querySelector ("#form-adiciona");

	var paciente = obtemPacienteDoFormulario(form);

	//função que exibe erros
	var erros = validaPaciente(paciente);
	if (erros.length > 0){
		exibeMensagensDeErro(erros);
		return;
	}
	//Fim

	//adciona o paciente
	adicionaPacienteNaTabela(paciente);

	//limpa o formulario
	form.reset();
});

	//adiciona paciente na tabela

function obtemPacienteDoFormulario(form){

	var paciente ={
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.altura.value,
		imc: calculaImc(form.peso.value, form.altura.value)
	}

	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente");

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}

function montaTd(dado, classe){
	var td = document.createElement("td");
	td.classList.add(classe);
	td.textContent = dado;

	return td;
}
// Validação do formulário
// função que valida o paciente
function validaPaciente(paciente){
	 var erros = [];

	if(paciente.nome.length == 0){
		erros.push("O nome do paciente não pode ser em branco!");
	}

	if(paciente.gordura.length == 0){
		erros.push("A gordura não pode estar em branco!");
	}

	if(paciente.peso.length == 0){
		erros.push("O peso não pode estar em branco!");
	}

	if(paciente.altura.length == 0){
		erros.push("A altura não pode estar em branco!");
	}

	if(!validaPeso(paciente.peso)){
		erros.push("Peso é inválido!");
	}

	if(!validaAltura(paciente.altura)){
		erros.push("Altura é inválida");
	}

	return erros;
}

//adiciona o paciente na tabela
function adicionaPacienteNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);
}

//função que exime mensagem de erro após a validação
function exibeMensagensDeErro(erros){
	var ul = document.querySelector(".mensagens-erro");
		ul.innerHTML = "";

	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	});
}
