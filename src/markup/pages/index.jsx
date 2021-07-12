import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import Slider from '../elements/slider/slider1';
import ServiceSlider1 from '../elements/services/service-slider-1';
import ServiceSlider2 from '../elements/services/service-slider-2';
import About from '../elements/about/about1';
import NumberBox from '../elements/number-box/number-box';
import Testimonial from '../elements/testimonial/testimonial1';

// Images
import ServicesPic1 from "../../images/our-services/pic1.jpg"
import ServicesPic2 from "../../images/our-services/pic2.jpg"
import BlogGridPic1 from "../../images/blog/grid/pic1.jpg"
import BlogGridPic2 from "../../images/blog/grid/pic2.jpg"
import BlogGridPic3 from "../../images/blog/grid/pic3.jpg"
import BlogGridPic4 from "../../images/blog/grid/pic4.jpg"


class Index extends Component {
	
	render(){
		return (
			<>
			
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<Slider />
					
					{/* <!-- Main Slider --> */}
					<div className="content-block" id="content-area">
						
						
						<div className="section-area process-area">
							<div className="container">
								<Link to="#" className="project-btn"><i className="icon ti-home"></i> View All Project <i className="ti-arrow-right right-icon"></i></Link>
								<ServiceSlider1 />
							</div>
						</div>
						
						<div className="section-area section-sp3 bg-white">
							<div className="container">
								<About />
							</div>
						</div>
						
						<div className="section-area section-sp1 bg-white">
							<div className="container">
								<NumberBox />
							</div>
						</div>
						
						<div className="section-area bg-white">
							<ServiceSlider2 />
						</div>
			
						<div className="section-area bg-white section-sp2">
							<div className="container">
								<div className="row">
									<div className="col-lg-4 col-md-12">
										<div className="heading-bx m-b20 text-center  text-lg-left m-md-b30">
											<h6 className="title-ext m-b0">See Our Faq</h6>
											<h2 className="title-head m-b0">Provides Best Service</h2>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering.</p>
											<Link to="get-in-touch" className="btn">View Al Post</Link>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-6">
										<div className="service-box text-center m-xs-b30">
											<div className="service-media">
												<img src={ServicesPic1} alt=""/>
												<div className="service-inner">
													<Link to="#" className="btn white">View All</Link>
												</div>
											</div>
											<div className="service-info">
												<h4 className="title">Fuel & Gas Management</h4>
												<p>Our purpose follow leading design, engineering and industrial manufacturing company </p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 col-sm-6">
										<div className="service-box text-center">
											<div className="service-media">
												<img src={ServicesPic2} alt=""/>
												<div className="service-inner">
													<Link to="#" className="btn white">View All</Link>
												</div>
											</div>
											<div className="service-info">
												<h4 className="title">Fuel & Gas Management</h4>
												<p>Our purpose follow leading design, engineering and industrial manufacturing company </p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area bg-primary section-sp2 client-appoint-box">
							<div className="container">
								<div className="row">
									<div className="col-lg-6 col-md-12">
										<div className="heading-bx text-white">
											<h6 className="title-ext m-b0">testimonial</h6>
											<h2 className="title-head m-b0">Clients say about us</h2>
											<div className="ttr-separator sepimg2"></div>
										</div>
										<div className="swiper-container client-area-box">		
											<Testimonial />
										</div>
									</div>
									<div className="col-lg-6 col-md-12">
										<form className="ajax-form" action="script/contact.php">
											<div className="apoint-btn-box">Book An Appointment</div>
											<div className="ajax-message"></div>
											<div className="heading-bx text-white">
												<h6 className="title-ext m-b0">Appointment</h6>
												<h2 className="title-head m-b0">Book An Appointment</h2>
												<div className="ttr-separator sepimg2"></div>
											</div>
											<div className="row placeani appoint-bx1">
												<div className="col-lg-4 col-md-4">
													<div className="form-group">
														<div className="input-group input-bx">
															<input name="name" type="text" required className="form-control valid-character" placeholder="Your Name"/>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-4">
													<div className="form-group">
														<div className="input-group input-bx"> 
															<input name="email" type="email" className="form-control" required  placeholder="Your Email Address"/>
														</div>
													</div>
												</div>
												<div className="col-lg-4 col-md-4">
													<div className="form-group">
														<div className="input-group input-bx">
															<input name="phone" type="text" required className="form-control int-value" placeholder="Your Phone"/>
														</div>
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<div className="form-group">
														<div className="input-group input-bx">
															<textarea name="message" rows="4" className="form-control" placeholder="Type Message" required ></textarea>
														</div>
													</div>
												</div>
												<div className="col-lg-12 col-md-12">
													<button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area bg-white section-sp1 blog-area">
							<div className="container">
								<div className="row heading-bx align-items-end">
									<div className="col-lg-8 col-md-9">
										<h6 className="title-ext m-b0">BLOGS & NEWS</h6>
										<h2 className="title-head m-b0">What's Going On In Our Blog?</h2>
										<div className="ttr-separator sepimg"></div>
									</div>
									<div className="col-lg-4 col-md-3">
										<Link to="get-in-touch" className="btn float-right">View Al Post</Link>
									</div>
								</div>
								<div className="row">
									<div className="col-md-6">
										<div className="recent-news">
											<div className="action-box">
												<img src={BlogGridPic4} alt=""/>
											</div>
											<div className="info-bx">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h3 className="post-title"><Link to="blog-details">The Cheapest Way To Earn Your Free Ticket To.</Link></h3>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="side-post">
											<div className="blog-post blog-md clearfix wow fadeInUp" data-wow-delay="0.2s">
												<div className="ttr-post-media"> 
													<Link to="#"><img src={BlogGridPic1} alt=""/></Link> 
												</div>
												<div className="ttr-post-info">
													<ul className="media-post">
														<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
													</ul>
													<h4 className="post-title"><Link to="blog-details">This Story Behind Education Will Haunt You Forever.</Link></h4>
												</div>
											</div>
											<div className="blog-post blog-md clearfix wow fadeInUp" data-wow-delay="0.2s">
												<div className="ttr-post-media"> 
													<Link to="#"><img src={BlogGridPic2} alt=""/></Link> 
												</div>
												<div className="ttr-post-info">
													<ul className="media-post">
														<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
													</ul>
													<h4 className="post-title"><Link to="blog-details">This Story Behind Education Will Haunt You Forever.</Link></h4>
												</div>
											</div>
											<div className="blog-post blog-md clearfix wow fadeInUp" data-wow-delay="0.2s">
												<div className="ttr-post-media"> 
													<Link to="#"><img src={BlogGridPic3} alt=""/></Link> 
												</div>
												<div className="ttr-post-info">
													<ul className="media-post">
														<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
													</ul>
													<h4 className="post-title"><Link to="blog-details">This Story Behind Education Will Haunt You Forever.</Link></h4>
												</div>
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

export default Index;