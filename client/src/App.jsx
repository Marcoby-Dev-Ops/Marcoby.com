import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Services from "./components/Services";
// import Reviews from "./components/Reviews";
// import NetworkMetrics from "./components/NetworkMetrics";
import EmailSecurity from "./components/EmailSecurity";
// import SiteChecker from "./components/SiteChecker";
// import NetworkNewsFeed from "./components/NetworkNewsFeed";
import Partners from "./components/Partners";
import Partners2 from "./components/Partner2";
import ITHealthCheck from "./components/ITHealthCheck";
import BlogPreviews from "./components/BlogPreviews";

function App() {
	return (
		<div className="relative font-Noto text-black dark:text-gray-200 dark:bg-black bg-white flex flex-col overflow-x-hidden">
			<NavBar />
			<div>
				<Hero />
				<Partners />
				<Partners2 />
				<Services />
				<About />
				{/* <Reviews /> */}
				{/* <NetworkMetrics elementRef={resources} /> */}
				{/* <SiteChecker /> */}
				{/* <NetworkNewsFeed /> */}
				<EmailSecurity />
				<BlogPreviews />
				<Contact />

				<Footer />
			</div>
		</div>
	);
}

export default App;
