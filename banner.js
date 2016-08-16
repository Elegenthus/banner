var button = document.getElementById('side'),
	item = button.getElementsByTagName('div');
	pic = document.getElementById('main'),
	picture = pic.getElementsByTagName('div');
	var lastNum = 6;
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
		// picture[lastNum].className="pic_leave"
		if(listNum==0)
		{
			picture[5].className = "pic_leave";
			picture[0].style.zIndex = "1";
		}
		else{
			picture[listNum-1].className="pic_leave";
			picture[0].style.zIndex = "auto";
		}
		picture[listNum].className="pic_show";
		// var picLeave = pic.getElementsByClassName('pic_leave');
		// picLeave.className += "picture";
		//lastNum = listNum;
		button.style.backgroundColor="transparent";
});