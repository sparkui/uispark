onload = function() {

	// create placeholder
	var placeholder =document.createElement("li");
	placeholder.className = 'holder';
	placeholder.style.backgroundColor = '#cecece'

	var top;
	var ifDrag;
	
	initBindEle();

	function initBindEle () {
		var sortableLi = document.querySelectorAll('li');
		
		var sortable = document.getElementById('sortable');

		for (var i=0; i<sortableLi.length; i++) {
			initSortable(i)		
		}

		function initSortable (i) {
			   
	    	var startX = 0 , startY = 0, x = 0, y = i*30;
			sortableLi[i].onmousedown = function (event){
				var event = event || window.event;
		    	event.preventDefault();
			    startX = event.screenX - x;
			    startY = event.screenY - y;

			    ifDrag = true;

		        document.onmousemove = function (event){
		            var event = event || window.event;

		            ifDrag = false;

		            var next = document.getElementsByTagName('li')[i+1];
		        	sortable.insertBefore(placeholder, next);

				    y = event.screenY - startY;
				    x = event.screenX - startX;
				    sortableLi[i].style.position = 'absolute';
				    sortableLi[i].style.opacity = 0.8;
				    sortableLi[i].style['z-index'] = 100;
				    sortableLi[i].style.left = x + 'px';
			        sortableLi[i].style.top = y + 'px';

			        top = y;

		            insertByTop(top);

		        };
		        document.onmouseup = function (){
		        	if (!ifDrag) {
		        		sortableLi[i].style['z-index'] = 99;
					    sortableLi[i].style.position = 'static';
				    	sortableLi[i].style.opacity = 1;

					    sortable.replaceChild(sortableLi[i], placeholder); 

			            document.onmousemove = null;
			            document.onmouseup = null;

						initBindEle()
		        	} 
		        };
		    };
		    sortableLi[i].onclick = function() {
		    	document.onmousemove = null
		    }
		}
	}

	function insertByTop (top) {
	 	var height = 30;
		
		var holderIndex = Math.round(top / height);

		var holder = sortable.querySelector('.holder');
		sortable.removeChild(holder);

		var lis = sortable.querySelectorAll('li');
		


		if (!lis[holderIndex]) {
			sortable.appendChild(placeholder);
		} else {
			sortable.insertBefore(placeholder, lis[holderIndex]);	
		}

			

	}
}

