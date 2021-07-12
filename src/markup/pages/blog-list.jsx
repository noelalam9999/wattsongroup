import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import BlogSidebar from '../elements/blog/blog-sidebar';

// Images
import GridPic1 from "../../images/blog/grid/pic1.jpg"
import GridPic2 from "../../images/blog/grid/pic2.jpg"
import GridPic3 from "../../images/blog/grid/pic3.jpg"
import GridPic4 from "../../images/blog/grid/pic4.jpg"
import GridPic5 from "../../images/blog/grid/pic5.jpg"
import GridPic6 from "../../images/blog/grid/pic6.jpg"

class BlogList extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">Blog List Sidebar</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Blog List Sidebar</li>
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
										<div className="blog-post blog-md clearfix wow fadeInUp" data-wow-delay="0.2s">
											<div className="ttr-post-media"> 
												<Link to="#"><img src={GridPic1} alt=""/></Link> 
											</div>
											<div className="ttr-post-info">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">This Story Behind Education Will Haunt You Forever.</Link></h4>
												<p>Knowing that, you’ve optimised your pages countless amount of times, written tons.</p>
												<div className="post-extra">
													<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="blog-post blog-md clearfix wow fadeInUp" data-wow-delay="0.4s">
											<div className="ttr-post-media"> 
												<Link to="#"><img src={GridPic4} alt=""/></Link> 
											</div>
											<div className="ttr-post-info">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">This Story Behind Education Will Haunt You Forever.</Link></h4>
												<p>Knowing that, you’ve optimised your pages countless amount of times, written tons.</p>
												<div className="post-extra">
													<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="blog-post blog-md clearfix wow fadeInUp" data-wow-delay="0.6s">
											<div className="ttr-post-media"> 
												<Link to="#"><img src={GridPic3} alt=""/></Link> 
											</div>
											<div className="ttr-post-info">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">This Story Behind Education Will Haunt You Forever.</Link></h4>
												<p>Knowing that, you’ve optimised your pages countless amount of times, written tons.</p>
												<div className="post-extra">
													<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="blog-post blog-md clearfix wow fadeInUp" data-wow-delay="0.8s">
											<div className="ttr-post-media"> 
												<Link to="#"><img src={GridPic2} alt=""/></Link> 
											</div>
											<div className="ttr-post-info">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">This Story Behind Education Will Haunt You Forever.</Link></h4>
												<p>Knowing that, you’ve optimised your pages countless amount of times, written tons.</p>
												<div className="post-extra">
													<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="blog-post blog-md clearfix wow fadeInUp" data-wow-delay="0.2s">
											<div className="ttr-post-media"> 
												<Link to="#"><img src={GridPic5} alt=""/></Link> 
											</div>
											<div className="ttr-post-info">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">This Story Behind Education Will Haunt You Forever.</Link></h4>
												<p>Knowing that, you’ve optimised your pages countless amount of times, written tons.</p>
												<div className="post-extra">
													<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
												</div>
											</div>
										</div>
										<div className="blog-post blog-md clearfix wow fadeInUp" data-wow-delay="0.4s">
											<div className="ttr-post-media"> 
												<Link to="#"><img src={GridPic6} alt=""/></Link> 
											</div>
											<div className="ttr-post-info">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>February 14 2020</Link></li>
												</ul>
												<h4 className="post-title"><Link to="blog-details-sidebar">This Story Behind Education Will Haunt You Forever.</Link></h4>
												<p>Knowing that, you’ve optimised your pages countless amount of times, written tons.</p>
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
									<div className="col-md-12 col-lg-4 col-xl-4 sticky-top wow fadeInUp" data-wow-delay="0.4s">
										<BlogSidebar/>
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

export default BlogList;