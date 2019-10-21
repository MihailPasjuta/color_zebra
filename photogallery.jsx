import React from 'react';
import PropTypes from 'prop-types';
import Gallery from 'react-grid-gallery';
import Logo from './images/zebra_logo.jpg';
import Facebook from './images/fb-logo.png';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from "./css/gallery.css";
import Grid from '@material-ui/core/Grid';
import Popper from '@material-ui/core/Popper';

const IMAGES =
	[
		{
				src: "https://scontent.fiev21-1.fna.fbcdn.net/v/t1.0-9/50201663_2263797273892819_4603835599894347776_n.jpg?_nc_cat=109&_nc_oc=AQnauFZpCbS5M7aClG1GizpG6qURZvLX9iiZkME7OOw9XcSPEBzzIaUfGSZ_u4nUDK0&_nc_ht=scontent.fiev21-1.fna&oh=d6599c801cb3c7799178e7f74aad9db6&oe=5E1D0D1F",
				thumbnail: "https://scontent.fiev21-1.fna.fbcdn.net/v/t1.0-9/50201663_2263797273892819_4603835599894347776_n.jpg?_nc_cat=109&_nc_oc=AQnauFZpCbS5M7aClG1GizpG6qURZvLX9iiZkME7OOw9XcSPEBzzIaUfGSZ_u4nUDK0&_nc_ht=scontent.fiev21-1.fna&oh=d6599c801cb3c7799178e7f74aad9db6&oe=5E1D0D1F",
				thumbnailWidth: 200,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 174,
		},
		{
				src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212,
		}
	
	]
	
const useStyles_grid = makeStyles(theme => ({
  root_grid: {
    flexGrow: 2,
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function PhotoGallery() {
	const classes_grid = useStyles_grid();
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
	<div className="formPhoto">
				<div className="galleryBlock">
					<div className={classes.root}>
					  <AppBar position="static" color="default">
						<Tabs
						  value={value}
						  onChange={handleChange}
						  indicatorColor="primary"
						  textColor="primary"
						  variant="scrollable"
						  scrollButtons="auto"
						  aria-label="scrollable auto tabs example"
						>
						  <Tab label="Item One" {...a11yProps(0)} />
						  <Tab label="Item Two" {...a11yProps(1)} />
						  <Tab label="Item Three" {...a11yProps(2)} />
						</Tabs>
					  </AppBar>
					  <TabPanel value={value} index={0}>
						<Gallery images={IMAGES}/>
					  </TabPanel>
					  <TabPanel value={value} index={1}>
						Item Two
					  </TabPanel>
					  <TabPanel value={value} index={2}>
						<Gallery images={IMAGES}/>
					  </TabPanel>
					</div>
				</div>
				<div className="gallery_item">ВІДЕО</div>
				
					<div className={classes.root}>
						<Grid container spacing={3}>
							<Grid item xs={2}>
							  <div aria-describedby={id} onClick={handleClick}>
								<img src="https://li1.rightinthebox.com/images/50x50/201812/aardar1545709115855.jpg"/>
							  </div>
							  <Popper id={id} open={open} anchorEl={anchorEl}>
								<iframe width="500" height="280" src="https://www.youtube.com/embed/ptTM4o1O1v0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							  </Popper>
							</Grid>
						</Grid>
					</div>
				
				
	</div>
  );
}