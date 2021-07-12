import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header5 from '../layout/header/header5';
import Footer1 from '../layout/footer/footer1';

// Elements
import Appointment from '../elements/appointment/appointment';
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import ServicesPic1 from '../../images/our-services/pic1.jpg';
import ServicesPic2 from '../../images/our-services/pic2.jpg';
import ServicesPic3 from '../../images/our-services/pic3.jpg';
import ServicesPic4 from '../../images/our-services/pic4.jpg';

class About1 extends Component {
	
	render(){
		return (
			<>
				<Header5 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">Services Modern</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Services Modern</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1">
							<div className="container">
								<div>
									<div className="service-img-bx">
										<div className="service-media">
											<div className="video-media-bx">
												<div>
													<img src={ServicesPic1} alt=""/>
												</div>
											</div>
										</div>
										<div className="service-info">
											<div className="title">
												<h3>Agricultural</h3>
												<p>Auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit ad litora torquent.</p>
											</div>	
											<ul className="list-check">
												<li>Web Templateinterface design </li>
												<li>Static website design</li>
												<li>Custom web design</li>
											</ul>
											<Link to="services-details" className="btn radius-xl">View Services</Link>
										</div>
									</div>
									<div className="service-img-bx">
										<div className="service-media">
											<div className="video-media-bx">
												<div>
													<img src={ServicesPic2} alt=""/>
												</div>
											</div>
										</div>
										<div className="service-info">
											<div className="title">
												<h3>Chemical Research</h3>
												<p>Auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit ad litora torquent.</p>
											</div>	
											<ul className="list-check right">
												<li>iPhone iOs Apps Development </li>
												<li>Android Apps Development </li>
												<li>Blackberry Apps Development</li>
											</ul>
											<Link to="services-details" className="btn radius-xl">View Services</Link>
										</div>
									</div>
									<div className="service-img-bx">
										<div className="service-media">
											<div className="video-media-bx">
												<div>
													<img src={ServicesPic3} alt=""/>
												</div>
											</div>
										</div>
										<div className="service-info">
											<div className="title">
												<h3>Power and Energy</h3>
												<p>Auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit ad litora torquent.</p>
											</div>	
											<ul className="list-check">
												<li>Award-winning design</li>
												<li>Super Fast Customer support</li>
												<li>Email Design</li>
											</ul>
											<Link to="services-details" className="btn radius-xl">View Services</Link>
										</div>
									</div>
									<div className="service-img-bx">
										<div className="service-media">
											<div className="video-media-bx">
												<div>
													<img src={ServicesPic4} alt=""/>
												</div>
											</div>
										</div>
										<div className="service-info">
											<div className="title">
												<h3>Oil and Gas</h3>
												<p>Auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit ad litora torquent.</p>
											</div>	
											<ul className="list-check right">
												<li>Advertising Research </li>
												<li>Brand/Image Research</li>
												<li>Business/Product Development </li>
											</ul>
											<Link to="services-details" className="btn radius-xl">View Services</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<Appointment />
						
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

export default About1;