$(document).ready(function () {
  
  $('#ajax_form button[type=submit]').click(function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      data: {
        name: $('#ajax_form input[name=name]').val(),
        student_id: $('#ajax_form input[name=student_id]').val(),
        checkBox: $('#ajax_form input[name=checkBox]').prop("checked")
      },
      url: '/ajax_data',
      success: function(data) {
        $('#ajax_output').html(data);
      }
    });
    $('#ajax_output').html('loading...');
    //console.log($('#ajax_form input[name=checkBox]'));
  });

  $('#ajax_search button[type=submit]').click(function() {
    event.preventDefault();
    $.ajax({
      method: "POST",
      data: {
        student_id: $('#ajax_search input[name=student_id]').val()
      },
      url: '/ajax_data_search',
      success: function(data) {
        $('#ajax_output').html(data);
      }
    });
    $('#ajax_output').html('loading...');
  });
});
/*
$('#ajax_form button[type=submit]').click(e => {
  e.preventDefault()
  // no need if button type is not 'submit',
  //   but make it work without ajax is a good practice

  $.get('ajax.php', {
    name: $('#ajex_form input[name=name]').val(),
    student_id: $('#ajex_form input[name=student_id]').val()
  }, (data) => {
    $('#ajax_output').html(data)
  })
  setTimeout(() => $('#ajax_output').html('loading'), 3000)
  // try to modify the timeout
})
*/
