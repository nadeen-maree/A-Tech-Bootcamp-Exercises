// Exercise1:
$("body").append("<button id = btn>Add Human</button>")
$("body").append("<input type=text id=my-input placeholder=name>")


$("#btn").click(function () {
    $("#names").append(`<li id=name>${$('#my-input').val()}</li>`)
})

// Exercise2:
$("body").on("click", "#name", function() {
    $(this).remove()
  });