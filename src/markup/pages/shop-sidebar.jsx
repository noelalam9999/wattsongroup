import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import Sidebar from '../elements/shop/shop-sidebar';

// Images
import Banner4 from "../../images/banner/banner4.jpg"
import ProductPic1 from "../../images/product/pic1.jpg"
import ProductPic2 from "../../images/product/pic2.jpg"
import ProductPic3 from "../../images/product/pic3.jpg"
import ProductPic4 from "../../images/product/pic4.jpg"
import ProductPic5 from "../../images/product/pic5.jpg"
import ProductPic6 from "../../images/product/pic6.jpg"
import ProductPic7 from "../../images/product/pic7.jpg"
import ProductPic8 from "../../images/product/pic8.jpg"
import ProductPic9 from "../../images/product/pic9.jpg"

class ShopSidebar extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url(" + Banner4 + ")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Shop Sidebar</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Shop Sidebar</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-gray">
							<div className="container">
								<div className="row">
									<div className="col-lg-12 col-md-12 col-sm-12 filter-bar">
										<div className="filter-mobile">
											<div className="filter-bx">
												<select className="bs-select-hidden">
													<option>Sort By</option>
													<option>Popular</option>
													<option>Low to High</option>
													<option>High to Low</option>
												</select>
											</div>
											<div className="filter-bx">
												<Link to="#" className="filter-btn black btn btn-block"><i className="fa fa-filter"></i> Fillter</Link>
											</div>
										</div>
									</div>
									<div className="col-lg-9 col-md-12 col-sm-12 m-md-b50">
										<div className="row">
											<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
												<div className="item-box">
													<div className="item-media">
														<img src={ProductPic1} alt=""/>
														<ul className="">
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
														</ul>
													</div>
													<div className="item-info">
														<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
														<div className="price">
															<span>$49.00</span>
															<del>$59.00</del>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
												<div className="item-box">
													<div className="item-media">
														<img src={ProductPic2} alt=""/>
														<ul className="">
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
														</ul>
													</div>
													<div className="item-info">
														<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
														<div className="price">
															<span>$49.00</span>
															<del>$59.00</del>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
												<div className="item-box">
													<div className="item-media">
														<img src={ProductPic3} alt=""/>
														<ul className="">
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
														</ul>
													</div>
													<div className="item-info">
														<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
														<div className="price">
															<span>$49.00</span>
															<del>$59.00</del>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
												<div className="item-box">
													<div className="item-media">
														<img src={ProductPic4} alt=""/>
														<ul className="">
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
														</ul>
													</div>
													<div className="item-info">
														<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
														<div className="price">
															<span>$49.00</span>
															<del>$59.00</del>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
												<div className="item-box">
													<div className="item-media">
														<img src={ProductPic5} alt=""/>
														<ul className="">
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
														</ul>
													</div>
													<div className="item-info">
														<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
														<div className="price">
															<span>$49.00</span>
															<del>$59.00</del>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.4s">
												<div className="item-box">
													<div className="item-media">
														<img src={ProductPic6} alt=""/>
														<ul className="">
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
														</ul>
													</div>
													<div className="item-info">
														<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
														<div className="price">
															<span>$49.00</span>
															<del>$59.00</del>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.6s">
												<div className="item-box">
													<div className="item-media">
														<img src={ProductPic7} alt=""/>
														<ul className="">
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
														</ul>
													</div>
													<div className="item-info">
														<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
														<div className="price">
															<span>$49.00</span>
															<del>$59.00</del>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.8s">
												<div className="item-box">
													<div className="item-media">
														<img src={ProductPic8} alt=""/>
														<ul className="">
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
														</ul>
													</div>
													<div className="item-info">
														<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
														<div className="price">
															<span>$49.00</span>
															<del>$59.00</del>
														</div>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay="0.2s">
												<div className="item-box">
													<div className="item-media">
														<img src={ProductPic9} alt=""/>
														<ul className="">
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Cart"><i className="fa fa-shopping-bag"></i></Link></li>
															<li><Link to="#" data-toggle="tooltip" data-placement="top" title="Add To Wishlist"><i className="fa fa-heart"></i></Link></li>
														</ul>
													</div>
													<div className="item-info">
														<h6 className="title"><Link to="shop-details">Bottle with Leather Grip</Link></h6>
														<div className="price">
															<span>$49.00</span>
															<del>$59.00</del>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="pagination-bx rounded-sm text-center clearfix page-shadow">
											<ul className="pagination">
												<li className="previous"><Link to="#">Prev</Link></li>
												<li className="active"><Link to="#">1</Link></li>
												<li><Link to="#">2</Link></li>
												<li><Link to="#">3</Link></li>
												<li className="next"><Link to="#">Next</Link></li>
											</ul>
										</div>
									</div>
									<div className="col-lg-3 col-md-12 col-sm-12 wow fadeInUp sticky-top filter-bar" data-wow-delay="0.4s">
										<Sidebar />
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

export default ShopSidebar;