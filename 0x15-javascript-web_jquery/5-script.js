// Wait for the document to be ready
$(document).ready(function() {
    // Add click event handler to the div with id 'add_item'
    $('#add_item').click(function() {
        // Create a new <li> element with the text "Item"
        var newItem = $('<li>Item</li>');
        
        // Append the new <li> element to the <ul> with class 'my_list'
        $('ul.my_list').append(newItem);
    });
});
