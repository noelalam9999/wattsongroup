import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import About from '../elements/about/about3';
import Portfolio from '../elements/portfolio/portfolio-box1';
import ClientLogo from '../elements/client-logo/client-logo-1';
import PricingTable from '../elements/pricingtable/pricingtable';

class About3 extends Component {
	
	render(){
		
		return (
			<>
			
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">About us Modern</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>About us Modern</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2">
							<div className="container">
								<About />
							</div>
						</div>
						
						<Portfolio />
						
						<div className="section-area section-sp2">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Our Work Process</h6>
									<h2 className="title-head m-b0">Who We Are</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="col-md-4 m-sm-b40">
										<div className="feature-container center feature-bx3 right-img">
											<div className="feature-box-xl text-black bg-white m-b20 radius ">
												<Link to="#" className="icon-cell"><i className="flaticon-1-helmet"></i></Link>
												<span className="icon-no">01</span>	
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Who We Are</h4>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											</div>
											<i className="ti-panel bg-icon"></i>
										</div>
									</div>
									<div className="col-md-4 m-sm-b40">
										<div className="feature-container center feature-bx3 right-img2">
											<div className="feature-box-xl text-black bg-white m-b20 radius ">
												<Link to="#" className="icon-cell"><i className="flaticon-1-engineer"></i></Link>
												<span className="icon-no">02</span>	
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Our Security</h4>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											</div>
											<i className="ti-panel bg-icon"></i>
										</div>
									</div>
									<div className="col-md-4">
										<div className="feature-container center feature-bx3">
											<div className="feature-box-xl text-black bg-white m-b20 radius ">
												<Link to="#" className="icon-cell"><i className="flaticon-1-factory-1"></i></Link>
												<span className="icon-no">03</span>	
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Our Process</h4>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											</div>
											<i className="ti-panel bg-icon"></i>
										</div>
									</div>
									<div className="col-md-12 text-center m-t50">
										<Link to="get-in-touch" className="btn">Get In Touch</Link>
									</div>
								</div>
								<div className="ttr-divider bg-black op2 tb50"></div>
								
								<ClientLogo />
								
							</div>
						</div>
						
						<div className="section-area section-sp1 bg-gray">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Company Stats</h6>
									<h2 className="title-head m-b0">We are here to manage your finance<br/> with experience</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<PricingTable />
							</div>
						</div>
						
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default About3;