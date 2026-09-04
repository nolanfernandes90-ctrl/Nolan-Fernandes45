import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Prevent browser from restoring the previous scroll position
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        // Force scroll to top after the new page has rendered
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto"
            });

            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        };

        // Run after React/browser navigation has finished
        requestAnimationFrame(() => {
            requestAnimationFrame(scrollToTop);
        });

        const timer = setTimeout(scrollToTop, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [pathname]);

    return null;
}

export default ScrollToTop;