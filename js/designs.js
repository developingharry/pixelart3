var rows;
var cols;

// take the input value live.  This prevents having to submit the form, which was refreshing and blanking the page.
$('#rowsInput').keyup(function() {
    rows = parseFloat($(this).val());
});

$('#colsInput').keyup(function() {
    cols = parseFloat($(this).val());
});

// colorPicker is hidden by default, so users don't try to set a color before 
// they start, which wouldn't work.  Also it looks nicer.
$(".colorPickerHome").hide();

$(".clickMe").click(function makeGrid() {
    // user is asked not to enter over 35, and their choice is over-ridden.
    // the max attribute doesn't work here, as I have chosen not to submit the form.
    if (cols > 35) {
        alert("please enter less than 35 rows or columns.");
        cols = 35;
        $("#colsInput").val("35");
    };
    if (rows > 35) {
        alert("please enter less than 35 rows or columns.");
        rows = 35;
        $("#rowsInput").val("35");
    };
    // blank the form
    $(".tableHome").empty();
    // show the color picker
    $(".colorPickerHome").show();
    // draw the rows based on the variable above
    for (var row = 0; row < rows; row++) {
        $('table').append("<tr></tr>");
    };
    // insert the columns into the above rows.  I found this easier to lay out 
    // than a nested loop
    for (var col = 0; col < cols; col++) {
        $('tr').append('<td class="cell"></td>');
        // take the color from the input and color the clicked cell.
        // some quirk of javascript that I don't yet understand meant it works inside
        // the makegrid() function, but not as a separate handler.
        $(".cell").click(function() {
            var color = $("#colorPicker").val();
            $(this).css("background-color", color);
        });
    };
});