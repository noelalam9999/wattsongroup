import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import ProjectSlider6 from '../elements/project-slider/project-slider-6';

// Images
import Banner1 from "../../images/banner/banner1.jpg"

class ProjectsCarousel4 extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Projects Carousel 4</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Projects Carousel 4</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white">
							<div className="container-fluid wow fadeIn" data-wow-delay="0.4s">
								<ProjectSlider6 />
							</div>
						</div>
					
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default ProjectsCarousel4;