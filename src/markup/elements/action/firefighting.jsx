import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Action extends Component{
	
	render(){
		return(
			<>
				<div className="section-area section-sp2 bg-primary parallax">
					<div className="container">
						<div style={{color:"black"}} className="heading-bx text-center m-b0">
							<h2 className="m-b0">Mission</h2>
							<div className="ttr-separator sepimg2"></div>
							<p style={{fontSize:"20px",marginBottom:'10px'}} className="m-b0">Our mission is the protection and preservation of life and property for the people we serve. We are
committed to doing so through the provision of quality cost effective services in the areas of fire

suppression and emergency First Responder / Medical Assist services.”</p>
							
							<h2 className="m-b0">Vision</h2>
							<div className="ttr-separator sepimg2"></div>
							<p style={{fontSize:"20px"}} className="title-head m-b0">To be a progressive organization that leads the community in public safety. The service we provide

will be of the highest quality afforded to the citizens of our community.</p>
							
							
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
