import React, { Component, ButtonGroup, useState, ToggleButton, render } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import PicMan from '../../images/about/pic-man-1.png';
  
class Appointment extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Appointment</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Appointment</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area bg-white section-sp3">
							<div className="container">
								<div className="row">
									<div className="col-sm-12 col-md-6 col-lg-6">
										<div className="">
											<div className="heading-bx text-left">
												<h6 className="title-ext m-b0">Appointment</h6>
												<h2 className="title-head m-b0">Make In Appointment</h2>
												<div className="ttr-separator sepimg"></div>
											</div>
											<form className="ajax-form form-area-box m-b30" action="script/contact.php">
												<div className="ajax-message"></div>
												<div className="row placeani">
													<div className="col-lg-12">
														<div className="form-group">
															<div className="input-group">
																<label>Name And Surname</label>
																<input name="name" type="text" required className="form-control valid-character"/>
															</div>
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<div className="input-group"> 
																<label>Your Email Address</label>
																<input name="email" type="email" className="form-control" required />
															</div>
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<div className="input-group">
																<label>Phone Number</label>
																<input name="phone" type="text" required className="form-control int-value"/>
															</div>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="form-group">
															<div className="input-group">
																<input name="date" type="date" required className="form-control int-value"/>
															</div>
														</div>
													</div>
													<div className="col-lg-6">
														<div className="form-group">
															<div className="input-group">
																<input name="date" type="date" required className="form-control int-value"/>
															</div>
														</div>
													</div>
													<div className="col-lg-12">
														<div className="form-group">
															<label>HOURLY PREFERENCE</label>
															<div className="check-btn" data-toggle="buttons">
																<label className="btn btn-sm active">
																	<input type="radio" name="options" id="option1" defaultChecked=""/> MORNING
																</label>
																<label className="btn btn-sm">
																	<input type="radio" name="options" id="option2"/> LUNCH
																</label>
																<label className="btn btn-sm">
																	<input type="radio" name="options" id="option3"/> EVENING
																</label>
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
									<div className="col-sm-12 col-md-6 col-lg-6">
										<div className="appoint-img">
											<img src={PicMan} alt=""/>	
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

export default Appointment;