import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion, Card, Header, Button} from 'react-bootstrap';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import SolutionSidebar from '../elements/services/solution-sidebar';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import ServicesPic9 from '../../images/services/pic9.jpg';
import ServicesPic10 from '../../images/services/pic10.jpg';

class About1 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Oil And Gas</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Oil And Gas</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-fix bg-white">
							<div className="container about-video">
								<div className="row">
									<div className="col-lg-4 col-md-5 m-b30 wow fadeInUp" data-wow-delay="0.2s">
										<SolutionSidebar />
									</div>
									<div className="col-lg-8 col-md-7 service-textarea wow fadeInUp portfolio-content" data-wow-delay="0.4s">
										<div className="heading-bx text-left m-b20">
											<h3 className="title-head m-b0">Oil And Gas</h3>
											<div className="ttr-separator sepimg"></div>
										</div>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
										<div className="row ">
											<div className="col-md-12 m-b15">
												<img src={ServicesPic9} className="imghight radius-sm" alt=""/>
											</div>
										</div>
										<h4 className="title m-b5">Our solutions</h4>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<div className="row">
											<div className="col-lg-6">
												<ul className="list-check">
													<li>Then along come two they got nothin</li>
													<li>Makin their way the only way they know how</li>
													<li>That’s just a little bit more than</li>
												</ul>
											</div>
											<div className="col-lg-6">
												<ul className="list-check">
													<li>Well we’re movin’ on up to the east side.</li>
													<li>Muppet Show tonight. The mate was a mighty sailin</li>
												</ul>
											</div>
										</div>
										<h4 className="title m-b5">We Can Offer Following Types Of Solutions:</h4>
										<p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<div className="row">
											<div className="col-xl-5 col-lg-12">
												<img src={ServicesPic10} className="radius-sm m-b30" alt=""/>
											</div>
											<div className="col-xl-7 col-lg-12">
												<ul className="service-list-circle">
													<li><i className="flaticon-maintenance"></i>Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice.</li>
													<li><i className="flaticon-light-bolt"></i>Mitech takes into consideration every little detail to make sure the system run smoothly and responsively. Mitech employs a new technique called Minified Technology.</li>
													<li><i className="flaticon-mask"></i>We reduce redundant complex calculations and lengthy erroneous code texts with simpler ones to ensure Mitech would run seamlessly.</li>
												</ul>
											</div>
										</div>
										<Accordion className="ttr-accordion gray" defaultActiveKey="0">
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="0">
													<Link to="#">Electronic Materials</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body>
														To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="1">
													<Link to="#">Power systems</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="1">
													<Card.Body>
														To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="2">
													<Link to="#">Auto parts</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
										</Accordion>
									</div>
								</div>
							</div>
						</div>					
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default About1;