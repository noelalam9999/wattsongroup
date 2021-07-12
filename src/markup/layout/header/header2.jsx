import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

// Images
import Logo1 from "../../../images/logo-white.png"
import Logo from "../../../images/logo.png"
import ProductImg1 from "../../../images/product/pic1.jpg"
import ProductImg2 from "../../../images/product/pic2.jpg"
import IconImg1 from "../../../images/icon/contact/icon1.png"
import IconImg2 from "../../../images/icon/contact/icon2.png"
import IconImg3 from "../../../images/icon/contact/icon3.png"

class Header2 extends Component{
	
	componentDidMount() {
		
		// Cart Dropdown 
		var cartBtn = document.getElementById("cartBtn")
        var cartDropdown = document.querySelector(".cart-dropdown")
		
        cartBtn.addEventListener('click',function(){
            cartDropdown.classList.toggle("show")
		})
		
		// Search Form Popup
		var searchBtn = document.getElementById("quik-search-btn")
        var searchForm = document.querySelector(".nav-search-bar")
        var closeBtn = document.getElementById("search-remove")
		
        searchBtn.addEventListener('click',function(){
            searchForm.classList.add("show")
        })

        closeBtn.addEventListener('click',function(){
            searchForm.classList.remove("show")
        })

        // Mobile Menu sidebar function
        var btn = document.querySelector('.menuicon');
        var nav = document.querySelector('.menu-links');
       
        function toggleFunc() {
            btn.classList.toggle("open");
            nav.classList.toggle("show");
        }

        btn.addEventListener('click', toggleFunc);

        // Mobile Submenu open close function
        var navMenu = [].slice.call(document.querySelectorAll('.menu-links > ul > li'));
        for (var y = 0; y < navMenu.length; y++) {
            navMenu[y].addEventListener('click', function () { menuClick(this) });
        }

        function menuClick(current) {
            const active = current.classList.contains("open")
            navMenu.forEach(el => el.classList.remove('open'));
            
            if(active){
                current.classList.remove('open') 
                console.log("active")
            } else{
                current.classList.add('open');
                console.log("close")
            }
        }
		
    }
	
	render(){
		return(
			<>
				{/* <!-- Header Top ==== --> */}
				<header className="header rs-nav header-transparent">
					<div className="top-bar">
						<div className="container">
							<div className="row d-flex justify-content-between">
								<div className="topbar-left">
									<ul>
										<li><Link to="#"><i className="la la-phone"></i>Call Us +8802-9145805, 8157757</Link></li>
										<li><Link to="#"><i className="la la-clock"></i>Mon to Fri - 9:00am - 6:00pm</Link></li>
										<li><Link to="#"><i className="las la-envelope-open"></i>Support@website.com</Link></li>
									</ul>
								</div>
								<div className="topbar-right">
									<ul>
										<li><Link to="company-history">History</Link></li>
										<li><Link to="blog-standard">News</Link></li>
										<li><Link to="contact-1">Contact Us</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<Sticky enabled={true} className="sticky-header navbar-expand-lg">
						<div className="menu-bar clearfix">
							<div className="container clearfix">
								{/* <!-- Header Logo ==== --> */}
								<div className="menu-logo">
									<Link to="/"><img  src={Logo} alt=""/></Link>
								</div>
								{/* <!-- Mobile Nav Button ==== --> */}
								<button className="navbar-toggler collapsed menuicon justify-content-end" type="button" data-toggle="collapse" data-target="#menuDropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button>
								{/* <!-- Author Nav ==== --> */}
								<div className="secondary-menu">
									<div className="secondary-inner">
										<ul>
											<li className="search-btn">
												<button id="quik-search-btn" type="button" className="btn-link"></button>
											</li>
											<li>
												<Link to="#" className="" id="cartBtn">
											
												</Link>
												<ul className="dropdown-menu cart-dropdown cart-list">
													<li className="cart-item">
														<div className="media"> 
															<div className="media-left"> 
																<Link to="#"> 
																	<img alt="" className="media-object" src={ProductImg1}/> 
																</Link> 
															</div> 
															<div className="media-body"> 
																<h6 className="title"><Link to="" className="media-heading"></Link></h6>
																<span className="price"></span>
																<span className="item-close">&times;</span>
															</div> 
														</div>
													</li>
													<li className="cart-item">
														<div className="media"> 
															<div className="media-left"> 
																<Link to="#"> 
																	<img alt="" className="media-object" src={ProductImg2}/> 
																</Link> 
															</div> 
															<div className="media-body"> 
																<h6 className="title"><Link to="#" className="media-heading"></Link></h6>
																<span className="price"></span>
																<span className="item-close">&times;</span>
															</div> 
														</div>
													</li>
													<li className="cart-item subtotal">
														<h6 className="title m-a0"><span></span></h6>
													</li>
													<li className="d-flex">
														<button className="btn button-md flex-fill m-r5"></button>
														<button className="btn-secondry button-md flex-fill m-l5"></button>
													</li>
												</ul>
											</li>
											<li className="d-none d-sm-block">
												<Link to="get-in-touch" className="btn">Get In Touch</Link>
											</li>
										</ul>
									</div>
								</div>
								{/* <!-- Navigation Menu ==== --> */}
								<div className="menu-links navbar-collapse collapse justify-content-end" id="menuDropdown">
									<div className="menu-logo">
										<Link to="/"><img src={Logo1} alt=""/></Link>
									</div>
									<ul className="nav navbar-nav">	
										<li className="active"><Link to="#">Home</Link>
										
										</li>
										<li className=""><Link to="#">Scope of Work<i className="fa fa-chevron-down"></i></Link>
										<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="solution-agricultural-engineering"><span>HVAC System</span> </Link></li>
														<li><Link to="solution-chemical-research-engineering"><span>Co-generation</span></Link></li>
														<li><Link to="solution-material-science-and-engineering"><span>Steam Boiler</span></Link></li>
														<li><Link to="solution-mechanical-engineering"><span>(De)Humidification</span></Link></li>
														<li><Link to="solution-oil-and-gas"><span>Sandwich panel</span></Link></li>
														<li><Link to="solution-power-and-energy"><span>Duct Manufacturing, Supply and Installation</span></Link></li>
														<li><Link to="solution-power-and-energy"><span>Hydrochemical</span></Link></li>
														
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="#">Products<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="solution-agricultural-engineering"><span>Agricultural Engineering</span> </Link></li>
														<li><Link to="solution-chemical-research-engineering"><span>Chemical Research Engineering</span></Link></li>
														<li><Link to="solution-material-science-and-engineering"><span>Material Science and Engineering</span></Link></li>
														<li><Link to="solution-mechanical-engineering"><span>Mechanical Engineering</span></Link></li>
														<li><Link to="solution-oil-and-gas"><span>Oil and Gas</span></Link></li>
														<li><Link to="solution-power-and-energy"><span>Power and Energy</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="has-mega-menu "><Link to="#">Projects <i className="fa fa-chevron-down"></i></Link>
											<ul className="mega-menu">
												<li><Link to="#">Projects Grid</Link>
													<ul>
														<li><Link to="projects-grid-2"><span>Projects Grid 2</span></Link></li>
														<li><Link to="projects-grid-3"><span>Projects Grid 3</span></Link></li>
														<li><Link to="projects-grid-4"><span>Projects Grid 4</span></Link></li>
														<li><Link to="projects-grid-wide"><span>Projects Grid Wide</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Projects Masonry</Link>
													<ul>
														<li><Link to="projects-masonry-grid-2"><span>Masonry Grid 2</span></Link></li>
														<li><Link to="projects-masonry-grid-3"><span>Masonry Grid 3</span></Link></li>
														<li><Link to="projects-masonry-grid-4"><span>Masonry Grid 4</span></Link></li>
														<li><Link to="projects-masonry-grid-wide"><span>Masonry Grid Wide</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Projects Style</Link>
													<ul>
														<li><Link to="projects-carousel-1"><span>Projects Carousel 1</span></Link></li>
														<li><Link to="projects-carousel-2"><span>Projects Carousel 2</span></Link></li>
														<li><Link to="projects-carousel-3"><span>Projects Carousel 3</span></Link></li>
														<li><Link to="projects-carousel-4"><span>Projects Carousel 4</span></Link></li>
													</ul>
												</li>
												<li><Link to="#">Projects Single</Link>
													<ul>
														<li><Link to="projects-single-1"><span>Projects Single 1</span></Link></li>
														<li><Link to="projects-single-2"><span>Projects Single 2</span></Link></li>
														<li><Link to="projects-single-3"><span>Projects Single 3</span></Link></li>
														<li><Link to="projects-single-4"><span>Projects Single 4</span></Link></li>
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="#">Concerns<i className="fa fa-chevron-down"></i></Link>
											<ul className="sub-menu">
												<li className="add-menu-left">
													<ul>
														<li><Link to="shop"><span>Wattson Engineering and Consultants Ltd</span> </Link></li>
														<li><Link to="shop-sidebar"><span>Wattson Euro Panel Industries Ltd</span></Link></li>
														<li><Link to="shop-cart"><span>Hydro Chemical Bangladesh</span></Link></li>
														<li><Link to="shop-checkout"><span>Wattson Fire figting equipments and Safety Co</span></Link></li>
														<li><Link to="shop-details"><span>Wattson Air-conditioning Ltd</span></Link></li>
														<li><Link to="shop-details"><span>Wattson Automobiles Ltd</span></Link></li>
														<li><Link to="shop-details"><span>Nabiha Textile Mills Ltd</span></Link></li>
														<li><Link to="shop-details"><span>Z-power Technology</span></Link></li>
														<li><Link to="shop-details"><span>Simi Ad Com</span></Link></li>
									
													</ul>
												</li>
											</ul>
										</li>
										<li><Link to="#">Gallery </Link>
										
										</li>
										<li><Link to="#">About Us</Link>
										
										</li>
									</ul>
									<div className="nav-social-link">
										<Link to="#"><i className="fa fa-facebook"></i></Link>
										<Link to="#"><i className="fa fa-google-plus"></i></Link>
										<Link to="#"><i className="fa fa-linkedin"></i></Link>
									</div>
								</div>
								{/* <!-- Navigation Menu END ==== --> */}
							</div>
						</div>
					</Sticky>
					{/* <!-- Search Box ==== --> */}
					<div className="nav-search-bar">
						<form action="#">
							<input name="search" type="text" className="form-control" placeholder="Type to search"/>
							<span><i className="ti-search"></i></span>
						</form>
						<span id="search-remove"><i className="ti-close"></i></span>
					</div>
				</header>
				{/* <!-- Header Top END ==== --> */}
				<div className="contact-sidebar content-scroll">
					<div className="inner">
						<div className="logo">
							<img src={Logo} alt=""/>
						</div>
						<h4 className="title">Contact Us For Any Informations</h4>
						<ul className="contact-infolist">
							<li>
								<img src={IconImg1} alt=""/>
								<h6 className="contact-title">Contact Number</h6>
								<p>+001 123 456 790 <br/>(02)  3424 44 00</p>
							</li>
							<li>
								<img src={IconImg2} alt=""/>
								<h6 className="contact-title">Email Address</h6>
								<Link to="#">info@yourdomain.com</Link>
								<Link to="#">example@support.com</Link>
							</li>
							<li>
								<img src={IconImg3} alt=""/>
								<h6 className="contact-title">Address</h6>
								<p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
							</li>
						</ul>
						<h4 className="title">Get In Touch</h4>
						<form className="contact-bx ajax-form" action="script/contact.php">
							<div className="ajax-message"></div>
							<div className="row placeani">
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<label>Your Name</label>
											<input name="name" type="text" required className="form-control"/>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group"> 
											<label>Your Email Address</label>
											<input name="email" type="email" className="form-control" required />
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<div className="form-group">
										<div className="input-group">
											<label>Type Message</label>
											<textarea name="message" rows="4" className="form-control" required ></textarea>
										</div>
									</div>
								</div>
								<div className="col-lg-12">
									<button name="submit" type="submit" value="Submit" className="btn button-md"> Send Message</button>
								</div>
							</div>
						</form>
					</div>
				</div>
				<div className="contact-sidebtn close">
					<i className="ti-close"></i>
				</div>
			</>
		);
	}
}

export default Header2;
