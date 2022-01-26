import { makeStyles } from '@material-ui/core/styles';
import {
	Box,
	Grid,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from '@material-ui/core';
import project1 from '../images/foster.png';
import project2 from '../images/sautiAfrica.png';
import project3 from '../images/nba.png';
import { Link } from 'react-router-dom';
import PopupFoster from './Popup.js';
import PopupSauti from './Popup1';
import PopupNBA from './Popup2';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
const useStyles = makeStyles((theme) => ({
	mainContainer: {
		backgroundColor: 'black',
		height: '100vh',
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		['@media (max-width: 768px)']: {
			height: '100%',
		},
	},
	cardContainer: {
		maxWidth: 300,
		margin: '1rem auto',
	},
	cards: {
		padding: '0px 100px',
	},
	header: {
		display: 'flex',
		justifyContent: 'center',
		fontSize: '1.5rem',
		color: '#ADD8E6',
		margin: 0,
		paddingBottom: '50px',
	},
	image: {
		height: '10rem',
		margin: '1rem 2rem',
		display: 'flex',
		justifyContent: 'center',
		width: '80%',
		objectFit: 'contain',
		['@media (max-width: 1100px)']: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			margin: '0 auto',
		},
	},

	cardTitle: {
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		flexDirection: 'column',
		alignItems: 'center',
	},
	title: {
		['@media (max-width:800px)']: {
			fontSize: '18px',
		},
	},
	subtext: {
		['@media (max-width:800px)']: {
			fontSize: '12px',
		},
	},
}));

function Projects() {
	const classes = useStyles();

	return (
		<Box id="work" component="div" className={classes.mainContainer}>
			<h1 className={classes.header}>SOME OF MY PROJECTS</h1>
			<Grid
				container
				justify="center"
				alignItems="center"
				className={classes.cards}
			>
				{/* Project 1 */}
				<Grid item xs={12} sm={4} md={4}>
					<Fade left>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
									className={classes.image}
									component="img"
									alt="Project 1"
									height="140"
									image={project1}
								/>
								<CardContent className={classes.cardTitle}>
									<Typography
										gutterBottom
										variant="h5"
										className={classes.title}
									>
										Foster Together
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
										className={classes.subtext}
									>
										React App built with other classmates at lambda school for a
										Labs Project.
									</Typography>
								</CardContent>
								<Box textAlign={'center'}>
									<Button>
										<PopupFoster />
									</Button>
								</Box>
							</CardActionArea>
						</Card>
					</Fade>
				</Grid>
				{/* Project 2 */}
				<Grid item xs={12} sm={4} md={4}>
					<Slide top>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Project 2"
									height="140"
									image={project2}
									className={classes.image}
								/>
								<CardContent className={classes.cardTitle}>
									<Typography
										gutterBottom
										variant="h5"
										className={classes.title}
									>
										African Marketplace
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
										className={classes.subtext}
									>
										React app built with other classmates at lambda school for a
										build week.
									</Typography>
								</CardContent>
								<Box textAlign={'center'}>
									<Button>
										<PopupSauti />
									</Button>
								</Box>
							</CardActionArea>
						</Card>
					</Slide>
				</Grid>
				{/* Project 3 */}
				<Grid item xs={12} sm={4} md={4}>
					<Fade right>
						<Card className={classes.cardContainer}>
							<CardActionArea>
								<CardMedia
									component="img"
									alt="Project 2"
									height="140"
									image={project3}
									className={classes.image}
								/>
								<CardContent className={classes.cardTitle}>
									<Typography
										gutterBottom
										variant="h5"
										className={classes.title}
									>
										NBA Career Predictor
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
										className={classes.subtext}
									>
										Landing page built with other classes at lambda for a build
										week.
									</Typography>
								</CardContent>
								<Box textAlign={'center'}>
									<Button>
										<PopupNBA />
									</Button>
								</Box>
							</CardActionArea>
						</Card>
					</Fade>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Projects;
