var button = document.getElementById('side'),
	item = button.getElementsByTagName('div');
	pic = document.getElementById('main'),
	picture = pic.getElementsByTagName('div');
	var lastNum = 0;
	button.addEventListener('click',function(e){
		listId = e.target.getAttribute('id');
		for (var i = item.length - 1; i >= 0; i--) {
			item[i].className="circle";
		}
		for (var i = picture.length - 1; i >= 0; i--) {
			picture[i].className = "picture";
		}
		listNum = parseInt(e.target.getAttribute('id').substr(7));
		item[listNum].className="circle1";
		picture[listNum].style.zIndex = "1";
		picture[lastNum].style.zIndex = "auto";
		if(lastNum<listNum){
			picture[lastNum].className="pic_leave";
			picture[listNum].className="pic_show";
		}
		else if(lastNum>listNum){
			picture[lastNum].className="pic_leave1";
			picture[listNum].className="pic_show1";
		}
		lastNum = listNum;
		button.style.backgroundColor="transparent";
});