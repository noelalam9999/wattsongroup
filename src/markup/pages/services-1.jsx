import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import Services from '../elements/services/services';
import MissionVision from '../elements/mission-vision/mission-vision';
import Appointment from '../elements/appointment/appointment';
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import ServicesPic1 from '../../images/our-services/pic1.jpg';
import ServicesPic2 from '../../images/our-services/pic2.jpg';
import ServicesPic3 from '../../images/our-services/pic3.jpg';
import ServicesPic4 from '../../images/our-services/pic4.jpg';

class Services1 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Services Simple</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Services Simple</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<Services />
						
						<div className="section-area bg-white">
							<div className="container">
								<MissionVision />
							</div>
						</div>
						
						<div className="section-area section-sp2 bg-white">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Our Service</h6>
									<h2 className="title-head m-b0">Take Our Services To Build <br/>Your Business</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="service-list-bx">
									<div className="service-icon-bx wow fadeInUp" data-wow-delay="0.2s">
										<div className="service-icon" data-name="1"> 
											<Link to="#"><img src={ServicesPic1} alt=""/></Link>
										</div>
										<div className="service-info">
											<h3 className="title"><Link to="#">Article & Keyword Research.</Link></h3>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											<Link to="services-details" className="btn button-md">View Details</Link>
										</div>
									</div>
									<div className="service-icon-bx wow fadeInUp" data-wow-delay="0.4s">
										<div className="service-icon" data-name="2">
											<Link to="#"><img src={ServicesPic2} alt=""/></Link>
										</div>
										<div className="service-info">
											<h3 className="title"><Link to="#">Interface Designer & UX Specialist.</Link></h3>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											<Link to="services-details" className="btn button-md">View Details</Link>
										</div>
									</div>
									<div className="service-icon-bx wow fadeInUp" data-wow-delay="0.6s">
										<div className="service-icon" data-name="3">
											<Link to="#"><img src={ServicesPic3} alt=""/></Link>
										</div>
										<div className="service-info">
											<h3 className="title"><Link to="#">Social & Online Marketing</Link></h3>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											<Link to="services-details" className="btn button-md">View Details</Link>
										</div>
									</div>
									<div className="service-icon-bx wow fadeInUp" data-wow-delay="0.8s">
										<div className="service-icon" data-name="4">
											<Link to="#"><img src={ServicesPic4} alt=""/></Link>
										</div>
										<div className="service-info">
											<h3 className="title"><Link to="#">Mobile Application Design & Dev.</Link></h3>
											<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
											<Link to="services-details" className="btn button-md">View Details</Link>
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

export default Services1;