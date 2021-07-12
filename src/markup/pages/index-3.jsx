import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header3 from '../layout/header/header3';
import Footer1 from '../layout/footer/footer1';

// Elements
import Slider from '../elements/slider/slider3';
import AboutHead from '../elements/about/about-head';
import Services2 from '../elements/services/services-2';
import PortfolioBox2 from '../elements/portfolio/portfolio-box2';
import Appointment from '../elements/appointment/appointment';
import BlogSlider2 from '../elements/blog/blog-slider-2';

// Images
import Sign from "../../images/sign.png"
import AboutPic12 from "../../images/about/pic12.jpg"
import AboutPic13 from "../../images/about/pic13.jpg"

class Index3 extends Component {
	
	render(){
		return (
			<>
				<Header3 />
				
				<div className="page-content bg-white">
				
					<Slider />
					
					{/* <!-- Main Slider --> */}
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp3 bg-white">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s">
										<div className="heading-bx">
											<h6 className="title-ext m-b0">Welcome to Factro</h6>
											<h2 className="title-head m-b0">About Us Factro</h2>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
										</div>
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
										<div className="sign-bx">
											<div className="sign-img">
												<img src={Sign} alt=""/>
											</div>
											<div className="author-bx">
												<h5 className="title">Robert Smith</h5>
												<span>CEO AND Founder</span>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s">
										<div className="row sp15">
											<div className="col-sm-6 col-6 m-t80">
												<img src={AboutPic12} alt=""/>
											</div>
											<div className="col-sm-6 col-6">
												<img src={AboutPic13} alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<PortfolioBox2 />
						
						<div className="section-area section-sp3 bg-white">
							<div className="container">
								<AboutHead />
							</div>
						</div>
						
						<Services2 />
						
						<Appointment />
						
						<div className="section-area section-sp1 bg-white">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Blogs & news</h6>
									<h2 className="title-head m-b0">What's going on in our blog?</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								
								<BlogSlider2 />
					
							</div>
						</div>
					
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default Index3;