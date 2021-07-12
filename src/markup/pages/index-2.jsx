import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PortfolioBox2 from '../elements/portfolio/portfolio-box2';
// Layout
import Header2 from '../layout/header/header2';
import Footer1 from '../layout/footer/footer1';
import MDMessage from "../elements/about/about1.jsx"
// Elements
import Slider from '../elements/slider/slider2';
import BlogSlider from '../elements/blog/blog-slider';
import ProjectSlider7 from '../elements/project-slider/project-slider-7';
import Testimonial3 from '../elements/testimonial/testimonial3';
import Count from '../elements/counter/counter-sensor';
import ClientLogo from "../elements/client-logo/client-logo-1.jsx"
// Images
import BackBg1 from "../../images/background/bg1.png"
import BackBg2 from "../../images/background/bg2.png"
import BackBg4 from "../../images/background/bg4.jpg"
import AboutPic14 from "../../images/about/pic14.jpg"
import AboutPic15 from "../../images/about/pic15.jpg"
import ServicesPic1 from "../../images/our-services/services-1/pic1.jpg"
import ServicesPic2 from "../../images/our-services/services-1/pic2.jpg"
import ServicesPic3 from "../../images/our-services/services-1/pic3.jpg"
import ServicesPic4 from "../../images/our-services/services-1/pic4.jpg"
import ServicesPic5 from "../../images/our-services/services-1/pic5.jpg"
import ServicesPic6 from "../../images/our-services/services-1/pic6.jpg"
import PortImg1 from "../../images/portfolio/portfolio-3/image_1.jpg"
import PortImg2 from "../../images/portfolio/portfolio-3/image_2.jpg"
import PortImg3 from "../../images/portfolio/portfolio-3/image_3.jpg"
import PortImg4 from "../../images/portfolio/portfolio-3/image_4.jpg"
import PortImg5 from "../../images/portfolio/portfolio-3/image_5.jpg"
import TeamPic1 from "../../images/team/pic1.jpg"
import TeamPic2 from "../../images/team/pic2.jpg"
import TeamPic3 from "../../images/team/pic3.jpg"
import TeamPic4 from "../../images/team/pic4.jpg"

class Index2 extends Component {
	
	render(){
		return (
			<>
				
				<Header2 />
				
				<div className="page-content bg-white">
					
					<Slider />
				
					{/* <!-- Main Slider --> */}
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white" style={{backgroundImage:"url("+BackBg2+")", backgroundPosition:"bottom", backgroundSize:"100%"}}>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s">
										<div className="heading-bx m-b30">
											<h6 className="title-ext m-b0">Welcome to Factro</h6>
											<h2 className="title-head m-b0">About Us Factro</h2>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and  engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
										</div>
										<div className="row m-b10">
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>Our purpose follow leading</li>
													<li>Engineering and industrial</li>
													<li>Gas and  engineering services</li>
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>Gas and  engineering services</li>
													<li>Our purpose follow leading</li>
													<li>Engineering and industrial</li>
												</ul>
											</div>
										</div>
										<Link to="contact-1" className="btn m-r10">Contact Us</Link>
										<Link to="about-1" className="btn-secondry">About Us</Link>
									</div>
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s">
										<div className="about-img-box4 row sp10">
											<div className="col-lg-12">
												<div className="about-img1">
													<img src={AboutPic14} alt=""/>
												</div>
											</div>
											<div className="col-lg-12 m-b10 m-t10">
												<div className="about-img2">
													<img src={AboutPic15} alt=""/>
												</div>
											</div>
											<div className="about-img-inner">
												<div>
													<h2 className="title"><Count counter={20}/>+</h2>
													<span>YEARS IN THE INDUSTRY</span>
												</div>
											</div> 
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp3 bg-gray">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-bx text-center m-b0">
											
											<h2 className="title-head m-b0">Our Reknowned projects</h2>
											<div className="ttr-separator sepimg"></div>
										</div>
									</div>
								</div>
							</div>
							<PortfolioBox2 />
						</div>
						
						<div className="section-area section-sp2 bg-white" style={{backgroundImage:"url("+BackBg2+")", backgroundPosition:"bottom", backgroundSize:"100%"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-bx text-center">
											<h2 className="title-head m-b0">SCOPE OF WORK</h2>
											<h6 className="title-ext m-b0">What we are best known for</h6>
											<div className="ttr-separator sepimg"></div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic1} alt=""/>
											</div>
											<div className="service-info">
												<h4 className="title">Solar Panels</h4>
												<p>There are many variations</p>
												<Link to="services-details" className="btn-link">Read More</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic2} alt=""/>
											</div>
											<div className="service-info">
												<h4 className="title">Wind Turbines</h4>
												<p>There are many variations</p>
												<Link to="services-details" className="btn-link">Read More</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic3} alt=""/>
											</div>
											<div className="service-info">
												<h4 className="title">Green Equipment</h4>
												<p>There are many variations</p>
												<Link to="services-details" className="btn-link">Read More</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic4} alt=""/>
											</div>
											<div className="service-info">
												<h4 className="title">Lower Power Cost</h4>
												<p>There are many variations</p>
												<Link to="services-details" className="btn-link">Read More</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic5} alt=""/>
											</div>
											<div className="service-info">
												<h4 className="title">Generate Electricity</h4>
												<p>There are many variations</p>
												<Link to="services-details" className="btn-link">Read More</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-4 col-lg-6 col-md-6 m-b30">
										<div className="service-bx style1">
											<div className="service-media">
												<img src={ServicesPic6} alt=""/>
											</div>
											<div className="service-info">
												<h4 className="title">The Environment</h4>
												<p>There are many variations</p>
												<Link to="services-details" className="btn-link">Read More</Link>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
	 
						<div className="section-area section-sp1 bg-primary" style={{backgroundImage:"url("+BackBg1+")", backgroundPosition:"bottom", backgroundSize:"100%"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-bx text-white text-center">
											<h6 className="title-ext m-b0">Company history</h6>
											<h2 className="title-head m-b0">Knows About History</h2>
											<div className="ttr-separator sepimg2"></div>
										</div>
									</div>
								</div>
								<Tabs className="history-box">
									<TabList className="nav nav-tabs">
										<Tab>Solar Panels</Tab>
										<Tab>Wind Turbines</Tab>
										<Tab>Green Equipment</Tab>
										<Tab>Lower Power Cost</Tab>
										<Tab>Generate Electricity</Tab>
									</TabList>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg1} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3>Solar Panels to manage your finance with experience</h3>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining.</p>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg2} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3>Wind Turbines to manage your finance with experience</h3>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining.</p>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg3} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3>Green Equipment to manage your finance with experience</h3>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining.</p>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg4} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3>Lower Power Cost to manage your finance with experience</h3>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining.</p>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg5} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3>Generate Electricity to manage your finance with experience</h3>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining, oil, gas and engineering and industrial manufacturing company specialising in mining, oil, gas and engineering services.</p>
													<p>Our purpose follow leading design, engineering and industrial manufacturing company specialising in mining.</p>
												</div>
											</div>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>
						
						<div className="section-area section-sp1 team-page bg-white" style={{backgroundImage:"url("+BackBg2+")", backgroundPosition:"bottom", backgroundSize:"100%"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Our Team Member</h6>
									<h2 className="title-head m-b0">Meet Our Awesome <br/>Team Member</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic4} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic1} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
										
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic2} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
										
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic3} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-area section-sp3 bg-white">
							<div className="container">
								<MDMessage/>
							</div>
						</div>
						{/* <div className="section-area overflow-hidden section-sp2 ovbl-dark" style={{backgroundImage: "url("+BackBg4+")", backgroundPosition:"center"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-7">
										<Testimonial3 />
									</div>
								</div>
							</div>
						</div> */}
{/* 						
						<div className="section-area section-sp1 bg-gray" style={{backgroundImage:"url("+BackBg2+")", backgroundPosition:"bottom", backgroundSize:"100%"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-bx text-center">
											<h6 className="title-ext m-b0">BLOGS &amp; NEWS</h6>
											<h2 className="title-head m-b0">What's Going On In Our Blog?</h2>
											<div className="ttr-separator sepimg"></div>
										</div>
									</div>
								</div>
								<BlogSlider />
							</div>
						</div> */}
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default Index2;