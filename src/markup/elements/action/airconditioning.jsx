import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Action extends Component{
	
	render(){
		return(
			<>
				<div className="section-area section-sp2 bg-primary parallax">
					<div className="container">
						<div  style={{color:"black"}} className="heading-bx text-center m-b0">
							<h2 className=" m-b0">Mission</h2>
							<div className="ttr-separator sepimg2"></div>
							<p style={{fontSize:"20px",marginBottom:'10px'}} className="title-head m-b0">We are a service-based Company with a mission to provide our Customers with Quality Services. </p>
							<p style={{fontSize:"20px",marginBottom:'10px'}} className="title-head m-b0">Our Goal is to be a world-class industrial air-conditioning and refrigeration systems
service provider. </p>
							<h2 className=" m-b0">Vision</h2>
							<div className="ttr-separator sepimg2"></div>
							<p style={{fontSize:"20px"}}  className="title-head m-b0">Aims to be known as one of the best and most respected technical and engineering solutions provider, well recognized for its
consistent quality services in industrial air-conditioning and refrigeration systems.</p>
							
<p className="title-head m-b0">The Company will continue to grow; adopting modern technologies and developing competencies among its people, in order to continuously assure customer’s satisfaction through quality service workmanship.</p>
							<div className="m-t20">
								<Link to="get-in-touch" className="btn-secondry">Contact Us</Link>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Action;
