var agenda=[];


$("#save").click(function() {

var nom= $("#nom").add(nom).val();
var prenom=$("#prenom").add(prenom).val();
var age=$("#age").add(age).val(); 


var pers={'nom':nom, 'prenom': prenom, 'age': age};
  
	
	
agenda.push(pers);	
	
$("input").val(" ");

console.log(agenda);


$("table").append("<tr><td>"+nom+"</td><td>"+prenom+"</td><td>"+age+"</td>"+"<td><button class='supr'>x</button></td></tr>");

$("table").tablesorter({sortList: [[ 0 , 0 ], [ 1 , 0 ]]}); 

});


$("table").delegate(".supr", "click",  function(){

	$(this).parent().parent().remove();


});




//sessionStorage.setItem("");
//var  = sessionStorage.getItem("");


//.sort(function(a, b) {
//  return a - b;
//});

