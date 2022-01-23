import React from 'react';
import {
	SideBarContainer,
	Icon,
	CloseIcon,
	SideBarWrapper,
	SideBarLink,
	SideBarMenu,
	Resume,
} from './SideBarStyles.js';
import resume from '../images/resume.pdf';

const SideBar = ({ isOpen, toggle }) => {
	return (
		<SideBarContainer isOpen={isOpen} onClick={toggle}>
			<Icon onClick={toggle}>
				<CloseIcon />
			</Icon>
			<SideBarWrapper>
				<SideBarMenu>
					<SideBarLink to="home" onClick={toggle}>
						About
					</SideBarLink>
					<SideBarLink to="about" onClick={toggle}>
						About
					</SideBarLink>
					<SideBarLink to="work" onClick={toggle}>
						Work
					</SideBarLink>
					<SideBarLink to="contact" onClick={toggle}>
						Contact
					</SideBarLink>
					<SideBarLink to="resume">
						<Resume target="_blank" href={resume}>
							Resume
						</Resume>
					</SideBarLink>
				</SideBarMenu>
			</SideBarWrapper>
		</SideBarContainer>
	);
};

export default SideBar;
