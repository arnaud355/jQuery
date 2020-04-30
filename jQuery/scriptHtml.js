$(function(){
	
	//la methode text() extrait le texte
	var myVar = $("#p1").text();
	//la methode html affiche balises html
	var myVar = $("#p1").html();
	console.log(myVar);
	
	$("#start").click(function(){
		//method val permet de saisir une valeur
		var myInput = $("#myInput").val();
		console.log(myInput);
		
		//je veux recup attribut style de ma div
		var myDiv = $("div").attr("style");
		console.log(myDiv);
		
		$("#p2").text("Voila mon nouveau texte");
		
		/*en plus d'afficher le nouveau text html prend
		en compte balises html sans les afficher*/
		$("#p3").html("Voila <b>un nouveau</b> texte");
		$("#myInput2").val("nouvelle valeur");
		
		//ajout d'un noeud en dernier dans la div
		$("div").append("<p>Mon nouveau paragraphe</p>");
		//ajout d'un noeud en premier dans la div
		$("div").prepend("<p>Mon nouveau paragraphe</p>");
		
		//ajout noeud après la div
		$("div").after("<p>Mon nouveau paragraphe</p>");
		
		//ajout noeud avant la div
		$("div").before("<p>Mon nouveau paragraphe</p>");
		
		//remove enleve l'element et son contenu
		$("#p1").remove();
		
		/*empty vide le contenu de l'element mais ne
		supprime pas l'element*/
		$("div").empty();
		
		//Jquery et le CSS
		/*ajout d'une classe css sur l'element, pas la 
		peine de mettre le . devant comme avec les query
		l'on peut ajouter plusieurs classes sur plusieurs
		elements*/
		$("#p4,#p5").addClass("red bold");
	});	
	
	$("#but1").click(function(){
		$("#p6").addClass("purple");
		/*toggleClass : fait le contraire
		à chaque fois*/
		$("#p7").toggleClass("purple");
		
		/*css accede ou creer un style
		et y accede: 1 arg : propriété
		2 arg: valeur */ 		
		$("#p8").css("color","green");
		/*Idem: css accede ou creer un style
		et y accede: mais avec plusieurs propriétés
		et valeurs, encapsulé dans un objet*/
		$("#p8").css({
			"color": "pink",
			"font-weight": "bold",
			"background": "yellow"
			}
		);
		
		/*signifie donne moi la valeur
		de cette propriété*/
		console.log($("#p9").css("color"));
		
		//donne la largeur de but1
		console.log($("#but1").width());
		
		//fixe une nouvelle largeur sur but2
		$("#but2").width(150);
		$("#but2").height(150);
	});
	
	$("#but2").click(function(){
		$("#p6").removeClass("purple");
	});	
		
});