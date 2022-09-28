import React, { useEffect, useState } from "react";
import ResizeContext from "./resize-context";
import { getMediumWidth } from "../utils";


interface IResizeContextProviderProps {
    children: React.ReactNode[] | React.ReactNode;
}

const ResizeContextProvider = ({ children}: IResizeContextProviderProps) => {
  const [isMobile, setState] = useState<boolean>(false);
  const onResize = () => {
    const isMobileView = document.documentElement.clientWidth < getMediumWidth();
    setState(isMobileView);
  };

  useEffect(() => {
    onResize();
    const mediaQuery = window.matchMedia(`(min-width: ${getMediumWidth()}px)`);
    mediaQuery.addEventListener('change', onResize);
    return () => {
      mediaQuery.removeEventListener('change', onResize);
    };
  }, []);

  return (
    <ResizeContext.Provider value={isMobile}>
      {children}
    </ResizeContext.Provider>
  )
};

export default ResizeContextProvider;
