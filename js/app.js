var agenda=[];

$("#save").click(function() {

var nom= $("#nom").add(nom).val();
var prenom=$("#prenom").add(prenom).val();
var age=$("#age").add(age).val(); 


var pers={'nom':nom, 'prenom': prenom, 'age': age};
  
	
	
agenda.push(pers);	
	
$("input").val(" ");

console.log(agenda);


$("table").append("<tr><td>"+nom+"</td><td>"+prenom+"</td><td>"+age+"</td></tr>");



});
  









