import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header4 from '../layout/header/header4';
import Footer2 from '../layout/footer/footer2';

// Elements
import Slider from '../elements/slider/slider4';
import Services3 from '../elements/services/services-3';
import Projects from '../elements/projects/project1';
import BlogSlider3 from '../elements/blog/blog-slider-3';
import Testimonial4 from '../elements/testimonial/testimonial4';

// Images
import TeamPic7 from "../../images/team/pic7.jpg"
import TeamPic8 from "../../images/team/pic8.jpg"
import TeamPic9 from "../../images/team/pic9.jpg"
import TeamPic10 from "../../images/team/pic10.jpg"
import Bg5 from "../../images/background/bg5.jpg"

class Index4 extends Component {
	
	render(){
		
		return (
			<>
				<Header4 />
			
				<div className="page-content bg-white">
					
					<Slider />
					
					<div className="content-block" id="content-area">
						
						<Services3 />
						
						<div className="section-area section-sp1 bg-gray">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Projects View</h6>
									<h2 className="title-head m-b0">Our Latest Projects</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<Projects />
							</div>
						</div>
						
						<div className="section-area section-sp1 team-page bg-white">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Our Team Member</h6>
									<h2 className="title-head m-b0">Meet Our Awesome <br/>Team Member</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp m-b30" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-2">
											<div className="team-media">
												<img src={TeamPic7} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
													<li><Link to="#"><i className="fa fa-plus"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Michel H. Bohman</Link></h4>
												<span>CEO & Founder</span>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp m-b30" data-wow-delay="0.6s">
										<div className="team-member m-b20 style-2">
											<div className="team-media">
												<img src={TeamPic8} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
													<li><Link to="#"><i className="fa fa-plus"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Sonar Z. Moyna</Link></h4>
												<span>Programer</span>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp m-b30" data-wow-delay="0.9s">
										<div className="team-member m-b20 style-2">
											<div className="team-media">
												<img src={TeamPic9} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
													<li><Link to="#"><i className="fa fa-plus"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Kalina GH. Mollika</Link></h4>
												<span>Manager</span>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 wow fadeInUp m-b30" data-wow-delay="0.9s">
										<div className="team-member m-b20 style-2">
											<div className="team-media">
												<img src={TeamPic10} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
													<li><Link to="#"><i className="fa fa-plus"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Kalina GH. Mollika</Link></h4>
												<span>Manager</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area overflow-hidden section-sp2 ovbl-middle bg-fix" style={{backgroundImage: "url("+Bg5+")"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12 col-md-12">
										<div className="heading-bx text-center text-white">
											<h6 className="title-ext m-b0">testimonial</h6>
											<h2 className="title-head m-b0">Clients say about us</h2>
											<div className="ttr-separator sepimg2"></div>
										</div>
										<div className="testimonial-area4 m-auto client-area-box">		
											<Testimonial4 />
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp1 bg-gray">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Blogs & news</h6>
									<h2 className="title-head m-b0">What's going on in our blog?</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								
								<BlogSlider3 />
								
							</div>
						</div>
						
					</div>
					
					<Footer2 />
					
				</div>
				
			</>
		);
	}
}

export default Index4;