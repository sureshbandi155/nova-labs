import React from 'react';

import { Grid, Header, Icon, List } from 'semantic-ui-react';
import Logo from '../../assets/images/Logo_black.svg';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <div
            className={[
                styles['footerSec'],
                'sectionPadding',
            ].join(' ')}
        >
            <div className="wrapper">
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={6}>
                            <div className={styles["logoTextSec"]}>
                                <img src={Logo} alt="Logo" />
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.
                                </p>
                            </div>
                            <div className={styles['socialShare']}>
                                <ul>
                                    <li>
                                        <a href="">
                                            <Icon name="facebook f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <Icon name="twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <Icon name="linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <Icon name="pinterest p" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={5} className={styles['links']}>
                            <div>
                                <Header as='h3' content='Useful Links' />
                                <List>
                                    <List.Item><a>All NFTs</a></List.Item>
                                    <List.Item><a>How It Works</a></List.Item>
                                    <List.Item><a>Create</a></List.Item>
                                    <List.Item><a>Explore</a></List.Item>
                                    <List.Item><a>Privacy & Terms</a></List.Item>
                                </List>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={5} className={styles['links']}>
                            <div>
                                <Header as='h3' content='Community' />
                                <List>
                                    <List.Item><a>Help Center</a></List.Item>
                                    <List.Item><a>Partners</a></List.Item>
                                    <List.Item><a>Suggestions</a></List.Item>
                                    <List.Item><a>Blog</a></List.Item>
                                    <List.Item><a>Newsletter</a></List.Item>
                                </List>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div >
    );
};