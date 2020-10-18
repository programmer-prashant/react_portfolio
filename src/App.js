import React from 'react';
import './App.css';

//Components
import MyNavbar from './components/Navbar/mynavbar.components';
import MyCarousel from './components/Carousel/myCarousel.component';
import TitleMessage from './components/title-message/title-message.component';
import ScrollDown from './components/scroll-down/scroll-down.component';
import About from './pages/about/about.component';
import { Parallax } from 'react-parallax';
import Container from "react-bootstrap/Container";
import Fade from "react-reveal/Fade";

const App = () => {
	return (
		<div className='App' style={{ position: 'relative' }}>
			<MyNavbar />
			<MyCarousel />
			<TitleMessage />
			<ScrollDown />
			<div>
				<Parallax
					blur={{ min: -30, max: 30 }}
					bgImage={require('./assets/img/parallex/background.webp')}
					bgImageAlt=''
					strength={-200}
				>
					<div>
						<Container className='container-box rounded'>
							<Fade duration={500}>
								<About />
							</Fade>
						</Container>
					</div>
				</Parallax>
			</div>
		</div>
	);
};

export default App;
