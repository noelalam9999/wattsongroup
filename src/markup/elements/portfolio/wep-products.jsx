import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images

import PortImg1 from '../../../images/portfolio/wep/clean-room-door.jpg';
import PortImg2 from '../../../images/portfolio/wep/cold-room-doors.jpg';
import PortImg3 from '../../../images/portfolio/wep/cold-room-panel.jpg';
import PortImg4 from '../../../images/portfolio/wep/cold-storage-panel.jpg';
import PortImg5 from '../../../images/portfolio/wep/cooling-tower.jpg';
import PortImg6 from '../../../images/portfolio/wep/HVACR-cdu-3-1024x768.jpg';
import PortImg7 from '../../../images/portfolio/wep/corogated-panel.jpg';
import PortImg8 from '../../../images/portfolio/wep/EPS-Panel.jpg';
import PortImg9 from '../../../images/portfolio/wep/Half-Round-Pipe-Insulation.jpg';
import PortImg10 from '../../../images/portfolio/wep/PU-Pre-Insulated-Pipe.PNG';
import PortImg11 from '../../../images/portfolio/wep/Rockwool-Sandwich-Panel.jpg';
import PortImg12 from '../../../images/portfolio/wep/Sabroe-compressor.jpg';
import PortImg13 from '../../../images/portfolio/wep/PU-Sandwich-Panel(2).jpg';
import PortImg14 from '../../../images/portfolio/wep/15901167663720.jpg';
import PortImg15 from '../../../images/portfolio/wep/coving.jpg';




// Portfolio Content
const content = [

	{ 
		thumb: PortImg8,
		LightImg: PortImg8,
		tag: ['Oil & Gas',],
		title: "EPS Sandwich Panel",
		exetitle: "",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		tag: ['Industrial',],
		title: "Pu Panel",
		exetitle: "",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['Chemical',],
		title: "PU Panel",
		exetitle: "",
	},
	{ 
		thumb: PortImg11,
		LightImg: PortImg11,
		tag: ['Oil & Gas',],
		title: "Rockwool Sandwich Panel",
		exetitle: "",
	},
	{ 
		thumb: PortImg9,
		LightImg: PortImg9,
		tag: ['Industrial',],
		title: "Half-round PU-insulation",
		exetitle: "",
	},
	{ 
		thumb: PortImg10,
		LightImg: PortImg10,
		tag: ['Chemical',],
		title: "PU pipe Insulation",
		exetitle: "",
	},
	{ 
		thumb: PortImg7, 
		LightImg: PortImg7,
		tag: ['Oil & Gas',],
		title: "Roofing/Corrogated Panel",
		exetitle: "",
	},
	{ 

		thumb: PortImg1, 
		LightImg: PortImg1,
		tag: ['Oil & Gas',],
		title: "PU Sandwich Panel Door",
		exetitle: "",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		tag: ['Oil & Gas',],
		title: "Clean room door(Swing)",
		exetitle: "",
	},

	{ 
		thumb: PortImg5,
		LightImg: PortImg5,
		tag: ['Oil & Gas',],
		title: "Evaporator Unit",
		exetitle: "",
	},
	{ 
		thumb: PortImg15,
		LightImg: PortImg15,		
		tag: ['Metallurgy',],
		title: "Accessories for cold-storage",
		exetitle: "",
	},
	{ 
		thumb: PortImg6,
		LightImg: PortImg6,
		tag: ['Oil & Gas',],
		title: "Condensing Unit",
		exetitle: "",
	},

	{ 
		thumb: PortImg13,
		LightImg: PortImg13,		
		tag: ['Metallurgy',],
		title: "PU Sandwich Panel",
		exetitle: "",
	},
	


	{ 
		thumb: PortImg12,
		LightImg: PortImg12,		
		tag: ['Metallurgy',],
		title: "Compressor",
		exetitle: "",
	},
	{ 
		thumb: PortImg14,
		LightImg: PortImg14,		
		tag: ['Metallurgy',],
		title: "Flake Ice Machine",
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
			</div>
			 */}
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