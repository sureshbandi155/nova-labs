import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import { NavigationItem } from './NavigationItem/NavigationItem.component';
import Logo from '../../assets/images/Logo_white.svg';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';


export const Header: React.FC = () => {
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
                                    <NavigationItem exact link='/home'>Home</NavigationItem>
                                    <NavigationItem link='/home'>About</NavigationItem>
                                    <NavigationItem link='/home'>Roadmap</NavigationItem>
                                    <NavigationItem link='/home'>Blog</NavigationItem>
                                    <NavigationItem link='/home'>About Us</NavigationItem>
                                    <NavigationItem link='/typo'>Typography</NavigationItem>
                                </ul>
                            </nav>

                        </Grid.Column>
                        <Grid.Column computer={4} className={styles['rightCol']} >
                            <div>
                                <NavLink exact to='/signIn'><Button secondary>Sign in</Button></NavLink>
                                <Button primary content='Sign up' />
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div >
    )
};