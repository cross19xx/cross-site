import React from 'react';

import '../css/home.css';

import Hero from '../components/Hero';
import Layout from '../components/Layout';

export default function Homepage() {
    return (
        <Layout className="home" canonicalUrl="">
            <React.Fragment>
                <Hero />
            </React.Fragment>
        </Layout>
    );
}
