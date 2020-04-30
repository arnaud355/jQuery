$(document).ready(function(){
//racourci sans le document : $(function(){...});

	//$('h1').hide();
	//$('.par1').hide();
	/*le $ veut dire selector, comme pour le css
	on peut mettre guilllemet simple ou double peut importe*/
	$('#title1').hide();
	/*selection d'un element p, le niemme enfant, dans ce cas
	celui qui est le 2eme p*/
	$("p:nth-child(2)").hide();
	//************Event*********************
	
	/*$("#p3").click(function(){
		$('#p7').hide();
	});
	//equivalent : 
	$("#p3")on.("click", function(){
		$('#p7').hide();
	});*/
	$('#p13').hide();
	
	$("#p3").mouseenter(function(){
		$('#p7').hide();
	});
	
	$("#p3").mouseleave(function(){
		$('#p7').show();
	});
	//*****************
	$("#p3").on({
		mouseenter: function(){
			$('#p5').hide();
		},
		mouseleave: function(){
			$('#p5').show();
		},
		click: function(){
			$('#p4').hide();
		}
	});
	
	$("#p3").mouseleave(function(){
		$('#p7').show();
	});
	//Le hover permet d'intégrer 2 evenements
	$("#p4").hover(function(){
		$('#p6').hide();
	},
	function(){
		$('#p6').show();
	});
	
	$("#p8").click(function(){
		$('#p9').hide("slow");//cache lentement le paragraphe
		$('#p10').hide("fast");
		
		/*c'est ce qu'on appel callback: appel d'une fonction
		à la fin de l'execution pour faire une nouvelle 
		instruction.
		paragraphe 11 se cache en 5 sec après avoir 
		cliqué sur p8. et à la fin des 5 sec 
		appele d'une fonction avec code à l'intérieur*/
		$('#p11').hide(3000, function(){
			$('#p12').hide(1000,function(){
				$('#p13').show(1000);
			});
		});
	});
	
	$("#p5").click(function(){
		//toogle : fait action contraire : hide ou show
		$('#p14').toggle();
	});
	
	//fadeOut: gere opacité (de 1 à 0) vers transparence
	$('#p16').fadeOut();
	
	$("#p15").click(function(){
		/*fadeIn: inverse fadeOut
		si pas de paramètre de temps renseigné passe de 1 à 0
		en 0 millisecondes, 1parametre : temps, 2para : opacité*/
		$('#p16').fadeIn(3000);
		$('#p17').fadeTo(3000, 0.5);
		//existe aussi fadeToggle : action inverse
	});
	
});