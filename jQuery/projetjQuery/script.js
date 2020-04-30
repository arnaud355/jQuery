$(document).ready(function(){
	
	/*toutes les variables qui contiennent du jQuery
	ont leurs met un $*/
	var $mainMenuItems = $("#main-menu ul").children("li"),
	totalMainMenuItems = $mainMenuItems.length,
	openedIndex = 2; /*menu ouvert sur un des elements
	Jessica Alba*/
	var init = function(){
		bindEvents();
		
		if(validIndex(openedIndex)){
			animateItem($mainMenuItems.eq(openedIndex),true,700);
		}
	};
	bindEvents = function(){
		$mainMenuItems.children(".images").click(function(){
			/*l'element en cours, au click, (les div), ont
			récupère leur parent direct, les li, ont récupère
			le num d'index */
			var newIndex = $(this).parent().index();
			checkAnimateItem(newIndex);
			
			/*The :eq() selector selects an element with a 
			specific index number.
			
			quel interêt à utiliser la methode eq() si on
			a déjà index() qui renvoie le num du tableau
			des élements ? 
			eq() sans paramètre renseigné ne renvoie pas
			le num de l'index mais indique simplement son
			type (Object)*/
		});
	};
	$(".button").hover(
	function(){
		$(this).addClass("hovered");
	},
	function(){
		$(this).removeClass("hovered");
	}
	);
	$(".button").click(function(){
		var newIndex = $(this).index();
		checkAnimateItem(newIndex);
	});
	var validIndex = function(indexToCheck){
		//si les 2 conditions sont fausse rien n'est retournés
		return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
	};
	var animateItem = function($item,toOpen,speed){
		var $colorImage = $item.find(".color");
		/*toOpen sera un boolean pour nous dire si oui
		ou non l'element est ouvert.
		condtion ternaire ? : si condition est vraie(le toOpen)
		alors execute le 1er block, sinon le second:
		Expression ? valeur1: valeur2*/
		var itemParam = toOpen ? {width: "420px"}: {width: "140px"};
		var colorImageParam = toOpen ? {left: "0px"}: {left: "140px"};
		
			$colorImage.animate(colorImageParam,speed);
			$item.animate(itemParam,speed);
		
	};
	checkAnimateItem = function(indexToCheckAndAnimate){
		if(openedIndex === indexToCheckAndAnimate){
				animateItem($mainMenuItems.eq(indexToCheckAndAnimate),false,250);
				openedIndex = -1; 
			}
			else{
				if(validIndex(indexToCheckAndAnimate)){
					animateItem($mainMenuItems.eq(openedIndex),false,250);
					openedIndex = indexToCheckAndAnimate;
					animateItem($mainMenuItems.eq(indexToCheckAndAnimate),true,250);
				}
			}
	};
	init();
});