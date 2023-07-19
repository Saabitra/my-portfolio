import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

export const CursorContext = createContext();

const CursorProvider = ({ children }) => {
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0
  });

  const [cursorBG, setCursorBG] = useState('default');

  const mobileViewportIsActive = window.innerWidth <= 768;

  useEffect(() => {
    if (!mobileViewportIsActive) {
      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY
        });
      };

      window.addEventListener('mousemove', move);

      return () => {
        window.removeEventListener('mousemove', move);
      };
    } else {
      setCursorBG('none');
    }
  }, [mobileViewportIsActive]);

  const cursorVariants = {
    default: {
      x: cursorPos.x - 13,
      y: cursorPos.y - 10,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference',
    },
    none: {
      width: 0,
      height: 0,
      backgroundColor: 'rgba(255, 255, 255, 1)',
    },
  };

  const mouseEnterHandler = () => {
    setCursorBG('text');
  };

  const mouseLeaveHandler = () => {
    setCursorBG('default');
  };

  return (
    <CursorContext.Provider
      value={{
        cursorVariants,
        cursorBG,
        mouseEnterHandler,
        mouseLeaveHandler,
      }}
    >
      {children}
    </CursorContext.Provider>
  );
};

CursorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CursorProvider;
