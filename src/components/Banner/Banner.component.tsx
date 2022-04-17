import React, { useEffect } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Typewriter from 'typewriter-effect/dist/core';
import './Banner.scss';
import Women from 'src/assets/images/woman.png';
import Men from "src/assets/images/man.png";
import Analytics from 'src/assets/images/analytics.svg';
import Calendar from "src/assets/images/calendar.svg";
import Person from "src/assets/images/person.svg";
import FingerPrint from "src/assets/images/finger-print.svg";
import Coconut from "src/assets/images/coconut.svg";
import Logout from "src/assets/images/logout.svg";
import Plane from "src/assets/images/plane-1.svg";
import Law from "src/assets/images/law.svg";
export const Banner: React.FC = () => {

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
        <div className='bannerSection sectionPadding'>
            <div className="wrapper">
                <Grid>
                    <Grid.Row className='verticalAlign'>
                        <Grid.Column computer={8} tablet={8} mobile={16} className={'leftCol'}>
                            <div >
                                <Header as="h1" content='Unlocking the full potential of blockchain by' />
                                <div id='typeWriter' className={'typewritter'}>
                                </div>

                            </div>
                        </Grid.Column>
                        <Grid.Column computer={8} tablet={8} mobile={16} className={'rightCol'}>
                            <div className={"orbit"}>
                                <div className={"center-image"}>
                                    <img src={Women} alt="" />
                                    <img src={Men} alt="" />
                                </div>
                                <ul>
                                    <li>
                                        <div><img src={Analytics} alt="" /></div>
                                        <p>Publishing NFTs</p>
                                    </li>
                                    <li>
                                        <div><img src={Calendar} alt="" /></div>
                                        <p>Crypto SWAP</p>
                                    </li>
                                    <li>
                                        <div><img src={Person} alt="" /></div>
                                        <p>Metaverse</p>
                                    </li>
                                    <li>
                                        <div><img src={FingerPrint} alt="" /></div>
                                        <p>Solutions</p>
                                    </li>
                                    <li>
                                        <div><img src={Coconut} alt="" /></div>
                                        <p>Exchange</p>
                                    </li>
                                    <li>
                                        <div><img src={Logout} alt="" /></div>
                                        <p>Wallet</p>
                                    </li>
                                    <li>
                                        <div><img src={Plane} alt="" /></div>
                                        <p>Blockchain</p>
                                    </li>
                                    <li>
                                        <div><img src={Law} alt="" /></div>
                                        <p>Games, Music</p>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className={styles['rightCol']}>
                                <video autoPlay loop>
                                    <source src={video} type='video/mp4' />
                                </video>
                            </div> */}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    );
}