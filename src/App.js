import { Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "./components/shared/Header";
import Home from "./components/pages/Home/Home";
import { Toaster } from "react-hot-toast";
import Footer from "./components/shared/Footer";
import "./App.css";

function App() {
	return (
		<HelmetProvider>
			<Helmet>
				<title>Md Kawsar Ali | Frontend & MERN Stack Developer | WordPress Expert</title>
				<meta name="description" content="Md Kawsar Ali – Frontend & MERN Stack Developer with 7+ years of experience. Specializing in React JS, Node JS, MongoDB, TailwindCSS, and WordPress. Build fast, responsive web applications and WordPress websites with Elementor." />
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Person",
						name: "Md Kawsar Ali",
						jobTitle: "Frontend & MERN Stack Developer",
						url: "https://md-kawsar-ali.web.app",
						description: "Md Kawsar Ali is a professional Frontend Developer specializing in JavaScript, React.js, and MERN Stack with 7+ years of experience.",
						knowsAbout: ["React.js", "JavaScript", "Node.js", "MongoDB", "Express.js", "TailwindCSS", "Bootstrap", "WordPress"],
						contactPoint: {
							"@type": "ContactPoint",
							contactType: "developer",
							url: "https://md-kawsar-ali.web.app/#contact",
						},
						sameAs: ["https://github.com/md-kawsar-ali", "https://www.instagram.com/md_kawsar_alii", "https://www.linkedin.com/in/mdkawsarali"],
					})}
				</script>
			</Helmet>
			<Header />
			<Toaster position="top-center" reverseOrder={false} />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
			<Footer />
		</HelmetProvider>
	);
}

export default App;
