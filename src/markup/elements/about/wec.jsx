import React, { Component } from 'react';

// Elements
import Count from '../counter/counter-sensor';

// Images
import Sign from "../../../images/sign.png"
import Portimg1 from "../../../images/team/WEC.png"
import Portimg2 from "../../../images/portfolio/wec/cooling-tower(1).jpg"
import Portimg3 from "../../../images/portfolio/wec/wec.jpg"
import Portimg4 from "../../../images/portfolio/wec/cooling-tower(3).jpg"

class About2 extends Component{
	
	render(){
		return(
			<>
				<div className="row align-items-center">
					<div className="col-lg-6 col-md-12 wow fadeIn m-md-b40" data-wow-delay="0.3s">
						<div className="heading-bx">

							<h2 className="title-head m-b0">About WECL</h2>
							<div className="ttr-separator sepimg"></div>
							<p className="head-px2">Wattson Engineering & Consultants Ltd. Is one of the most experienced Organizations who started its operation as a pioneer in the field of HVAC System. </p><p> Wattson have expertise in co-generation system .we have number of renowned clients in the market. We know, we don’t have enough energy resources . So it’s our moral obligation, how to utilize energy properly and how to increase the efficiency of our energy recourses. We know, when we run any Generator, then we can utilize energy only 30 to 35%. and rest of the 65% are totally wastage. It’s a big loss for the organization, because we cannot Utilize the full efficiency from the Generator. To run the Boiler, by any fuel (Gas Fuel or Diesel or Coal or Jhute) is very expensive.</p>
							<p className="head-px2">Commercial/Hospital/Office/Pharmaceuticals/Textile & Spinning industrial: </p>
						</div>
						{/* <!-- start progress bar item --> */}
					
						<div className="skillbar-box">
							<h6 className="title">Central Air Conditioning (HVAC)System.</h6>
							{/* <div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"92%"}}></p>
								<span className="skill-bar-percent">92%</span>
							</div> */}
						</div>
						<div className="skillbar-box">
							<h6 className="title">Chilling & Humidification Plant, Exhaust Gas Boiler & Steam line.</h6>
							{/* <div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"79%"}}></p>
								<span className="skill-bar-percent">79%</span>
							</div> */}
						</div>
						<div className="skillbar-box">
							<h6 className="title">ShuangLiang absorption chiller & Co-generation system.</h6>
							{/* <div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"79%"}}></p>
								<span className="skill-bar-percent">79%</span>
							</div> */}
						</div>
						<div className="skillbar-box">
							<h6 className="title">Compressor, Chiller /FCU & all other accessories.</h6>
							{/* <div className="skillbar appear">
								<p className="skillbar-bar" style={{width:"79%"}}></p>
								<span className="skill-bar-percent">79%</span>
							</div> */}
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
