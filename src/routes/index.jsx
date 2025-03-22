import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Cart from '@/pages/Cart';
import Products from '@/pages/Products';
import NotFound from '@/pages/NotFound';
import fakeRequestHomePageData from '@/api/home';

const homeLoader = async () => ({
    homePageData: fakeRequestHomePageData(),
});

const Routing = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home />, loader: homeLoader }, // Use the loader
            { path: 'about', element: <About /> },
            { path: 'cart', element: <Cart /> },
            { path: 'products', element: <Products /> },
            { path: '*', element: <NotFound /> },
        ],
    },
];

export default Routing;
