import { motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useState } from "react";
import { useLocation, useOutlet } from "react-router";

export function AnimatedRouteOutlet() {
	const location = useLocation();
	const outlet = useOutlet();
	const shouldReduceMotion = useReducedMotion();
	const routeKey = location.pathname;
	const [isEntered, setIsEntered] = useState(false);

	useLayoutEffect(() => {
		setIsEntered(false);
		if (routeKey) {
			setIsEntered(true);
		}
	}, [routeKey]);

	return (
		<motion.div
			animate={
				shouldReduceMotion || isEntered
					? { opacity: 1, y: 0 }
					: { opacity: 0, y: 10 }
			}
			initial={false}
			key={routeKey}
			transition={
				shouldReduceMotion
					? { duration: 0 }
					: { duration: 0.4, ease: "easeOut" }
			}
		>
			{outlet}
		</motion.div>
	);
}
