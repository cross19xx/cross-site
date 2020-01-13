import React from 'react';

import Work from './Work';

const Works = () => {
    const renderWorks = () => {
        const sampleWorks = {
            img: 'https://images.unsplash.com/photo-1480408144303-d874c5e12201',
            name: 'Yakokoe',
            description: 'The developer Julie Park has given us trendy looking cards and card.',
            links: [
                { url: 'https://yakokoe.herokuapp.com', icon: 'fab fa-globe' },
                { url: 'https://www.google.com.gh', icon: 'fab fa-android' }
            ]
        };

        const works = new Array(6).fill(null).map(() => sampleWorks);
        return works.map((work, index) => <Work key={`work-${index}`} {...work} />);
    };

    return (
        <div className="works">
            <h2 className="works__title">Recent works</h2>
            <p className="works__subtext">
                Nam tristique vel felis hendrerit condimentum. Integer eu justo tempus, tincidunt
                metus ut, sodales magna.{' '}
                <a href="mailto:kenneth.cross95@gmail.com" className="works__subtext-email">
                    Email me
                </a>
            </p>

            <div className="works__container grid grid--padded">{renderWorks()}</div>
        </div>
    );
};

export default React.memo(Works);
