import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import styles from './Header.module.scss';


export const Header: React.FC = () => {
    return (
        <div className={styles['headerSec']}>
            <div className="wrapper">
                <Grid>
                    <Grid.Row>
                        <Grid.Column computer={2} tablet={3} mobile={8}>
                            <div className='logoText themeColor'>
                                <p>Socialize</p>
                            </div>
                        </Grid.Column>
                        <Grid.Column computer={14} tablet={13} mobile={8} className={styles['rightCol']} >
                            <Button primary>Contact Us</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        </div>
    )
};