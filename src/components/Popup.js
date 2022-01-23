import React, { useState, useCallback } from 'react';
import './Popup.css';
import { useModal } from 'react-hooks-use-modal';
import project1 from '../images/foster.png';
import github from '../images/github.svg';
import hyperlink from '../images/hyperlink.png';

const PopupFoster = () => {
	const [Modal, open, close, isOpen] = useModal('root', {
		preventScroll: false,
		closeOnOverlayClick: false,
	});
	return (
		<div>
			<button className="learn-more" onClick={open}>
				Learn More
			</button>
			<Modal>
				<div className="Modal-Container">
					<button className="Modal-Button" onClick={close}>
						X
					</button>
					<div className="links">
						<a href="https://github.com/BloomTech-Labs/foster-together-fe">
							<img className="hyperlink" src={github} />
						</a>
						<a>
							<img className="hyperlink" src={hyperlink} />
						</a>
					</div>

					<h1 className="Popup-Title">Foster Together Project</h1>

					<section className="Modal-Content">
						<p className="Modal-Text">
							A react app that was built to help a nonprofit organization called
							Foster Together that connects foster families to volunteers (or
							"neighbors") in their area that can help with various tasks like
							cooking and transportation. The main problem this app was going to
							solve was that the organization had data scattered into multiple
							emails and spreadsheets, making it difficult to keep track of
							neighbors and foster family information. So, by building this
							application our main goals was to streamline the process for
							volunteer and family sign up, make it easier for the admins to
							view and interact with data, and automate the matching process.
						</p>
						<img className="image" src={project1} />
					</section>

					<ul className="Modal-List">
						<li>React</li>
						<li>Redux</li>
						<li>Toolkit</li>
						<li>Styled-Components</li>
						<li>Formik</li>
						<li>React Router</li>
						<li>Node</li>
						<li>Express</li>
						<li>Knex</li>
						<li>PostgresSQL</li>
						<li>MapBox</li>
					</ul>
				</div>
			</Modal>
		</div>
	);
};

export default PopupFoster;
