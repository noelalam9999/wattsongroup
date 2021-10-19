import React, { Component } from 'react';

// Layout
import Header1 from '../layout/header/header2';
import Footer1 from '../layout/footer/footer1';
import Portfolio from '../elements/portfolio/firefighting';
// Elements
import About from '../elements/about/firefighting';
import Testimonial2 from '../elements/testimonial/testimonial2';
import Services from '../elements/services/services';
import Action from '../elements/action/firefighting';
import Count from '../elements/counter/counter-sensor';
import { Link } from 'react-router-dom';
// Images
import Banner2 from "../../images/banner/firefighing.png"


import TeamPic1 from "../../images/team/pic1.jpg"
import TeamPic2 from "../../images/team/pic2.jpg"
import TeamPic3 from "../../images/team/pic3.jpg"
import TeamPic4 from "../../images/team/pic4.jpg"
import TeamPic5 from "../../images/team/pic5.jpg"
import TeamPic6 from "../../images/team/pic6.jpg"
import TeamPic7 from "../../images/team/pic7.jpg"
import TeamPic8 from "../../images/team/pic8.jpg"
import TeamPic9 from "../../images/team/pic9.jpg"
import TeamPic10 from "../../images/team/pic10.jpg"
import TeamPic11 from "../../images/team/pic11.jpg"
import TeamPic12 from "../../images/team/pic12.jpg"
import TeamPic13 from "../../images/team/pic13.jpg"
import TeamPic14 from "../../images/team/pic14.jpg"
import TeamPic15 from "../../images/team/pic15.jpg"
import TeamPic16 from "../../images/team/pic16.jpg"

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
								
								<h1 className="text-white">Wattson Firefighting Equipments and Safety Company Ltd </h1>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white">
							<div className="container">
								<About />
							</div>
						</div>
						<Action/>
						<div className="section-area section-sp2">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0"></h6>
									<h2 className="title-head m-b0">Our Work Processes</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="col-md-4 m-sm-b40">
										<div className="feature-container center feature-bx3 right-img">
											<div className="feature-box-xl text-black bg-white m-b20 radius ">
												<Link to="#" className="icon-cell"><i className="flaticon-1-helmet"></i></Link>
												<span className="icon-no">01</span>	
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Way 1</h4>
												<p>By using Exhaust gas, we can run Exhaust Gas Boiler (EGB) to produce steam. That steam, we can use in the Process and also to run the Absorption chiller.</p>
											</div>
											<i className="ti-panel bg-icon"></i>
										</div>
									</div>
									<div className="col-md-4 m-sm-b40">
										<div className="feature-container center feature-bx3 right-img2">
											<div className="feature-box-xl text-black bg-white m-b20 radius ">
												<Link to="#" className="icon-cell"><i className="flaticon-1-engineer"></i></Link>
												<span className="icon-no">02</span>	
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Way 2</h4>
												<p>We can use Exhaust gas directly to run the Absorption chiller.</p>
											</div>
											<i className="ti-panel bg-icon"></i>
										</div>
									</div>
									<div className="col-md-4">
										<div className="feature-container center feature-bx3">
											<div className="feature-box-xl text-black bg-white m-b20 radius ">
												<Link to="#" className="icon-cell"><i className="flaticon-1-factory-1"></i></Link>
												<span className="icon-no">03</span>	
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Way 2</h4>
												<p>Using the exhaust gas, we can produce High pressure Steam (60bar) and run the Steam Turbine to generate power.
*** Also Ceramic factory, Glass factory, Cement factory and Steel mill can use their Kiln Exhaust to Run Boiler, Run Absorption chiller and Power generation.</p>
											</div>
											<i className="ti-panel bg-icon"></i>
										</div>
									</div>
									<div className="col-md-12 text-center m-t50">
										<Link to="get-in-touch" className="btn">Get In Touch</Link>
									</div>
								</div>
								<div className="ttr-divider bg-black op2 tb50"></div>
								
								
								
							</div>
						</div>
						
						<Portfolio />
						
						<div className="section-area bg-primary section-sp1">
							<div className="container">
								<div className="heading-bx text-center text-white">
									<h6 className="title-ext m-b0"></h6>
									<h2 className="title-head m-b0">Company Stats</h2>
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
											<span className="counter-text">Engineers</span>
											<i className="la la-pencil-ruler bg-icon"></i>
										</div>
									</div>
								</div>
							</div> 
						</div>
						
						{/* <div className="section-area section-sp1 team-page bg-white" style={{ backgroundPosition:"bottom", backgroundSize:"100%"}}>
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">   </h6>
									<h2 className="title-head m-b0">Our Clients <br/></h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
								<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic1} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic2} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic3} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic4} alt=""/>
											
											</div>
											
										</div>
									</div>
								<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic5} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic6} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic7} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic8} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic9} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic10} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic11} alt=""/>
											
											</div>
											
										</div>
									</div>
								<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic12} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic13} alt=""/>
											
											</div>
											
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic14} alt=""/>
											
											</div>
										
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic15} alt=""/>
											
											</div>
										
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="">
												<img src={TeamPic16} alt=""/>
										
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div> */}
						
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default About2;