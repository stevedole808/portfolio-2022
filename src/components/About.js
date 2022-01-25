import React from 'react';
import './About.css';
import steve from '../images/mypic.jpeg';
import Fade from 'react-reveal/Fade';
function About() {
	return (
		<div className="About" id="about">
			<div className="About-Container">
				<Fade top>
					<section className="About-Section">
						<h1 className="Header">About Me</h1>
						<p className="Body">
							Hey, nice to meet you! My name is Steve Dole and I enjoy creating
							things on the internet. My passion for web development started in
							the summer of 2019 when I joined a summer camp that was built
							around entrepreneurship, tech, and leadership. At this bootcamp I
							learned a lot and one of my biggest takeaways was that the world
							was moving into such a technical aspect. I started to dabble with
							Javascript and quickly became fond of the language. This is when I
							decided to take the big leap, I decided to disenroll from college
							and join a bootcamp instead.
						</p>
						<p className="Body">
							Fastforward to today, and I've completed that bootcamp, spend time
							working on side projects, and working on my craft. While being in
							the tech field, I've learned a lot and continue to do so...I'd
							like to say that one of my hobbies is learning. Being in tech
							allows you to do that on a daily basis.
						</p>
						<p className="List">
							Here are a few technologies I've worked with.
						</p>
						<ul className="Tech-Lists">
							<li>React</li>
							<li>Redux</li>
							<li>Javascript</li>
							<li>HTML {'&'} CSS</li>
							<li>Node.js</li>
							<li>PostgresSQL</li>
							<li>SQL</li>
							<li>Auth0 {'&'} oAuth</li>
						</ul>
					</section>
					<section className="Profile-Container">
						<Fade right>
							<img className="Profile-Pic" src={steve} />
						</Fade>
					</section>
				</Fade>
			</div>
		</div>
	);
}

export default About;
