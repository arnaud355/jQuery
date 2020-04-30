$(function(){
	/*pour animer: selector, l'arg1 est la propriété d'un objet,
	l'arg2 sera le temps d'execution (en milliseconde ou bien
	slow ou fast), arg3: fonction callback*/
	//$(selector).animate(arg1,arg2,arg3);
	
	/*$("button").click(function(){
		$("div").animate({left: "600px",opacity: 0.2,
		width: "+=200px", height: "+=600px"},3000,function(){
			$("div").hide();
		});
	});*/
	//ci dessous les action s'execute une par une
	$("#start").click(function(){
		$("div").animate({left: "600px"},3000);
		$("div").animate({opacity: 0.2},3000);
		$("div").animate({width: "200px"},3000);
		$("div").animate({height: "600px"},3000);
	});
	
	$("#stop").click(function(){
		/*la methode stop arrete l'animation en cours mais pas
		les suivantes si pas d'arg, c'est considéré comme
		false, en mettant true toutes les anim s'arrêtent.
		le 2eme true emmene à la fin de l'anim en cours*/
		$("div").stop(true,true);
	});
	
	//slideUp diminue la div vers le haut
	$("#start").click(function(){
		$("#slide").slideUp(5000).slideDown(3000).fadeOut(3000).fadeIn(3000);
	});
		
});