import React from 'react';
import { Layout } from '../../Layout/Layout.component';
import { Banner } from 'src/components/Banner/Banner.component';

export const Home: React.FC = () => {
    return (
        <>
            <Layout>
                <Banner />
            </Layout>
        </>
    );
};