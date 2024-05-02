// Wait for the document to be ready
$(document).ready(function() {
    // Add click event handler for the translate button
    $('#btn_translate').click(function() {
        // Get the language code entered by the user
        var languageCode = $('#language_code').val();
        
        // Fetch data from the API using the entered language code
        $.getJSON('https://www.fourtonfish.com/hellosalut/hello/' + languageCode, function(data) {
            // Extract the translation of "Hello" from the fetched data
            var helloTranslation = data.hello;
            
            // Display the translation in the <div> element with id 'hello'
            $('#hello').text(helloTranslation);
        });
    });
});
