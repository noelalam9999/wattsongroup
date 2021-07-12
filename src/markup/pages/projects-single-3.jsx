import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Images
import Banner1 from "../../images/banner/banner1.jpg"
import PortImg8 from "../../images/portfolio/image_8.jpg"
import PortImg9 from "../../images/portfolio/image_9.jpg"
import PortImg10 from "../../images/portfolio/image_10.jpg"
import PortImg11 from "../../images/portfolio/image_11.jpg"
import PortImg12 from "../../images/portfolio/image_12.jpg"

class ProjectsSingle3 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Projects Single 3</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Projects Single 3</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 port-7-content">
							<div className="container">
								<div className="row">
									<div className="col-lg-7">
										<div className="heading-bx text-left m-b20">
											<h3 className="title-head m-b0">Project Descripation</h3>
											<div className="ttr-separator sepimg"></div>
										</div>
										<p>Well we’re movin’ on up to the east side. To a deluxe apartment in the sky. The weather started getting rough – the tiny ship was tossed. If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost. We’re gonna do it. On your mark get set and go now. Got a dream and we just know now we’re gonna make our dream come true. I have always wanted to have a neighbor just like you. I’ve always wanted to live in a neighborhood with you.</p>
										<h4 className="title m-b5">Project Challenge</h4>
										<p>It’s time to put on makeup. It’s time to dress up right. It’s time to raise the curtain on the Muppet Show tonight. The mate was a mighty sailin’ man the Skipper brave and sure.</p>
										<div className="row">
											<div className="col-lg-6">
												<ul className="list-check">
													<li>Then along come two they got nothin</li>
													<li>Makin their way the only way they know how</li>
													<li>That’s just a little bit more than</li>
												</ul>
											</div>
											<div className="col-lg-6">
												<ul className="list-check">
													<li>Well we’re movin’ on up to the east side.</li>
													<li>Muppet Show tonight. The mate was a mighty sailin</li>
												</ul>
											</div>
										</div>
										<h4 className="title m-b5">What We Did</h4>
										<p>Then along come two they got nothin’ but their jeans. Texas tea. Knight Rider: A shadowy flight into the dangerous world of a man who does not exist. The first mate and his Skipper too will do their very best to make the tropic island nest.</p>
										<h4 className="title m-b5">Result</h4>
										<p>That’s just a little bit more than the law will allow. We’re gonna do it. On your mark get set and go now. Got a dream and we just know now we’re gonna make our dream come true. Makin their way the only way they know how. That’s just a little bit more than the law will allow.</p>
										<ul className="protfolio-info">
											<li><strong>Finish Date :</strong> <span>10/09/2020</span></li>
											<li><strong>Client :</strong> <span>Mandola Mogana</span></li>
											<li><strong>Location :</strong><span>London Donec eleifend 96502</span></li>
											<li><strong>Surface Area :</strong><span>500,000 m2</span></li>
											<li><strong>Year Completed :</strong><span>2020</span></li>
											<li><strong>Value :</strong><span>$550.000</span></li>
											<li><strong>Architect :</strong><span>Harri &amp; Gary</span></li>
										</ul>
									</div>
									<div className="col-lg-5">
										<div className="row sp4 magnific-image sticky-top">
											<div className="action-card col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.2s">
												<div className="portfolio-box style-2">
													<div className="portfolio-media">
														<img src={PortImg12} alt=""/>
													</div>
													<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
												</div>
											</div>
											<div className="action-card col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInUp industrial" data-wow-delay="0.4s">
												<div className="portfolio-box style-2">
													<div className="portfolio-media">
														<img src={PortImg11} alt=""/>
													</div>
													<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
												</div>
											</div>
											<div className="action-card col-lg-12 col-md-12 col-sm-12 col-12 wow fadeInUp" data-wow-delay="0.6s">
												<div className="portfolio-box style-2">
													<div className="portfolio-media">
														<img src={PortImg10} alt=""/>
													</div>
													<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
												</div>
											</div>
											<div className="action-card col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.8s">
												<div className="portfolio-box style-2">
													<div className="portfolio-media">
														<img src={PortImg9} alt=""/>
													</div>
													<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
												</div>
											</div>
											<div className="action-card col-lg-6 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-delay="0.2s">
												<div className="portfolio-box style-2">
													<div className="portfolio-media">
														<img src={PortImg8} alt=""/>
													</div>
													<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
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

export default ProjectsSingle3;