import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Card from 'react-bootstrap/Card';
import L_THINKQUOTIENT from '../../assets/img/experience/explogo.png';
import Tilt from 'react-tilt';
import './experience.styles.css';

const Experience = () => {
	return (
		<div id='experience'>
			<h1 className='pt-3 text-center font-details-b pb-3'>EXPERIENCE</h1>
			<Jumbotron className='jumbo-style'>
				<Container>
					<Tilt options={{ max: 25 }}>
						<Card>
							<Card.Header
								as='h5'
								className='d-flex justify-content-center flex-wrap bg-dark'
							>
								<Card.Img
									variant='top'
									className='img-resize'
									src={L_THINKQUOTIENT}
									alt='THINKQUOTIENT logo'
								/>
							</Card.Header>
							<Card.Body className='d-flex justify-content-center flex-column'>
								<div>
									<Card.Title className='text-center'>
										Associate Software Engineer
									</Card.Title>
								</div>
								<div>
									<Card.Text className='text-center style'>
										<strong className='body-title-style '>
											Full Stack Developer
										</strong>
										<br />
										<strong>Technology:</strong> Html, Css, Javascript, React
										JS, Java, NodeJs , Express Js, MongoDB, MySQL,
										<br />
										<strong>Duration:</strong>From Jan 2020 - Present
										<br />
										<strong> Description </strong>
										<ul className='text-left'>
											<li>
												<strong>Developed &amp; enhanced</strong> multiple
												features with customizability option across web
												application.
											</li>

											<li>
												<strong>Provided</strong> application maintenance while
												working as `Production Support`.
											</li>
											<li>
												<strong>Performed</strong> CRUD operations on multiple
												databases to load/ remove data according to the business
												requirements.
											</li>
										</ul>
									</Card.Text>
								</div>
							</Card.Body>
						</Card>
					</Tilt>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Experience;
