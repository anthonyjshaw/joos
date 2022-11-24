import React from 'react';


const LandingPage = () => {
	return (
		<div className="container">
			<h1>Modern marketing solutions for the modern business</h1>
			<section className="section">
				<p>You want a new strategy that maximises sales.</p>
				<img src="marketing.jpeg" alt="Marketing photo" className="section-img"/>
			</section>
			<div className="squiggle-container">
				<img src="/squiggle.svg" alt="squiggle" className="squiggle" />
			</div>
			<section className="section">
				<h1>Make </h1>
				<p>At Joos, we strive to give you the best in digital marketing solutions.</p>
				<p>We are passionate about uncovering new digital marketing opportunities for ambitious brands seeking to push boundaries and drive meaningful impact. Our integrated digital marketing strategies help transform our clients from market players to market leaders and, most importantly, keep them there.</p>
				<p>Whether it's SEO writing, we pride ourselves on our creativity. We're here to give you the best in digital content production.</p>
				<img src="marketing.jpeg" alt="Marketing photo" className="section-img"/>
			</section>
			<div className="squiggle-container">
				<img src="/squiggle.svg" alt="squiggle" className="squiggle" />
			</div>
			<section className="section">
				<h2>Testimonials.</h2>
				<p>At Joos, we strive to give you the best in digital marketing solutions.
				<br/>At Joos, we pride ourselves on our creativity.
				We’re here to give you the best in digital content production.
				</p>
				<img src="marketing.jpeg" alt="Marketing photo" className="section-img"/>
			</section>
			<div className="squiggle-container">
				<img src="/squiggle.svg" alt="squiggle" className="squiggle" />
			</div>
		</div>
	);
}

export default LandingPage;