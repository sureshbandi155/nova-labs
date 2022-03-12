import React from 'react'
import { Button, Grid, Icon } from 'semantic-ui-react';
import { NavigationItem } from './NavigationItem/NavigationItem.component';
import Logo from '../../assets/images/Logo_black.svg';

import styles from './Header.module.scss';


export const Header = () => {
    return (

        <div className={styles['headerSec']}>
            <div className="wrapper">
                <Grid>
                    <Grid.Row className='dFlex'>
                        <Grid.Column computer={2}>
                            <div className={styles['logo']}>
                                <img src={Logo} alt="Logo" />
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={10} className={[styles['centerCol'], 'verticalAlign'].join(' ')}>
                            <nav className={[styles['navItems'], 'verticalAlign'].join(' ')}>
                                <ul>
                                    <NavigationItem exact link='/typo'>Typography</NavigationItem>
                                    <NavigationItem exact link='/services'>Services</NavigationItem>
                                    <NavigationItem link='/'>Testimonials</NavigationItem>
                                    <NavigationItem link='/'>Articles</NavigationItem>
                                </ul>
                            </nav>

                        </Grid.Column>
                        <Grid.Column computer={4} className={styles['rightCol']} >
                            <div>
                                <Button secondary content='Sign in' />
                                <Button primary content='Sign up' />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div >
    )
}