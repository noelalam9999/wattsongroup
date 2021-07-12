import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ModalVideo from 'react-modal-video'

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Images
import Banner1 from "../../images/banner/banner1.jpg"
import ServicesPic1 from "../../images/our-services/pic1.jpg"

class ProjectsSingle4 extends Component {
	
	constructor () {
		super()
		this.state = {
			isOpen: false
		}
		this.openModal = this.openModal.bind(this)
	}
	openModal () {
		this.setState({isOpen: true})
	}
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Projects Single 4</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Projects Single 4</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 port-8-content">
							<div className="container">
								<div className="row">
									<div className="col-lg-6">
										<div className="video-media-bx m-md-b30">
											<div className="video-bx">
												<img src={ServicesPic1} alt=""/>
												<div className="video-media-bx">
													<Link to="#" onClick={this.openModal} className="popup-youtube video-zoom"><i className="fa fa-play"></i></Link>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 p-r50">
										<div className="heading-bx text-left m-b20">
											<h3 className="title-head m-b0">90% Value Reduction Validation</h3>
											<div className="ttr-separator sepimg"></div>
										</div>
										<p className="m-t20">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by the injected humour, or randomised words which don’t look at even slightly believable. If you are going to use a passage of Lorem Ipsum.</p>
										<ul className="list-check">
											<li>Then along come two they got nothin</li>
											<li>Makin their way the only way they know how</li>
											<li>That’s just a little bit more than</li>
										</ul>
									</div>
									
									<div className="col-lg-12"><div className="ttr-divider bg-dark op3"></div></div>
									<div className="col-lg-12 m-b30">
										<h3 className="m-b10">Services Customer Centric Approach</h3>
										<p>Point of Sale hardware, the till at a shop check out, has become very complex over the past ten years. Modern POS hardware includees the cash tilxnxdl, bar-code readers, scales, belts, communications system and modem. Point of Sale hardware, the till at a shop check out, has become very complex over the past more ten years. Modern POS hardware includes the cash till, bar-code readers, scales, belts, system and modem.Point of Sale hardware, the till at a shop check out, has to become very over the past ten years. Hardware the cash bar-code readers, belts system and modem.</p>
										<p>Point of Sale hardware, the till at a shop check out, has become very complex over the past ten years. Modern POS hardware includees the cash tilxnxdl, bar-code readers, scales, belts, communications system and modem. Point of Sale hardware, the till at a shop check out, has become very complex over the past more ten years. Modern POS hardware includes the cash till, bar-code readers, scales, belts, system and modem.Point of Sale hardware, the till at a shop check out, has to become very over the past ten years. Hardware the cash bar-code readers, belts system and modem</p>
									</div>
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
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
									<div className="col-lg-6 wow fadeInUp" data-wow-delay="0.8s">
										<div className="skillbar-bar-main m-sm-b30">
											<div className="skillbar-box">
												<h6 className="title">Jquery - 4 years Experience</h6>
												<div className="skillbar appear">
													<p className="skillbar-bar" style={{width:"96%"}}></p>
													<span className="skill-bar-percent">96%</span>
												</div>
											</div>
											<div className="skillbar-box">
												<h6 className="title">Wordpress - 6 years Experience</h6>
												<div className="skillbar appear">
													<p className="skillbar-bar" style={{width:"92%"}}></p>
													<span className="skill-bar-percent">92%</span>
												</div>
											</div>
											<div className="skillbar-box">
												<h6 className="title">HTML5 - 5 years Experience</h6>
												<div className="skillbar appear">
													<p className="skillbar-bar" style={{width:"79%"}}></p>
													<span className="skill-bar-percent">79%</span>
												</div>
											</div>
											<div className="skillbar-box">
												<h6 className="title">Photography - 6 years Experience</h6>
												<div className="skillbar appear">
													<p className="skillbar-bar" style={{width:"86%"}}></p>
													<span className="skill-bar-percent">86%</span>
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
				
				<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='cnXapYkboRQ' onClose={() => this.setState({isOpen: false})} />
				
				
			</>
		);
	}
}

export default ProjectsSingle4;