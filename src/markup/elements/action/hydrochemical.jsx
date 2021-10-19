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
							<p style={{fontSize:"20px",marginBottom:'10px'}} className=" m-b0"> Hydrochemical Bangladesh is regularly sought to bring revelation in the Water Treatemtn Chemical Sector. Providing Services with the cost efficiency and best servcies. Customer satisfation is the ultimate goal of HCB</p>
							
							<h2 className=" m-b0">Vision</h2>
							<div className="ttr-separator sepimg2"></div>
							<p style={{fontSize:"20px"}} className="title-head m-b0">HCB is committed to quality. We nevercompromise on quality. Customer satisfaction is our main capital. We strive for customer satisfaction and always dedicated to the customer. We love to tell that we are for you. It means we are dedicated to you. HCb always concern about the environment. We use eco-friendly machineries and materials.</p>
							
							
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
