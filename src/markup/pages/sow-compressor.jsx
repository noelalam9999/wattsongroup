import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header2';
import Footer1 from '../layout/footer/footer1';

// Elements
import Masonry from "../elements/portfolio/compressor";
import ProjectSlider1 from '../elements/project-slider/project-slider-1';

// Images
import Banner1 from "../../images/banner/banner1.jpg"

class ProjectsMasonryGrid2 extends Component {
	
	render(){
		
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Compressor</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Compressor</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 bg-white">
							<div className="container">
								<Masonry />
							</div>
						</div>
						
						{/* <div className="section-area section-sp2 bg-gray">
							<div className="container wow fadeIn" data-wow-delay="0.8s">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Projects View</h6>
									<h2 className="title-head m-b0">Our Latest Projects</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<ProjectSlider1 />
							</div>
						</div>						
						 */}
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default ProjectsMasonryGrid2;