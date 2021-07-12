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
import ServicesPic6 from '../../images/services/pic6.jpg';
import ServicesPic7 from '../../images/services/pic7.jpg';
import ServicesPic8 from '../../images/services/pic8.jpg';

class SolutionMaterialScienceAndEngineering extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Material Science And Engineering</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Material Science And Engineering</li>
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
										
										<div className="row">
											<div className="col-lg-6">
												<div className="heading-bx text-left m-b20">
													<h3 className="title-head m-b0">Material Science And Engineering</h3>
													<div className="ttr-separator sepimg"></div>
												</div>
												<h5 className="fw4 m-b10">To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</h5>
												<p className="m-b15">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
												<p>To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
											</div>
											<div className="col-lg-6">
												<img src={ServicesPic8} className="radius-sm m-b30" alt=""/>
											</div>
										</div>
										<div className="row img-sh300 m-b20">
											<div className="col-md-6 m-b15">
												<img src={ServicesPic6} className="radius-sm imghight" alt=""/>
											</div>
											<div className="col-md-6 m-b15">
												<img src={ServicesPic7} className="radius-sm imghight" alt=""/>
											</div>
										</div>
										<h4 className="title m-b5">Our solutions</h4>
										<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										<div className="row">
											<div className="col-lg-6">
												<div className="skillbar-box">
													<h6 className="title">Advanced Technology</h6>
													<div className="skillbar appear">
														<p className="skillbar-bar" style={{width:"96%"}}></p>
														<span className="skill-bar-percent">96%</span>
													</div>
												</div>
												<div className="skillbar-box">
													<h6 className="title">Delivery On Time</h6>
													<div className="skillbar appear">
														<p className="skillbar-bar" style={{width:"92%"}}></p>
														<span className="skill-bar-percent">92%</span>
													</div>
												</div>
												<div className="skillbar-box">
													<h6 className="title">Certified Engineers</h6>
													<div className="skillbar appear">
														<p className="skillbar-bar" style={{width:"79%"}}></p>
														<span className="skill-bar-percent">79%</span>
													</div>
												</div>
											</div>
											<div className="col-lg-6">
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
										
										
										<h4 className="title m-b5">Chemical Research Benefits</h4>
										<p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
										
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

export default SolutionMaterialScienceAndEngineering;