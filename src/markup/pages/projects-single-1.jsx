import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Images
import Banner1 from "../../images/banner/banner1.jpg"
import Banner2 from "../../images/banner/banner2.jpg"
import Banner3 from "../../images/banner/banner3.jpg"
import Banner4 from "../../images/banner/banner4.jpg"
import BannerThumb1 from "../../images/banner/thumb-banner1.jpg"
import BannerThumb2 from "../../images/banner/thumb-banner2.jpg"
import BannerThumb3 from "../../images/banner/thumb-banner3.jpg"
import BannerThumb4 from "../../images/banner/thumb-banner4.jpg"

class ProjectsSingle1 extends Component {
	render(){
		
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Projects Single 1</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Projects Single 1</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 portfolio-content">
							<div className="container">
								<div className="row">
									<div className="col-lg-8 col-md-12">
										<div className="row">
											<div className="col-lg-12 m-b40">
												<Tabs>
													<TabPanel>
														<img className="demo" src={Banner1} alt=""/>
													</TabPanel>
													<TabPanel>
														<img className="demo" src={Banner2} alt=""/>
													</TabPanel>
													<TabPanel>
														<img className="demo" src={Banner3} alt=""/>
													</TabPanel>
													<TabPanel>
														<img className="demo" src={Banner4} alt=""/>
													</TabPanel>
													<TabList className="nav nav-tabs gallery-thumbs">
														<Tab>
															<div className="ttr-media">
																<img src={BannerThumb1} alt=""/>
															</div>
														</Tab>
														<Tab>
															<div className="ttr-media">
																<img src={BannerThumb2} alt=""/>
															</div>
														</Tab>
														<Tab>
															<div className="ttr-media">
																<img src={BannerThumb3} alt=""/>
															</div>
														</Tab>
														<Tab>
															<div className="ttr-media">
																<img src={BannerThumb4} alt=""/>
															</div>
														</Tab>
													</TabList>
												</Tabs>
											</div>
										</div>
										
										
										
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
									</div>
									<div className="col-lg-4 col-md-12">
										<aside className="sticky-top">
											<ul className="protfolio-info">
												<li><strong>Finish Date :</strong> <span>10/09/2020</span></li>
												<li><strong>Client :</strong> <span>Mandola Mogana</span></li>
												<li><strong>Location :</strong><span>London Donec eleifend 96502</span></li>
												<li><strong>Surface Area :</strong><span>500,000 m2</span></li>
												<li><strong>Year Completed :</strong><span>2020</span></li>
												<li><strong>Value :</strong><span>$550.000</span></li>
												<li><strong>Architect :</strong><span>Harri &amp; Gary</span></li>
											</ul>
											<div className="contact-help-box" style={{backgroundImage: "url(assets/images/about/pic5.jpg)"}}>
												<div className="content-info m-b30">
													<span className="text-primary fw5">Quick Contact</span>
													<h5 className="title-head text-white text-uppercase">Get Solution</h5>
													<div className="ttr-separator sepimg"></div>
													<p>Contact us at the Interior office nearest to you or submit a business inquiry online.</p>
													<Link className="btn button-md primary" to="contact-1">Contact</Link>
												</div>
											</div>
										</aside>
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

export default ProjectsSingle1;