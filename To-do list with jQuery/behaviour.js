$(function() {
  $("#add").on("click", function() {
    var val = $("input").val();
    if (val !== '') {
      var elem = $("<li></li>").text(val);
      $(elem).append("<button class='rem'>❌</button>");
      $("#mylist").append(elem);
      $("input").val("");
    } else {
      alert('Please enter something');
    }
  });

  $("#mylist").on('click', 'button.rem', function() {
    $(this).parent().remove();
  });

  $("#clearAll").click(function() {
    let listItems = $('#mylist li');
    if (listItems.length) {
      listItems.remove();
    } else {
      alert('No items in To-Do-List.');
    }
  });
});
