import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';

// Images
import PortPic1 from "../../../images/portfolio/portfolio-2/pic1.jpg"
import PortPic2 from "../../../images/portfolio/portfolio-2/pic2.jpg"
import PortPic3 from "../../../images/portfolio/portfolio-2/pic3.jpg"
import PortPic4 from "../../../images/portfolio/portfolio-2/pic4.jpg"

class PortfolioBox2 extends Component{
	render(){
		return(
			<>
				<div className="section-area section-sp3 section-sp31 bg-white">
					<div className="container-fluid">
						<div className="row sp10 portfolio-area">
							<div className="col-lg-6 col-md-12 m-b10">
								<div className="portfolio-box style-2">
									<div className="portfolio-media">
										<img src="https://res.cloudinary.com/dl2tsdbcf/image/upload/v1628587102/1.Coxs_bazar_relway_station_epzy4m.jpg" alt=""/>
									</div>
									<div className="portfolio-info">
										<h4 className="title"><Link to="projects-single-3">Cox's Bazar Railway</Link></h4>
										<span style={{color:"black"}} className="title">Commercial HVAC Sytems</span>	
									</div>
									<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="row sp10">
									<div className="col-lg-6  col-md-12 m-b10">
										<div className="port-info text-black bg-primary">
											<h4>1000+ Projects completed</h4>
											<div>Commercial</div>
											<div>Industrial</div>
											<div>Pharmaceutical</div>
											<div>Hospital</div>
											<div>Hotel/Resort</div>
											<div style={{paddingBottom:'10px'}}>Food and Beverage</div>
											
											

											<Link to="#" className="btn-secondry button-md"> View All Projects</Link>
										</div>
									</div>
									<div className="col-lg-6  col-md-4 m-b10">
										<div className="portfolio-box style-2">
											<div className="portfolio-media">
												<img src={PortPic2} alt=""/>
											</div>
											<div className="portfolio-info">
												<h4 className="title"><Link to="projects-single-3"> Grand Sultan Resort </Link></h4>
												<span style={{color:"black"}} className="title">Hotel Resort Spa HVAC Systems</span>	
											</div>
											<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
										</div>
									</div>
									<div className="col-lg-5 col-md-4 m-b10">
										<div className="portfolio-box style-2">
											<div className="portfolio-media">
												<img src={PortPic3} alt=""/>
											</div>
											<div className="portfolio-info">
												<h4 className="title"><Link to="projects-single-3"> Envoy Group </Link></h4>
												<span style={{color:"black"}} className="title">Industrial HVAC Systems</span>	
											</div>
											<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
										</div>
									</div>
									<div className="col-lg-7 col-md-4 m-b10">
										<div className="portfolio-box style-2">
											<div className="portfolio-media">
												<img src={PortPic4} alt=""/>
											</div>
											<div className="portfolio-info">
												<h4 className="title"><Link to="projects-single-3"> Ruppur Powerplant </Link></h4>
												<span style={{color:"black"}} className="title">PU Sandwich Panel</span>
												<span style={{color:"black"}} className="title"> Clean Room</span>	
											</div>
											<Link to="projects-single-1" className="magnific-anchor">View Details</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		)
	}
}
export default PortfolioBox2;