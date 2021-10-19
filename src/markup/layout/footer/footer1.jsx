import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LogoWhite from "../../../images/logo.png"
import IconImg1 from "../../../images/icon/contact/icon1.png"
import IconImg2 from "../../../images/icon/contact/icon2.png"
import IconImg3 from "../../../images/icon/contact/icon3.png"

class Footer1 extends Component{
	render(){
		return(
			<>
				{/* <!-- Footer ==== --> */}
				<footer className="footer-style2">
					<div className="footer-top bt0">
						<div className="container">
							<div className="row align-items-center footer-info">
								<div className="col-lg-3 col-md-6 col-sm-6 m-md-b30">
									<div className="feature-container left footer-info-bx">
										<div className="feature-lg text-white">
											<span className="icon-cell"><img src={IconImg3} alt=""/></span> 
										</div>
										<div className="icon-content">
											<h5 className="ttr-tilte">Address</h5>
											<p>R# 13/A, H # 27/1(3rd and 4th floor) Dhanmondi-1209, Dhaka</p>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6 col-sm-6 m-md-b30">
									<div className="feature-container left footer-info-bx">
										<div className="feature-lg text-white">
											<span className="icon-cell"><img src={IconImg1} alt=""/></span> 
										</div>
										<div className="icon-content">
											<h5 className="ttr-tilte">Contact Number</h5>
											<p>+88 02 55000740-3<br/>+8801841326226<br/>+8801841326219</p>
										</div>
									</div>
								</div>
								<div  className="col-lg-3 col-md-6 col-sm-6 m-sm-b30">
									<div className="feature-container left footer-info-bx">
										<div style={{width:"70px"}} className="feature-lg text-white">
											<span className="icon-cell"><img src={IconImg2} alt=""/></span> 
										</div>
										<div  className="icon-content">
											<h5 className="ttr-tilte">Email Address</h5>
											<p>wattson_engg1@yahoo.com{" "}
<br/>wattson_engg2@yahoo.com{" "}<br/>hydrochemical.bd@gmail.com</p>
										</div>
									</div>
								</div>
								{/* <div className="col-lg-3 col-md-6 col-sm-6 text-left text-lg-right">
									<Link to="get-in-touch" className="btn btn-long d-sm-inline-block">Get In Touch</Link>
								</div> */}
							</div>
						</div>
						<div className="container">
							<div className="row">
								<div className="col-12 col-lg-3 col-md-5 col-sm-6">
									<div className="widget footer_widget">
										<h5 className="footer-title">Our Solutions</h5>
										<ul>
											<li><Link to="sow-hvac"><span>HVAC(Central Air Conditioning System)</span></Link></li>
											<li><Link to="airconditioning"><span>Commercial Central Air Conditioning System.</span></Link></li>
											<li><Link to="sow-pusandwichpanel"><span>PU Sandwich Panel Manufacturer</span></Link></li>
											<li><Link to="sow-dehumidifier"><span>Variable Refrigerant Flow (VRF) System.</span></Link></li>
											<li><Link to="sow-cogeneration"><span>Cogeneration, Chilling & Humidification plant.</span></Link></li>
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-4 col-md-7 col-sm-6">
									<div className="widget list-2">
										<h5 className="footer-title">Company</h5>
										<ul>
											<li><Link to="/">Home</Link></li>
											<li><Link to="about-us">About Us</Link></li>
											
											<li><Link to="all-projects">Projects</Link></li>
											
											<li><Link to="gallery">Gallery</Link></li>
											<li><Link to="wec">Wattson Engineering</Link></li>
											<li><Link to="wep">Euro Panel Bangaldesh</Link></li>
											<li><Link to="hydrochemical-bd">Hydro Chemical Bangladesh</Link></li>
											
										</ul>
									</div>
								</div>
								<div className="col-12 col-lg-5 col-md-12 col-sm-12">
									<div className="widget widget_info">
										<h5 className="footer-title">Visit Our Office At</h5>
										<p>R# 13/A, H # 27/1(3rd and 4th floor) Dhanmondi, Dhaka <br/></p>
										<ul style={{marginBottom:'10px'}}>
										<li className="d-none d-sm-block">
												<Link to="get-in-touch" className="btn"><span style={{color:"black"}}>Contact Us</span></Link>
											</li>

											</ul>										<ul className="list-inline ft-social-bx">
											<li><Link to="#" className="btn button-sm"><i style={{color:"black"}} className="fa fa-facebook"></i></Link></li>
											<li><Link to="#" className="btn button-sm"><i style={{color:"black"}} className="fa fa-twitter"></i></Link></li>
											<li><Link to="#" className="btn button-sm"><i style={{color:"black"}} className="fa fa-linkedin"></i></Link></li>
											<li><Link to="#" className="btn button-sm"><i style={{color:"black"}} className="fa fa-google-plus"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="container">
							<div className="row">
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-left">
									<p className="m-b0">Copyright © 2021 
									<img src={LogoWhite} className="footer-b-logo m-lr5" width="50" alt=""/> 
									All Rights Reserved.</p>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-12 text-center text-md-right">
									<ul className="link-inline">
										<li><Link to="/">Home</Link></li>
										<li><Link to="about-1">About</Link></li>
										<li><Link to="faq-1">FAQs</Link></li>
										<li><Link to="contact-1">Contact</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer1;
