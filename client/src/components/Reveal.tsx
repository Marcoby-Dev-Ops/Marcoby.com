import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children }: { children: React.ReactNode }) => {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start("visible");
		}
	}, [isInView]);
	return (
		<motion.div
			ref={ref}
			variants={{
				hidden: { opacity: 0, x: 30 },
				visible: { opacity: 1, x: 0 },
			}}
			initial="hidden"
			animate={mainControls}
			transition={{ duration: 0.7, delay: 0.25 }}>
			{children}
		</motion.div>
	);
};

export default Reveal;
