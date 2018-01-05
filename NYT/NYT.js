

$("#searchBtn").on("click", function(event){

var searchTerm = $("input").eq(0).val();

var records = $("input").eq(1).val();

var startYear = $("input").eq(2).val();

var endYear = $("input").eq(3).val();

/*var searchTerm = "white house";
var startYear ='';
var records = '';
var endYear ='';
*/
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
 'api-key': "03a9d32e584648b69559d0694d8a9a1c",
 q: searchTerm,
 begin_date: startYear,
 end_date: endYear,
 page: records

});
$.ajax({
 url: url,
 method: 'GET',
}).done(function(result) {
 console.log(result);
}).fail(function(err) {
 throw err;
});

});


$("#clearBtn").on("click", function(event) {
	event.preventDefault();
	$("#topArts").empty();

});



