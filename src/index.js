import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router'; 
import App from './App';
import MoonPhase from './components/MoonPhase';
import PhasesPage from './components/PhasesPage';
import AstrologyPage from './components/AstrologyPage';
import './index.css'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <MoonPhase />
      },
      {
        path: "phases",
        element: <PhasesPage />
      },
      {
        path: "signs",
        element: <AstrologyPage />
      }
    ]
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);