import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
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

            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <h3 className="inline">
                            <a href="https://czonios.github.io" target="_blank">
                                Christos Zonios
                            </a>
                        </h3>
                        <a href="https://github.com/czonios" target="_blank">
                            <Image className="inline" src='https://czonios.github.io/img/icons/social/github.png' size="mini" />
                        </a>
                    </Grid.Column>
                    <Grid.Column>
                        <h3 className="inline">
                            <a href="#" target="_blank">
                                Paul Spheeris
                            </a>
                        </h3>
                        <a href="https://github.com/paspheeris" target="_blank">
                            <Image className="inline" src='https://czonios.github.io/img/icons/social/github.png' size="mini" />
                        </a>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </footer>
    );
}