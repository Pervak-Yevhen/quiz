import React, { useContext } from 'react';

const ResizeContext = React.createContext<boolean>(false);

export const useResizeContext = () => useContext(ResizeContext);

export default ResizeContext;
