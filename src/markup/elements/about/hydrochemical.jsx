import React, { Component } from 'react';

// Elements
import Count from '../counter/counter-sensor';

// Images
import Sign from "../../../images/sign.png"
import Portimg1 from "../../../images/team/Hydro-Chemical-Bangladesh.png"
import Portimg2 from "../../../images/portfolio/hydrochemical-concerns/chemistry-glassware-56a12a083df78cf772680235.jpg"
import Portimg4 from "../../../images/portfolio/hydrochemical-concerns/scale_chiller_tubes_resized_0.jpg"
import Portimg3 from "../../../images/portfolio/hydrochemical-concerns/Cooling-Tower-Fill-Before-After-RYDLYME-scaled.jpg"
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
							<p className="head-px2">Hydro Chemical Bangladesh (HCB) is one of the leading specialty chemicals for water treatment in Bangladesh. HCB has full service in Commercial central air conditioning projects, Industrial projects like as Power plant, Textiles, Weaving, Denims, Spinning, Chemical plant and chemical Process Water Treatment Company.

</p>
<p className="head-px2">We are ready to provide you with the best water treatment chemical and equipment at the competi-tive price. Price is nothing to us, we care relationship with our clients</p>
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
