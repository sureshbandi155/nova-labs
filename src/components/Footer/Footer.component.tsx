import React from 'react';

import { Grid, Header, Icon, List } from 'semantic-ui-react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <div
            className={[
                styles['footerSec'],
                'sectionPadding allTextWhite',
            ].join(' ')}
        >
            <div className="wrapper">
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={4} mobile={16}>
                            <div className={'logoText'}>
                                <p>Socialize</p>
                                <div className={styles["logoTextSec"]}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae.
                                    </p>
                                </div>
                            </div>

                        </Grid.Column>
                        <Grid.Column computer={4} mobile={16} className={styles['links']}>
                            <div>
                                <Header as='h3' content='Useful Links' />
                                <List className={styles['navLinks']}>
                                    <List.Item><a>All NFTs</a></List.Item>
                                    <List.Item><a>How It Works</a></List.Item>
                                    <List.Item><a>Create</a></List.Item>
                                    <List.Item><a>Explore</a></List.Item>
                                    <List.Item><a>Privacy & Terms</a></List.Item>
                                </List>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={4} mobile={16} className={styles['links']}>
                            <div>
                                <Header as='h3' content='Community' />
                                <List className={styles['navLinks']}>
                                    <List.Item><a>Help Center</a></List.Item>
                                    <List.Item><a>Partners</a></List.Item>
                                    <List.Item><a>Suggestions</a></List.Item>
                                    <List.Item><a>Blog</a></List.Item>
                                    <List.Item><a>Newsletter</a></List.Item>
                                </List>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={4} mobile={16} className={styles['links']}>
                            <div>
                                <Header as='h3' content='Contact Us' />
                                <List className={styles['navLinks']}>
                                    <List.Item><a href="tel:+91-9988774455">+91-9988774455</a></List.Item>
                                    <List.Item><a href='mailto: support@socialize.com'>support@socialize.com</a></List.Item>
                                </List>
                                <div className={styles['socialShare']}>
                                    <ul>
                                        <li>
                                            <a href="">
                                                <Icon name="facebook f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <Icon name="instagram" />
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
                                    </ul>
                                </div>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div >
    );
};