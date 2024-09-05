import postgresicon from "../../assets/icons/postgresql.png";
import mysqlicon from "../../assets/icons/mysql.svg";
import azureicon from "../../assets/icons/azure.svg";
import kubernetesicon from "../../assets/icons/kubernetes.webp";
import dockericon from "../../assets/icons/docker.png";
import jenkinsicon from "../../assets/icons/jenkins.png";
import awsicon from "../../assets/icons/aws.webp";
import pythonicon from "../../assets/icons/python.svg";
import golangicon from "../../assets/icons/golang.png";
import redisicon from "../../assets/icons/redis.png";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import htmxicon from "../../assets/icons/htmx.png";
import apiicon from "../../assets/icons/apiicon.svg";
import profilepicture from "../img/me2.webp";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
import cybersecCert from "../../assets/icons/certificates/cybersec.jpg";
import dockerCert from "../../assets/icons/certificates/docker.jpg";
import hackingCert from "../../assets/icons/certificates/ethical-hacking.jpg";
import golangCert from "../../assets/icons/certificates/golang.jpg";
import blockchainCert from "../../assets/icons/certificates/blockchain.jpg";
import jsCert from "../../assets/icons/certificates/javascript.jpg";
import kubBegCert from "../../assets/icons/certificates/kubernetes-beginner.jpg";
import mlCert from "../../assets/icons/certificates/ml.jpg";
import nextJsCert from "../../assets/icons/certificates/nextjs.jpg";
import webSecCert from "../../assets/icons/certificates/web-security.jpg";
import grpcCert from "../../assets/icons/certificates/grpc.jpg";
import { GoHome, GoPerson, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export const headerIntroData = {
	title: {
		de: "Hi, ich bin Numan Burak",
		en: "Hi, I'm Numan Burak",
	},
	subtitle: "Fullstack Developer ",
	description: {
		de: "Ich bin Numan Burak, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
		en: "I'm Numan Burak, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
	},
	buttons: [
		{
			name: "Projects",
			label: {
				de: "Meine Projekte",
				en: "My Projects",
			},
			icon: FiGithub,
			color: "secondary-btn",
		},
	],
	profilepicture: profilepicture,
} as const;

export const projectsData = [
	{
		title: "Soil Prime",
		description:
			"SoilPrime ist eine anspruchsvolle cloudbasierte Plattform, die speziell für geotechnische Ingenieuranwendungen entwickelt wurde. Die Plattform beherbergt derzeit sechs spezialisierte Anwendungen, die sorgfältig ausgearbeitet wurden, um verschiedene Aspekte der geotechnischen Analyse und des Designs abzudecken. Das Frontend wurde mit Next.js und Tailwind CSS entwickelt und bietet eine nahtlose und reaktionsschnelle Benutzererfahrung. Jede Anwendung wird als Microservice bereitgestellt, um Skalierbarkeit und Wartbarkeit zu gewährleisten. Die Backend-Dienste werden von einer Kombination aus Go und Python betrieben, wodurch die Stärken beider Sprachen für Hochleistungsberechnungen und eine robuste Datenverarbeitung genutzt werden. Ich bin der Teamleiter und Full-Stack-Entwickler dieses Projekts. Überprüfen Sie es unter https://tr.soilprime.com.",
		description_EN:
			"SoilPrime is a sophisticated cloud-based platform designed specifically for geotechnical engineering applications. The platform currently hosts six specialized applications, each meticulously crafted to address various aspects of geotechnical analysis and design. The frontend is developed using Next.js and Tailwind CSS, offering a seamless and responsive user experience. And each application is deployed as a microservice, ensuring scalability and maintainability. The backend services are powered by a combination of Go and Python, leveraging the strengths of both languages for high-performance computation and robust data handling. I am the team leader as full stack developer of this project. Check it from https://tr.soilprime.com",
		technologies: [
			{ name: "Html", icon: htmlicon },
			{ name: "CSS", icon: cssicon },
			{ name: "JavaScript", icon: javascripticon },
			{ name: "REST Api", icon: apiicon },
			{ name: "Tailwind", icon: tailwindcssicon },
			{ name: "Golang", icon: golangicon },
			{ name: "Python", icon: pythonicon },
			{ name: "MongoDb", icon: mongodbicon },
			{ name: "PostgreSql", icon: postgresicon },
			{ name: "Docker", icon: dockericon },
		],
		githuburl: "",
		githubicon: FiGithub,
		colors: {
			main: "main-btn",
			second: "secondary-btn",
			icon: "white",
			projectcolor: "#70B9BE",
		},
	},
	{
		title: "Geotechnical Expert Map",
		description:
			"Dies ist eine Karte, die die geotechnischen Experten in der Türkei zeigt. Die Karte wurde mit Next.js und Tailwind CSS entwickelt. Das Backend wird von Supabase betrieben. Überprüfen Sie es unter https://experts.soilprime.com.",
		description_EN:
			"This is a map to show the geotechnical experts in Turkey. The map is developed with Next.js and Tailwind CSS. The backend is powered by Supabase. Check it from https://experts.soilprime.com",
		technologies: [
			{ name: "Html", icon: htmlicon },
			{ name: "CSS", icon: cssicon },
			{ name: "TypeScript", icon: typescripticon },
			{ name: "Tailwind", icon: tailwindcssicon },
			{ name: "Docker", icon: dockericon },
		],
		githuburl: "",
		githubicon: FiGithub,
		colors: {
			main: "main-btn",
			second: "secondary-btn",
			icon: "white",
			projectcolor: "#70B9BE",
		},
	},
	{
		title: "GoCommerce",
		description:
			"GoCommerce ist eine leistungsstarke und skalierbare E-Commerce-Backend-Anwendung, die entwickelt wurde, um die Komplexität moderner Online-Handelsplattformen zu bewältigen. Entwickelt mit Go, liegt der Schwerpunkt dieses Projekts auf hoher Leistung, Sicherheit und Modularität. Das Backend ist darauf ausgelegt, nahtlose Benutzererfahrungen und effizientes Transaktionsmanagement zu bieten, was es zu einer idealen Lösung für Unternehmen macht, die ihre Online-Präsenz skalieren möchten. Es umfasst die Benutzerauthentifizierung sowie die Verwaltung von Produkten, Bestellungen und Einkaufswagen, einschließlich Caching.",
		description_EN:
			"GoCommerce is a powerful and scalable e-commerce backend application designed to handle the complexities of modern online retail platforms. Developed using Go, this project emphasizes high performance, security, and modularity. The backend is built with a focus on delivering seamless user experiences and efficient transaction management, making it an ideal solution for businesses looking to scale their online presence. It includes user authentication, product, order and shopping cart management and caching.",
		technologies: [
			{ name: "Golang", icon: golangicon },
			{ name: "MySQL", icon: mysqlicon },
			{ name: "Redis", icon: redisicon },
			{ name: "Docker", icon: dockericon },
		],
		githuburl: "https://github.com/nubufi/GoCommerce",
		githubicon: FiGithub,
		colors: {
			main: "main-btn",
			second: "secondary-btn",
			icon: "white",
			projectcolor: "#70B9BE",
		},
	},
	{
		title: "Shortify",
		description:
			"Shortify ist ein einfacher, effizienter URL-Shortener, der mit Golang und htmx entwickelt wurde. Er ermöglicht es Benutzern, schnell kurze, teilbare Links aus langen URLs zu erstellen, mit dynamischen Frontend-Interaktionen. Perfekt für alle, die einen leichtgewichtigen URL-Shortening-Service bereitstellen möchten. Ich habe es als Nebenprojekt entwickelt.",
		description_EN:
			"Shortify is a simple, efficient URL shortener built with Golang and htmx. It allows users to quickly generate short, shareable links from long URLs, featuring dynamic frontend interactions. Perfect for anyone looking to deploy a lightweight URL shortening service. I developed it as a side project.",
		technologies: [
			{ name: "Htmx", icon: htmxicon },
			{ name: "Tailwind", icon: tailwindcssicon },
			{ name: "Golang", icon: golangicon },
			{ name: "PostgreSql", icon: postgresicon },
			{ name: "Docker", icon: dockericon },
		],
		githuburl: "https://github.com/nubufi/shortify-go",
		githubicon: FiGithub,
		colors: {
			main: "main-btn",
			second: "secondary-btn",
			icon: "white",
			projectcolor: "#70B9BE",
		},
	},
	{
		title: "TaskFlow",
		description:
			"TaskFlow ist eine schlanke und effiziente Aufgabenlistenanwendung, die entwickelt wurde, um Benutzern die Verwaltung ihrer Aufgaben mit Leichtigkeit zu ermöglichen.",
		description_EN:
			"TaskFlow is a streamlined and efficient Todo List application designed to help users manage their tasks with ease.",
		technologies: [
			{ name: "Htmx", icon: htmxicon },
			{ name: "Tailwind", icon: tailwindcssicon },
			{ name: "Golang", icon: golangicon },
			{ name: "PostgreSql", icon: postgresicon },
			{ name: "Docker", icon: dockericon },
		],
		githuburl: "https://github.com/nubufi/TaskFlow",
		githubicon: FiGithub,
		colors: {
			main: "main-btn",
			second: "secondary-btn",
			icon: "white",
			projectcolor: "#70B9BE",
		},
	},

] as const;

export const liveTickerData = {
	content: {
		de: "Weitere Projekte auf Github",
		en: "More Projects on Github",
	},
} as const;

export const skillsDataDevOps = [
	{
		skillsTitle: "DevOps",
		skills: [
			{
				title: "Kubernetes",
				hash: "#Kubernetes",
				icon: kubernetesicon,
				color: "#1572B6",
			},

			{
				title: "Docker",
				hash: "#Docker",
				icon: dockericon,
				color: "#1572B6",
			},
			{
				title: "Jenkins",
				hash: "#Jenkins",
				icon: jenkinsicon,
				color: "#38B2AC",
			},
			{
				title: "AWS",
				hash: "#AWS",
				icon: awsicon,
				color: "#F1662A",
			},
			{
				title: "Azure",
				hash: "#Azure",
				icon: azureicon,
				color: "#1572B6",
			},


		],
	},
] as const;
export const skillsDataWeb = [
	{
		skillsTitle: "WebDevelopment",
		skills: [
			{
				title: "HTML",
				hash: "#html",
				icon: htmlicon,
				color: "#F1662A",
			},

			{
				title: "CSS",
				hash: "#CSS",
				icon: cssicon,
				color: "#1572B6",
			},
			{
				title: "Tailwind",
				hash: "#Tailwind",
				icon: tailwindcssicon,
				color: "#38B2AC",
			},
			{
				title: "Next.js",
				hash: "#Next.js",
				icon: [nextjsicon, nextjsiconwhite],
				color: ["#000000", "#FFFFFF"],
			},
			{
				title: "HTMX",
				hash: "#htmx",
				icon: htmxicon,
				color: ["#000000", "#FFFFFF"],
			}, {
				title: "API",
				hash: "#API",
				icon: apiicon,
				color: "#FF0000",
			},


		],
	},
] as const;

export const skillsDataDesign = [
	{
		skillsTitle: "Languages",
		skills: [
			{
				title: "Golang",
				hash: "#Golang",
				icon: golangicon,
				color: "#007ACC",
			},
			{
				title: "JavaScript",
				hash: "#JavaScript",
				icon: javascripticon,
				color: "#F7DF1E",
			},
			{
				title: "TypeScript",
				hash: "#TypeScript",
				icon: typescripticon,
				color: "#007ACC",
			},
			{
				title: "Python",
				hash: "#Python",
				icon: pythonicon,
				color: "#007ACC",
			},
		],
	},
] as const;

export const skillsDataCMS = [
	{
		skillsTitle: "Database",
		skills: [
			{
				title: "PostgreSQL",
				hash: "#PostgreSQL",
				icon: postgresicon,
				color: "#007ACC",
			},
			{
				title: "MySQL",
				hash: "#MySQL",
				icon: mysqlicon,
				color: "#007ACC",
			},
			{
				title: "MongoDB",
				hash: "#MongoDB",
				icon: mongodbicon,
				color: "#449C45",
			},
			{
				title: "Redis",
				hash: "#Redis",
				icon: redisicon,
				color: "#FF0000",
			},

		],
	},
] as const;

export const navLinks = [
	{ de: "Startseite", en: "Home", hash: "#home", icon: GoHome },
	{ de: "Fähigkeiten", en: "Skills", hash: "#skills", icon: GoStack },
	{ de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
	{ de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
	{ de: "Zertifikate", en: "Certificates", hash: "#certificates", icon: GoPerson },
] as const;


export const sideBarRightMail = {
	link: "mailto:numanburakfidan@yandex.com",
	text: "numanburakfidan@yandex.com",
} as const;

export const sideBarLeftSocials = [
	{
		link: "https://www.linkedin.com/in/numan-burak-fidan-msc-01260158/",
		icon: FiLinkedin,
		altimgname: "linkedin",
	},
	{
		link: "https://github.com/nubufi",
		icon: FiGithub,
		altimgname: "github",
	},
	{
		link: "mailto:numanburakfidan@yandex.com",
		icon: FiMail,
		altimgname: "mail",
	},
] as const;

export const quotesData = [
	{
		de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
		en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
		author: "Andrew Hunt",
	},
	{
		de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
		en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
	},
] as const;

export const certificatesData = {
	title: "Zertifikate",
	title_EN: "Certificates",
	description: "Die Zertifikate, die ich erworben habe.",
	description_EN: "The certificates I have achieved.",
	certificates: [
		{ alt: "Cybersecurity", src: cybersecCert },
		{ alt: "Docker", src: dockerCert },
		{ alt: "Ethical Hacking", src: hackingCert },
		{ alt: "Golang", src: golangCert },
		{ alt: "JavaScript", src: jsCert },
		{ alt: "Kubernetes Beginner", src: kubBegCert },
		{ alt: "Machine Learning", src: mlCert },
		{ alt: "Next.js", src: nextJsCert },
		{ alt: "Web Security", src: webSecCert },
		{ alt: "Grpc", src: grpcCert },
		{ alt: "Blockchain", src: blockchainCert },
	]
};
export const aboutMeData = {
	title: "Über mich",
	title_EN: "About me",
	description: "Ein paar Codeschnippsel über mich",
	description_EN: "A few code snippets about me",
	paragraphs_DE: [
		{
			title: "Who Am I?",
			description:
				"Ich bin von Beruf Bauingenieur, aber ich verwirkliche meine Programmierträume seit 8 Jahren. Ich bin Mitbegründer eines Software-/Bauunternehmens und arbeite als Teamleiter des SoilPrime-Entwicklungsteams.",
			icon: hardwareicon,
		},
		{
			title: "Meine Leidenschaften",
			description:
				"Abgesehen vom Programmieren gehe ich gerne alleine in der Natur spazieren, lese Mangas, schaue Animes und lerne neue Sprachen.",
			icon: caricon,
		},
		{
			title: "Meine Ziele",
			description:
				"Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man seine Komfortzone verlässt. Deshalb suche ich nach neuen Abenteuern in Europa, insbesondere in Deutschland.",
			icon: travelicon,
		},
	],
	paragraphs_EN: [
		{
			title: "Who Am I?",
			description:
				"I am a civil engineer by practice however I've been achieving my coding dreams for 8 years. I am cofounder of a software/construction company and working as team leader of SoilPrime development team.",
			icon: hardwareicon,
		},
		{
			title: "My Passions",
			description:
				"Besides coding, I like to go for a walk in nature by myself, read mangas, watch animes and learn new languages.",
			icon: caricon,
		},
		{
			title: "My Goals",
			description:
				"My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave your comfort zone. That's why I am looking for new adventures in Europe, especially in Germany.",
			icon: travelicon,
		},
	],
};

export const contactData = {
	title: {
		de: "Kontakt",
		en: "Contact",
	},
	description: {
		de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
		en: "Write me a message and I will get back to you.",
	},
	inputfields: [
		{
			name: "name",
			placeholder: {
				de: "Dein Name",
				en: "Your Name",
			},
			type: "text",
			validation: {
				de: "Bitte gebe deinen Namen ein",
				en: "Please fill in your name",
			},
			pattern: "{2}",
		},
		{
			name: "email",
			placeholder: {
				de: "Deine E-Mail Adresse",
				en: "Your E-Mail",
			},
			type: "email",
			validation: {
				de: "Bitte gebe deine Email ein",
				en: "Please fill in your email",
			},
			pattern: "[@]{4}",
		},
		{
			name: "subject",
			placeholder: {
				de: "Deine Betreff",
				en: "Your Subject",
			},
			type: "text",
			validation: {
				de: "Bitte gebe einen Betreff ein",
				en: "Please fill in your subject",
			},
			pattern: "{10}",
		},
	],
	textarea: {
		placeholder: {
			de: "Deine Nachricht",
			en: "Your Message",
		},
		name: "message",
		rows: 10,
		validation: {
			de: "Bitte gebe deine Nachricht ein",
			en: "Please fill in your message",
		},
		pattern: "{10}",
	},
	button: {
		value: {
			de: "Absenden",
			en: "Send",
		},
	},
	icon: FiMail,
	iconcolor: "#FFFFFF",
	colors: {
		main: "main-btn",
		second: "secondary-btn",
		icon: "white",
	},
	privacyOptIn: {
		checkbox: {
			de: "Ich stimme zu, dass Numan Burak meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
			en: "I agree that Numan Burak may use my personal data (name and e-mail address) to contact me.",
		},
		description: {
			de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
			en: "By submitting this request, you acknowledge that you have read the Private Policy",
		},
	},
} as const;

export const toastMessages = {
	loadingProject: {
		de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
		en: "🦄 The live demo will open shortly. Starting servers...",
	},
	successEmailSent: {
		de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
		en: "🦄 Thank you for your email. I will get back to you as soon as possible",
	},
	failedEmailSent: {
		de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
		en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
	},
	failedValidationName: {
		de: "Bitte gebe deinen Namen ein",
		en: "Please fill in your name",
	},
} as const;

export const buttonLabels = {
	language: {
		de: "DE",
		en: "EN",
	},
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
	"outer-right-to-inner-left": {
		marginRight: "4rem",
	},
	"outer-left-to-inner-right": {
		marginLeft: "4rem",
		transform: "scaleX(-1)",
	},
	"inner-right-to-middle": {
		width: "100%",
		transform: "scaleY(1)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	"inner-left-to-middle": {
		width: "100%",
		transform: "scaleX(-1)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
	},
	"middle-to-inner-right": {
		width: "100%",
		transform: "scale(1,-1)",
	},
	"middle-to-inner-left": {
		width: "100%",
		transform: "scale(-1,-1)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	middle: {
		width: "100%",
		transform: "scaleX(-1)",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
	small: {
		heights: ["25rem", "15rem"],
	},
	middle: {
		heights: ["35rem", "25rem"],
	},
	large: {
		heights: ["45rem", "35rem"],
	},
	extraLarge: {
		heights: ["55rem", "45rem"],
	},
};

export const spaceStyles: Record<string, React.CSSProperties> = {
	"outer-right-to-inner-left": {
		marginTop: "-6rem",
		width: "100%",
	},
	"outer-left-to-inner-right": {
		marginTop: "-6rem",
		width: "100%",
	},
	"inner-right-to-middle": {
		marginTop: "-20rem",
		width: "50%",
		zIndex: "-10",
	},
	"inner-left-to-middle": {
		marginTop: "-10rem",
		width: "50%",
		zIndex: "-10",
	},
	"middle-to-inner-right": {
		width: "75%",
	},
	"middle-to-inner-left": {
		marginTop: "-2.5rem",
		width: "50%",
	},
	middle: {
		marginTop: "-2.5rem",
		width: "0%",
		display: "none",
	},
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
	"outer-right-to-inner-left": {
		widths: ["74.45%", "74.45%"],
	},
	"outer-left-to-inner-right": {
		widths: ["75%", "75%"],
	},
	"inner-right-to-middle": {
		widths: ["50.1%", "49%"],
	},
	"inner-left-to-middle": {
		widths: ["50.1%", "49%"],
	},
	"middle-to-inner-right": {
		widths: ["33.4%", "50.03%"],
	},
	"middle-to-inner-left": {
		widths: ["50.1%", "49%"],
	},
	middle: {
		widths: ["0%", "0%"],
	},
};
