

$.getJSON("/all", function(data){
	console.log(data);
		for (var i = 0; i < data.length; i++) {
			$("#coaches").append("<a>"+data[i].name+"</a>");
		}
})