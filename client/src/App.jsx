import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import AboutSummary from "./components/AboutSummary";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
// import Reviews from "./components/Reviews";
// import NetworkMetrics from "./components/NetworkMetrics";
import Problems from "./components/Problems";
// import SiteChecker from "./components/SiteChecker";
// import NetworkNewsFeed from "./components/NetworkNewsFeed";
import Partners from "./components/Partners";
import Partners2 from "./components/Partner2";
import BlogPreviews from "./components/BlogPreviews";

function App() {
	return (
		<>
			<a href="#main-content" className="skip-to-content">
				Skip to Content
			</a>
			<div className="relative font-Noto text-black dark:text-gray-200 flex flex-col overflow-x-hidden">
				<NavBar />
				<Routes>
					<Route
						path="/about"
						element={
							<>
								<About />
								<Footer />
							</>
						}
					/>
					{/* Add other routes here as needed */}
				</Routes>
				{/* Homepage content only for non-/about routes */}
				<Routes>
					<Route
						path="/"
						element={
							<main id="main-content" tabIndex="-1">
								<Hero />
								<Partners />
								<Partners2 />
								<AboutSummary />
								<BlogPreviews />
								<Services />
								{/* <Reviews /> */}
								{/* <NetworkMetrics elementRef={resources} /> */}
								{/* <SiteChecker /> */}
								{/* <NetworkNewsFeed /> */}
								<Problems />
								<Contact />
								<Footer />
							</main>
						}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
