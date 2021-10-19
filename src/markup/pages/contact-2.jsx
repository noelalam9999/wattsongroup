import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Loyout
import Header1 from '../layout/header/header2';
import Footer1 from '../layout/footer/footer1';

// Elements
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';

class Contact2 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Contact</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Contact</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area bg-gray">
							<div className="container">		
								<div className="row contact-bx-area2">
									<div className="col-lg-8 col-md-12 wow fadeIn section-sp2" data-wow-delay="0.4s">
										<form className="form-area-box ajax-form p-lr30 p-sm-lr5" action="script/contact.php">
											<div className="ajax-message"></div>
											<div className="heading-bx">
												<h6 className="title-ext m-b0">Get In Touch</h6>
												<h2 className="title-head m-b0">Contact Us 2</h2>
												<div className="ttr-separator sepimg"></div>
												<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
											</div>
											<div className="row placeani">
												<div className="col-lg-6 ">
													<div className="form-group">
														<div className="input-group">
															<label>Your Name</label>
															<input name="name" type="text" required className="form-control valid-character"/>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="input-group"> 
															<label>Your Email Address</label>
															<input name="email" type="email" className="form-control" required />
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="input-group">
															<label>Your Phone</label>
															<input name="phone" type="text" required className="form-control int-value"/>
														</div>
													</div>
												</div>
												<div className="col-lg-6">
													<div className="form-group">
														<div className="input-group">
															<label>Subject</label>
															<input name="subject" type="text" required className="form-control"/>
														</div>
													</div>
												</div>
												<div className="col-lg-12">
													<div className="form-group">
														<div className="input-group">
															<label>Type Message</label>
															<textarea name="message" rows="4" className="form-control" required ></textarea>
														</div>
													</div>
												</div>
												<div className="col-lg-12">
													<button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
												</div>
											</div>
										</form>
									</div>
									<div className="col-lg-4 col-md-12 wow fadeIn right-info bg-primary p-sm-lr15" data-wow-delay="0.4s">
										<div className="contact-icon-box">
											<h5 className="title"><i className="icon la la-map-marker-alt"></i>Address</h5>		
											<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
											<i className="la la-map-marker-alt bg-icon"></i>
										</div>
										<div className="contact-icon-box">
											<h5 className="title"><i className="icon la la-phone-volume"></i>Contact Number</h5>		
											<p>+001 123 456 790</p>
											<p>(02) 3424 44 00</p>
											<i className="la la-phone-volume bg-icon"></i>
										</div>
										<div className="contact-icon-box">
											<h5 className="title"><i className="icon la la-envelope-open"></i>Email Address</h5>		
											<Link to="">info@yourdomain.com</Link>
											<Link to="">example@support.com</Link>
											<i className="la la-envelope-open bg-icon"></i>
										</div>
										<div className="contact-icon-box">
											<h5 className="title"><i className="icon la la-business-time"></i>Working hours</h5>		
											<p>Mon – Fri: 8:30 – 18:30</p>
											<i className="la la-business-time bg-icon"></i>
										</div>
									</div>
								</div>
							</div>
						</div>		
						
						<div className="section-area section-sp2 bg-gray">
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

export default Contact2;