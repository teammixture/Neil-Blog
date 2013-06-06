var page = 1;

$(function() {

	if ($(".loadmore").length > 0) {
		loadMoreSetup();
	}

});

function loadMoreSetup() {

	var paging = $(".loadmore");

	if (paging.children(".nxt").length > 0)
		paging.html("<a href='#' class='more'>More</a>");

	$(".content").on("click", ".more", function() {

		page++;

		$.when($.ajax("/_collections?collection=articles&page=" + page + "&rpp=10"))
		.then(function(data, textStatus, jqXHR){
			for(i in data.collection) {
				$(".blog-items").append("<li>" + data.collection[i].body + "</li>");
			}

			if (page >= data.total_pages)
				$(".loadmore").hide();
		});

		return false;

	});

}