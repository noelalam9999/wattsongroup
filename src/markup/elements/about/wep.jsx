import React, { Component } from 'react';

// Elements
import Count from '../counter/counter-sensor';

// Images
import Sign from "../../../images/sign.png"
import Portimg1 from "../../../images/team/WEP.png"
import Portimg2 from "../../../images/portfolio/wep/Clean-Room.jpg"
import Portimg3 from "../../../images/portfolio/wep/Cold-Room.jpg"
import Portimg4 from "../../../images/portfolio/wep/Vision-Window-Door.jpg"
class About2 extends Component{
	
	render(){
		return(
			<>
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s">
						<div className="heading-bx">
							<h6 className="title-ext m-b0"></h6>
							<h2 className="title-head m-b0">About WEPL</h2>
							<div className="ttr-separator sepimg"></div>
							<p className="head-px2">Wattson Euro Panel Limited is the manufacturer of:
PU Sandwich Panel, PU panel board, PU insulated ceiling gypsum board,  PU sandwiched roofing panel , cold room and cold storages panel and PU pre insulated pipes,PU Pipe full and half round Insulation.
</p>
					
						
						</div>
						{/* <!-- start progress bar item --> */}
						<div className="row m-b10">
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>	We have our own factory at Marjal, Raipura, Narsingdi (Besides Dhaka sylhet Highway).</li>
													<li>	Our Panels are highly accepted by the different industries. e.g. </li>
													<li>	Pharmaceuticals industry </li>
													<li>	Chemical Industries etc.</li>
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
												<li>Cold Room & Cold Storages </li>
													<li>Hospital and Operation Theater</li>
													<li>Hotel, Covert Van & Poultry</li>
													<li>Fish, Meat, Food & Vegetable processing Plant </li>
													<li>Cosmetics and Beverage industries,</li>
												
												</ul>
											</div>
										</div>
						<div className="sign-bx">
							{/* <div className="sign-img">
								<img src={Sign} alt=""/>
							</div> */}
							<div className="author-bx">
							<h5 className="title">Engr Md. Ashraf Uddin</h5>
								<span>Managing Director and Founder</span>
							</div>
						</div>
					</div>
					<div className="col-lg-6 col-md-12 wow fadeIn" data-wow-delay="0.6s">
						<div className="about-img-box2 row sp10">
							<div className="col-sm-6 col-6">
								<img src={Portimg1} className="m-b10" alt=""/>
								<img src={Portimg2} alt=""/>
							</div>
							<div className="col-sm-6 col-6 m-b10 m-t10">
								<img src={Portimg3} className="m-b10" alt=""/>
								<img src={Portimg4} alt=""/>
							</div>
							<div className="about-img-inner">
								<div>
									<h2 style={{color:"black"}} className="title"><Count counter={20}/>+</h2>
									<span style={{color:"black"}} >YEAR WORK IN INDUSTRY</span>
								</div>
							</div> 
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default About2;
