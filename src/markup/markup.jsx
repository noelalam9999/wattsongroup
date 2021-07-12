import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// Elements
import BackToTop from './elements/back-top';

import Index2 from './pages/';
import Index from './pages/index-2';
import Index3 from './pages/index-3';
import Index4 from './pages/index-4';
import About1 from './pages/about-1';
import About2 from './pages/about-2';
import About3 from './pages/about-3';
import Appointment from './pages/appointment';
import Awards from './pages/awards';
import BlogClassic from './pages/blog-classic';
import BlogClassicSidebar from './pages/blog-classic-sidebar';
import BlogDetailsSidebar from './pages/blog-details-sidebar';
import BlogList from './pages/blog-list';
import BlogMasonry from './pages/blog-masonry';
import BlogStandard from './pages/blog-standard';
import CaseDetails from './pages/case-details';
import CaseStudy from './pages/case-study';
import Client from './pages/client';
import ComingSoon from './pages/coming-soon';
import CompanyHistory from './pages/company-history';
import Contact1 from './pages/contact-1';
import Contact2 from './pages/contact-2';
import Error404 from './pages/error-404';
import Faq1 from './pages/faq-1';
import Faq2 from './pages/faq-2';
import GetInTouch from './pages/get-in-touch';
import JobCareer from './pages/job-career';
import MyAccount from './pages/my-account';
import Partners from './pages/partners';
import Pricing from './pages/pricing';
import ProjectsCarousel1 from './pages/projects-carousel-1';
import ProjectsCarousel2 from './pages/projects-carousel-2';
import ProjectsCarousel3 from './pages/projects-carousel-3';
import ProjectsCarousel4 from './pages/projects-carousel-4';
import ProjectsGrid2 from './pages/projects-grid-2';
import ProjectsGrid3 from './pages/projects-grid-3';
import ProjectsGrid4 from './pages/projects-grid-4';
import ProjectsGridWide from './pages/projects-grid-wide';
import ProjectsMasonryGrid2 from './pages/projects-masonry-grid-2';
import ProjectsMasonryGrid3 from './pages/projects-masonry-grid-3';
import ProjectsMasonryGrid4 from './pages/projects-masonry-grid-4';
import ProjectsMasonryGridWide from './pages/projects-masonry-grid-wide';
import ProjectsSingle1 from './pages/projects-single-1';
import ProjectsSingle2 from './pages/projects-single-2';
import ProjectsSingle3 from './pages/projects-single-3';
import ProjectsSingle4 from './pages/projects-single-4';
import Services1 from './pages/services-1';
import Services2 from './pages/services-2';
import Services3 from './pages/services-3';
import ServicesDetails from './pages/services-details';
import Shop from './pages/shop';
import ShopCart from './pages/shop-cart';
import ShopCheckout from './pages/shop-checkout';
import ShopDetails from './pages/shop-details';
import ShopSidebar from './pages/shop-sidebar';
import SolutionAgriculturalEngineering from './pages/solution-agricultural-engineering';
import SolutionChemicalResearchEngineering from './pages/solution-chemical-research-engineering';
import SolutionMaterialScienceAndEngineering from './pages/solution-material-science-and-engineering';
import SolutionMechanicalEngineering from './pages/solution-mechanical-engineering';
import SolutionOilAndGas from './pages/solution-oil-and-gas';
import SolutionPowerAndEnergy from './pages/solution-power-and-energy';
import Team from './pages/team';



class Markup extends Component{
	render(){
		return(
			
			<>
			
				<BrowserRouter basename={'/'}>
				
					<Switch>
						
						<Route path='/' exact component={Index} />
						<Route path='/index-2' exact component={Index2} />
						<Route path='/index-3' exact component={Index3} />
						<Route path='/index-4' exact component={Index4} />
						<Route path='/about-1' component={About1} />
						<Route path='/about-2' component={About2} />
						<Route path='/about-3' component={About3} />
						<Route path='/appointment' component={Appointment} />
						<Route path='/awards' component={Awards} />
						<Route path='/blog-classic' component={BlogClassic} />
						<Route path='/blog-classic-sidebar' component={BlogClassicSidebar} />
						<Route path='/blog-details-sidebar' component={BlogDetailsSidebar} />
						<Route path='/blog-list' component={BlogList} />
						<Route path='/blog-masonry' component={BlogMasonry} />
						<Route path='/blog-standard' component={BlogStandard} />
						<Route path='/case-details' component={CaseDetails} />
						<Route path='/case-study' component={CaseStudy} />
						<Route path='/client' component={Client} />
						<Route path='/coming-soon' component={ComingSoon} />
						<Route path='/company-history' component={CompanyHistory} />
						<Route path='/contact-1' component={Contact1} />
						<Route path='/contact-2' component={Contact2} />
						<Route path='/error-404' component={Error404} />
						<Route path='/faq-1' component={Faq1} />
						<Route path='/faq-2' component={Faq2} />
						<Route path='/get-in-touch' component={GetInTouch} />
						<Route path='/job-career' component={JobCareer} />
						<Route path='/my-account' component={MyAccount} />
						<Route path='/partners' component={Partners} />
						<Route path='/pricing' component={Pricing} />
						<Route path='/projects-carousel-1' component={ProjectsCarousel1} />
						<Route path='/projects-carousel-2' component={ProjectsCarousel2} />
						<Route path='/projects-carousel-3' component={ProjectsCarousel3} />
						<Route path='/projects-carousel-4' component={ProjectsCarousel4} />
						<Route path='/projects-grid-2' component={ProjectsGrid2} />
						<Route path='/projects-grid-3' component={ProjectsGrid3} />
						<Route path='/projects-grid-4' component={ProjectsGrid4} />
						<Route path='/projects-grid-wide' component={ProjectsGridWide} />
						<Route path='/projects-masonry-grid-2' component={ProjectsMasonryGrid2} />
						<Route path='/projects-masonry-grid-3' component={ProjectsMasonryGrid3} />
						<Route path='/projects-masonry-grid-4' component={ProjectsMasonryGrid4} />
						<Route path='/projects-masonry-grid-wide' component={ProjectsMasonryGridWide} />
						<Route path='/projects-single-1' component={ProjectsSingle1} />
						<Route path='/projects-single-2' component={ProjectsSingle2} />
						<Route path='/projects-single-3' component={ProjectsSingle3} />
						<Route path='/projects-single-4' component={ProjectsSingle4} />
						<Route path='/services-1' component={Services1} />
						<Route path='/services-2' component={Services2} />
						<Route path='/services-3' component={Services3} />
						<Route path='/services-details' component={ServicesDetails} />
						<Route path='/shop' component={Shop} />
						<Route path='/shop-cart' component={ShopCart} />
						<Route path='/shop-checkout' component={ShopCheckout} />
						<Route path='/shop-details' component={ShopDetails} />
						<Route path='/shop-sidebar' component={ShopSidebar} />
						<Route path='/solution-agricultural-engineering' component={SolutionAgriculturalEngineering} />
						<Route path='/solution-chemical-research-engineering' component={SolutionChemicalResearchEngineering} />
						<Route path='/solution-material-science-and-engineering' component={SolutionMaterialScienceAndEngineering} />
						<Route path='/solution-mechanical-engineering' component={SolutionMechanicalEngineering} />
						<Route path='/solution-oil-and-gas' component={SolutionOilAndGas} />
						<Route path='/solution-power-and-energy' component={SolutionPowerAndEnergy} />
						<Route path='/team' component={Team} />					
						
					</Switch>
				</BrowserRouter>
				
				<BackToTop />
			
			</>
		);
	}
}

export default Markup;
