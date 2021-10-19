import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images

import PortImg1 from '../../../images/portfolio/wec/air-cooled-chiller.png';
import PortImg2 from '../../../images/portfolio/wec/air-handling-unit.png';
import PortImg3 from '../../../images/portfolio/wec/magnetic-bearing-chiller.png';
import PortImg4 from '../../../images/portfolio/wec/cooling-tower-round.png';
import PortImg5 from '../../../images/portfolio/wec/cooling-unit.jpeg';
import PortImg6 from '../../../images/portfolio/wec/download.jpg';
import PortImg7 from '../../../images/portfolio/wec/Exhaust-Gas-boiler.jpg';
import PortImg8 from '../../../images/portfolio/wec/fan-coil-unit.png';
import PortImg9 from '../../../images/portfolio/wec/H258f066029b644848a28b3df5d7d24cbL.png_.webp';
import PortImg10 from '../../../images/portfolio/wec/images.jpg';
import PortImg11 from '../../../images/portfolio/wec/plate-heat-exchanger.jpg';
import PortImg12 from '../../../images/portfolio/wec/Slw-Series-Double-Suction-Horizontal-End-Suction-Centrifugal-Pump.jpg';
import PortImg13 from '../../../images/portfolio/wec/unnamed.jpg';
import PortImg14 from '../../../images/portfolio/wec/Watercool-chiller.jpg';
import PortImg15 from '../../../images/portfolio/wec/boiler.jpg';
import PortImg16 from '../../../images/portfolio/wec/air-compressor.jpg';
import PortImg17 from '../../../images/portfolio/wec/flow-meter.jpg';
import PortImg18 from '../../../images/portfolio/wec/Oval-Duct.jpg';
import PortImg19 from '../../../images/portfolio/wec/spiral-ducts.jpg';
import PortImg20 from '../../../images/portfolio/wec/Rectangular-Duct.jpg';
import PortImg21 from '../../../images/portfolio/wec/humidification.jpg';

// Portfolio Content
const content = [
	{ 
		thumb: PortImg21,
		LightImg: PortImg21,
		tag: ['Boiler',],
		title: "Humidification Plant",
		exetitle: "",
	},
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
	{ 
		thumb: PortImg19,
		LightImg: PortImg19,		
		tag: ['Humidifier',],
		title: "Spiral Duct",
		exetitle: "",
	},
	{ 
		thumb: PortImg18,
		LightImg: PortImg18,		
		tag: ['Humidifier',],
		title: "Oval Duct",
		exetitle: "",
	},

	{ 
		thumb: PortImg20,
		LightImg: PortImg20,		
		tag: ['Humidifier',],
		title: "Rectangular Duct",
		exetitle: "",
	},
]

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
			
			{/* <div className="feature-filters clearfix center m-b40 style1">
				<ul className="filters" data-toggle="buttons">
					<FilterList 
						dataFilter="All Cases" 
						defaultTag={setTag} 
						activeFilter={ tag === 'All Products' ? true : false }	
					/>
					<FilterList 
						dataFilter="Wattson Engineering" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Wattson Engineering' ? true : false }
					/>
					<FilterList 
						dataFilter="Euro Panel" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Euro Panel' ? true : false }
					/>
					<FilterList 
						dataFilter="Air-Conditioning"
						defaultTag={setTag} 
						activeFilter={ tag === 'Air-Conditioning' ? true : false }	
					/>
					<FilterList 
						dataFilter="Hydro-Chemical"
						defaultTag={setTag} 
						activeFilter={ tag === 'Hydro-Chemical' ? true : false }	
					/>
					<FilterList 
						dataFilter="Fire Fighting"
						defaultTag={setTag} 
						activeFilter={ tag === 'Fire Fighting' ? true : false }	
					/>
				</ul>
			</div> */}
			
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<Masonry className="row sp4">
						{filteredImages.map((item, index)=>(	
							<div className="action-card col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
								<div className="portfolio-box style-3">
									<div className="portfolio-media">
										<img src={item.thumb}  alt="" />	
									</div>
									<div className="portfolio-info">
										<h4 className="title1"><Link to={"projects-single-1"}>{item.title}</Link></h4>
										<span className="exe-title">{item.exetitle}</span>	
									</div>
								</div>
							</div>
						))}	
					</Masonry>
				</SRLWrapper>
			</SimpleReactLightbox>
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