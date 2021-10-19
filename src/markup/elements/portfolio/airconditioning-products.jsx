import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images

import BackBg1 from '../../../images/background/bg1.jpg';
import PortImg1 from '../../../images/portfolio/airconditioning/Cassete-type-air-conditioning.jpg';
import PortImg2 from '../../../images/portfolio/airconditioning/Ceiling-type-air-conditioner.jpg';
import PortImg3 from '../../../images/portfolio/airconditioning/Indoor-Outdoor-unit.jpg';
import PortImg4 from '../../../images/portfolio/airconditioning/Spilit-Type-Air-Conditioner.jpg';
import PortImg5 from '../../../images/portfolio/airconditioning/VRF-System.jpeg';
import PortImg6 from '../../../images/portfolio/airconditioning/panel-ac-250x250.jpg';
import PortImg7 from '../../../images/portfolio/airconditioning/ducted-split-air-conditioner-installation-services-500x500.png';
// Portfolio Content
const content = [
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['Chemical',],
		title: "Split Type",
		exetitle: "",
	},
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		tag: ['Oil & Gas',],
		title: "Cassette Type AC",
		exetitle: "",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		tag: ['Oil & Gas',],
		title: "Ceiling Type",
		exetitle: "",
	},
	

	

	{ 
		thumb: PortImg6,
		LightImg: PortImg6,
		tag: ['Oil & Gas',],
		title: "panel",
		exetitle: "",
	},
	{ 
		thumb: PortImg7,
		LightImg: PortImg7,
		tag: ['Oil & Gas',],
		title: "Ducted",
		exetitle: "",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		tag: ['Industrial',],
		title: "Indoor and Indoor Unit",
		
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