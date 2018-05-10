$(document).ready(function () {
  $('button[type=submit]').click(function() {
    $.ajax({
      data: {
        name: $('ajex_form input[name=name]').val()
        student_id: $('ajex_form input[name=student_id]').val()
      },
      url: 'ajax.php',
      success: function(data) {
        $('#ajax_output').text(data);
      }
    });
    $('#ajax_output').html('loading...');
  });
});