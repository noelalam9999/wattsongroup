import React, { Component } from 'react';
import Slider from "react-slick";

// Images
import Image1 from "../../../images/slider/slide9.jpg"
import Image2 from "../../../images/slider/slide6.jpg"

class Slider2 extends Component{
	
	render(){
		
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};
		
		return(
			<>
				
				<Slider {...settings} className="tt-slider slider-sp0 slider-two">
					<div className="slider-item">
						<div className="slider-thumb ovbl-middle">
							<img src={Image1} alt=""/>
						</div>
						<div className="slider-content text-center text-white">
							<div className="container">
								<div className="content-inner">
									<h6 className="sub-title"><div style={{color:'green!important'}}>Wattson</div><span> Group</span></h6>
									<h2 className="title">Saves Energy<br/>Increases Longevity</h2>
									<a className="btn primary" href="/contact-1">< span className="text-black">View Projects</span></a>
								</div>
							</div>
						</div>
					</div>			
								
				</Slider>
				
			</>
		);
	}
}

export default Slider2;