import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import BackBg1 from '../../../images/background/bg1.jpg';
import PortImg1 from '../../../images/portfolio/wec/air-cooled-chiller.jpg';
import PortImg2 from '../../../images/portfolio/wec/air-handling-unit.jpg';
import PortImg3 from '../../../images/portfolio/wec/magnetic-bearing-chiller.jpg';
import PortImg4 from '../../../images/portfolio/wec/cooling-tower.jpg';
import PortImg5 from '../../../images/portfolio/wec/cooling-unit.jpeg';
import PortImg6 from '../../../images/portfolio/wec/download.jpg';
import PortImg7 from '../../../images/portfolio/wec/Exhaust-Gas-boiler.jpg';
import PortImg8 from '../../../images/portfolio/wec/fan-coil-unit.jpg';
import PortImg9 from '../../../images/portfolio/wec/H258f066029b644848a28b3df5d7d24cbL.png_.webp';
import PortImg10 from '../../../images/portfolio/wec/images.jpg';
import PortImg11 from '../../../images/portfolio/wec/plate-heat-exchanger.jpg';
import PortImg12 from '../../../images/portfolio/wec/Slw-Series-Double-Suction-Horizontal-End-Suction-Centrifugal-Pump.jpg';
import PortImg13 from '../../../images/portfolio/wec/unnamed.jpg';
import PortImg14 from '../../../images/portfolio/wec/Watercool-chiller.jpg';
import PortImg15 from '../../../images/portfolio/wec/boiler.jpg';
import PortImg16 from '../../../images/portfolio/wec/air-compressor.jpg';
import PortImg17 from '../../../images/portfolio/wec/flow-meter.jpg';
// Portfolio Content
const content = [
	{ 
		thumb: PortImg10,
		LightImg: PortImg10,
		tag: ['Boiler',],
		title: "Direct Fired Absorption Chiller",
		exetitle: "",
	},
	
	{ 
		thumb: PortImg1,
		LightImg: PortImg1,
		tag: ['Exchanger',],
		title: "Air cooled Screw Chiller",
		exetitle: "",
	},
	{ 
		thumb: PortImg14,
		LightImg: PortImg14,		
		tag: ['Humidifier',],
		title: "Water cooled Screw Chiller",
		exetitle: "",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,		
		tag: ['Humidifier',],
		title: "Magnetic Bearing Chiller",
		exetitle: "",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		tag: ['Exchanger',],
		title: "Air Handling Unit",
		exetitle: "",
	},


	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['Boiler',],
		title: "Cooling Tower",
		exetitle: "",
	},
	{ 
		thumb: PortImg5,
		LightImg: PortImg5,
		tag: ['Boiler',],
		title: "VRF Air-conditioning",
		exetitle: "",
	},
	
	{ 
		thumb: PortImg7,
		LightImg: PortImg7,
		tag: ['Boiler',],
		title: "Direct Fired Boiler",
		exetitle: "E",
	},
	{ 
		thumb: PortImg8,
		LightImg: PortImg8,
		tag: ['Boiler',],
		title: "Fan Coil Unit",
		exetitle: "",
	},
	{ 
		thumb: PortImg9,
		LightImg: PortImg9,
		tag: ['Boiler',],
		title: "Cooling Tower",
		exetitle: "",
	},

	{ 
		thumb: PortImg11,
		LightImg: PortImg11,		
		tag: ['Humidifier',],
		title: "Heat Exchanger",
		exetitle: "",
	},
	{ 
		thumb: PortImg12,
		LightImg: PortImg12,		
		tag: ['Humidifier',],
		title: "Industrial Pump",
		exetitle: "",
	},
	{ 
		thumb: PortImg15,
		LightImg: PortImg15,		
		tag: ['Humidifier',],
		title: "Scherrer Boiler",
		exetitle: "",
	},
	{ 
		thumb: PortImg16,
		LightImg: PortImg16,		
		tag: ['Humidifier',],
		title: "Air Compressor",
		exetitle: "",
	},
	{ 
		thumb: PortImg17,
		LightImg: PortImg17,		
		tag: ['Humidifier',],
		title: "Flow Meter",
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