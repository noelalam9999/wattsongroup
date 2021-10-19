import React, { Component } from 'react';

// Elements
import Count from '../counter/counter-sensor';

// Images
import Sign from "../../../images/sign.png"
import Portimg1 from "../../../images/team/Firefighter.png"
import Portimg2 from "../../../images/portfolio/firefighter/modern-fire-fighting.jpg"
import Portimg3 from "../../../images/portfolio/firefighter/Fire-Extinguisher-Price-in-Bangladesh.png"
import Portimg4 from "../../../images/portfolio/firefighter/gallery4-large.jpg"
class About2 extends Component{
	
	render(){
		return(
			<>
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s">
						<div className="heading-bx">
							<h6 className="title-ext m-b0"></h6>
							<h2 className="title-head m-b0">About Us</h2>
							<div className="ttr-separator sepimg"></div>
							<p className="head-px2">Wattson Fire Fighting Equipment &amp; Safety is provide total solutions of Design, Consultancy,
Supply, Installation and Testing &amp; commissioning in the field of Fire Protection (Hydrants &amp;
Sprinkler system).
We have well qualified engineers with experience in a wide variety of Industries, Commercials and
Institutions project.</p>
						</div>
						{/* <!-- start progress bar item --> */}
						<div className="row m-b10">
											<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>	Fire Extinguishers with different types, sizes and extinguishing agents.</li>
													<li>	Automatic sprinklers system with fire pump. </li>
													<li>	Automatic fire hydrant system with fire pump.</li>
													<li>	Automatic Foam Extinguishing system</li>
													<li>	Automatic CO2 Extinguishing system.</li>
												</ul>
											</div>
											<div className="col-md-6">
												<ul className="list-check primary fs18">
												<li>Automatic fire alarm detection system </li>
													<li>Sound, PA and Burglar Alarm system.</li>
													<li>Access control &amp; Time attendance management system.</li>
													<li>CCTV based security surveillance system. </li>
													<li>Fire resistant doors.</li>
												
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
