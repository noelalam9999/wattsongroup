import React, { Component } from 'react';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import About from '../elements/about/about2';
import Testimonial2 from '../elements/testimonial/testimonial2';
import Services from '../elements/services/services';
import Action from '../elements/action/action';
import Count from '../elements/counter/counter-sensor';

// Images
import Banner2 from "../../images/banner/banner2.jpg"

class About2 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark page-banner-lg ovdt1 overlay-dotted no-pt parallax" style={{backgroundImage: "url("+Banner2+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<span className="banner-sm-title">About Us</span>
								<h1 className="text-white">We are not your average<br/> brand factro</h1>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white">
							<div className="container">
								<About />
							</div>
						</div>
						
						<Action />
						
						<Services />
						
						<div className="section-area bg-primary section-sp1">
							<div className="container">
								<div className="heading-bx text-center text-white">
									<h6 className="title-ext m-b0">Company Stats</h6>
									<h2 className="title-head m-b0">We are here to manage your finance<br/> with experience</h2>
									<div className="ttr-separator sepimg2"></div>
								</div>
								<div className="row text-white">
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.2s">
										<div className="counter-style-2">
											<div className="counter-bx">
												<Count counter={25}/>
											</div>
											<span className="counter-text">Clients</span>
											<i className="la la-user bg-icon"></i>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.4s">
										<div className="counter-style-2">
											<div className="counter-bx">
												<Count counter={35}/>
											</div>
											<span className="counter-text">Awards</span>
											<i className="la la-trophy bg-icon"></i>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.6s">
										<div className="counter-style-2">
											<div className="counter-bx">
												<Count counter={180}/>
											</div>
											<span className="counter-text">Projects</span>
											<i className="la la-industry bg-icon"></i>
										</div>
									</div>
									<div className="col-lg-3 col-md-6 col-sm-6 col-6 m-b30 wow fadeIn" data-wow-delay="0.8s">
										<div className="counter-style-2">
											<div className="counter-bx">
												<Count counter={120}/>
											</div>
											<span className="counter-text">Media Posts</span>
											<i className="la la-pencil-ruler bg-icon"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp2 bg-gray">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0 "><span className="text-primary">Clients Says</span></h6>
									<h2 className="title-head m-b0">What clients talk about us</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<Testimonial2 />
							</div>
						</div>
						
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default About2;