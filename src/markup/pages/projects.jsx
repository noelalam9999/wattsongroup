import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Accordion, Card, Header, Button} from 'react-bootstrap';

// Layout
import Header1 from '../layout/header/header2';
import Footer1 from '../layout/footer/footer1';

// Elements
import SolutionSidebar from '../elements/services/solution-sidebar';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import ServicesPic1 from '../../images/services/pic1.jpg';
import ServicesPic2 from '../../images/services/pic2.jpg';

import BackBg1 from '../../images/background/bg1.jpg';
import PortImg1 from '../../images/banner/wec-projects/1(JWMarriot).jpg';
import PortImg2 from '../../images/banner/wec-projects/1.BadshaGroupofIndustriesLtd.jpg';
import PortImg3 from '../../images/banner/wec-projects/1.Coxsbazarrelwaystation.jpg';
import PortImg4 from '../../images/banner/wec-projects/10(GRAND-PARK-HOTEL).jpg';
import PortImg5 from '../../images/banner/wec-projects/10.DPSSTSSchool.jpg';
import PortImg6 from '../../images/banner/wec-projects/11(KEARI-CRESCENT).jpg';
import PortImg7 from '../../images/banner/wec-projects/2(UNION-TOWER).jpg';
import PortImg8 from '../../images/banner/wec-projects/2(World-Trade-Centre).jpg';
import PortImg9 from '../../images/banner/wec-projects/2.ARIFKNIT&SPINNINGLTD(N.R.GROUP).jpg';
import PortImg10 from '../../images/banner/wec-projects/2.UnionTower.jpg';
import PortImg11 from '../../images/banner/wec-projects/3(JCXTower).jpg';
import PortImg12 from '../../images/banner/wec-projects/3.DutchBanglaTower.jpg';
import PortImg13 from '../../images/banner/wec-projects/6.WorldTradeCentre.jpg';
import PortImg14 from '../../images/banner/wec-projects/7(Royal-Tulip-Sea-Pearl-Beach-Resorts-&-Spa-Ltd).jpg';
import PortImg15 from '../../images/banner/wec-projects/7.RUPAYANSHOPPINGSQUARE.jpg';
import PortImg16 from '../../images/banner/wec-projects/5.Square-Denim.jpg';
import PortImg17 from '../../images/banner/wec-projects/6(Dutch-Bangla-Tower).jpg';
import PortImg18 from '../../images/banner/wec-projects/8(Green-Life-Hospital-&-Collage).jpg';
import PortImg19 from '../../images/banner/wec-projects/9(Green-Delta-Aims-Tower).jpg';
import PortImg20 from '../../images/banner/wec-projects/9.GRANDPARKHOTEL.jpg';
import PortImg21 from '../../images/banner/wec-projects/ruppurpowerplant.jpg';
import PortImg29 from '../../images/banner/wep-projects/1.RUPPURNUCLEARPOWERPLANT.jpg';
import PortImg30 from '../../images/banner/wep-projects/10NavanaPharma.jpg';
import PortImg31 from '../../images/banner/wep-projects/11.JMIPharmaLtd.jpg';
import PortImg32 from '../../images/banner/wep-projects/12.MonobagMillsLtd..jpg';
import PortImg33 from '../../images/banner/wep-projects/2.BeximcoPharmaceuticalsLtd.(Tongi).jpg';
import PortImg34 from '../../images/banner/wep-projects/4.PopularPharmaceuticalsLtd.,Tongi.jpg';
import PortImg35 from '../../images/banner/wep-projects/6.ESSENTIALDRUGSCOMPANYLIMITED,Bogra.jpg';
import PortImg36 from '../../images/banner/wep-projects/7.SquarepharmaceuticalsLtd.,Gazipur.jpg';
import PortImg37 from '../../images/banner/wep-projects/8OrionPharmaceuticalsLtd.(Tejgaon Project).jpg';
import PortImg38 from '../../images/banner/wep-projects/9LabaidPharmaceuticalLtd.jpg';
import PortImg39 from '../../images/banner/wep-projects/AduryApparels.jpg';
import PortImg40 from '../../images/banner/wep-projects/BangladeshFisheriesDevelopmentCorporation(BFDC).jpg';
import PortImg41 from '../../images/banner/wep-projects/IFADMULTIPRODUCTSLIMITED.jpg';
import PortImg42 from '../../images/banner/wep-projects/MILKVITABANGLADESH.jpg';
import PortImg43 from '../../images/banner/wep-projects/3.INCEPTAPHARMACEUTICLSLTD.jpg';
// import PortImg44 from '../../images/banner/wep-projects';
// import PortImg45 from '../../images/banner/wep-projects';
// import PortImg46 from '../../images/banner/wep-projects';
// import PortImg47 from '../../images/banner/wep-projects';
// import PortImg48 from '../../images/banner/wep-projects';
// import PortImg49 from '../../images/banner/wep-projects';

class SolutionAgriculturalEngineering extends Component {
	
	render(){


		const content = [
			{ id:1,
				thumb: PortImg1,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587092/1_JW_Marriot_tgb4pa.jpg",
				tag: ['Chemical',],
				title: "JW Marriot",
				exetitle: "",
			},
			{ id:2,
				thumb: PortImg2, 
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587102/1.Badsha_Group_ofIndustries_Ltd_pv5ifd.jpg",
				tag: ['Oil & Gas',],
				title: "Badsha Group of Industries",
				exetitle: "Kamal Yarn Ltd. Badsha Textile Mills Ltd.(Ext.Project),Supply, installation, testing &amp; commissioning of USRT 9362 Capacity Shuangliang Branded Absorption chiller with pump and all others necessary accessories.",
			},
			{ id:3,
				thumb: PortImg3,
				LightImg: "https://res.cloudinary.com/american-international-university-bangladesh/image/upload/v1628513954/1.Coxsbazarrelwaystation_b3wiel.jpg",
				tag: ['Oil & Gas',],
				title: "Cox's Bazar Railway",
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 1200 RT (300 RT X 4 Nos.) CapacityWater cooled Magnetic Bearing Centrifugal Chiller, AHU, FCU, Pump, Cooling Tower andrelated all other equipments for Central Air-conditioning system including Ducting,Piping to Coxs Bazar Railway Station.",
			},
			
		
			
		
			{ id:4,
				thumb: PortImg4,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587107/9.GRAND_PARK_HOTEL_llba8f.jpg",
				tag: ['Oil & Gas',],
				title: "Grand Park Hotel",
				exetitle: "",
			},
			{ id:5,
				thumb: PortImg5,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587106/10.DPS_STS_School_wt5x5q.jpg",
				tag: ['Oil & Gas',],
				title: "DPS STS School",
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 713.5 RT (Ducted type , Cassette type,&amp; wall mounted type) VRF System Air-conditioning system including ducting.",
			},
			{ id:6,
				thumb: PortImg6,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587097/11_KEARI-CRESCENT_ivtrsi.jpg",
				tag: ['Industrial',],
				title: "KEARI CRESCENT",
				
				exetitle: "",
			},
			{ id:7,
				thumb: PortImg7,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587092/2_UNION-TOWER_cey23w.jpg",
				tag: ['Chemical',],
				title: "Union Tower",
				exetitle: "",
			},
			{ id:8,
				thumb: PortImg8, 
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587103/6.World_Trade_Centre_rzvxbr.jpg",
				tag: ['Oil & Gas',],
				title: "World Trade Center",
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 2600 RT (650 RT X 4 Nos.) Capacity Direct Fired Absorption Chiller, AHU, FCU, Pump, Cooling Tower and related all other equipments for Central Air-conditioning system including Ducting, Piping toWorld Trade Center Chittagong.",
			},
			{ id:9,
				thumb: PortImg9,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587101/2.ARIF_KNIT_SPINNING_LTD._N.R._GROUP_xod1dg.jpg",
				tag: ['Oil & Gas',],
				title: "ARIF KNIT & SPINNINGLTD",
				exetitle: "",
			},
			
		
			
		
			{ id:10,
				thumb: PortImg10,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587103/2.Union_Tower_r5oylg.jpg",
				tag: ['Oil & Gas',],
				title: "Union Tower",
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 1125 RT (Water Cooled Chiller Type ) Air Conditioning system including Ducting &amp; All Other Equipments at Basundhara R/A.",
			},
			{ id:11,
				thumb: PortImg11,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587091/3_JCX_Tower_uhtxwa.jpg",
				tag: ['Oil & Gas',],
				title: "JCX Tower",
				exetitle: "",
			},
			{ id:12,
				thumb: PortImg12,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587092/6_Dutch-Bangla-Tower_rux0oj.jpg",
				tag: ['Industrial',],
				title: "Dutch Bangla Tower",
				
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 1200 RT Central Air-conditioning system and related all other equipments including Ducting at DBBL tower , Motijheel, Dhaka.",
			},
			{ id:13,
				thumb: PortImg13,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587095/2_World-Trade-Centre_xxbnmo.jpg",
				tag: ['Chemical',],
				title: "World Trade Centre",
				exetitle: "",
			},
			{ id:14,
				thumb: PortImg14, 
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587092/7_Royal-Tulip-Sea-Pearl-Beach-Resorts-_-Spa-Ltd_hq4jsc.jpg",
				tag: ['Oil & Gas',],
				title: "Royal Tulip Sea Pearl Beach Resorts & Spa Ltd",exetitle: "Supply, Installation, Testing &amp; Commissioning of 1200 RT (300 RT X 4 Nos.) Capacity Water cooled screw chiller, FCU, Pump, Cooling Tower and related all other equipments for Central Air- conditioning system including Ducting, Piping.",
			},
			{ id:15,
				thumb: PortImg15,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587091/5_RUPAYAN-SHOPPING-SQUARE_nowekj.jpg",
				tag: ['Oil & Gas',],
				title: "RUPAYAN SHOPPING SQUARE",
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 705 RT (DUCTED TYPE VRF SYSTEM &amp; CEILING SUSPENDED TYPE VRF SYSTEM ) VRF Type Air-conditioning system including ducting at Basundhara R/A, Dhaka.",
			},
			
		
			
		
			{ id:16,
				thumb: PortImg16,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587102/5.Square-Denim_x0mc08.jpg",
				tag: ['Oil & Gas',],
				title: "Square Denim",
				exetitle: "",
			},
			{ id:17,
				thumb: PortImg17,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587092/6_Dutch-Bangla-Tower_rux0oj.jpg",
				tag: ['Oil & Gas',],
				title: "Dutch Bangla Tower",
				exetitle: "",
			},
			{ id:18,
				thumb: PortImg18,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587092/8_Green-Life-Hospital-_-Collage_mkyeo0.jpg",
				tag: ['Industrial',],
				title: "Green Life Hospital and College",
				
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 826 RT (413 RT X 2 Nos.) Capacity Direct Fired Absorption Chiller and related all other equipments for Central Air- conditioning system including Ducting, Piping to Green Life Hospital Ltd., in Green Rd., Dhaka.",
			},
			{ id:19,
				thumb: PortImg19,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587092/9_Green-Delta-Aims-Tower_cktbzv.jpg",
				tag: ['Chemical',],
				title: "Green Delta Aims Tower",
				exetitle: "",
			},
			{ id:20,
				thumb: PortImg20, 
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587107/9.GRAND_PARK_HOTEL_llba8f.jpg",
				tag: ['Oil & Gas',],
				title: "GRAND PARK HOTEL",
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 105 RT (DUCTED TYPE VRF SYSTEM &amp; CEILING SUSPENDED TYPE VRF SYSTEM ) VRF Type Air-conditioning system including ducting at Barisal, Bangladesh.",
			},
			{ id:21,
				thumb: PortImg21,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587093/ruppur_powerplant_s1xsqz.jpg",
				tag: ['Oil & Gas',],
				title: "ruppur power plant",
				exetitle: "",
			},
			
		
			
		
			{ id:29,
				thumb: PortImg29,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587093/ruppur_powerplant_s1xsqz.jpg",
				tag: ['Oil & Gas',],
				title: "RUPPUR NUCLEAR POWERPLANT",
				exetitle: "",
			},
			{ id:30,
				thumb: PortImg30,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587073/10_Navana_Pharma_d2xumb.jpg",
				tag: ['Oil & Gas',],
				title: "Navana Pharma",
				exetitle: "",
			},
			{ id:31,
				thumb: PortImg31,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587073/11.JMI_Pharma_Ltd_q64h1o.jpg",
				tag: ['Industrial',],
				title: "JMI Pharma Ltd",
				
				exetitle: "",
			},
			{ id:32,
				thumb: PortImg32,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587075/12._Monobag_Mills_Ltd._tos22j.jpg",
				tag: ['Chemical',],
				title: "Monobag Mills Ltd",
				exetitle: "",
			},
			{ id:33,
				thumb: PortImg33, 
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587073/2._Beximco_Pharmaceuticals_Ltd._Tongi_nboov3.jpg",
				tag: ['Oil & Gas',],
				title: "Beximco Pharmaceuticals Ltd",
				exetitle: "",
			},
			{ id:34,
				thumb: PortImg34,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587074/4.Popular_Pharmaceuticals_Ltd._Tongi_guwjpu.jpg",
				tag: ['Oil & Gas',],
				title: "Popular Pharmaceuticals Ltd",
				exetitle: "",
			},
			
		
			
		
			{ id:35,
				thumb: PortImg35,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587072/6.ESSENTIAL_DRUGS_COMPANY_LIMITED_Bogra_bbujoh.jpg",
				tag: ['Oil & Gas',],
				title: "ESSENTIAL DRUGS COMPANY LIMITED",
				exetitle: "",
			},
			{ id:36,
				thumb: PortImg36,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587072/7.Square_pharmaceuticals_Ltd._Gazipur_ipzgch.jpg",
				tag: ['Oil & Gas',],
				title: "Square Pharmaceuticals Ltd",
				exetitle: "",
			},
			{ id:37,
				thumb: PortImg37,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587073/8_Orion_Pharmaceuticals_Ltd._Tejgaon_Project_hgp5se.jpg",
				tag: ['Industrial',],
				title: "Orion Pharmaceuticals Ltd",
				
				exetitle: "",
			},
			{ id: 38,
				thumb: PortImg38,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587073/9_Labaid_Pharmaceutical_Ltd_txu0z7.jpg",
				tag: ['Chemical',],
				title: "Labaid Pharmaceutical Ltd",
				exetitle: "",
			},
			{ id:39,
				thumb: PortImg39, 
				LightImg: PortImg39,
				tag: ['Oil & Gas',],
				title: "Adury Apparels",
				exetitle: "",
			},
			{ id:40,
				thumb: PortImg40,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587074/Bangladesh_Fisheries_Development_Corporation_BFDC_akpr2w.jpg",
				tag: ['Oil & Gas',],
				title: "Bangladesh Fisheries Development Corporation",
				exetitle: "",
			},
			
		
			
		
			{ id:41,
				thumb: PortImg41,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587074/IFAD_MULTI_PRODUCTS_LIMITED_kwodgd.jpg",
				tag: ['Oil & Gas',],
				title: "IFAD MULTI PRODUCTS LIMITED",
				exetitle: "",
			},
			{ id:42,
				thumb: PortImg42,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587075/MILK_VITA_BANGLADESH_gmeozp.jpg",
				tag: ['Oil & Gas',],
				title: "MILK VITA BANGLADESH",
				exetitle: "",
			},
			{ id:43,
				thumb: PortImg43,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587072/3.INCEPTA_PHARMACEUTICALS_LTD_fbminh.jpg   ",
				tag: ['Industrial',],
				title: "INCEPTA PHARMACEUTICLS LTD",
				
				exetitle: "",
			},
			{ id:44,
				thumb: PortImg43,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587102/4.Grand_SultanTea_Resorts_Golf_fnslfn.jpg",
				tag: ['Industrial',],
				title: "Grand Sultan Resort",
				
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 1200 RT (400 RT X 3 Nos.) Capacity Direct Fired Absorption Chiller, AHU, FCU, Pump, Cooling Tower and related all other equipments for Central Air-conditioning system including Ducting, Piping to Grand Sultan Tea Resort &amp; Golf, Sreemongol.",
			},
			{ id:45,
				thumb: PortImg43,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587101/3.Envoy_Group_Ltd_cyy2ct.jpg",
				tag: ['Industrial',],
				title: "Envoy Group",
				
				exetitle: "Supply, installation, testing &amp; commissioning of USRT 910 Capacity Shuangliang Branded Absorption chiller with pump, boiler, cooling tower and all others necessary accessories.",
			},
			{ id:46,
				thumb: PortImg43,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587103/8.ECHO_TEX_LTD._y5jdr0.jpg",
				tag: ['Industrial',],
				title: "Echo Tex",
				
				exetitle: "",
			},
			{ id:47,
				thumb: PortImg43,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628616657/miez3_jtmwao.jpg",
				tag: ['Industrial',],
				title: "Meghna Beverage",
				
				exetitle: "",
			},
			{ id:48,
				thumb: PortImg4,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628616794/1583809121061_nhw11w.jpg",
				tag: ['Industrial',],
				title: "Akij Food and Beverage",
				
				exetitle: "",
			},
			{ id:49,
				thumb: PortImg4,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628617583/1622880392055_rkt3h7.jpg",
				tag: ['Industrial',],
				title: "Pioneer Denim",
				
				exetitle: "",
			},
			{ id:50,
				thumb: PortImg4,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587104/4.SQUARE_FASHIONS_LTD._tqnnyr.jpg",
				tag: ['Industrial',],
				title: "Square Fashions",
				
				exetitle: "",
			},
			{ id:51,
				thumb: PortImg4,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587101/2.ARIF_KNIT_SPINNING_LTD._N.R._GROUP_xod1dg.jpg",
				tag: ['Industrial',],
				title: "N.R. Group",
				exetitle: "Supply, Installation, Testing &amp; Commissioning of 4024 RT Capacity Shuangliang Branded Absorption chiller with pump and all others necessary accessories.",
			},
			{ id:52,
				thumb: PortImg4,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628619498/aman_group_vden6z.jpg",
				tag: ['Industrial',],
				title: "Aman Group",
				exetitle: "",
			},
			{ id:53,
				thumb: PortImg4,
				LightImg: "https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628619498/aman_group_vden6z.jpg",
				tag: ['Industrial',],
				title: "Mithela Group",
				exetitle: "",
			},
		]

		const newArr = content.filter(obj => obj.id == this.props.match.params.id);
	
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				{newArr.map((item, index)=>(
				
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">{item.title}</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li></li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-fix bg-white">
							<div className="container about-video">
								<div className="row">
									<div className="col-lg-4 col-md-5 m-b30 wow fadeInUp" data-wow-delay="0.2s">
										<SolutionSidebar />
									</div>
									<div className="col-lg-8 col-md-7 service-textarea wow fadeInUp portfolio-content" data-wow-delay="0.4s">
										<div className="heading-bx text-left m-b20">
											<h3 className="title-head m-b0">{item.title}</h3>
											<div className="ttr-separator sepimg"></div>
										</div>
										<p>{item.exetile}</p>
										<div className="row ">
											<div className="col-md-12 m-b15">
												<img src={item.LightImg} className="radius-sm imghight" alt=""/>
											</div>
										</div>
										<h4 className="title m-b5">Project Specification</h4>
										<p>{item.exetitle}</p>
										{/* <div className="row">
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
										</div> */}
										{/* <h4 className="title m-b5">Agricultural Benefits</h4>
										<p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p> */}
										{/* <div className="row">
											<div className="col-xl-5 col-lg-12">
												<img src={ServicesPic2} className="radius-sm m-b30" alt=""/>
											</div>
											<div className="col-xl-7 col-lg-12">
											<ul className="service-list-circle">
												<li><i className="flaticon-maintenance"></i>Through the collaboration with customers in discussing needs and demand, we're able to attain mutual understanding, gain customer trust to offer appropriate advice.</li>
												<li><i className="flaticon-light-bolt"></i>Mitech takes into consideration every little detail to make sure the system run smoothly and responsively. Mitech employs a new technique called Minified Technology.</li>
												<li><i className="flaticon-mask"></i>We reduce redundant complex calculations and lengthy erroneous code texts with simpler ones to ensure Mitech would run seamlessly.</li>
											</ul>
											</div>
										</div> */}
										{/* <Accordion className="ttr-accordion gray" defaultActiveKey="0">
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="0">
													<Link to="#">Electronic Materials</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="0">
													<Card.Body>
														To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="1">
													<Link to="#">Power systems</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="1">
													<Card.Body>
														To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
											<Card>
												<Accordion.Toggle as={Card.Header} eventKey="2">
													<Link to="#">Auto parts</Link>
												</Accordion.Toggle>
												<Accordion.Collapse eventKey="2">
													<Card.Body>
														To identify potential areas of improvement within the ipsum dolor sit amet onsectetur adipiscing elit. These eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
													</Card.Body>
												</Accordion.Collapse>
											</Card>
										</Accordion> */}
									</div>
								</div>
							</div>
						</div>
												
					</div>
					
				</div>
					
				))}	
				<Footer1 />
				
			</>
		);
	}
}

export default SolutionAgriculturalEngineering;