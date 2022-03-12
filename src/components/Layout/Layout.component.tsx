import React from 'react';
import { Header } from '../Header/Header.component';
export const Layout: React.FC = (props: any) => (
    <>
        <Header />
        <main>{props.children}</main>
        {/* <Footer /> */}
    </>

)