import React from "react";
import { Navigate } from "react-router-dom";
import { useQuizResultContext } from "../context/quiz-result-context";
import { ROOT_ROUTE } from '../router/routes';

interface IPrivateRoute {
    children: JSX.Element;
}
const PrivateRoute = ({ children }: IPrivateRoute ) => {
  const { gameStarted } = useQuizResultContext();
  if (gameStarted) return children;
  return <Navigate to={ROOT_ROUTE} />;
};

export default PrivateRoute;
