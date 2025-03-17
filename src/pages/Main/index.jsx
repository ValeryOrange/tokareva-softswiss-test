import React from 'react';
import Lead from '@/components/Lead';
import './main.scss';

const MainPage = () => {
    return (
        <div className="main-page">
            <Lead
                className="main-page__lead"
                title="Discover the vast expanses of"
                titleEm="space"
                caption="Where the possibilities are"
                captionEm="endless!"
            />
        </div>
    );
};

export default MainPage;
