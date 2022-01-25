import React, { useState, useCallback } from 'react';
import './Popup.css';
import { useModal } from 'react-hooks-use-modal';
import project3 from '../images/nba.png';
import github from '../images/github.svg';
import hyperlink from '../images/hyperlink.png';

const PopupNBA = () => {
	const [Modal, open, close, isOpen] = useModal('root', {
		preventScroll: false,
		closeOnOverlayClick: false,
	});
	return (
		<div>
			<button onClick={open} className="learn-more">
				Learn More
			</button>
			<Modal>
				<div className="Modal-Container">
					<button className="Modal-Button" onClick={close}>
						X
					</button>
					<section className="links">
						<a href="https://github.com/Build-NBA-Career-Longevity-Predictor/user-interface">
							<img className="hyperlink" src={github} />
						</a>
						<a href="https://build-nba-career-longevity-predictor.github.io/user-interface/index.html">
							<img className="hyperlink" src={hyperlink} />
						</a>
					</section>
					<h1>NBA Career Predictor</h1>

					<section className="Modal-Content">
						<p className="Modal-Text">
							Me and another classmate built this landing page using HTML, CSS,
							and Less. It was a fun project and one of my first larger projects
							that taught me a lot about coding. At first it was a challenge,
							but as I built out the project I slowly learned that it was just
							the beggining of a lot more stuggle and hardships. But, I learned
							to love that because the joy that it brought me after tackling or
							completing a project is joy that I haven't found anywhere else.
							This project sticks out to me because it was the start of a
							passion that will last for many many years.
						</p>
						<img className="image" src={project3} />
					</section>

					<ul className="Modal-List">
						<li>HTML</li>
						<li>CSS</li>
						<li>Less</li>
					</ul>
				</div>
			</Modal>
		</div>
	);
};

export default PopupNBA;
