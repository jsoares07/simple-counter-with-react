//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import Proptypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCounter(props) {
	return (
		<div className="generalCounter">
			<div className="clock">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.digitSix}</div>
			<div className="five">{props.digitFive}</div>
			<div className="dour">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
}

SimpleCounter.prototypes = {
	digitSix: Proptypes.number,
	digitFive: Proptypes.number,
	digitFour: Proptypes.number,
	digitThree: Proptypes.number,
	digitTwo: Proptypes.number,
	digitOne: Proptypes.number,
};

let counter = 1;
setInterval(function () {
	const six = Math.floor(counter / 100000) % 10;
	const five = Math.floor(counter / 10000) % 10;
	const four = Math.floor(counter / 1000) % 10;
	const three = Math.floor(counter / 100) % 10;
	const two = Math.floor(counter / 10) % 10;
	const one = Math.floor(counter / 1) % 10;
	console.log(six, five, four, three, two, one);
	counter++;
	//render your react application
	ReactDOM.render(
		<SimpleCounter
			digitSix={six}
			digitFive={five}
			digitFour={four}
			digitThree={three}
			digitTwo={two}
			digitOne={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
