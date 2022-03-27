import React from 'react';
import { Layout } from '../../Layout/Layout.component';
import { Banner } from 'src/components/Banner/Banner.component';
import { Roadmap } from 'src/components/Roadmap/Roadmap.component';

export const Home: React.FC = () => {
    return (
        <>
            <Layout>
                <Banner />
                <Roadmap />
            </Layout>
        </>
    );
};