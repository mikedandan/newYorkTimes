// register for API
//DONE

$("button").on("click", function () {
    var searchTerm = $(this).attr("q");
    var numRecord = $(this).attr("begin_date");
    var startYear = $(this).attr("begin_date");
    var endYear = $(this).attr("end_date");
});

var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
    'api-key': "16409e8822af4b3f93ed2a4707ab255c",
    'q': "big ben",
    'begin_date': "20100912",
    'end_date': "20110101"
});

$.ajax({
    url: url,
    method: 'GET',
}).done(function (response) {
    console.log(response.response);

    var testDiv = $(".testDiv");
    testDiv.text(JSON.stringify(response.response.docs[0].headline));



}).fail(function (err) {
    throw err;
});