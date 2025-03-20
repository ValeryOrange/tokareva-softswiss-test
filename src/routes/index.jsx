import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Cart from '@/pages/Cart';
import Products from '@/pages/Products';
import NotFound from '@/pages/NotFound';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="cart" element={<Cart />} />
                <Route path="products" element={<Products />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export default Routing;
