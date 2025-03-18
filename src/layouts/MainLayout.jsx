import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import './main-layout.scss';

const MainLayout = () => {
    return (
        <main className="mainLayout">
            <Header />
            <div className="mainLayout__content">
                <Outlet />
            </div>
            <Footer />
        </main>
    );
};

export default MainLayout;
