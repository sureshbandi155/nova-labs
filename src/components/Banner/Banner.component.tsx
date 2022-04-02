import React, { useEffect } from 'react';
// import { video } from 'src/assets/images/video.mp4';
import { Grid, Header } from 'semantic-ui-react';
import Typewriter from 'typewriter-effect/dist/core';
import styles from './Banner.module.scss';

export const Banner: React.FC = () => {
    const video = require('src/assets/images/video.mp4');

    useEffect(() => {
        const typeWritterEle = document.getElementById('typeWriter');
        if (typeWritterEle) {
            var typewriter = new Typewriter(typeWritterEle, {
                loop: true,
                delay: 75,
            });

            typewriter
                .pauseFor(500)
                .typeString('Publishing NFTs')
                .pauseFor(300)
                .deleteChars(15)
                .typeString('A Crypto SWAP Platform')
                .pauseFor(300)
                .deleteChars(22)
                .typeString('Socialize Metaverse')
                .pauseFor(300)
                .deleteChars(19)
                .typeString('Socialize Solutions')
                .pauseFor(300)
                .deleteChars(19)
                .typeString('Socialize Exchange, Wallet')
                .pauseFor(300)
                .deleteChars(26)
                .typeString('Socialize Blockchain, Games, Music')
                .pauseFor(300)
                .deleteChars(34)
                .pauseFor(1000)
                .start();
        }
    }, []);

    return (
        <div className={[styles['bannerSection'], "sectionPadding"].join(' ')}>
            <div className="wrapper">
                <Grid>
                    <Grid.Row className='verticalAlign'>
                        <Grid.Column computer={8} tablet={8} mobile={16} className={styles['leftCol']}>
                            <div >
                                <Header as="h1" content='Unlocking the full potential of blockchain by' />
                                <div id='typeWriter' className={[styles['typewritter']].join(' ')}>
                                </div>

                            </div>
                        </Grid.Column>
                        <Grid.Column computer={1} tablet={1} className={styles['centerCol']}></Grid.Column>
                        <Grid.Column computer={7} tablet={8} mobile={16}>
                            <div className={styles['rightCol']}>
                                <video autoPlay loop>
                                    <source src={video} type='video/mp4' />
                                </video>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}