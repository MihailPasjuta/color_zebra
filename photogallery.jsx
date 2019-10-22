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

const IMAGES1 =
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
		}
	]
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
  value: PropTypes.any.isRequired,
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
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
					<div className="gallery_grid"><Gallery images={IMAGES}/></div>
				  </TabPanel>
				  <TabPanel value={value} index={1}>
					<div className="gallery_grid"><Gallery images={IMAGES1}/></div>
				  </TabPanel>
				  <TabPanel value={value} index={2}>
					<div className="gallery_grid"><Gallery images={IMAGES}/></div>
				  </TabPanel>
				</div>
				
			</div>
	</div>
  );
}