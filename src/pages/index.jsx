import React from 'react';

import '../css/home.css';

import Layout from '../components/Layout';

export default function Homepage() {
    return (
        <Layout className="home" canonicalUrl="">
            <React.Fragment>
                <h1>Welcome to the official website from Kenneth Kwakye-Gyamfi</h1>
            </React.Fragment>
        </Layout>
    );
}
