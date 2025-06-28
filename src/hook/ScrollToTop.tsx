import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to top after a slight delay
    }, 100); // You can adjust the delay if needed

    return () => clearTimeout(timer); // Cleanup the timer when component unmounts
  }, [location]);

  return null;
};

export default ScrollToTop;
