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
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="dour">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
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
	const six = Math.floor(counter / 100000);
	const five = Math.floor(counter / 10000);
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
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
