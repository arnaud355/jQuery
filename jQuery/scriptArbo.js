$(function(){
	
	$("#start").click(function(){
		/*change les propriétés css du parent
		de p1 soit la div1*/
		//$("#p1").parent().css("border-color","green");
		
		//parent avec un s : s'applique sur tous les parents
		//$("#p1").parents().css("border-color","green");
		
		//parent avec un s qui ont la classe special
		$("#p1").parents(".special").css("border-color","green");
		
		$("#div1").children().css("border-color","blue");
		
		//ne seletionne pas les petits enfants
		$("#main").children().css("border-color","yellow");
		
		//selectionne l'ensemble de ces enfants, peitis enfants...
		$("#main").find("p").css("color","brown");
		
		//selectionne tous ces elements frères suivant
		$("#p4").siblings().css("border-color","pink");
		
		//appliaque proprio l'element suivant
		$("#p1").next().css("border-color","pink");
		
		//selection sur le premier p rencontré
		$("p").first().css("border-color","black");
		
		//selection sur le dernier p rencontré
		$("p").last().css("border-color","black");
		
		/*selectionne le p par rapport à l'index
		qui commence à 0*/
		$("p").eq(2).css("border-color","blue");
		
		//filtre sur les p ayant la classe special
		$("p").filter(".special").css("color","blue");
		
		//filtre sur les p n'ayant pas la classe special
		$("p").not(".special").css("color","yellow");
	});
		
});