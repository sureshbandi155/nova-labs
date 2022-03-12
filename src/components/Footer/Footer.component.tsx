import React from 'react';

import { Grid, Header, Icon, List, Form, Button } from 'semantic-ui-react';
import Logo from '../../assets/images/Logo.png';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
    return (
        <div
            className={[
                styles['footerSec'],
                'footerPadding allTextWhite',
            ].join(' ')}
        >
            <div className="container">
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={4}>
                            <div className="logoTextSec">
                                <img src={Logo} alt="Logo" />
                                <Header
                                    as="h4"
                                    content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis non, fugit totam vel laboriosam vitae."
                                />
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
                        <Grid.Column computer={4} className={styles['links']}>
                            <div>
                                <Header as='h2' content='Useful Links' />
                                <List>
                                    <List.Item as='a'><Header as='h4'>All NFTs</Header></List.Item>
                                    <List.Item as='a'><Header as='h4'>How It Works</Header></List.Item>
                                    <List.Item as='a'><Header as='h4'>Create</Header></List.Item>
                                    <List.Item as='a'><Header as='h4'>Explore</Header></List.Item>
                                    <List.Item as='a'><Header as='h4'>Privacy & Terms</Header></List.Item>
                                </List>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={4} className={styles['links']}>
                            <div>
                                <Header as='h2' content='Community' />
                                <List>
                                    <List.Item as='a'><Header as='h4'>Help Center</Header></List.Item>
                                    <List.Item as='a'><Header as='h4'>Partners</Header></List.Item>
                                    <List.Item as='a'><Header as='h4'>Suggestions</Header></List.Item>
                                    <List.Item as='a'><Header as='h4'>Blog</Header></List.Item>
                                    <List.Item as='a'><Header as='h4'>Newsletter</Header></List.Item>
                                </List>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={4} className={styles['links']}>
                            <div>
                                <Header as='h2' content='Subscribe Us' />
                                <Form className={styles['subscribe']}>
                                    <Form.Field>
                                        <input placeholder='Enter your email' />
                                    </Form.Field>
                                    <Button type='submit' primary>Submit</Button>
                                </Form>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div >
    );
};