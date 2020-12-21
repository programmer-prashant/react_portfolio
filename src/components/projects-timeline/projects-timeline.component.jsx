import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline';

// projects
import L_CoronaTracker from '../../assets/img/projects/corona_tracker2.JPG';
import L_Hobbies from '../../assets/img/projects/Hobbies.JPG';
import L_GetGitHubInfo from '../../assets/img/projects/get_github_info.JPG';
import L_Student_Bio from '../../assets/img/projects/Student_Bio.JPG';
import L_Netflix_clone from '../../assets/img/projects/Netflix_clone.JPG';
import L_ProductHuntClone from '../../assets/img/projects/Corona_Tracker_Major.JPG';
import eCommerce from '../../assets/img/projects/eCommerce.JPG';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

// skills
import L_REACT from '../../assets/img/skills/react.svg';
import L_NODE_JS from '../../assets/img/skills/nodejs.svg';
import L_EXPRESS from '../../assets/img/skills/express.svg';
import L_POSTGRESQL from '../../assets/img/skills/postgresql.svg';
import L_MONGODB from '../../assets/img/skills/mongodb.svg';
import Image from 'react-bootstrap/Image';
import L_REDUX from '../../assets/img/skills/redux.svg';
import firebase from '../../assets/img/skills/firebase.png';
import L_HTML5 from '../../assets/img/skills/html-5.svg';
import L_CSS3 from '../../assets/img/skills/css3.svg';
import L_BOOTSTRAP4 from '../../assets/img/skills/bootstrap-4.svg';
import L_DJANGO from '../../assets/img/skills/django.svg';
import L_DIGITAL_OCEAN from '../../assets/img/skills/digital-ocean.svg';
import L_GIT from '../../assets/img/skills/github-api.svg';
import L_MATERIALUI from '../../assets/img/skills/material-ui-1.svg';
import L_React_Router_Dom from '../../assets/img/skills/react-router.svg';

import './projects-timeline.styles.css';

const TimeLine = () => {
	return (
		<div id='projects'>
			<h1 className='pt-3 text-center font-details-b pb-3'>PROJECTS</h1>
			<Timeline>
				<Events>
					{/* Project: CoronaTracker mini project */}
					<ImageEvent
						date='14/04/2020'
						className='text-center'
						text='COVID-19 Tracker'
						src={L_CoronaTracker}
						alt='COVID-19 Tracker'
					>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> This is a Corona Tracker
												App created with React, react-chartjs-2, classnames,
												chart.js and react-countup that Keeps track of
												Infected,Recovered and Deaths count of corona cases
												worldwide as well as countrywide
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>
														Keeps track of Infected,Recovered and Deaths count
														of corona cases worldwide as well as countrywide
													</li>
													<li>Powered by React and Material UI</li>
													<li>Respoisive Design</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_HTML5}
																alt='HTML 5'
																rounded
																className='image-style m-1'
															></Image>{' '}
															HTML5
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_CSS3}
																alt='CSS 3'
																rounded
																className='image-style m-1'
															></Image>{' '}
															CSS3
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_MATERIALUI}
																alt='Material-UI'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															Material-UI
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								<UrlButton
									href='https://myreact-covid-tracker.netlify.app/'
									target='_blank'
								>
									SEE LIVE
								</UrlButton>
								<UrlButton
									href='https://github.com/programmer-prashant/Covid-19-tracker-react'
									target='_blank'
								>
									SOURCE CODE
								</UrlButton>
								<UrlButton
									href='https://www.linkedin.com/posts/prashant-raut-47585a184_corona-reactjs-activity-6746675309246078976-pzxQ/'
									target='_blank'
								>
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: MERN Create Hobbies */}
					<ImageEvent
						date='16/09/2020'
						className='text-center'
						text='MERN Create Hobbies'
						src={L_Hobbies}
						alt='MERN Tip Calculator'
					>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> This app Creates the post,
												you can perform CURD operation on the post and you can
												like the post. It uses MERN stack build to acomplish the
												same.
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>CURD Operation</li>
													<li>MERN Stack</li>
													<li>Styled with Material-UI</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_NODE_JS}
																alt='Node.js'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															Node.js
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_EXPRESS}
																alt='Express'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															Express
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_MONGODB}
																alt='MongoDB'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															MongoDB
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_MATERIALUI}
																alt='Material-UI'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															Material-UI
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								<UrlButton
									href='https://hobbies-project.netlify.app/'
									target='_blank'
								>
									SEE LIVE
								</UrlButton>
								<UrlButton
									href='https://github.com/programmer-prashant/hobbies'
									target='_blank'
								>
									SOURCE CODE
								</UrlButton>
								<UrlButton
									href='https://www.linkedin.com/posts/prashant-raut-47585a184_hobbies-mern-stack-project-activity-6746650331087802369-fyp4/'
									target='_blank'
								>
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: Get GitHub Info */}
					<ImageEvent
						date='19/07/2020'
						className='text-center'
						text='Get GitHub Info'
						src={L_GetGitHubInfo}
						alt='Get GitHub Info'
					>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> An app that searches
												people on GitHub with non-private account and see all
												their details using GitHub API
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>Search any Github profile</li>
													<li>Real-time API calls</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_HTML5}
																alt='HTML 5'
																rounded
																className='image-style m-1'
															></Image>{' '}
															HTML5
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_CSS3}
																alt='CSS 3'
																rounded
																className='image-style m-1'
															></Image>
															CSS3
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'
															></Image>
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_MATERIALUI}
																alt='Material-UI'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															Material-UI
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_GIT}
																alt='Github API'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															GitHub API
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								<UrlButton
									href='https://react-search-githubusers.netlify.app/'
									target='_blank'
								>
									SEE LIVE
								</UrlButton>
								<UrlButton
									href='https://github.com/programmer-prashant/react-search-githubusers'
									target='_blank'
								>
									SOURCE CODE
								</UrlButton>
								<UrlButton
									href='https://www.linkedin.com/posts/prashant-raut-47585a184_github-reactjs-activity-6746673975260266496-CKSM/'
									target='_blank'
								>
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: Student_Bio */}
					<ImageEvent
						date='21/05/2020'
						className='text-center'
						text='Student Information base'
						src={L_Student_Bio}
						alt='Student_Bio'
					>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> An app that create a new
												student profile and store it into database you can
												perform CURD operation on any student profile also
												projects contains othentication of user
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>Register new user</li>
													<li>Signin exiting user</li>
													<li>Keep tracks of entries for each user</li>
													<li>CURD operation</li>
													<li>Othentication</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_HTML5}
																alt='HTML 5'
																rounded
																className='image-style m-1'
															></Image>{' '}
															HTML5
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_CSS3}
																alt='CSS 3'
																rounded
																className='image-style m-1'
															></Image>
															CSS3
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'
															></Image>
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={firebase}
																alt='firebase'
																rounded
																className='image-style1 m-1'
															></Image>
															Firebase
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_React_Router_Dom}
																alt='React_Router_Dom'
																rounded
																className='image-style1 m-1'
															></Image>
															React Router DOM
														</span>
													</li>
												</ul>
												<hr />
												<em>
													<strong>SignUp/ Signin:</strong>
													<br />
													<br />
													You can <strong>register</strong> as new user or{' '}
													<strong>log in</strong> using the demo account below.
													<br />
													<br />
													<strong>Demo Account Details:</strong>
													<br />
													email: user@example.com
													<br />
													password: user@123
												</em>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								<UrlButton href='https://student-bio.web.app/' target='_blank'>
									SEE LIVE
								</UrlButton>
								<UrlButton
									href='https://github.com/programmer-prashant/student_bio'
									target='_blank'
								>
									SOURCE CODE
								</UrlButton>
								<UrlButton
									href='https://www.linkedin.com/posts/prashant-raut-47585a184_student-info-project-using-reactjs-firebase-activity-6746680036390248448-kzuy/'
									target='_blank'
								>
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: Netflix Clone */}

					<ImageEvent
						date='14/08/2020'
						className='text-center'
						text='Netflix Clone'
						src={L_Netflix_clone}
						alt='Netflix Clone'
					>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> An Netflix clone app that
												fetch the real time netflix api and shows the movie
												trailler to the user using react-youtube npm package
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>Real time netflix API call</li>
													<li>Firebase</li>
													<li>Mobile responsive</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_HTML5}
																alt='HTML 5'
																rounded
																className='image-style m-1'
															></Image>
															HTML5
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_CSS3}
																alt='CSS 3'
																rounded
																className='image-style m-1'
															></Image>
															CSS3
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_BOOTSTRAP4}
																alt='Bootstrap 4'
																rounded
																className='image-style m-1'
															></Image>
															Bootstrap 4
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'
															></Image>
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={firebase}
																alt='Firebase'
																rounded
																className='image-style m-1'
															></Image>
															Firebase
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								<UrlButton
									href='https://netflix-clone-mini-project.web.app/'
									target='_blank'
								>
									SEE LIVE
								</UrlButton>
								<UrlButton
									href='https://github.com/programmer-prashant/netflix-clone-react'
									target='_blank'
								>
									SOURCE CODE
								</UrlButton>
								<UrlButton
									href='https://www.linkedin.com/posts/prashant-raut-47585a184_reactjs-html-css-activity-6746688485643685888-jDPC/'
									target='_blank'
								>
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: Corona Tracker Major */}

					<ImageEvent
						date='30/10/2020'
						className='text-center'
						text='Corona Tracker Major React Project'
						src={L_ProductHuntClone}
						alt='Corona Tracker'
					>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> This website is a corona
												tracker it will show the real time covid-19 cases
												worldwide and countrywide also shows the worldwide map
												and map switches according to country search
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>Realtime Corona cases</li>
													<li>Covid-19 API call</li>
													<li>countrywide results of cases</li>
													<li>Map rendering</li>
													<li>Material UI</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_HTML5}
																alt='HTML 5'
																rounded
																className='image-style m-1'
															></Image>
															HTML5
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_CSS3}
																alt='CSS 3'
																rounded
																className='image-style m-1'
															></Image>
															CSS3
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_BOOTSTRAP4}
																alt='Bootstrap 4'
																rounded
																className='image-style m-1'
															></Image>
															Bootstrap 4
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'
															></Image>
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={firebase}
																alt='Firebase'
																rounded
																className='image-style m-1'
															></Image>
															Firebase
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_MATERIALUI}
																alt='Material-UI'
																rounded
																className='image-style1 m-1'
															></Image>{' '}
															Material-UI
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								<UrlButton
									href='https://covid-tracker-pr.web.app/'
									target='_blank'
								>
									SEE LIVE
								</UrlButton>
								<UrlButton
									href='https://github.com/programmer-prashant/Corono-tracker-react'
									target='_blank'
								>
									SOURCE CODE
								</UrlButton>
								<UrlButton
									href='https://www.linkedin.com/posts/prashant-raut-47585a184_corona-tracker-using-reactjs-and-firebase-activity-6746695072802316288-BR1A'
									target='_blank'
								>
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>

					{/* Project: eCommerce */}
					<ImageEvent
						date='07/12/2020'
						className='text-center'
						text='eCommerce Project'
						src={eCommerce}
						alt='eCommerce'
					>
						<div className='d-flex justify-content-between flex-column mt-1'>
							<div>
								<Accordion>
									<Card>
										<Accordion.Toggle
											as={Card.Header}
											eventKey='0'
											className='p-2 text-center accordian-main'
										>
											PROJECT DETAILS
										</Accordion.Toggle>

										<Accordion.Collapse eventKey='0' className='text-left'>
											<Card.Body>
												<strong>Description:</strong> This is full stack project
												uses react as front end and commerce.js as back end this
												project also uses the react-stripe-js for the payment of
												your orders you can add and remove the product from cart
												and you can order your products using real payment
												method
												<hr />
												<strong>Features:</strong>
												<ul className='list-styles pt-1'>
													<li>Add Products to cart</li>
													<li>E-commerce Project</li>
													<li>Real time payment method</li>
													<li>Two step React Form</li>
													<li>Mobile Responsive</li>
												</ul>
												<hr />
												<strong>Tech used:</strong>
												<ul>
													<li>
														<span className='p-2'>
															<Image
																src={L_HTML5}
																alt='HTML 5'
																rounded
																className='image-style m-1'
															></Image>
															HTML5
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_CSS3}
																alt='CSS 3'
																rounded
																className='image-style m-1'
															></Image>
															CSS3
														</span>
													</li>

													<li>
														<span className='p-2'>
															<Image
																src={L_REACT}
																alt='React'
																rounded
																className='image-style1 m-1'
															></Image>
															React
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_MATERIALUI}
																alt='Material-UI'
																rounded
																className='image-style1 m-1'
															></Image>
															Material-UI
														</span>
													</li>
													<li>
														<span className='p-2'>
															<Image
																src={L_React_Router_Dom}
																alt='React_Router_Dom'
																rounded
																className='image-style1 m-1'
															></Image>
															React Router DOM
														</span>
													</li>
												</ul>
											</Card.Body>
										</Accordion.Collapse>
									</Card>
								</Accordion>
							</div>
							<div className='d-flex justify-content-between flex-nowrap text-center'>
								<UrlButton
									href='https://e-commerce-pr.netlify.app/'
									target='_blank'
								>
									SEE LIVE
								</UrlButton>
								<UrlButton
									href='https://github.com/programmer-prashant/Corono-tracker-react'
									target='_blank'
								>
									SOURCE CODE
								</UrlButton>
								<UrlButton
									href='https://www.linkedin.com/posts/prashant-raut-47585a184_reactjs-commerce-activity-6746698060103077888-1KvS'
									target='_blank'
								>
									WATCH VIDEO
								</UrlButton>
							</div>
						</div>
					</ImageEvent>
				</Events>
			</Timeline>
		</div>
	);
};

export default TimeLine;
