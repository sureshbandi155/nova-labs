import React from 'react';
// import './Blogs.module.scss';
import styles from './Blogs.module.scss';
import { Grid, Image, Label } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export const Blogs: React.FC = () => {
    return (
        <div className="sectionPadding">
        <div className="wrapper">
            <div className={styles['blogHeader']}>
                <p>Recent blog posts</p>
                <h2>Learn more and get inspired.</h2>
            </div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={8}>
                    <NavLink exact to='/singleBlog'><a href="" >
                        <Image src='https://images.prismic.io/byont-website/109c66b1-ca61-44a9-afda-8cff7603954b_04.png?auto=compress,format&rect=0,0,1280,720&w=1200&h=675' />
                        <div className={styles['rightblog']}>
                            <Label>BlockChain</Label>
                            <h3>A primer on blockchain and its value beyond cryptocurrencies</h3>
                            <p>Oct 4, 2021</p>
                        </div>
                        </a></NavLink>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <NavLink exact to='/singleBlog'><a href="" className={styles['container']}>
                            <img alt="" src="https://images.prismic.io/byont-website/b2f453ac-4ade-443a-9176-6ef444bf9bf6_03.png" width="200" height="140" />
                            <div className={styles['blogcontent']}>
                                <div>
                                    <Label>Blockchain </Label>
                                    <h3>The adoption of blockchain technology by leading figures, businesses, and governments</h3></div>
                                <p>Nov 8, 2021</p>
                            </div>
                        </a></NavLink>
                        <NavLink exact to='/singleBlog'><a href="" className={styles['container']}>
                            <img alt="Centralized exchanges versus decentralized exchanges" src="https://images.prismic.io/byont-website/4f7c4c3b-db95-42ef-b92d-6af1d02bcc18_01.png" width="200" height="140" />
                            <div className={styles['blogcontent']}>
                                <div><Label>Blockchain</Label>
                                    <h3>Centralization in a decentralized ecosystem: DEX vs CEX</h3>
                                </div>
                                <p>Dec 6, 2021</p>
                            </div>
                        </a></NavLink>
                        <NavLink exact to='/singleBlog'><a href="" className={styles['container']}>
                            <img alt="" src="https://images.prismic.io/byont-website/928c7934-8f1d-4d3f-9d59-fcdecd6d6bbb_02.png?auto=compress,format&amp;rect=0,0,1280,720&amp;w=512&amp;h=288" width="200" height="140" />
                            <div>
                                <div className={styles['blogcontent']}>
                                    <Label>DAOs</Label>
                                    <h3>What is a Decentralized Autonomous Organization (DAO)?</h3></div>
                                <p>Jan 3, 2022</p></div>
                        </a></NavLink>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div >
        </div>
    );
};