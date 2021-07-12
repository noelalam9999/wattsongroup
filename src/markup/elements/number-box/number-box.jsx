import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NumberBox extends Component{
	render(){
		return(
			<>
				<div className="row">
					<div className="col-md-4">
						<div className="number-box" data-name="01">
							<div className="number-icon">01</div>
							<h5 className="title">Social Responsibilities</h5>
							<p>Our purpose follow leading design, engineering and industrial manufacturing company.</p>
							<Link to="#" className="btn-link">Read More</Link>
						</div>
					</div>
					<div className="col-md-4">
						<div className="number-box" data-name="02">
							<div className="number-icon">02</div>
							<h5 className="title">Leadership Role</h5>
							<p>Our purpose follow leading design, engineering and industrial manufacturing company.</p>
							<Link to="#" className="btn-link">Read More</Link>
						</div>
					</div>
					<div className="col-md-4">
						<div className="number-box" data-name="03">
							<div className="number-icon">03</div>
							<h5 className="title">Awards & Accolades</h5>
							<p>Our purpose follow leading design, engineering and industrial manufacturing company.</p>
							<Link to="#" className="btn-link">Read More</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default NumberBox;
