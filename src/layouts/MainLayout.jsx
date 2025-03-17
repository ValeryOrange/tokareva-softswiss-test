import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import './main-layout.scss';

const MainLayout = () => {
    return (
        <div className="main-layout">
            <Header />
            <div className="main-layout__content">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;
