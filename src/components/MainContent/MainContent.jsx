import React, {PureComponent} from 'react';
import {connect} from 'react-redux'

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


import "./MainContent.css"

import ArtboardsForm from './ArtboardsForm/ArtboardsForm';

class MainContent extends PureComponent {
    render() {
        const {activeArtboardId, isDarkTheme, bgColor, signIn} = this.props;

        return (
            <div className={`container ${isDarkTheme ? 'grey' : ''}`} style={{backgroundColor: bgColor}}>
                {
                    !activeArtboardId ?
                        (<Grid
                            container
                            item
                            xs={3}
                            className="center-block"
                        >
                            <Paper>
                                <div className={`center-text ${isDarkTheme ? 'lighterGrey' : ''}`}
                                     style={{backgroundColor: bgColor}}>
                                    <Typography variant="h6">
                                        Welcome to Pilcro!
                                    </Typography>
                                    <Typography className="grey-text">
                                        Create brand Artboards, then store and share them with your Google Drive.
                                    </Typography>
                                </div>
                                <div className={`block-buttons ${isDarkTheme ? 'lighterGrey' : ''}`}>
                                    <Button variant="contained" className="demo-button">
                                        SHOW DEMO
                                    </Button>
                                    <Button variant="contained" color="secondary" className="sign-button"
                                            onClick={signIn}>
                                        SIGN IN
                                    </Button>
                                </div>
                            </Paper>

                        </Grid>)
                        : (<div className={`fewInputs ${isDarkTheme ? 'grey' : ''}`}>
                            <ArtboardsForm
                                isDarkTheme={this.props.isDarkTheme}
                            />
                        </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = store => ({
    activeArtboardId: store.artboards.activeArtboardId
});

export default connect(mapStateToProps)(MainContent);
