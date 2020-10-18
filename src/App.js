import React from 'react';
import MyNavbar from './components/Navbar/mynavbar.components';
import MyCarousal from './components/Carousel/myCarousel.component';
import MyTitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Skills from './pages/skills/skills.component';
import Container from 'react-bootstrap/Container';
import TimeLine from './components/projects-timeline/projects-timeline.component';
import Experience from './pages/experience/experience.component';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ContactForm from './pages/contact-form/contact-form.component';
import { Parallax } from 'react-parallax';
import FooterPanel from './components/footer/footer.component';

import './App.css';

const App = () => {
	return (
		<div className='App' style={{ position: 'relative' }}>
			<MyNavbar />
			<MyCarousal />
			<MyTitleMessage />

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

			<Container className='container-box rounded'>
				<Slide bottom duration={500}>
					<hr />
					<Skills />
				</Slide>
			</Container>

			<Container className='container-box rounded'>
				<Fade duration={500}>
					<hr />

					<Experience />
				</Fade>
			</Container>

			<Container className='container-box rounded'>
				<Slide bottom duration={500}>
					<hr />
					<TimeLine />
				</Slide>
			</Container>

			<Container className='container-box rounded'>
				<Fade duration={500}>
					<hr />
					<ContactForm />
				</Fade>
			</Container>

			<hr />
			<FooterPanel />
		</div>
	);
};

export default App;
