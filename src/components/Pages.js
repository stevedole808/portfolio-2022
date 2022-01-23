import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import SideBar from './SideBar';
import NavBar from './NavBar';
import Form from './Form';
import Contact from './Contact';

const Pages = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<SideBar isOpen={isOpen} toggle={toggle} />
			<NavBar toggle={toggle} />
			<Home />
			<About />
			<Projects />
			<Form />
			<Contact />
		</>
	);
};

export default Pages;
