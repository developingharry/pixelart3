// Use .keypress() and .change() if you want continuous update
var rows;
var cols;
// var color = $('#colorPicker'.val());

$('#rowsInput').keyup(function() {
    rows = parseFloat($(this).val());
});

$('#colsInput').keyup(function() {
    cols = parseFloat($(this).val());
});

$(".colorPickerHome").hide();

$(".clickMe").click(function makeGrid() {
    $(".tableHome").empty();
    $(".colorPickerHome").show();

    for (var row = 0; row < rows; row++) {
        $('table').append("<tr></tr>");
    };
    for (var col = 0; col < cols; col++) {
        $('tr').append('<td class="cell"></td>');
        $(".cell").click(function() {
            var color = $("#colorPicker").val();
            $(this).css("background-color", color);
        });
    };
});
