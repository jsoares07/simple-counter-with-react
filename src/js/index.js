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
			<div className="six">{props.posSix}</div>
			<div className="five">{props.posFive}</div>
			<div className="dour">{props.posFour}</div>
			<div className="three">{props.posThree}</div>
			<div className="two">{props.posTwo}</div>
			<div className="one">{props.posOne}</div>
		</div>
	);
}

SimpleCounter.prototypes = {
	posSix: Proptypes.number,
	posFive: Proptypes.number,
	posFour: Proptypes.number,
	posThree: Proptypes.number,
	posTwo: Proptypes.number,
	posOne: Proptypes.number,
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
			posSix={six}
			posFive={five}
			posFour={four}
			posThree={three}
			posTwo={two}
			posOne={one}
		/>,
		document.querySelector("#app")
	);
}, 1000);
