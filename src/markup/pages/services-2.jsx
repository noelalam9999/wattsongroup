import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import ClientLogo from '../elements/client-logo/client-logo-1';
import Action from '../elements/action/action';
import Counter from '../elements/counter/counter';

// Images
import Banner2 from '../../images/banner/banner2.jpg';

class Services2 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark page-banner-lg ovdt1 overlay-dotted no-pt parallax"  style={{backgroundImage:"url("+Banner2+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<span className="banner-sm-title">Our Services</span>
								<h1 className="text-white">A creative factro specialized in brand<br/>strategy and digital creation</h1>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Our Service</h6>
									<h2 className="title-head m-b0">Take Our Services To Build <br/>Your Business</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.3s">
										<div className="feature-container feature-bx2">
											<div className="feature-lg text-white m-b20">
												<Link to="#" className="icon-cell"><i className="flaticon-tractor"></i></Link> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Agricultural</h4>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
												<Link to="services-details" className="feature-btn"><i className="la la-long-arrow-alt-right"></i></Link>
											</div>
											<i className="flaticon-tractor bg-icon"></i>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
										<div className="feature-container feature-bx2">
											<div className="feature-lg text-white m-b20">
												<Link to="#" className="icon-cell"><i className="flaticon-flask"></i></Link> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Chemical Research</h4>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
												<Link to="services-details" className="feature-btn"><i className="la la-long-arrow-alt-right"></i></Link>
											</div>
											<i className="flaticon-flask bg-icon"></i>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.9s">
										<div className="feature-container feature-bx2">
											<div className="feature-lg text-white m-b20">
												<Link to="#" className="icon-cell"><i className="flaticon-trolley"></i></Link> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Material Science</h4>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
												<Link to="services-details" className="feature-btn"><i className="la la-long-arrow-alt-right"></i></Link>
											</div>
											<i className="flaticon-trolley bg-icon"></i>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.3s">
										<div className="feature-container feature-bx2">
											<div className="feature-lg text-white m-b20">
												<Link to="#" className="icon-cell"><i className="flaticon-mask"></i></Link> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Mechanical</h4>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
												<Link to="services-details" className="feature-btn"><i className="la la-long-arrow-alt-right"></i></Link>
											</div>
											<i className="flaticon-mask bg-icon"></i>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.6s">
										<div className="feature-container feature-bx2">
											<div className="feature-lg text-white m-b20">
												<Link to="#" className="icon-cell"><i className="flaticon-fuel"></i></Link> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Oil and Gas</h4>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
												<Link to="services-details" className="feature-btn"><i className="la la-long-arrow-alt-right"></i></Link>
											</div>
											<i className="flaticon-fuel bg-icon"></i>
										</div>
									</div>
									<div className="col-lg-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay="0.9s">
										<div className="feature-container feature-bx2">
											<div className="feature-lg text-white m-b20">
												<Link to="#" className="icon-cell"><i className="flaticon-derrick"></i></Link> 
											</div>
											<div className="icon-content">
												<h4 className="ttr-tilte">Power and Energy</h4>
												<p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
												<Link to="services-details" className="feature-btn"><i className="la la-long-arrow-alt-right"></i></Link>
											</div>
											<i className="flaticon-derrick bg-icon"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
						
						<div className="section-area bg-gray bg-fix text-white">
							<Tabs>
								<div className="bg-primary">
									<div className="container">
										<TabList className="nav misson-tabs">
											<Tab>Our Mission</Tab>
											<Tab>Our Vision</Tab>
											<Tab>Our Strategy</Tab>
											<Tab>Our Values</Tab>
										</TabList>
									</div>
								</div>
								<div className="container section-sp2">
									<TabPanel>
										<div className="text-center mission-tab-bx text-black">
											<div className="feature-box-md bg-white radius m-b20 text-black shadow">
												<Link to="#" className="icon-cell"><i className="flaticon-tasks"></i></Link> 
											</div>
											<h3 className="title">Our Mision</h3>
											<h4 className="sub-title">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h4>
											<p className="br-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="text-center mission-tab-bx text-black">
											<div className="feature-box-md bg-white radius m-b20 text-black shadow">
												<Link to="#" className="icon-cell"><i className="flaticon-analytics"></i></Link> 
											</div>
											<h3 className="title">Our Vision</h3>
											<h4 className="sub-title">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h4>
											<p className="br-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="text-center mission-tab-bx text-black">
											<div className="feature-box-md bg-white radius m-b20 text-black shadow">
												<Link to="#" className="icon-cell"><i className="flaticon-communications"></i></Link> 
											</div>
											<h3 className="title">Our Strategy</h3>
											<h4 className="sub-title">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h4>
											<p className="br-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="text-center mission-tab-bx text-black">
											<div className="feature-box-md bg-white radius m-b20 text-black shadow">
												<Link to="#" className="icon-cell"><i className="flaticon-idea"></i></Link> 
											</div>
											<h3 className="title">Our Values</h3>
											<h4 className="sub-title">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</h4>
											<p className="br-left">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
										</div>
									</TabPanel>
								</div>
							</Tabs>
						</div>
						
						<Counter />
						
						<Action />
						
						<div className="section-area section-sp2 bg-white">
							<div className="container wow fadeIn" data-wow-delay="0.8s">
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

export default Services2;