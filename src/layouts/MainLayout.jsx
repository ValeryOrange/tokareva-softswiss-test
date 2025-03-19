import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '@components/Footer';
import Header from '@components/Header';
import './main-layout.scss';

/**
 * MainLayout component that serves as the main layout for the application.
 * It includes a Header, a main content area where nested routes will be rendered via Outlet, and a Footer.
 *
 * @component
 * @example
 * return (
 *   <MainLayout />
 * )
 */
const MainLayout = () => (
    <div className="main-layout">
        <Header />
        <main className="main-layout__content">
            <Outlet />
        </main>
        <Footer />
    </div>
);

export default MainLayout;
