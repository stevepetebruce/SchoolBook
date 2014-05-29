// JavaScript Document


// first we must find all inputs
var inputs = document.getElementsByTagName("input");

// find all individual questions
var questions = document.getElementsByTagName("section");

// find questions with class
var selectedQuestion = document.getElementsByClassName("current");

// find the next button
var button = document.getElementsByClassName("nextButton");
for(var i=0; i < button.length; i++) {
	button[i].onclick = function() {
		nextQuestion();
	};
}

// question and answers function:
function answersArray() {
	// and create an empty array to store the answers
	var answers = [];
	// and have our correct answers
	var correctAnswers = ["Germany", "1939", "1944", "1 sister", "A journalist", "Otto Frank", "10", "In Auschwitz (Camp A)", "1945", "Otto"];
	// test the length of the arrays
	var length = Math.min(answers.length,correctAnswers.length);
	// have the numbers of correct and incorrect answers
	var countMatched = 0, countNotMatched = 0;
	// create a loop to go through the inputs
	for (i=0; i < inputs.length; i++) {
		// only target the selected radio buttons
		if(inputs[i].checked) {
			// and push that value into the array of answers
			answers.push(inputs[i].value);
		}
		
	}
	var correctCount = 0;
	var incorrectCount = 0;
	for (i=0; i < answers.length; i++) {
		if (answers[i] === correctAnswers[i]) {
			correctCount++;
		}
	}
	alert('You got ' + correctCount + ' out of 10 answers correct!');
	return answers;
}

// copied this function as i need a way to test if element has a class
function hasClass( elem, klass ) {
     return (" " + elem.className + " " ).indexOf( " "+klass+" " ) > -1;
}

// move to next question
var i = 0;
function nextQuestion() {
	//for (i=0; i < questions.length; i++) {
		if (questions[i] === selectedQuestion[0]) {
			console.log("hi");
			console.log(i);
			questions[i].className = "";
			questions[i + 1].className = "current";
			i++;
			return i;
		}
	//}
}

// fire the function on final click
var submit = document.getElementById("submitAnswers");
submit.onclick = function() {
	answersArray();
};

// RADIO BUTTON UI BELOW

if( document.createElement('svg').getAttributeNS ) {

	var radiobxsFill = Array.prototype.slice.call( document.querySelectorAll( '#questionsList input[type="radio"]' ) ),
		pathDefs = {
			fill : ['M34.745,7.183C25.078,12.703,13.516,26.359,8.797,37.13 c-13.652,31.134,9.219,54.785,34.77,55.99c15.826,0.742,31.804-2.607,42.207-17.52c6.641-9.52,12.918-27.789,7.396-39.713 C85.873,20.155,69.828-5.347,41.802,13.379']
		},
		animDefs = {
			fill : { speed : .8, easing : 'ease-in-out' }
		};

	function createSVGEl( def ) {
		var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
		if( def ) {
			svg.setAttributeNS( null, 'viewBox', def.viewBox );
			svg.setAttributeNS( null, 'preserveAspectRatio', def.preserveAspectRatio );
		}
		else {
			svg.setAttributeNS( null, 'viewBox', '0 0 100 100' );
		}
		svg.setAttribute( 'xmlns', 'http://www.w3.org/2000/svg' );
		return svg;
	}

	function controlCheckbox( el, type, svgDef ) {
		var svg = createSVGEl( svgDef );
		el.parentNode.appendChild( svg );
		
		el.addEventListener( 'change', function() {
			if( el.checked ) {
				draw( el, type );
			}
			else {
				reset( el );
			}
		} );
	}

	function controlRadiobox( el, type ) {
		var svg = createSVGEl();
		el.parentNode.appendChild( svg );
		el.addEventListener( 'change', function() {
			resetRadio( el );
			draw( el, type );
		} );
	}

	radiobxsFill.forEach( function( el, i ) { controlRadiobox( el, 'fill' ); } );

	function draw( el, type ) {
		var paths = [], pathDef, 
			animDef,
			svg = el.parentNode.querySelector( 'svg' );

		switch( type ) {
			case 'fill': pathDef = pathDefs.fill; animDef = animDefs.fill; break;
		};
		
		paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );

		if( type === 'cross' || type === 'list' ) {
			paths.push( document.createElementNS('http://www.w3.org/2000/svg', 'path' ) );
		}
		
		for( var i = 0, len = paths.length; i < len; ++i ) {
			var path = paths[i];
			svg.appendChild( path );

			path.setAttributeNS( null, 'd', pathDef[i] );

			var length = path.getTotalLength();
			// Clear any previous transition
			//path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
			// Set up the starting positions
			path.style.strokeDasharray = length + ' ' + length;
			if( i === 0 ) {
				path.style.strokeDashoffset = Math.floor( length ) - 1;
			}
			else path.style.strokeDashoffset = length;
			// Trigger a layout so styles are calculated & the browser
			// picks up the starting position before animating
			path.getBoundingClientRect();
			// Define our transition
			path.style.transition = path.style.WebkitTransition = path.style.MozTransition  = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + i * animDef.speed + 's';
			// Go!
			path.style.strokeDashoffset = '0';
		}
	}

	function reset( el ) {
		Array.prototype.slice.call( el.parentNode.querySelectorAll( 'svg > path' ) ).forEach( function( el ) { el.parentNode.removeChild( el ); } );
	}

	function resetRadio( el ) {
		Array.prototype.slice.call( document.querySelectorAll( 'input[type="radio"][name="' + el.getAttribute( 'name' ) + '"]' ) ).forEach( function( el ) { 
			var path = el.parentNode.querySelector( 'svg > path' );
			if( path ) {
				path.parentNode.removeChild( path );
			}
		} );
	}

}