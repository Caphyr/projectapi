$(".show-todolist-modal").click(function (event) {
    event.preventDefault();
    $("#todolist-modal").modal("show")
  })

// $(document).ready(function(){
// 	$(".cargar").click(function() {
// 		 $(".contenedor").load("http://localhost:3000/v1/todos?lista=1");
// 	})	
// })


$(document).ready(function(){
		$.getJSON("http://localhost:3000/v1/todos?lista=1", function(results) {

		 	for (var i = 0; i < results.length; i++) {
		 		$(".list-default").append("<li class=\"list-group-item\">");
				$(".list-group-item").append("<h4 class=\"list-group-item-heading\id=\"elemento\">" + results[i].Titulo + "</h4>");
				$(".list-group-item").append("<p class=\"list-group-item-text\id=\"texto2\">" + results[i].Descripcion + "</p>");
				$(".list-default").append("</li>");
		 	
		 	}
		})
            
})

