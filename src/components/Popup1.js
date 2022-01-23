import React, { useState, useCallback } from 'react';
import './Popup.css';
import { useModal } from 'react-hooks-use-modal';
import project2 from '../images/sautiAfrica.png';
import github from '../images/github.svg';
import hyperlink from '../images/hyperlink.png';

const PopupSauti = () => {
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
						<a href="https://github.com/Build-Week-African-Marketplace-4/Front-End">
							<img className="hyperlink" src={github} />
						</a>
						<a href="https://lucid-beaver-323918.netlify.app/">
							<img className="hyperlink" src={hyperlink} />
						</a>
					</section>
					<h1>African Marketplace</h1>

					<section className="Modal-Content">
						<p className="Modal-Text">
							A react app that was built during a build week where my classmate
							and I built the front end of the application. In order to build
							this appliaction I had to focus on CRUD; create, read, update, and
							delate. I built a register and login page that allowed you to
							create your own account, with access to that the features that you
							were enabled to do are creating a post for an item that you would
							like to sell on the marketplace. After doing so, it was then
							uploaded to a database and your item would be shown on the
							marketplace where everyone elses items are posted.
						</p>
						<img className="image" src={project2} />
					</section>

					<ul className="Modal-List">
						<li>React</li>
						<li>Material-UI</li>
						<li>Formik</li>
						<li>React Router</li>
						<li>SQLite</li>
						<li>Axios</li>
					</ul>
				</div>
			</Modal>
		</div>
	);
};

export default PopupSauti;
