import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Images
import Banner1 from '../../images/banner/banner1.jpg';
import TeamPic1 from '../../images/team/pic1.jpg';
import TeamPic2 from '../../images/team/pic2.jpg';
import TeamPic3 from '../../images/team/pic3.jpg';
import TeamPic4 from '../../images/team/pic4.jpg';
import TeamPic5 from '../../images/team/pic5.jpg';
import TeamPic6 from '../../images/team/pic6.jpg';

class Team extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner1+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Our Team</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Our Team</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 team-page bg-white">
							<div className="container">
								<div className="heading-bx text-center">
									<h6 className="title-ext m-b0">Our Team Member</h6>
									<h2 className="title-head m-b0">Meet Our Awesome <br/>Team Member</h2>
									<div className="ttr-separator sepimg"></div>
								</div>
								<div className="row">
									<div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic4} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Michel H. Bohman</Link></h4>
												<span>CEO & Founder</span>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic1} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Sonar Z. Moyna</Link></h4>
												<span>Programer</span>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic2} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Kalina GH. Mollika</Link></h4>
												<span>Manager</span>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic3} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Falikaz DJ. Pauls</Link></h4>
												<span>Web Designer</span>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic5} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Kalina GH. Mollika</Link></h4>
												<span>Manager</span>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic6} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Falikaz DJ. Pauls</Link></h4>
												<span>Web Designer</span>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
										<div className="team-member m-b20 style-1">
											<div className="team-media">
												<img src={TeamPic5} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Kalina GH. Mollika</Link></h4>
												<span>Manager</span>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-xl-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
										<div className="team-member style-1">
											<div className="team-media">
												<img src={TeamPic6} alt=""/>
												<ul className="team-social">
													<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
													<li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
													<li><Link to="#"><i className="fa fa-linkedin"></i></Link></li>
													<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
												</ul>
											</div>
											<div className="team-info">
												<h4 className="title"><Link to="#">Falikaz DJ. Pauls</Link></h4>
												<span>Web Designer</span>
											</div>
										</div>
									</div>
								</div>
								<div className="text-center section-sp4">
									<h3 className="title-head m-b20">Start working together?</h3>
									<Link to="#" className="btn button-md">Find out more</Link>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default Team;