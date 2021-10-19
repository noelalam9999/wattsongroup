import React, { Component } from 'react';

// Layout
import Header5 from '../layout/header/header5';

// Elements
import ProjectSlider4 from '../elements/project-slider/project-slider-4';

class ProjectsCarousel1 extends Component {
	
	render(){
		return (
			<>
				<Header5 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="content-block" id="content-area">
						
						<div className="section-area bg-gray">
							<ProjectSlider4 />
						
						</div>
						
					</div>
					
				</div>
								
			</>
		);
	}
}

export default ProjectsCarousel1;