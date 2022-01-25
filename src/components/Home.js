import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid } from '@material-ui/core';
import Typed from 'react-typed';
import './Home.css';
import Fade from 'react-reveal/Fade';
const useStyles = makeStyles((theme) => ({
	home: {
		minHeight: '100vh',
		backgroundColor: 'black',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: '0px 150px',
		['@media (max-width: 768px)']: {
			height: '100vh',
			margin: '0 auto',
			padding: '0px',
			width: '100%',
			paddingLeft: '20px',
		},
	},
	typedContainer: {
		display: 'flex',
		justifyContent: 'left',
		margin: theme.spacing(1),
		marginTop: theme.spacing(10),
		top: 0,
		width: '100%',
	},

	subName: {
		transform: 'translate(20px, 85px) rotate(-30deg)',
		fontSize: '60px',
		color: 'white',
		['@media (max-width: 768px)']: {
			fontSize: '40px',
		},
	},
}));

function Home() {
	const classes = useStyles();
	return (
		<Grid className={classes.home} id="home">
			<Box className="Home-Container">
				<Fade top>
					<h2 className="title">Hi, my name is</h2>
				</Fade>
				<Fade top>
					<Typography variant="h4">
						<Typed
							className={classes.subName}
							strings={['Steve Dole.']}
							typeSpeed={20}
						/>
					</Typography>
				</Fade>
				<Fade top>
					<h1 className="subheader">
						I enjoy building and sometimes designing things for the web.
					</h1>
					<p className="content">
						I am a Full Stack Web Developer who has attended Lambda School.
						During my time there, I learned HTML, CSS, Javascript, React.js,
						Node.js, and Python. Please check out my projects and feel free to
						contact me! I currently reside in Oahu, Hawaii and relocation is
						always up for discussion, but if not I would be able to work
						remotely as well!
					</p>
					<p className="content-subtext">
						Feel free to send me an email(stevedolelambda@gmail.com) or fill out
						the contact form down below :)!
					</p>
				</Fade>
			</Box>
		</Grid>
	);
}

export default Home;
