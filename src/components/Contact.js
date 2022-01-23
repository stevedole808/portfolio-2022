import React from 'react';
import github from '../images/github.svg';
import './Contact.css';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiTwitter } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';

const Contact = () => {
	return (
		<div className="Contact-Container">
			<ul className="Contact">
				<li>
					<a
						target="_blank"
						className="list"
						href="https://github.com/stevedole808"
					>
						<FiGithub />
					</a>
				</li>

				<li>
					<a
						target="_blank"
						className="list"
						href="https://www.linkedin.com/in/steve-dole-a7a560189"
					>
						<FiLinkedin />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						className="list"
						href="https://www.instagram.com/steve.dole/"
					>
						<FiInstagram />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						className="list"
						href="https://twitter.com/dole101steve"
					>
						<FiTwitter />
					</a>
				</li>
				<div className="line" />
			</ul>
			<div className="email">stevedolelambda@gmail.com</div>
		</div>
	);
};

export default Contact;
