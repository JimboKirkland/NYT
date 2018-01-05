

$("#searchBtn").on("click", function(event){

var searchTerm = $("input").eq(0).val();

var records = $("input").eq(1).val();

var startYear = $("input").eq(2).val();

var endYear = $("input").eq(3).val();

});


$("#clearBtn").on("click", function(event) {
	event.preventDefault();
	$("#topArts").empty();

});



