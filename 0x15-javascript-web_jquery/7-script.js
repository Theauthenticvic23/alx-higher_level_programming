// Wait for the document to be ready
$(document).ready(function() {
    // Fetch data from the API
    $.getJSON('https://swapi-api.alx-tools.com/api/people/5/?format=json', function(data) {
        // Extract the character name from the fetched data
        var characterName = data.name;
        
        // Display the character name in the <div> element with id 'character'
        $('#character').text(characterName);
    });
});
