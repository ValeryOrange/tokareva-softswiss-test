import React from 'react';
import {
    RouterProvider,
    createBrowserRouter,
    createHashRouter,
} from 'react-router';
import Routing from './routes';

const isDev = process.env.NODE_ENV === 'development';
const createRouter = isDev ? createBrowserRouter : createHashRouter;

/**
 * App component that sets up the HashRouter for the application.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const App = () => <RouterProvider router={createRouter(Routing)} />;

export default App;
