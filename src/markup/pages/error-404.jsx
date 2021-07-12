import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {
	
	render(){
		return (
			<>
				
				<div className="account-form error-404">
					<div className="account-form-inner">
						<div className="account-container">
							<div className="error-page">
								<h2 className="error-title">
									<span>4</span>
									<span>0</span>
									<span>4</span>
								</h2>
								<h3>Page Not Found</h3>
								<h5>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</h5>
								<div className="">
									<Link to="/" className="btn button-md m-b15 m-r5">Back</Link>
									<Link to="/" className="btn button-md black m-b15">Go To Home</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				
			</>
		);
	}
}

export default Error;