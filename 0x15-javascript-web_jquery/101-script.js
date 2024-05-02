// Wait for the document to be ready
$(document).ready(function() {
    // Add click event handler for adding item
    $('#add_item').click(function() {
        // Create a new <li> element with the text "Item"
        var newItem = $('<li>Item</li>');
        
        // Append the new <li> element to the <ul> with class 'my_list'
        $('ul.my_list').append(newItem);
    });
    
    // Add click event handler for removing item
    $('#remove_item').click(function() {
        // Remove the last <li> element from the <ul> with class 'my_list'
        $('ul.my_list li:last-child').remove();
    });
    
    // Add click event handler for clearing the list
    $('#clear_list').click(function() {
        // Remove all <li> elements from the <ul> with class 'my_list'
        $('ul.my_list').empty();
    });
});
