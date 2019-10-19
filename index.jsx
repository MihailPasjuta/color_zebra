import React from 'react';
import ReactDOM from 'react-dom';
import PhotoGallery from './photogallery';



	export default class Full_component extends React.Component{
		render(){
			return(
				<PhotoGallery/>
			)
		}
	}
	

ReactDOM.render((
	<Full_component/>
	), document.getElementById('root'));