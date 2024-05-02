// Wait for the document to be ready
$(document).ready(function() {
    // Fetch data from the API
    $.getJSON('https://hellosalut.stefanbohacek.dev/?lang=fr', function(data) {
        // Extract the translation of "hello" from the fetched data
        var helloTranslation = data.hello;
        
        // Display the translation in the <div> element with id 'hello'
        $('#hello').text(helloTranslation);
    });
});
