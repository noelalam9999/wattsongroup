import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import Icon1 from '../../images/icon/contact/icon1.png';
import Icon2 from '../../images/icon/contact/icon2.png';
import Icon3 from '../../images/icon/contact/icon3.png';

class GetInTouch extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Get In Touch</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Get In Touch</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area bg-gray section-sp2">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 col-md-7">
										<div className="heading-bx">
											<h6 className="title-ext m-b0">Get In Touch</h6>
											<h3 className="title-head m-b0">Request for Free Conslutation</h3>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
										</div>
										<div className="row m-b30">
											<div className="col-md-12">
												<form className="ajax-form form-area-box get-in-touch" action="script/contact.php">
													<div className="ajax-message"></div>
													<div className="row placeani">
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">
																	<label>Name*</label>
																	<input name="name" type="text" className="form-control" required/>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group"> 
																	<label>Company*</label>
																	<input name="email" type="email" className="form-control" required />
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">
																	<label>Email*</label>
																	<input name="phone" type="email" className="form-control" required />
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">
																	<label>Phone Number*</label>
																	<input name="phone" type="text" className="form-control" required />
																</div>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="row m-b20">
																<div className="col-md-12 col-lg-12">
																	<h5>Services You Interested</h5>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="checkbox" className="custom-control-input" id="customControlAutosizing1" />
																		<label className="custom-control-label" htmlFor="customControlAutosizing1">Agricultural Engineering</label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="checkbox" className="custom-control-input" id="customControlAutosizing2"/>
																		<label className="custom-control-label" htmlFor="customControlAutosizing2">Chemical Research</label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="checkbox" className="custom-control-input" id="customControlAutosizing3"/>
																		<label className="custom-control-label" htmlFor="customControlAutosizing3">Material Science</label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="checkbox" className="custom-control-input" id="customControlAutosizing4"/>
																		<label className="custom-control-label" htmlFor="customControlAutosizing4">Mechanical Engineering</label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="checkbox" className="custom-control-input" id="customControlAutosizing5"/>
																		<label className="custom-control-label" htmlFor="customControlAutosizing5">Oil and Gas</label>
																	</div>
																</div>
																<div className="col-md-12 col-lg-4">
																	<div className="custom-control custom-checkbox m-b10">
																		<input type="checkbox" className="custom-control-input" id="customControlAutosizing6"/>
																		<label className="custom-control-label" htmlFor="customControlAutosizing6">Power and Energy</label>
																	</div>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group"> 
																	<select name="quote-request-reach">
																		<option value="">Best Time to Reach</option>
																		<option value="09am-12pm">09 AM - 12 PM</option>
																		<option value="12pm-03pm">12 PM - 03 PM</option>
																		<option value="03pm-06pm">03 PM - 06 PM</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-6">
															<div className="form-group">
																<div className="input-group">
																	<select name="quote-request-hear">
																		<option value="">Hear About Us</option>
																		<option value="Friends">Friends</option>
																		<option value="Facebook">Facebook</option>
																		<option value="Google">Google</option>
																		<option value="Collegue">Collegue</option>
																		<option value="Others">Others</option>
																	</select>
																</div>
															</div>
														</div>
														<div className="col-lg-12">
															<div className="form-group">
																<div className="input-group">
																	<label>Phone Number*</label>
																	<textarea className="form-control" required></textarea>
																</div>
															</div>
														</div>
														<div className="col-lg-12">
															<button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-5">
										<aside className="sticky-top left-border-1">
											<div className="widget">
												<h6 className="widget-title">Our Inner Pages</h6>
												<ul className="service-list style-2">
													<li><Link to="about-1">About Us <i className="las la-question-circle"></i></Link></li>
													<li><Link to="services-1">Our Services <i className="las la-cog"></i></Link></li>
													<li><Link to="awards">Awards<i className="las la-trophy"></i></Link></li>
													<li><Link to="job-career">Job & Career<i className="las la-user-plus"></i></Link></li>
													<li><Link to="partners">Partners<i className="las la-handshake"></i></Link></li>
													<li><Link to="pricing">Pricing<i className="las la-hand-holding-usd"></i></Link></li>
													<li><Link to="appointment">Appointment<i className="las la-address-card"></i></Link></li>
													<li><Link to="case-study">Case Study<i className="las la-business-time"></i></Link></li>
													<li className="active"><Link to="client">Clients<i className="las la-user-circle"></i></Link></li>
													<li><Link to="faq-1">Faq<i className="las la-quote-left"></i></Link></li>
												</ul>
												<Link to="get-in-touch" className="btn btn-block m-t20">Get In Touch</Link>
											</div>
											<div className="widget">
												<h6 className="widget-title">Contact Us</h6>
												<ul className="contact-infolist">
													<li>
														<img src={Icon1} alt="" className="mCS_img_loaded"/>
														<h6 className="contact-title">Contact Number</h6>
														<p>+001 123 456 790 <br/>(02)  3424 44 00</p>
													</li>
													<li>
														<img src={Icon2} alt="" className="mCS_img_loaded"/>
														<h6 className="contact-title">Email Address</h6>
														<Link to="#">info@yourdomain.com</Link><br/>
														<Link to="#">example@support.com</Link>
													</li>
													<li>
														<img src={Icon3} alt="" className="mCS_img_loaded"/>
														<h6 className="contact-title">Address</h6>
														<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
													</li>
												</ul>
											</div>
										</aside>
									</div>
								</div>
								
							</div>
						</div>
						
						<div className="section-area section-sp2 bg-white">
							<div className="container wow fadeIn" data-wow-delay="0.8s">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Our Partner</h6>
									<h2 className="title-head m-b0">Partners & Clients</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<ClientLogo />
							</div>
						</div>
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default GetInTouch;