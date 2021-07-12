import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Layout
import Header1 from '../layout/header/header1';
import Footer1 from '../layout/footer/footer1';

// Elements
import BlogSidebar from '../elements/blog/blog-sidebar';

// Images
import DefaultPic1 from "../../images/blog/default/pic1.jpg"
import GalleryPic2 from "../../images/gallery/pic2.jpg"
import GalleryPic5 from "../../images/gallery/pic5.jpg"
import TestimonialsPic1 from "../../images/testimonials/pic1.jpg"
import TestimonialsPic2 from "../../images/testimonials/pic2.jpg"
import TestimonialsPic3 from "../../images/testimonials/pic3.jpg"

class BlogDetailsSidebar extends Component {
	
	render(){
		return (
			<>
				<Header1 />
				
				{/* <!-- Content --> */}
				<div className="page-content bg-white">
					
					<div className="page-banner page-banner-sm">
						<div className="container">
							<div className="page-banner-entry">
								<h1 className="text-black">Blog Details</h1>
								<div className="breadcrumb-row text-black">
									<ul className="list-inline">
										<li><Link to="/"><i className="fa fa-home"></i> Home</Link></li>
										<li>Blog Details</li>
									</ul>
								</div>
							 </div>
						</div>
					</div>
					
					<div className="content-block" id="content-area">
						
						<div className="section-area section-sp2 bg-white">
							<div className="container">
								<div className="row">
									<div className="col-md-12 col-lg-8 col-xl-8 m-md-b50 wow fadeInUp" data-wow-delay="0.2s">
										{/* <!-- blog start --> */}
										<div className="blog-lg blog-single">
											<div className="action-box blog-lg">
												<img src={DefaultPic1} alt=""/>
											</div>
											<div className="info-bx">
												<ul className="media-post">
													<li className="date"><Link to="#"><i className="fa fa-calendar-o"></i> February 14 2020</Link></li>
												</ul>
												<div className="ttr-post-title">
													<h4 className="post-title">Why every startup should adopt Amazon’s Hot Air. Why every startup should adopt.</h4>
												</div>
												<div className="ttr-post-text">
													<p>It is used every day in all types of businesses; Email newsletters, websites, print and online advertisements, presentations, social media updates, flyers, and brochures; the list goes on and on</p>
													<blockquote className="wp-block-quote">
														<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu mauris eget velit blandit pulvinar. </p>
													</blockquote>
													<p>David Ogilvy, the advertising legend once said that, On average, five times as many people read the headline as read the body copy. When you have written your headline, you have spent eighty cents out of your dollar." As Ogilvy points out, your headline is the first (and sometimes the only) thing that your audience will read.</p>
													<ul className="wp-block-gallery columns-6 is-cropped">
														<li className="blocks-gallery-item"><img alt="" src={GalleryPic2}/></li>
														<li className="blocks-gallery-item"><img alt="" src={GalleryPic5}/></li>
													</ul>
													<ul>
														<li>Praesent nunc libero, hendrerit quis nisl tempor, pharetra bibendum nisl. </li>
														<li>Duis tincidunt semper enim ac volutpat. Quisque porta nulla vel tristique convallis. </li>
														<li>Nulla lacus consequat velit, sed consectetur lacus ligula uttempus tortor orci.</li>
														<li>Donec tristique, velit sed dignissim vehicula, massa augue eu dictum libero risus.</li>
													</ul>
													<p>You just need to enter the keyword and select the keyword type to generate a list of 6 title ideas and suggestions. If you’re not satisfied with the results, you can always hit the refresh button to generate a new list of unique titles.</p>
													<p>Once you’ve gotten all the titles and have chosen the best one, the next thing you need to do is to craft a magnetic content. Great content marketers excel at creating content that their readers crave, but even the best struggle with delivering content to the right person at the right time.</p>
												</div>
												<div className="ttr-divider bg-gray"><i className="icon-dot c-square"></i></div>
												<div className="ttr-post-meta d-flex">
													<div className="post-tags"> 
														<Link to="#">Creative</Link> 
														<Link to="#">Media</Link> 
														<Link to="#">Fashion</Link> 
														<Link to="#">Photography</Link> 
													</div>
													<div className="share-post ml-auto">
														<ul className="social">
															<li>Share:</li>
															<li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
															<li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
															<li><Link to="#"><i className="fa fa-pinterest"></i></Link></li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<div className="author-box blog-user m-b60">
											<div className="author-profile-info">
												<div className="author-profile-pic">
													<img src={TestimonialsPic2} alt=""/>
												</div>
												<div className="author-profile-content">
													<h6>Sonar Z. Moyna</h6>
													<p>Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
													<ul className="list-inline m-b0">
														<li><Link to="#" className="btn-link"><i className="fa fa-facebook"></i></Link></li>
														<li><Link to="#" className="btn-link"><i className="fa fa-google-plus"></i></Link></li>
														<li><Link to="#" className="btn-link"><i className="fa fa-instagram"></i></Link></li>
														<li><Link to="#" className="btn-link"><i className="fa fa-twitter"></i></Link></li>
													</ul>
												</div>
											</div>
										</div>
										<div className="clear" id="comment-list">
											<div className="comments-area" id="comments">
												<h2 className="comments-title">8 Comments</h2>
												<div className="clearfix">
													{/* <!-- comment list END --> */}
													<ol className="comment-list">
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic1} alt=""/> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
																<div className="comment-meta"> <Link to="#">December 02, 2019 at 10:45 am</Link> </div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neqnsectetur adipiscing elit. Nam viae neqnsectetur adipiscing elit.
																	Nam vitae neque vitae sapien malesuada aliquet. </p>
																<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
															</div>
															<ol className="children">
																<li className="comment odd parent">
																	<div className="comment-body">
																		<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic2} alt=""/> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
																		<div className="comment-meta"> <Link to="#">December 02, 2019 at 10:45 am</Link> </div>
																		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
																			In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
																			ac elementum ligula blandit ac.</p>
																		<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
																	</div>
																	<ol className="children">
																		<li className="comment odd parent">
																			<div className="comment-body">
																				<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic3} alt=""/> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
																				<div className="comment-meta"> <Link to="#">December 02, 2019 at 10:45 am</Link> </div>
																				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
																					In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
																					ac elementum ligula blandit ac.</p>
																				<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
																			</div>
																		</li>
																	</ol>
																	{/* <!-- list END --> */}
																</li>
															</ol>
															{/* <!-- list END --> */}
														</li>
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic1} alt=""/> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
																<div className="comment-meta"> <Link to="#">December 02, 2019 at 10:45 am</Link> </div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
																	In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
																	ac elementum ligula blandit ac.</p>
																<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
															</div>
														</li>
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic2} alt=""/> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
																<div className="comment-meta"> <Link to="#">December 02, 2019 at 10:45 am</Link> </div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
																	In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
																	ac elementum ligula blandit ac.</p>
																<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
															</div>
														</li>
														<li className="comment">
															<div className="comment-body">
																<div className="comment-author vcard"> <img  className="avatar photo" src={TestimonialsPic3} alt=""/> <cite className="fn">John Doe</cite> <span className="says">says:</span> </div>
																<div className="comment-meta"> <Link to="#">December 02, 2019 at 10:45 am</Link> </div>
																<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae neque vitae sapien malesuada aliquet. 
																	In viverra dictum justo in vehicula. Fusce et massa eu ante ornare molestie. Sed vestibulum sem felis, 
																	ac elementum ligula blandit ac.</p>
																<div className="reply"> <Link to="#" className="comment-reply-link">Reply</Link> </div>
															</div>
														</li>
													</ol>
													{/* <!-- comment list END --> */}
													{/* <!-- Form --> */}
													<div className="comment-respond" id="respond">
														<h4 className="comment-reply-title" id="reply-title">Leave a Reply <small> <Link style={{display: "none"}} to="#" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link> </small> </h4>
														<form className="comment-form" id="commentform" method="post">
															<p className="comment-form-author">
																<label htmlFor="author">Name <span className="required">*</span></label>
																<input type="text" defaultValue="" name="Author"  placeholder="Author" id="author"/>
															</p>
															<p className="comment-form-email">
																<label htmlFor="email">Email <span className="required">*</span></label>
																<input type="text" defaultValue="" placeholder="Email" name="email" id="email"/>
															</p>
															<p className="comment-form-url">
																<label htmlFor="url">Website</label>
																<input type="text"  defaultValue=""  placeholder="Website"  name="url" id="url"/>
															</p>
															<p className="comment-form-comment">
																<label htmlFor="comment">Comment</label>
																<textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
															</p>
															<p className="form-submit">
																<input type="submit" defaultValue="Submit Comment" className="submit" id="submit" name="submit"/>
															</p>
														</form>
													</div>
													{/* <!-- Form --> */}
												</div>
											</div>
										</div>
										{/* <!-- blog END --> */}
									</div>
									<div className="col-md-12 col-lg-4 col-xl-4 sticky-top wow fadeInUp" data-wow-delay="0.4s">
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

export default BlogDetailsSidebar;