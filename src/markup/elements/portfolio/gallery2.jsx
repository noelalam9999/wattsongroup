import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images
import PortImg1 from '../../../images/photo-album/1-Contract-Signing.jpg';
import PortImg2 from '../../../images/photo-album/2-Contract-Signing.jpeg';
import PortImg3 from '../../../images/photo-album/3-Contract-Signing.jpeg';
import PortImg4 from '../../../images/photo-album/4-DTG-Fair.jpg';
import PortImg5 from '../../../images/photo-album/5-BFDC-Meeting-with-ICESTA-China.jpg';


import PortImg6 from '../../../images/photo-album/6-BFDC-Meeting-with-ICESTA-China(2).jpg';
import PortImg7 from '../../../images/photo-album/7-BFDC-meeting-with-subcool.jpg';
import PortImg8 from '../../../images/photo-album/8-Participating-in-BAPA-Food-Pro-Expo-2018.JPG';
import PortImg9 from '../../../images/photo-album/9-Participating-in-Bapa-Food-Fair-2019.jpg';
import PortImg10 from '../../../images/photo-album/10-BAPA-Food-Expo-With-Industry-partners.jpg';
import PortImg11 from '../../../images/photo-album/11-Building-and-construction-expo.jpg';
//import PortImg12 from '../../../images/photo-album/12-DTG-Fair.JPG';
import PortImg13 from '../../../images/photo-album/13-DTG-Fair.JPG';
import PortImg14 from '../../../images/photo-album/14-Our-Participation-in-Asia-Pharma-Expo-2019.jpeg';
import PortImg15 from '../../../images/photo-album/15-MD-SIR-PICNIC-SPEECH-2018.JPG';
import PortImg16 from '../../../images/photo-album/16-Annual-Picnic-2018.jpeg';


import PortImg17 from '../../../images/photo-album/17-Annual-Picnic-2018.JPG';
import PortImg18 from '../../../images/photo-album/18-Annual-Picnic-2018.JPG';
import PortImg19 from '../../../images/photo-album/19-Annual-Picnic-Wattson-Group-Executives.JPG';
import PortImg20 from '../../../images/photo-album/20-Annual-Picnic-2021.jpeg';
import PortImg21 from '../../../images/photo-album/21-Annual-Football-Tournament.jpeg';
import PortImg22 from '../../../images/photo-album/22-picnic-2021.jpeg';
import PortImg23 from '../../../images/photo-album/23-annual-football-tournament.jpeg';
import PortImg24 from '../../../images/photo-album/24-picnic-pic-2021.jpeg';

import PortImg25 from '../../../images/photo-album/25-Price-giving-ceremony.jpeg';
import PortImg26 from '../../../images/photo-album/26-annual-picnic-prize-giving.jpeg';
import PortImg27 from '../../../images/photo-album/27-Birthday-celebration.jpeg';
import PortImg28 from '../../../images/photo-album/28-price-giving-ceremony.jpeg';
import PortImg29 from '../../../images/photo-album/29-birthday-celebration.jpeg';
import PortImg30 from '../../../images/photo-album/30-ISO-Approval-Celebration.jpg';
import PortImg31 from '../../../images/photo-album/31-Chiller.jpg';
import PortImg32 from '../../../images/photo-album/32-Boiler.jpg';
import PortImg33 from '../../../images/photo-album/33-Boiler-Elevation-Project.jpg';
import PortImg34 from '../../../images/photo-album/34-Chiller.jpeg';
import PortImg35 from '../../../images/photo-album/35-Chiller.jpeg';
import PortImg36 from '../../../images/photo-album/36-Building-and-Construction-expo.jpg';
import PortImg37 from '../../../images/photo-album/37-BAPA-Food-pro-Expo.jpg';
import PortImg38 from '../../../images/photo-album/38-MDSir-with_WEC-Service-Team.jpeg';
import PortImg39 from '../../../images/photo-album/39-Receiving-Award.jpeg';
import PortImg40 from '../../../images/photo-album/40-DTG-Fair-2019.JPG';






// Portfolio Content
const content = [
	{ 
		thumb: PortImg1, 
		LightImg: PortImg1,
		tag: ['Oil & Gas',],
		title: "",
		exetitle: "Contract Signing",
	},
	{ 
		thumb: PortImg2,
		LightImg: PortImg2,
		tag: ['Industrial',],
		title: "",
		exetitle: "Contract Signing",
	},
	{ 
		thumb: PortImg3,
		LightImg: PortImg3,
		tag: ['Industrial',],
		title: "",
		exetitle: "Contract Signing",
	},
	{ 
		thumb: PortImg4,
		LightImg: PortImg4,
		tag: ['Chemical',],
		title: "",
		exetitle: "DTG Fair",
	},
	{ 
		thumb: PortImg5,
		LightImg: PortImg5,
		tag: ['development',],
		title: "",
		exetitle: "BFDC factory visit with Incesta, China",
	},
	{ 
		thumb: PortImg6,
		LightImg: PortImg6,		
		tag: ['Metallurgy',],
		title: "",
		exetitle: "BFDC factory visit with Incesta, China",
	},
	{ 
		thumb: PortImg7,
		LightImg: PortImg7,		
		tag: ['Industrial',],
		title: "",
		exetitle: "BFDC meeting with Sub-cool",
	},
	{ 
		thumb: PortImg8,
		LightImg: PortImg8,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Participating in BAPA Food Pro Expo - 2018",
	},
	{ 
		thumb: PortImg9,
		LightImg: PortImg9,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Participating in BAPA Food Pro Expo - 2019",
	},
	{ 
		thumb: PortImg10,
		LightImg: PortImg10,
		tag: ['Chemical',],
		title: "",
		exetitle: "With Industry Partners at BAPA Food Expo",
	},
	{ 
		thumb: PortImg11,
		LightImg: PortImg11,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Building and Construction Expo",
	},
	// { 
	// 	thumb: PortImg12,
	// 	LightImg: PortImg12,
	// 	tag: ['Industrial',],
	// 	title: "",
	// 	exetitle: "DTG Fair",
	// },
	{ 
		thumb: PortImg13, 
		LightImg: PortImg13,
		tag: ['Oil & Gas',],
		title: "",
		exetitle: "DTG Fair",
	},
	{ 
		thumb: PortImg14,
		LightImg: PortImg14,
		tag: ['Industrial',],
		title: "",
		exetitle: "Our Participation in Asia Pharma Expo 2019",
	},
	{ 
		thumb: PortImg15,
		LightImg: PortImg15,
		tag: ['Industrial',],
		title: "",
		exetitle: "MD Sir giving a Speech at our Picnic,2018",
	},
	{ 
		thumb: PortImg16,
		LightImg: PortImg16,
		tag: ['Chemical',],
		title: "",
		exetitle: "Annual Picnic, 2018",
	},
	{ 
		thumb: PortImg17,
		LightImg: PortImg17,
		tag: ['development',],
		title: "",
		exetitle: "Annual Picnic 2018",
	},
	{ 
		thumb: PortImg18,
		LightImg: PortImg18,		
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Annual Picnic 2018",
	},
	{ 
		thumb: PortImg19,
		LightImg: PortImg19,		
		tag: ['Industrial',],
		title: "",
		exetitle: "Wattson Group Executives at Annual Picnic",
	},
	{ 
		thumb: PortImg20,
		LightImg: PortImg20,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Annual FootPicnic 2021",
	},
	{ 
		thumb: PortImg21,
		LightImg: PortImg22,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Annual Football Tourament",
	},
	{ 
		thumb: PortImg22,
		LightImg: PortImg22,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Picnic 2021",
	},
	{ 
		thumb: PortImg23,
		LightImg: PortImg23,
		tag: ['Chemical',],
		title: "",
		exetitle: "Annual Football Tournament",
	},
	{ 
		thumb: PortImg24,
		LightImg: PortImg24,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Picnic Picture 2021",
	},
	{ 
		thumb: PortImg25,
		LightImg: PortImg25,
		tag: ['Industrial',],
		title: "",
		exetitle: "Prize Giving Ceremony",
	},
	
	{ 
		thumb: PortImg26, 
		LightImg: PortImg26,
		tag: ['Oil & Gas',],
		title: "",
		exetitle: "Annual Picnic Prize giving",
	},
	{ 
		thumb: PortImg27,
		LightImg: PortImg27,
		tag: ['Industrial',],
		title: "",
		exetitle: "Birthday celebration",
	},
	{ 
		thumb: PortImg28,
		LightImg: PortImg28,
		tag: ['Industrial',],
		title: "",
		exetitle: "Prize giving Ceremony",
	},
	{ 
		thumb: PortImg29,
		LightImg: PortImg29,
		tag: ['Chemical',],
		title: "",
		exetitle: "Birthday Celebration",
	},
	{ 
		thumb: PortImg30,
		LightImg: PortImg30,
		tag: ['development',],
		title: "",
		exetitle: "ISO Approval Celebration",
	},
	
	{ 
		thumb: PortImg31,
		LightImg: PortImg31,		
		tag: ['Industrial',],
		title: "",
		exetitle: "Chiller",
	},
	{ 
		thumb: PortImg32,
		LightImg: PortImg32,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Boiler",
	},
	{ 
		thumb: PortImg33,
		LightImg: PortImg33,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Boiler Elevation Project",
	},
	{ 
		thumb: PortImg34,
		LightImg: PortImg34,
		tag: ['Chemical',],
		title: "",
		exetitle: "Chiller",
	},
	{ 
		thumb: PortImg35,
		LightImg: PortImg35,
		tag: ['Metallurgy',],
		title: "",
		exetitle: "Chiller",
	},
	{ 
		thumb: PortImg36,
		LightImg: PortImg36,
		tag: ['Industrial',],
		title: "",
		exetitle: "Building and Construction Expo",
	},
	
	{ 
		thumb: PortImg37, 
		LightImg: PortImg37,
		tag: ['Oil & Gas',],
		title: "",
		exetitle: "BAPA Food Pro Expo",
	},
	{ 
		thumb: PortImg38,
		LightImg: PortImg38,
		tag: ['Industrial',],
		title: "",
		exetitle: "MD Sir with WEC Service Team",
	},
	{ 
		thumb: PortImg39,
		LightImg: PortImg39,
		tag: ['Industrial',],
		title: "",
		exetitle: "Receiving Award",
	},
	{ 
		thumb: PortImg40,
		LightImg: PortImg40,
		tag: ['Chemical',],
		title: "",
		exetitle: "DTG Fair",
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
			
			
			
			<SimpleReactLightbox>
				<SRLWrapper options={options}>
					<Masonry className="row nosp">
						{filteredImages.map((item, index)=>(	
							<div className="action-card col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
								<div className="portfolio-box style-3 m-b0">
									<div className="portfolio-media">
										<img src={item.thumb}  alt="" />	
									</div>
									<div className="portfolio-info">
										<h4 className="title"><Link to={"projects-single-1"}>{item.title}</Link></h4>
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