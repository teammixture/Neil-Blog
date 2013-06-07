var page = 1;

$(function() {

	if ($(".loadmore").length > 0) {
		loadMoreSetup();
	}

});

function loadMoreSetup() {

	var paging = $(".loadmore");

	//if (paging.children(".nxt").length > 0)
	paging.html("<a href='#' class='more'>More Posts</a>");

	paging.on("click", ".more", function() {

		page++;

		$.when($.ajax("/_collections?collection=articles&order=desc&rpp=1&page=" + page, 'json')).then(function(data, textStatus, jqXHR){

			for(i in data.collection)
			{
				var item = data.collection[i];
				$("<article><h2><a href=\"" + item.slug + "\">" + item.title + "</a></h2><p>" + item.body.stripHtml().truncateWords(50, item.slug) + "</p><div class=\"details\">Posted: <span>" + item.date.postedFormat() + "</span></div><hr></article>").insertBefore(".content .loadmore");
			}

			if (page >= data.total_pages)
				$(".loadmore").hide();

		});

		return false;

	});

}

String.prototype.stripHtml = function(){
	var div = document.createElement("div");
	div.innerHTML = this;
	return div.textContent || div.innerText || "";
};

String.prototype.truncateWords = function(qty, link){
	var value_arr = this.split(' ');
  if(qty < value_arr.length)
  	value = value_arr.slice(0,qty).join(' ') + "... <a href='" + link + "' class='more'>Read the post in full</a>"
	return value;
};

String.prototype.postedFormat = function(){
	var date = new Date(this);
	return date.toDateString();
}