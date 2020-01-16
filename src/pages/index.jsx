import React from 'react';

import '../css/home.css';

import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Works from '../components/Works';

export default function Homepage() {
    return (
        <Layout className="home" canonicalUrl="">
            <React.Fragment>
                <Hero />
                <About />
                <Works />
                <Contact />
                <Footer />
            </React.Fragment>
        </Layout>
    );
}
