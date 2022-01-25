import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
	Nav,
	NavBarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	Resume,
} from './NavBarStyles.js';
import resume from '../images/resume.pdf';
import Fade from 'react-reveal/Fade';
const NavBar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};
	return (
		<>
			<IconContext.Provider value={{ color: '#fff' }}>
				<Nav scrollNav={scrollNav}>
					<NavBarContainer>
						<NavLogo onClick={toggleHome}>Home</NavLogo>
						<MobileIcon onClick={toggle}>
							<FaBars />
						</MobileIcon>
						<NavMenu>
							<Fade top>
								<NavItem>
									<NavLinks
										to="about"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
									>
										About
									</NavLinks>
								</NavItem>
							</Fade>
							<Fade top>
								<NavItem>
									<NavLinks
										to="work"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
									>
										Work
									</NavLinks>
								</NavItem>
							</Fade>
							<Fade top>
								<NavItem>
									<NavLinks
										to="contact"
										smooth={true}
										duration={500}
										spy={true}
										exact="true"
										offset={-80}
									>
										Contact
									</NavLinks>
								</NavItem>
							</Fade>
							<Fade top>
								<Resume className="resume" href={resume}>
									Resume
								</Resume>
							</Fade>
						</NavMenu>
					</NavBarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default NavBar;
