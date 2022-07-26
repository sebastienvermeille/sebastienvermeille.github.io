$("#destination-selector").change(function() {
    $( "#destination-selector option:selected" ).each(function() {
        document.location = $( this ).attr("value");
    });
});