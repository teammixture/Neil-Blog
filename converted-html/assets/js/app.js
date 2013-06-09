var page = 1;
var rrp = 5;
//var notify = false;

$(function() {

	if ($(".paging").length > 0){
		paging();
	}

	/*if (window.location.hash){
		
		var tmpPage = window.location.hash.replace('#page-','')-1;

		if (tmpPage != page)
			notify = true;

		page = tmpPage;

		$(".more").trigger("click");
	}*/

});

function paging(){

	var paging = $(".paging");

	if (paging.children(".next").length > 0)
		paging.html("<a href='#page-2' class='more'>fetch more posts</a>");
	else
		paging.hide();

	paging.on("click", ".more", function(){

		page++;

		$.when($.ajax("/_collections?collection=article&order=desc&rpp=" + rrp + "&page=" + page, 'json')).then(function(data, textStatus, jqXHR){

			var count = 0;

			//if (notify)
			//	$("<div class='break'>Just to let you know, you've skipped a few pages of posts</div>").insertBefore(".content .paging");

			for(i in data.collection){
				count++;

				var item = data.collection[i];

				var body = item.body.stripHtml().truncateWords(50, item.slug)

				var id = "";

				if (count == 1)
					id = " id='page-" + page + "'";

				$("<article" + id + "><h2><a href=\"" + item.slug + "\">" + item.title + "</a></h2><div class=\"date\">Posted: <span>" + item.date.postedFormat() + "</span></div><p>" + body + "</p><hr></article>").insertBefore(".content .paging");
			}

			if (page >= data.total_pages)
				paging.hide();
			else{
				var remaining = (data.page === data.total_pages) ? (data.total_records-((data.page-1) * data.records_per_page)) : data.records_per_page;
				//paging.children(".more").attr("href", "#page-" + data.page).text("Next " + remaining + " Posts");
			}

			$('html, body').animate({
        		scrollTop: $("#page-" + page).offset().top
     		}, 650);

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