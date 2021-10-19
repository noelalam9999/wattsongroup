import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import BackBg1 from '../../../images/background/bg1.jpg';
import PortImg1 from '../../../images/portfolio/hydrochemical-concerns/8.Water-softener-Resin.jpg';
import PortImg2 from '../../../images/portfolio/hydrochemical-concerns/1.Water-Treatment-Chemical.jpg';
import PortImg3 from '../../../images/portfolio/hydrochemical-concerns/2.water-treatment-plant.jpg';
import PortImg4 from '../../../images/portfolio/hydrochemical-concerns/3.Water-softner-plant.jpg';
import PortImg5 from '../../../images/portfolio/hydrochemical-concerns/4.Sand-filter.jpg';
import PortImg6 from '../../../images/portfolio/hydrochemical-concerns/5.Reverse-osmosis-plant.jpg';
import PortImg7 from '../../../images/portfolio/hydrochemical-concerns/6.Electro-deionization(EDI).jpg';
import PortImg8 from '../../../images/portfolio/hydrochemical-concerns/7.Ultra-Filtration-System.jpg';
import PortImg9 from '../../../images/portfolio/hydrochemical-concerns/Dosing-pump-installation.jpg';
import PortImg10 from '../../../images/portfolio/hydrochemical-concerns/water-softener-salt-500x500.jpg';
// Portfolio Content
const content = [
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		tag: ['Industrial',],
		title: "Water Treatment Plant",
		exetitle: "",
	},
	{ 
		thumb: PortImg5,
		LightImg: PortImg5,
		tag: ['Oil & Gas',],
		title: "Water Softener Plant",
		exetitle: "",
	},
	

	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['Chemical',],
		title: "Sand Filter",
		exetitle: "",
	},

	{ 
		thumb: PortImg6,
		LightImg: PortImg6,		
		tag: ['Metallurgy',],
		title: "Reverse Osmosis Plant",
		exetitle: "",
	},
	{ 
		thumb: PortImg9,
		LightImg: PortImg9,		
		tag: ['Metallurgy',],
		title: "Dosing Pump",
		exetitle: "",
	},
	{ 
		thumb: PortImg7,
		LightImg: PortImg7,
		tag: ['Chemical',],
		title: "Electro De-ionization",
		exetitle: "",
	},
	{ 
		thumb: PortImg8,
		LightImg: PortImg8,
		tag: ['Oil & Gas',],
		title: "Ultra filtration System",
		exetitle: "",
	},
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		tag: ['Oil & Gas',],
		title: "Water Softener Resin",
		exetitle: "",
	},
	{ 
		thumb: PortImg10, 
		LightImg: PortImg10,
		tag: ['Oil & Gas',],
		title: "Water Softener Salt",
		exetitle: "",
	},

]

// Magnific Anchor
const MagnificAnchor = props => {
	const { openLightbox } = useLightbox()

	return (
		<Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="magnific-anchor right">
			View Image
		</Link>
	)
}

const options = {
	settings: {
		overlayColor: "rgba(0,0,0,0.9)",
		backgroundColor: "#fe5a0e",
		slideAnimationType: 'slide',
	},
	buttons: {
		backgroundColor: "#fe5a0e",
		iconColor: "rgba(255, 255, 255, 1)",
		showAutoplayButton: false,
		showDownloadButton: false,
	},
	caption: {
		captionColor: "#a6cfa5",
		captionFontFamily: "Raleway, sans-serif",
		captionFontWeight: "300",
		captionTextTransform: "uppercase",
	}
};

const FilterList = ({dataFilter, defaultTag, activeFilter}) => {                                                               
	return (	
		<li className={`${activeFilter ? 'btn active' : 'btn'}` } onClick={() => defaultTag(dataFilter)} >
			<Link to={"#"}><span>{dataFilter}</span></Link>
		</li> 
	);
};

function PortfolioContent(){
	const [tag, setTag] = useState('All Cases');
	const [filteredImages, setFilterdImages] = useState([]);
	
	useEffect( () => {
		tag === 'All Cases' ? setFilterdImages(content) : setFilterdImages(content.filter( image => image.tag.find(element => element === tag)))
	}, [tag])	
	
	return(
			
			<>
			
			<div className="section-area bg-primary section-sp2 ovbl-dark" style={{backgroundImage: "url("+BackBg1+")"}}>
				<div className="container">
					<div className="d-lg-flex align-items-end justify-content-between">
						<div className="heading-bx text-white text-lg-left text-center">
							<h2 className="title-head m-b0">Our Products</h2>
							<div className="ttr-separator sepimg2"></div>
						</div>
						
					</div>
					<SimpleReactLightbox>
						<SRLWrapper options={options}>
							<Masonry className="row sp4 magnific-image">
								{filteredImages.map((item, index)=>(	
									<div className="action-card col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
										<div className="portfolio-box style-2">
											<div className="portfolio-media">
												<img src={item.thumb}  alt="" />	
											</div>
											<div className="portfolio-info">
												<h4 className="title"><Link to={"projects-single-1"}>{item.title}</Link></h4>
												<span className="exe-title">{item.exetitle}</span>
											</div>
											<MagnificAnchor />
										</div>
									</div>
								))}	
							</Masonry>
						</SRLWrapper>
					</SimpleReactLightbox>
				</div>
			</div>
			
		</>
		
	);
}

class PortMasonry extends Component{
	render(){
		return(
			<>
				<PortfolioContent />
			</>
		)
	}
}
export default PortMasonry;