import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Quiz from './pages/Quiz';
import Home from './pages/Home';
import PrivateRoute from './componets/PrivateRoute';
import ResizeContextProvider from "./context/ResizeContextProvider";
import QuizContextProvider from "./context/QuizContextProvider";

import {
  ROOT_ROUTE,
  QUIZ_ROUTE,
} from './router/routes';

import 'normalize.css';
import './index.css';
import ErrorBoundary from "./componets/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <HashRouter>
        <QuizContextProvider>
          <Routes>
            <Route path={ROOT_ROUTE} element={<Home />} />
            <Route path={QUIZ_ROUTE} element={
              <ResizeContextProvider>
                <PrivateRoute>
                  <Quiz />
                </PrivateRoute>
              </ResizeContextProvider>
            } />
            <Route path="*" element={<Navigate to={ROOT_ROUTE} />} />
          </Routes>
        </QuizContextProvider>
      </HashRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
