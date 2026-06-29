import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        const timer = setTimeout(() => {
          const offset = 100;
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }, 150);

        return () => clearTimeout(timer);
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
