// Wait for the document to be ready
$(document).ready(function() {
    // Add click event handler to the div with id 'red_header'
    $('#red_header').click(function() {
        // Update the text color of the <header> element to red (#FF0000)
        $('header').css('color', '#FF0000');
    });
});
