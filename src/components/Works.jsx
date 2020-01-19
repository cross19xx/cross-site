import React from 'react';

import Prestige from '../img/prestige.png';
import Yakokoe from '../img/cleanair.jpg';
import RoyalSenchi from '../img/royal-senchi.jpg';

import Work from './Work';

const Works = () => {
    const renderWorks = () => {
        const works = [
            {
                img: Yakokoe,
                name: 'Yakokoe',
                description:
                    'Pollution detection and Air Quality Index calculator. Served as the lead developer on the project.',
                links: [
                    { url: 'https://yakokoe.herokuapp.com', icon: 'ti-world' },
                    { url: 'https://www.google.com.gh', icon: 'ti-android' }
                ]
            },
            {
                img: Prestige,
                name: 'Prestige Capital Limited, Ghana',
                description:
                    'For this project, I served as the frontend developer for the application, developing it in vanilla JavaScript.',
                links: [{ url: 'https://www.prestigecapitalgh.com', icon: 'ti-world' }]
            },
            {
                img: RoyalSenchi,
                name: 'Royal Senchi',
                description:
                    'Served as the frontend developer for this project. This was not a freelance project but done through FifthLight Media.',
                links: [{ url: 'https://www.theroyalsenchi.com/', icon: 'ti-world' }]
            }
        ];

        return works.map((work, index) => <Work key={`work-${index}`} {...work} />);
    };

    return (
        <div className="works">
            <h2 className="works__title">Recent works</h2>
            <p className="works__subtext">
                Actions speak louder than words. Here are a few of the stuff I&apos;ve built. Others
                were confidential. For more details{' '}
                <a href="mailto:kenneth.cross95@gmail.com" className="works__subtext-email">
                    Email me
                </a>
            </p>

            <div className="works__container grid grid--padded">{renderWorks()}</div>
        </div>
    );
};

export default React.memo(Works);
