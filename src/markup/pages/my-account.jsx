import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

class About1 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url(images/banner/banner1.jpg)"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">About Us Simple</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>About Us Simple</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default About1;