import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Images
import MasonryPic1 from "../../images/blog/masonry/pic1.jpg"
import MasonryPic2 from "../../images/blog/masonry/pic2.jpg"
import MasonryPic3 from "../../images/blog/masonry/pic3.jpg"
import MasonryPic4 from "../../images/blog/masonry/pic4.jpg"
import MasonryPic5 from "../../images/blog/masonry/pic5.jpg"
import MasonryPic6 from "../../images/blog/masonry/pic6.jpg"

// Portfolio Content
const content = [
	{
		thumb: MasonryPic1,
        title: "The Cheapest Way To Earn Your Free Ticket To.",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postDate: "February 14 2020",
    },
	{
		thumb: MasonryPic2,
        title: "The Cheapest Way To Earn Your Free Ticket To.",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postDate: "February 14 2020",
    },
	{
		thumb: MasonryPic3,
        title: "The Cheapest Way To Earn Your Free Ticket To.",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postDate: "February 14 2020",
	},
	{
		thumb: MasonryPic4,
        title: "The Cheapest Way To Earn Your Free Ticket To.",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postDate: "February 14 2020",
	},
	{
		thumb: MasonryPic5,
        title: "The Cheapest Way To Earn Your Free Ticket To.",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postDate: "April 14 2020",
	},
	{
		thumb: MasonryPic6,
        title: "The Cheapest Way To Earn Your Free Ticket To.",
		text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
		postDate: "February 14 2020",
	},
]

class BlogMasonry extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">Blog Masonry</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Blog Masonry</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white">
							<div className="container">
								<Masonry className="row">
									{content.map((item, id) => (
										<div className="action-card col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.2s">
											<div className="recent-news">
												<div className="action-box">
													<img src={item.thumb} alt=""/>
												</div>
												<div className="info-bx">
													<ul className="media-post">
														<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i>{item.postDate}</Link></li>
													</ul>
													<h4 className="post-title"><Link to="blog-details-sidebar">{item.title}</Link></h4>
													<p>{item.text}</p>
													<div className="post-extra">
														<Link to="blog-details-sidebar" className="btn-link black radius-xl">READ MORE</Link>
													</div>
												</div>
											</div>
										</div>
									))}
								</Masonry>
								<div className="text-center">
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
							</div>
						</div>		
						
					</div>
					
				</div>
				
				<Footer1 />
				
			</>
		);
	}
}

export default BlogMasonry;