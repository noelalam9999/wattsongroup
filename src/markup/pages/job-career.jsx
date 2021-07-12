import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import Appointment from '../elements/appointment/appointment';
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import Icon1 from '../../images/icon/contact/icon1.png';
import Icon2 from '../../images/icon/contact/icon2.png';
import Icon3 from '../../images/icon/contact/icon3.png';

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
								<h1 className="text-white">Job Career</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Job Career</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area bg-gray section-sp1">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 col-md-7">
										<div className="heading-bx">
											<h6 className="title-ext m-b0">Job Career</h6>
											<h3 className="title-head m-b0">Choose the Career That Fits You Perfectly</h3>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
										</div>
										<div className="row">
											<div className="col-md-12 m-b30">
												<div className="job-career-box">
													<h4>PHP Developer</h4>
													<p><strong>Position:</strong> WordPress Developer</p>
													<p><strong>Experience:</strong> 4 5 years</p>
													<p><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
													<p><strong>Minimum Qualification Requirement :</strong> MBA</p>
													<p><strong>Job Description:</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
													<p><strong>Key Responsibilities:</strong> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
													<ul className="list-check">
														<li>Extensive experience with WordPress architecture, custom content types and plugins</li>
														<li>Strong understanding of PHP</li>
														<li>Solid foundation in front-end technologies such as HTML5, CSS3, Javascript and Ajax is plus.</li>
														<li>Experience with version control (Git preferred)</li>
														<li>Knowledge of best practices (standard naming conventions, code styles, security, etc.)</li>
														<li>Experience with Adobe Photoshop</li>
														<li>Intermediate understanding of coding SEO-friendly sites</li>
													</ul>
													<p><strong>Soft Skills:</strong> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
													<Link to="#" className="btn m-t15">Apply Now</Link>
												</div>
											</div>
											<div className="col-md-12 m-b30">
												<div className="job-career-box">
													<h4>Android Developer</h4>
													<p><strong>Position:</strong> WordPress Developer</p>
													<p><strong>Experience:</strong> 4 5 years</p>
													<p><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
													<p><strong>Minimum Qualification Requirement :</strong> MBA</p>
													<p><strong>Job Description:</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
													<p><strong>Key Responsibilities:</strong> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
													<ul className="list-check">
														<li>Extensive experience with WordPress architecture, custom content types and plugins</li>
														<li>Strong understanding of PHP</li>
														<li>Solid foundation in front-end technologies such as HTML5, CSS3, Javascript and Ajax is plus.</li>
														<li>Experience with version control (Git preferred)</li>
														<li>Knowledge of best practices (standard naming conventions, code styles, security, etc.)</li>
														<li>Experience with Adobe Photoshop</li>
														<li>Intermediate understanding of coding SEO-friendly sites</li>
													</ul>
													<p><strong>Soft Skills:</strong> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
													<Link to="#" className="btn m-t15">Apply Now</Link>
												</div>
											</div>
											<div className="col-md-12 m-b30">
												<div className="job-career-box">
													<h4>iOS Developer</h4>
													<p><strong>Position:</strong> WordPress Developer</p>
													<p><strong>Experience:</strong> 4 5 years</p>
													<p><strong>Location:</strong> 2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
													<p><strong>Minimum Qualification Requirement :</strong> MBA</p>
													<p><strong>Job Description:</strong> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
													<p><strong>Key Responsibilities:</strong> If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
													<ul className="list-check">
														<li>Extensive experience with WordPress architecture, custom content types and plugins</li>
														<li>Strong understanding of PHP</li>
														<li>Solid foundation in front-end technologies such as HTML5, CSS3, Javascript and Ajax is plus.</li>
														<li>Experience with version control (Git preferred)</li>
														<li>Knowledge of best practices (standard naming conventions, code styles, security, etc.)</li>
														<li>Experience with Adobe Photoshop</li>
														<li>Intermediate understanding of coding SEO-friendly sites</li>
													</ul>
													<p><strong>Soft Skills:</strong> It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
													<Link to="#" className="btn m-t15">Apply Now</Link>
												</div>
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
													<li className="active"><Link to="job-career">Job & Career<i className="las la-user-plus"></i></Link></li>
													<li><Link to="partners">Partners<i className="las la-handshake"></i></Link></li>
													<li><Link to="pricing">Pricing<i className="las la-hand-holding-usd"></i></Link></li>
													<li><Link to="appointment">Appointment<i className="las la-address-card"></i></Link></li>
													<li><Link to="case-study">Case Study<i className="las la-business-time"></i></Link></li>
													<li><Link to="client">Clients<i className="las la-user-circle"></i></Link></li>
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
						
						<Appointment />
						
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

export default About1;