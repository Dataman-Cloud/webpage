(function (window) {
	var cover = document.querySelector('.cover');
	var btn = document.getElementById('button');
	btn.addEventListener('click',function() {
		var isDisplay = getCSSValue(cover,'display')
		if(isDisplay == 'none') {
			cover.style.display = 'block';
		} else {
			cover.style.display = 'none';
		}
	});
	
	var drop = document.querySelector('#dropdown-solution');
	var menu = document.querySelector('#solution-menu');
	drop.onclick =function(event) {
		event.stopPropagation();
		var notDisplay=getCSSValue(menu,'display');
		if(notDisplay == 'none') {
			menu.style.display = 'block';
		} else {
			menu.style.display = 'none';
		}
	}
function getCSSValue(obj,key){//获取元素CSS值
        if(obj.currentStyle){//IE
            return obj.currentStyle[key];   
        }else{//!IE
            return document.defaultView.getComputedStyle(obj,null)[key];
        }
    }
})(window);
