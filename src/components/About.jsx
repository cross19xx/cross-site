import React from 'react';

import Design from '../img/computer.svg';
import MobileApp from '../img/mobile-app.svg';
import WebApp from '../img/development.svg';

const About = () => {
    const description =
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor sagittis, dignissim enim sed, condimentum ligula. Proin lorem nisl, dignissim laoreet purus in, dignissim aliquam nisl. Vestibulum vitae pellentesque ligula. Mauris mollis commodo nibh, semper fringilla sem aliquet sed. Sed molestie, urna vitae pharetra vehicula, dui tellus placerat eros, in dapibus elit erat at orci. Donec a lobortis ex, sit amet dictum ligula.';

    const renderBreakdowns = () => {
        const breakdowns = [
            {
                img: Design,
                title: 'Frontend dev / design',
                description:
                    'Aliquam commodo vulputate ex sit amet maximus. Integer at felis quam. Pellentesque at semper nisi.',
                subTitle: 'Things I love designing',
                subDesc: 'Wireframes, websites, prototypes',
                listTitle: 'Design Tools + Languages',
                list: [
                    'ReactJS',
                    'AngularJS',
                    'Vanilla JS',
                    'Adobe Photoshop',
                    'Adobe XD',
                    'Sketch',
                    'Figma'
                ]
            },
            {
                img: WebApp,
                title: 'Backend development',
                description:
                    'Aliquam commodo vulputate ex sit amet maximus. Integer at felis quam. Pellentesque at semper nisi.',
                subTitle: 'Things I love building',
                subDesc: 'Web applications, APIs',
                listTitle: 'Dev tools + languages',
                list: [
                    'NodeJS',
                    'GoLang',
                    'PHP',
                    'Python',
                    'Google Cloud Platform',
                    'Amazon Web Services',
                    'Database management',
                    'Heroku'
                ]
            },
            {
                img: MobileApp,
                title: 'Mobile app development',
                description:
                    'Aliquam commodo vulputate ex sit amet maximus. Integer at felis quam. Pellentesque at semper nisi.',
                subTitle: 'Types I love developing',
                subDesc: 'Android, iOS, Hybrid apps',
                listTitle: 'Development tools',
                list: [
                    'Java/Kotlin for Android',
                    'Swift for iOS',
                    'React Native',
                    'Ionic',
                    'Nativescript'
                ]
            }
        ];

        return breakdowns.map(breakdown => (
            <div className="about__breakdown col" key={breakdown.title.toLowerCase()}>
                <img src={breakdown.img} alt={breakdown.title} className="about__breakdown-img" />

                <h3 className="about__breakdown-title">{breakdown.title}</h3>
                <p className="about__breakdown-desc">{breakdown.description}</p>

                <p className="about__breakdown-subtitle">{breakdown.subTitle}</p>
                <p className="about__breakdown-subdesc">{breakdown.subDesc}</p>

                <p className="about__breakdown-subtitle">{breakdown.listTitle}</p>
                <ul className="about__breakdown-list">
                    {breakdown.list.map(elem => (
                        <li key={elem} className="about__breakdown-elem">
                            {elem}
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div className="about">
            <div className="about__inner">
                <h2 className="about__title">Hello, I&apos;m Kenneth. Nice to meet you 👋🏼</h2>

                <p className="about__text">{description}</p>
            </div>

            <div className="about__breakdowns grid grid--padded">{renderBreakdowns()}</div>
        </div>
    );
};

export default React.memo(About);
