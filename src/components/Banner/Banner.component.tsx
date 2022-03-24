import React from 'react';
import { NavLink } from 'react-router-dom';
import { Grid, Header, Button } from 'semantic-ui-react';
// import video from 'src/assets/images/video.mp4';
import Typewriter from 'typewriter-effect/dist/core';
import styles from './Banner.module.scss';

export const Banner: React.FC = () => {
    const video = require('src/assets/images/video.mp4');
    const typeWritterEle: HTMLElement | null = document.getElementById('typeWritter');

    // useEffect(() => {
    var typewriter = new Typewriter(typeWritterEle, {
        loop: true,
        delay: 75,
    });

    typewriter
        .pauseFor(2500)
        .typeString('Publishing NFTs')
        .pauseFor(300)
        .deleteChars(15)
        .typeString('A Crypto SWAP Platform')
        .pauseFor(300)
        .deleteChars(22)
        .typeString('Nova Metaverse')
        .pauseFor(300)
        .deleteChars(14)
        .typeString('Nova Solutions')
        .pauseFor(300)
        .deleteChars(14)
        .typeString('Nova Exchange, Wallet')
        .pauseFor(300)
        .deleteChars(21)
        .typeString('Nova Blockchain, Games, Music')
        .pauseFor(300)
        .deleteChars(29)
        .pauseFor(1000)
        .start();
    // }, [])

    return (
        <div className={[styles['bannerSection'], "sectionPadding"].join(' ')}>
            <div className="wrapper">
                <Grid>
                    <Grid.Row className='verticalAlign'>
                        <Grid.Column computer={8} tablet={8} mobile={16}>
                            <div className={[styles['leftCol'], 'allTextWhite'].join(' ')}>
                                <Header as="h1" content='Unlocking the full potential of blockchain by' />
                                <div id='typeWritter' className={[styles['typewritter'], 'blueColor'].join(' ')}>

                                </div>
                                <div className={styles["buttonSec"]}>
                                    <NavLink exact to='/signIn'>
                                        <Button secondary>Sign in</Button></NavLink>
                                    <Button primary content='Sign up' />
                                </div>

                            </div>
                        </Grid.Column>
                        <Grid.Column computer={1} tablet={1}></Grid.Column>
                        <Grid.Column computer={7} tablet={8} mobile={16}>
                            <div className={styles['rightCol']}>
                                <video src={video} autoPlay loop></video>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}