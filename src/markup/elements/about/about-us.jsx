import React, { Component } from 'react';

// Elements
import Count from '../counter/counter-sensor';

// Images
import Sign from "../../../images/sign.png"
import Portimg1 from "../../../images/team/WG.png"
import Portimg2 from "../../../images/portfolio/wep/1267ccbd3c3c450483a57635a7631203-ProductDetailImage7b05a205-a15c-4619-9920-8cd6bae48acb.jpg"
import Portimg3 from "../../../images/portfolio/wec/cooling-tower(1).jpg"
import Portimg4 from "../../../images/portfolio/hydrochemical-concerns/chemistry-glassware-56a12a083df78cf772680235.jpg"
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
							<p className="head-px2">Wattson Euro Panel industries Ltd. is one of the most experienced and First Prefab sandwiched panel and Door manufacturer in Bangladesh. The prefab sandwiched panel is PU/PE injected by latest modern injection machine. Also has capacity and facility to manufacture EPS and rock wool sandwiched panel. All these products also has a standard and remarkable quality.</p>
						<p className="head-px2">Our mission is to produce and continually develop quality products at a competitive price while fostering a climate where environmental technologies can thrive.  All employees will work together in combining their efforts and skills to ensure our mission and goals are fulfilled in a courteous manner. We will always strive to service our customer latest technological products with the utmost integrity, and to their complete satisfaction.
</p>
						
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
						<div className="sign-bx">
							<div className="sign-img">
								<img src={Sign} alt=""/>
							</div>
							<div className="author-bx">
								<h5 className="title">Robert Smith</h5>
								<span>CEO AND Founder</span>
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
									<h2 className="title"><Count counter={20}/>+</h2>
									<span>YEAR WORK IN INDUSTRY</span>
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
