import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Action extends Component{
	
	render(){
		return(
			<>
				<div className="section-area section-sp2 bg-primary parallax">
					<div className="container">
						<div style={{color:"black"}} className="heading-bx text-center m-b0">
							<h2 className=" m-b0">Mission</h2>
							<div className="ttr-separator sepimg2"></div>
							<p style={{fontSize:"20px",marginBottom:'10px'}} className=" m-b0"> WATTSON Engineering & Consultants Ltd is regularly sought out by the world’s largest and most prestigious organizations to help to reduce costs and provides expertise to HVAC, Co-generation, Waste Energy Recovery System Cold room & Cold Storage. Our mission is to provide a standard group of special high quality, high value-added cost reduction and design services to clients that want to buy quality and value, not price.</p>
							
							<h2 className="m-b0">Vision</h2>
							<div className="ttr-separator sepimg2"></div>
							<p style={{fontSize:"20px"}} className="title-head m-b0">We will be recognized as the highest level of professional team of HVAC & Cogeneration products and services while providing reliable service and installation. Also strives to be the premier service provider with more efficient and effective methods and procedures.</p>
							
							
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
