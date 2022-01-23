import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box, Grid } from '@material-ui/core';
import Typed from 'react-typed';
import './Home.css';

const useStyles = makeStyles((theme) => ({
	home: {
		width: '100vw',
		height: '100vh',
		backgroundColor: 'black',
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
		fontSize: '50px',
		color: 'white',
	},
}));

function Home() {
	const classes = useStyles();
	return (
		<Grid className={classes.home} id="home">
			<Box className="Home-Container">
				<h2 className="title">Hi, my name is</h2>
				<Typography variant="h4">
					<Typed
						className={classes.subName}
						strings={['Steve Dole.']}
						typeSpeed={20}
					/>
				</Typography>
				<h1 className="subheader">
					I enjoy building and sometimes designing things for the web.
				</h1>
				<p className="content">
					I am a Full Stack Web Developer who has attended Lambda School. During
					my time there, I learned HTML, CSS, Javascript, React.js, Node.js, and
					Python. Please check out my projects and feel free to contact me! I
					currently reside in Oahu, Hawaii and relocation is always up for
					discussion, but if not I would be able to work remotely as well!
				</p>
				<p className="content-subtext">
					Feel free to send me an email(stevedolelambda@gmail.com) or fill out
					the contact form down below :)!
				</p>
			</Box>
		</Grid>
	);
}

export default Home;
