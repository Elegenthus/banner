var button = document.getElementById('side'),
	item = button.getElementsByTagName('div');
	picture = document.getElementsByTagName('img');
	button.addEventListener('click',function(e){
		listId = e.target.getAttribute('id');
		for (var i = item.length - 1; i >= 0; i--) {
			item[i].className="circle";
		}
		listNum = parseInt(e.target.getAttribute('id').substr(7));
		item[listNum].className="circle1";
		picture[listNum].className="pic_show";
		button.style.backgroundColor="transparent";
});