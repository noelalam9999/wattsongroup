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
							<p style={{color:"black",fontSize:"20px",marginBottom:'10px'}} className="m-b0"> Our mission is to produce and continually develop quality products at a competitive price while fostering a climate where environmental technologies can thrive. All employees will work together in combining their efforts and skills to ensure our mission and goals are fulfilled in a courteous manner. We will always strive to service our customer latest technological products with the utmost integrity, and to their complete satisfaction.</p>
							
							<h2 className="m-b0">Vision</h2>
							<div className="ttr-separator sepimg2"></div>
							<p style={{color:"black",fontSize:"20px"}} className="title-head m-b0">Keep the earth for the next generation a better living place by reducing harmful substances from the environment and be a premier sandwich panel manufacturer of top quality products in Bangladesh.</p>
							
							
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
