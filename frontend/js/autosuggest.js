//https://autosuggest-backend.onrender.com/api/autosuggest?q=a&weighted=true&algorithm=trie&limit=8
var API_URL = "https://autosuggest-backend.onrender.com/api/autosuggest";

var searchBar = document.getElementById("search-bar");
var SearchSuggestions = document.getElementById("search-suggestions");
// get user typed data
    // use user typed data in the query in the API call
    //APpend all the search suggestions to div tag in UI

searchBar.addEventListener("input", function() {
    var query = searchBar.value.trim();
    console.log(query);
    fetchSuggestions(query);

})

function fetchSuggestions(query) {
    var fullAPI = API_URL + "?q=" + query + "&weighted=true&algorithm=trie&limit=8";
    fetch(fullAPI)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            // console.log(data);
            showSuggestions(data);
        })
        .catch(function(err) {
            console.log("Error: " + err);
        })

        
}
function showSuggestions(data) {
    var values = data.results;
    if(data.count==0){
        SearchSuggestions.innerHTML = "<div>No Matching results found</div>";  
    }
    else{
        var htmlString = "";
        for(var i=0;i<values.length;i++){
            htmlString += "<div>" + values[i].text + "</div>";

        }
        SearchSuggestions.innerHTML = htmlString;
    }
}
    