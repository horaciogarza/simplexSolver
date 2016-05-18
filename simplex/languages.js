var translations =
{
	"language": "en_us",
	"title": { en_us: "OHuman, Metodo Simplex", pt_br: "OHuman, Metodo Simplex"},
	"tools": { en_us: "Herramientas", pt_br: "Ferramentas"},
	"variables": { en_us: "Variables", pt_br: "Variáveis"},
	"constraints": { en_us: "Restricciones", pt_br: "Restrições"},
	"solve_lpp": {en_us: "Resuelve LPP", pt_br: "Resolver PPL"},
	"clear_solutions": {en_us: "Limpiar Soluciones", pt_br: "Limpar Soluções"},
	"function": {en_us: "Funciones", pt_br: "Função"},
	"type": { en_us: "Tipo", pt_br: "Tipo"},
	"solutions": { en_us: "Soluciones(s)", pt_br: "Solução(ões)"},
	"next_solution": { en_us: "Siguiente solucion", pt_br: "Próxima Solução"},
	"step_by_step": { en_us: "Paso a Paso", pt_br: "Passo a Passo"},
	"next_step": { en_us: "Proximo Paso", pt_br: "Próximo Passo"},
	"lpp": { en_us: "Problema de Programacion Lineal", pt_br: "Problema de Programação Linear"},
	"solution": { en_us: "Solucion", pt_br: "Solução"},
	"step": { en_us: "Paso", pt_br: "Passo"},
	"great_base": { en_us: "Base Optima", pt_br: "Base Ótima"},
	"base": { en_us: "Base", pt_br: "Base"},
	"costs": { en_us: "Costo", pt_br: "Custos"},
	"end_first_fase": { en_us: "Fin de la primera pase", pt_br: "Fim da primeira fase."},
	"single_solution": { en_us: "Esta es la solucion unica", pt_br: "Esta é uma solução única."},
	"infinite_solutions": { en_us: "Tiene soluciones infinitas", pt_br: "Existem infinitas soluções."},
	"multiple_solutions": { en_us: "Tiene multiples soluciones.", pt_br: "Existe multiplas soluções."},
	"solution_unlimited": { en_us: "Las soluciones son inlimitadas.", pt_br: "A solução é ilimitada."},
	"problem_solved": { en_us: "Problema resuelto.", pt_br: "Problema resolvido."},
	"invalid_lpp": { en_us: "Invalido LPP.", pt_br: "PPL inválido."},
	"first_press_button_solve_lpp": { en_us: "Primero presione 'Resuelve lpp'.", pt_br: "Primeiro pressione o botão 'resolver ppl'."},
	"there_isnt_more_solutions": { en_us: "No hay mas soluciones.", pt_br: "Não existe mais soluções."},
	"end_of_steps": { en_us: "Fin de los pasos", pt_br: "Fim dos passos."},
	"sign": { en_us: "Seña", pt_br: "Sinal"},
	"size_error": { en_us: "El número de variables o constantes debe ser mayor que cero.", pt_br: "O número de variáveis ou restrições tem que ser maior que zero."}

};

var setTranslations = function(){
	var settedLanguage = $("#language").val();
	translations["language"] = settedLanguage;

	$("translate").each(function(){
		var id = $(this).attr("trans");
		var language = translations["language"];

		var phrase = id;

		if( id in translations && language in translations[id] ){
			var translation = translations[id];
			phrase = translation[language];
		}
		
		$(this).empty();
		$(this).append(phrase);
		
	});
};
