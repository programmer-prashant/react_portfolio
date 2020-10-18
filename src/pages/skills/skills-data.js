import L_HTML5 from '../../assets/img/skills/html-5.svg';
import L_CSS3 from '../../assets/img/skills/css3.svg';
import L_SASS from '../../assets/img/skills/sass-1.svg';
import L_BOOTSTRAP from '../../assets/img/skills/bootstrap-4.svg';
import L_REACT from '../../assets/img/skills/react.svg';
import L_REDUX from '../../assets/img/skills/redux.svg';
import L_REACT_ROUTER from '../../assets/img/skills/react-router.svg';
import L_MATERIALUI from '../../assets/img/skills/material-ui-1.svg';
import L_REACT_BOOTSTRAP from '../../assets/img/skills/react-bootstrap.svg';
import L_STYLED_COMPONENTS from '../../assets/img/skills/styled-components.svg';
import L_NODE_JS from '../../assets/img/skills/nodejs.svg';
import L_EXPRESS from '../../assets/img/skills/express.svg';
import L_JAVA from '../../assets/img/skills/java.png';
import L_SPRING from '../../assets/img/skills/spring.png';
import L_MONGODB from '../../assets/img/skills/mongodb.svg';
import L_POSTGRESQL from '../../assets/img/skills/postgresql.svg';
import L_MSSQL from '../../assets/img/skills/mssql.svg';
import L_GIT from '../../assets/img/skills/git-icon.svg';
import L_HEROKU from '../../assets/img/skills/heroku.svg';
import L_SERVLET from '../../assets/img/skills/servlet.png';
import L_GITHUB_PAGES from '../../assets/img/skills/github.svg';
import L_JAVASCRIPT from '../../assets/img/skills/javascript.svg';
import L_TYPESCRIPT from '../../assets/img/skills/typescript.svg';
import L_CPROG from '../../assets/img/skills/cprog.png';
import L_WINDOW from '../../assets/img/skills/window.png';
import L_MAC from '../../assets/img/skills/mac.svg';

export const skills = {
	frontend: [
		{
			link: 'https://en.wikipedia.org/wiki/HTML5',
			imgAltText: 'HTML 5',
			imgSrc: L_HTML5,
			skillName: 'HTML5',
		},
		{
			link:
				'https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1',
			imgAltText: 'CSS 3',
			imgSrc: L_CSS3,
			skillName: 'CSS3',
		},
		{
			link: 'https://www.javascript.com/',
			imgAltText: 'JavaScript',
			imgSrc: L_JAVASCRIPT,
			skillName: 'JavaScript',
		},
		{
			link: 'https://sass-lang.com/',
			imgAltText: 'Sass',
			imgSrc: L_SASS,
			skillName: 'Sass',
		},
		{
			link: 'https://getbootstrap.com/',
			imgAltText: 'Bootstrap',
			imgSrc: L_BOOTSTRAP,
			skillName: 'Bootstrap',
		},
		{
			link: 'https://reactjs.org/',
			imgAltText: 'React JS',
			imgSrc: L_REACT,
			skillName: 'React JS',
		},
		{
			link: 'https://redux.js.org/',
			imgAltText: 'Redux',
			imgSrc: L_REDUX,
			skillName: 'Redux',
		},
		{
			link: 'https://reacttraining.com/react-router/',
			imgAltText: 'React Router',
			imgSrc: L_REACT_ROUTER,
			skillName: 'React Router',
		},
		{
			link: 'https://material-ui.com/',
			imgAltText: 'Material-UI',
			imgSrc: L_MATERIALUI,
			skillName: 'Material-UI',
		},
		{
			link: 'https://react-bootstrap.github.io/',
			imgAltText: 'React Bootstrap',
			imgSrc: L_REACT_BOOTSTRAP,
			skillName: 'React Bootstrap',
		},
		{
			link: 'https://styled-components.com/',
			imgAltText: 'styled-components',
			imgSrc: L_STYLED_COMPONENTS,
			skillName: 'styled-components',
		},
	],

	backend: [
		{
			link: 'https://nodejs.org/en/',
			imgAltText: 'Node.js',
			imgSrc: L_NODE_JS,
			skillName: 'Node.js',
		},
		{
			link: 'https://expressjs.com/',
			imgAltText: 'Express',
			imgSrc: L_EXPRESS,
			skillName: 'Express',
		},
		{
			link: 'https://www.java.com/',
			imgAltText: 'Java',
			imgSrc: L_JAVA,
			skillName: 'Java',
		},
		{
			link: 'https://spring.io/',
			imgAltText: 'Flask',
			imgSrc: L_SPRING,
			skillName: 'Spring',
		},
		{
			link: 'https://www.java.com/',
			imgAltText: 'Servlet',
			imgSrc: L_SERVLET,
			skillName: 'Servlet',
		},
	],

	hostingPlatforms: [
		{
			link: 'https://pages.github.com/',
			imgAltText: 'GitHub Pages',
			imgSrc: L_GITHUB_PAGES,
			skillName: 'GitHub Pages',
		},
	],

	operatingSystems: [
		{
			link: 'https://www.microsoft.com/en-in/windows',
			imgAltText: 'Windows',
			imgSrc: L_WINDOW,
			skillName: 'Windows',
		},
		{
			link: 'https://www.apple.com/in/macos/catalina/',
			imgAltText: 'mac',
			imgSrc: L_MAC,
			skillName: 'mac',
		},
	],

	programmingLanguages: [
		{
			link: 'https://www.w3schools.in/c-tutorial/',
			imgAltText: 'C Programming',
			imgSrc: L_CPROG,
			skillName: 'C Programming',
		},
		{
			link: 'https://www.javascript.com/',
			imgAltText: 'JavaScript',
			imgSrc: L_JAVASCRIPT,
			skillName: 'JavaScript',
		},
		{
			link: 'https://www.typescriptlang.org/',
			imgAltText: 'TypeScript',
			imgSrc: L_TYPESCRIPT,
			skillName: 'TypeScript',
		},
		{
			link: 'https://www.java.com/',
			imgAltText: 'Java',
			imgSrc: L_JAVA,
			skillName: 'java',
		},
	],
	databases: [
		{
			link: 'https://www.microsoft.com/en-us/sql-server/sql-server-2019',
			imgAltText: 'MS-SQL',
			imgSrc: L_MSSQL,
			skillName: 'MS-SQL',
		},
		{
			link: 'https://www.mongodb.com/',
			imgAltText: 'MongoDB',
			imgSrc: L_MONGODB,
			skillName: 'MongoDB',
		},
	],
	versionControl: [
		{
			link: 'https://git-scm.com/',
			imgAltText: 'GIT',
			imgSrc: L_GIT,
			skillName: 'GIT',
		},
	],
};
