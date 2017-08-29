function arrayWave (length = 5, height = 5, char = 0, charFill = 1, speed = 700, emojiRandom = false, rect = true, widthWave = 2, infinityWave = true) {
	
	var array = generateArray(height, length, char),
		emoji = ['😀','💂🏽','😽','👨🏿','😜','🎩','👹','💩','👽','👻','👅','🐙','🌚🌝'];

	drawArray(array);
	generateIndexedArray(length, height, true);
	drawState(array);
	animate(array, speed, char, charFill, widthWave, infinityWave, emojiRandom, emoji, rect);

}

function generateArray (height = 5, length = 5, char = 0) {
	var array = [];

	for (let i = 0; i < height; i++) {
		var tempArray = [];
		for (let j = 0; j < length; j++) {
			tempArray.push(char);
		}
		array[array.length] = tempArray;
	}

	array['temp'] = [];
	return array;
}

function drawArray (array = []) {

	var str = '';
	array.forEach( el => {
		if (!Array.isArray(el)) return console.log('Array isNot valid  😔');
		str += el.join(' ') + '\n';
	});


	if (document.body.querySelector('#arrayID')) {
		var pre = document.body.querySelector('#arrayID');
	    pre.innerHTML = str;
	} else {
		document.body.innerHTML = '';
		document.head.innerHTML = '';
		var pre = document.createElement("pre");
		var span = document.createElement("span");
		span.appendChild(pre);
		pre.id = 'arrayID';
	    pre.textContent = str;
	   	pre.style = 'vertical-align: top; font-size: 14px; font-family: Courier, "Courier New", monospace; padding-left: 40px; border-left: 1px solid #333; display: inline-block;'
	    document.body.appendChild(span);
	}

} 

function animate (array = [], speed = 700, char = 0, charFill = 1, widthWave = 2, infinityWave = false, emojiRandom = false, emoji = [], rect = true) {
	// get middle point
	var x = array.length,
		y = array[0].length,
		midX = x / 2,
		midY = y / 2;


	if ( midX % 2 === 0 && midY % 2 === 0 ) {
		
		array['temp'].push([{
			x: Math.floor(midX),
			y: Math.floor(midY)
		}]);
		array['temp'][0].push({
			x: Math.floor(midX) - 1,
			y: Math.floor(midY)
		});
		array['temp'][0].push({
			x: Math.floor(midX),
			y: Math.floor(midY) - 1
		});
		array['temp'][0].push({
			x: Math.floor(midX) - 1,
			y: Math.floor(midY) - 1
		});
	
	} else if ( midX % 2 !== 0 && midY % 2 !== 0 ) {
	
		array['temp'].push([makePoint(Math.floor(midX), Math.floor(midY))]);

	}

	

	var count = 0;
	
	array['temp'][0].forEach( function(o) {
		array[o.x][o.y] = charFill;	
	});
	drawArray(array);


	var timer = setInterval( function() {

		count++;

		if (array['temp'][count-1]) {
			
			array['temp'][count-1].forEach( function(el) {


				// make manifulations
				if ( 
					Math.abs( (el.x + 1) - midX ) > (el.x - midX) 
					&& array[el.x + 1] !== undefined
					&& array[el.x + 1][el.y] !== charFill
				 ) {
					fill( (el.x + 1), el.y, array, charFill, count );
					if (rect == false) {
						fill( (el.x + 1), el.y + 1, array, charFill, count );
					}
				}
				if ( 
					Math.abs( (el.x - 1) - midX ) > (el.x - midX) 
					&& array[el.x - 1] !== undefined
					&& array[el.x - 1][el.y] !== charFill
				 ) {
					fill( (el.x - 1), el.y, array, charFill, count );
					if (rect == false) {
						fill( (el.x - 1), el.y - 1, array, charFill, count );
					}
				}


				if ( 
					Math.abs( (el.y + 1) - midY ) > (el.y - midY) 
					&& array[el.y + 1] !== undefined
					&& array[el.x][el.y + 1] !== charFill
				 ) {
					fill( el.x, (el.y + 1), array, charFill, count );
					if (rect == false) {
						fill( el.x - 1, (el.y + 1), array, charFill, count );
					}


				}
				if ( 
					Math.abs( (el.y - 1) - midY ) > (el.y - midY) 
					&& array[el.y - 1] !== undefined
					&& array[el.x][el.y - 1] !== charFill
				 ) {
					fill( el.x, (el.y - 1), array, charFill, count );
					if (rect == false) {
						fill( el.x + 1, (el.y - 1), array, charFill, count );
					}
				}
				// x y
				// 0 -1
				// 0 1
				// -1 -1
				// -1 0
				// 1 1
				// 1 0
				// -1 1
				// 1 -1

			});


			// widthWave ? array = makeWave(array, widthWave, charFill, char) : '';


			drawIteration(count);
			drawState(array);
			drawArray(array);


		} else if (infinityWave){
			clearInterval(timer);
			array['temp'] = []
			// return animate(array, speed, charFill, char, widthWave, infinityWave);

			return animate(array,
						   speed,
						   emojiRandom ? emoji[Math.floor(Math.random()*emoji.length) - 1] : charFill,
						   emojiRandom ? emoji[Math.floor(Math.random()*emoji.length) - 1] : char,
						   widthWave,
						   infinityWave,
						   emojiRandom,
						   emoji, 
						   rect
		   );
		}




	}, speed );


}

function makePoint (x, y) {
	return {
		x : x,
		y : y
	}
}

function fill (x, y, array, charFill, iteration) {

	array[x][y] = charFill;

	if (array['temp'][iteration] === undefined) {
		array['temp'].push([]);
		array['temp'][iteration].push({
			x: x,
			y: y
		});
	} else {
		array['temp'][iteration].push({
			x: x,
			y: y
		});
	}

	array['temp'][iteration] = unique(array['temp'][iteration]);

}


function generateIndexedArray (height = 5, length = 5, draw = true) {
	var array = [];

	for (let i = 0; i < height; i++) {
		var tempArray = [];
		for (let j = 0; j < length; j++) {
			tempArray.push(`[${i}, ${j}]`);
		}
		array[array.length] = tempArray;
	}

	if (draw) {

		var str = '';
		array.forEach( el => {
			if (!Array.isArray(el)) return console.log('Array isNot valid  😔');
			str += el.join(' ') + '\n';
		});

		var pre = document.createElement("pre");
		var span = document.createElement("span");
		span.appendChild(pre);
		pre.id = 'arrayIN';
		pre.style = 'vertical-align: top;font-size: 14px; font-family: Courier, "Courier New", monospace; padding-left: 40px; border-left: 1px solid #333; display: inline-block;'
	    pre.textContent = str;
	    document.body.querySelector('#arrayID') 
	    ? document.body.querySelector('#arrayID').parentNode.appendChild(span)
	    : document.body.appendChild(span);

	}

	return;
}

function drawState(array = []) {
	var str = JSON.stringify(array['temp'], null, 2);
	if (document.body.querySelector('#arrayOUT')) {

	    document.body.querySelector('#arrayOUT').innerHTML = '';
	    document.body.querySelector('#arrayOUT').innerHTML = str;
	    return;

	} else {

		var pre = document.createElement("pre");
		var span = document.createElement("span");
		span.appendChild(pre);
		pre.id = 'arrayOUT';
		pre.style = 'vertical-align: top; font-size: 14px; font-family: Courier, "Courier New", monospace; padding-left: 40px; border-left: 1px solid #333; display: inline-block;'
	    pre.textContent = str;
	    document.body.querySelector('#arrayIN') 
	    ? document.body.querySelector('#arrayIN').parentNode.appendChild(span)
	    : document.body.appendChild(span);

	}

    
}

function unique(array = []) {
	var obj = {};

	for (var i = 0; i < array.length; i++) {
		// every dot
		var dotX = array[i]['x'],
			dotY = array[i]['y'];

		if (obj[dotX+'_'+dotY] === undefined) {
			
			obj[dotX+'_'+dotY] = true;
			
		} else if (obj[dotX+'_'+dotY] === true) {

			array.splice(i, 1);

		}


	}		
	obj = null;
	return array;

}


function drawIteration(count) {

	if ( document.body.querySelector('#count') ) {
		document.body.querySelector('#count').textContent = 'iteration: #' + count
	} else {
		var span = document.createElement("span");
		span.id = 'count';
		span.style = 'vertical-align: top; font-size: 14px; font-family: Courier, "Courier New", monospace; padding-left: 40px; display: inline-block;';
	    span.textContent = 'iteration: #' + count;
	    document.body.appendChild(span);
	}
	
}


function makeWave(array, widthWave, char, charFill) {
	var count = 0, 
		fill  = false;

	array['temp'] = array['temp'].reverse();
	array['temp'].forEach( function(el, i) {

		if (count > widthWave) {
			
			fill = !fill;
			count = 1;

		}

		if (fill) {
			el.forEach( function(e) {
				array[e.x][e.y] = char;
			});
		} else {
			el.forEach( function(e) {
				array[e.x][e.y] = charFill;
			});
		}

		count++;

	});
	array['temp'] = array['temp'].reverse();

	return array;
}


arrayWave(15, 15, '👨🏿', '👌', 200, true, true);
// arrayWave(15, 15, '👨🏿', '🌚🌝', 200)



