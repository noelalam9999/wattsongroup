import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header2';
import Footer1 from '../layout/footer/footer1';

// Elements
import ClientLogo from '../elements/client-logo/client-logo-1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import Awards1 from '../../images/awards/pic4.jpg';
import Awards2 from '../../images/awards/pic5.jpg';
import Awards3 from '../../images/awards/pic6.jpg';
import Awards4 from '../../images/awards/pic7.jpg';
import Awards5 from '../../images/awards/pic8.jpg';
import Awards6 from '../../images/awards/pic9.png';
import AboutPic1 from '../../images/portfolio/wep/1267ccbd3c3c450483a57635a7631203-ProductDetailImage7b05a205-a15c-4619-9920-8cd6bae48acb.jpg';
import AboutPic2 from '../../images/portfolio/wep/Cold-Room.jpg';
import AboutPic3 from '../../images/portfolio/PU-sandwich-panel/PU-Sandwich-Panel.jpg';
import AboutPic4 from '../../images/portfolio/HVAC/vrf.jpeg';
import AboutPic5 from '../../images/portfolio/wec/images.jpg';
import AboutPic6 from '../../images/portfolio/HVAC/Air-handling-unit.jpg';
import AboutPic7 from '../../images/portfolio/airconditioning/VRF-System.jpeg';
import AboutPic8 from '../../images/portfolio/wec/Watercool-chiller.jpg';
import AboutPic9 from '../../images/portfolio/wep/corogated-panel.jpg';
import AboutPic10 from '../../images/portfolio/duct/Rectangular-Duct.jpg';
import AboutPic11 from '../../images/portfolio/duct/Corner.jpg';
import AboutPic12 from '../../images/portfolio/duct/Elbow.jpg';
import MDMessage from "../elements/about/about-us-mdaward"
import Sign from '../../images/sign.png';

class CompanyHistory extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">About Us</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>About Us</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 style={{color:"black"}} className="title-ext m-b0">Best Awards</h6>
									<h2 className="title-head m-b0">Authorization Certificates</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="col-md-4 m-b30">
										<div className="award-bx bx-hover-up">
											<div className="award-media"><img src={Awards1} alt=""/></div>
											<div className="award-info">
												<h5 className="title">4 Million USD Sales Award</h5>
												<p>Shungliang, 2010</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 m-b30">
										<div className="award-bx bx-hover-up">
											<div className="award-media"><img src={Awards2} alt=""/></div>
											<div className="award-info">
												<h5 className="title">Authorization Certificate</h5>
												<p>Dunham Bush</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 m-b30">
										<div className="award-bx bx-hover-up">
											<div className="award-media"><img src={Awards3} alt=""/></div>
											<div className="award-info">
												<h5 className="title">Authorization Certificate</h5>
												<p>Shungliang</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 m-b30">
										<div className="award-bx bx-hover-up">
											<div className="award-media"><img src={Awards4} alt=""/></div>
											<div className="award-info">
												<h5 className="title">Quality Management System Certificate</h5>
												<p>Ritzy Certification</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 m-b30">
										<div className="award-bx bx-hover-up">
											<div className="award-media"><img src={Awards5} alt=""/></div>
											<div className="award-info">
												<h5 className="title">Distribution Appointment</h5>
												<p>Accessen</p>
											</div>
										</div>
									</div>
									<div className="col-md-4 m-b30">
										<div className="award-bx bx-hover-up">
											<div className="award-media"><img src={Awards6} alt=""/></div>
											<div className="award-info">
												<h5 className="title">ISO Certified</h5>
												<p></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="section-area section-sp2 bg-white">
							<div className="container">		
								<div className="timeline-view">
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx"></div>
												<h6>We are known for the</h6>
												<h4>Manufacturing and Exporting of</h4>
												<p></p>
											</div>
										</div>
										<div className="timeline-content">
										<div className="row m-b10">
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li> PU/EPS/Rockwool Sandwich Panel</li>
													<li>Rectangular and Spiral Duct by latest auto production line.
</li>
													<li>PU-pre Insulated pipe manufacturing
</li>


													
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
												<li>Half Round pipe insulation.
 </li>
													<li>Split Air Conditioner, Fan coil Unit, Air Handling Unit, Packaged Humidification plant and Roof top packaged unit. </li>
												
												
												</ul>
											</div>
										</div>
											
											<div className="row">
												<div className="col-md-4 m-b30">
													<img src={AboutPic1} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic2} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic3} alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx"></div>
												<h6>Design, Supply, Installation, Testing and commissioning of</h6>
												<h4>HVAC/Central Air Conditioning System for,</h4>
												<p></p>
											</div>
										</div>
										<div className="timeline-content">
										<div className="row m-b10">
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>Commercial Building & Offices, Five Star Hotel, Resort and Spa,</li>
													<li>Hospital & Operation Theatre, ICU, OCU, CCU, Post Operative OT and ICU
 </li>
													<li>Pharmaceutical industries HVAC and Clean room
</li>
													
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
												<li>VRF central Air Conditioning system.
</li>
													<li>Split, Ducted Split and Roof top Packaged Air Conditioning system
</li>
													
												
												</ul>
											</div>
										</div>
											
											<div className="row">
												<div className="col-md-4 m-b30">
													<img src={AboutPic4} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic5} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic6} alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx"></div>
												<h6></h6>
												<h4>In Garments and Fashion industries for,</h4>
												<p></p>
											</div>
										</div>
										<div className="timeline-content">
										<div className="row m-b10">
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>Finished Garments Dry room or Dehumidification system with clean room.
In Industries like as Spinning, Weaving, Textiles, Process industries and Denim for,
</li>
													<li>Generator exhaust gas or Waste heat recovery system and Co –generation,
 </li>
													



												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
												<li>Absorption chillers and Chilling Plant.
</li>
<li> Natural Gas fired, Coal fired and Biomass fired boiler and Waste Heat Recovery Boiler with steam supply system.
</li>	
<li> Humidification Plant for the above industries.
</li>


												</ul>
											</div>
							
										</div>
											
											<div className="row">
												<div className="col-md-4 m-b30">
													<img src={AboutPic7} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic8} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic9} alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx"></div>
												<h6></h6>
												<h4> Clean Room for Pharmaceutical, Food & Electronics.
In Food industries for,</h4>
												<p></p>
											</div>
										</div>
										<div className="timeline-content">
										<div className="row m-b10">
										
											<div className="col-md-6">
												<ul className="list-check primary fs18">
												<li>Supply of all refrigeration machineries for  Cold Room & Cold Storage like as for Fruits, Vegetables, meat, fish storages and processing unit.
 </li>
												
													

												
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
												<li>Ice making Plant
 </li>
													<li>Supply and installation of Polyurethane made clean room Sandwich panel.

</li>

												
												</ul>
											</div>
										</div>
											
											<div className="row">
												<div className="col-md-4 m-b30">
													<img src={AboutPic7} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic8} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic9} alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx"></div>
												<h6></h6>
												<h4>Water treatment system for the above all industries are</h4>
												<p></p>
											</div>
										</div>
										<div className="timeline-content">
										<div className="row m-b10">
										
											<div className="col-md-6">
												<ul className="list-check primary fs18">


													<li>Hydro Chemical Industry to keep clean in inside above all industrial and utility machineries by water treatment chemical for above all machineries.</li>

												
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">


													<li>Water Softener/RO Plant/Water Treatment Plant/Auto Dosing Pump and Blow down/Sand Filter etc.
</li>
												
												</ul>
											</div>
										</div>
											
											<div className="row">
												<div className="col-md-4 m-b30">
													<img src={AboutPic7} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic8} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic9} alt=""/>
												</div>
											</div>
										</div>
									</div>
									<div className="timeline-area">
										<div className="timeline-date">
											<div className="sticky-top">
												<div className="date-bx"></div>
												<h6>Supply, installation of </h6>
												<h4>Central Air conditioning or HVAC ducting and Ventilation are</h4>
												<p></p>
											</div>
										</div>
										<div className="timeline-content">
										<div className="row m-b10">
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>Rectangular and Spiral Duct.
 </li>
													<li>PU-pre Insulated pipe
</li>
													<li>Half Round pipe insulation.</li>
													
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
												<li>Variable Refrigerant Flow (VRF) System. </li>
													<li>After sales services and spare parts available for the above all sectors and its
All supplied machineries.
 </li>
													<li>Life time round the clock after sales services.
</li>
													<li>Maintenance and Operation Contract are available for above any services for any brand.
</li>
													
												
												</ul>
											</div>
										</div>
											
											<div className="row">
												<div className="col-md-4 m-b30">
													<img src={AboutPic10} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic11} alt=""/>
												</div>
												<div className="col-md-4 m-b30">
													<img src={AboutPic12} alt=""/>
												</div>
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
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default CompanyHistory;