import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import PortImg1 from "../../../images/portfolio/duct/spiral-ducts.jpg"
import PortImg2 from "../../../images/portfolio/duct/Rectangular-Duct.jpg"
import PortImg3 from "../../../images/portfolio/duct/Oval Duct.jpg"
import PortImg4 from "../../../images/portfolio/duct/Elbow.jpg"
import PortImg5 from "../../../images/portfolio/duct/duct-manufacturing.jpg"
import PortImg6 from "../../../images/portfolio/duct/Corner.jpg"
import PortImg7 from "../../../images/portfolio/duct/Flange.png"
import PortImg8 from "../../../images/portfolio/duct/elbow-duct-making.jpg"

// Portfolio Content
const content = [
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		tag: ['Oil & Gas',],
		title: "Spiral Duct",
		exetitle: "Wattson Euro Panel",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		tag: ['Oil & Gas',],
		title: "Rectangular Duct",
		exetitle: "Wattson Euro Panel",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		tag: ['Industrial',],
		title: "Oval Duct",
		exetitle: "Wattson Euro Panel",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['Chemical',],
		title: "Elbow",
		exetitle: "Wattson Euro Panel",
	},
	{ 
		thumb: PortImg5,
		LightImg: PortImg5,
		tag: ['development',],
		title: "Duct Manufacturing",
		exetitle: "Wattson Euro Panel",
	},
	{ 
		thumb: PortImg6,
		LightImg: PortImg6,		
		tag: ['Metallurgy',],
		title: "Corner",
		exetitle: "Wattson Euro Panel",
	},
	{ 
		thumb: PortImg7,
		LightImg: PortImg7,		
		tag: ['Industrial',],
		title: "Flange",
		exetitle: "Wattson Euro Panel",
	},
	
	{ 
		thumb: PortImg8,
		LightImg: PortImg8,		
		tag: ['Industrial',],
		title: "Elbow Duct Mnufacturing",
		exetitle: "Wattson Euro Panel",
	},
]

// Magnific Anchor
const MagnificAnchor = props => {
	const { openLightbox } = useLightbox()

	return (
		<Link  to={"#"} onClick={() => openLightbox(props.imageToOpen)} className="magnific-anchor" >
			<i className="la la-plus"></i>
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
			
			{/* <div className="feature-filters clearfix center m-b40 style1">
				<ul className="filters" data-toggle="buttons">
					<FilterList 
						dataFilter="All Cases" 
						defaultTag={setTag} 
						activeFilter={ tag === 'All Cases' ? true : false }	
					/>
					<FilterList 
						dataFilter="Oil & Gas" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Oil & Gas' ? true : false }
					/>
					<FilterList 
						dataFilter="Chemical" 
						defaultTag={setTag} 
						activeFilter={ tag === 'Chemical' ? true : false }
					/>
					<FilterList 
						dataFilter="Metallurgy"
						defaultTag={setTag} 
						activeFilter={ tag === 'Metallurgy' ? true : false }	
					/>
					<FilterList 
						dataFilter="Industrial"
						defaultTag={setTag} 
						activeFilter={ tag === 'Industrial' ? true : false }	
					/>
				</ul>
			</div>
			 */}
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<Masonry className="row sp4">
						{filteredImages.map((item, index)=>(	
							<div className="action-card col-lg-6 col-md-6 col-sm-6 col-12" key={index}>
								<div className="portfolio-box style-1">
									<div className="portfolio-media">
										<img src={item.thumb}  alt="" />	
									</div>
									<div className="portfolio-info">
										<h4 className="title"><Link to={"projects-single-1"}>{item.title}</Link></h4>
										<span className="exe-title">{item.exetitle}</span>	
										<MagnificAnchor />
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