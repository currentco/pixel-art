$(document).ready(function() {
  function makeGrid() {
    // selects input values for the grid
    const rows = $("#inputHeight").val();
    const columns = $("#inputWidth").val();
    const table = $("#pixelCanvas");

    // removes any previous child elements of the table
    table.children().remove();

    // creates the grid according to the input values
    if (rows <= 50 && rows > 0 && (columns <= 50 && columns > 0)) {
      for (var x = 0; x < rows; x++) {
        table.append("<tr></tr>");
        for (var y = 0; y < columns; y++) {
          table
            .children()
            .last()
            .append("<td></td>");
        }
      }
      $("p").css("color", "black");
      $("#clear").css("visibility", "visible");
    } else {
      alert("Value needs to be between 1 and 50.");
      $("p").css("color", "white");
      $("#clear").css("visibility", "hidden");
    }

    // after clicking on a cell, adds selected color
    $(table).on("click", "td", function() {
      let color = $("#colorPicker").val();
      $(this).css("background-color", color);
    });

    // deletes a color from a cell with a right click
    $("td").contextmenu(function(e) {
      e.preventDefault();
      $(this).css("background-color", "");
    });

    // after clicking the reset button, clears the grid
    $("#clear").click(function() {
      $("td").css("background-color", "");
    });
  }

  // monitors the submit button to call the makeGrid function
  $("#submit-button").click(function(z) {
    z.preventDefault();
    makeGrid();
  });
});