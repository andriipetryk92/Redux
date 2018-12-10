import React from 'react';
import {connect} from 'react-redux'

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import LoginGoogle from './LoginGoogle';
import Divider from '@material-ui/core/Divider';
import arrow from '../../assets/arrow.png';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MenuHeader from './MenuHeader/MenuHeader.jsx';

import './Header.css';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            anchorEl: null,
            bgColor: '#f5f5f5',
        };

        this.progeressBarRef = React.createRef();
    }

    openGoogle = () => window.open("https://drive.google.com/drive/my-drive", "_blank");
    toTweeter = () => window.open('https://twitter.com/intent/tweet?via=PilcroTech&amp;hashtags=brandconsistency%2Cbrandsoftware%2Cgsuite&amp;text=Love%20%E2%9D%A4%EF%B8%8F%20using%20%40PilcroTech%20for%20my%20brand%20assets!%20https%3A%2F%2Fwww.pilcro.com%2F', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    signIn = () => window.open('https://accounts.google.com/signin/oauth?client_id=611046790846-25t9vou8ldh1jp3ug4l46h1be9unjn0j.apps.googleusercontent.com&as=NCEPWoblwTf5l4L4ZJQ_RA&nosignup=1&destination=https://artboard.pilcro.com&approval_state=!ChRWMWl2NXdmanhEa0RlOGMxUzBScRIfdzhxZlVuTjFreEVSOERFdWhZOThQYy1sRTBwVWRSWQ%E2%88%99APNbktkAAAAAW_6SLHCJM3l6NWweP7xZNHgsyYW3TrDk&oauthgdpr=1&xsrfsig=AHgIfE-2RGBmQzLNzByR_pJ3LNWs_9j7AA', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');

    changeColor = () => {
        this.props.onThemeChange()
    };


    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open
        });
    };
    handleClick = () => {
        this.setState({
            isMenuOpened: !this.state.isMenuOpened
        });
    };

    newArt = () => {
        const id = this.props.count + 1;
        const name = 'New Artboard ' + id;

        this.setState({
            'left': false
        });
        this.props.addNewArtBoard({
            name, id
        });
    };


    render() {

        const {artboards} = this.props;
        const bgColor = this.props.isDarkTheme ? '#454545' : '#f5f5f5';
        const bgWhite = this.props.isDarkTheme ? '#424242' : '';
        const colorWhite = this.props.isDarkTheme ? 'white' : '';
        const {anchorEl} = this.state;


        const sideList = (
            <div className="drawer-left" style={{backgroundColor: bgWhite}}>
                <div className="drawer-buttons">
                    <Button className="hide-button" size="large" style={{color: colorWhite}}
                            onClick={this.toggleDrawer('left', false)}>
                        <img src={arrow} alt="arrow"/>
                        HIDE</Button>
                    <Button onClick={this.newArt} className="new-artboard-button" variant="contained" size="medium"
                            color="secondary">
                        new artboard +
                    </Button>
                </div>
                <Divider/>
                <ExpansionPanel className="panel" style={{backgroundColor: bgWhite}}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                        <Typography><i className="down-text">Don't see your Artboard below?</i></Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Typography>
                            Artboards not previously opened can be blocked for security reasons.
                            <p className="drawer-text"> To solve this issue, open the Artboard from <span
                                className="toGoogle" onClick={this.openGoogle}>Google Drive</span> or go directly to the
                                URL of the Artboard.</p>
                        </Typography>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
                <div className="panel-disabled" style={{backgroundColor: bgWhite}}
                     onClick={this.toggleDrawer('left', false)}>
                    {artboards.length === 0
                        ? (<p>No Artboards</p>)
                        : (artboards.map(artboard => (<div onClick={() => this.props.selectArtboard(artboard.id)}>
                                {artboard.name}

                            </div>))
                        )
                    }
                </div>
            </div>
        );
        return (
            <Grid
                container
                justify="space-between"
                className="header grey"
            >
                <div className="header-content">
                    <AppBar position="static" color="default">
                        <Toolbar className="header-items" style={{backgroundColor: bgColor}}>
                            <Tooltip title="Show Artboard in Google Drive" placement="bottom-start">
                                <div className="logo" onClick={this.openGoogle}>
                                    <div className="btn-img"></div>
                                </div>
                            </Tooltip>
                            <Tooltip title="View your Artboards" placement="bottom-end">
                                <Button size="medium" className="logo-button" onClick={this.toggleDrawer('left', true)}>
                                    <div className="btn-img"></div>
                                    artboards
                                </Button>
                            </Tooltip>

                            <SwipeableDrawer
                                open={this.state.left}
                                onClose={this.toggleDrawer('left', false)}>
                                {sideList}
                            </SwipeableDrawer>

                            <div className="progress"
                                 ref={this.progeressBarRef}
                                 onClick={this.handleClick}>
                                <div className="progress-button" aria-owns={anchorEl ? 'simple-menu' : undefined}
                                     aria-haspopup="true">

                                    <div className="active"></div>
                                    <div className="progress-bottom"></div>
                                </div>

                                <MenuHeader
                                    anchorEl={this.progeressBarRef.current}
                                    isOpened={this.state.isMenuOpened}
                                    toTweeter={this.toTweeter}
                                    handleClose={this.handleClick}
                                    isDarkTheme={this.props.isDarkTheme}
                                />
                                0% setup
                            </div>
                            <div className="sign-up">
                                <Tooltip title="Switch background colour" placement="bottom-end">
                                    <FormControlLabel
                                        control={
                                            <Switch color="primary" onChange={this.changeColor}
                                                    aria-label="LoginSwitch"/>
                                        }
                                    />
                                </Tooltip>
                                <LoginGoogle
                                />


                            </div>
                        </Toolbar>
                    </AppBar>
                </div>
            </Grid>
        );
    }
}

const mapStateToProps = store => ({
    artboards: store.artboards.artboardsArray,
    count: store.artboards.artboardsArray.length
})

export default connect(mapStateToProps)(Header);
