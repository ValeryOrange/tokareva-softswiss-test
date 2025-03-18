import React from 'react';
import Lead from '@/components/Lead';
import './main.scss';

const More = () => {
    return <div>This is a more text without a background image</div>;
};

const MainPage = () => {
    return (
        <div className="main-page">
            <Lead
                className="main-page__lead"
                title="Discover the vast expanses of"
                titleEm="space"
                caption="Where the possibilities are"
                captionEm="endless!"
                more={<More />}
            />
        </div>
    );
};

export default MainPage;
