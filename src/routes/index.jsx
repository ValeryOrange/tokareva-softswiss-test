import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import Main from '@/pages/Main';

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route path="*" element={<Main />} />
                </Route>
            </Routes>
        </>
    );
};

export default React.memo(Routing);
