import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import PortfolioBox2 from '../elements/portfolio/portfolio-box2';
// Layout
import {Accordion, Card, Header, Button} from 'react-bootstrap';
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


import AboutImg1 from "../../images/portfolio/portfolio-3/img1.jpg"
import AboutImg2 from "../../images/portfolio/portfolio-3/img2.jpg"
import AboutImg3 from "../../images/portfolio/portfolio-3/img3.jpg"
import AboutImg4 from "../../images/portfolio/portfolio-3/img4.jpg"

import PortImg1 from "../../images/portfolio/portfolio-3/image_1.jpg"
import PortImg2 from "../../images/portfolio/portfolio-3/image_2.jpg"
import PortImg3 from "../../images/portfolio/portfolio-3/image_3.jpg"
import PortImg4 from "../../images/portfolio/portfolio-3/image_4.jpg"
import PortImg5 from "../../images/portfolio/portfolio-3/image_5.jpg"
import PortImg6 from "../../images/portfolio/portfolio-3/image_6.jpg"
import PortImg7 from "../../images/portfolio/portfolio-3/image_7.jpg"
import PortImg8 from "../../images/portfolio/portfolio-3/image_8.jpg"
import PortImg9 from "../../images/portfolio/portfolio-3/image_9.jpg"

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
class Index2 extends Component {
	constructor(props) {
    
		super(props);
		this.state = {
		  viewCompleted: false,
		  image:PortImg2,
		  activeItem: {
			image:PortImg2
		  },
		  todoList: []
		  };
	  }

	  handleChange = (e) => {
		console.log(e)

		if(e==0){
			const image=PortImg3;

			this.setState({ image });

		}else if(e==1){


		}
		else if(e==2){


		}
		else if(e==3){


		}
		else if(e==4){


		}
		

	  
	  
	
	  
		
	  };


	render(){
		return (
			<>
				
				<Header2 />
				
				<div className="page-content bg-white">
					
					<Slider />
				
					{/* <!-- Main Slider --> */}
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 section-sp21 bg-white" style={{ backgroundPosition:"bottom", backgroundSize:"100%"}}>
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s">
										<div className="heading-bx m-b30">
											<h6 className="m-b0">Welcome to </h6>
											<h2 className="title-head m-b0">Wattson Group</h2>
											<div className="ttr-separator sepimg"></div>
											<p className="head-px2">We are Highly experienced for Standard Design, Supply, Installation,Testing & Commissioning with consulting service for the composite project in the field of</p>
										</div>
										<div className="row m-b10">
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>HVAC (Central Air Conditioning System)  in Hotel & Resort,<br/> Hospital & O.T. , <br/> Chemical & Pharmaceutical,<br/> Garment, Textile and Spinning Industry,<br/> Highrise Building etc.</li>
													
													<li>Pre-fabricated PU Sandwich Panel and PU pre-insulated Pipe manufacturer.</li>
													<li>Variable Refrigerant Flow (VRF) Air-conditioning System. </li>
													<li>Spiral and Rectangular Duct Manufacturer (ASHRAE and SMACNA standard).</li>
													<li>Pre-fabricated PU Sandwich Panel and PU pre-insulated Pipe manufacturer.</li>
											
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
												
													<li>Cogeneration, Chilling & Humidification plant. </li>
													<li>Dehumidification System(Garments and Pharmaceuticals).</li>
													<li>Clean Room(Food and Pharmaceuticals).</li>
													<li>Water Softner and Water Treatment plant, RO system and Descaling for all the above systems.</li>
													<li>Cold Room & Cold Storage.</li>
													<li>Meat & Fish processing plant.</li>
													<li>Plant Manager BMS and Inverter System. </li>
													<li>Super-shop All-Solution(Air Conditioning, Fish-Meat-Chiller, Fruit and Vegetable Chiller, Beverage Chiller and Frozen Chiller, Ice-Flake Machine, Gondola etc) </li>
												</ul>
											</div>
										</div>
										<Link to="contact-1" style={{color:"black"}} className="btn m-r10">Contact Us</Link>
										<Link to="about-1" className="btn-secondry">About Us</Link>
									</div>
									<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s">
						<div className="about-img-box2 row sp10">
							<div className="col-sm-6 col-6">
								<img src={AboutImg3} className="m-b10" alt=""/>
								<img src={AboutImg2} alt=""/>
							</div>
							<div className="col-sm-6 col-6 m-b10 m-t10">
								<img src={AboutImg1} className="m-b10" alt=""/>
								<img src={AboutImg4} alt=""/>
							</div>
							<div className="about-img-inner">
								<div>
									<h2 style={{color:"black"}} className="title text-black"><Count counter={20}/>+</h2>
									<span style={{color:"black"}} >YEARS IN THE INDUSTRY</span>
								</div>
							</div> 
						</div>
					</div>
								</div>
							</div>
						</div>
						
						<div className="section-area section-sp3 section-sp31 bg-gray">
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-bx text-center m-b0">
											
											<h2 className="title-head m-b0">Our Renowned projects</h2>
											<div className="ttr-separator sepimg"></div>
										</div>
									</div>
								</div>
							</div>
							<PortfolioBox2 />
						</div>
						
						
	 
						<div className="section-area section-sp1 section-sp31 bg-primary" style={{ backgroundPosition:"bottom", backgroundSize:"100%"}}>
							<div className="container">
								<div className="row">
									<div className="col-lg-12">
										<div className="heading-bx text-white text-center">

											<h2 style={{color:"black"}} className="title-head m-b0">	Scope of Work</h2>
											<h6 style={{color:"black"}} className="title-ext m-b0">What we are best known for</h6>
											<div className="ttr-separator sepimg2"></div>
										</div>
									</div>
								</div>
								<Tabs  className="history-box">
									<TabList  className="nav nav-tabs">
										<Tab><span style={{color:"black"}}>HVAC System</span></Tab>
										<Tab><span style={{color:"black"}}>Co-generation</span></Tab>
										<Tab><span style={{color:"black"}}>Steam Boiler</span></Tab>
										<Tab><span style={{color:"black"}}>(De)Humidification</span></Tab>
										<Tab><span style={{color:"black"}}>PU-Sandwich panel</span></Tab>
										<Tab><span style={{color:"black"}}>Duct Manufacturing</span></Tab>
										<Tab><span style={{color:"black"}}>Water Treatment Chemical</span></Tab>
										<Tab><span style={{color:"black"}}>Compressor</span></Tab>
										<Tab><span style={{color:"black"}}>Insulation</span></Tab>
									</TabList>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg1} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3 style={{color:"black"}}>HVAC System</h3>
													<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Air Conditioning System with Absorption Chiller </Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<div onClick={{}}>
									<Card.Body>
										Brand - SHUANG LIANG <br/>
										Origin - China
									</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>
					
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">All components</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									Origin - Japan/EU/ USA/Germany
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<Link to="#">Air Handling Unit (AHU), Fan Coil Unit (FCU) and DX Package Type</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
								Brand -	DUNHAM-BUSH/
FRIMEC /TICA
 <br/>
										Origin - China/Malaysia
									</Card.Body>
								</Accordion.Collapse>
							</Card>
						
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<Link to="#">Filtration: Pre-filter, Bag filter and HEPA filter</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
									Brand - KLC/ Mayaire<br/>
										Origin - China
									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<Link to="#">VRF</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<div>

									
									<Card.Body>
									Brand - Dunham Bush <br/>
										Origin - Malaysia
									</Card.Body>
									</div>
								</Accordion.Collapse>
							</Card>
						</Accordion>


												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={this.state.image} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3 style={{color:"black"}}>Co-generation</h3>
													<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							
													<div onClick={()=>this.handleChange(0)}>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<Link to="#">Co-Generation system with Shuangliang Absorption Chiller.</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
							
									<Card.Body>
									Brand - SHUANG LIANG <br/>
										Origin - China									</Card.Body>
										
								</Accordion.Collapse>
							
							</Card>
							</div>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Waste Heat Recovery Boiler </Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
									Brand - Huayuan <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Cooling Tower</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									Brand - Measan / Yuanheng <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<Link to="#">Heat Exchanger</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
									Brand - Accessen<br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									<Link to="#">Pumps</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
									Brand - Liancheng / Monoflo/Groundfos/Armstong <br/>
										Origin - China/Australia/Denmark/USA									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
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
													<h3 style={{color:"black"}}>Steam Boiler</h3>
													<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<Link to="#">Exhaust Gas Boiler (EGB) / Waste Heat </Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
									Brand - Huayuan <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Electric Boiler</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
									Brand - Huayuan <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Direct Fired Boiler</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									Brand - Huayuan/Shuangliang/Scherrer<br/>
										Origin - China/Germany									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
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
													<h3 style={{color:"black"}}>(De)Humidification</h3>
													<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
						
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Humidification Plant </Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
									Brand - Jiangyin<br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Dehumidifier.    </Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									Brand - Peritek <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
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
													<h3 style={{color:"black"}}>PU-Sandwich panel</h3>
													<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<Link to="#">PU Sandwich Panel</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
									Brand - WATTSON EURO Panel <br/>
										Origin - Bangladesh								</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									<Link to="#">PU Pre-insulated Pipe</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
									Brand - WATTSON EURO Panel <br/>
										Origin - Bangladesh								</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<Link to="#">Half-round PU insulation</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
									Brand - WATTSON EURO Panel <br/>
										Origin - Bangladesh								</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<Link to="#">Rockwool Sandwich Panel</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
									Brand - WATTSON EURO Panel <br/>
										Origin - Bangladesh								</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">EPS Sandwich Panel</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
									Brand - WATTSON EURO Panel<br/>
										Origin - Bangladesh									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Coving – Corner, Curve, Angle</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									Brand - WATTSON EURO Panel <br/>
										Origin - Bangladesh								</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg6} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3 style={{color:"black"}}>Duct Manufacturing, Supply and Installation</h3>
													<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<Link to="#">Spiral Duct</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
									Brand -Wattson Euro Panel<br/>
										Origin - Bangladesh									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="7">
									<Link to="#">Rectangular Duct</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="7">
									<Card.Body>
									Brand - Wattson Euro Panel <br/>
										Origin - Bangladesh									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<Link to="#">Oval Duct</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
									Brand - Wattson Euro Panel <br/>
										Origin - Bangladesh								</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									<Link to="#">Elbow</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
									Brand - Wattson Euro Panel <br/>
										Origin - Bangladesh									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<Link to="#">Reducer</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
									Brand - Wattson Euro Panel <br/>
										Origin - Bangladesh								</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Corner</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
									Brand - Wattson Euro Panel <br/>
										Origin - Bangladesh									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Flange</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									Brand - Wattson Euro Panel <br/>
										Origin - Bangladesh									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg7} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3 style={{color:"black"}}>Water Treatment Chemical</h3>
													<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<Link to="#">Boiler Water Treatment Chemicals(FTB, EGB)</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
									Brand - Hydrobenture <br/>
										Origin - Malaysia									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="10">
									<Link to="#">Cooling and Chiller Water Treatment Chemicals</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="10">
									<Card.Body>
									Brand - Hydrobenture <br/>
										Origin - Malaysia									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="9">
									<Link to="#">Waste Water Treatment Chemicals: </Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="9">
									<Card.Body>
									Brand - Hydrobenture <br/>
										Origin - Malaysia									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="8">
									<Link to="#">De- Scaling materials: </Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="8">
									<Card.Body>
									Brand - Hydrobenture <br/>
										Origin - Malaysia									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="7">
									<Link to="#">Water Treatment Chemicals: </Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="7">
									<Card.Body>
									Brand - Hydrobenture <br/>
										Origin - Malaysia									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<Link to="#">RO system</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
									Brand - Shaihi <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									<Link to="#">Water softener Plant</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
									Brand - Shaihi <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<Link to="#">Electro Deionization (EDI) system</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
									Brand - Shaihi <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Sand Filter</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
									Brand - Shaihi <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Ultra Filtration system</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									Brand - Shaihi <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Other Chemicals(HCL, H2SO4, NAOH etc)</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									<br/>
										Origin - India, China, Germany, Japan									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Water Treatment Lab Equipment</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									<br/>
										Origin - Romania, USA, India China								</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg8} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3 style={{color:"black"}}>Compressor</h3>
													<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Air Compressor</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
									Brand - Vortex <br/>
										Origin - Turkey									</Card.Body>
								</Accordion.Collapse>
							</Card>
						
						</Accordion>
												</div>
											</div>
										</div>
									</TabPanel>
									<TabPanel>
										<div className="row align-items-center text-white">
											<div className="col-xl-5 col-lg-6">
												<img src={PortImg9} alt=""/>
											</div>
											<div className="col-xl-7 col-lg-6">
												<div className="history-info">
													<h3 style={{color:"black"}}>Insulation</h3>
													<Accordion className="ttr-accordion white faq-bx" defaultActiveKey="0">
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="3">
									<Link to="#">Rubber Insulation</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="3">
									<Card.Body>
									Brand - Iking/Armacell/Superlon <br/>
										Origin - China/USA/Malaysia									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="1">
									<Link to="#">Rockwool Blanket / Board(Sound proof)</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="1">
									<Card.Body>
									Brand - Iking <br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="2">
									<Link to="#">Glass wool Insulation / Board</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="2">
									<Card.Body>
									Brand - Iking<br/>
										Origin - China									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="4">
									<Link to="#">Half Round PU insulation</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="4">
									<Card.Body>
									Brand - Wattson Euro Panel <br/>
										Origin - Bangladesh									</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="5">
									<Link to="#">PU Pipe insulation with Aluminum Clading</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="5">
									<Card.Body>
									Brand - Wattson Euro Panel <br/>
										Origin - Bangladesh								</Card.Body>
								</Accordion.Collapse>
							</Card>
							<Card>
								<Accordion.Toggle as={Card.Header} eventKey="6">
									<Link to="#">Pre Insulated Pipe: Metal Jacket, Plastic Jacket, Colour Jacket</Link>
								</Accordion.Toggle>
								<Accordion.Collapse eventKey="6">
									<Card.Body>
									Brand - Wattson Euro Panel/
Insafoam
<br/>
										Origin - Bangladesh									</Card.Body>
								</Accordion.Collapse>
							</Card>
						</Accordion>
												</div>
											</div>
										</div>
									</TabPanel>
								</Tabs>
							</div>
						</div>
						
						<div className="section-area section-sp1 team-page bg-white" style={{ backgroundPosition:"bottom", backgroundSize:"100%"}}>
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