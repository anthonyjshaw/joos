import React from 'react'
import addDashesToName from '../lib/__utils__/add_dashes_to_name';


const Navbar = () => {
	const navItems = ['Work', 'About', 'Get in touch'].map((e) => {
		return (<div className="nav-item" key={e}>
			<p><a href={`/${addDashesToName(e.toLowerCase())}`} className="nav-link">{e}</a></p>
		</div>);
	})
	return (
		<div className='navbar'>
				<div className='nav-logo'>
					<p>
						<span className="logo-letter">j</span>
						<span className="logo-letter">o</span>
						<span className="logo-letter">o</span>
						<span className="logo-letter">s</span>
					</p>
				</div>
				<div className='nav-items'>
					{navItems}
				</div>
		</div>
	)
}

export default Navbar;