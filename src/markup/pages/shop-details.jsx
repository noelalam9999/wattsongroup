import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// 
import ProductSlider from "../elements/shop/product-slider"

// Images
import Banner4 from "../../images/banner/banner4.jpg"
import ProductPic1 from "../../images/product/pic1.jpg"
import ProductPic2 from "../../images/product/pic2.jpg"
import ProductPic3 from "../../images/product/pic3.jpg"
import ProductPic4 from "../../images/product/pic4.jpg"
import TestiPic1 from "../../images/testimonials/pic1.jpg"
import TestiPic2 from "../../images/testimonials/pic2.jpg"
import TestiPic3 from "../../images/testimonials/pic3.jpg"

class ShopDetails extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner ovbl-dark parallax" style={{backgroundImage: "url("+Banner4+")"}}>
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-white">Shop Details</h1>
								<div className="breadcrumb-row">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Shop Details</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp1 bg-gray">
							<div className="container">
								<div className="row product-info">
									<div className="col-lg-6 col-md-6 col-sm-12 m-b30 wow fadeInUp" data-wow-delay="0.4s">
										<div className="product-img">
											<div className="product-gallery on-show-slider"> 
												<Tabs>
													<TabPanel>
														<img className="demo" src={ProductPic1} alt=""/>
													</TabPanel>
													<TabPanel>
														<img className="demo" src={ProductPic2} alt=""/>
													</TabPanel>
													<TabPanel>
														<img className="demo" src={ProductPic3} alt=""/>
													</TabPanel>
													<TabPanel>
														<img className="demo" src={ProductPic4} alt=""/>
													</TabPanel>
													<TabList className="nav nav-tabs">
														<Tab>
															<div className="ttr-media">
																<img src={ProductPic1} alt=""/>
															</div>
														</Tab>
														<Tab>
															<div className="ttr-media">
																<img src={ProductPic2} alt=""/>
															</div>
														</Tab>
														<Tab>
															<div className="ttr-media">
																<img src={ProductPic3} alt=""/>
															</div>
														</Tab>
														<Tab>
															<div className="ttr-media">
																<img src={ProductPic4} alt=""/>
															</div>
														</Tab>
													</TabList>
												</Tabs>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="0.8s">
										<div className="product-full-info sticky-top">
											<h4 className="product-title">Crystal Glass Globe Desk Lamp</h4>
											<div className="price">
												<span>$49.00</span>
												<del>$59.00</del>
											</div>
											<div className="product-dec">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</div>
											<div className="ttr-divider bg-gray"></div>
											<div className="product-quantity">
												<h6 className="title">QUANTITY</h6>
												<div className="quantity btn-quantity style-1">
													<input id="quantity" className="form-control" type="number" name="quantity"/>
												</div>
											</div>
											<div className="product-btn">
												<Link to="#" className="btn button-md" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Cart">
													<i className="la la-shopping-cart"></i> Add To Cart
												</Link>
												<Link to="#" className="btn button-md" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add To Wishlist">
													<i className="la la-heart"></i>
												</Link>
											</div>
											<div className="ttr-divider bg-gray"></div>
											<div className="product-meta">
												<div className="posted_in meta-item">
													<h6 className="title">Category:</h6>
													<Link to="#">Design</Link>
												</div>
												<div className="tagged_as meta-item">
													<h6 className="title">Tag:</h6>
													<Link to="#">Standard,</Link>
													<Link to="#">T-shirts</Link>
												</div>
												<div className="tagged_as meta-item">
													<h6 className="title">Rating:</h6>
													<ul className="item-review text-yellow-light">
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star"></i></li>
														<li><i className="fa fa-star-half-o"></i></li>
														<li><i className="fa fa-star-o"></i></li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row wow fadeIn" data-wow-delay="0.4s">
									<div className="col-md-12">
										<div className="ttr-tabs product-description tabs-site-button">
											<Tabs>
												<TabList className="nav nav-tabs">
													<Tab>Description</Tab>
													<Tab>Product Review</Tab>
												</TabList>
												<TabPanel>
													<p className="m-b10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
												</TabPanel>
												<TabPanel>
													<div id="comments">
														<ol className="commentlist">
															<li className="comment">
																<div className="comment_container"> <img className="avatar avatar-60 photo" src={TestiPic1} alt=""/>
																	<div className="comment-text">
																		<div  className="star-rating">
																			<div data-rating='3'> <i className="fa fa-star" data-alt="1" title="regular"></i> <i className="fa fa-star" data-alt="2" title="regular"></i> <i className="fa fa-star-o" data-alt="3" title="regular"></i> <i className="fa fa-star-o" data-alt="4" title="regular"></i> <i className="fa fa-star-o" data-alt="5" title="regular"></i> </div>
																		</div>
																		<p className="meta"> <strong className="author">Cobus Bester</strong> <span>March 7, 2013</span> </p>
																		<div className="description">
																			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
																		</div>
																	</div>
																</div>
															</li>
															<li className="comment">
																<div className="comment_container"> <img className="avatar avatar-60 photo" src={TestiPic2} alt=""/>
																	<div className="comment-text">
																		<div  className="star-rating">
																			<div data-rating='3'> <i className="fa fa-star" data-alt="1" title="regular"></i> <i className="fa fa-star" data-alt="2" title="regular"></i> <i className="fa fa-star" data-alt="3" title="regular"></i> <i className="fa fa-star-o" data-alt="4" title="regular"></i> <i className="fa fa-star-o" data-alt="5" title="regular"></i> </div>
																		</div>
																		<p className="meta"> <strong className="author">Cobus Bester</strong> <span>March 7, 2013</span> </p>
																		<div className="description">
																			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
																		</div>
																	</div>
																</div>
															</li>
															<li className="comment">
																<div className="comment_container"> <img className="avatar avatar-60 photo" src={TestiPic3} alt=""/>
																	<div className="comment-text">
																		<div  className="star-rating">
																			<div data-rating='3'> <i className="fa fa-star" data-alt="1" title="regular"></i> <i className="fa fa-star" data-alt="2" title="regular"></i> <i className="fa fa-star" data-alt="3" title="regular"></i> <i className="fa fa-star" data-alt="4" title="regular"></i> <i className="fa fa-star-o" data-alt="5" title="regular"></i> </div>
																		</div>
																		<p className="meta"> <strong className="author">Cobus Bester</strong> <span>March 7, 2013</span> </p>
																		<div className="description">
																			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
																		</div>
																	</div>
																</div>
															</li>
														</ol>
													</div>
													<div id="review_form_wrapper">
														<div id="review_form">
															<div id="respond" className="comment-respond">
																<h3 className="comment-reply-title" id="reply-title">Add a review</h3>
																<form className="comment-form" method="post" >
																	<div className="comment-form-rating">
																		<label>Your Rating</label>
																		<div className='rating-widget'>
																		{/* <!-- Rating Stars Box --> */}
																		<div className='rating-stars'>
																			<ul id='stars'>
																			  <li className='star' title='Poor' data-value='1'>
																				<i className='fa fa-star fa-fw'></i>
																			  </li>
																			  <li className='star' title='Fair' data-value='2'>
																				<i className='fa fa-star fa-fw'></i>
																			  </li>
																			  <li className='star' title='Good' data-value='3'>
																				<i className='fa fa-star fa-fw'></i>
																			  </li>
																			  <li className='star' title='Excellent' data-value='4'>
																				<i className='fa fa-star fa-fw'></i>
																			  </li>
																			  <li className='star' title='WOW!!!' data-value='5'>
																				<i className='fa fa-star fa-fw'></i>
																			  </li>
																			</ul>
																		  </div>
																		</div>
																	</div>
																	<div className="comment-form-author">
																		<input type="text" aria-required="true" size="30" name="author" id="author" placeholder="Name*"/>
																	</div>
																	<div className="comment-form-email">
																		<input type="text" aria-required="true" size="30" name="email" id="email" placeholder="Email*"/>
																	</div>
																	<div className="comment-form-comment">
																		<textarea aria-required="true" rows="8" cols="45" name="comment" id="comment" placeholder="Your Review"></textarea>
																	</div>
																	<div className="form-submit">
																		<input type="submit" value="Submit" className="site-button" id="submit" name="submit"/>
																	</div>
																</form>
															</div>
														</div>
													</div>
												</TabPanel>
											</Tabs>
										</div>
									</div>
								</div>
								<div className="section-sp4 wow fadeIn" data-wow-delay="0.8s">
									<div className="heading-bx text-center">
										<h3 className="title-head m-b0">Related Products</h3>
										<div className="ttr-separator sepimg"></div>
									</div>
									
									<ProductSlider/>
									
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

export default ShopDetails;