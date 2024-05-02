// Wait for the document to be ready
$(document).ready(function() {
    // Add click event handler to the div with id 'toggle_header'
    $('#toggle_header').click(function() {
        // Check if the <header> element has class 'red'
        if ($('header').hasClass('red')) {
            // If it has class 'red', remove it and add class 'green'
            $('header').removeClass('red').addClass('green');
        } else {
            // If it doesn't have class 'red', remove class 'green' and add class 'red'
            $('header').removeClass('green').addClass('red');
        }
    });
});
