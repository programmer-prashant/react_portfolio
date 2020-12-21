import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.styles.css';
import Profile from '../../assets/img/profile/profile.jpeg';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const About = () => {
	return (
		<div id='about'>
			<div className='about'>
				<h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
				<Container>
					<Row className='pt-3 pb-5 align-items-center'>
						<Col xs={12} md={6}>
							<Row className='justify-content-center mb-2 mr-2 '>
								<Image
									className='profile justify-content-end'
									alt='profile'
									src={Profile}
									thumbnail
									fluid
								/>
							</Row>
						</Col>
						<Col xs={12} md={6}>
							<Row className=' align-items-start p-2 my-details rounded'>
								Hi there! I am <strong>&nbsp;Prashant Raut</strong>
								<br />A passionate programmer and a Engineer, born and brought
								up in India. I am a Full Stack Web Developer with Javascript ,
								React.js, Express.js , Node.js , and MongoDB as my tech stack.
								<br />
								In 2018, I successfully completed my Engineering with
								specialization in 'Electronics and Telecommunication'.
								<br />
								Working with the clients, my goal is always driven towards
								providing amazing experience with the best level of quality and
								service to them.
								<br />
								along with that i also have ability to efficiently work under
								pressure, and i'm very particular about my schedule and always
								manage my time efficiently.
								<br />I love learning about new technologies, what problems are
								they solving and How can I use them to build better and scalable
								products.
								<br /> <br />
								<Col className='d-flex justify-content-center flex-wrap'>
									<div>
										<a href='#contact'>
											<Button className='m-2' variant='outline-primary'>
												Let's talk
											</Button>
										</a>
									</div>
									<div>
										<a href='#' target='_blank' rel='noopener noreferrer'>
											<Button className='m-2' variant='outline-success'>
												My Resume
											</Button>
										</a>
									</div>
									<div>
										<a
											href='https://github.com/programmer-prashant'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button className='m-2' variant='outline-dark'>
												GitHub
											</Button>
										</a>
									</div>
									<div>
										<a
											href='https://www.linkedin.com/in/prashant-raut-47585a184/'
											target='_blank'
											rel='noopener noreferrer'
										>
											<Button className='m-2' variant='outline-info'>
												LinkedIn
											</Button>
										</a>
									</div>
								</Col>
							</Row>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	);
};

export default About;
