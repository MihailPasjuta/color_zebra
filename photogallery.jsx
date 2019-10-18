import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./css/style.css"
import Gallery from 'react-grid-gallery';
import Logo from './images/zebra_logo.jpg';
import Facebook from './images/fb-logo.png';

const IMAGES =
	[
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
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
				src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
				thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
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
				src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
				thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212
		},
		{
				src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
				thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
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
				src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
				thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
				thumbnailWidth: 320,
				thumbnailHeight: 212
		}
			
	]

	export default class PhotoGallery extends React.Component{
		render(){
			return(
				<div className="formPhoto">
					<div className="head_menu_block">
						<div className="logos">
							<img src={Logo} className="logos"/>
						</div>
						<div className="menu">
							<nav className="menu_nav" role="navigation">
							  <ul className="menu_ul">
								<li className="menu_li"><a className="menu_link" href="#">Про нас</a></li>
								<li className="menu_li"><a className="menu_link" href="#">Педагоги</a></li>
								<li className="menu_li"><a className="menu_link" href="#">Навчання</a></li>
								<li className="menu_li"><a className="menu_link" href="#">Фото та відео</a>
									<ul className="dropdown menu_ul">
										<li className="menu_li">Фото</li>
										<li className="menu_li"><a className="menu_link" href="#">Відео</a></li>
									</ul>
								</li>
								<li className="menu_li"><a className="menu_link" href="#">Контакти</a></li>
							  </ul>
							</nav>
						</div>
						<div className="social">
							<div className="social_logo_div">
								<a target="_blank" href="https://www.facebook.com/kolorovazebra.fastiv/">
									<img className="social_logo" src={Facebook}/>
								</a>
							</div>
						</div>
					</div>
					
					<div className="galleryBlock">
						<Gallery images={IMAGES}/>
					</div>
				</div>
			)
		}
	}