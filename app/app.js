

$.getJSON("/all", function(data){
	console.log(data);
		for (var i = 0; i < data.length; i++) {
			$("#coaches").append("<div class= 'media'> <a= href='/coaches'><img class='media-object' src= 'http://via.placeholder.com/64x64'></a><div class='media-left media-middle'></div><div class = 'media-body'> <h4 class='media-heading'>" +data[i].name + "</h4> <div class= 'contact'>" +data[i].email + "</div><div class= 'contact'>" +data[i].phone + "</div> <div class= bio> " +data[i].bio+"</div></div>");
		
		}
});