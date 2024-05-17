import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo({top:0,behavior:"instant"});
  }, []);
  return null
}

export default ScrollTop;