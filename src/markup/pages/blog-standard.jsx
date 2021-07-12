import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import BlogSidebar from '../elements/blog/blog-sidebar';

// Images
import DefaultPic1 from "../../images/blog/default/pic1.jpg"
import DefaultPic2 from "../../images/blog/default/pic1.jpg"
import DefaultPic3 from "../../images/blog/default/pic1.jpg"
import DefaultPic4 from "../../images/blog/default/pic1.jpg"

class BlogStandard extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">Blog Standard</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Blog Standard</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white">
							<div className="container">
								<div className="row">
									<div className="col-md-12 col-lg-8 col-xl-8 m-md-b50">
										<div className="recent-news wow fadeInUp" data-wow-delay="0.2s">
											<div className="action-box">
												<img src={DefaultPic1} alt=""/>
											</div>
											<div className="info-bx">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free Ticket To.</Link></h4>
												<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
												<div className="post-extra">
													<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="recent-news wow fadeInUp" data-wow-delay="0.4s">
											<div className="action-box">
												<img src={DefaultPic2} alt=""/>
											</div>
											<div className="info-bx">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free Ticket To.</Link></h4>
												<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
												<div className="post-extra">
													<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="recent-news wow fadeInUp" data-wow-delay="0.6s">
											<div className="action-box">
												<img src={DefaultPic3} alt=""/>
											</div>
											<div className="info-bx">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free Ticket To.</Link></h4>
												<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
												<div className="post-extra">
													<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="recent-news wow fadeInUp" data-wow-delay="0.8s">
											<div className="action-box">
												<img src={DefaultPic4} alt=""/>
											</div>
											<div className="info-bx">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">The Cheapest Way To Earn Your Free Ticket To.</Link></h4>
												<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.</p>
												<div className="post-extra">
													<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="pagination-bx gray clearfix">
											<ul className="pagination">
												<li className="previous"><Link to="#"><i className="ti-arrow-left"></i> Prev</Link></li>
												<li className="active"><Link to="#">1</Link></li>
												<li><Link to="#">2</Link></li>
												<li><Link to="#">3</Link></li>
												<li className="next"><Link to="#">Next <i className="ti-arrow-right"></i></Link></li>
											</ul>
										</div>
									</div>
									<div className="col-md-12 col-lg-4 col-xl-4  sticky-top wow fadeInUp" data-wow-delay="0.4s">
										<BlogSidebar />
									</div>
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

export default BlogStandard;