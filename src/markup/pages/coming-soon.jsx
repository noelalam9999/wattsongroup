import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ComingSoon extends Component {
	
	render(){
		return (
			<>
				<div className="comign-soon" style={{backgroundImage:"url(images/background/cs.jpg)"}}>
					<div className="comign-soon-area">
						<div className="comign-logo">
							<Link to="/"><img src="images/logo.png" alt=""/></Link>
						</div>
						<h1 className="title">COming Soon!</h1>
						<div className="countdown text-center">
							<div className="date"><span className="time days"></span>
								<span>Days</span>
							</div>
							<div className="date"><span className="time hours"></span>
								<span>Hours</span>
							</div>
							<div className="date"><span className="time mins"></span>
								<span>Minutess</span>
							</div>
							<div className="date"><span className="time secs"></span>
								<span>Second</span>
							</div>
						</div>
						<form className="subscription-form subscribe-form" action="script/mailchamp.php" method="post">
							<div className="ajax-message"></div>
							<div className="input-group">
								<input name="email" required="required" className="form-control" placeholder="Your Email Address" type="email"/>
								<span className="input-group-btn">
									<button name="submit" value="Submit" type="submit" className="btn">Subscribe</button>
								</span> 
							</div>
						</form>
						<ul className="list-inline contact-social-bx">
							<li><Link to="#" className="btn outline sharp btn-xl radius-xl"><i className="fa fa-facebook"></i></Link></li>
							<li><Link to="#" className="btn outline sharp btn-xl radius-xl"><i className="fa fa-twitter"></i></Link></li>
							<li><Link to="#" className="btn outline sharp btn-xl radius-xl"><i className="fa fa-linkedin"></i></Link></li>
							<li><Link to="#" className="btn outline sharp btn-xl radius-xl"><i className="fa fa-google-plus"></i></Link></li>
						</ul>
					</div>
				</div>
				
			</>
		);
	}
}

export default ComingSoon;