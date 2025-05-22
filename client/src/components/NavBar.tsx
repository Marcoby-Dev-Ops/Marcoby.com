import React, { useEffect } from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { BookOpenText, ChevronDown, Contact, Globe, GraduationCap, House, ShieldPlus, User } from "lucide-react";
import ThemeButton from "@/components/ThemeButton";
import EcosystemDropDown from "./DropDowns/EcosystemDropDown";
import LearnDropDown from "./DropDowns/LearnDropDown";
import SolutionDropDown from "./DropDowns/SolutionDropDown";
import AboutDropDown from "./DropDowns/AboutDropDown";
import CareerDropDown from "./DropDowns/CareerDropDown";
import EcosystemDropDownSS from "./DropDownSS/EcosystemDropDownSS";
import SolutionDropDownSS from "./DropDownSS/SolutionDropDownSS";
import AboutDropDownSS from "./DropDownSS/AboutDropDownSS";
import LearnDropDownSS from "./DropDownSS/LearnDropDownSS";
import CareerDropDownSS from "./DropDownSS/CareerDropDownSS";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
	const location = useLocation();

	// ! FOR CLICK EVENT OF HAMBURGER MENU
	const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

	const handleMenuShow = () => {
		setIsMenuShown(!isMenuShown);
	};

	useEffect(() => {
		if (location.pathname === "/") setActiveNav("home");
		else if (location.pathname.startsWith("/about")) setActiveNav("about");
		else setActiveNav(null);
		setIsMenuShown(false); // Close mobile menu on route change
	}, [location]);

	useEffect(() => {
		if (isMenuShown) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuShown]);

	const [openDropdown, setOpenDropdown] = useState(null);
	const [activeNav, setActiveNav] = useState<string | null>(null);

	const toggleDropdown = (menu: any) => {
		setOpenDropdown(openDropdown === menu ? null : menu);
	};
	const handleNavClick = (nav: string) => {
		setActiveNav(nav);
	};

	return (
		<nav className="fixed right-0 left-0 z-3 bg-white px-5 flex items-center justify-between shadow-sm dark:bg-black lg:backdrop-blur-2xl lg:bg-white/50 lg:dark:bg-black/50">
			{/* NAV LOGO */}
			<a href="/">
				<img src={logo} alt="logo" className="w-20 h-20" />
			</a>

			{/* THEME BUTTON */}
			<ThemeButton />

			{/* ! NAV LINKS FOR BIG SCREEN */}
			<ul className="hidden text-sm lg:inline-flex items-center gap-x-7">
				<li>
					<Link
						to="/"
						className={`hover:text-[#00A651] duration-300 cursor-pointer ${
							location.pathname === "/" ? " text-[#00A651] font-bold" : ""
						}`}>
						Home
					</Link>
				</li>
				<li className="relative flex items-center group">
					<Link
						to="/about"
						className={`group-hover:text-[#00A651] duration-300 cursor-pointer peer ${
							activeNav === "about" ? " text-[#00A651] font-bold" : ""
						}`}>
						About
					</Link>
					<span className="group-hover:rotate-180 group-hover:text-[#00A651] cursor-pointer peer">
						<ChevronDown className="h-3 w-3" />
					</span>
					<AboutDropDown />
				</li>

				<li className="relative flex items-center group">
					<button className="group-hover:text-[#00A651] duration-300 cursor-pointer peer">Ecosystem</button>
					<span className="group-hover:rotate-180 group-hover:text-[#00A651] cursor-pointer peer">
						<ChevronDown className="h-3 w-3" />
					</span>
					<EcosystemDropDown />
				</li>

				<li className="relative flex items-center group">
					<button className="group-hover:text-[#00A651] duration-300 cursor-pointer peer">Solutions</button>
					<span className="group-hover:rotate-180 group-hover:text-[#00A651] cursor-pointer peer">
						<ChevronDown className="h-3 w-3" />
					</span>
					<SolutionDropDown />
				</li>

				<li className="relative flex items-center group">
					<button className="group-hover:text-[#00A651] duration-300 cursor-pointer peer">Learn</button>
					<span className="group-hover:rotate-180 group-hover:text-[#00A651] cursor-pointer peer">
						<ChevronDown className="h-3 w-3" />
					</span>
					<LearnDropDown />
				</li>

				<li className="relative flex items-center group">
					<button className="group-hover:text-[#00A651] duration-300 cursor-pointer peer">Careers</button>
					<span className="group-hover:rotate-180 group-hover:text-[#00A651] cursor-pointer peer">
						<ChevronDown className="h-3 w-3" />
					</span>
					<CareerDropDown />
				</li>

				<li>
					<a className="hover:text-[#00A651] duration-300 cursor-pointer" href="/#contact">
						Contact
					</a>
				</li>

				<li>
					<a
						href="https://outlook.office365.com/book/MarcobyITSolutions@marcoby.com/"
						target="_blank"
						className="text-white duration-300 cursor-pointer px-4 py-2 bg-[#006837] rounded-full hover:bg-[#00A651]">
						Book a TechCheck
					</a>
				</li>
			</ul>

			{/* ! HAMBURGER MENU ICON */}
			<div
				className={`${
					isMenuShown
						? "fixed z-50 left-10 top-0 w-full py-10 shadow-sm bg-white lg:hidden md:left-40 dark:bg-black"
						: ""
				}`}>
				<div className="flex flex-col gap-y-1 lg:hidden cursor-pointer relative" onClick={handleMenuShow}>
					<div
						className={`w-7 h-[2px] bg-[#006837] rounded-full duration-300 ${
							isMenuShown ? "absolute rotate-45 right-16 duration-300 md:right-48" : ""
						}`}></div>
					<div className={`w-10 h-[2px] bg-[#006837] rounded-full duration-300 ${isMenuShown ? "hidden" : ""}`}></div>
					<div
						className={`w-7 h-[2px] bg-[#006837] rounded-full self-end duration-300 ${
							isMenuShown ? "absolute -rotate-45 right-16 duration-300 z-50 md:right-48" : ""
						}`}></div>
				</div>
			</div>

			{/* HAMNURGER MENU */}
			<div
				className={`fixed inset-0 bg-transparent duration-500  overflow-auto lg:hidden modal ${
					isMenuShown ? "translate-x-0" : "translate-x-[200%]"
				}`}>
				<div className="bg-white/100 pt-32 pl-5 flex flex-col items-end text-right min-h-full shadow-[0px_3px_10px_rgba(0,0,0,0.2)]  dark:bg-black/100 ml-10 md:ml-40">
					<ul className="flex flex-col items-end gap-y-4 border-r-2 border-r-[#006837] border-solid mr-6 py-4">
						<Link
							to="/"
							className={`flex px-10 py-2 cursor-pointer w-fit hover:text-[#00A651] hover:bg-[#f5f9f5] dark:hover:bg-[#f3f9f512] ${
								activeNav === "home" ? "text-[#00A651] font-bold" : "hover:text-[#00A651]"
							}`}>
							<House className="mr-2" />
							Home
						</Link>

						<div className="flex flex-col items-end">
							<button
								className={`flex px-10 items-center py-2 cursor-pointer w-fit hover:text-[#00A651] hover:bg-[#f5f9f5] dark:hover:bg-[#f3f9f512] ${
									activeNav === "about" ? "text-[#00A651] font-bold" : "hover:text-[#00A651]"
								}`}
								onClick={() => {
									toggleDropdown("about");
									handleNavClick("about");
								}}>
								<User className="mr-2" />
								About
								<span className={`duration-300 ml-2 ${openDropdown === "about" ? "rotate-180" : "rotate-0"}`}>
									<ChevronDown className="h-3 w-3" />
								</span>
							</button>
							{openDropdown === "about" && <AboutDropDownSS />}
						</div>

						<div className="flex flex-col items-end">
							<li
								className={`flex items-center px-10 py-2 cursor-pointer w-fit hover:text-[#00A651] hover:bg-[#f5f9f5] dark:hover:bg-[#f3f9f512] ${
									activeNav === "ecosystem" ? "text-[#00A651] font-bold" : "hover:text-[#00A651]"
								}`}
								onClick={() => {
									toggleDropdown("ecosystem");
									handleNavClick("ecosystem");
								}}>
								<Globe className="mr-2" />
								Ecosystem
								<span className={`duration-300 ml-2 ${openDropdown === "ecosystem" ? "rotate-180" : "rotate-0"}`}>
									<ChevronDown className="h-3 w-3" />
								</span>
							</li>
							{openDropdown === "ecosystem" && <EcosystemDropDownSS />}
						</div>

						<div className="flex flex-col items-end">
							<li
								className={`flex items-center px-10 py-2 cursor-pointer w-fit hover:text-[#00A651] hover:bg-[#f5f9f5] dark:hover:bg-[#f3f9f512] ${
									activeNav === "solutions" ? "text-[#00A651] font-bold" : "hover:text-[#00A651]"
								}`}
								onClick={() => {
									toggleDropdown("solutions");
									handleNavClick("solutions");
								}}>
								<ShieldPlus className="mr-2" />
								Solutions
								<span className={`duration-300 ml-2 ${openDropdown === "solutions" ? "rotate-180" : "rotate-0"}`}>
									<ChevronDown className="h-3 w-3" />
								</span>
							</li>
							{openDropdown === "solutions" && <SolutionDropDownSS />}
						</div>

						<div className="flex flex-col items-end">
							<li
								className={`flex items-center px-10 py-2 cursor-pointer w-fit hover:text-[#00A651] hover:bg-[#f5f9f5] dark:hover:bg-[#f3f9f512] ${
									activeNav === "learn" ? "text-[#00A651] font-bold" : "hover:text-[#00A651]"
								}`}
								onClick={() => {
									toggleDropdown("learn");
									handleNavClick("learn");
								}}>
								<BookOpenText className="mr-2" />
								Learn
								<span className={`duration-300 ml-2 ${openDropdown === "learn" ? "rotate-180" : "rotate-0"}`}>
									<ChevronDown className="h-3 w-3" />
								</span>
							</li>
							{openDropdown === "learn" && <LearnDropDownSS />}
						</div>

						<div className="flex flex-col items-end">
							<li
								className={`flex items-center px-10 py-2 cursor-pointer w-fit hover:text-[#00A651] hover:bg-[#f5f9f5] dark:hover:bg-[#f3f9f512] ${
									activeNav === "careers" ? "text-[#00A651] font-bold" : "hover:text-[#00A651]"
								}`}
								onClick={() => {
									toggleDropdown("careers");
									handleNavClick("careers");
								}}>
								<GraduationCap className="mr-2" />
								Careers
								<span className={`duration-300 ml-2 ${openDropdown === "careers" ? "rotate-180" : "rotate-0"}`}>
									<ChevronDown className="h-3 w-3" />
								</span>
							</li>
							{openDropdown === "careers" && <CareerDropDownSS />}
						</div>

						<a
							href="/#contact"
							className={`flex items-center px-10 py-2 cursor-pointer w-fit hover:text-[#00A651] hover:bg-[#f5f9f5] dark:hover:bg-[#f3f9f512] ${
								activeNav === "/#contact" ? "text-[#00A651] font-bold" : "hover:text-[#00A651]"
							}`}>
							<Contact className="mr-2" />
							Contact
						</a>

						<div className="flex px-10 py-2 cursor-pointer w-fit">
							<a
								href="https://outlook.office365.com/book/MarcobyITSolutions@marcoby.com/"
								target="_blank"
								className="text-white duration-300 cursor-pointer px-4 py-2 bg-[#006837] rounded-full hover:bg-[#00A651]">
								Book a TechCheck
							</a>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
