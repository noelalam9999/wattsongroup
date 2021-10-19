import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images

import BackBg1 from '../../../images/background/bg1.jpg';
import PortImg1 from '../../../images/portfolio/firefighter/1.Fire-Fighting-pump-set.PNG';
import PortImg2 from '../../../images/portfolio/firefighter/10.Single-Jacket-Lay-flat-Fire-Hose.png';
import PortImg3 from '../../../images/portfolio/firefighter/11.Hydrant-Box.jpg';
import PortImg4 from '../../../images/portfolio/firefighter/2.fire-extinguisher.jpg';
import PortImg5 from '../../../images/portfolio/firefighter/3.Fire-rated-door.jpg';
import PortImg6 from '../../../images/portfolio/firefighter/4.Air-hose-Pipe.PNG';
import PortImg7 from '../../../images/portfolio/firefighter/5.Pillar-Hydrant.png';
import PortImg8 from '../../../images/portfolio/firefighter/6.Breeching-inlet.jpg';
import PortImg9 from '../../../images/portfolio/firefighter/7.fire-blanket.jpg';
import PortImg10 from '../../../images/portfolio/firefighter/8.Fire-alarm-system.jpg';
import PortImg11 from '../../../images/portfolio/firefighter/9.Fire-Hose-Reel.jpg';


// Portfolio Content
const content = [
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		tag: ['Oil & Gas',],
		title: "Fire Fighting Pump set",
		exetitle: "",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		tag: ['Oil & Gas',],
		title: "Single Jacket lay flat firehose",
		exetitle: "",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		tag: ['Industrial',],
		title: "Hydrant Box",
		exetitle: "",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['Chemical',],
		title: "Fire Extinguisher",
		exetitle: "",
	},
	{ 
		thumb: PortImg5,
		LightImg: PortImg5,
		tag: ['Oil & Gas',],
		title: "Fire Rated Door",
		exetitle: "",
	},
	{ 
		thumb: PortImg6,
		LightImg: PortImg6,		
		tag: ['Metallurgy',],
		title: "Air Hose Pipe",
		exetitle: "",
	},
	{ 
		thumb: PortImg7, 
		LightImg: PortImg7,
		tag: ['Oil & Gas',],
		title: "Pillar Hydrant",
		exetitle: "",
	},
	{ 
		thumb: PortImg8,
		LightImg: PortImg8,
		tag: ['Oil & Gas',],
		title: "Breeching Inlet",
		exetitle: "",
	},
	{ 
		thumb: PortImg9,
		LightImg: PortImg9,
		tag: ['Industrial',],
		title: "Fire Blanket",
		exetitle: "",
	},
	{ 
		thumb: PortImg10,
		LightImg: PortImg10,
		tag: ['Chemical',],
		title: "Fire Alarm System",
		exetitle: "",
	},
	{ 
		thumb: PortImg11,
		LightImg: PortImg5,
		tag: ['Oil & Gas',],
		title: "Fire Hose Reel",
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