import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import './footer.css';

export const Footer = (props) => {
    return (
        <footer>

            <p>
                <small>
                    Made by two dudes with Greek-sounding names across the globe from one another.
                </small>
            </p>

            <hr />

            <Grid columns={3} divided>
                <Grid.Row>
                    <Grid.Column>
                        <Header size="small" className="inline">
                            <a href="https://czonios.github.io" target="_blank" rel="noopener noreferrer">
                                Christos <br className="text-wrap" /> Zonios
                            </a>
                        </Header>
                        <a href="https://github.com/czonios" target="_blank" rel="noopener noreferrer">
                            <Image className="inline" src={require('./img/icons/github.png')} size="mini" />
                        </a>
                    </Grid.Column>

                    <Grid.Column>
                        <Header size="small" className="inline">Official Github repository</Header>
                        <a href="https://github.com/czonios/schedule-maker-app" target="_blank" rel="noopener noreferrer">
                            <Image className="inline" src={require('./img/icons/github.png')} size="mini" />
                        </a>
                    </Grid.Column>

                    <Grid.Column>
                        <Header size="small" className="inline">
                            <a href="https://github.com/paspheeris/portfolio" target="_blank" rel="noopener noreferrer">
                                Paul <br className="text-wrap" /> Spheeris
                            </a>
                        </Header>
                        <a href="https://github.com/paspheeris" target="_blank" rel="noopener noreferrer">
                            <Image className="inline" src={require('./img/icons/github.png')} size="mini" />
                        </a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </footer>
    );
}