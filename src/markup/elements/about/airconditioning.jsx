import React, { Component } from 'react';

// Elements
import Count from '../counter/counter-sensor';

// Images
import Sign from "../../../images/sign.png"
import Portimg1 from "../../../images/team/Wattson-Air-Conditioning-Ltd.png"
import Portimg2 from "../../../images/portfolio/airconditioning/1619433038_mideaac.jpg"
import Portimg3 from "../../../images/portfolio/airconditioning/maxresdefault.jpg"
import Portimg4 from "../../../images/portfolio/airconditioning/photo.jpg"

class About2 extends Component{
	
	render(){
		return(
			<>
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s">
						<div className="heading-bx">
							<h6 className="title-ext m-b0"></h6>
							<h2 className="title-head m-b0">Airconditioning</h2>
							<div className="ttr-separator sepimg"></div>
							<p className="head-px2">Wattson Air-Conditioning Ltd. is one of the most reputed & acceptable organizations in
Bangladesh with better quality & services in the field of Air-Conditioning System</p>
						</div>
						{/* <!-- start progress bar item --> */}  
						{/* <div className="skillbar-box">
							<h6 className="title">Advanced Technology</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"96%"}}></p>
								<span className="skill-bar-percent">96%</span>
							</div>
						</div>
						<div className="skillbar-box">
							<h6 className="title">Delivery On Time</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"92%"}}></p>
								<span className="skill-bar-percent">92%</span>
							</div>
						</div>
						<div className="skillbar-box">
							<h6 className="title">Certified Engineers</h6>
							<div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"79%"}}></p>
								<span className="skill-bar-percent">79%</span>
							</div>
						</div> */}
							<div className="col-md-6">
												<ul className="list-check primary fs18">
													<li>	Split type Air-conditioning System.</li>
													<li>	VRF type Air-conditioning system.  </li>
													<li>	Packaged type Air-conditioning systems. </li>
													<li>	Air-conditioning Consulting Service. </li>
													<li>	Air-conditioning Maintenance services. </li>
												</ul>
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
