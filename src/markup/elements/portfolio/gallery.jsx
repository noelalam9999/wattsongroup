import React,{Component,useState, useEffect} from 'react'; 
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import SimpleReactLightbox, {SRLWrapper, useLightbox} from 'simple-react-lightbox';

// Images

// import PortImg1 from '../../../images/photo-album/3.Contract-Signing.jpeg';
// import PortImg2 from '../../../images/photo-album/4.DTG-Fair.jpg';
// import PortImg3 from '../../../images/photo-album/5.Annual-Picnic.jpeg';
// import PortImg4 from '../../../images/photo-album/6.DTG-Fair.JPG';
// import PortImg5 from '../../../images/photo-album/67335916_627128734463285_7545559044245684224_o.jpg';


// import PortImg6 from '../../../images/photo-album/67511092_627124227797069_104345637750833152_n.jpg';
// import PortImg7 from '../../../images/photo-album/67778454_627124221130403_125784576894173184_n.jpg';
// import PortImg8 from '../../../images/photo-album/7.Birth-day-Celebration.jpeg';
// import PortImg9 from '../../../images/photo-album/73240990_730873027431755_1260771165656317952_n.jpg';
// import PortImg10 from '../../../images/photo-album/75543698_749088255610232_7749006912003244032_n.jpg';
// import PortImg11 from '../../../images/photo-album/8.ISO-Cirtification.jpg';
// import PortImg12 from '../../../images/photo-album/9.Asia-Pharma-Expo.JPG';
// import PortImg13 from '../../../images/photo-album/Annual-Picnic-2021.jpeg';
// import PortImg14 from '../../../images/photo-album/DSC03860.JPG';
// import PortImg15 from '../../../images/photo-album/picnic-2021.jpeg';
// import PortImg16 from '../../../images/photo-album/picnic-football-match.jpeg';


// import PortImg17 from '../../../images/photo-album/picnic-pic-2021.jpeg';
// import PortImg18 from '../../../images/photo-album/picnic-pic.jpeg';
// import PortImg19 from '../../../images/photo-album/Price-giving-ceremony.jpeg';
// import PortImg20 from '../../../images/photo-album/WhatsApp1.jpeg';
// import PortImg21 from '../../../images/photo-album/WhatsApp2.jpeg';
// import PortImg22 from '../../../images/photo-album/WhatsApp3.jpeg';
// import PortImg23 from '../../../images/photo-album/WhatsApp4.jpeg';
// import PortImg24 from '../../../images/photo-album/2.Bapa-Food-Fair.jpg';

// import PortImg25 from '../../../images/photo-album/12.DTG-Fair.JPG';
// import PortImg26 from '../../../images/photo-album/11.DTG-Fair-2019.JPG';
// import PortImg27 from '../../../images/photo-album/10.-Visiting-Expo.jpg';
// import PortImg28 from '../../../images/photo-album/1.jpeg';
// import PortImg29 from '../../../images/photo-album/2.jpeg';
// import PortImg30 from '../../../images/photo-album/3.jpeg';
// import PortImg31 from '../../../images/photo-album/4.jpeg';
// import PortImg32 from '../../../images/photo-album/5.jpeg';
// import PortImg33 from '../../../images/photo-album/6.jpeg';
// import PortImg34 from '../../../images/photo-album/7.jpeg';
// import PortImg35 from '../../../images/photo-album/8.JPG';
// import PortImg36 from '../../../images/photo-album/9.JPG';
// import PortImg37 from '../../../images/photo-album/10.JPG';
// import PortImg38 from '../../../images/photo-album/11.JPG';
// import PortImg39 from '../../../images/photo-album/12.jpg';
// import PortImg40 from '../../../images/photo-album/13.jpg';
// import PortImg41 from '../../../images/photo-album/14.jpg';
// import PortImg42 from '../../../images/photo-album/15.jpg';
// import PortImg43 from '../../../images/photo-album/16.jpg';
// import PortImg44 from '../../../images/photo-album/17.jpg';






// Portfolio Content
const content = [
	// { 
	// 	thumb: PortImg1, 
	// 	LightImg: PortImg1,
	// 	tag: ['Oil & Gas',],
	// 	title: "Agricultural",
	// 	exetitle: "Factory",
	// },
	// { 
	// 	thumb: PortImg2,
	// 	LightImg: PortImg2,
	// 	tag: ['Industrial',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg3,
	// 	LightImg: PortImg3,
	// 	tag: ['Industrial',],
	// 	title: "Chemical Research",
	// 	exetitle: "Material",
	// },
	// { 
	// 	thumb: PortImg4,
	// 	LightImg: PortImg4,
	// 	tag: ['Chemical',],
	// 	title: "Mechanical",
	// 	exetitle: "Research",
	// },
	// { 
	// 	thumb: PortImg5,
	// 	LightImg: PortImg5,
	// 	tag: ['development',],
	// 	title: "Oil and Gas",
	// 	exetitle: "Mechanical",
	// },
	// { 
	// 	thumb: PortImg6,
	// 	LightImg: PortImg6,		
	// 	tag: ['Metallurgy',],
	// 	title: "Power and Energy",
	// 	exetitle: "Oil",
	// },
	// { 
	// 	thumb: PortImg7,
	// 	LightImg: PortImg7,		
	// 	tag: ['Industrial',],
	// 	title: "Agricultural",
	// 	exetitle: "Factory",
	// },
	// { 
	// 	thumb: PortImg8,
	// 	LightImg: PortImg8,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg9,
	// 	LightImg: PortImg9,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg10,
	// 	LightImg: PortImg10,
	// 	tag: ['Chemical',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg11,
	// 	LightImg: PortImg11,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg12,
	// 	LightImg: PortImg12,
	// 	tag: ['Industrial',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg13, 
	// 	LightImg: PortImg13,
	// 	tag: ['Oil & Gas',],
	// 	title: "Agricultural",
	// 	exetitle: "Factory",
	// },
	// { 
	// 	thumb: PortImg14,
	// 	LightImg: PortImg14,
	// 	tag: ['Industrial',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg15,
	// 	LightImg: PortImg15,
	// 	tag: ['Industrial',],
	// 	title: "Chemical Research",
	// 	exetitle: "Material",
	// },
	// { 
	// 	thumb: PortImg16,
	// 	LightImg: PortImg16,
	// 	tag: ['Chemical',],
	// 	title: "Mechanical",
	// 	exetitle: "Research",
	// },
	// { 
	// 	thumb: PortImg17,
	// 	LightImg: PortImg17,
	// 	tag: ['development',],
	// 	title: "Oil and Gas",
	// 	exetitle: "Mechanical",
	// },
	// { 
	// 	thumb: PortImg18,
	// 	LightImg: PortImg18,		
	// 	tag: ['Metallurgy',],
	// 	title: "Power and Energy",
	// 	exetitle: "Oil",
	// },
	// { 
	// 	thumb: PortImg19,
	// 	LightImg: PortImg19,		
	// 	tag: ['Industrial',],
	// 	title: "Agricultural",
	// 	exetitle: "Factory",
	// },
	// { 
	// 	thumb: PortImg20,
	// 	LightImg: PortImg20,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg21,
	// 	LightImg: PortImg22,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg23,
	// 	LightImg: PortImg23,
	// 	tag: ['Chemical',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg24,
	// 	LightImg: PortImg24,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg25,
	// 	LightImg: PortImg25,
	// 	tag: ['Industrial',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	
	// { 
	// 	thumb: PortImg26, 
	// 	LightImg: PortImg26,
	// 	tag: ['Oil & Gas',],
	// 	title: "Agricultural",
	// 	exetitle: "Factory",
	// },
	// { 
	// 	thumb: PortImg27,
	// 	LightImg: PortImg27,
	// 	tag: ['Industrial',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg28,
	// 	LightImg: PortImg28,
	// 	tag: ['Industrial',],
	// 	title: "Chemical Research",
	// 	exetitle: "Material",
	// },
	// { 
	// 	thumb: PortImg29,
	// 	LightImg: PortImg29,
	// 	tag: ['Chemical',],
	// 	title: "Mechanical",
	// 	exetitle: "Research",
	// },
	// { 
	// 	thumb: PortImg30,
	// 	LightImg: PortImg30,
	// 	tag: ['development',],
	// 	title: "Oil and Gas",
	// 	exetitle: "Mechanical",
	// },
	// { 
	// 	thumb: PortImg6,
	// 	LightImg: PortImg6,		
	// 	tag: ['Metallurgy',],
	// 	title: "Power and Energy",
	// 	exetitle: "Oil",
	// },
	// { 
	// 	thumb: PortImg31,
	// 	LightImg: PortImg31,		
	// 	tag: ['Industrial',],
	// 	title: "Agricultural",
	// 	exetitle: "Factory",
	// },
	// { 
	// 	thumb: PortImg32,
	// 	LightImg: PortImg32,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg33,
	// 	LightImg: PortImg33,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg34,
	// 	LightImg: PortImg34,
	// 	tag: ['Chemical',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg35,
	// 	LightImg: PortImg35,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg36,
	// 	LightImg: PortImg36,
	// 	tag: ['Industrial',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	
	// { 
	// 	thumb: PortImg37, 
	// 	LightImg: PortImg37,
	// 	tag: ['Oil & Gas',],
	// 	title: "Agricultural",
	// 	exetitle: "Factory",
	// },
	// { 
	// 	thumb: PortImg38,
	// 	LightImg: PortImg38,
	// 	tag: ['Industrial',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },
	// { 
	// 	thumb: PortImg39,
	// 	LightImg: PortImg39,
	// 	tag: ['Industrial',],
	// 	title: "MD Sir",
	// 	exetitle: "Material",
	// },
	// { 
	// 	thumb: PortImg40,
	// 	LightImg: PortImg40,
	// 	tag: ['Chemical',],
	// 	title: "MD Sir",
	// 	exetitle: "Research",
	// },
	// { 
	// 	thumb: PortImg41,
	// 	LightImg: PortImg41,
	// 	tag: ['development',],
	// 	title: "Oil and Gas",
	// 	exetitle: "Mechanical",
	// },
	// { 
	// 	thumb: PortImg42,
	// 	LightImg: PortImg42,		
	// 	tag: ['Metallurgy',],
	// 	title: "Power and Energy",
	// 	exetitle: "Oil",
	// },
	// { 
	// 	thumb: PortImg43,
	// 	LightImg: PortImg43,		
	// 	tag: ['Industrial',],
	// 	title: "Agricultural",
	// 	exetitle: "Factory",
	// },
	// { 
	// 	thumb: PortImg44,
	// 	LightImg: PortImg44,
	// 	tag: ['Metallurgy',],
	// 	title: "Material Science",
	// 	exetitle: "Agricultural",
	// },

	
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