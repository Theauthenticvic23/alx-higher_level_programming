// Wait for the document to be ready
$(document).ready(function() {
    // Add click event handler for the translate button
    $('#btn_translate').click(fetchTranslation);
    
    // Add keypress event handler for the language code input
    $('#language_code').keypress(function(event) {
        // Check if the pressed key is Enter (key code 13)
        if (event.which == 13) {
            fetchTranslation();
        }
    });
});

// Function to fetch translation
function fetchTranslation() {
    // Get the language code entered by the user
    var languageCode = $('#language_code').val();
    
    // Fetch data from the API using the entered language code
    $.getJSON('https://www.fourtonfish.com/hellosalut/hello/' + languageCode, function(data) {
        // Extract the translation of "Hello" from the fetched data
        var helloTranslation = data.hello;
        
        // Display the translation in the <div> element with id 'hello'
        $('#hello').text(helloTranslation);
    });
}
